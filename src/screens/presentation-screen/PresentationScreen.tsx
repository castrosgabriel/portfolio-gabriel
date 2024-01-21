import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import './PresentationScreen.scss';

import ScrollUp from '../../components/scroll-up/ScrollUp';
import Menu from '../../components/menu/Menu';
import menuList from '../../components/menu/MenuList';
import Circle from '../../assets/svg/circle.svg';

import GabPhoto from '../../assets/png/photo-gab.png';
import ElementGreen from '../../assets/svg/element.svg';

const containerClients = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 2.5,
      staggerChildren: 0.15,
      ease: 'easeInOut'
    }
  }
}

const itemClients = {
  hidden: {opacity: 0 },
  visible: {
    opacity: 1
  }
}

const PresentationScreen = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>

      <div className='bg-blur' />

      <div className='presentation-screen-container'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5, delay: 1.7 }}
        >
          <ScrollUp />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5, delay: 2 }}
          className='circle'>
          <motion.img alt='circle'
            animate={{
              rotate: -360
            }} transition={{
              repeat: Infinity, duration: 12, ease: 'linear'
            }}
            src={Circle} />
        </motion.div>

        <div ref={ref} className='presentation-screen'>

          <div className='menu-container'>
            <Menu
              hideBackButton
              sectionList={menuList}
              color='#606060' 
              delay={2.2}
              />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className='title-name-container'>
            <img alt='gabphoto' src={GabPhoto} />
            <div className='title-name'>
              <motion.h1
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.8, ease: 'easeInOut' }}
                className='line-1'>
                Gabriel
              </motion.h1>
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
                className='line-castro line-2'>
                <motion.img
                  alt='element'
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  src={ElementGreen} />
                <h1>Castro</h1>
              </motion.div>
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.2, ease: 'easeInOut' }}
                className='line-3'>
                <h1>product</h1>
                <motion.div
                  variants={containerClients}
                  className='clients-container'
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h3 variants={itemClients} className='item-container'>NUBANK</motion.h3>
                  <motion.h3 variants={itemClients} className='item-container'>MERCADO LIVRE</motion.h3>
                  <motion.h3 variants={itemClients} className='item-container'>PAN</motion.h3>
                  <motion.h3 variants={itemClients} className='item-container'>UGLY CASH</motion.h3>
                </motion.div>
              </motion.div>
              <motion.h1
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.4, ease: 'easeInOut' }}
                className='line-4'>
                designer
              </motion.h1>
            </div>
          </motion.div>
          <div className='div-spacer' />
        </div>
      </div>
    </>
  );
}

export default PresentationScreen;
