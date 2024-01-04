import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

import './ProjectComponent.scss';

interface ProjectComponentProps {
  logo: string;
  projectImg: string;
  projectTitle: string;
  projectDescription: string;
  backgroundColor?: string;
  secondaryColor?: string;
  link?: string;
}



const ProjectComponent: React.FC<ProjectComponentProps> = ({
  logo,
  projectImg,
  projectTitle,
  projectDescription,
  backgroundColor,
  secondaryColor,
  link,
}) => {

  const backgroundStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || 'initial',
  };

  const secondaryStyle: React.CSSProperties = {
    color: secondaryColor || 'initial',
    fill: secondaryColor || 'initial',
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className='project-template' style={backgroundStyle}>
      <div className='project-cover'>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition= {{ 
            type: "spring",
            stiffness: 260,
            damping: 40}}
          className='project-info'>

          <img ref={ref} src={logo} />

          <div
            className='project-text' style={secondaryStyle}>
            <h3>
              {projectDescription}
            </h3>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ type: "spring", duration: 0.8, delay: 0, ease:'easeIn' }}
              dangerouslySetInnerHTML={{ __html: projectTitle.replace('<br />', '<br>') }} />
          </div>

          <Link to={link || '/'}>
            <div className='see-more text-white' style={secondaryStyle}>
              <h2>
                See more about it
              </h2>
              <svg width="391" height="24" viewBox="0 0 391 24" fill="none" style={secondaryStyle}>
                <path d="M390.061 13.0607C390.646 12.4749 390.646 11.5251 390.061 10.9393L380.515 1.3934C379.929 0.807612 378.979 0.807612 378.393 1.3934C377.808 1.97918 377.808 2.92893 378.393 3.51472L386.879 12L378.393 20.4853C377.808 21.0711 377.808 22.0208 378.393 22.6066C378.979 23.1924 379.929 23.1924 380.515 22.6066L390.061 13.0607ZM0 13.5H389V10.5H0V13.5Z" />
              </svg>
            </div>
          </Link>

        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='project-img-container'
        >
          <img src={projectImg} />
        </motion.div>

      </div>
    </div>
  );
}

export default ProjectComponent;
