import React, { useState } from 'react';

const SellerAccountPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    // Handle edit logic
  };

  const handleAdd = () => {
    // Handle add logic
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>My Account</h1>
      <h3 style={{ textAlign: 'center' }}>Seller: John Doe</h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>My Items</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {items.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <p style={{ marginRight: '16px' }}>{item.name}</p>
              <button style={{ marginRight: '8px' }} onClick={() => handleEdit(item.id)}>
                Edit
              </button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
        </div>
        <button style={{ marginTop: '16px' }} onClick={handleAdd}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default SellerAccountPage;