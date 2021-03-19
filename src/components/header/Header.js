import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
        <nav className="navbar ">
        <p className = "textItem">TegaDaniel</p> 
        <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><i className="fas fa-align-right fa-3x"></i></a></li>
    </ul>
        </nav>
            </div>
        )
    }
}
