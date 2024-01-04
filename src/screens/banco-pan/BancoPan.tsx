import React from 'react';
import { useEffect } from 'react';
import './BancoPan.scss';
import { Link } from 'react-router-dom';
import { PanLogo } from "../../assets/png";
import ProjectHeader from '../../components/project-header/ProjectHeader';

import bgPan from '../../assets/png/pan/bg-pan.png';
import FullWidth from '../../components/full-width/FullWidth';
import Hypotesis from '../../assets/png/pan/hypotesis.png';
import BgResearch from '../../assets/png/pan/research-bg.png';
import Proposal from '../../assets/png/pan/proposal.png';
import Navigation from '../../assets/png/pan/navigation.png';
import Onboarding from '../../assets/png/pan/onboarding.png';
import Transfer from '../../assets/png/pan/transfer.png';
import Activities from '../../assets/png/pan/activities.png';

const ScrollToTopOnNavigation: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
};

const BancoPan = () => {
    return (
        <div>
            <ScrollToTopOnNavigation />

            <ProjectHeader
                projectTitle="New Digital <br /> Bank"
                projectSubtitle="Launch of the app of Banco Pan."
                projectDescription="With a small design team we created the first MVP for the Banco Pan Digital Bank App. A full service bank."
                logo={PanLogo}
                backgroundColor='rgba(0, 175, 255, 0.8)'
                secondaryColor='var(--color-secondary)'
                backgroundImg={bgPan}
            />

            <FullWidth>
                <div className='challenge-container'>
                    <div className='challenge'>
                        <h1>The challenge.</h1>
                        <h4>Build from scratch.<br />
                            Limited time.<br />
                            New strategy.<br />
                            Cultural change.</h4>
                    </div>
                    <div className='target'>
                        <h4>user_target</h4>
                        <h1>18 to 60 years. <br />
                            Lowers social classes.
                        </h1>
                    </div>
                </div>
            </FullWidth>

            <FullWidth
                backgroundColor='#00AFFF'>
                <div className='pan-research'>
                    <h4>Learnings from qualitative research <br />on the target audience:</h4>
                    <h1>
                        Mobile first. <br />
                        Low bank knowledge.<br />
                        High cash usage.<br />
                        A lot of hacks.
                    </h1>
                </div>
            </FullWidth>

            <FullWidth
                backgroundColor='#29282D'>
                <div className='hypotesis'>
                    <h4>First hypothesis on the navigation</h4>
                    <img src={Hypotesis} alt="hypotesis" />
                </div>
            </FullWidth>

            <img src={BgResearch} alt="bg-research" className='bg-research' />

            <FullWidth
                backgroundColor='#29282D'>
                <div className='validation'>
                    <h4>
                        After a big process of <span>usability tests and interviews</span>, we understand witch path we should go to build the most fluid experience.
                    </h4>
                </div>
            </FullWidth>

            <FullWidth>
                <div className='pan-proposal'>
                    <h1>Proposal</h1>
                    <img src={Proposal} alt="proposal" />
                </div>
            </FullWidth>

            <FullWidth
                backgroundColor='#DADADA'>
                <div className='pan-section-container'>
                    <div className='pan-section'>
                        <h4>Main Navigation</h4>
                    </div>
                    <img src={Navigation} />
                </div>
            </FullWidth>

            <FullWidth
                backgroundColor='#DADADA'>
                <div className='pan-section-container'>
                    <div className='pan-section'>
                        <h4>Onboarding</h4>
                    </div>
                    <img src={Onboarding} />
                </div>
            </FullWidth>

            <FullWidth
                backgroundColor='#DADADA'>
                <div className='pan-section-container'>
                    <div className='pan-section'>
                        <h4>Transfer Money</h4>
                    </div>
                    <img src={Transfer} />
                </div>
            </FullWidth>

            <FullWidth
                backgroundColor='#DADADA'>
                <div className='pan-section-container'>
                    <div className='pan-section'>
                        <h4>Activities</h4>
                    </div>
                    <img src={Activities} />
                </div>
            </FullWidth>

            <FullWidth
                backgroundColor='#00AFFF'>
                <div className='pan-results-container'>
                    <h4>Results</h4>
                    <div className='pan-results'>
                        <div className='pan-result-item'>
                            <h1>2MM+</h1>
                            <h3>Downloads in the first year</h3>
                        </div>
                        <div className='pan-result-item'>
                            <h1>10MM+</h1>
                            <h3>Downloads now</h3>
                        </div>
                        <div className='pan-result-item'>
                            <div>
                                <h1>4.6</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                    <path d="M13.5836 0.598861C13.9328 -0.200929 15.0672 -0.20093 15.4164 0.598861L18.7652 8.26823C18.9102 8.60036 19.2236 8.82803 19.5843 8.86332L27.9131 9.67821C28.7817 9.76319 29.1322 10.8421 28.4795 11.4214L22.2203 16.9762C21.9493 17.2168 21.8296 17.5852 21.9075 17.9391L23.7062 26.1121C23.8938 26.9644 22.976 27.6312 22.2234 27.1894L15.0062 22.9531C14.6937 22.7697 14.3063 22.7697 13.9938 22.9531L6.77664 27.1894C6.02401 27.6312 5.10622 26.9644 5.2938 26.1121L7.09255 17.9391C7.17044 17.5852 7.05075 17.2168 6.77969 16.9762L0.520506 11.4214C-0.132225 10.8421 0.21834 9.76319 1.0869 9.67821L9.41573 8.86332C9.77641 8.82803 10.0898 8.60036 10.2348 8.26823L13.5836 0.598861Z" fill="black" />
                                </svg>
                            </div>
                            <h3>Google Play Store</h3>
                        </div>
                        <div className='pan-result-item'>
                            <div>
                                <h1>4.8</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                    <path d="M13.5836 0.598861C13.9328 -0.200929 15.0672 -0.20093 15.4164 0.598861L18.7652 8.26823C18.9102 8.60036 19.2236 8.82803 19.5843 8.86332L27.9131 9.67821C28.7817 9.76319 29.1322 10.8421 28.4795 11.4214L22.2203 16.9762C21.9493 17.2168 21.8296 17.5852 21.9075 17.9391L23.7062 26.1121C23.8938 26.9644 22.976 27.6312 22.2234 27.1894L15.0062 22.9531C14.6937 22.7697 14.3063 22.7697 13.9938 22.9531L6.77664 27.1894C6.02401 27.6312 5.10622 26.9644 5.2938 26.1121L7.09255 17.9391C7.17044 17.5852 7.05075 17.2168 6.77969 16.9762L0.520506 11.4214C-0.132225 10.8421 0.21834 9.76319 1.0869 9.67821L9.41573 8.86332C9.77641 8.82803 10.0898 8.60036 10.2348 8.26823L13.5836 0.598861Z" fill="black" />
                                </svg>
                            </div>
                            <h3>Apple App Store</h3>
                        </div>

                    </div>

                </div>
            </FullWidth>

        </div>

    )
}

export default BancoPan