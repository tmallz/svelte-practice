const router = require('express').Router();
const { Favorites, User } = require('../../models');
const withAuth = require('../../utils/withAuth');

router.get('/', async (req, res) => {
  try {
    Favorites.findAll({
      include: [User],
      where: {
        user_id: req.session.user_id,
      },
    }).then((userFavorites) => {
      const favorites = userFavorites.map((favorite) =>
        favorite.get({ plain: true })
      );
      console.log(user_id);
      res.json(favorites);
    });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/add', async (req, res) => {
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
});

module.exports = router;
