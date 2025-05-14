const express = require('express');
const router = express.Router();
const { getAllUsers, updatePassword } = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, getAllUsers);
router.put('/update-password', verifyToken, updatePassword);

module.exports = router;
