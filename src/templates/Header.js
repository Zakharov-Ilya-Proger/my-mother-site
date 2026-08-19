import "./styles/Header.css";
import {Link, useLocation} from "react-router-dom";
import logo from "../ref/photo_for_header.jpg";

function Header() {
    const location = useLocation().pathname.slice(1);

    return (
        <div className={location !== '' && location !== 'publications' ? 'hidden' : 'Header-container'}>
            <Link to={"/"}>
                <img src={logo} alt="Logo" className="Header-logo"/>
            </Link>
            <h1 className="Header-name"><b>Юлия Захарова</b></h1>
            <h1 className="Who-I-Am"><br/>Клинический психолог <br/>
                Аккредитованный по стандартам EABCT<br/>
                когнитивно-поведенческий психотерапевт <br/>
                Преподаватель в МИП<br/>
                Эксперт в Psychologies<br/>
                Автор книги "Нейросети для решения психологических проблем"
            </h1>
        </div>
    );
}

export default Header;
