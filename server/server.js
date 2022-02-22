const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const app = express();
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    
    await server.start()

    server.applyMiddleware({ app })

    console.log(`Use graphql at localhost:${PORT}${server.graphqlPath}`)
};
startServer();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Now listening at PORT ${PORT}`);
    });
})