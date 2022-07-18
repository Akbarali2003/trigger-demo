import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "./App.scss";
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import { ScrollUp } from "./Assets/Images";
export default function App() {
    const [lang, setLang] = useState('ru')
    const [color, setColor] = useState(() => {
        const localColor = localStorage.getItem('color')
        return localColor ? JSON.parse(localColor) : 0;
    });
    const [size, setSize] = useState(
        JSON.parse(window.localStorage.getItem("size")) || 0,
    );
    const elRoot = document.querySelector('#root');
    if (color == 0) {
        elRoot.classList.add('white');
        elRoot.classList.remove('black');
    } else if (color == 1) {
        elRoot.classList.add('black');
        elRoot.classList.remove('white');
    }
    useEffect(() => {
        localStorage.setItem('color', JSON.stringify(color));
    }, [color]);
    useEffect(() => {
        localStorage.setItem('size', JSON.stringify(size));
    }, [size])
    return (
        <React.Fragment >
            <Header size={size} setSize={setSize} lang={lang} setLang={setLang} color={color} setColor={setColor} />
            <Main size={size} lang={lang} setLang={setLang} color={color} setColor={setColor} />
            <Footer size={size} lang={lang} setLang={setLang} color={color} setColor={setColor} />
            {/* <a href="#" className="scrollup"><ScrollUp/></a> */}
        </React.Fragment>
    );
}