import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./App.scss";

import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';

export default function App() {
    const [lang, setLang] = React.useState('ru')
    return (
        <>
            <Header lang={lang} setLang={setLang} />
            <Main lang={lang} setLang={setLang} />
            <Footer lang={lang} setLang={setLang} />
        </>
    );
}
