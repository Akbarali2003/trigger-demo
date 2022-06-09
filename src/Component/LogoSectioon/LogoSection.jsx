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
                    slidesPerView={6}
                    spaceBetween={24}
                    modules={[Pagination, Navigation]}>
                    <SwiperSlide className="logosection__item logosection__coinbase"><Coinbase  /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__spotify"><Spotify /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__slack"><Slack /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__dropbox"><Dropbox /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__webflow"><Webflow /></SwiperSlide>
                    <SwiperSlide className="logosection__item logosection__zoom"> <Zoom /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    ) 
}
export default LogoSection;