import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
            
            <nav>

                <Link to='/'>Home</Link>
                <Link to='/OrderReview'>OrderReview</Link>
                <Link to='/Dashboard'>Dashboard</Link>
                <Link to='/Blogs'>Blogs</Link>
                <Link to='/About'>About</Link>
                <Link to='/NotFound'>NotFound</Link>
                
                

            </nav>
            
        </div>
    );
};

export default Header;