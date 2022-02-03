const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/withAuth')

router.get('/', async (req, res, withAuth) => {
    console.log('hit the favorites route with auth');
    // try {
    //     const favorites = await Favorites.findAll({
    //     where: {
    //         userId: req.session.user_id
    //     }
    //     });
    //     res.json(favorites);
    // } catch (err) {
    //     res.status(400).json(err);
    // }
});