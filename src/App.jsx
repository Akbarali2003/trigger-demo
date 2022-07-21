import React, { useState, useEffect, Fragment } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import 'swiper/css';
import './App.scss';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import { ScrollUp } from './Assets/Images';
import { VoiceMode } from './Assets/Images/index';

export default function App() {
    const [onVoice, setonVoice] = useState(1);
    const [voiceText, setVoiceText] = useState('');
    const { speak } = useSpeechSynthesis();
    const [lang, setLang] = useState('ru');
    const [color, setColor] = useState(() => {
        const localColor = localStorage.getItem('color')
        return localColor ? JSON.parse(localColor) : 0;
    });
    const [size, setSize] = useState(
        JSON.parse(window.localStorage.getItem('size')) || 0,
    );
    const elRoot = document.querySelector('#root');

    if (color == 0) {
        elRoot.classList.add('white');
        elRoot.classList.remove('black');
    } else if (color == 1) {
        elRoot.classList.add('black');
        elRoot.classList.remove('white');
    }

    const voiceBtn = document.querySelector('.voiceBtn');
    const VoiceModeMouseUp = () => {
        elRoot.addEventListener('mouseup', (evt) => {
            const selectedText = window.getSelection().toString();
            setVoiceText(selectedText)
            if (selectedText.length && onVoice == 1) {
                voiceBtn.style.display = 'block';
                const x = evt.pageX;
                const y = evt.pageY;
                const voiceBtnWidth = Number(getComputedStyle(voiceBtn).width.slice(0, -2));
                const voiceBtnHeigth = Number(getComputedStyle(voiceBtn).height.slice(0, -2));
                voiceBtn.style.left = `${x - voiceBtnWidth * 0.5}px`;
                voiceBtn.style.top = `${y - voiceBtnHeigth * 1.25}px`;
            }
            if (onVoice == 0) {
                voiceBtn.style.display = 'none';
            }
        })
    }

    function speakText(text) {
        speak({ text: text });
        console.log(text);
    }

    useEffect(() => {
        localStorage.setItem('color', JSON.stringify(color));
        localStorage.setItem('size', JSON.stringify(size));
    }, [color, size]);

    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);
    return (
        <Fragment>
            <a href='#' className='scroll' id='scroll-up'><ScrollUp /></a>
            <Header
                size={size}
                setSize={setSize}
                lang={lang}
                setLang={setLang}
                color={color}
                setColor={setColor}
                VoiceModeMouseUp={VoiceModeMouseUp}
                onVoice={onVoice}
                setonVoice={setonVoice}
            />
            <Main
                size={size}
                lang={lang}
                color={color}
            />
            <Footer
                size={size}
                lang={lang}
                color={color}
            />
            <button className='voiceBtn' onClick={() => {
                speakText(voiceText);
            }}><VoiceMode /></button>
        </Fragment>
    );
}