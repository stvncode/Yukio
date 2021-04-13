import mongoose from 'mongoose';

const food = new mongoose.Schema({
    types: {
        required: false,
        type: String
    }
});

export default mongoose.model("Food", food);