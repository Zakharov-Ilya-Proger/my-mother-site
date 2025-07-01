import "./styles/Footer.css"
import {useLocation} from "react-router-dom";

function Footer(){
    const location = useLocation().pathname.slice(1);
    return(
        <div className={location !== '' && location !== 'publications' ? 'hidden' : 'footer-container'}>
            <div className="icon-container">
                <div className="mother-row">
                </div>
                <p className={"copyright"}>ИП Захарова Юлия Владимировна</p>
                <p className={"copyright"}><b>ИНН</b>: 772822852781 <b>ОГРНИП</b>: 318774600385770</p>
                <p className={"copyright"}>© 2024 Клинический психолог Юлия Захарова</p>
                <a href={"https://vk.com/zakharovik.proger"} className="column-href">
                    <div className={"column-item-dev"}>
                        <p className={"naming"}>ЗахаровStudio</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer;