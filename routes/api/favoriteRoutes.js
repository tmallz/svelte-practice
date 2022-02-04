const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/withAuth')

router.get('/test', withAuth, async (req, res) => {
    console.log('hit the favorites route with auth');
    try{
        console.log(req.session.logged_in, req.session.user_id);
    }catch(err){
        res.status(400).json(err, {message: 'the route is still not wokring'});
    }
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

module.exports = router;