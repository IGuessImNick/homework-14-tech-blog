const { Post } = require('../models');

const postData = [{
        title: "Fear of Job Insecurity",
        content: "I am afraid to leave my current job in pursuit of a new career.",
        user_id: 1

    },
    {
        title: "So much to learn!",
        content: "How am I supposed to learn all the stuff necessary to be a developer?",
        user_id: 2
    },
    {
        title: "What is the point...",
        content: "How can explain to you that basically no one under the age of 40 thinks good things will ever happen again?",
        user_id: 3
    },
    {
        title: "I miss socializing",
        content: "I feel irresponsible going out and doing things now. When I do, I feel surrounded by wanton selfishness, cruelty, and a complete disregard for the well being of others.",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;