import React from 'react';
import './ProjectHeader.scss';
import { Link } from 'react-router-dom';




interface ProjectHeaderProps {
    logo: string;
    projectTitle: string;
    projectSubtitle: string;
    projectDescription: string;
    backgroundColor?: string;
    secondaryColor?: string;
    backgroundImg?: string;
}


const ProjectHeader: React.FC<ProjectHeaderProps> = ({
    logo,
    projectTitle,
    projectSubtitle,
    projectDescription,
    backgroundColor,
    secondaryColor,
    backgroundImg,
}) => {

    const backgroundStyle: React.CSSProperties = {
        backgroundColor: backgroundColor || 'initial',
    };

    const secondaryStyle: React.CSSProperties = {
        color: secondaryColor || 'initial',
        fill: secondaryColor || 'initial',
    };

    return (
        <div>
            <div className='internal-screen' style={backgroundStyle}>
                <div className='bg-img'>
                    <img src={backgroundImg}/>
                </div>

                <div className='screen-container'>
                    <div className='project-top'>
                        <div className='header'>
                            <Link to='/'>
                                <div className='back-button'>
                                    <h2 style={secondaryStyle}>Back</h2>
                                    <svg width="179" height="24" viewBox="0 0 179 24" fill="none" style={secondaryStyle}>
                                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM2 13.5H179V10.5H2V13.5Z" />
                                    </svg>
                                </div>
                            </Link>
                            <img src={logo} />
                        </div>

                        <div className='project-info' style={backgroundStyle}>
                            <div className='project-title' >
                                <h1 dangerouslySetInnerHTML={{ __html: projectTitle.replace('<br />', '<br>') }} style={secondaryStyle}></h1>
                                <h3 style={secondaryStyle}>{projectSubtitle}</h3>
                            </div>
                            <div className='project-text'>
                                <h4 style={secondaryStyle}>{projectDescription}</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectHeader;
