import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import UserImg1 from '../../Assets/Images/news1.jpg';
import UserImg2 from '../../Assets/Images/news2.jpg';
import UserImg3 from '../../Assets/Images/news3.jpg';
import UserImg4 from '../../Assets/Images/news4.jpg';
import { FiChevronLeft, FiChevronRight } from '../../Assets/Images/index';
import content from "../Localization/content";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper1.scss";
import { Pagination, Navigation, Autoplay } from "swiper";

function Swiper1({ lang, size }) {
    return (
        <section className="swiper1">
            <div className="swiper1__content" >
                <Swiper className="swiper1__list"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 17,
                        },
                        820: {
                            slidesPerView: 2,
                            spaceBetween: 17,
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 17,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        1140: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        }
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={
                        {
                            nextEl: '.swiper-button-next-unique',
                            prevEl: '.swiper-button-prev-unique'
                        }}
                    modules={[Pagination, Navigation]}
                    style={{
                        fontSize: `${16 + size}` + 'px',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-all'
                    }}>
                    <SwiperSlide className='swiper1__item'>
                        <a href="#">
                            <img className="swiper1__img" src={UserImg1} alt='Userimg1' />
                            <div className="swiper1__information">
                                <span className="swiper1__span">
                                    <span className="swiper1__job-box">
                                        <p className="swiper1__job">{content[lang].main[6].list[0].jobs[0]}</p>
                                        <p className="swiper1__job">{content[lang].main[6].list[0].jobs[1]}</p>
                                    </span>
                                    <p className="swiper1__date">{content[lang].main[6].list[0].date}</p>
                                </span>
                                <h3 className="swiper1__subtitle">{content[lang].main[6].list[0].text}</h3>
                                <p className="swiper1__text">{content[lang].main[6].list[0].discription}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='swiper1__item'>
                        <a href="#">
                            <img className="swiper1__img" src={UserImg2} alt='UserImg2' />
                            <div className="swiper1__information">
                                <span className="swiper1__span">
                                    <p className="swiper1__job">{content[lang].main[6].list[1].jobs[0]}</p>
                                    <p className="swiper1__date">{content[lang].main[6].list[1].date}</p>
                                </span>
                                <h3 className="swiper1__subtitle">{content[lang].main[6].list[1].text}</h3>
                                <p className="swiper1__text">{content[lang].main[6].list[1].discription}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='swiper1__item'>
                        <a href="#">
                            <img className="swiper1__img" src={UserImg3} alt='UserImg3' />
                            <div className="swiper1__information">
                                <span className="swiper1__span">
                                    <p className="swiper1__job">{content[lang].main[6].list[2].jobs[0]}</p>
                                    <p className="swiper1__date">{content[lang].main[6].list[2].date}</p>
                                </span>
                                <h3 className="swiper1__subtitle">{content[lang].main[6].list[2].text}</h3>
                                <p className="swiper1__text">{content[lang].main[6].list[2].discription}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='swiper1__item'>
                        <a href="#">
                            <img className="swiper1__img" src={UserImg4} alt='UserImg4' />
                            <div className="swiper1__information">
                                <span className="swiper1__span">
                                    <p className="swiper1__job">{content[lang].main[6].list[3].jobs[0]}</p>
                                    <p className="swiper1__date">{content[lang].main[6].list[3].date}</p>
                                </span>
                                <h3 className="swiper1__subtitle">{content[lang].main[6].list[3].text}</h3>
                                <p className="swiper1__text">{content[lang].main[6].list[3].discription}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-button-prev-unique"><FiChevronLeft /></div>
                <div className="swiper-button-next-unique"><FiChevronRight /></div>
            </div>
        </section >
    );
}
export default Swiper1;