const { Budget } = require('../models');

const budgetData = [
    {
        "income": 7500,
        "needs": 12,
        "wants": 49,
        "savings":100,
        "userId": 2
    }
];
const seedBudget = () => Budget.bulkCreate(budgetData);
module.exports = seedBudget;