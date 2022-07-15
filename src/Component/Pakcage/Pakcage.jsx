import React from "react";
import './Pakcage.scss';
import content from "../Localization/content";
import { CarImg, PropertyImg, TravelImg, InsuranceImg } from '../../Assets/Images/index';
function Pakcage({ lang, size }) {

    const [page, setPage] = React.useState(0);
    const Animation = React.useRef();
    return (
        <section className="pakcage">
            <div className="container">
                <div className="pakcage__content" style={{ fontSize: `${16 + size}` + 'px', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                    <h3 className="pakcage__subtitle">{content[lang].main[1].title}</h3>
                    <div className="pakcage__btns">
                        <p className="pakcage__btn1" onClick={() => {
                            Animation.current.classList.remove('start-about')
                            Animation.current.classList.add('start-home')
                            setPage(0)
                        }}>{content[lang].main[1].btn1}</p>
                        <p className="pakcage__btn1" onClick={() => {
                            Animation.current.classList.remove('start-home')
                            Animation.current.classList.add('start-about')
                            setPage(1)
                        }}>{content[lang].main[1].btn2}</p>
                        <div className="animation start-home" ref={Animation}></div>
                    </div>
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