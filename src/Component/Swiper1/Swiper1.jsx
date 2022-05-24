import React, { useState, useEffect } from "react";
import { Users } from '../data';
import './Swiper1.scss';
import { FiChevronLeft, FiChevronRight } from '../../Assets/Images/index';

function Swiper() {
    const [people, setPeople] = useState(Users);
    const [index, setindex] = useState(0);
    useEffect(() => {
        const lastIndex = people.length - 1
        if (index < 0) {
            setindex(lastIndex)
        }
        if (index > lastIndex) {
            setindex(0)
        }
    }, [index, people])

    // useEffect(() => {
    //     let slider = setInterval(() => {
    //         setindex(index + 1)
    //     }, 3000)
    //     return () => clearInterval(slider)
    // })

    return (
        <section className="swiper1">
            <div className="swiper1__content">
                <button className="prev" onClick={() => {
                    setindex(index - 1)
                    console.log(index)
                }}><FiChevronLeft /></button>
                <ul className="swiper1__list">
                    {people.map((person, personIndex) => {
                        const { id, image, job, date, subtitle, text } = person;
                        let position = "activeSlide"
                        if (index == 0) {
                            position = 'activeSlide'
                        }
                        if (index == 1) {
                            position = 'lastSlide'
                        }
                        if (personIndex == 2) {
                            position = "nextSlide";
                        }
                        // if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        //     position = "lastSlide"
                        // }
                        return (
                            <li key={id} className={position}>
                                <img style={{ width: '332px', height: '240px', borderRadius: '18px 18px 0 0' }} src={image} alt={job} />
                                <div className="swiper1__information">
                                    <span className="swiper1__span">
                                        <p className="swiper1__job">{job}</p>
                                        <p className="swiper1__date">{date}</p>
                                    </span>
                                    <h3 className="swiper1__subtitle">{subtitle}</h3>
                                    <p className="swiper1__text">{text}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <button className="next" onClick={() => {
                    setindex(index + 1)
                    console.log(index);
                }}><FiChevronRight /></button>
            </div>
            <div className="swiper1__points">
                <span className="swiper1__point"></span>
                <span className="swiper1__point"></span>
                <span className="swiper1__point"></span>
                <span className="swiper1__point"></span>
            </div>
        </section>
    )
}

export default Swiper;
