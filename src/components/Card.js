import { BsGithub } from "react-icons/bs";

export default function Card(props) {
    const name = props.name;
    const url = props.url;
    const gitHubUrl = props.gitHubUrl;
    const image = props.image;


    return (
        <div class="card">
            <img title={name} alt={name} src={image} />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">yo</p>
                <a href={url} class="">{name}</a>
                <a href={gitHubUrl} target="_blank" rel="noreferrer" class="icon"><BsGithub color="gray" /></a>
            </div>
        </div>

    );
};