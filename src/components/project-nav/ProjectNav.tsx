import React, { useEffect, useState } from 'react'
import './ProjectNav.scss'
import { Link } from 'react-scroll';

export type ListItem = {
    id: any;
    title: string;
    blackText?: boolean;
    dontShow?: boolean;
}

interface ProjectNavProps {
    listItems: ListItem[]
}


const ProjectNav: React.FC<ProjectNavProps> = ({
    listItems
}) => {

    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {

                const windowHeightOffset = window.innerHeight / 2;

                const rect = section.getBoundingClientRect();
                if (rect.top <= windowHeightOffset) {
                    setActiveSection(section.id);
                }
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const liClass = (listItem: ListItem) => {
        let className = '';

        const isActive = activeSection === listItem.id;
        const isBlackActive = listItems.find((item) => item.id === activeSection)?.blackText || false;
        const isDontShow = listItems.find((item) => item.id === activeSection)?.dontShow || false;


        className += isActive ? 'active ' : '';
        className += isBlackActive ? 'text-black ' : '';
        className += isDontShow ? 'dont-show ' : '';

        return className.trim();
    };


    return (
        <nav>
            <ul>
                {listItems.map(listItem =>
                    <li
                        className={liClass(listItem)}
                        id={listItem.id}
                        key={listItem.id}
                    >
                        <Link to={listItem.id} smooth={true} duration={400}>
                            <h2>
                                {listItem.title}
                            </h2>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default ProjectNav