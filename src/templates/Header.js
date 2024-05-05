import "./styles/Header.css";
import { useLocation } from "react-router-dom";
import logo from "../ref/photo_2024-04-26_01-34-34.jpg"; // Убедитесь, что путь к изображению корректен

function Header() {
    const location = useLocation().pathname.slice(1);

    return (
        <div className={location === 'error' ? 'hidden' : 'Header-container'}>
            <img src={logo} alt="Logo" className="Header-logo"/>
            <h1 className="Header-name">Juli Zakharova</h1>
            <h1 className="Who-I-Am">Клинический психолог <br/>
                Когнитивно-поведенческий психотерапевт</h1>
        </div>
    );
}

export default Header;
