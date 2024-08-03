import AboutInfoTemplate from "../templates/About-info-template";
import "./styles/About.css"
import {useEffect, useState} from "react";

function About(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/') // Замените URL_ВАШЕГО_API на адрес вашего API
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data.data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);
    return(
        <div className="About-page">
            <div className="About-li">
                {data.map((item)=>(
                    <AboutInfoTemplate key={item.id} head={item.head} text={item.text} />
                ))}
            </div>
        </div>
    );
}

export default About;