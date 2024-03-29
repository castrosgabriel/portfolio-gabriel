import React from 'react';
import './Ugly.scss';
import { MbLogo } from "../../assets/svg";
import ProjectHeader from '../../components/project-header/ProjectHeader';
import VideoPlayer from '../../components/video-player/VideoPlayer';

import UglyBg from '../../assets/png/ugly/bg-ugly.png';
import VideoModularHome from '../../assets/mp4/ugly/modular-home.mp4';
import FullWidth from '../../components/full-width/FullWidth';
import Tokens from '../../assets/png/ugly/tokens.png';
import Components from '../../assets/png/ugly/components.png';
import Modules from '../../assets/png/ugly/modules.png';
import Template from '../../assets/png/ugly/template.png';

import Button from '../../assets/png/ugly/button.png';
import TextField from '../../assets/png/ugly/text-field.png';
import Switch from '../../assets/png/ugly/switch.png';

import Navbar from '../../assets/png/ugly/navbar.png';
import BottomSheet from '../../assets/png/ugly/bottom-sheet.png';
import Header from '../../assets/png/ugly/header.png';

import FormTemplate from '../../assets/png/ugly/form-template.png';

import PushGit from '../../assets/png/ugly/push-git.png';
import FigmaTokens from '../../assets/png/ugly/figma-tokens.png';
import VideoGeneral from '../../assets/mp4/ugly/home-video.mp4';

import ReserveApp from '../../assets/png/ugly/reserve-app.png';
import ReserveScreen from '../../assets/png/ugly/reserve-screen.png';
import UglyApp from '../../assets/png/ugly/ugly-app.png';
import UglyScreen from '../../assets/png/ugly/ugly-screen.png';

import Illustration1 from '../../assets/png/ugly/illustration1.png';
import Illustration2 from '../../assets/png/ugly/illustration2.png';
import Illustration3 from '../../assets/png/ugly/illustration3.png';
import Illustration4 from '../../assets/png/ugly/illustration4.png';
import Illustration5 from '../../assets/png/ugly/illustration5.png';
import Illustration6 from '../../assets/png/ugly/illustration6.png';

import VideoP2P1 from '../../assets/mp4/ugly/p2p-1.mp4';
import VideoP2P2 from '../../assets/mp4/ugly/p2p-2.mp4';

import { ScrollToTopOnNavigation } from '../../components/scroll-up/ScrollToTopOnNavigation';

