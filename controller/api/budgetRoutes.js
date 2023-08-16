const router = require('express').Router();
const { Budget, Expense, } = require('../../models');

// GET entire budget
router.get('/', withAuth, async (req, res) => {
    try {
        const budgetData = await Budget.findAll();
        res.status(200).json(budgetData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// Need to set-up seeds, rough template NEEDS REVISION
router.get('/:id', withAuth, async (req, res) => {
    try {
        const budgetData = await Budget.findByPk( req.params.id, {
            // JOIN TABLE?
            include: [{ model: Budget, through: Expense, as: 'budget_expenses' }]
        });

        if (!budgetData) {
            res.status(404).json({ message: 'No category found within budget!' });
            return;
        }
        res.status(200).json(budgetData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// // CREATE a budget category
// router.post('/', async (req, res) => {
//     try {
        
//     }
// }

module.exports = router;