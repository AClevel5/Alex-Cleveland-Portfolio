import React from 'react';
import { BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs'
import "../styles/Footer.css";



export default function Footer() {

    return (
        <footer className="footer text-center">
            <a href="https://www.linkedin.com/in/alexander-cleveland-21656886/" target="_blank" rel="noreferrer" class="icon"><BsLinkedin color="gray" /></a>
            <a href="https://github.com/AClevel5" target="_blank" rel="noreferrer" class="icon"><BsGithub color="gray" /></a>
            <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer" class="icon"><BsStackOverflow color="gray" /></a>
        </footer>
    );
}

