import React from 'react';
import './Contact.scss';
import Menu from '../../components/menu/Menu';
import FullWidth from '../../components/full-width/FullWidth';
import menuList from '../../components/menu/MenuList';


const Contact = () => {
    return (
        <FullWidth >
            <div className='contact-screen'>
                <Menu 
                sectionList={menuList}/>
                <div className='contact-container'>
                    <h1>
                        Contact
                    </h1>
                    <div className='contact-info'>
                        <h2>
                            castro.sgabriel@gmail.com
                        </h2>
                        <h3>
                            Email me!
                        </h3>
                    </div>
                </div>

            </div>

        </FullWidth>
    );
}

export default Contact;