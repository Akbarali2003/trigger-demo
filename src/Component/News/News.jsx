import React from "react";
import './News.scss';
import content from "../Localization/content";
import Swiper from '../Swiper1/Swiper1';
// import Swiper from "../Swiper/Swiper";
function News({lang,size}) {
    return (
        <div className="news" style={{ fontSize: `${16 + size}` + 'px' }}>
            <div className="container">
                <h3 className="news__title">{content[lang].main[6].title}</h3>
                <Swiper lang={lang} size={size} />
                {/* <Swiper/> */}
            </div>
        </div>
    )
}

export default News;