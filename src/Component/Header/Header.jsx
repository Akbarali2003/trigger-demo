import React from "react";
import './Header.scss';
import LogoImg from '../../Assets/Images/logo.svg';
import Nav from '../Nav/Nav';
import content from "../Localization/content";
import { ArrowButton, } from '../../Assets/Images/index';
function Header({ lang, setLang }) {
    return (
        <header className="header">
            <Nav lang={lang} setLang={setLang} />
            <div className="container">
                <div className="header__package">
                    <a href="/"> <img src={LogoImg} alt="" /></a>
                    <ul className="header__list">
                        <li className="header__item">
                            <a className="header__select" href="#">
                                {content[lang].header.text[0]}
                                <span className="header__arrow"><ArrowButton /></span>
                            </a>
                        </li>
                        <li className="header__item">
                            <a className="header__select" href="#">
                                {content[lang].header.text[1]}
                                <span className="header__arrow"><ArrowButton />    </span>
                            </a>
                        </li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[2]}</a></li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[3]}</a></li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[4]}</a></li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[5]}</a></li>
                    </ul>
                    <button className="header__btn" style={{ width: lang == 'ru' ? '138px' : '' }}>{content[lang].header.btn[0]}</button>
                </div>
            </div>
        </header>
    )
}

export default Header;