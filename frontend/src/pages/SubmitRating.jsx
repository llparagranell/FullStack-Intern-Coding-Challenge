import React, { useState, useEffect } from 'react';
import API from '../api';

export default function SubmitRating() {
  const [stores, setStores] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    API.get('/stores').then((res) => setStores(res.data));
  }, []);

  const handleStarClick = (storeId, value) => {
    setRatings({ ...ratings, [storeId]: value });
  };

  const handleSubmit = async (storeId) => {
    const value = ratings[storeId];
    if (value < 1 || value > 5) return alert("Rating must be between 1 and 5");
    await API.post('/ratings', { storeId, rating: value });
    alert("Rating submitted!");
  };

  return (
    <div className="ratings-list">
      <h2 style={{ color: "#fff", textAlign: "center" }}>Submit Ratings</h2>
      {stores.length === 0 ? (
        <p style={{ color: "#ccc", textAlign: "center" }}>No stores found.</p>
      ) : (
        stores.map((store) => (
          <div className="rating-item" key={store.id}>
            <h3>{store.name}</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "row", gap: "0.2rem" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      cursor: "pointer",
                      color: (ratings[store.id] || 0) >= star ? "#ffd700" : "#444",
                      fontSize: "1.7rem",
                      transition: "color 0.2s"
                    }}
                    onClick={() => handleStarClick(store.id, star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button onClick={() => handleSubmit(store.id)}>Rate</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}