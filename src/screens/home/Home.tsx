import PresentationScreen from "../presentation-screen/PresentationScreen";
import ProjectComponent from "../../components/project-component/ProjectComponent";
import ProjectNav, { ListItem } from '../../components/project-nav/ProjectNav';
import { Element } from "react-scroll";
import { Helmet } from "react-helmet";
import LoadingScreen from "../../components/loading-screen/LoadingScreen";
import {
    MbLogo,
    MeliLogo,
    NuBankLogo
} from "../../assets/svg";

import {
    MeliProject,
    NuBankProject,
    PanProject,
    PanLogo,
    MbProject
} from "../../assets/png";
import "./Home.scss";

const Home = () => {

    const projectList: ListItem[] = [
        { id: 'section-home', title: '', dontShow: true },
        { id: 'section-0', title: 'nubank' },
        { id: 'section-1', title: 'mercado livre' },
        { id: 'section-2', title: 'ugly cash' },
        { id: 'section-3', title: 'banco pan', blackText: true }
    ]

    return (
        <div>
            <Helmet>
                <title>Gabriel Castro</title>
            </Helmet>
            <ProjectNav
                listItems={projectList}
            />

            <LoadingScreen />

            <Element name='section-home'>
                <section id="section-home">
                    <PresentationScreen />
                </section>
            </Element>

            <Element name='section-0'>
                <section id='section-0'>
                    <ProjectComponent
                        projectTitle='Consumption <br> Coach'
                        projectDescription="NuBank's personal financial manager."
                        projectImg={NuBankProject}
                        logo={NuBankLogo}
                        backgroundColor="#5B0694"
                        secondaryColor="var(--color-secondary)"
                        link='/nubank'
                    />
                </section>
            </Element>
            <Element name='section-1'>
                <section id='section-1'>
                    <ProjectComponent
                        projectTitle="Seller's admin <br> ecommerce"
                        projectDescription="Redesign of the Mercado Pago's sellers onboarding."
                        projectImg={MeliProject}
                        logo={MeliLogo}
                        backgroundColor='#03A9E3'
                        secondaryColor='var(--color-secondary)'
                        link='/meli'
                    />
                </section>
            </Element>

            <Element name='section-2'>
                <section id='section-2'>
                    <ProjectComponent
                        projectTitle='Design System <br> and app concept'
                        projectDescription="Launching of the MVP of the wallet | In progress"
                        projectImg={MbProject}
                        logo={MbLogo}
                        backgroundColor='#141414'
                        secondaryColor='var(--color-secondary)'
                        link='/uglycash'
                    />
                </section>
            </Element>
            <Element name='section-3'>
                <section id='section-3'>
                    <ProjectComponent
                        projectTitle='New Digital <br> Bank'
                        projectDescription="Launching of the MVP of a Bank."
                        projectImg={PanProject}
                        logo={PanLogo}
                        backgroundColor='var(--color-secondary)'
                        secondaryColor='var(--color-primary)'
                        link='/bancopan'
                    />
                </section>
            </Element>
        </div>
    )
}

export default Home