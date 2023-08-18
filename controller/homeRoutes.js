const router = require('express').Router();
const { budgetData } = require("../../budgetData");
const { expenseData } = require("../../expenseData");
const withAuth = require("../../utils/auth");

router.get('/budget', withAuth, (req, res) => {
  const allBudgetCategories = budgetData.getAllBudgetCategories();
  res.json(allBudgetCategories);
});

router.get('/budget/:category', withAuth, (req, res) => {
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