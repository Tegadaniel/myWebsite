import React, { Component } from 'react'
import {Link} from "react-router-dom"
import './Header.css'


export default class Header extends Component {
    render() {
        return (
            <div>
        <nav className="navbar ">
        <Link to="/"><h1 className = "textItem">TegaDaniel</h1> </Link>
        <ul className="nav navbar-nav navbar-right">
      <li><i className="fas fa-align-right fa-3x textAlign" data-toggle="modal" data-target="#myModal"></i></li>
    </ul>
        </nav>

  <div className="modal fade" id="myModal" data-backdrop="static" data-keyboard="false" role="dialog">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
         
        </div>
        <div className="modal-body">
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link  to="/">
                <p className="nav-link active">Home</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link  to="/projects">
                <p className="nav-link active">Projects</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link  to="/">
                <p className="nav-link active">About</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link  to="/">
                <p className="nav-link active">Contact</p>
                </Link>
            </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
            </div>
        )
    }
}
