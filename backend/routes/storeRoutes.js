const express = require('express');
const router = express.Router();
const { createStore, getAllStores, getStoreUsersRatings } = require('../controllers/storeController');
const { verifyToken, isAdmin, isStoreOwner } = require('../middleware/auth');

router.post('/', verifyToken, isAdmin, createStore);
router.get('/', getAllStores);
router.get('/my-ratings', verifyToken, isStoreOwner, getStoreUsersRatings);

module.exports = router;
