const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/withAuth')

router.post('/add', withAuth, async (req, res) => {
    console.log('hit the favorites route with auth');
    try{
        const favoriteData = await Favorites.create({
            name: req.body.breweryName,
            address: req.body.breweryAddress,
            website: req.body.breweryWebsite,
            user_id: req.session.user_id,
        });

        res.json({ favorite: favoriteData, message: 'Favorite added successfully' });
    }catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;