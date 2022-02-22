const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
    {
        todo: {
            type: String,
            require: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Todo = model("Todo", todoSchema);

module.exports = Todo;