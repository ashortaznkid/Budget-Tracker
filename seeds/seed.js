const sequelize = require("../config/connection");
const { Budget, User } = require("../models");

const budgetSeedData = require("./budgetSeedData.json");
const userSeedData = require("./userSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const budget = await Budget.bulkCreate(budgetSeedData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
