import Publication from "../templates/Publication";
import "./styles/Publications.css"
import {Link} from "react-router-dom";
import {useEffect} from "react";
import { animateScroll as scroll } from 'react-scroll';

const data = [
    {
        name: 'ПРОЯВЛЕНИЕ МОРАЛЬНОГО ОТЧУЖДЕНИЯ У ПСИХОЛОГОВ-КОНСУЛЬТАНТОВ В СИТУАЦИЯХ ПРОФЕССИОНАЛЬНОГО ВЗАИМОДЕЙСТВИЯ С КЛИЕНТАМИ',
        published: 'Психология. Журнал Высшей школы экономики.',
        date: '2024. Т. 21. № 1. С. 123-143.',
        url: ''
    },
    {
        name: 'ЭТИЧЕСКИЕ УСТАНОВКИ РОССИЙСКИХ ПСИХОЛОГОВ-КОНСУЛЬТАНТОВ: ОБЛАСТЬ РАЗНОГЛАСИЙ И ПОТЕНЦИАЛЬНЫХ КОНФЛИКТОВ',
        published: 'Консультативная психология и психотерапия.',
        date: '2020. Т. 28. № 1 (107). С. 87-112.',
        url: ''
    },
    {
        name: 'МЕЖДУНАРОДНАЯ КОНФЕРЕНЦИЯ ПО КОНСУЛЬТАТИВНОЙ ПСИХОЛОГИИ И ПСИХОТЕРАПИИ ПАМЯТИ Ф. Е. ВАСИЛЮКА',
        published: 'Психологический журнал.',
        date: '2019. Т. 40. № 4. С. 126-128.',
        url: ''
    },
    {
        name: 'ПЕРВАЯ МЕЖДУНАРОДНАЯ КОНФЕРЕНЦИЯ ПО ЭТИКЕ В ПСИХОЛОГИЧЕСКОМ КОНСУЛЬТИРОВАНИИ И ПСИХОТЕРАПИИ',
        published: 'Психологический журнал.',
        date: '2017. Т. 38. № 6. С. 115-117.',
        url: ''
    },
    {
        name: 'ПЕРВАЯ МЕЖДУНАРОДНАЯ КОНФЕРЕНЦИЯ ПО ЭТИКЕ В ПСИХОЛОГИЧЕСКОМ КОНСУЛЬТИРОВАНИИ И ПСИХОТЕРАПИИ',
        published: 'Вестник Российского университета дружбы народов. Серия: Психология и педагогика.',
        date: '2017. Т. 14. № 4. С. 478-483.',
        url: ''
    }
]

const conferenceData = [
    {
        name: 'IX Всероссийская научная конференция с международным участием «Психология в меняющемся мире: проблемы, гипотезы, перспективы»',
        published: 'Доклад «Взаимосвязь морального отчуждения и личностных факторов психологов-консультантов». ',
        date: 'Челябинск,16-17 мая 2024',
        url: ''
    },
    {
        name: 'III Международная конференция по консультативной психологии и психотерапии, посвященная памяти Ф. Е. Василюка',
        published: 'Проведение мастер-класса "Особенности принятия психологами и психотерапевтами этических решений в экстремальном контекстеМосква, 11-12 ноября 2022. ',
        date: 'Москва, 11-12 ноября 2022',
        url: ''
    },
    {
        name: 'XIII конференция EMDR России',
        published: 'Круглый стол этического комитета «Этика в эпоху лиминальности», спикер.',
        date: 'Москва, 28-30 октября 2022',
        url: ''
    },
    {
        name: 'Ежегодная научно-практическая конференция «Психологическая помощь в период пандемии: от кризиса к развитию»',
        published: 'Доклад "Изучение этических установок российских психологов-консультантов". ',
        date: 'Москва, 22 ноября 2021',
        url: ''
    },
    {
        name: 'I всероссийская конференция по схематерапии',
        published: 'Круглый стол «Этика схематерапевтов», спикер. ',
        date: 'Москва, 24-25 сентября 2021',
        url: ''
    },
    {
        name: 'Международная научно-практическая конференция Зейгарниковские чтения. Диагностика и психологическая помощь в современной клинической психологии: проблема научных и этических оснований',
        published: 'Содокладчик с Н.Г. Гаранян: "Проблемы этики в психологическом консультировании и психотерапии: опыт исследования взглядов российских специалистов". ',
        date: 'Москва, 18-19 ноября 2020',
        url: ''
    },
    {
        name: 'II международная конференция им Ф.Е. Василюка "Консультативная психология: вызовы практики"',
        published: 'Круглый стол "Этичный специалист или этичный террорист, кто скрывается под белым пальто?», организатор, спикер. ',
        date: 'Москва, 06-07 ноября 2020',
        url: ''
    },
    {
        name: 'VIII Всероссийский фестиваль психологических технологий «У Маринкиной башни»',
        published: 'Организация и проведение мастер-класса "Решение этических дилемм". ',
        date: 'Коломна, 26 сентября 2020',
        url: ''
    },
    {
        name: 'Научно-практическая конференция "II Случевские чтения: этические проблемы в психотерапии и консультировании"',
        published: 'Содокладчик с Н.Г. Гаранян: "Этические убеждения российских психологов-консультантов: область разногласий и потенциальных конфликтов." ',
        date: 'Санкт-Петербург, 15 ноября 2019',
        url: ''
    },
    {
        name: 'I Международная конференция по консультативной психологии и психотерапии памяти Ф.Е Василюка',
        published: 'Организация и проведение мастер-класса "Этический комитет вашей мечты: как должна выглядеть и работать эффективная этическая комиссия». ',
        date: 'Москва, 02-03 ноября 2018',
        url: ''
    },
    {
        name: 'Санкт-Петербургский Саммит психологов',
        published: 'Организация  и  проведение  мастер-класса «Этика в российской психотерапии: ожидания и реальность, настоящее и будущее». ',
        date: 'Санкт-Петербург, 04 июня 2018',
        url: ''
    },
    {
        name: 'Санкт-Петербургский Саммит психологов',
        published: 'Финалист, лауреат XIX Национального конкурса «Золотая Психея» по итогам 2017 года за организацию I международной конференции по этике в психологическом консультировании. ',
        date: 'Санкт-Петербург, 04 июня 2018',
        url: ''
    },
    {
        name: 'I международная конференция по этике в психологическом консультировании',
        published: 'Член оргкомитета, руководитель секции "Ответственность перед клиентами". ',
        date: 'Москва, 26 мая 2017',
        url: ''
    }
]

