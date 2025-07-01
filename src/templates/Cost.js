import { useRef, useState } from "react";
import "./styles/Cost.css";
import fullTime from "../ref/armchair.svg";
import absentia from "../ref/webcam.svg";

function Cost({ head }) {
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
                            <p className={"h2-cost"}><b>6000 ₽</b><br/>Онлайн-консультация, 50 минут.</p>
                        </div>
                        <div className="icon-cell">
                            <img src={fullTime} alt={"очно"} className={`pict ${IsOpen ? 'open' : ''}`}/>
                        </div>
                        <div className="text-cell">
                            <p className={"h2-cost"}><b>7000 ₽</b><br/>Очная консультация, 50 минут.</p>
                        </div>
                    </div>
                    <div className={"describe"}>
                        <p className={"correction-of-text"}>Клиенты приходят ко мне за профессиональной
                            психологической помощью, когда сталкиваются с трудностями, но понимают, что
                            своих ресурсов для решения проблем недостаточно.</p>
                    </div>
                    <div className={"texter"}>
                        <br/>
                        <p className={"h2-cost"}><b>ОБЫЧНО КЛИЕНТЫ ОБРАЩАЮТСЯ, ЧТОБЫ: </b></p>
                        <ul>
                            <li>разобраться в себе, с проблемами и конфликтами в семье и на работе</li>
                            <li>принять решение</li>
                        </ul>
                        <p className={"h2-cost"}><b>ПРИХОДЯТ, ЧТОБЫ: </b></p>
                        <ul>
                            <li>научиться понимать себя и других</li>
                            <li>строить партнерские отношения</li>
                            <li>справляться с тревогой, подавленным настроением и чувством вины</li>
                        </ul>
                        <p className={"h2-cost"}><b>Я МНОГО И УСПЕШНО РАБОТАЮ С ЛЮДЬМИ, СТРАДАЮЩИМИ: </b></p>
                        <ul>
                            <li>депрессиями</li>
                            <li>генерализованным тревожным расстройством</li>
                            <li>паническими атаками</li>
                            <li>фобиями</li>
                            <li>обсессивно-компульсивным расстройством</li>
                            <li>социальной тревожностью</li>
                            <li>нарушениями сна</li>
                        </ul>
                        <p style={{textAlign: "center"}}>
                            Я предлагаю психологические услуги высокого качества, основанные на владении современными
                            методами психотерапии, отличном образовании, постоянном профессиональном совершенствовании,
                            многолетнем опыте.<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cost;
