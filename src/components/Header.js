import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1 className="heading "> VEALIZE</h1>
            <div className="bar">
                <h4> <Link to="/" style={{color: 'rgb(42, 63, 65)'}}> Home </Link> </h4>
                <h4> <Link to="crypto" style={{color: 'rgb(42, 63, 65)'}}> Cryptocurrency </Link> </h4>
                <h4> <Link to="covid" style={{color: 'rgb(42, 63, 65)'}}> Covid</Link> </h4>
                <h4> <Link to="barchart" style={{color: 'rgb(42, 63, 65)'}}> Bar Chart</Link> </h4>
            </div>
        </div>
    )
}

export default Header;
