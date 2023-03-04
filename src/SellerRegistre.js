import React, { useState } from 'react';

const SellerRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    gstNo: '',
    panNo: '',
    shopType: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form data to backend or do validation
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} style={{ margin: '10px', padding: '5px' }} />
        <input type="text" name="shopName" placeholder="Shop Name" value={formData.shopName} onChange={handleInputChange} style={{ margin: '10px', padding: '5px' }} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} style={{ margin: '10px', padding: '5px' }} />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} style={{ margin: '10px', padding: '5px' }} />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} style={{ margin: '10px', padding: '5px' }} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} style={{ margin: '10px', padding: '5px' }} />
        <input type="text" name="gstNo" placeholder="GST No" value={formData.gstNo} onChange={handleInputChange} style={{ margin: '10px', padding: '5px' }} />
        <input type="text" name="panNo" placeholder="PAN No" value={formData.panNo} onChange={handleInputChange} style={{ margin: '10px', padding: '5px' }} />
        <input type="text" name="shopType" placeholder="Shop Type" value={formData.shopType} onChange={handleInputChange} style={{ margin: '10px', padding: '5px' }} />
        <button type="submit" style={{ margin: '10px', padding: '5px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
      </form>
    </div>
  );
};

export default SellerRegister;