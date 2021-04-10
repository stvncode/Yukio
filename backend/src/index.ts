import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
import passport from 'passport'

const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config()

const app = express()

mongoose.connect(`${process.env.START_MONGODB}${process.env.DB_USER}:${process.env.DB_PASS}${process.env.END_MONGODB}`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to mongoose successfully')
})

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true
    }))


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    return done(null, user)
})

passport.deserializeUser((user, done) => {
    return done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
        // Called on successful authentication
        //Insert into database
        console.log(profile)
        cb(null, profile)
    }
));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000');
    });

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/getuser", (req, res) => {
    res.send(req.user)
})

app.listen(4000, () => {
    console.log('Server started')
})