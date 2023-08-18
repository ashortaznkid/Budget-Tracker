const router = require("express").Router();
const { Budget, Expense } = require("../../models");
const withAuth = require("../../utils/auth");

// POST /api/budget/budget
router.post("/budget", withAuth, async (req, res) => {
  try {
    const { wants, needs, savings } = req.body;

    const newBudget = new Budget({
      wants,
      needs,
      savings,
    });

    const savedBudget = await newBudget.save();

    res.status(200).json(savedBudget);
  } catch (error) {
    res
      .status(400)
      .json({ error: "An error occurred while submitting the budget." });
  }
});

// GET api/budget
router.get("/", withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.find();
    res.status(200).json(budgetData);
  } catch (erorr) {
    res.status(400).json({ message: "Failed to retrieve budget" });
  }
});

// Need to set-up seeds, rough template NEEDS REVISION
// GET api/budget/:id (ex. api/budget/2)
router.get("/:id", withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.findByPk(req.params.id, {
      // JOIN TABLE?
      include: [{ model: Budget, through: Expense, as: "budget_expenses" }],
    });

    if (!budgetData) {
      res.status(404).json({ message: "No category found within budget!" });
      return;
    }
    res.status(200).json(budgetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
