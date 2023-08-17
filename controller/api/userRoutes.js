const router = require('express').Router();
const { User } = require('../../models');
const { Expense } = require('../../models');


router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email already registered' });
        }

        const newUser = new User({
            email,
            password,
          });

          await newUser.save();

          res.status(200).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(400).json({ message: 'An error occurred' });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: 'Invalid email or password, please try again' });
        }
    
        const passwordMatch = await userData.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(400).json({ message: 'Invalid email or password, please try again' });
        }
    
        req.session.save(() => {
            req.session.user_email = user.id;
            req.session.logged_in = true;
            
            res.json({ user: user, message: 'You are now logged in!' });
          });
      
        } catch (err) {
          res.status(400).json(error);
        }
});


router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
});

module.exports = router;