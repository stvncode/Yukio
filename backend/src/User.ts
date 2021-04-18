import mongoose from 'mongoose';

const profile = new mongoose.Schema({
    firstName: {
        required: false,
        type: String
    },
    lastName: {
        required: false,
        type: String
    }
});

const user = new mongoose.Schema({
    generalId: {
        required: true,
        type: String
    },
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
    profile: profile
});

export default mongoose.model("User", user);