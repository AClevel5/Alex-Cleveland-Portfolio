import { BsGithub } from "react-icons/bs";

export default function Card(props) {
    const name = props.name;
    const url = props.url;
    const gitHubUrl = props.gitHubUrl;
    const image = props.image;


    return (
        <div class="card">
            <img title={name} alt={name} src={image} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <a href={url} className="">{name}</a>
                <a href={gitHubUrl} target="_blank" rel="noreferrer" className="icon"><BsGithub color="gray" /></a>
            </div>
        </div>

    );
};