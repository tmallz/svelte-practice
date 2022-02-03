const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
	try{
		const userData = await User.findOne({ where : { email: req.body.email }});

		const validPassword = await userData.checkPassword(req.body.password);

		if(!validPassword){
			return res.status(404).json({ message: 'Invalid Credentials' });
		}
	
		await req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;
	
			res.json({ user: userData , message: 'You are now logged in' });
		});
	} catch(err){
		res.status(400).json(err)
	}

	console.log(req.session);
	console.log(req.session.logged_in, req.session.user_id);
});

router.post('/signUp', async (req, res) => {
	try {
		const userData = await User.create({
			email: req.body.email,
			password: req.body.password,
		});

		await req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;
			
			res.json({ user: userData, message: 'User created successfully' });
		});
	} catch (err) {
		res.status(400).json(err);
	}

	console.log(req.session);
	console.log(req.session.logged_in, req.session.user_id);
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
