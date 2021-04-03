import React from 'react'
import "./Resume.css"

export default function Resume() {
    return (
        <div className = "container ">
            <h3 className= "resumeText pt-3">Résumé</h3>
            <div className="card">
                <div className="card-body">
                <a className = "bg-dark" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tega-daniel-a7b63a120/"  aria-label="LinkedIn"><i className="fab fa-fw fa-linkedin pl-3 float-right iconColor" ></i></a>
                    <a className = "bg-dark" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1qqz24UCXa9U5uKeXvW_DSJGBoSHfOgEe/view?usp=sharing"  aria-label="Download"><i className="fas fa-arrow-down float-right iconColor "></i></a>
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
                    <p className="text-justify" > HTML/CSS, Javascript [ES6], Bootstrap, React.js, Styled Components, GraphQL, Jquery, Git, Netlify,Search Engine Optimisation.</p>
                    <hr/>
                    <h5>PROFESSIONAL EXPERIENCE</h5>
                    <h6 className="text-justify">EXPANSE TECHNOLOGY</h6>
                    <p  className="text-justify"> Graduate Intern(NYSC) November 2020 - Present</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">■ Worked closely with a senior dev and learnt new technologies.</li>
                        <li className="list-group-item">■ Tasked in delevering a personal project at least every two weeks.</li>
                        <li className="list-group-item">■ Worked with React and CSS framework(s).</li>
                        <li className="list-group-item">■ Converted figma designs into usable codes.</li>
                    </ul>

                        <br/>


                    <h6 className="text-justify">PATRICIA TECHNOLOGY</h6>
                    <p  className="text-justify"> Customer Care Representative May 2019 - October 2019</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">■ Handle at least 20+ calls daily, with duties including signing up new customers, retrieving customer data, presenting relevant product information, and canceling services.</li>
                        <li className="list-group-item">■ Memorized entire line of company products and services, including prices and special discounts.</li>
                        <li className="list-group-item">■ Remained courteous and calm at all times, even during interactions with irate customers.</li>
                    </ul>

                    <br/>
                    
                    <h6 className="text-justify">EXOLVE TECHNOLOGY</h6>
                    <p  className="text-justify"> Web Developer(INTERNSHIP) May 2016 - October 2016</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">■ Assist team with testing code in multiple browsers.</li>
                        <li className="list-group-item">■ Shadowing senior developers on large projects.</li>
                        <li className="list-group-item">■ Knowledge of JavaScript frameworks to create rich interactive content.</li>
                    </ul>
                    <hr/>
                <h5>EDUCATION</h5>
                <h6 className="text-justify">UNIVERSITY OF LAGOS</h6>
                <p className="text-justify"> Bachelor of Science in Computer Science, October 2019</p>
                <h6 className="text-justify">George Richards Language Institute</h6>
                <p className="text-justify"> French and Spanish Language (IN-VIEW), Expected Graduation date September 2021</p>
                </div>
            </div>
        </div>
    )
}
