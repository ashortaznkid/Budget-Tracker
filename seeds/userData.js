const { User } = require('../models');

const userData = [
    {
     "name": "John",
     "email": "Johndeer123@gmail.com",
     "password": "123abcd!"   
    },

    {
     "name": "Maria",
     "email": "mariag@gmail.com",
     "password": "iloveeggs1234!"
    }
];
const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
