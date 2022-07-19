import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import "swiper/css";
import "./App.scss";
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import { ScrollUp, Star } from "./Assets/Images";
import { VoiceMode } from './Assets/Images/index';

export default function App() {
    const [voiceText, setVoiceText] = useState("")
    const { speak } = useSpeechSynthesis();

    // const msg = new SpeechSynthesisUtterance()

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

    const VoiceModeMouseUp = () => {
        const voiceBtn = document.querySelector(".voiceBtn");
        elRoot.addEventListener('mouseup', (evt) => {
            let selectedText = window.getSelection().toString();
            if (selectedText.length) {
                setVoiceText(selectedText)
                voiceBtn.style.display = 'block'
                const x = evt.pageX;
                const y = evt.pageY;
                const voiceBtnWidth = Number(getComputedStyle(voiceBtn).width.slice(0, -2));
                const voiceBtnHeigth = Number(getComputedStyle(voiceBtn).height.slice(0, -2));
                voiceBtn.style.left = `${x - voiceBtnWidth * 0.5}px`;
                voiceBtn.style.top = `${y - voiceBtnHeigth * 1.25}px`;
            }
        })
    }

    // const speechHandler = (msg) => {
    //     msg.text = voiceText
    //     window.speechSynthesis.speak(msg)
    // }

    useEffect(() => {
        localStorage.setItem('color', JSON.stringify(color));
        localStorage.setItem('size', JSON.stringify(size));
    }, [color, size]);

    // useEffect(() => {
    //     window.speechSynthesis.speak(msg)
    // }, [msg])

    return (
        <React.Fragment >
            <Header size={size} setSize={setSize} lang={lang} setLang={setLang} color={color} setColor={setColor} VoiceModeMouseUp={VoiceModeMouseUp} />
            <Main size={size} lang={lang} setLang={setLang} color={color} setColor={setColor} />
            <Footer size={size} lang={lang} setLang={setLang} color={color} setColor={setColor} />
            {/* <div className="scroll"> <a href="#" className="scrollup"><ScrollUp/></a></div> */}
            <button className="voiceBtn" onClick={() => {
                speak({ text: voiceText })
            }}><VoiceMode /></button>
        </React.Fragment>
    );
}