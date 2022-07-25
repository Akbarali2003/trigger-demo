import React from "react";
import './Header.scss';
import { LogoImg } from '../../Assets/Images/index';
import Nav from '../Nav/Nav';
import content from "../Localization/content";
import { ArrowButton } from '../../Assets/Images/index';
function Header({ lang, setLang, color, setColor, size, setSize, VoiceModeMouseUp, onVoice, setonVoice }) {
    let elBar = false;
    const elBar1 = React.useRef()
    const openList = React.useRef();
    const openNav = React.useRef();
    return (
        <header className="header" >
            <Nav
                lang={lang}
                setLang={setLang}
                color={color}
                setColor={setColor}
                size={size}
                setSize={setSize}
                openNav={openNav}
                VoiceModeMouseUp={VoiceModeMouseUp}
                onVoice={onVoice}
                setonVoice={setonVoice}
            />
            <div className="container">
                <div className="header__package" style={{ fontSize: `${16 + size}` + 'px', overflowWrap: 'break-word' }} >
                    <a href="/"> <LogoImg /></a>
                    <ul className="header__list" ref={openList} >
                        <li className="dropdown header__item">
                            <button className="btn header__select text-light border-0 d-flex align-items-center pt-0 pb-0" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                {content[lang].header.text[0]}
                                <span className="header__arrow"><ArrowButton /></span>
                            </button>
                            <ul className="dropdown-menu" style={{ zIndex: '1000' }} aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </li>
                        <li className="dropdown header__item ">
                            <button className="btn header__select text-light border-0 d-flex align-items-center pt-0 pb-0" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                {content[lang].header.text[1]}
                                <span className="header__arrow"><ArrowButton /></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{ zIndex: '100' }}>
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[2]}</a></li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[3]}</a></li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[4]}</a></li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[5]}</a></li>
                    </ul>
                    <button className="header__btn ">{content[lang].header.btn[0]}</button>
                    <button className="header__bar-toggle" onClick={() => {
                        if (!elBar) {
                            elBar1.current.classList.add('hamburger-open');
                            elBar = true;
                        } else {
                            elBar1.current.classList.remove('hamburger-open');
                            elBar = false;
                        }
                    }}>
                        <div className="header__hamburger" ref={elBar1} >
                            <span className="header__bar" ></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;