const Ugly = () => {
    return (
        <div>
            <ScrollToTopOnNavigation />
            <ProjectHeader
                projectTitle="Design System <br />and app concept."
                projectSubtitle="Mvp of the Ugly Cash product."
                projectDescription="After the rebrand of the previous app, we recreate the whole experience based on the new objective of the company."
                logo={MbLogo}
                backgroundColor='rgba(31, 31, 31, 0.8)'
                secondaryColor='var(--color-secondary)'
                backgroundImg={UglyBg}
            />

            <div className='new-app-container'>
                <h4>A new brand asks for a new app.</h4>
                <div className='new-app-imgs'>
                    <div className='new-app-item reserve'>
                        <div className='new-app-title'>
                            <img src={ReserveApp} className='app-icon' alt="ReserveApp" />
                            <p>Reserve</p>
                        </div>
                        <img src={ReserveScreen} alt="ReserveScreen" />
                    </div>
                    <div className='rebrand-arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="116" height="2" viewBox="0 0 116 2" fill="none">
                            <path d="M116 1H0" stroke="#FA00FF" />
                        </svg>
                        <p><i>Rebrand</i></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="8" viewBox="0 0 104 8" fill="none">
                            <path d="M103.854 4.35354C104.049 4.15828 104.049 3.8417 103.854 3.64644L100.672 0.464457C100.476 0.269195 100.16 0.269195 99.9645 0.464457C99.7692 0.65972 99.7692 0.976302 99.9645 1.17156L102.793 3.99999L99.9645 6.82842C99.7692 7.02368 99.7692 7.34026 99.9645 7.53553C100.16 7.73079 100.476 7.73079 100.672 7.53553L103.854 4.35354ZM0.5 4.5L103.5 4.49999L103.5 3.49999L0.5 3.5L0.5 4.5Z" fill="#FA00FF" />
                        </svg>
                    </div>
                    <div className='new-app-item ugly'>
                        <div className='new-app-title'>
                            <img src={UglyApp} className='app-icon' alt="UglyApp" />
                            <p>Ugly Cash</p>
                        </div>
                        <img src={UglyScreen} alt="UglyScreen" />
                    </div>
                </div>
            </div>

            <FullWidth
                backgroundColor='#191919'>
                <div className='design-system-container'>
                    <h1>Design system</h1>
                    <div className='design-system-subtitle'>
                        <h4>Atomic design logic</h4>
                        <p>The goal was to establish a shared language between design and engineering, enabling seamless collaboration and communication.</p>
                    </div>

                    <div className='design-system-topics'>
                        <div className="topic-item tokens-container">

                            <div className='topic-item-title'>
                                <img src={Tokens} alt="Tokens" />
                                <h3>Tokens</h3>
                            </div>

                            <ul>
                                <li>Typescales</li>
                                <li>Colors</li>
                                <li>Spacing</li>
                                <li>Styling</li>
                            </ul>
                        </div>

                        <div className="topic-item components-container">
                            <div className='topic-item-title'>
                                <img src={Components} alt="Components" />
                                <h3>Components</h3>
                            </div>
                            <div className='components-imgs'>
                                <img src={Button} alt="Button" />
                                <img src={TextField} alt="TextField" />
                                <img src={Switch} alt="Switch" />
                            </div>

                        </div>
                        <div className="topic-item modules-container">
                            <div className='topic-item-title'>
                                <img src={Modules} alt="Modules" />
                                <h3>Modules</h3>
                            </div>
                            <div className='components-imgs'>
                                <img src={Navbar} alt="Navbar" />
                                <img src={BottomSheet} alt="BottomSheet" />
                                <img src={Header} alt="Header" />
                            </div>
                        </div>
                        <div className="topic-item template-container">
                            <div className='topic-item-title'>
                                <img src={Template} alt="Template" />
                                <h3>Template</h3>
                            </div>

                            <div className='components-imgs'>
                                <img src={FormTemplate} alt="FormTemplate" />
                            </div>
                        </div>

                    </div>

                    <div className='design-system-subtitle'>
                        <h4>Update straight to Github  through Tokens Studio plugin</h4>
                        <p>Experience real-time updates of all design tokens from Figma to code.</p>
                        <div className='figma-tokens'>
                            <img src={PushGit} className="push" alt="PushGit" />
                            <img src={FigmaTokens} alt="FigmaTokens" />
                        </div>
                    </div>
                </div>
            </FullWidth>
            <FullWidth
                backgroundColor='#E0E0E0'>
                <div className='modular-home-container'>
                    <div className='modular-home-title'>
                        <h1> Modular <br /> Home Screen</h1>
                        <h3>The idea is to have a variable home screen considering user jouney and needs from the business side too.</h3>
                    </div>

                    <VideoPlayer video={VideoModularHome} isLoop={true} />

                </div>
            </FullWidth>

            <FullWidth backgroundColor='#191919'>

                <div className='branding-container'>
                    <div className='branding-title'>
                        <h1>New <br />illustration <br />style</h1>
                        <p>Analog + ignorant intervention</p>
                    </div>

                    <div className='illustration-imgs'>
                        <img src={Illustration1} alt="Illustration1" />
                        <img src={Illustration2} alt="Illustration2" />
                        <img src={Illustration3} alt="Illustration3" />
                        <img src={Illustration4} alt="Illustration4" />
                        <img src={Illustration5} alt="Illustration5" />
                        <img src={Illustration6} alt="Illustration6" />
                    </div>

                    <p style={{ color: "#FA00FF" }} >
                        My role: I was part of the team to define the style of the new brand on the product side.
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="1210" height="2" viewBox="0 0 1210 2" fill="none">
                        <path d="M0 1H1210" stroke="#FA00FF" strokeWidth="2" />
                    </svg>

                    <div className='animation-container'>
                        <div className='branding-title'>
                            <h1>Cool <br />animations</h1>
                            <p>So real-time updating all tokens from figma to code.</p>
                        </div>
                        <div className='video-container-uc'>
                            <VideoPlayer video={VideoP2P1} isLoop={true} />
                            <VideoPlayer video={VideoP2P2} isLoop={true} />
                        </div>
                    </div>
                </div>
            </FullWidth>

            <div className='video-general-ugly'>
                <VideoPlayer video={VideoGeneral} isLoop={true} />
            </div>


        </div>
    )
}



export default Ugly