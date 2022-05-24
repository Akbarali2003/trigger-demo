import React from "react";
import './Pakcage.scss';
import CarImg from '../../Assets/Images/car.svg';
import PropertyImg from '../../Assets/Images/property.svg';
import TravelImg from '../../Assets/Images/travel.svg';
import InsuranceImg from '../../Assets/Images/insurance.svg';
import content from "../Localization/content";
function Pakcage({ lang }) {

    const [change, setChange] = React.useState(0);
    const [page, setPage] = React.useState(0);

    return (
        <div className="container">
            <section className="pakcage ">
                <h3 className="pakcage__subtitle">{content[lang].main[1].title}</h3>
                <span className="pakcage__btns">
                    <button className={change == 0 ? 'pakcage__btn1-check1' : 'pakcage__btn1'} onClick={() => {
                        setChange(0)
                        setPage(0)
                    }}>{content[lang].main[1].btn1}</button>
                    <button className={change == 1 ? 'pakcage__btn2-check2' : 'pakcage__btn1'} onClick={() => {
                        setChange(1)
                        setPage(1)
                    }}>{content[lang].main[1].btn2}</button>
                </span>
                {page == 0 ?
                    (
                        <ul className="pakcage__list">
                            <li className="pakcage__item">
                                <img src={CarImg} alt="CarImg" />
                                <p className="pakcage__text">{content[lang].main[1].discription[0]}</p>
                            </li>
                            <li className="pakcage__item">
                                <img src={PropertyImg} alt="PropertyImg" />
                                <p className="pakcage__text">{content[lang].main[1].discription[1]}</p>
                            </li>
                            <li className="pakcage__item">
                                <img src={TravelImg} alt="TravelImg" />
                                <p className="pakcage__text">{content[lang].main[1].discription[2]}</p>
                            </li>
                            <li className="pakcage__item">
                                <img src={InsuranceImg} alt="InsuranceImg" />
                                <p className="pakcage__text">{content[lang].main[1].discription[3]}</p>
                            </li>
                        </ul>
                    ) : (
                        <ul className="pakcage__list">
                            <li className="pakcage__item">
                                <img src={CarImg} alt="CarImg" />
                                <p className="pakcage__text">{content[lang].main[1].discription[0]}</p>
                            </li>
                            <li className="pakcage__item">
                                <img src={PropertyImg} alt="PropertyImg" />
                                <p className="pakcage__text">{content[lang].main[1].discription[1]}</p>
                            </li>
                            <li className="pakcage__item">
                                <img src={TravelImg} alt="TravelImg" />
                                <p className="pakcage__text">{content[lang].main[1].discription[2]}</p>
                            </li>
                            <li className="pakcage__item">
                                <img src={InsuranceImg} alt="InsuranceImg" />
                                <p className="pakcage__text">{content[lang].main[1].discription[3]}</p>
                            </li>
                        </ul>
                    )}
            </section>
        </div>

    )
}

export default Pakcage