const router = require('express').Router();
const budgetRoutes = require('./budgetRoutes.js');
const userRoutes = require('./userRoutes.js');
// const expenseWantsRoutes = require('./expenseWantsRoutes');
// const expenseNeedsRoutes = require('./expenseNeedsRoutes');
// const expenseSavingsRoutes = require('./expenseSavingsRoutes');


router.use('/user', userRoutes);
router.use('/budget', budgetRoutes);
// router.use('/expenseWants', expenseWantsRoutes);
// router.use('/expenseNeeds', expenseNeedsRoutes);
// router.use('/expenseSavings', expenseSavingsRoutes);


module.exports = router;