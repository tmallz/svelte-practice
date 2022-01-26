const router = require('express').Router();
const { User } = require('../../models');

router.post('/signUp', async (req, res) => {
	try {
		const userData = await User.create({
			eamil: req.body.email,
			password: req.body.password,
		});

		req.session.save(() => {
			req.session.userId = userData.id;
			req.session.logged_in = true;

			res.json({ User: userData, message: 'User created successfully' });
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
