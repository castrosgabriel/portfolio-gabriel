import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import './PresentationScreen.scss';

import ScrollUp from '../../components/scroll-up/ScrollUp';
import Menu from '../../components/menu/Menu';
import menuList from '../../components/menu/MenuList';

import Flag from '../../assets/svg/brazil-flag.svg';
import MainPhoto from '../../assets/png/photo-main.png';
import Circle from '../../assets/svg/circle.svg';

import GabPhoto from '../../assets/png/photo-gab.png';
import ElementGreen from '../../assets/svg/element.svg';

const PresentationScreen = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <svg className='grain-container'>
        <filter id='grain'>
          <feTurbulence type='fractalNoise' baseFrequency='1' />
        </filter>
      </svg>

      <div className='bg-blur' />

      <div className='presentation-screen-container'>

        <ScrollUp />

        <div className='circle'>
          <motion.img
            animate={{
              rotate: -360
            }} transition={{
              repeat: Infinity, duration: 12, ease: 'linear'
            }}
            src={Circle} />
        </div>

        <div ref={ref} className='presentation-screen'>

          <div className='menu-container'>
            <Menu
              hideBackButton
              sectionList={menuList}
              color='#606060' />
          </div>

          <div className='title-name-container'>
            <img src={GabPhoto} />
            <div className='title-name'>
              <h1 className='line-1'>Gabriel</h1>
              <div className='line-castro line-2'>
                <img src={ElementGreen} />
                <h1>Castro</h1>
              </div>
              <div className='line-3'>
                <h1>product</h1>
                <div className='clients-container'>
                  <h3 className='item-container'>NUBANK</h3>
                  <h3 className='item-container'>MERCADO LIVRE</h3>
                  <h3 className='item-container'>PAN</h3>
                  <h3 className='item-container'>UGLY CASH</h3>
                </div>
              </div>
              <h1 className='line-4'>designer</h1>
            </div>
          </div>
          <div className='div-spacer' />
        </div>
      </div>
    </>
  );
}

export default PresentationScreen;
