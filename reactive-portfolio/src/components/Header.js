import React from 'react';
import Navigation from './Navigation';

function Header () {
    return (
        <div className="page-header">
            <div>
                <h1>Roberts Portfolio</h1>
            </div>
            <div>
                <Navigation />
            </div>
        </div>
    );
}
export default Header;