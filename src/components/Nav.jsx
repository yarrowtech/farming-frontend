import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">Smart Farming</Link>
      <ul className="navbar-nav">

        {/* Home */}
        <li className="nav-item">
          <HashLink className='nav-link' to="/#header">Home</HashLink>
          <ul className="dropdown-menu">

            <li><HashLink className="dropdown-item" smooth to="/#introduction">Introduction</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/#weather/pest">Weather/Pest</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/#about">About</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/#login/registration">Login/Registration</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/#contact">Contact</HashLink></li>
          </ul>
        </li>

        {/* Education Hub */}
        <li className="nav-item">
          <HashLink className='nav-link' to="/education#education_header">Education</HashLink>
          <ul className="dropdown-menu">
            <li><HashLink className="dropdown-item" smooth to="/education#articles">Articles</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/education#tips">Tips</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/education#videos">Videos</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/education#government_schemes">Government Schemes</HashLink></li>
          </ul>
        </li>

        {/* Weather & Alerts */}
        <li className="nav-item">
          {/* <Link className="nav-link" to="/weather">Weather & Pest</Link> */}
          <HashLink className='nav-link' to="/weather#w_header">Weather & Pest</HashLink>
          <ul className="dropdown-menu">
            <li><HashLink className="dropdown-item" smooth to="/weather#forecast">Forecast</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/weather#pest_alerts">Pest Alerts</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/weather#notifications">Notifications</HashLink></li>
          </ul>
        </li>

        {/* Loan Tracker */}
        <li className="nav-item">
          <Link className="nav-link" to="/loans">Loan Tracker</Link>
          <ul className="dropdown-menu">
            <li><HashLink className="dropdown-item" smooth to="/loans#apply-loan">Apply Loan</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/loans#track-loan">Track Loan</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/loans#loan-status">Loan Status</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/loans#reminders">Reminders</HashLink></li>
          </ul>
        </li>

        {/* Marketplace */}
        <li className="nav-item">
          <Link className="nav-link" to="/marketplace">Marketplace</Link>
          <ul className="dropdown-menu">
            <li><HashLink className="dropdown-item" smooth to="/marketplace#product_upload">Product Upload</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/marketplace#product_catagory">Product Category</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/marketplace#product-reviews">Product Reviews</HashLink></li>
          </ul>
        </li>

        {/* Waste Management */}
        <li className="nav-item">
          <Link className="nav-link" to="/waste">Waste Management</Link>
          <ul className="dropdown-menu">
            <li><HashLink className="dropdown-item" smooth to="/waste#recycle_tips">Recycling Tips</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/waste#composting_guides">Composting Guides</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/waste#video">Videos</HashLink></li>
          </ul>
        </li>

        {/* Admin Panel */}
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Admin Panel</Link>
          <ul className="dropdown-menu">
            <li><HashLink className="dropdown-item" smooth to="/admin#manage-users">Manage Users / Manage Stats</HashLink></li>
            <li><HashLink className="dropdown-item" smooth to="/admin#settings">Settings</HashLink></li>
          </ul>
        </li>

      </ul>
    </nav>
  );
}

export default Nav;













