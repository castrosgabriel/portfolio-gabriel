import React from 'react';
import { useEffect } from 'react';
import './Nubank.scss';

import ProjectHeader from '../../components/project-header/ProjectHeader';
import NuBankLogo from '../../assets/svg/nubank.svg';

import ScreenStructure1 from '../../assets/png/structure-1.png';
import ScreenStructure2 from '../../assets/png/structure-2.png';
import ScreenStructure3 from '../../assets/png/structure-3.png';

import CategorizationExperience1 from '../../assets/png/experience-1.png'
import CategorizationExperience2 from '../../assets/png/experience-2.png'
import CategorizationExperience3 from '../../assets/png/experience-3.png'

import MonthVideo1 from '../../assets/png/nubank-video-1.png'
import MonthVideo2 from '../../assets/png/nubank-video-2.png'

import DetailsLivres from '../../assets/png/detail-livres.png'
import DetailsEssenciais from '../../assets/png/detail-essenciais.png'
import DetailsEconomias from '../../assets/png/detail-economias.png'

import FullWidth from '../../components/full-width/FullWidth';

import Budget from '../../assets/png/meli/budget.png';
import Push from '../../assets/png/meli/push.png';
import BgNu from '../../assets/png/bg-nu.png'

import { ScrollToTopOnNavigation } from '../../components/scroll-up/ScrollToTopOnNavigation';

interface IndicatorProps {
    text: string;
    topSpace?: string;
}

const Indicator: React.FC<IndicatorProps> = ({ text, topSpace }) => {

    const topSpaceStyle: React.CSSProperties = {
        marginTop: topSpace || 'initial',
    };

    return (
        <div className='indicator' style={topSpaceStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="8" viewBox="0 0 38 8" fill="none">
                <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM38 3.5L1 3.5L1 4.5L38 4.5L38 3.5Z" fill="#820AD1" />
            </svg>
            <h3>{text}</h3>
        </div>
    )
}


const Nubank = () => {

    return (
        <div>
            <ScrollToTopOnNavigation />
            <ProjectHeader
                projectTitle='Consumption <br /> Coach'
                projectSubtitle="NuBank's personal financial manager."
                projectDescription="The product has the objective of helping people spend with piece of mind. To visualize your spendings in a simple way and give the users insights about their financial life."
                logo={NuBankLogo}
                backgroundColor='rgba(130, 10, 209, 0.9)'
                secondaryColor='var(--color-secondary)'
                backgroundImg={BgNu}
            />

            <FullWidth backgroundColor='#5A0095'>
                <div className='product-container'>
                    <div className='premise macro'>
                        <div className='premise-title'>
                            <h1>#1</h1>
                            <h2>3 macro <br/> categories</h2>
                        </div>
                        <div className='premise-info'>
                            <div className='macro-item'>
                                <h1>Free</h1>
                                <h3>Spend without worries.</h3>
                            </div>
                            <div className='macro-item'>
                                <h1>Essentials</h1>
                                <h3>Utility,  grocery, rent, etc.</h3>
                            </div>
                            <div className='macro-item'>
                                <h1>Savings</h1>
                                <h3>Take a slice for the future.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='premise budget'>
                        <div className='premise-title'>
                            <h1>#2</h1>
                            <h2>Budgeting</h2>
                        </div>
                        <div className='premise-info'>
                            <img src={Budget}/>
                            <div className='explainer-nu'>
                                <h2>How much do you want to spend?</h2>
                                <h3>We give the user a hint based on their behavior, but it is up to they to set their own budget.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='premise push'>
                        <div className='premise-title'>
                            <h1>#3</h1>
                            <h2>Insights <br/> periodically</h2>
                        </div>
                        <div className='premise-info'>
                            <img src={Push}/>
                            <div className='explainer-nu'>
                                <h2>Weekly push </h2>
                                <h3>Weekly we had notifications to help the user to keep the plan, and give them insights.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </FullWidth>

            <div
                className='container-center'>
                <h4>Product Structure</h4>

                <div className='screen-structure-container'>
                    <div className='general-info'>
                        <h3 className='t1'>Month selector</h3>
                        <h3 className='t2'>Total spending in the month</h3>
                        <h3 className='t3'>Spending to be categorize by the user</h3>
                        <h3 className='t4'>Categorized transactions</h3>
                    </div>

                    <div className='screen-structure'>
                        <div className='screen-structure-img'>
                            <img src={ScreenStructure1} />
                            <img src={ScreenStructure2} />
                            <img src={ScreenStructure3} />
                        </div>
                    </div>

                    <div className='macro-category-info'>
                        <Indicator
                            text='Macrocategory: Free spending'
                        />
                        <Indicator
                            text='Spending visualization'
                            topSpace='16px'
                        />
                        <Indicator
                            text='Categories'
                            topSpace='56px'
                        />

                        <Indicator
                            text='Macrocategory: Essentials spending'
                            topSpace='160px'
                        />
                        <Indicator
                            text='Spending visualization'
                            topSpace='16px'
                        />
                        <Indicator
                            text='Categories'
                            topSpace='56px'
                        />

                        <Indicator
                            text='Macrocategory: Savings'
                            topSpace='160px'
                        />
                        <Indicator
                            text='Progress visualization'
                            topSpace='8px'
                        />
                        <Indicator
                            text='Categories'
                            topSpace='8px'
                        />
                    </div>

                </div>
            </div>

            <div className='categorization-experience-container'>
                <div className='categorization-experience'>
                    <div className='categorization-experience-text'>
                        <h1>
                            Categorization <br /> experience
                        </h1>
                        <h3>
                            Since we have auto-categorization, the only types of transactions user has to categorize manually are the peer-to-peer transfers.
                            <br /><br />
                            Considering this, the idea is to ask the user the sub-category and it will be sent to its macro-category.
                        </h3>
                    </div>
                    <div className='spacer' />
                    <div className='categorization-experience-img'>
                        <img src={CategorizationExperience1} />
                        <img src={CategorizationExperience2} />
                        <img src={CategorizationExperience3} />
                    </div>
                </div>
            </div>

            <div className='monthly-recap'>
                <div className='monthly-recap-info'>
                    <div className='monthly-recap-text'>
                        <h1>Monthly <br /> recap</h1>
                        <h3>An overview of users month based on the info they gave us and what we collect as their primary bank account.</h3>
                    </div>
                    <div className='monthly-recap-video-container'>
                        <img src={MonthVideo1} />
                        <img src={MonthVideo2} />
                    </div>

                </div>
            </div>
            {/* <FullWidth
                backgroundColor='#820AD1'
                padding='72px 120px'
            >
                <div className='journey'>
                    <div className='journey-text'>
                        <div className='spacer' />
                        <h1>
                            Now the user journey has this first moment without plans. We underfstood it's part of the calibration period not setting plans for macro-category.
                        </h1>
                    </div>
                    <img src={NubankJourney} />
                </div>

            </FullWidth> */}

            <FullWidth
                backgroundColor='#5A0095'
                padding='0px 120px'
            >
                <div className='details'>
                    <h2>Macro-category detail screens</h2>
                    <div className='details-img'>
                        <img src={DetailsLivres} />
                        <img src={DetailsEssenciais} />
                        <img src={DetailsEconomias} />
                    </div>
                </div>

            </FullWidth>

        </div>
    );
}

export default Nubank;

