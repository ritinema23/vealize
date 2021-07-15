import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1 className="heading "> VEALIZE</h1>
            <div className="bar">
                <h4> <Link to="/"> Home </Link> </h4>
                <h4> <Link to="crypto"> Cryptocurrency </Link> </h4>
                <h4> <Link to="covid"> Covid</Link> </h4>
                <h4> <Link to="barchart"> Bar Chart</Link> </h4>
            </div>
        </div>
    )
}

export default Header;
