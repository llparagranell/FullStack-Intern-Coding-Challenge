import React, { useEffect, useState } from 'react';
import API from '../api';

export default function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    API.get('/stores').then((res) => setStores(res.data));
  }, []);

  return (
    <div className="store-list">
      <h2 style={{ color: "#fff", textAlign: "center" }}>Stores</h2>
      {stores.length === 0 ? (
        <p style={{ color: "#ccc", textAlign: "center" }}>No stores found.</p>
      ) : (
        stores.map((store) => (
          <div className="store-item" key={store.id}>
            <h3>{store.name}</h3>
            <p>Address: {store.address}</p>
            <p>Email: {store.email}</p>
            <p>
              Average Rating:{" "}
              <span className="rating-stars">
                {store.average_rating ? (
                  <>
                    {"★".repeat(Math.round(store.average_rating))}
                    {"☆".repeat(5 - Math.round(store.average_rating))}
                    <span style={{ marginLeft: 8, color: "#aaa" }}>
                      ({store.average_rating})
                    </span>
                  </>
                ) : (
                  "N/A"
                )}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
}