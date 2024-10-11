import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from "react";
import merch1 from '../Images/Merch/1.jpg';
import merch2 from '../Images/Merch/2.PNG';
import merch3 from '../Images/Merch/Тема 3.png';
import merch4 from '../Images/Merch/4.png';
import tvAnna from '../png/tvAnna.jpg'
import untitled from '../png/untitled.jpg'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60vw',
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(127deg, rgba(255, 255, 255, 0.40) 10.63%, rgba(255, 255, 255, 0.1) 73.38%)',
      boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(17.5px)',
      borderRadius: '40px',
      border: '0px solid'
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  };

function Store() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [photo, setPhoto] = useState()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="App2">
            <Link to="/" style={{ textDecoration: 'none' }} >
            <h1 class="store-title">Anna Plokhotnyuk</h1>
        </Link>
        <div style={{ position: 'absolute', top: '50px', right: '220px'}}>
        <div id="button" onClick={()=>setIsOpen(!isOpen)}></div>
        { isOpen &&
        <div className="buttons" >
            <Link to="/bio" style={{ textDecoration: 'none' }} >
                <button class="basket" style={{width: "170px", height: "50px", fontSize: "18px", marginBottom: "12px"}} >About</button>
            </Link>
            <Link to="/store" style={{ textDecoration: 'none' }}>
            <button class="basket" style={{width: "170px", height: "50px", fontSize: "18px", marginBottom: "12px"}} >Works</button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button class="basket" style={{width: "170px", height: "50px", fontSize: "18px", marginBottom: "12px"}} >Contact</button>
            </Link>
            </div>
        }
        </div>
            <div class="content" style={{position: "absolute", top: "15vh", left: "19vw", width: "50vw" }}>
                <div class="block" onClick={()=>{openModal(); setPhoto(tvAnna); setTitle('TV Anna'); setText('Видеоарт создан при помощи Феди Лакихила')}}>
                    <img src={merch3} style={{width: "20vw", height: "20vw"}}></img>
                    <div class="price"> 
                        <p>TV Anna</p>
                        <p>2023</p>
                    </div>
                </div>
                <div class="block" onClick={()=>{openModal(); setPhoto(untitled); setTitle('Untitled'); setText('В соавторстве с Александром Крыловым. Лучница, стреляя в пустоту, пытается противостоять неминуемой смерти всего живого. Цифровое бессмертие – форма материального существования – может отсрочить неотвратимую гибель, но никак не поможет избежать ее. Проект создан в рамках магистратуры «Технологическое искусство» в Университете МИСИС, 2023 год. Работа была представлена в Generative Gallery, в ЗИЛ на выставке Границы сред')}}>
                    <img src={merch1} style={{width: "20vw", height: "20vw"}}></img>
                    <div class="price"> 
                        <p>Untitled</p>
                        <p>2024</p>
                    </div>
                </div>
                <div class="block" >
                    <img src={merch2} style={{width: "20vw", height: "20vw"}}></img>
                    <div class="price"> 
                        <p>ПИЛЛОУ</p>
                        <p>2022</p>
                    </div>
                </div>
                <div class="block" >
                    <img src={merch4} style={{width: "20vw", height: "20vw"}}></img>
                    <div class="price"> 
                        <p>BlueTeeth / Грустные зубы</p>
                        <p>2023</p>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2 class="modal-text" >{title}</h2>
                <img src={photo} style={{width: "40vw", height: "20vw"}}></img>
                <p class="modal-text" style={{ fontSize: '16px', marginTop: "18px", display: 'flex', flexDirection: 'column', alignItems: "center"}}>{text}</p>
                <button class="continue" onClick={closeModal}>продолжить</button>
            </Modal>
        </div>
    );
}

export default Store;