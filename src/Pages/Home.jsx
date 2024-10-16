import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    console.log('Check my https://github.com/Gorgeousanya for a developer offer')
    return (
    <div className="App">
        <h1 className="store-title">Анна Плохотнюк</h1>
        <div id="button" onClick={()=>setIsOpen(!isOpen)}></div>
        { isOpen &&
        <div className="buttons">
            <Link to="/bio" style={{ textDecoration: 'none' }} >
                <button className="nav">Обо мне</button>
            </Link>
            <Link to="/works" style={{ textDecoration: 'none' }}>
            <button className="nav">Работы</button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="nav">Контакты</button>
            </Link>
            </div>
        }
    </div>)
}

export default (Home)