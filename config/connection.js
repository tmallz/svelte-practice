const Sequelize = require('sequelize');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(
		// process.env.DB_NAME,
		// process.env.DB_USER,
		// process.env.DB_PW,
		brewery_db,
		root,
		myPassword1234,
		{
			host: 'localhost',
			dialect: 'mysql',
			port: 3306,
		}
	);
}

module.exports = sequelize;
