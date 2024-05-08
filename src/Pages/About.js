import AboutInfoTemplate from "../templates/About-info-template";
import {Link} from "react-router-dom";
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
            .then(jsonData => {
                // Преобразование массива массивов в массив объектов
                const transformedData = jsonData.data.map(item => ({
                    id: item[0],
                    head: item[1],
                    text: item[2]
                }));
                setData(transformedData); // Обновление состояния data новыми данными с сервера
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);
    return(
        <>
            <div className="About-li">
                {data.map((item,index)=>(
                    <AboutInfoTemplate key={item.id} head={item.head} text={item.text} />
                ))}

                <Link to="/ji">
                    <button className="error-button">Туда</button>
                </Link>
            </div>
        </>
    );
}

export default About;