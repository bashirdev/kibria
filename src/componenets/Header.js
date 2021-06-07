import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
 
    return (
        <nav className={`navbar navbar-expand-lg navbar-light  fixed-top dark__bg`}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{color:'#fff', letterSpacing:'3px', fontWeight:'bold'}}><strong>AnirbanIt</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Work</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carear">Carear</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Login</Link>
              </li>
              <li className="nav-item dropdown drop__down">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
           
            </ul>
          </div>
        </div>
      </nav>
            
       
    );
};

export default Header;