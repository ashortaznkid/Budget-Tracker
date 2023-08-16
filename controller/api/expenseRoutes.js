const router = require("express").Router();
const { Expense } = require("../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const { amount, description, category } = req.body;

    const newExpense = new Expense({
      userId: req.userId,
      amount,
      description,
      category,
    });

    await newExpense.save();

    res.status(200).json({ message: "Expense submitted successfully." });
  } catch (error) {
    res
      .status(400)
      .json({ error: "An error occurred while submitting the expense." });
  }
});

module.exports = router;
