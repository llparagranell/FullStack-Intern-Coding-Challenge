
const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { verifyToken, isAdmin } = require('../middleware/auth');

// GET /api/admin/stats
router.get('/stats', verifyToken, isAdmin, async (req, res) => {
  try {
    const users = await pool.query('SELECT COUNT(*) FROM users');
    const stores = await pool.query('SELECT COUNT(*) FROM stores');
    const ratings = await pool.query('SELECT COUNT(*) FROM ratings');
    res.json({
      users: parseInt(users.rows[0].count, 10),
      stores: parseInt(stores.rows[0].count, 10),
      ratings: parseInt(ratings.rows[0].count, 10),
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats', details: err.message });
  }
});

module.exports = router;
