import React from "react";
import './Subscribe.scss';
import content from "../Localization/content";
function Subscribe({lang}) {
    return (
        <div className="subscribe">
            <h4 className="subscribe__title" style={{margin:((lang=='uz')? '0px':null)}}>{content[lang].main[8].title}</h4>
            <form className="subscribe__form">
                <input className="subscribe__email" type="email" placeholder={content[lang].main[8].placeholder} />
                <button className="subscribe__btn">{content[lang].main[8].btn}</button>
            </form>
        </div>
    )
}

export default Subscribe