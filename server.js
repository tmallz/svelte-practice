const routes = require('./routes');
const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening'));
});
