import React from "react";
import './Employer.scss';
import { StarColor,Star } from '../../Assets/Images/index';
import MarksImg from '../../Assets/Images/mark.svg';
import UserOne from '../../Assets/Images/user1.png';
import UserTwo from '../../Assets/Images/user2.png';
import UserThree from '../../Assets/Images/user3.png';
import content from "../Localization/content";

function Employer({lang,size}) {
    return (
        <div className="employer" style={{ fontSize: `${16 + size}` + 'px'}}>
            <div className="container">
                <h3 className="employer__title">{content[lang].main[5].title}</h3>
                <ul className="employer__list">
                    <li className="employer__item">
                        <img className="employer__marksimg" width='20' height='18' src={MarksImg} alt="MarksImg" />
                        <p className="employer__discription">
                            Amet minim mollit non deserunt ullamco
                            est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt
                            nostrud amet.
                        </p>
                        <span className="employer__star-group">
                            <StarColor />
                            <StarColor />
                            <StarColor />
                            <StarColor />
                            <Star />
                        </span>
                        <span className="employer__user">
                            <img src={UserOne} alt="UserOne" />
                            <span className="employer__user-information">
                                <h5 className="employer__user-name">{content[lang].main[5].user[0].username}</h5>
                                <p className="employer__user-position">{content[lang].main[5].user[0].userjob}</p>
                            </span>
                        </span>

                    </li>
                    <li className="employer__item">
                        <img className="employer__marksimg" width='20' height='18' src={MarksImg} alt="MarksImg" />
                        <p className="employer__discription">
                            Amet minim mollit non deserunt ullamco
                            est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt
                            nostrud amet.
                        </p>
                        <span className="employer__star-group">
                            <StarColor />
                            <StarColor />
                            <StarColor />
                            <StarColor />
                            <StarColor />
                        </span>
                        <span className="employer__user">
                            <img src={UserTwo} alt="UserTwo" />
                            <span className="employer__user-information">
                                <h5 className="employer__user-name">{content[lang].main[5].user[1].username}</h5>
                                <p className="employer__user-position">{content[lang].main[5].user[1].userjob}</p>
                            </span>
                        </span>
                    </li>
                    <li className="employer__item">
                        <img className="employer__marksimg" width='20' height='18' src={MarksImg} alt="MarksImg" />
                        <p className="employer__discription">
                            Amet minim mollit non deserunt ullamco
                            est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt
                            nostrud amet.
                        </p>
                        <span className="employer__star-group">
                            <StarColor />
                            <StarColor />
                            <StarColor />
                            <StarColor />
                            <Star />
                        </span>
                        <span className="employer__user">
                            <img src={UserThree} alt="UserThree" />
                            <span className="employer__user-information">
                                <h5 className="employer__user-name">{content[lang].main[5].user[2].username}</h5>
                                <p className="employer__user-position">Д{content[lang].main[5].user[2].userjob}</p>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Employer;