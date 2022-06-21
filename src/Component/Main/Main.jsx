import React from "react";
import './Main.scss';
import CheckSection from "../CheckSection/CheckSection";
import Pakcage from "../Pakcage/Pakcage";
import AbouteUs from "../AboutUs/AboutUs";
import ChooseSection from "../ChooseSection/ChooseSection";
import LogoSection from "../LogoSectioon/LogoSection";
import Service from "../Service/Service";
import Employer from "../Employer/Employer";
import News from "../News/News";
import Support from "../Support/Support";
import Subscribe from "../Subscribe/Subscribe";
function Main({ lang,size }) {
    return (
        <main className="main">
            <CheckSection lang={lang} size={size} />
            <Pakcage lang={lang} size={size} />
            <AbouteUs lang={lang} size={size} />
            <ChooseSection lang={lang} size={size} />
            <Service lang={lang} size={size} />
            <LogoSection lang={lang} size={size} />
            <Employer lang={lang} size={size} />
            <News lang={lang} size={size} />
            <Support lang={lang} size={size} />
            <Subscribe lang={lang} size={size} />
        </main>
    )

}
export default Main;