import { useRef, useState, useEffect } from "react";
import "./styles/Contacts.css";

function ContactsTemplate({ head }) {
    const [IsOpen, setIsOpen] = useState(false);
    const textRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!IsOpen);
        if (textRef.current) {
            textRef.current.style.maxHeight = IsOpen ? '0' : `${textRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        if (textRef.current) {
            textRef.current.style.maxHeight = IsOpen ? `${textRef.current.scrollHeight}px` : '0';
        }
    }, [IsOpen]);

    return (
        <div className="ContactsTemplate">
            <h1 onClick={toggleOpen} className={IsOpen ? 'xxeder open' : 'xxeder'}>
                {head}
            </h1>
            <div ref={textRef} className={`text ${IsOpen ? 'open' : ''}`}>
                <div className="mother-row">
                    <div className={"icons"}>
                        <a href={"https://t.me/Zakharova_J"} className="column-href">
                            <div className="column-item whatsapp">
                                <h1 className={"contacts-h1"}>Telegram</h1>
                            </div>
                        </a>
                        <a href={"mailto:zlata10@list.ru?Subject=Hello%20again"} className="column-href">
                            <div className="column-item gmail">
                                <h1 className={"contacts-h1"}>Mail</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsTemplate;
