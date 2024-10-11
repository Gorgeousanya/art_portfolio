import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="App">
        <h1 class="store-title">Anna Plokhotnyuk</h1>
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
    </div>)
}

export default (Home)