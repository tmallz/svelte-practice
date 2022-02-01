const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
	console.log('made it to login');
	console.log(req.body);
	const userData = await User.findOne({ where : { email: req.body.email }});
	console.log(userData);
	if (!userData) {
		return res.status(404).json({ message: 'Invalid Credentials' });
	}
	const validPassword = await userData.checkPassword(req.body.password);

	if(!validPassword){
		return res.status(404).json({ message: 'Invalid Credentials' });
	}

	req.session.save(() => {
		req.session.userId = userData.id;
		req.session.logged_in = true;

		res.json({ user: userData , message: 'You are now logged in' });
	});

});

router.post('/signUp', async (req, res) => {
	console.log('made it to the signUp route');
	console.log(req.body);
	try {
		const userData = await User.create({
			email: req.body.email,
			password: req.body.password,
		});

		console.log('made userData');

		req.session.save(() => {
			req.session.userId = userData.id;
			req.session.logged_in = true;

			res.json({ User: userData, message: 'User created successfully' });
		});
	} catch (err) {
		console.log(res);
		res.status(400).json(err);
	}
});

module.exports = router;
