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
    },
};

module.exports = resolvers;