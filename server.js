const routes = require('./routes');
const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/connection');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 5000;
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

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
 });

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
