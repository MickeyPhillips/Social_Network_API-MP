const { Schema, model } = require('mongoose')

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    }
    // Reactions
})

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought