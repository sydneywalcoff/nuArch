const { Todo } = require('../models');

const resolvers = {
    Query: {
        todos: async () => {
            const todoData = await Todo.find({});
            return todoData;
        }
    }
};


module.exports = resolvers;