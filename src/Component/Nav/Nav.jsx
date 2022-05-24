import React from "react";
import './Nav.scss';
import FlagImg from '../../Assets/Images/flag.svg';
import content from "../Localization/content";
import {
    Phone,
    Home,
    Karta,
    Email,
    Voice,
    Eye,
    Search,
    ArrowButton,

} from '../../Assets/Images/index';
function Nav({ lang, setLang }) {

    return (
        <nav className="header__nav">
            <div className="container">
                <ul className="header__nav-lists">
                    <li className="header__nav-items">
                        <a href="#" className="header__nav-lang">
                            <span className="header__nav-icon-flag"><img src={FlagImg} alt="flag-icon" /></span>
                            Узб
                            <span className="header__nav-icon-arrow"><ArrowButton /></span>
                        </a>
                        <hr className="header__nav-line" />
                        <span className="header__nav-phonespan">
                            <a href="#" className="header__nav-icon"><Phone /></a>
                            <a className="header__nav-phonenumber" to="tel:+99871 231-20-02">+99871 231-20-02</a>
                        </span>
                    </li>
                    <li className="header__nav-items">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Home /></a>
                                <a href="#" className="header__nav-text" style={{ width: lang == 'ru' ? '48px' : '37px' }}>{content[lang].nav.link[0]}</a>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Karta /></a>
                                <a href="#" className="header__nav-text" style={{ width: '71px' }}>{content[lang].nav.link[1]}</a>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Email /></a>
                                <a href="#" className="header__nav-text" style={{ width: lang == 'ru' ? '36px' : '40px' }}>{content[lang].nav.link[2]}</a>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Voice /></a>
                                <a href="#" className="header__nav-text" style={{ width: '28px' }}>{content[lang].nav.link[3]}</a>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Eye /></a>
                                <a href="#" className="header__nav-text" style={{ width: lang == 'ru' ? '23px' : '48px' }}>{content[lang].nav.link[4]} </a>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Search /></a>
                                <a href="#" className="header__nav-text" style={{ width: lang == 'ru' ? '37px' : '53px' }}>{content[lang].nav.link[5]}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div >
        </nav >
    )
}

export default Nav;