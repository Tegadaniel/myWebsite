import React, { Component } from 'react'
import {Link} from "react-router-dom"
import './Header.css'


export default class Header extends Component {
    render() {
        return (
            <div>
        <nav className="navbar ">
        <Link to="/"><p className = "textItem">TegaDaniel</p> </Link>
        <ul className="nav navbar-nav navbar-right">
      <li><Link to="/linkpage"><i className="fas fa-align-right fa-3x"></i></Link></li>
    </ul>
        </nav>
            </div>
        )
    }
}
