import { express } from 'express';
import { cors } from 'cors';
import { path } from 'path';
import { sequelize } from './config/connection';

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.static('public'));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
	console.log(`Server is up at port ${port}`);
});

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening'));
});
