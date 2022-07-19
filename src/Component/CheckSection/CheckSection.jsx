import React from "react";
import './CheckSection.scss';
import Swiper from '../Swiper2/Swiper2';
import content from "../Localization/content";


function CheckSection({ lang, size }) {

    return (
        <section className="checksection" >
            <div className="container">
                <div className="checksection__global" style={{ fontSize: `${16 + size}` + 'px' }}>
                    <div>
                        <h2 className="checksection__title mouse">{content[lang].main[0].title}</h2>
                        <p className="checksection__text mouse">{content[lang].main[0].text}</p>
                        <form className="checksection__form" >
                            <div className="checksection__global-select">
                                <select className="checksection__select" name="" id="">
                                    <option value="DDB">DDB</option>
                                    <option value="DDB">DDB</option>
                                    <option value="DDB">DDB</option>
                                </select>
                            </div>
                            <input className="checksection__input" type="text" placeholder={content[lang].main[0].placeholder} />
                            <button className="checksection__btn" >{content[lang].main[0].btn}</button>
                        </form>
                    </div>
                    <div className="checksection__slide">
                        <Swiper size={size} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CheckSection