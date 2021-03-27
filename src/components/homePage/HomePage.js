import React, { Component } from 'react'
import './HomePage.css'
import {Link} from "react-router-dom"

export default class HomePage extends Component {
    render() {
        return (
            <div className = "container-fluid pt-5 align-items-center"> 
            <div className= " col-md-8 pt-5 offset-md-2">
                <h2> Hello there, </h2>
                   <p className="glitch"><span aria-hidden="true">I am Tega Daniel a front-end developer</span> I am Tega Daniel a front-end developer </p>
                   <Link to ="/projects"><button type="submit" className="button" >See Projects <i className="fas fa-arrow-right "></i></button></Link>
            </div>
            </div>
        )
    }
}
