import React from 'react'
import './Header.css';

function HeaderComponents() {
  return (
    <header>
        <div className="bg"></div>
        <nav className="header-navigation">
            <img className="logo" src="images/logo.png" alt="kibllis" />
            <div className="navbar-content">
                <button className="open-nav"><img src="./images/menu.svg" alt="menu" /></button>
                <div className="nav">
                    <ul className="p-600">
                        <a href="/">
                            <li>Home</li>
                        </a>
                        <a href="/">
                            <li>Contact</li>
                        </a>
                        <a href="/">
                            <li>Services</li>
                        </a>
                        <a href="/" className="nav-active">
                            <li>Explore Lands</li>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="header-content m-600">
            <div className="text">
                <h1>Trusted Real Estate
                    Developer In Nigeria</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque in massa in eget
                    blandit sit duis lacus. Euismod eu elit dui nec tellus in tempus.</p>
            </div>
            <button className="p-700">Explore Lands</button>
        </div>

        <img className="down-btn arrow-down" src="./images/arrow-down.svg" alt="scroll page down" />
    </header>
  )
}

export default HeaderComponents