import React from 'react'
import "./Resume.css"

export default function Resume() {
    return (
        <div className = "container ">
            <h3 className= "resumeText pt-3">Résumé</h3>
            <div className="card">
                <div className="card-body">
                <a className = "bg-dark" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tega-daniel-a7b63a120/"  aria-label="LinkedIn"><i className="fab fa-fw fa-linkedin pl-3 float-right iconColor" ></i></a>
                    <a className = "bg-dark" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/14jtqcLXOBwhmideD1axapuqyC8r0K8hJ/view?usp=sharing"  aria-label="Download"><i className="fas fa-arrow-down float-right iconColor "></i></a>
                    <h4>Philip Daniel Oghenetega
                     </h4>
                    <p>Frontend Developer</p>
                    <hr/>
                    <h5>SUMMARY</h5> 
                    <p className="text-justify">I am passionate and dedicated in providing high-impact web solutions for diverse industry organizations, providing live scalable products.
                    I develop responsive applications with user experience as top priority.
                     I’m always ready to adapt according to project specifications irrespective of stack. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.</p>
                    <hr/>
                    <h5>SKILLS</h5>
                    <p className="text-justify" > HTML/CSS, Javascript [ES6], Bootstrap, React.js, Styled Components, GraphQL, Jquery, Git, Netlify, Search Engine Optimisation, SQL, ASP.NET.</p>
                    <hr/>
                    <h5>PROFESSIONAL EXPERIENCE</h5>
                    <h6 className="text-justify">High-Tech Synergy Solutions</h6>
                    <p  className="text-justify"> Full Stack Graduate Intern April 2021 - Present</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">■ Picked up SQL and ASP.Net</li>
                        <li className="list-group-item">■ Tasked in delevering a Service Desk Application where customers can log in requests, have interactions with the support via a livechat enabled on the platform and also rate a chat. </li>
                        <li className="list-group-item">■ Worked with pure JS, ASP.Net, SQL and Bootstrap framework(s).</li>
                        <li className="list-group-item">■ Tasked in converting the built application into Mobile.</li>
                        <li className="list-group-item">■ Tasked in creating a page that makes use of a bank api to create bank accounts for customers</li>
                        <li className="list-group-item">■ •	Currently working on an application built on React, C# and MYSQL.</li>
                    </ul>

                        <br/>
                    <h6 className="text-justify">EXPANSE TECHNOLOGY</h6>
                    <p  className="text-justify"> Graduate Intern(NYSC) November 2020 - March 2021</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">■ Worked closely with the CTO in understanding the framework..</li>
                        <li className="list-group-item">■ Tasked in delevering a personal project at least every two weeks.</li>
                        <li className="list-group-item">■ Worked with React and CSS framework(s).</li>
                        <li className="list-group-item">■ Worked closely with the UI developer, translating figma designs, interacted with API’s.</li>
                    </ul>

                        <br/>


                    <h6 className="text-justify">PATRICIA TECHNOLOGY</h6>
                    <p  className="text-justify"> Customer Care Representative May 2019 - October 2019</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">■ Managed customer concerns with the objective of maintaining positive customer relationships with an organization., with duties including signing up new customers, retrieving customer data, presenting relevant product information, and canceling services.</li>
                        <li className="list-group-item">■ Memorized entire line of company products and services, including prices and special discounts.</li>
                        <li className="list-group-item">■ Remained courteous and calm at all times, even during interactions with irate customers.</li>
                    </ul>

                    <br/>
                    
                    <h6 className="text-justify">EXOLVE TECHNOLOGY</h6>
                    <p  className="text-justify"> Web Developer(INTERNSHIP) May 2016 - October 2016</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">■ Worked closely with the CTO in understanding HTML, CSS and JavaScript. </li>
                        <li className="list-group-item">■ Assisted with the testing code in multiple browsers while shadowing senior developers on large projects.</li>
                        <li className="list-group-item">■ Knowledge of JavaScript frameworks to create rich interactive content.</li>
                    </ul>
                    <hr/>
                <h5>EDUCATION</h5>
                <h6 className="text-justify">UNIVERSITY OF LAGOS</h6>
                <p className="text-justify"> Bachelor of Science in Computer Science, October 2019</p>
                </div>
            </div>
        </div>
    )
}
