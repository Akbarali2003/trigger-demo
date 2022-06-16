import React from "react";
import './CheckSection.scss';
import Swiper2 from '../Swiper2/Swiper2';
import content from "../Localization/content";

function CheckSection({ lang, color, setColor }) {

    return (
        <section className="checksection" >
            <div className="container">
                <div className="checksection__global">
                    <div>
                        <h2 className="checksection__title">{content[lang].main[0].title}</h2>
                        <p className="checksection__text">{content[lang].main[0].text}</p>
                        <form className="checksection__form" >
                            <select className="checksection__select" name="" id="">
                                <option value="DDB">DDB</option>
                                <option value="DDB">DDB</option>
                                <option value="DDB">DDB</option>
                            </select>
                            <input className="checksection__input" type="text" placeholder={content[lang].main[0].placeholder} />
                            <button className="checksection__btn" >{content[lang].main[0].btn}</button>
                        </form>
                    </div>
                    <div className="checksection__slide">
                        <Swiper2 />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CheckSection