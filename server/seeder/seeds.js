const { faker } = require('@faker-js/faker');

const db = require("../config/connection");
const { Todo } = require("../models");

db.once("open", async () => {
    await Todo.deleteMany({})
    // create thoughts
    for (let i = 0; i < 10; i += 1) {
        const todo = faker.lorem.words(
            Math.round(Math.random() * 4) + 1
        );
        await Todo.create({ todo })
    }

    console.log('all done :)')
    process.exit(0);
});
