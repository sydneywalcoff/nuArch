const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Now listening at PORT ${PORT}`);
});