const psychologiesData = [
    {
        name: '«Я не рассказала на работе о своем диагнозе»',
        published: '',
        date: '',
        url: 'https://www.psychologies.ru/story/ya-ne-rasskazala-na-rabote-o-svoem-diagnoze/'
    },
    {
        name: 'Как победить осеннюю хандру: 3 совета психиатра',
        published: '',
        date: '',
        url: 'https://www.psychologies.ru/articles/kak-pobedit-osennyuyu-khandru-3-soveta-psikhiatra/'
    },
    {
        name: '«Я боюсь заболеть раком»',
        published: '',
        date: '',
        url: 'https://www.psychologies.ru/story/ya-boyus-zabolet-rakom/'
    },
    {
        name: 'Два упражнения, чтобы вернуться к себе',
        published: '',
        date: '',
        url: 'https://www.psychologies.ru/articles/dva-uprajneniya-chtobyi-vernutsya-k-sebe/'
    },
    {
        name: '«Символы же не горят? Они же навсегда?»',
        published: '',
        date: '',
        url: 'https://www.psychologies.ru/standpoint/simvolyi-je-ne-goryat-oni-je-navsegda/'
    }
]

function Publications(){
    useEffect(() => {
        scroll.scrollToTop({
            smooth: true,
            duration: 300,
        })
    }, []);
    return(
        <div className={"publications-Page"}>
            <h1 className={"science-publication"}>Научные Публикации</h1>
            <div className={"publication-li"}>
                {data.map((item, index) => (
                    <Publication
                        key={index}
                        name={item.name}
                        published={item.published}
                        date={item.date}
                        url={item.url}
                    />
                ))}
            </div>
            <h1 className={"science-publication another"}>Конференции</h1>
            <div className={"publication-li"}>
                {conferenceData.map((item, index) => (
                    <Publication
                        key={index}
                        name={item.name}
                        published={item.published}
                        date={item.date}
                        url={item.url}
                    />
                ))}
            </div>
            <a href={"https://www.psychologies.ru/search/?q=Захарова+Юлия&sort_type=date"}>
                <h1 className={"science-publication"}>
                    Публикации в Psychologies
                </h1>
            </a>
                <div className={"publication-li"}>
                    {psychologiesData.map((item, index) => (
                        <Publication
                            key={index}
                            name={item.name}
                            published={item.published}
                            date={item.date}
                            url={item.url}
                        />
                    ))}
                </div>

            <a target="_blank" rel="noopener noreferrer" href={"https://www.psychologies.ru/search/?q=Захарова+Юлия&sort_type=date"} className="approval-link">
                <button className="approval-button psychologies">Другие публикации в Psychologies</button>
            </a>

            <Link to="/" className="approval-link">
                <button className="approval-button">Домой</button>
            </Link>
        </div>
);
}

export default Publications;