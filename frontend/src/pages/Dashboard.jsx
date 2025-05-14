import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function RegisterStore() {
  const [form, setForm] = useState({ name: '', email: '', address: '', owner_id: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/stores', form); // Change endpoint as needed
      navigate('/stores'); // Change to your desired route after registration
    } catch (err) {
      setError(err.response?.data?.message || 'Store registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Store</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input placeholder="Store Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <input placeholder="Owner ID" onChange={(e) => setForm({ ...form, owner_id: e.target.value })} />
      <button type="submit">Register Store</button>
    </form>
  );
}