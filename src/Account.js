import React, { useState } from 'react';

const AccountPage = () => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    purchasedItems: ['Item 1', 'Item 2', 'Item 3'],
  });

  const handleOrderListClick = () => {
    // Handle Order List button click
  };

  const handleEditProfileClick = () => {
    // Handle Edit Profile button click
  };

  const handleBuyMoreClick = () => {
    // Handle Buy More button click
  };

  return (
    <div style={{ 
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2 style={{ margin: '0' }}>Account Information</h2>
        <button 
          onClick={handleOrderListClick} 
          style={{ 
            marginLeft: 'auto',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
          }}
        >
          Order List
        </button>
      </div>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Purchased Items:</p>
      <ul>
        {user.purchasedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div style={{ display: 'flex' }}>
        <button 
          onClick={handleEditProfileClick} 
          style={{ 
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Edit Profile
        </button>
        <button 
          onClick={handleBuyMoreClick} 
          style={{ 
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
          }}
        >
          Buy More
        </button>
      </div>
    </div>
  );
};

export default AccountPage;