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
    }
});

export default mongoose.model("User", user);