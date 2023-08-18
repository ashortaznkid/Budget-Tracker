const { Expense } = require('../models');

const expenseData = [
    {
        "amount": 750,
        "description": 'carwash',
        "category": 'needs',
        "userId": 2
    }
];
const seedExpense = () => Expense.bulkCreate(expenseData);
module.exports = seedExpense;
