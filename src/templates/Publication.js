import "./styles/Publication.css"

function Publication({name, published, date, url}){
    if ("" !== url) {return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="publication-link">
            <div className="publication-body">
                <h2 className="name-of-publication">{name}</h2>
                <p className="data-of-publication">{published} {date}</p>
            </div>
        </a>
    );
    } else {
        return (
            <div className={"publication-body"}>
                <h2 className={"name-of-publication"}>{name}</h2>
                <p className={"data-of-publication"}>{published} {date}</p>
            </div>
        );
    }
}

export default Publication;
