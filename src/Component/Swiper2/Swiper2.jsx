import './Swiper2.scss';
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Family } from '../data';


function Swiper2({ index, setIndex }) {
    const [people, setPeople] = useState(Family);
    useEffect(() => {
        const lastIndex = people.length -1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, people])

    // useEffect(() => {
    //     let slider = setInterval(() => {
    //         setindex(index + 1)
    //     }, 3000)
    //     return () => clearInterval(slider)
    // })
    return (
        <section className="swiper2">
            <ul className="swiper2__list">
                {people.map((person, personIndex) => {
                    const { id, title, image } = person;
                    let position = "swiper2__nextSlide"
                    if (personIndex == index) {
                        position = 'swiper2__activeSlide'
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = "swiper2__lastSlide"
                    }   
                    return (
                        <li key={id} className={position}>
                            <img style={{ width: '640px', height: '480px', borderRadius: '30px' }} src={image} alt={id} />
                        </li>
                    )
                })}
            </ul>

        </section>
    )
}
export default Swiper2;