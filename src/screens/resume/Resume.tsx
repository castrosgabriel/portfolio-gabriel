import React from 'react';
import './Resume.scss';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import FullWidth from '../../components/full-width/FullWidth';

import ReserveIcon from '../../assets/png/reserve-icon.png'
import NubankIcon from '../../assets/png/nubank-icon.png'
import MeliIcon from '../../assets/png/meli-icon.png'
import PanIcon from '../../assets/png/pan-icon.png'
import AgiIcon from '../../assets/png/agi-icon.png'

import AgenciesIcon from '../../assets/png/agencies.png'
import menuList from '../../components/menu/MenuList';




const Resume = () => {
    return (
        <FullWidth>
            <div className='container-column'>
                <Menu sectionList={menuList}/>
                <div className='resume-container'>
                    <div className='resume-info'>
                        <div className='about'>
                            <h1>Resume</h1>
                            <h3>I started my career about 12 years ago. Working at advertising agencies, personal projects, freelance clients and now as UX/UI designer.<br /><br />
                                Blending all of my skills and abilities such as design, product management, art direction, user experience, 3d modeling, music and advertising.<br /><br />
                                I love learning new things, new techniques, new tools and specially learning how to learn more.
                            </h3>
                        </div>
                        <div className='linked-in'>
                            <Link to='https://www.linkedin.com/in/castrogabriel/'>
                                <h2>
                                    See more in my LinkedIn
                                </h2>
                                <svg xmlns="http://www.w3.org/2000/svg" width="283" height="24" viewBox="0 0 283 24" fill="none">
                                    <path d="M282.061 13.0607C282.646 12.4749 282.646 11.5251 282.061 10.9393L272.515 1.3934C271.929 0.807612 270.979 0.807612 270.393 1.3934C269.808 1.97918 269.808 2.92893 270.393 3.51472L278.879 12L270.393 20.4853C269.808 21.0711 269.808 22.0208 270.393 22.6066C270.979 23.1924 271.929 23.1924 272.515 22.6066L282.061 13.0607ZM0 13.5H281V10.5H0V13.5Z" fill="#1F1F1F" />
                                </svg>
                            </Link>

                        </div>
                    </div>

                    <ul>
                        <li>
                            <h3>
                                Today
                            </h3>
                            <div className='company'>
                                <img src={ReserveIcon} />
                                <h2>Reserve</h2>
                            </div>
                            <p>Senior Product Designer</p>

                        </li>
                        <li>
                            <h3> 2022</h3>
                            <div className='company'>
                                <img src={NubankIcon} />
                                <h2>Nubank</h2>
                            </div>
                            <p>Senior Product Designer</p>

                        </li>
                        <li>
                            <h3> 2020</h3>
                            <div className='company'>
                                <img src={MeliIcon} />
                                <h2>Mercado Libre</h2>
                            </div>
                            <p>Senior Product Designer</p>

                        </li>
                        <li>
                            <h3> 2019</h3>
                            <div className='company'>
                                <img src={PanIcon} />
                                <h2>Banco Pan</h2>
                            </div>
                            <p>UX/UI Designer</p>

                        </li>
                        <li>
                            <h3> 2018</h3>
                            <div className='company'>
                                <img src={AgiIcon} />
                                <h2>Agibank</h2>
                            </div>
                            <p>UX/UI Designer</p>

                        </li>

                        <div className='spacer-line' />
                        <div className='agency-experience'>
                            <img src={AgenciesIcon} />
                            <h2>
                                7 years of graphic design in 5 different <br /> advertising agencies.
                            </h2>
                        </div>
                    </ul>
                </div>
            </div>

        </FullWidth>
    );
}

export default Resume;