import React from "react";
import './Header.scss';
import { LogoImg } from '../../Assets/Images/index';
import Nav from '../Nav/Nav';
import content from "../Localization/content";
import { ArrowButton } from '../../Assets/Images/index';
function Header({ lang, setLang, color, setColor, size, setSize, VoiceModeMouseUp,onVoice,setonVoice }) {
    const elBar1 = React.useRef();
    const elBar2 = React.useRef();
    const elBar3 = React.useRef();
    const [x, setX] = React.useState(1);
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
                        if (x == 1) {
                            elBar1.current.classList.add('bar1')
                            elBar2.current.classList.add('bar2')
                            elBar3.current.classList.add('bar3')
                            openList.current.classList.add('header__list-open')
                            openNav.current.classList.add('header__nav-open')
                            setX(0)
                        } else {
                            elBar1.current.classList.remove('bar1')
                            elBar2.current.classList.remove('bar2')
                            elBar3.current.classList.remove('bar3')
                            openList.current.classList.remove('header__list-open')
                            openNav.current.classList.remove('header__nav-open')
                            setX(1)
                        }
                    }}>
                        <div className="header__hamburger" >
                            <span className="header__bar" ref={elBar1}></span>
                            <span className="header__bar" ref={elBar2}></span>
                            <span className="header__bar" ref={elBar3}></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;