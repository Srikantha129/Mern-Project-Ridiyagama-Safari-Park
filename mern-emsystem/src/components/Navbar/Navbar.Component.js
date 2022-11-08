import React from "react";
import './style.css'
import {Link} from 'react-router-dom';

function NavbarComponent() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Link to="/" className="navbar-brand p-0">
            <img className="img-fluid me-3" src="img/my/logo.png" alt="Logo"/>
            
        </Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/Booking" className="nav-item nav-link">Bookings</Link>
                <Link to="/service" className="nav-item nav-link">Services</Link>
                <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                        <Link to="/animal" className="dropdown-item">Our Animals</Link>
                        <Link to="/Donations" className="dropdown-item">Donations</Link>
                        <Link to="/visiting hours" className="dropdown-item">Visiting Hours</Link>
						<Link to="/volunteer" className="dropdown-item">Volunteer</Link>
                       
                       
                    </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
			  
        </div>
    </nav>





    );


}

export default NavbarComponent;