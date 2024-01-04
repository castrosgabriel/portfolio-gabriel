import React from 'react';
import { useEffect } from 'react';
import './Mb.scss';
import { Link } from 'react-router-dom';
import { MbLogo } from "../../assets/svg";
import ProjectHeader from '../../components/project-header/ProjectHeader';


const ScrollToTopOnNavigation: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
};

const Mb = () => {
    return (
        <div>
            <ScrollToTopOnNavigation />

            <ProjectHeader
                projectTitle="Seller's admin <br /> ecommerce"
                projectSubtitle="NuBank's personal financial manager."
                projectDescription="Now the user journey has this first moment without plans. We understood it' s part of the calibration period not setting plans for macro-category."
                logo={MbLogo}
                backgroundColor='#212121'
                secondaryColor='var(--color-secondary)'
            />
        </div>
)}

export default Mb