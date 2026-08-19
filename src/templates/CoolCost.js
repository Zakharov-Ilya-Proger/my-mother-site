import { useRef, useState } from "react";
import "./styles/Cost.css";
import absentia from "../ref/webcam.svg";

function CoolCost({ head }) {
    const [IsOpen, setIsOpen] = useState(false);
    const textRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!IsOpen);
        if (textRef.current) {
            textRef.current.style.maxHeight = IsOpen ? '0' : `${textRef.current.scrollHeight}px`;
        }
    };

    return (
        <div className="CostTemplate">
            <h1 onClick={toggleOpen} className={IsOpen ? 'xxeder open' : 'xxeder'}>
                {head}
            </h1>
            <div ref={textRef} className={`cost ${IsOpen ? 'open' : ''}`}>
                <div className={"costs"}>
                    <div className="icon-grid">
                        <div className="icon-cell">
                            <img src={absentia} alt={"удаленно"} className={`pict ${IsOpen ? 'open' : ''}`}/>
                        </div>
                        <div className="text-cell">
                            <p className={"h2-cost"}><b>6000 ₽</b><br/>Онлайн-супервизия, 50 минут.</p>
                        </div>
                    </div>
                    <div className={"describe"}>
                        <p className={"correction-of-text"}>Я провожу супервизии для коллег по вопросам профессиональной этики, терапевтических отношений и КПТ.</p>
                    </div>
                    <div className={"texter"}>
                        <br/>
                        <ul>
                            <li>Я — соосновательница Коллегии по этике психологов и психотерапевтов (КЭПП), одна из создателей этического кодекса КЭПП, который используется многими ассоциациями и организациями.</li>
                            <li>Лауреат (финалист) национальной премии "Золотая Психея" 2018 г. за организацию I международной конференции по этике в психологическом консультировании и психотерапии 05.2017 г.</li>
                            <li>Для ассоциаций я создаю этические тесты, делаю этические разборы.</li>
                            <li>Провожу обучающие занятия по этике в организациях и клиниках.</li>
                            <li>Помогаю с этическими конфузами как организациям, так и специалистам.</li>
                            <li>В настоящее время преподаю этику в магистратуре Московского института психоанализа.</li>
                            <li>Я — аспирантка НИУ ВШЭ, у меня много научных работ на тему профессиональной этики (см. публикации ниже) и готовая к защите кандидатская диссертация на тему этики психологов.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoolCost;
