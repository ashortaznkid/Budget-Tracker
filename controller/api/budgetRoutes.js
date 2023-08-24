const router = require("express").Router();
const { Budget, Expense, User } = require('../../models');

router.post('/', async(req, res) =>{
  console.log (req.body)
  try {
    const budgetData = await Budget.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(budgetData);
  } catch (error) {
    res.status(400).json(error);
  }
});

// GET api/budget
router.get('/', async(req, res) => {
  try {
    const budgetData = await Budget.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{ model: Expense }]
    });
    res.status(200).json(budgetData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Need to set-up seeds, rough template NEEDS REVISION
// GET api/budget/:id (ex. api/budget/2)
router.put('/:id', async(req, res) => {
  try {
    const budgetData = await Budget.addHook.update(req.body, {
      where: { id: req.params.id}
    });
    if(!budgetData[0]){
      res.status(404).json({ message: 'Budget is empty!'});
      return;
    }
    res.status(500).json(error);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
