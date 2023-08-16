const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expense extends Model {}

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          amount: {
            type: DataTypes.INTEGER,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          category: {
            // hardcoded for each category... not sure how to ref
            allowNull: false,
          }
    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'expense',
    }
);

module.exports = Expense;
