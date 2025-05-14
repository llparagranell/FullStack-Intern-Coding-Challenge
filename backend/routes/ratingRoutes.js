const express = require('express');
const router = express.Router();
const { submitRating, updateRating } = require('../controllers/ratingController');
const { verifyToken } = require('../middleware/auth');

router.post('/', verifyToken, submitRating);
router.put('/:storeId', verifyToken, updateRating);

module.exports = router;
