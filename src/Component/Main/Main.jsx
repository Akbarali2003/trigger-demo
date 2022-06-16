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
function Main({ lang }) {
    return (
        <main className="main">
            <CheckSection lang={lang} />
            <Pakcage lang={lang} />
            <AbouteUs lang={lang} />
            <ChooseSection lang={lang} />
            <Service lang={lang} />
            <LogoSection lang={lang} />
            <Employer lang={lang} />
            <News lang={lang} />
            <Support lang={lang} />
            <Subscribe lang={lang} />
        </main>
    )

}
export default Main;