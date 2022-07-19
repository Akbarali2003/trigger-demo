import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Swiper2.scss';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Vektor1Img from '../../Assets/Images/vektor1.svg';
import Vektor2Img from '../../Assets/Images/vektor2.svg';
import CarOne from '../../Assets/Images/car1.png';
import CarTwo from '../../Assets/Images/car2.png';
import CarThree from '../../Assets/Images/car3.png';
import CarFour from '../../Assets/Images/car4.png';
import CarFive from '../../Assets/Images/car5.png';
import CarSix from '../../Assets/Images/car6.png';
import CarSeven from '../../Assets/Images/car7.png';
import { Checked, Lock, Check, Starr } from "../../Assets/Images/index";
import { Pagination, Navigation, EffectFade } from "swiper";

function Swiper2({ size }) {
    return (
        <section className="swiper2">
            <div className="swiper2__content" style={{ fontSize: `${16 + size}` + 'px', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                <div >
                    <div className="swiper2__slide">
                        <div className="swiper2__slide-images">
                            <span className="swiper2__slide-images-one"><Lock /></span>
                            <img className="swiper2__slide-images-two" src={Vektor1Img} alt="Vektor1Img" />
                            <span className="swiper2__slide-images-three" ><Check /></span>
                            <img className="swiper2__slide-images-four" src={Vektor2Img} alt="Vektor2Img" />
                            <span className="swiper2__slide-images-five"><Starr /></span>
                        </div>
                        <Swiper className="swiper2__list"
                            slidesPerView={1}
                            slidesPerGroup={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            effect={"fade"}
                            modules={[Pagination, Navigation, EffectFade]}
                        >
                            <SwiperSlide className="swiper2__item"><img className="swiper2__carimage" src={CarOne} alt="CarOne" /></SwiperSlide>
                            <SwiperSlide className="swiper2__item"> <img className="swiper2__carimage" src={CarTwo} alt="CarTwo" /></SwiperSlide>
                            <SwiperSlide className="swiper2__item"> <img className="swiper2__carimage" src={CarThree} alt="CarThree" /></SwiperSlide>
                            <SwiperSlide className="swiper2__item"> <img className="swiper2__carimage" src={CarFour} alt="CarFour" /></SwiperSlide>
                            <SwiperSlide className="swiper2__item"><img className="swiper2__carimage" src={CarFive} alt="CarFive" /></SwiperSlide>
                            {/* <SwiperSlide className="swiper2__item"><img className="swiper2__carimage" src={CarSix} alt="CarSix" /></SwiperSlide> */}
                            <SwiperSlide className="swiper2__item"><img className="swiper2__carimage" src={CarSeven} alt="CarSeven" /></SwiperSlide>
                        </Swiper>
                        <div className="swiper2__slide-image" >
                            <div className="swiper2__slide-image-img" >
                                <Checked />
                            </div>
                            <h3 className="swiper2__slide-image-text">Официально застрахован</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Swiper2;