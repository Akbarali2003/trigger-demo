import React from "react";
import './AboutUs.scss';
import FamilyImg from '../../Assets/Images/family1.png';
import decor2 from '../../Assets/Images/decor2.png';
import decor1 from '../../Assets/Images/decor1.png';
import content from "../Localization/content";

function AboutUs({ lang }) {
    return (
        <div className="container">
            <section className="aboutus">
                <div className="aboutus__image">
                    <img src={FamilyImg}alt="FamilyImg" />
                    <div className="aboutus__decor-right">
                        <img src={decor2} alt="" />
                    </div>
                    <div className="aboutus__decor-left">
                    <img src={decor1} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className="aboutus__subtitle">{content[lang].main[2].title}</h3>
                    <p className="aboutus__text">{content[lang].main[2].text}</p>
                    <button className="aboutus__btn">{content[lang].main[2].btn}</button>
                    <ul className="aboutus__list">
                        <li className="aboutus__item">
                            <span className="aboutus__count">300 <p className="aboutus__plus">+</p></span>
                            <p className="aboutus__discription">{content[lang].main[2].discription[0]}</p>
                        </li>
                        <li className="aboutus__item">
                            <span className="aboutus__count">500 <p className="aboutus__plus">+</p></span>
                            <p className="aboutus__discription">{content[lang].main[2].discription[1]}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;