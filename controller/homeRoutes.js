const router = require('express').Router();
const { Budget, Expense, User } = require("../models");
const withAuth = require("../utils/auth.js");


router.get('/home', withAuth, async (req, res) => {
  //grab user that logged in
  try {
    const dbUserData = await User.findByPk(req.params.id, {
      
    });

    const budget = dbBudgetData.map((budget) =>
    budget.get({ plain: true })
  );
  res.render('homepage', {
    budget,
    loggedIn: req.session.loggedIn,
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
  }
});

router.get('/budget/:category', withAuth, async (req, res) => {
  const category = req.params.category;

  try {
    const budgetCategory = await BudgetCategory.findOne({ category });

    if (!budgetCategory) {
      return res.status(400).json({ error: 'Budget category not found' });
    }

    res.json(budgetCategory);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/budget/:category/expense', async (req, res) => {
    const category = req.params.category;
  
    try {
      const expense = await Expense.findOne({ category });
  
      if (!expense) {
        return res.status(404).json({ error: 'Expense not found' });
      }
  
      res.json(expense);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;