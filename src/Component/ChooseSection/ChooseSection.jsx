import React from "react";
import './ChooseSection.scss';
import { ExcellentImg, CheckImg, ClockImg, PeopleImg } from '../../Assets/Images/index';
import content from "../Localization/content";

function ChooseSection({ lang,size }) {
    return (
        <div className="choosesection">
            <div className="container">
                <div className="choosesection__content"style={{ fontSize: `${16 + size}` + 'px'}} >
                    <h3 className="choosesection__subtitle">{content[lang].main[3].title}</h3>
                    <ul className="choosesection__list" >
                        <li className="choosesection__item">
                            <ExcellentImg />
                            <h4 className="choosesection__item-subtitle">{content[lang].main[3].subtitle[0]}</h4>
                            <p className="choosesection__item-discription">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                        </li>
                        <li className="choosesection__item">
                            <CheckImg />
                            <h4 className="choosesection__item-subtitle">{content[lang].main[3].subtitle[1]}</h4>
                            <p className="choosesection__item-discription">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                        </li>
                        <li className="choosesection__item">
                            <ClockImg />
                            <h4 className="choosesection__item-subtitle">{content[lang].main[3].subtitle[2]}</h4>
                            <p className="choosesection__item-discription">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                        </li>
                        <li className="choosesection__item">
                            <PeopleImg />
                            <h4 className="choosesection__item-subtitle">{content[lang].main[3].subtitle[3]}</h4>
                            <p className="choosesection__item-discription">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ChooseSection;