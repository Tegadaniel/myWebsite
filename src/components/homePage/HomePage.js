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
                 <br/>
                 <br/>
                    <ul className = "nav ">
                    <li class="card-text nav-item pl-2"> GitHub<a target="_blank" rel="noreferrer" href="https://github.com/Tegadaniel/"><i className="fab fa-fw fa-github"></i></a></li>
                    <li class="card-text nav-item pl-2"> LinkedIn<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tega-daniel-a7b63a120/"><i className="fab fa-fw fa-linkedin" ></i></a></li>
                    <li class="card-text nav-item pl-2"> Gmail<a target="_blank" rel="noreferrer" href="mailto:oghenetegaphilip@gmail.com"><i className="far fa-fw fa-envelope"></i></a></li>
                    <li class="card-text nav-item pl-2"> Twitter<a target="_blank" rel="noreferrer" href="https://twitter.com/Iamtegadaniel"><i className="fab fa-fw fa-twitter"></i></a></li>
                    <li class="card-text nav-item pl-2"> Dev Community<a target="_blank" rel="noreferrer" href="https://dev.to/tegadaniel">
                    <i class="fab fa-fw fa-dev" title="tegadaniel's DEV Community Profile"></i>
                    </a></li>
                    </ul>
            </div>
            </div>
        )
    }
}
