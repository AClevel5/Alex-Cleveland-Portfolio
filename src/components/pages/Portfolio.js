import React from 'react';
import { projects } from "../ProjectData";
import Card from "../Card";

export default function Portfolio() {
    let cards = projects.map((card) =>
        <Card
            name={card.name}
            url={card.url}
            gitHubUrl={card.gitHubUrl}
            image={card.image}

        />
    );

    return (
        <div>
            <h1>Portfolio</h1>
            <main className='container-fluid'>
                <div className='row justify-content-center'>
                    {cards}
                </div>
            </main>
        </div>
    );
}
