const { Budget, Expense, User } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');

// GET /home
router.get('/', async(req, res) => {
  if (req.session.loggedIn){
    res.redirect('/profile');
    return;
  }
  res.render('register')
});

// GET /budget/:category (ex. /budget/wants)
router.get('/profile', withAuth, async(req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Budget }],
    });
  
    const user = userData.get({ plain: true });
    console.log("Da user", user);
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /budget/:category/expense (ex. /budget/needs/expense)
router.get('/budget', async(req, res) => {
  try {
    const dbBudgetData = await Budget.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });
    const budget = dbBudgetData.map((budget) =>
    budget.get({ plain: true }));
    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }

      res.render('budgetList', {
        budget,
        countVisit: req.session.countVisit,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('Render error');
  }
});

module.exports = router;