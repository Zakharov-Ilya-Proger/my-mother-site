import "./styles/Footer.css"
import whatsapp from "../ref/whatsapp.png"
import github from "../ref/github.png"
import vk from "../ref/vk.png"
import gmail from "../ref/gmail.png"
import {useLocation} from "react-router-dom";

function Footer(){
    const location = useLocation().pathname.slice(1);
    return(
        <div className={location === 'error' ? 'hidden' : 'footer-container'}>
            <div className="icon-container">
                <div className="mother-column">
                    <p className="mother-contacts">Мои контакты</p>
                    <a href={"whatsapp://send?phone=79036291409&amp;text="} className="column-href">
                        <div className="column-item whatsapp">
                            <img src={whatsapp} alt={"whatsapp"} className={"column-icon"}/>
                        </div>
                    </a>
                    <a href={"mailto:zlata10@list.ru?Subject=Hello%20again"} className="column-href">
                        <div className="column-item gmail last">
                            <img src={gmail} alt={"gmail"} className={"column-icon"}/>
                        </div>
                    </a>
            </div>
                <div className="developer-column">
                    <p className="developer-contacts">Разработчик</p>
                    <a href={"https://vk.com/hochu.pit.pivo"} className="column-href">
                        <div className="column-item vk">
                            <img src={vk} alt={"VK"} className={"column-icon"}/>
                        </div>
                    </a>
                    <a href={"https://github.com/ZovuPitPivo"} className="column-href">
                        <div className="column-item github last">
                            <img src={github} alt={"GitHub"} className={"column-icon"}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;