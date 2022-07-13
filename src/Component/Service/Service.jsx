import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Service.scss';
import { ArrowRight } from "../../Assets/Images/index";
import content from "../Localization/content";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Family1 from '../../Assets/Images/family1.jpg'
import Family2 from '../../Assets/Images/family2.png'
import { Pagination, Navigation, EffectFade,Autoplay } from "swiper";
function Service({ lang, size }) {
    return (
        <div className="service">
            <div className="container">
                <div className="service__content-global">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={16}
                        slidesPerGroup={1}
                        effect={"fade"}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        modules={[Pagination, Navigation, EffectFade,Autoplay]}
                        style={{ fontSize: `${16 + size}` + 'px' }}
                        className="service__content">
                        <SwiperSlide className="service__content-slide">
                            <div>
                                <h3 className="service__title">{content[lang].main[4].titlee}</h3>
                                <span className="service__box">
                                    <h4 className="service__subtitle">{content[lang].main[4].subtitle[0]}</h4>
                                    <ArrowRight />
                                </span>
                                <p className="service__text">
                                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                                    duis ullamco cillum dolor. Voluptate exercitation incididunt
                                    aliquip deserunt reprehenderit elit laborum. Aliqua id
                                    fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                                    esse pariatur duis deserunt mollit dolore cillum minim
                                    tempor enim. Elit aute irure tempor cupidatat incididunt
                                    sint deserunt ut voluptate aute id deserunt nisi.1
                                </p>
                            </div>
                           <div style={{borderRadius:'30px'}}> <img src={Family2} className='service__img-family' alt="Family2" /></div>
                        </SwiperSlide>
                        <SwiperSlide className="service__content-slide">
                            <div>
                                <h3 className="service__title">{content[lang].main[4].titlee}</h3>
                                <span className="service__box">
                                    <h4 className="service__subtitle">{content[lang].main[4].subtitle[1]}</h4>
                                    <ArrowRight />
                                </span>
                                <p className="service__text">
                                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                                    duis ullamco cillum dolor. Voluptate exercitation incididunt
                                    aliquip deserunt reprehenderit elit laborum. Aliqua id
                                    fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                                    esse pariatur duis deserunt mollit dolore cillum minim
                                    tempor enim. Elit aute irure tempor cupidatat incididunt
                                    sint deserunt ut voluptate aute id deserunt nisi.2
                                </p>
                            </div>
                           <div style={{borderRadius:'30px'}}> <img src={Family1} className='service__img-family' alt="Family1" /></div>
                        </SwiperSlide>
                        <SwiperSlide className="service__content-slide">
                            <div>
                                <h3 className="service__title">{content[lang].main[4].titlee}</h3>
                                <span className="service__box">
                                    <h4 className="service__subtitle">{content[lang].main[4].subtitle[2]}</h4>
                                    <ArrowRight />
                                </span>
                                <p className="service__text">
                                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                                    duis ullamco cillum dolor. Voluptate exercitation incididunt
                                    aliquip deserunt reprehenderit elit laborum. Aliqua id
                                    fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                                    esse pariatur duis deserunt mollit dolore cillum minim
                                    tempor enim. Elit aute irure tempor cupidatat incididunt
                                    sint deserunt ut voluptate aute id deserunt nisi.3
                                </p>
                            </div>
                            <img src={Family2} className='service__img-family' alt="Family2" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}

export default Service;