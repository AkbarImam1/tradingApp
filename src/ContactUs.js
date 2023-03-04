import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ 
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      margin: '0 auto',
    }}>
      <h2 style={{ margin: '0' }}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ display: 'block' }}>Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            style={{ 
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ display: 'block' }}>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            style={{ 
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="query" style={{ display: 'block' }}>Query</label>
          <textarea 
            id="query" 
            name="query" 
            value={formData.query} 
            onChange={handleChange}
            style={{ 
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;