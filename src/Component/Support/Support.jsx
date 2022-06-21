import React from "react";
import './Support.scss';
import { PhoneCall, Customer } from "../../Assets/Images";
import content from "../Localization/content";
import Decor5 from '../../Assets/Images/decor5.svg';
import Decor6 from '../../Assets/Images/decor6.svg';
function Support({ lang, size }) {
    return (
        <div className="support">
            <div className="container">
                <div className="support__content" style={{ fontSize: `${16 + size}` + 'px' }}>
                    <span className="support__decor5">
                        <img src={Decor5} alt="Decor5" />
                    </span>
                    <span className="support__decor6">
                        <img src={Decor6} alt="Decor6" />
                    </span>
                    <h3 className="support__title">{content[lang].main[7].title}</h3>
                    <ul className="support__list">
                        <li className="support__item">
                            <PhoneCall />
                            <h4 className="support__subtitle">{content[lang].main[7].list[0].text}</h4>
                            <p className="support__text">{content[lang].main[7].list[0].discription}</p>
                            <button className="support__btn">{content[lang].main[7].list[0].btn}</button>
                        </li>
                        <li className="support__item">
                            <Customer />
                            <h4 className="support__subtitle">{content[lang].main[7].list[1].text}</h4>
                            <p className="support__text">{content[lang].main[7].list[1].discription}</p>
                            <button className="support__btn">{content[lang].main[7].list[1].btn}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Support;