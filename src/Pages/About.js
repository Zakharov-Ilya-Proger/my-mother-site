import AboutInfoTemplate from "../templates/About-info-template";
import {Link} from "react-router-dom";
import "./styles/About.css"

const data = [
    { head: 'Заголовок 1', text: 'Текствввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввв 1' },
    { head: 'Заголовок 2', text: 'Текст 2' },
    { head: 'Заголовок 3', text: 'Текст 3' }
];

function About(){
    return(
        <>
            <div className="About-li">
                {data.map((item,index)=>(
                    <AboutInfoTemplate key={index} head={item.head} text={item.text} />
                ))}

                <Link to="/ji">
                    <button className="error-button">Туда</button>
                </Link>
            </div>
        </>
    );
}

export default About;