import React from "react";
import './ChooseSection.scss';
import ExcellentImg from '../../Assets/Images/excellent.svg';
import CheckImg from '../../Assets/Images/check.svg';
import ClockImg from '../../Assets/Images/clock.svg';
import PeopleImg from '../../Assets/Images/people.svg';
import content from "../Localization/content";

function ChooseSection({lang}) {
    return (
        <div className="choosesection">
            <div className="container">
                <h3 className="choosesection__subtitle">{content[lang].main[3].title}</h3>
                <ul className="choosesection__list">
                    <li className="choosesection__item">
                        <img src={ExcellentImg} alt="ExcellentImg" />
                        <h4 className="choosesection__item-subtitle">{content[lang].main[3].subtitle[0]}</h4>
                        <p className="choosesection__item-discription">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </li>
                    <li className="choosesection__item">
                        <img src={CheckImg} alt="CheckImg" />
                        <h4 className="choosesection__item-subtitle">{content[lang].main[3].subtitle[1]}</h4>
                        <p className="choosesection__item-discription">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </li>
                    <li className="choosesection__item">
                        <img src={ClockImg} alt="ClockImg" />
                        <h4 className="choosesection__item-subtitle">{content[lang].main[3].subtitle[2]}</h4>
                        <p className="choosesection__item-discription">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </li>
                    <li className="choosesection__item">
                        <img src={PeopleImg} alt="PeopleImg" />
                        <h4 className="choosesection__item-subtitle">{content[lang].main[3].subtitle[3]}</h4>
                        <p className="choosesection__item-discription">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ChooseSection;