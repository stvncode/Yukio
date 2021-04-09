import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
import passport from 'passport'

require('dotenv').config()

const app = express()

mongoose.connect(`${process.env.START_MONGODB}${process.env.DB_USER}:${process.env.DB_PASS}${process.env.END_MONGODB}`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to mongoose successfully')
})

// Middleware
app.use(express.json());
app.use(cors({ origin: "https://gallant-hodgkin-fb9c52.netlify.app", credentials: true }))

app.set("trust proxy", 1);

app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
        cookie: {
            sameSite: "none",
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
        }
    }))


app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(4000, () => {
    console.log('Server started')
})