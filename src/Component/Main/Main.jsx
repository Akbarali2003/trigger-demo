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
function Main({ lang ,color,setColor }) {
    return (
        <main className="main">
            <CheckSection lang={lang} color={color} setColor={setColor} />
            <Pakcage lang={lang} color={color} setColor={setColor} />
            <AbouteUs lang={lang} color={color} setColor={setColor} />
            <ChooseSection lang={lang} color={color} setColor={setColor} />
            <Service lang={lang} color={color} setColor={setColor} />
            <LogoSection lang={lang} color={color} setColor={setColor} />
            <Employer lang={lang} color={color} setColor={setColor} />
            <News lang={lang} color={color} setColor={setColor} />
            <Support lang={lang} color={color} setColor={setColor} />
            <Subscribe lang={lang} color={color} setColor={setColor} />
        </main>
    )

}
export default Main;