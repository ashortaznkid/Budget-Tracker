const router = require('express').Router();
const { Expense } = require('../models');
const withAuth = require('../../utils/auth');

// separate submission for each of the 3 expense categories
router.post('/needs', withAuth, async (req, res) => {
  try {
    const { amount, description } = req.body;
    const category = 'needs';
    //need to capture user id making submission for each catergpry

    const newExpense = new Expense({
      amount,
      description,
      category,
    });

    await newExpense.save();

    res.status(200).json({ message: 'Need submitted successfully.' });
  } catch (error) {
    res.status(400).json({ error: 'An error occurred while submitting the expense need.' });
  }
});

router.post('/wants', withAuth, async (req, res) => {
  try {
    const { amount, description } = req.body;
    const category = 'wants';

    const newExpense = new Expense({
      amount,
      description,
      category,
    });

    await newExpense.save();

    res.status(200).json({ message: 'Want submitted successfully.' });
  } catch (error) {
    res.status(400).json({ error: 'An error occurred while submitting the expense want.' });
  }
});

router.post('/savings', withAuth, async (req, res) => {
  try {
    const { amount, description } = req.body;
    const category = 'savings';

    const newExpense = new Expense({
      amount,
      description,
      category,
    });

    await newExpense.save();

    res.status(200).json({ message: 'Saving submitted successfully.' });
  } catch (error) {
    res.status(400).json({ error: 'An error occurred while submitting the expense saving.' });
  }
});

module.exports = router;
