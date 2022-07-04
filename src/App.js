import React, { useRef, useState, useEffect } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./App.scss";
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
export default function App() {
    const [lang, setLang] = React.useState('ru')
    const [color, setColor] = useState(
        JSON.parse(localStorage.getItem("color")) || 0,
    );
    const [size, setSize] = React.useState(0);
    const elRoot = document.querySelector('#root');
    if (color == 0) {
        elRoot.classList.add('white');
        elRoot.classList.remove('black');
    } else if (color == 1) {
        elRoot.classList.add('black');
        elRoot.classList.remove('white');
    }
    useEffect(() => {
        localStorage.setItem("color", JSON.stringify(color));
    }, [color]);
    return (
        <React.Fragment >
            <Header size={size} setSize={setSize} lang={lang} setLang={setLang} color={color} setColor={setColor} />
            <Main size={size} lang={lang} setLang={setLang} color={color} setColor={setColor} />
            <Footer size={size} lang={lang} setLang={setLang} color={color} setColor={setColor} />
        </React.Fragment>
    );
}


