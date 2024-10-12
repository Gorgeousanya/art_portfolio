import { Link } from "react-router-dom";
import { useState } from "react";
import photo from '../png/photo.png'
import photo2 from '../png/photo2.png'

function Bio() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="App2">
        <img src={photo} className="photo_1"/>
        <img src={photo2} className="photo_2"/>
        <Link to="/art_portfolio" style={{ textDecoration: 'none' }} >
            <h1 className="store-title">Анна Плохотнюк</h1>
        </Link>
        <div id="button" onClick={()=>setIsOpen(!isOpen)}></div>
        { isOpen &&
        <div className="buttons">
            <Link to="/bio" style={{ textDecoration: 'none' }} >
                <button className="nav" >Обо мне</button>
            </Link>
            <Link to="/works" style={{ textDecoration: 'none' }}>
            <button className="nav" >Работы</button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="nav" >Контакты</button>
            </Link>
            </div>
        }
        <div className="bio">
            <h1 style={{fontSize: "18px"}}>Биография</h1>
            <p style={{fontSize: "14px"}}>Медиа художница, перформерша, разработчица.<br/>
	Родилась и проживает в Москве. Окончила бакалавриат НИТУ МИСИС по направлению “Прикладная математика”, обучается в магистратуре по направлению “Технологическое искусство”, является ведущим инженером по разработке Виртуального ассистента в Сбере.<br/>
Работы были представлены на выставке “Континуум” в галерее Краснохолмская, на выставке “Границы сред” в культурном центре ЗИЛ, на фестивале “Металлверс” в Выксе, в Generative Gallery. Участвовала в перформансах в галерее Наковальня, в культурном центре ЗИЛ, в Powerhouse. Была организатором VR части фестиваля “Наизнанку” Побеги. Создавала инсталляции для музыкальных мероприятий в Москве.
</p>
            <h1 style={{fontSize: "18px"}}>Artist statement</h1>
            <p style={{fontSize: "14px"}}>
            Во время изучения математики и программирования эти дисциплины раскрылись для меня как возможные средства создания художественных проектов.<br/>
Поскольку моим основным родом деятельности является разработка, ежедневное тесное взаимодействие с цифровым миром заставляет размышлять о нем изнутри и интерпретировать через более человекоцентричное восприятие посредством технологического перфоманса. <br/>
В моей творческой практике темами становятся воссоздание древних архетипических образов в контексте современного мира и запечатление артефактов нашего времени для футуристического общества будущего.
            </p>
        </div>
    </div>)
}

export default (Bio)