import React from 'react';

const styles = {
  container: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
  },
  logo: {
    height: '50px',
    width: 'auto',
    marginBottom: '10px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  link: {
    marginLeft: '10px',
    marginRight: '10px',
    color: '#333',
    textDecoration: 'none',
    fontSize: '14px',
  },
  copy: {
    fontSize: '12px',
    color: '#666',
  },
};
import logo from "./images/logo.png"
function Footer() {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <div style={styles.links}>
        <a href="/" style={styles.link}>Home</a>
        <a href="/about" style={styles.link}>About Us</a>
        <a href="/contact" style={styles.link}>Contact Us</a>
        <a href="/faq" style={styles.link}>FAQ</a>
        <a href="/terms" style={styles.link}>Terms of Service</a>
        <a href="/privacy" style={styles.link}>Privacy Policy</a>
      </div>
      <p style={styles.copy}>© 2023 AMU TechTitans. All rights reserved.</p>
    </div>
  );
}

export default Footer;
