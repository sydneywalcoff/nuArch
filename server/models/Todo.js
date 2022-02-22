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
        }
    }
);

const Todo = model('Todo', TodoSchema);

modules.export = Todo;