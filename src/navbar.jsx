import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import './pseudoNav.css'
import CartPage from './Cart';

function Navbar() {

  const [isLogin,setLogin] = useState(false);
  const [isSignUp,setSignUp] = useState(false);
  const [isAdmin,setAdmin] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg m-1 sticky-top shadow navbar-light bg-light position-sticky top-0">
      <div className="container-fluid">
        <Link className="navbar-brand p-1  mx-2" to="/"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="vr"></div>
            <li className="nav-item">
              
              {
                !isLogin ? <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" bottomNavbar>
                    Sign In
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="m-1 p-2"><Link to="/userLogin">User Login</Link></li>
                    <li className="m-1 p-2"><Link to="/sellerLogin">Seller Login</Link></li>
                  </ul>
                </li>
              </ul>:<Link to='/cart'>Cart</Link>
              }
            </li>
            <div className="vr"></div>
            <li className="nav-item">
              {/* <Link className="nav-link active p-1  mx-2 " to="/product">Register</Link> */}
               {
                !isSignUp ?  <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" bottomNavbar>
                    Sign Up
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="m-1 p-2"><Link to="/userRegister">User Register</Link></li>
                    <li className="m-1 p-2"><Link to="/sellerRegister">Seller Register</Link></li>
                  </ul>
                </li>
              </ul>:null
               }
            </li>
            <div className="vr"></div>
            <li className="nav-item">
              <Link className="nav-link active p-1  mx-2 " to="/contactUs">Contact us</Link>
            </li>
            <div className="vr"></div>
            <li className="nav-item">
              <Link className="nav-link active p-1  mx-2 " to="/about">Help</Link>
            </li>
            <div className="vr"></div>
            <li className="nav-item">
             {
              isAdmin ?  <Link className="nav-link active p-1  mx-2 ml-1 " to="/adminAccount">My account</Link>: <Link className="nav-link active p-1  mx-2 ml-1 " to="/userAccount">My account</Link>
             }
            </li>
            <div className="vr"></div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;