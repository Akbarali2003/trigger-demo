import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import './LogoSection.scss';
import {
    Coinbase,
    Spotify,
    Slack,
    Dropbox,
    Webflow,
    Zoom,
} from '../../Assets/Images/index';
function LogoSection() {
    return (
        <div className="logosection">
            <div className="container">
                <Swiper className="logosection__list"
                    loop={true}
                    grabCursor={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        376: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        394: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        415: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        540: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 0,
                        },
                        1140: {
                            slidesPerView: 6,
                            spaceBetween: 24,
                        }
                    }}
                    modules={[Pagination, Navigation]}>
                    <SwiperSlide className="logosection__item logosection__coinbase"><Coinbase /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__spotify"><Spotify /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__slack"><Slack /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__dropbox"><Dropbox /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__webflow"><Webflow /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__zoom"> <Zoom /></SwiperSlide>
                </Swiper>
            </div>
            <script>

            </script>
        </div >
    )
}
export default LogoSection;