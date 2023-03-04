import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const user = {name,phone,email,password};


  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value);
  }
  const handlePhone = (e) => {
    e.preventDefault()
    setPhone(e.target.value);
  }
  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value);
  }
  const handleSubmit = (e)=>{
      fetch('http://localhost:8080/register',
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((msg)=>{
                // console.log(msg)
        })
  }


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
        }}
      >
        <input
          type="text"
          name="name"
          // value={name}
          onChange={handleName}
          placeholder="Name"
          style={{ marginBottom: '10px' }}
        />
        <input
          type="text"
          name="phone"
          // value={phone}
          onChange={handleEmail}
          placeholder="Phone"
          style={{ marginBottom: '10px' }}
        />
        <input
          type="email"
          name="email"
          // value={email}
          onChange={handlePhone}
          placeholder="Email"
          style={{ marginBottom: '10px' }}
        />
        <input
          type="password"
          name="password"
          // value={password}
          onChange={handlePassword}
          placeholder="Password"
          style={{ marginBottom: '10px' }}
        />
        <button type="submit" style={{ marginBottom: '10px' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;