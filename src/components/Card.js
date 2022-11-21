import { BsGithub } from "react-icons/bs";
import "../styles/Card.css";

export default function Card(props) {
    const name = props.name;
    const url = props.url;
    const gitHubUrl = props.gitHubUrl;
    const image = props.image;


    return (
        <div class="card col-lg-3 custom-card">
            <img title={name} className="card-image" alt={name} src={image} />
            <div className="overlay">
                <h4 className="text"><a href={url} className="title">{name}</a>&nbsp;<a href={gitHubUrl} target="_blank" rel="noreferrer" className="gitHub"><BsGithub /></a></h4>

            </div>
        </div>

    );
};