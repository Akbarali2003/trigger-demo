import React from "react";
import './AboutUs.scss';
import FamilyImg from '../../Assets/Images/family1.jpg';
import { Decor1, Decor2 } from '../../Assets/Images/index';
import content from "../Localization/content";

function AboutUs({ lang, size }) {
    return (
        <section className="aboutus">
            <div className="container">
                <div className="aboutus__content" style={{ fontSize: `${16 + size}` + 'px' }}>
                    <div className="aboutus__image">
                        <div className="aboutus__decor-right">
                            <Decor2 />
                        </div>
                        <img src={FamilyImg} alt="FamilyImg" />
                        <div className="aboutus__decor-left">
                            <Decor1 />
                        </div>
                    </div>
                    <div>
                        <h3 className="aboutus__subtitle">{content[lang].main[2].title}</h3>
                        <p className="aboutus__text">{content[lang].main[2].text}</p>
                        <button className="aboutus__btn">{content[lang].main[2].btn}</button>
                        <ul className="aboutus__list" >
                            <li className="aboutus__item" style={{ fontSize: `${16 + size}` + 'px' }}>
                                <span className="aboutus__count">300 <p className="aboutus__plus">+</p></span>
                                <p className="aboutus__discription">{content[lang].main[2].discription[0]}</p>
                            </li>
                            <li className="aboutus__item" style={{ fontSize: `${16 + size}` + 'px' }}>
                                <span className="aboutus__count">500 <p className="aboutus__plus">+</p></span>
                                <p className="aboutus__discription">{content[lang].main[2].discription[1]}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;