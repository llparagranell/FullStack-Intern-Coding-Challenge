import React, { useEffect, useState } from 'react';
import API from '../api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, stores: 0, ratings: 0 });

  useEffect(() => {
    API.get('/admin/stats').then(res => setStats(res.data));
  }, []);

  return (
    <div
      className="dashboard"
      style={{
        color: "#fff",
        textAlign: "center",
        margin: "2rem auto",
        background: "#2d323c",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.16)",
        maxWidth: "400px",
        padding: "2.5rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem"
      }}
    >
      <h2 style={{ color: "#4f8cff", marginBottom: "1.5rem" }}>Admin Dashboard</h2>
      <div style={{
        background: "#23272f",
        borderRadius: "8px",
        padding: "1.2rem",
        fontSize: "1.2rem",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
        marginBottom: "0.5rem"
      }}>
        Total Users: <span style={{ color: "#ffd700" }}>{stats.users}</span>
      </div>
      <div style={{
        background: "#23272f",
        borderRadius: "8px",
        padding: "1.2rem",
        fontSize: "1.2rem",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
        marginBottom: "0.5rem"
      }}>
        Total Stores: <span style={{ color: "#ffd700" }}>{stats.stores}</span>
      </div>
      <div style={{
        background: "#23272f",
        borderRadius: "8px",
        padding: "1.2rem",
        fontSize: "1.2rem",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)"
      }}>
        Total Ratings: <span style={{ color: "#ffd700" }}>{stats.ratings}</span>
      </div>
    </div>
  );
}