import React from 'react'
import './Footer.css'

function footer() {
  return (
    <>
        <footer className="footer">
            <div className="footer-content">
            <h2>Smart Farming</h2>
            <p>&copy; 2023 Smart Farming. All rights reserved.</p>
            <ul className="socials">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
            </div>
        </footer>
    </>

  )
}

export default footer
