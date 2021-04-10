import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
import passport from 'passport'

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const GitHubStrategy = require('passport-github').Strategy;

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

// passport.use(new TwitterStrategy({
//     consumerKey: "",
//     consumerSecret: "",
//     callbackURL: "http://localhost:4000/auth/twitter/callback"
// },
//     function (accessToken: any, refreshToken: any, profile: any, cb: any) {
//         // Called on successful authentication
//         //Insert into database
//         console.log(profile)
//         cb(null, profile)
//     }
// ));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK
},
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
        // Called on successful authentication
        //Insert into database
        console.log(profile)
        cb(null, profile)
    }
));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK
},
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
        // Called on successful authentication
        //Insert into database
        console.log(profile)
        cb(null, profile)
    }
));

// passport.use(new InstagramStrategy({
//     clientID: '905316623366359',
//     clientSecret: '975c2f0353d0b89bc19d34967a2727ba',
//     callbackURL: "http://localhost:4000/auth/instagram/callbackk"
// },
//     function (accessToken: any, refreshToken: any, profile: any, cb: any) {
//         // Called on successful authentication
//         //Insert into database
//         console.log(profile)
//         cb(null, profile)
//     }
// ));





app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000');
    });

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000');
    });

app.get('/auth/github',
    passport.authenticate('github'));

app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000');
    });

app.get('/auth/instagram',
    passport.authenticate('instagram'));

app.get('/auth/instagram/callback',
    passport.authenticate('instagram', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
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