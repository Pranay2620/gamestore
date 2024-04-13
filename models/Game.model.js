import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export const Game = mongoose.model('Game', GameSchema)