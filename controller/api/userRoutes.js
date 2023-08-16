const router = require('express').Router();
const { User } = require('../../models');
const { Expense } = require('../../models');


router.post('/register', async (req, res) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            res.status(400)
        }

    } catch () {

    }
});


router.post('/login', async (req, res) => {
    try {

    } catch () {
        
    }
});


router.post('/logout', (req, res) => {
    if
});






module.exports = router;