import AboutInfoTemplate from "../templates/About-info-template";
import "./styles/About.css"
import {Link} from "react-router-dom";
import ContactsTemplate from "../templates/contacts-template";
import Cost from "../templates/Cost";
import CoolCost from "../templates/CoolCost";

function About(){

    return(
        <div className="About-page">
            <ContactsTemplate head={"Контакты"}/>
            <Cost head={"Услуги и цены"}/>
            <AboutInfoTemplate head={"Обо мне"} text={""}/>
            <div className={"About-buttons-container"}>
                <div className={"Buttons"}>
                    <Link to="/approval" className={"about-link"}>
                        <div className={"about-button"}><h1>Информированное согласие</h1></div>
                    </Link>
                    <CoolCost head={"Супервизии"} />
                    <Link to="/publications" className={"about-link"}>
                        <div className={"about-button"}><h1>Мои публикации</h1></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;