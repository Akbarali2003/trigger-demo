import React, { useState, useEffect } from "react";
import './Service.scss';
import ArrowRight from '../../Assets/Images/arrow-right.svg';
import content from "../Localization/content";
// import Swiper2 from "../Swiper2/Swiper2";
import { FiChevronLeft, FiChevronRight } from '../../Assets/Images/index';
import { Family } from "../data";
function Service({ lang }) {
    const [index, setIndex] = useState(0);
    const [people, setPeople] = useState(Family);
    useEffect(() => {
        const lastIndex = people.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, people])

    return (
        <div className="service">
            <div className="container">
                <div className="service__content">
                    <div style={{position: 'relative',height:'480px'}}>
                        <h3 className="service__title">{content[lang].main[4].titlee}</h3>
                        <span className="service__box">
                            {people.map((person, personIndex) => {
                                const { title } = person;

                                return (
                                    <h4 className="service__subtitle">{title}</h4>
                                )
                            })}
                            <img className="service__img" src={ArrowRight} alt="ArrowRight" />
                        </span>
                        <p className="service__text">
                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla <br />
                            duis ullamco cillum dolor. Voluptate exercitation incididunt <br />
                            aliquip deserunt reprehenderit elit laborum. Aliqua id <br />
                            fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui <br />
                            esse pariatur duis deserunt mollit dolore cillum minim <br />
                            tempor enim. Elit aute irure tempor cupidatat incididunt <br />
                            sint deserunt ut voluptate aute id deserunt nisi.
                        </p>

                        <div className="service__btns">
                            <button className="service__prev" onClick={() => setIndex(index - 1)}><FiChevronLeft /></button>
                            <button className="service__next" onClick={() => setIndex(index + 1)}><FiChevronRight /></button>
                        </div>
                    </div>
                    {/* <Swiper2 index={index} setIndex={setIndex} /> */}
                </div>
            </div>

        </div>
    )
}

export default Service;