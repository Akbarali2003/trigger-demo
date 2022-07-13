import React from "react";
import './Nav.scss';
import content from "../Localization/content";
import RUFlagImg from '../../Assets/Images/flag-ru.svg';
import UZFlagImg from '../../Assets/Images/flag-uz.svg';
import ENFlagImg from '../../Assets/Images/flag-en.svg';
import { Phone, Home, Karta, Email, Voice, Eye, Search, ArrowButton, } from '../../Assets/Images/index';

function Nav({ lang, setLang, elSearch, show, icon1, icon2, color, setColor, elView, elDropdown1, elDropdown2, size, setSize, openNav }) {
    const elLangActive = React.useRef();
    const ChangeSize = React.useRef()
    let tr = false
    if (size == 12) {
        ChangeSize.current.classList.add('header__nav-font-size2')
        tr = false
    }
    if (tr == true) {
        ChangeSize.current.classList.remove('header__nav-font-size2')
    }

    window.localStorage.setItem('color', JSON.stringify(color));

    return (
        <nav className="header__nav" ref={openNav} onClick={(evt) => {
            if (evt.target.matches('.header__nav-form-btn')
                || evt.target.matches('.header__nav')
                || evt.target.matches('.container')
                || evt.target.matches('.search')) {
                elSearch.current.classList.remove('header__nav-opensearch')
                show.current.classList.remove('show')
                icon1.current.classList.remove('icon')
                icon2.current.classList.remove('icon')
            }
            if (evt.target.matches('.view')) {
                elView.current.classList.remove('header__nav-openview')
            }
            if (evt.target.matches('.search-text') ||
                evt.target.matches('.header__nav-icon')) {
                show.current.classList.add('show')
                icon1.current.classList.add('icon')
                icon2.current.classList.add('icon')
            }
            if (evt.target.matches('.header__nav-lang-uz') ||
                evt.target.matches('.header__nav-lang-ru') ||
                evt.target.matches('.header__nav-lang-en')) {
                elLangActive.current.classList.add('header__nav-lang-active')
            }
        }}>
            <div className="container">
                <ul className="header__nav-lists" style={{ fontSize: `${16 + size}` + 'px', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                    <li className="header__nav-items">
                        {lang == 'uz' ? (
                            <div className="dropdown header__nav-item">
                                <button className="btn text-light border-0 d-flex align-items-center p-0 header__nav-lang-ru" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="header__nav-icon-flag"><img src={RUFlagImg} width='16' height='16' alt="flag-ru" /></span>
                                    UZ
                                    <span className="header__arrow"><ArrowButton /></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li>
                                        <button className="dropdown-item header__nav-otherlang" type="button" onClick={() => {
                                            setLang('uz')
                                        }}>
                                            <span className="header__nav-icon-flag"><img src={UZFlagImg} width='16' height='16' alt="flag-uz" /></span>
                                            O`zbekcha
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item header__nav-otherlang" type="button" onClick={() => {
                                            setLang('ru')
                                        }}>
                                            <span className="header__nav-icon-flag"><img src={RUFlagImg} width='16' height='16' alt="flag-ru" /></span>
                                            Русский
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item header__nav-otherlang" type="button">
                                            <span className="header__nav-icon-flag"><img src={ENFlagImg} width='16' height='16' alt="flag-en" /></span>
                                            English
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (lang == 'ru') ? (
                            <div className="dropdown header__nav-item">
                                <button className="btn text-light border-0 d-flex align-items-center p-0 header__nav-lang-ru" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="header__nav-icon-flag"><img src={RUFlagImg} width='16' height='16' alt="flag-ru" /></span>
                                    RU
                                    <span className="header__arrow"><ArrowButton /></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li>
                                        <button className="dropdown-item header__nav-otherlang" type="button" onClick={() => {
                                            setLang('uz')
                                        }}>
                                            <span className="header__nav-icon-flag"><img src={UZFlagImg} width='16' height='16' alt="flag-uz" /></span>
                                            O`zbekcha
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item header__nav-otherlang" type="button" onClick={() => {
                                            setLang('ru')
                                        }}>
                                            <span className="header__nav-icon-flag"><img src={RUFlagImg} width='16' height='16' alt="flag-ru" /></span>
                                            Русский
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item header__nav-otherlang" type="button" onClick={() => {
                                            setLang('en')
                                        }}>
                                            <span className="header__nav-icon-flag"><img src={ENFlagImg} width='16' height='16' alt="flag-en" /></span>
                                            English
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (lang == 'en') ? (
                            <div className="dropdown header__nav-item">
                                <button className="btn text-light border-0 d-flex align-items-center p-0 header__nav-lang-ru" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="header__nav-icon-flag"><img src={RUFlagImg} width='16' height='16' alt="flag-ru" /></span>
                                    EN
                                    <span className="header__arrow"><ArrowButton /></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li>
                                        <button className="dropdown-item header__nav-otherlang" type="button" onClick={() => {
                                            setLang('uz')
                                        }}>
                                            <span className="header__nav-icon-flag"><img src={UZFlagImg} width='16' height='16' alt="flag-uz" /></span>
                                            O`zbekcha
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item header__nav-otherlang" type="button" onClick={() => {
                                            setLang('ru')
                                        }}>
                                            <span className="header__nav-icon-flag"><img src={RUFlagImg} width='16' height='16' alt="flag-ru" /></span>
                                            Русский
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item header__nav-otherlang" type="button">
                                            <span className="header__nav-icon-flag"><img src={ENFlagImg} width='16' height='16' alt="flag-en" /></span>
                                            English
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                        <hr className="header__nav-line" />
                        <li className="header__nav-item">
                            <a href="tel:+99871 231-20-02" className="header__nav-phonespan" >
                                <span className="header__nav-icon-phone"><Phone /></span>
                                <p className="header__nav-phonenumber" >+99871 231-20-02</p>
                            </a>
                        </li>
                    </li>
                    <li className="header__nav-items">
                        <ul className="header__nav-list" id="nav">
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Home /></a>
                                <a href="#" className="header__nav-text" >{content[lang].nav.link[0]}</a>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Karta /></a>
                                <a href="#" className="header__nav-text">{content[lang].nav.link[1]}</a>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Email /></a>
                                <a href="#" className="header__nav-text" >{content[lang].nav.link[2]}</a>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-icon"><Voice /></a>
                                <a href="#" className="header__nav-text">{content[lang].nav.link[3]}</a>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item view">
                                <div className="dropdown">
                                    <button className="btn text-light border-0 d-flex align-items-center p-0" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <a href="#" className="header__nav-icon" ><Eye /></a>
                                        <a href="#" className="header__nav-text" >{content[lang].nav.link[4]} </a>
                                    </button>
                                    <ul className="dropdown-menu" style={{width:'163px'}} aria-labelledby="dropdownMenu2">
                                        <li>
                                            <button className="dropdown-item noDefalult header__nav-viewdarkmode" type="button">
                                                <input type="checkbox" id="toggle" className="header__nav-viewcheckbox" onClick={(evt) => {
                                                    color == 0 ? setColor(1) : setColor(0)
                                                    window.localStorage.setItem('color', JSON.stringify(color));
                                                    if (color == 1) {
                                                        evt.currentTarget.classList.add('toggle')
                                                    }
                                                    if (color == 0) {
                                                        evt.currentTarget.classList.remove('toggle')
                                                    }

                                                }} />
                                            </button>
                                        </li>
                                        <li><hr className="header__nav-viewline" /></li>
                                        <li className="header__nav-changesize dropdown-not-close">
                                            <div className="header__nav-my-size">{`${16 + size}`}px</div>
                                            <span className="header__nav-font-size" ref={ChangeSize}>
                                                {size != 0 ? (
                                                    <span className="header__nav-decremet decremet" onClick={() => {
                                                        setSize(size - 2)
                                                    }}>A-</span>
                                                ) : null}
                                                <span className="header__nav-auto auto " onClick={() => {
                                                    setSize(0)
                                                }}>auto</span>
                                                {size != 12 ? (
                                                    <span className="header__nav-incremet incremet " onClick={() => {
                                                        setSize(size + 2)
                                                    }}>A+</span>
                                                ) : null}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item search" >
                                <li className="dropdown">
                                    <button className="btn text-light border-0 d-flex align-items-center p-0" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <a href="#" className="header__nav-icon"><Search /></a>
                                        <a href="#" className='header__nav-text search-text'>{content[lang].nav.link[5]}</a>
                                    </button>
                                    <ul className="dropdown-menu header__nav-closesearch" style={{padding:'0',borderRadius:'10px'}} aria-labelledby="dropdownMenu2">
                                        {/* <div className="header__nav-closesearch"> */}
                                            <form className="header__nav-form">
                                                <input type="text" className="header__nav-form-input" placeholder="Поиск..." />
                                                <button className="header__nav-form-btn" >Поиск</button>
                                            </form>
                                        {/* </div> */}
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div >
        </nav >
    )
}

export default Nav;