const { Schema, model } = require('mongoose');

const TodoSchema = new Schema(
    {
        todo: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            default: Date.now,
        },
        completed: {
            type: Boolean,
            default: false
        }
    }
);

const Todo = model('Todo', TodoSchema);

modules.export = Todo;