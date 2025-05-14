const pool = require('../config/db');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, email, address, role FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch users', details: err.message });
  }
};

exports.updatePassword = async (req, res) => {
  const { newPassword } = req.body;
  const userId = req.user.id;

  try {
    const hashed = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashed, userId]);
    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Password update failed', details: err.message });
  }
};
