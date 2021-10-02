const { User } = require('../models');

const userData = [{
        username: 'IGuessImNick',
        password: 'btbamfan1!'

    },
    {
        username: 'someUser',
        password: 'password123'
    },
    {
        username: 'seige93',
        password: 'deepRockGalactic'
    },
    {
        username: 'someOtherUser',
        password: 'newpassword123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;