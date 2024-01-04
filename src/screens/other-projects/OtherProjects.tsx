import React from 'react';
import './OtherProject.scss';
import Menu from '../../components/menu/Menu';
import FullWidth from '../../components/full-width/FullWidth';
import { Link } from 'react-router-dom';
import AdImage from '../../assets/png/adv-image.png';
import D3Image from '../../assets/png/3d-image.png';
import Music from '../../assets/png/music-image.png';
import menuList from '../../components/menu/MenuList';




const OtherProject = () => {
    return (
        <FullWidth >
            <div className='other-projects'>
                <div className='menu-container'>
                    <Menu 
                    sectionList={menuList}/>
                </div>
                <div className='project-list-container'>
                    <h1>Projects I worked on</h1>
                    <div className='project-list'>
                        <Link className='list-item-container' to='https://www.behance.net/castrogabriel'>
                            <h2>Advertising/<br />Graphic design</h2>
                            <img src={AdImage} className='project-item adv' />
                        </Link>
                        <Link className='list-item-container' to='https://www.artstation.com/castrogabriel'>
                            <h2>3D Art</h2>
                            <img src={D3Image} className='project-item adv' />
                        </Link>
                        <Link className='list-item-container' to='https://www.artstation.com/castrogabriel'>
                            <h2>Music</h2>
                            <img src={Music} className='project-item adv' />
                        </Link>
                    </div>
                    {/* <h3>
                        I love learning new things, new techniques and new tools.
                    </h3> */}
                </div>
            </div>
        </FullWidth>
    );
}

export default OtherProject;