import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            
                <header className="panel-heading">
                    <Link to="/"> User Detail</Link>
                    <Link to="/blog/"> Blog</Link>
                  
                   
                   
                </header>
               
        </>
    )
}

export default Header;
