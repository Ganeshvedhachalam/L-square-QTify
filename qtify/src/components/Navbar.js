import React from 'react';
import "./Navbar.css"



function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="navbar-brand">My App</a>
                <form className="navbar-form">
                    <div className="search-container">
                        <input type="text" className="form-control" placeholder="Search for a song" />
                    </div>
                    
                    <button type="submit" className="feedbackbtn">Give feedback</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
