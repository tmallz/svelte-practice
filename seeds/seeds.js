const sequelize = require('../config/connection');
const { User, Favorites } = require('../models');
const userData = require('./userData.json');
const breweryData = require('./breweryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const brewery of breweryData) {
    await Favorites.create({
      ...brewery,
      user_id: user[Math.floor(Math.random() * user.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
