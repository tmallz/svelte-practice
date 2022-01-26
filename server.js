const routes = require('./routes');
const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/connection');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

const sess = {
	secret: 'Super secret secret',
	resave: false,
	saveUninitialized: true,
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening'));
});
