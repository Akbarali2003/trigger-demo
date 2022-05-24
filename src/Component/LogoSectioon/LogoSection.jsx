import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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

        <>
            {/* <div className="logosection">
                <div className="container">
                    <ul className="logosection__list">
                        <li className="logosection__item"><Coinbase /></li>
                        <li className="logosection__item"><Spotify /></li>
                        <li className="logosection__item"><Slack /></li>
                        <li className="logosection__item"><Dropbox /></li>
                        <li className="logosection__item"><Webflow /></li>
                        <li className="logosection__item"> <Zoom /></li>
                    </ul>
                </div>
            </div> */}
            
            <div className="logosection">
                <div className="container">
                    <Swiper className="logosection__list">
                        <SwiperSlide className="logosection__item"><Coinbase /></SwiperSlide>
                        <SwiperSlide className="logosection__item"><Spotify /></SwiperSlide>
                        <SwiperSlide className="logosection__item"><Slack /></SwiperSlide>
                        <SwiperSlide className="logosection__item"><Dropbox /></SwiperSlide>
                        <SwiperSlide className="logosection__item"><Webflow /></SwiperSlide>
                        <SwiperSlide className="logosection__item"> <Zoom /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default LogoSection;