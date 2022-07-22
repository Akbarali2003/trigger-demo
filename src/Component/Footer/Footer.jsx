import React from "react";
import './Footer.scss';
// import FooterLogo from '../../Assets/Images/footer-logo.svg';
import { LogoImg } from '../../Assets/Images/index';
import TwitterImg from '../../Assets/Images/twitter.svg';
import LinkedImg from '../../Assets/Images/instagram.svg';
import FaceBookImg from '../../Assets/Images/facebook.svg';
import GithubImg from '../../Assets/Images/github.svg';
import FingerImg from '../../Assets/Images/finger.svg';
import BallImg from '../../Assets/Images/ball.svg';
import FluentCall from '../../Assets/Images/fluent-call.svg';
import FluentEmail from '../../Assets/Images/fluent-email.svg';
import FluentLocation from '../../Assets/Images/fluent-location.svg';
import content from "../Localization/content";
function Footer({ lang, size }) {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer__list" style={{ fontSize: `${16 + size}` + 'px' }}>
                    <li className="footer__item">
                        <a href="/"> <LogoImg/></a>
                        <p className="footer__discription">{content[lang].footer[0].discription}</p>
                        <span className="footer__logos">
                            <a target='_blank' href="https://twitter.com"><img src={TwitterImg} alt="TwitterImg" /></a>
                            <a target='_blank' href="https://www.linkedin.com"><img src={LinkedImg} alt="LinkedImg" /></a>
                            <a target='_blank' href="https://facebook.com"><img src={FaceBookImg} alt="FaceBookImg" /></a>
                            <a target='_blank' href="https://github.com"><img src={GithubImg} alt="GithubImg" /></a>
                            <a target='_blank' href="#"><img src={FingerImg} alt="FingerImg" /></a>
                            <a target='_blank' href="#"><img src={BallImg} alt="BallImg" /></a>
                        </span>
                    </li>
                    <li className="footer__item">
                        <ul className="footer__ellist">
                            <li className="footer__elitem">
                                <h5 className="footer__txt">{content[lang].footer[1].subtitle}</h5>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[1].link[0]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[1].link[1]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[1].link[2]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[1].link[3]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[1].link[4]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[1].link[5]}
                                </a>
                            </li>
                            <li className="footer__elitem">
                                <h5 className="footer__txt">{content[lang].footer[2].subtitle}</h5>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[2].link[0]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[2].link[1]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[2].link[2]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[2].link[3]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[2].link[4]}
                                </a>
                                <a className="footer__link" href='#'>
                                    {content[lang].footer[2].link[5]}
                                </a>
                            </li>
                            <li className="footer__elitem">
                                <ul className="footer__sublist">
                                    <li className="footer__subitem">
                                        <h5 className="footer__txt">{content[lang].footer[3].subtitle}</h5>
                                        <span style={{ marginBottom: '12px' }}>
                                            <img src={FluentCall} alt="FluentCall" />
                                            <a href="tel:+99871 231-20-02"> {content[lang].footer[3].link[0]}</a>
                                        </span>
                                        <span>
                                            <img src={FluentEmail} alt="FluentEmail" />
                                            <a href="email:info@ddgi.uz"> {content[lang].footer[3].link[1]}</a>
                                        </span>
                                    </li>
                                    <li className="footer__subitem">
                                        <h5 className="footer__txt">{content[lang].footer[4].subtitle}</h5>
                                        <span>
                                            <img src={FluentLocation} alt="FluentLocation" />
                                            <a target='_blank' href="https://www.google.com/maps/place/27+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%9D%D0%B0%D0%B2%D0%BE%D0%B8,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+100011,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3257527,69.2270163,14z/data=!4m20!1m14!4m13!1m4!2m2!1d69.228153!2d41.3260977!4e1!1m6!1m2!1s0x38ae8b74428e0257:0xb8246def81752fc5!2zMjcg0L_RgNC-0YHQv9C10LrRgiDQndCw0LLQvtC4LCDQotCw0YjQutC10L3RgiAxMDAwMTE!2m2!1d69.2444271!2d41.3226813!5i2!3m4!1s0x38ae8b74428e0257:0xb8246def81752fc5!8m2!3d41.3226813!4d69.2444271"> {content[lang].footer[4].link[0]}</a>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="footer__web-link" style={{ fontSize: `${16 + size}` + 'px' }}>{content[lang].footer[5].text}</p>
                <hr className="footer__line" />
                <span className="footer__links" style={{ fontSize: `${16 + size}` + 'px' }}>
                    <p className="footer__links-one">{content[lang].footer[5].links[0]}</p>
                    <a href="#" className="footer__links-two">{content[lang].footer[5].links[1]}</a>
                    <a href="#" className="footer__links-three">{content[lang].footer[5].links[2]}</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;