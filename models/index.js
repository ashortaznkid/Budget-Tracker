const User = require('./User.js');
const Budget = require('./Budget.js');
const Expense = require('./Expense.js');

// TO-DO: Define relationships between models (e.g., does user have one budget? does budget belong to user?)
Budget.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Expense, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasOne(Budget, {
    foreignKey: 'user_id'
});

module.exports = { User, Budget, Expense };