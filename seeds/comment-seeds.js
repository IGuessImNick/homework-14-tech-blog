const { Comment } = require('../models');

const commentData = [{
        comment_text: "I feel like I cannot find a job even after I become certified through this program...",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "I hope this program can help...",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I want to code but its stressful!",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Don't let yourself get burnt out",
        user_id: 4,
        post_id: 4
    }
];

// bulkCreate comments at same time
const seedComments = () => Comment.bulkCreate(commentData);

// export the bulkCreate seedComments
module.exports = seedComments;