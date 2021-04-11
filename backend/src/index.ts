import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
import passport from 'passport'
import User from './User'
import { IUser } from './types'

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

require('dotenv').config()

const app = express()

mongoose.connect(`${process.env.START_MONGODB}${process.env.DB_USER}:${process.env.DB_PASS}${process.env.END_MONGODB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to mongoose successfully')
})

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
    }))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: IUser, done: any) => {
    return done(null, user._id);
});

passport.deserializeUser((id: string, done: any) => {

    User.findById(id, (err: Error, doc: IUser) => {
        // Whatever we return goes to the client and binds to the req.user property
        return done(null, doc);
    })
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
    function (_: any, __: any, profile: any, cb: any) {
        User.findOne({ googleId: profile.id }, async (err: Error, doc: IUser) => {

            if (err) {
                return cb(err, null)
            }
            if (!doc) {
                // Create One
                const newUser = new User({
                    googleId: profile.id,
                    username: profile.name.givenName
                })
                await newUser.save()
                cb(null, newUser)
            }
            cb(null, doc)
        })
    }
));

console.log()

// passport.use(new TwitterStrategy({
//     consumerKey: "",
//     consumerSecret: "",
//     callbackURL: "http://localhost:4000/auth/twitter/callback"
// },
//     function (_: any, __: any, profile: any, cb: any) {
//         User.findOne({ twiitterId: profile.id }, async (err: Error, doc: IUser) => {

//             if (err) {
//                 return cb(err, null)
//             }
//             if (!doc) {
//                 // Create One
//                 const newUser = new User({
//                     twitterId: profile.id,
//                     username: profile.username
//                 })
//                 await newUser.save()
//             cb(null, newUser)
// }
// cb(null, doc)
//         })
//     }
// ));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK
},
    function (_: any, __: any, profile: any, cb: any) {
        User.findOne({ githubId: profile.id }, async (err: Error, doc: IUser) => {

            if (err) {
                return cb(err, null)
            }

            if (!doc) {
                // Create One
                const newUser = new User({
                    githubId: profile.id,
                    username: profile.username
                })
                await newUser.save()
                cb(null, newUser)
            }
            cb(null, doc)
        })
    }
));

// passport.use(new InstagramStrategy({
//     clientID: process.env.INSTA_CLIENT_ID,
//     clientSecret: process.env.INSTA_CLIENT_SECRET,
//     callbackURL: "/auth/instagram/callback"
// },
//     function (_: any, __: any, profile: any, cb: any) {
//         // Called on successful authentication
//         //Insert into database
//         console.log(profile)
//         cb(null, profile)
//     }
// ));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
},
    function (_: any, __: any, profile: any, cb: any) {
        User.findOne({ facebookId: profile.id }, async (err: Error, doc: IUser) => {

            if (err) {
                return cb(err, null)
            }

            if (!doc) {
                // Create One
                const newUser = new User({
                    facebookId: profile.id,
                    username: profile.displayName
                })
                await newUser.save()
                cb(null, newUser)
            }
            cb(null, doc)
        })
    }
));

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
        res.redirect('http://localhost:3000');
    });

app.get('/auth/facebook',
    passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
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

app.get("/auth/logout", (req, res) => {
    if (req.user) {
        req.logout();
        res.send("done");
    }
})

app.listen(4000, () => {
    console.log('Server started')
})