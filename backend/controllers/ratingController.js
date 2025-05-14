const pool = require('../config/db');

exports.submitRating = async (req, res) => {
  const { storeId, rating } = req.body;
  const userId = req.user.id;

  try {
    await pool.query(
      'INSERT INTO ratings (user_id, store_id, rating) VALUES ($1, $2, $3) ON CONFLICT (user_id, store_id) DO UPDATE SET rating = EXCLUDED.rating',
      [userId, storeId, rating]
    );
    res.json({ message: 'Rating submitted/updated' });
  } catch (err) {
    res.status(500).json({ error: 'Rating submission failed', details: err.message });
  }
};

exports.updateRating = async (req, res) => {
  const { rating } = req.body;
  const userId = req.user.id;
  const storeId = req.params.storeId;

  try {
    await pool.query(
      'UPDATE ratings SET rating = $1 WHERE user_id = $2 AND store_id = $3',
      [rating, userId, storeId]
    );
    res.json({ message: 'Rating updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update rating', details: err.message });
  }
};
