import React from "react";
import './Header.scss';
import { LogoImg } from '../../Assets/Images/index';
import Nav from '../Nav/Nav';
import content from "../Localization/content";
import { ArrowButton, ScrollUp } from '../../Assets/Images/index';
function Header({ lang, setLang, color, setColor, size, setSize }) {
    const elModal = React.useRef();
    const elDropdown1 = React.useRef();
    const elDropdown2 = React.useRef();
    const elSearch = React.useRef();
    const show = React.useRef();
    const icon1 = React.useRef();
    const icon2 = React.useRef();
    const elView = React.useRef();
    const elBar1 = React.useRef();
    const elBar2 = React.useRef();
    const elBar3 = React.useRef();
    const [x, setX] = React.useState(1);
    const openList = React.useRef();
    const openNav = React.useRef();
    return (
        <header className="header" onClick={(evt) => {
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
                elDropdown1={elDropdown1}
                elDropdown2={elDropdown2}
                color={color}
                setColor={setColor}
                elView={elView}
                size={size}
                setSize={setSize}
                openNav={openNav} />
            <div className="container">
                <div className="header__package" style={{ fontSize: `${16 + size}` + 'px', overflowWrap: 'break-word' }} >
                    <a href="/"> <LogoImg /></a>
                    <ul className="header__list" ref={openList} >
                        <li className="header__item">
                            <a className="header__select" href="#" onClick={(() => {
                                elDropdown1.current.classList.add('header__dropdown-one-open')
                                elDropdown2.current.classList.remove('header__dropdown-two-open')
                                elSearch.current.classList.remove('header__nav-opensearch')
                                elView.current.classList.remove('header__nav-openview')
                                elModal.current.classList.remove('header__nav-openmodal')
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
                            <a className="header__select header__close-item-one" href="#" onClick={(() => {
                                elDropdown2.current.classList.add('header__dropdown-two-open')
                                elDropdown1.current.classList.remove('header__dropdown-one-open')
                                elSearch.current.classList.remove('header__nav-opensearch')
                                elView.current.classList.remove('header__nav-openview')
                                elModal.current.classList.remove('header__nav-openmodal')
                            })}>
                                {content[lang].header.text[1]}
                                <span className="header__arrow"><ArrowButton /></span>
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