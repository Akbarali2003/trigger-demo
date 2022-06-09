import React from "react";
import './Header.scss';
import LogoImg from '../../Assets/Images/logo.svg';
import Nav from '../Nav/Nav';
import content from "../Localization/content";
import { ArrowButton, } from '../../Assets/Images/index';
function Header({ lang, setLang, color, setColor }) {
    const elModal = React.useRef();
    const elDropdown1 = React.useRef();
    const elDropdown2 = React.useRef();
    const elSearch = React.useRef();
    const show = React.useRef();
    const icon1 = React.useRef();
    const icon2 = React.useRef();
    const elView = React.useRef();
    return (
        <header className="header" style={{ backgroundColor: (color == 0) ? '#0C2F62' : '#2B2B2B' }} onClick={(evt) => {
            if (evt.target.matches('.header')) {
                elModal.current.classList.remove('header__nav-openmodal')
            }
            if (evt.target.matches('.header')
                || evt.target.matches('.header__dropdown-one-open')
                || evt.target.matches('.header__dropdown-item-custom1')
                || evt.target.matches('.header__close-item-one')) {
                elDropdown1.current.classList.remove('header__dropdown-one-open')
                elSearch.current.classList.remove('header__nav-opensearch')
                show.current.classList.remove('show')
                icon1.current.classList.remove('icon')
                icon2.current.classList.remove('icon')
                elView.current.classList.remove('header__nav-openview')
            }
            if (evt.target.matches('.header')
                || evt.target.matches('.header__dropdown-two-open')
                || evt.target.matches('.header__dropdown-item-custom2')) {
                elDropdown2.current.classList.remove('header__dropdown-two-open')
            }
        }}>
            <Nav
                lang={lang}
                setLang={setLang}
                elModal={elModal}
                elSearch={elSearch}
                show={show}
                icon1={icon1}
                icon2={icon2}
                color={color}
                setColor={setColor}
                elView={elView}/>
            <div className="container">
                <div className="header__package">
                    <a href="/"> <img className="header__logoimg" src={LogoImg} alt="" /></a>
                    <ul className="header__list">
                        <li className="header__item">
                            <a className="header__select" href="#" style={{ backgroundColor: (color == 0) ? '#0C2F62' : '#2B2B2B' }} onClick={(() => {
                                elDropdown1.current.classList.add('header__dropdown-one-open')
                                elDropdown2.current.classList.remove('header__dropdown-two-open')
                            })}>
                                {content[lang].header.text[0]}
                                <span className="header__arrow"><ArrowButton /></span>
                            </a>
                            <ul className="header__dropdown-one-close" ref={elDropdown1}>
                                <li className="header__dropdown-item"><a className="header__dropdown-item-custom1" href="#">Action</a></li>
                                <li className="header__dropdown-item"><a className="header__dropdown-item-custom1" href="#">Another action</a></li>
                                <li className="header__dropdown-item"><hr className="header__dropdown-line" /></li>
                                <li className="header__dropdown-item"><a className="header__dropdown-item-custom1" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="header__item">
                            <a className="header__select header__close-item-one" href="#" style={{ backgroundColor: (color == 0) ? '#0C2F62' : '#2B2B2B' }} onClick={(() => {
                                elDropdown2.current.classList.add('header__dropdown-two-open')
                                elDropdown1.current.classList.remove('header__dropdown-one-open')
                            })}>
                                {content[lang].header.text[1]}
                                <span className="header__arrow"><ArrowButton />    </span>
                            </a>
                            <ul className="header__dropdown-two-close" ref={elDropdown2}>
                                <li className="header__dropdown-item"><a className="header__dropdown-item-custom2" href="#">Action</a></li>
                                <li className="header__dropdown-item"><a className="header__dropdown-item-custom2" href="#">Another action</a></li>
                                <li className="header__dropdown-item"><hr className="header__dropdown-line" /></li>
                                <li className="header__dropdown-item"><a className="header__dropdown-item-custom2" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[2]}</a></li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[3]}</a></li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[4]}</a></li>
                        <li className="header__item"><a href="#" className="header__discription">{content[lang].header.text[5]}</a></li>
                    </ul>
                    <button className="header__btn" style={{ width: lang == 'ru' ? '138px' : '' }}>{content[lang].header.btn[0]}</button>
                    <button className="header__bar-toggle">
                        <div className="header__hamburger">
                            <span className="header__bar bar1"></span>
                            <span className="header__bar bar2"></span>
                            <span className="header__bar bar3"></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;