import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'


function Navbar() {

    return (
    <nav className="navbar navbar-expand-lg m-1 sticky-top shadow navbar-light bg-light position-sticky top-0">
    <div className="container-fluid">
      <Link className="navbar-brand p-1  mx-2" to="/"></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse  navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <div class="vr"></div>
          <li className="nav-item">
            <Link className="nav-link active p-1  mx-2 " aria-current="page" to="/">Sign in</Link>
          </li>
          <div class="vr"></div>
          <li className="nav-item">
            <Link className="nav-link active p-1  mx-2 " to="/product">Register</Link>
          </li>
          <div class="vr"></div>
          <li className="nav-item">
            <Link className="nav-link active p-1  mx-2 " to="/contactUs">Contact us</Link>
          </li>
          <div class="vr"></div>
          <li className="nav-item">
            <Link className="nav-link active p-1  mx-2 " to="/about">Help</Link>
          </li>
          <div class="vr"></div>
          <li className="nav-item">
            <Link className="nav-link active p-1  mx-2 ml-1 " to="/about"><i class="fa-solid p-1 fa-user"></i>My account</Link>
          </li> 
          <div class="vr"></div>     
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;