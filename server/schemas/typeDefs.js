const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Todo {
        _id: ID,
        todo: String!,
        date: String,
        completed: Boolean
    }

    type Query {
        todo(_id: ID!): Todo
        todos: [Todo]
    }

    type Mutation {
        addTodo(todo: String!): Todo
    }
`;

module.exports = typeDefs;