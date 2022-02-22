const { Todo } = require('../models');

const resolvers = {
    Query: {
        todos: async () => {
            return Todo.
        }
    }
};


module.exports = resolvers;