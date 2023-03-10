import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInClick = () => {
    const user = {email,password}
    console.log(user)
    fetch(`http://localhost:8080/login/${user}`,
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((msg)=>{
            if(msg){
                // history.push('/cart')
                navigate('/cart');
            }else{
                navigate('/userRegister')
            }
    })
  };

  const handleResetPasswordClick = () => {
    // Handle Reset Password button click
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
      <h2 style={{ margin: '0' }}>Sign In</h2>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email" style={{ display: 'block' }}>Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ 
            width: '100%',
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
          }} 
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="password" style={{ display: 'block' }}>Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ 
            width: '100%',
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
          }} 
        />
      </div>
      <button 
        onClick={handleSignInClick} 
        style={{ 
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 15px',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        Sign In
      </button>
      <button 
        onClick={handleResetPasswordClick} 
        style={{ 
          backgroundColor: '#6c757d',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 15px',
          cursor: 'pointer',
        }}
      >
        Reset Password
      </button>
    </div>
  );
};

export default SignInPage;