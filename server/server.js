const express = require('express');

const app = express();
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Now listening at PORT ${PORT}`);
    });
})