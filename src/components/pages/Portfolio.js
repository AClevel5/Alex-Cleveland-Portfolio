import React from 'react';
import { projects } from "../ProjectData";
import Card from "../Card";

export default function Portfolio() {
    let cards = projects.map((project) => {
        <Card
            name={project.name}
            url={project.url}
            gitHubUrl={project.gitHubUrl}
            image={project.image}

        />
    });

    return (
        <div>
            <h1>Portfolio</h1>
            <p>

            </p>
        </div>
    );
}
