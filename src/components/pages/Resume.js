import React from 'react';
import resume from '../../images/Alexander-Cleveland-Resume.pdf';
import "../../styles/Resume.css";

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <h4>View my <a href={resume} target="_blank" rel="noreferrer" class="resume">Resume</a></h4>
            <h2>Front-end Proficiencies:</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Progressive Web Apps</li>
            </ul>
            <h2>Back-end Proficiencies:</h2>
            <ul>
                <li>SQL</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>MERN</li>
                <li>REST</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>GraphQL</li>
            </ul>

        </div>
    );
}
