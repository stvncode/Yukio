import mongoose from 'mongoose';

const user = new mongoose.Schema({
    googleId: {
        required: false,
        type: String
    },
    twitterId: {
        required: false,
        type: String
    },
    githubId: {
        required: false,
        type: String
    },
    facebookId: {
        required: false,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    isAdmin: {
        required: false,
        type: Boolean
    },
    firstName: {
        required: false,
        type: String
    },
    lastName: {
        required: false,
        type: String
    },
    email: {
        required: false,
        type: String
    },
    age: {
        required: false,
        type: Number
    },
    gender: {
        required: false,
        type: String
    },
    address: {
        required: false,
        type: String
    },
    zipCode: {
        required: false,
        type: Number
    },
    city: {
        required: false,
        type: String
    },
    phone: {
        required: false,
        type: Number
    },
});

export default mongoose.model("User", user);