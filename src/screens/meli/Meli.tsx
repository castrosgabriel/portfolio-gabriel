import React from 'react';
import { useEffect } from 'react';
import './Meli.scss';
import { MeliLogo } from "../../assets/svg";
import ProjectHeader from '../../components/project-header/ProjectHeader';
import FullWidth from '../../components/full-width/FullWidth';

import Download from '../../assets/png/meli/download.png';
import Problem from '../../assets/png/meli/problem.png';
import User from '../../assets/png/meli/user.png';
import Current1 from '../../assets/png/meli/current.png';
import Current2 from '../../assets/png/meli/current-2.png';
import Admin from '../../assets/png/meli/admin.png';

import Hierarchy from '../../assets/png/meli/hierarchy.png';
import Hub from '../../assets/png/meli/hub.png';
import Step from '../../assets/png/meli/step.png';
import DesignSystem from '../../assets/png/meli/design-system.png';

import Result from '../../assets/png/meli/result.png';
import bgMeli from '../../assets/png/meli/bg-meli.png';

import { ScrollToTopOnNavigation } from '../../components/scroll-up/ScrollToTopOnNavigation';

const Meli = () => {
    return (
        <div>
            <ScrollToTopOnNavigation />
            <ProjectHeader
                projectTitle="Redesign: seller's<br> dashboard."
                projectSubtitle="The new integration experience for Woocommerce."
                projectDescription="To provide payment method with simple integration Mercado Pago has plugins in some of the most important ecommerce services available."
                logo={MeliLogo}
                backgroundColor='rgba(0, 143, 206, 0.9)'
                secondaryColor='var(--color-secondary)'
                backgroundImg={bgMeli}
            />
            <FullWidth
                backgroundColor='#F3F3F3'>
                <div className='explainer'>
                    <div className='block-text'>
                        <h3>The product</h3>
                        <h2>A plugin that provides the whole Mercado Pago's variety of payment methods in WooComerce.</h2>
                    </div>
                    <div className='block-text'>
                        <h3>WooCommerce</h3>
                        <h2>Ecommerce Platform.<br />
                            Runs in WordPress.<br />
                            Open source.<br />
                            Simple Setup.
                        </h2>
                    </div>
                    <img src={Download} />
                </div>

            </FullWidth>
            <FullWidth backgroundColor='#F3F3F3'>
                <div className='spacer-meli' />
            </FullWidth>
            <FullWidth backgroundColor='#F3F3F3'>
                <div className='problems'>
                    <img src={Problem} />
                    <div className='problem-list'>
                        <h3>_problem</h3>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path d="M1.88037 33.3354L32.6419 2.57389M32.6419 2.57389L1.88037 2.57389M32.6419 2.57389L32.6419 33.3354" stroke="#FF0000" stroke-width="4" />
                                </svg>
                                <h1>Contact Rate</h1>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path d="M1.88037 33.3354L32.6419 2.57389M32.6419 2.57389L1.88037 2.57389M32.6419 2.57389L32.6419 33.3354" stroke="#FF0000" stroke-width="4" />
                                </svg>
                                <h1>Churn</h1>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <path d="M33.6418 1.41699L2.88028 32.1785M2.88028 32.1785L33.6418 32.1785M2.88028 32.1785L2.88029 1.41699" stroke="#FF0000" stroke-width="4" />
                                </svg>
                                <h1>Bad feedback</h1>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <path d="M33.6418 1.41699L2.88028 32.1785M2.88028 32.1785L33.6418 32.1785M2.88028 32.1785L2.88029 1.41699" stroke="#FF0000" stroke-width="4" />
                                </svg>
                                <h1>Lack of information</h1>
                            </li>
                        </ul>
                    </div>
                </div>
            </FullWidth>
            <FullWidth backgroundColor='#222121'>
                <div className='user-container'>
                    <div className='user-info'>
                        <div className='user-text'>
                            <h3>_user</h3>
                            <h2>
                                The average user are owners of
                                <h2> small ecommerce business </h2>
                                with little to none development team or knowledge to do any complex integration.
                            </h2>
                        </div>
                        <img src={User} />
                    </div>
                </div>
            </FullWidth>
            <FullWidth backgroundColor='#222121'>
                <div className='journey-container-meli'>
                    <h1>User journey</h1>
                    <div className='journey-meli'>
                        <div className='journey-item'>
                            <div className='indicator'>
                                <div className='circle' />
                                <div className='line' />
                            </div>
                            <h3>Create a store</h3>
                        </div>
                        <div className='journey-item'>
                            <div className='indicator'>
                                <div className='circle' />
                                <div className='line' />
                            </div>
                            <h3>Chooses
                                Mercado
                                Pago</h3>
                        </div>
                        <div className='journey-item'>
                            <div className='indicator'>
                                <div className='circle' />
                                <div className='line' />
                            </div>
                            <h3><b>Install
                                the plugin</b>
                            </h3>
                            <div className='line-red' />
                        </div>
                        <div className='journey-item'>
                            <div className='indicator'>
                                <div className='circle' />
                                <div className='line' />
                            </div>
                            <h3>
                                <b> Configure the account </b>
                            </h3>
                            <div className='line-red' />

                        </div>
                        <div className='journey-item'>
                            <div className='indicator'>
                                <div className='circle' />
                                <div className='line' />

                            </div>
                            <h3>
                                <b>Costumize the payment methods</b>
                            </h3>
                            <div className='line-red' />

                        </div>
                        <div className='journey-item'>
                            <div className='indicator'>
                                <div className='circle' />
                                <div className='line' />
                            </div>
                            <h3>Test the store</h3>
                        </div>
                        <div className='journey-item'>
                            <div className='indicator'>
                                <div className='circle' />
                            </div>
                            <h3>Start selling!</h3>
                        </div>
                    </div>
                </div>

            </FullWidth>
            <FullWidth backgroundColor='#222121'>
                <div className='research'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="166" height="16" viewBox="0 0 166 16" fill="none">
                        <path d="M165.707 8.70711C166.098 8.31658 166.098 7.68342 165.707 7.29289L159.343 0.928932C158.953 0.538408 158.319 0.538408 157.929 0.928932C157.538 1.31946 157.538 1.95262 157.929 2.34315L163.586 8L157.929 13.6569C157.538 14.0474 157.538 14.6805 157.929 15.0711C158.319 15.4616 158.953 15.4616 159.343 15.0711L165.707 8.70711ZM165 7L0 7L0 9L165 9V7Z" fill="#FF0000" />
                    </svg>
                    <h1>
                        The research has shown that the main
                        <span> pain points </span>
                        were in the setup and integration part of the journey
                    </h1>
                </div>
            </FullWidth>
            <FullWidth backgroundColor='#000'>
                <div className='current-container'>
                    <div className='current-state'>
                        <h4>
                            How the experience looked like before the Redesign.
                        </h4>
                        <h3>
                            A lot of replicated information <br />
                            Inconsistent access<br />
                            Duplicated concepts<br />
                            Very generic step-by-step<br />
                            Confusing visual hierarchy<br />
                            Repeated save buttons<br />
                            Low quality visual design
                        </h3>
                    </div>

                    <div className='video-container'>
                        <div className='url-menu'>
                            <div className='circle' />
                            <div className='circle' />
                            <div className='url-bar' />
                        </div>
                        <div className='current-img'>
                            <img src={Current1} />
                        </div>
                    </div>
                </div>

            </FullWidth>

            <FullWidth backgroundColor='#009EE3'>
                <div className='proposal'>
                    <h3>_proposal</h3>
                    <h1>New onboarding <br /> experience</h1>
                    <div className='video-container'>
                        <div className='url-menu'>
                            <div className='circle' />
                            <div className='circle' />
                            <div className='url-bar' />
                        </div>
                        <div className='video-crop'>
                            <img src={Admin} />
                        </div>

                    </div>
                </div>
            </FullWidth>
            <FullWidth backgroundColor='#006E9E'>
                <div className='bento-box'>
                    <div className='bento-column column-1'>
                        <div className='box hierarchy'>
                            <h2><span className='blue'>Hierarchy improvement:</span> making sure the user will see and have access to the main setup before start.</h2>
                            <img src={Hierarchy} />
                        </div>
                        <div className='bento-row'>
                            <div className='box step'>
                                <h2><span className='blue'>Visual feedback</span>  on the steps and narrative navigation.</h2>
                                <img src={Step} />
                            </div>
                            <div className='bento-column text-column'>
                                <div className='box journey'>
                                    <h2>A more efficient journey for those with no background in software development.</h2>
                                </div>
                                <div className='box flow'>
                                    <h2>A brand new flow for the onboarding.</h2>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='bento-column column-2'>
                        <div className='box hub'>
                            <h2><span className='blue'>Payment method hub</span> improvement</h2>
                            <img src={Hub} />
                        </div>
                        <div className='box design-system'>
                            <h2><span className='blue'>Design System </span>application</h2>
                            <img src={DesignSystem} />
                        </div>
                    </div>
                </div>
            </FullWidth>
            <FullWidth backgroundColor='#F3F3F3'>
                <div className='results'>
                    <div className='title'>
                        <h3>_next quarter data</h3>
                        <h1>Results</h1>
                    </div>
                    <div className='numbers-container'>
                        <img src={Result} />
                        <div className='number-list'>
                            <div className='number-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00001 27.9333L31.3474 0.585937L34.1758 3.41436L6.82843 30.7617L32.7616 30.7617L32.7616 34.7617L2.32083e-06 34.7617L3.75288e-06 2.00015L4.00001 2.00015L4.00001 27.9333Z" fill="#03C216" />
                                </svg>
                                <div className='number-info'>
                                    <h1>-63%</h1>
                                    <h3>Configuration time</h3>
                                </div>
                            </div>
                            <div className='number-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1758 6.82844L2.82843 34.1758L3.37287e-08 31.3474L27.3473 4.00001L1.41421 4.00001L1.41421 1.1461e-05L34.1758 1.18516e-05L34.1758 32.7616L30.1758 32.7616L30.1758 6.82844Z" fill="#03C216" />
                                </svg>
                                <div className='number-info'>
                                    <h1>77%</h1>
                                    <h3>Configuration time</h3>
                                </div>
                            </div>
                            <div className='number-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00001 27.9333L31.3474 0.585937L34.1758 3.41436L6.82843 30.7617L32.7616 30.7617L32.7616 34.7617L2.32083e-06 34.7617L3.75288e-06 2.00015L4.00001 2.00015L4.00001 27.9333Z" fill="#03C216" />
                                </svg>
                                <div className='number-info'>
                                    <h1>-40%</h1>
                                    <h3>Configuration time</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </FullWidth>
        </div>
    )
}

export default Meli