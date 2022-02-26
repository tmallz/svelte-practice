const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/withAuth');

router.post('/', async (req, res) => {
  console.log('hit the favorites route with auth');
  try {
    const favoriteData = await Favorites.create({
      name: req.body.name,
      address: req.body.address,
      website: req.body.website,
      user_id: req.session.user_id,
    });

    res.json({
      favorite: favoriteData,
      message: 'Favorite added successfully',
    });
  } catch (err) {
    res.status(400).json(err);
  }
  //   console.log(
  //     req.body.breweryName,
  //     req.body.breweryAddress,
  //     req.body.breweryWebsite
  //   );
});

module.exports = router;
