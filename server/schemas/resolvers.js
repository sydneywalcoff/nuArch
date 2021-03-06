const { Todo } = require("../models");

const resolvers = {
    Query: {
        todos: async () => {
            const todoData = await Todo.find({});
            return todoData;
        },
        todo: async (_, { _id }) => {
            const todoData = await Todo.findOne({ _id });
            return todoData;
        },
    },
    Mutation: {
        addTodo: async (_, args) => {
            const todoData = await Todo.create(args);
            return todoData;
        },
        deleteTodo: async (_, { _id }) => {
            const deletedTodo = await Todo.findOneAndDelete({ _id });
            return deletedTodo;
        },
        editTodo: async (_, { _id, todo, completed }) => {
            const selectedTodo = await Todo.findOneAndUpdate(
                { _id },
                { todo, completed }
            );
            return selectedTodo;
        },
    },
};

module.exports = resolvers;
