import React from 'react';
import "../../styles/About.css"
import profilePic from "../../images/Alex.png";

export default function About() {
    return (
        <div class="about container text-center">

            <div class="row">

                <img class="col-md-3" src={profilePic} alt="Alex Cleveland"></img>
                <div class="col-md-9">
                    <h1>About Me</h1>
                    <p>
                        I have spent my professional career in various types of sales roles consisting of rental cars, software, and most recently commercial kitchens.
                        A rule I live by is to always be better than yesterdays me. I became to feel stagnant in my current role and desired a career that had endless learning opportunities.
                        That is what brought me to the University of Denver Full Stack Coding Bootcamp.
                    </p>
                    <p>
                        My Software engineering journey started with a free online Python class a friend recommended to me. I quickly finished that course and knew that this is something I wanted to commit to.
                        The Denver University Bootcamp has been such a wonderful experience and I am very appreciative of the quality of education it has provided me.
                    </p>
                    <p>Next steps are to find an employer that I can prove my worth to, and help them grow as I grow myself.</p>
                </div>
            </div>
        </div>
    );
}
