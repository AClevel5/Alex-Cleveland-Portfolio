import React from 'react';
import resume from '../../images/Alexander-Cleveland-Resume.pdf';
import "../../styles/Resume.css";

export default function Resume() {
    return (
        <div>
            <div class="head">
                <h1>Resume</h1>
                <h4>View my <a href={resume} target="_blank" rel="noreferrer" class="resume">Resume</a></h4>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2>Front-end Proficiencies</h2>
                        <ul class="border rounded">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>Bootstrap</li>
                            <li>Bulma</li>
                            <li>Progressive Web Apps</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <h2>Back-end Proficiencies</h2>
                        <ul class="border rounded">
                            <li>SQL</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
