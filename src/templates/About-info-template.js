import {useRef, useState} from "react";
import "./styles/AboutInfoStyles.css"

function AboutInfoTemplate({head, text}) {
    const [IsOpen, setIsOpen] = useState(false);
    const textRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!IsOpen);
        if (textRef.current) {
            textRef.current.style.maxHeight = IsOpen ? '0' : `${textRef.current.scrollHeight}px`;
        }
    };

    return (
        <div className="AboutInfoTemplate">
            <h1 onClick={toggleOpen} className={IsOpen ? 'open' : ''}>
                <span className={`icon ${IsOpen ? 'minus' : ''}`}>{IsOpen ? '×' : '+'}</span> {head}
            </h1>
            <div ref={textRef} className={`text ${IsOpen ? 'open' : ''}`}>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default AboutInfoTemplate;