import React from "react";
import './Nav.scss';
import content from "../Localization/content";
import RUFlagImg from '../../Assets/Images/flag-ru.svg';
import UZFlagImg from '../../Assets/Images/flag-uz.svg';
import ENFlagImg from '../../Assets/Images/flag-en.svg';

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

function Nav({ lang, setLang, elModal, elSearch, show, icon1, icon2, color, setColor, elView, elDropdown1, elDropdown2 }) {
    const elLangActive = React.useRef();
    const [size, setSize] = React.useState(0);
    function add() {
        localStorage.setItem('color', color)
    }
    function changeFontSize(type) {
        let ids = ["#navTop"];
        let plus5Max = 28;
        let minus5Min = 16;
        let decrease = document.querySelector(".decremet");
        let increase = document.querySelector(".increment");
        let currentSize = document.getElementById("currentSize");
        ids.forEach(id => {
            // Get element
            let el = document.querySelector(id); // Get font-size

            let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size"); // Convert to float

            fontSize = parseFloat(fontSize);
            // fontSizeLocalStorage = localStorage.getItem("fontSize"); // Increase / Decrease font-size

            if (type === "increase") {
                decrease.classList.remove('active-last');
                decrease.classList.add('visibile');

                if (fontSize !== plus5Max) {
                    el.style.fontSize = fontSize + 2 + "px";
                    el.style.wordWrap = "break-word";
                    el.style.wordBreak = "break-all";
                    localStorage.setItem("fontSize", el.style.fontSize);
                } else {
                    increase.classList.add('active-last');
                    increase.classList.add('visibile-hide');
                }
            } else if (type === "decrease") {
                increase.classList.remove('active-last');
                increase.classList.remove('visibile-hide');

                if (fontSize != minus5Min) {
                    el.style.fontSize = fontSize - 2 + "px";
                    el.style.wordWrap = "break-word";
                    el.style.wordBreak = "break-all";
                    localStorage.setItem("fontSize", el.style.fontSize);
                } else {
                    decrease.classList.add('active-last');
                    decrease.classList.remove('visibile');
                }
            } else if (type === "autosize") {
                decrease.classList.remove('active-last');
                decrease.classList.remove('visibile');
                increase.classList.remove('active-last');
                increase.classList.remove('visibile-hide');
                el.style.fontSize = "16px";
                el.style.wordWrap = "normal";
                el.style.wordBreak = "normal";
                localStorage.setItem("fontSize", el.style.fontSize);
            }



            currentSize.innerText = el.style.fontSize;
        });
    }



    return (
        <nav className="header__nav" onClick={(evt) => {
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
                elModal.current.classList.remove('header__nav-openmodal')
            }
            if (evt.target.matches('.header__nav-lang-uz') ||
                evt.target.matches('.header__nav-lang-ru') ||
                evt.target.matches('.header__nav-lang-en')) {
                elLangActive.current.classList.add('header__nav-lang-active')
            }
        }}>
            <div className="container">
                <ul className="header__nav-lists">
                    <li className="header__nav-items">
                        {lang == 'uz' ? (
                            <a href="#" className="header__nav-lang-uz" ref={elLangActive} onClick={(() => {
                                elModal.current.classList.add('header__nav-openmodal')
                                elSearch.current.classList.remove('header__nav-opensearch')
                                show.current.classList.remove('show')
                                icon1.current.classList.remove('icon')
                                icon2.current.classList.remove('icon')
                                elView.current.classList.remove('header__nav-openview')
                                elDropdown1.current.classList.remove('header__dropdown-one-open')
                                elDropdown2.current.classList.remove('header__dropdown-two-open')
                            })}>
                                <span className="header__nav-icon-flag"><img src={UZFlagImg} alt="flag-uz" /></span>
                                Узб
                                <span className="header__nav-icon-arrow"><ArrowButton /></span>

                            </a>
                        ) : (lang == 'ru') ? (
                            <a href="#" className="header__nav-lang-ru" ref={elLangActive} onClick={(() => {
                                elModal.current.classList.add('header__nav-openmodal')
                                elSearch.current.classList.remove('header__nav-opensearch')
                                show.current.classList.remove('show')
                                icon1.current.classList.remove('icon')
                                icon2.current.classList.remove('icon')
                                elView.current.classList.remove('header__nav-openview')
                                elDropdown1.current.classList.remove('header__dropdown-one-open')
                                elDropdown2.current.classList.remove('header__dropdown-two-open')
                            })}>
                                <span className="header__nav-icon-flag"><img src={RUFlagImg} width='16' height='16' alt="flag-ru" /></span>
                                Рус
                                <span className="header__nav-icon-arrow"><ArrowButton /></span>
                            </a>
                        ) : (lang == 'en') ? (
                            <a href="#" className="header__nav-lang-en" ref={elLangActive} onClick={(() => {
                                elModal.current.classList.add('header__nav-openmodal')
                                elSearch.current.classList.remove('header__nav-opensearch')
                                show.current.classList.remove('show')
                                icon1.current.classList.remove('icon')
                                icon2.current.classList.remove('icon')
                                elView.current.classList.remove('header__nav-openview')
                                elDropdown1.current.classList.remove('header__dropdown-one-open')
                                elDropdown2.current.classList.remove('header__dropdown-two-open')
                            })}>
                                <span className="header__nav-icon-flag"><img src={ENFlagImg} width='16' height='16' alt="flag-en" /></span>
                                Инг
                                <span className="header__nav-icon-arrow"><ArrowButton /></span>
                            </a>
                        ) : null}


                        <hr className="header__nav-line" />
                        <span className="header__nav-phonespan">
                            <a href="#" className="header__nav-icon-phone"><Phone /></a>
                            <a className="header__nav-phonenumber" to="tel:+99871 231-20-02">+99871 231-20-02</a>
                        </span>
                        <div className="header__nav-closemodal" ref={elModal} onClick={(evt) => {
                            elModal.current.classList.remove('header__nav-openmodal')
                        }}>
                            <a href="#" className="header__nav-otherlang" onClick={() => {
                                setLang('uz')
                            }}>
                                <span className="header__nav-icon-flag"><img src={UZFlagImg} width='16' height='16' alt="flag-uz" /></span>
                                узбекча (лотин)
                            </a>
                            <a href="#" className="header__nav-otherlang" onClick={() => {
                                setLang('ru')
                            }}>
                                <span className="header__nav-icon-flag"><img src={RUFlagImg} width='16' height='16' alt="flag-ru" /></span>
                                русча
                            </a>
                            <a href="#" className="header__nav-otherlang" onClick={() => {
                                setLang('en')
                            }}>
                                <span className="header__nav-icon-flag"><img src={ENFlagImg} width='16' height='16' alt="flag-en" /></span>
                                ингилизча
                            </a>
                        </div>
                    </li>
                    <li className="header__nav-items">
                        <ul className="header__nav-list" id="nav">
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
                            <li className="header__nav-item view" onClick={() => {
                                elView.current.classList.add('header__nav-openview')
                                elSearch.current.classList.remove('header__nav-opensearch')
                                show.current.classList.remove('show')
                                icon1.current.classList.remove('icon')
                                icon2.current.classList.remove('icon')
                                elModal.current.classList.remove('header__nav-openmodal')
                                elDropdown1.current.classList.remove('header__dropdown-one-open')
                                elDropdown2.current.classList.remove('header__dropdown-two-open')
                            }}>
                                <a href="#" className="header__nav-icon" ><Eye /></a>
                                <a href="#" className="header__nav-text" style={{ fontSize:'`${14+size}`+px', width: lang == 'ru' ? '23px' : '48px' }}>{content[lang].nav.link[4]} </a>
                                <ul className="header__nav-closeview" ref={elView}>
                                    <li>
                                        <a href="#" className="header__nav-view">
                                            <div className="header__nav-viewdarkmode">
                                                <input type="checkbox" id="toggle" className="header__nav-viewcheckbox" onChange={() => {
                                                    color == 0 ? setColor(1) : setColor(0)
                                                }} />
                                            </div>
                                        </a>
                                    </li>
                                    <li><hr className="header__nav-viewline" /></li>
                                    <li className="header__nav-changesize">
                                        <div className="header__nav-my-size">{`${16 + size}`}px</div>
                                        <span className="header__nav-font-size" style={{}}>
                                            {size != 0 ? (
                                                <a href="#" className="header__nav-decremet decremet" onClick={() => {
                                                    setSize(size - 2)
                                                }}>A-</a>
                                            ) : null}
                                            <a href="#" className="header__nav-auto auto " onClick={() => {
                                                setSize(0)
                                            }}>auto</a>
                                            {size != 12 ? (
                                                <a href="#" className="header__nav-incremet incremet " onClick={() => {
                                                    setSize(size + 2)
                                                }}>A+</a>
                                            ) : null}
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__nav-item-line"><hr className="header__nav-border-line" /></li>
                            <li className="header__nav-item search" onClick={() => {
                                elSearch.current.classList.add('header__nav-opensearch')
                                elView.current.classList.remove('header__nav-openview')
                                elDropdown1.current.classList.remove('header__dropdown-one-open')
                                elDropdown2.current.classList.remove('header__dropdown-two-open')
                            }}>
                                <a href="#" className="header__nav-icon"><Search icon1={icon1} icon2={icon2} /></a>
                                <a href="#" ref={show} className='header__nav-text search-text' style={{ width: lang == 'ru' ? '37px' : '53px' }}>{content[lang].nav.link[5]}</a>
                                <div className="header__nav-closesearch" ref={elSearch}>
                                    <form className="header__nav-form">
                                        <input type="text" className="header__nav-form-input" placeholder="Поиск..." />
                                        <button className="header__nav-form-btn" >Поиск</button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div >
        </nav >
    )
}

export default Nav;