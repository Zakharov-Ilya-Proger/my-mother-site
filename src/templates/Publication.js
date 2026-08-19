import "./styles/Publication.css"

function Publication({name, published, date, url, author}) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="publication-link">
            <div className="publication-body">
                <p className="name-of-publication">{author} {name} {published} {date}</p>
            </div>
        </a>
    )
}

export default Publication;
