import React from "react";
import './Pakcage.scss';
import content from "../Localization/content";
import { CarImg, PropertyImg, TravelImg, InsuranceImg } from './../../Assets/Images/index';
function Pakcage({ lang, color }) {

    const [change, setChange] = React.useState(0);
    const [page, setPage] = React.useState(0);
    return (
        <section className="pakcage">
            <div className="container">
                <div className="pakcage__content">
                    <h3 className="pakcage__subtitle">{content[lang].main[1].title}</h3>
                    <span className="pakcage__btns">
                        <button className={change == 0 ? 'pakcage__btn1-check1' : 'pakcage__btn1'} style={{ color: (color == 0) ? '#1B283B' : '#272727' }} onClick={() => {
                            setChange(0)
                            setPage(0)
                        }}>{content[lang].main[1].btn1}</button>
                        <button className={change == 1 ? 'pakcage__btn2-check2' : 'pakcage__btn1'} style={{ color: (color == 0) ? '#1B283B' : '#272727' }} onClick={() => {
                            setChange(1)
                            setPage(1)
                        }}>{content[lang].main[1].btn2}</button>
                    </span>
                    {page == 0 ? (
                        <ul className="pakcage__list">
                            <li className="pakcage__item">
                                <CarImg />
                                <p className="pakcage__text">{content[lang].main[1].discription[0]}</p>
                            </li>
                            <li className="pakcage__item">
                                <PropertyImg />
                                <p className="pakcage__text">{content[lang].main[1].discription[1]}</p>
                            </li>
                            <li className="pakcage__item">
                                <TravelImg />
                                <p className="pakcage__text">{content[lang].main[1].discription[2]}</p>
                            </li>
                            <li className="pakcage__item">
                                <InsuranceImg />
                                <p className="pakcage__text">{content[lang].main[1].discription[3]}</p>
                            </li>
                        </ul>
                    ) : (
                        <ul className="pakcage__list">
                            <li className="pakcage__item">
                                <CarImg />
                                <p className="pakcage__text">{content[lang].main[1].discription[0]}{'2'}</p>
                            </li>
                            <li className="pakcage__item">
                                <PropertyImg />
                                <p className="pakcage__text">{content[lang].main[1].discription[1]}{'2'}</p>
                            </li>
                            <li className="pakcage__item">
                                <TravelImg />
                                <p className="pakcage__text">{content[lang].main[1].discription[2]}{'2'}</p>
                            </li>
                            <li className="pakcage__item">
                                <InsuranceImg />
                                <p className="pakcage__text">{content[lang].main[1].discription[3]}{'2'}</p>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Pakcage