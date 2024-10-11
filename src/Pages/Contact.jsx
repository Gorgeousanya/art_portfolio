import { Link } from "react-router-dom";
import photo from '../png/photo.png'
import photo2 from '../png/photo2.png'
import { useState } from "react";

function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="App2">
        <img src={photo} style={{ position: 'absolute', top: '0', left: '0', width: '300px'}}/>
        <img src={photo2} style={{ position: 'absolute', bottom: '0', right: '0', width: '300px'}}/>
        <Link to="/" style={{ textDecoration: 'none' }} >
            <h1 class="store-title">Анна Плохотнюк</h1>
        </Link>
        <div style={{ position: 'absolute', top: '50px', right: '220px'}}>
            <div id="button" onClick={()=>setIsOpen(!isOpen)}></div>
                { isOpen &&
                <div className="buttons" >
                    <Link to="/bio" style={{ textDecoration: 'none' }} >
                        <button class="basket" style={{width: "170px", height: "50px", fontSize: "18px", marginBottom: "12px"}} >Обо мне</button>
                    </Link>
                    <Link to="/works" style={{ textDecoration: 'none' }}>
                    <button class="basket" style={{width: "170px", height: "50px", fontSize: "18px", marginBottom: "12px"}} >Работы</button>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <button class="basket" style={{width: "170px", height: "50px", fontSize: "18px", marginBottom: "12px"}} >Контакты</button>
                    </Link>
                </div>
                }
            </div>
            <div className="buttons" style={{position: "absolute", top: "35vh"}}>
                <p>telegram/instagram
                    <br/>
                    @gorgeousanya
                </p>
                <a href="mailto:gorgeousannnyuk@gmail.com" style={{fontFamily:"Montserrat", fontSize: "20px",color: "white", marginBottom: "16px"}}>gorgeousannnyuk@gmail.com</a>
                <a href="https://drive.google.com/drive/folders/1qZX60DRQZ6rWx9BdE2-vkmE5vtSenj_w" target="_blank" style={{fontFamily:"Montserrat", fontSize: "20px",color: "white", marginBottom: "16px"}}>CV</a>
                <a href="https://drive.google.com/drive/u/0/folders/18o-eqGqA4RDWrR9ArCLkNYZYoTq_TOMz" target="_blank" style={{fontFamily:"Montserrat", fontSize: "20px",color: "white", marginBottom: "16px"}}>Portfolio</a>
            </div>
        </div>)
}

export default Contact;