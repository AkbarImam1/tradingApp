import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([    { id: 1, name: 'Item 1', quantity: 1 },    { id: 2, name: 'Item 2', quantity: 2 },    { id: 3, name: 'Item 3', quantity: 1 },  ]);

  const handleAddItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handlePayNow = () => {
    // Handle payment processing
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
      <h2 style={{ margin: '0' }}>My Cart</h2>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse',
        marginTop: '10px',
      }}>
        <thead>
          <tr style={{ 
            borderBottom: '1px solid #ccc',
            padding: '10px',
            textAlign: 'left',
            fontWeight: 'bold',
          }}>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleRemoveItem(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => handleAddItem(item.id)}>+</button>
              </td>
              <td>$10.00</td>
              <td>${item.quantity * 10}.00</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
      }}>
        <button style={{ 
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px',
          fontSize: '16px',
          cursor: 'pointer',
        }} onClick={handlePayNow}>Pay Now</button>
        <div style={{ fontWeight: 'bold' }}>
          Total: ${cartItems.reduce((acc, item) => acc + item.quantity * 10, 0)}.00
        </div>
      </div>
    </div>
  );
};

export default CartPage;