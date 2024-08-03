import {Link} from "react-router-dom";

function Approval(){
    return (
        <div className="approval-container">
            <h1 className="approval-title">Approval</h1>
            <p className="approval-message">Текс Соглашения</p>
            <Link to="/" className="approval-link">
                <button className="approval-button">Домой</button>
            </Link>
        </div>
    );
}

export default Approval;