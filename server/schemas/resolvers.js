const { Todo } = require('../models');

const resolvers = {
    Query: {
        todos: async () => {
            const todoData = await Todo.find({});
            return todoData;
        },
        todo: async (_, { _id }) => {
            const todoData = await Todo.findOne({ _id });
            return todoData;
        }
    }
};


module.exports = resolvers;