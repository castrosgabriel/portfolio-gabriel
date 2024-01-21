import React from 'react';
import { motion } from 'framer-motion';
import './Menu.scss';
import { Link } from 'react-router-dom';

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 1.6,
            staggerChildren: 0.1,
        }
    }
};

const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
};

export type SectionItem = {
    id: any;
    sectionName: string;
    link: string;
    active?: boolean;
}

interface MenuProps {
    sectionList: SectionItem[];
    color?: string;
}

const Menu: React.FC<MenuProps & { hideBackButton?: boolean }> = ({
    sectionList, hideBackButton, color = 'var(--color-primary)'
}) => {

    const pathURL: string = window.location.pathname;
    sectionList = sectionList.map((section) => {
        section.active = section.link === pathURL
        return section
    })

    const getActiveClass = (section: SectionItem) => {
        return section.active ? 'active' : ''
    }

    return (
        <div className='menu-master'>
            <div className='header-menu' >

                {!hideBackButton && (
                    <Link to='/'>
                        <li>
                            <h2>
                                Back to Portfolio
                            </h2>
                        </li>
                    </Link>
                )}

                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className='main-menu' >

                    {sectionList.map(sectionItem => (
                        <Link to={sectionItem.link}>

                            <motion.li
                                style={{ color: color }}
                                className={getActiveClass(sectionItem)}
                                key={sectionItem.id}
                                variants={item}
                                whileHover={{
                                    y: -4,
                                    borderBottom: `solid 4px ${color}`,
                                }}>
                                <h2>
                                    {sectionItem.sectionName}
                                </h2>
                            </motion.li>
                        </Link>

                    ))}
                </motion.ul>
            </div >
        </div >
    );
}


export default Menu;

