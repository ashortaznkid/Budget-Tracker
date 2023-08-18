const sequelize = require("../config/connection");
const seedBudget = require('./budgetData');
const seedExpense = require('./epenseData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedExpense();
  await seedBudget();

  process.exit(0);
};

seedAll();
