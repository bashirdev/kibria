import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='container-fluid '>
         <div className="row d-flex justify-content-center align-items-center">
         <div className="d-flex m-auto footer__link ">
           
           <li className="nav-item">
             <Link className="nav-link" to="#">Contact us</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="#">Our services</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="#">Carear</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="#">Social Links</Link>
           </li>
        
         </div>
         </div>
            
        </div>
    );
};

export default Footer;