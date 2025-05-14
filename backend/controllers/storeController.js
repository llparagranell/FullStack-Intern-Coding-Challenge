const pool = require('../config/db');

exports.createStore = async (req, res) => {
  const { name, email, address, owner_id } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO stores (name, email, address, owner_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, address, owner_id]
    );
    res.status(201).json({ message: 'Store created', store: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Store creation failed', details: err.message });
  }
};

exports.getAllStores = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.*, 
        ROUND(AVG(r.rating), 2) as average_rating 
      FROM stores s
      LEFT JOIN ratings r ON s.id = r.store_id
      GROUP BY s.id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stores', details: err.message });
  }
};

exports.getStoreUsersRatings = async (req, res) => {
  const ownerId = req.user.id;

  try {
    const result = await pool.query(`
      SELECT u.name, u.email, r.rating
      FROM ratings r
      JOIN users u ON r.user_id = u.id
      JOIN stores s ON r.store_id = s.id
      WHERE s.owner_id = $1
    `, [ownerId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch ratings', details: err.message });
  }
};
