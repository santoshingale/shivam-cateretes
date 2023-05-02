import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const containerVariants = {
    hidden: { 
      opacity: 0, 
    //   x: '100vw',
      transition: {
        staggerChildren: 0.5,
      } 
    },
    visible: { 
      opacity: 1, 
    //   x: 0,
      transition: { 
        type: 'spring',
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.4,
        when: "beforeChildren",
      }
    },
  };

const AnimerdDiscoverMotion = {
    hidden: { 
      opacity: 0, 
      y: 0,
      transition: {
        staggerChildren: 0.5,
      } 
    },
    visible: { 
      opacity: 1, 
      y: -75,
      transition: { 
        delay: 0.5,
        type: 'spring',
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.4,
        when: "beforeChildren",
      }
    },
};

const CenterDiv = styled(motion.div)`
    margin-top: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

`

const AnimerdDiscover = styled(motion.h2)`
    font-family: 'Montez', cursive;
    color: #fcda9a;
    font-size: 28.8px;
    line-height: 14.4px;
    `;

const Name = styled(motion.h2)`
    font-size: 31.2px;
    line-height: 31.2px;
    font-family: 'Suranna', serif;
    color: #fff;
`
const NameMotion = {
    hidden: { 
      opacity: 0, 
      y: 0,
      transition: {
        staggerChildren: 0.5,
      } 
    },
    visible: { 
      opacity: 1, 
      y: -75,
      transition: { 
        delay: 0.3,
        type: 'spring',
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.4,
        when: "beforeChildren",
      }
    },
};

const HomeCenterComponent = () => {

    return (
    <CenterDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        <AnimerdDiscover 
            variants={AnimerdDiscoverMotion}
            >
        Discover
        </AnimerdDiscover>
        <Name 
            variants={NameMotion}
        >
            SHIVAM CATERERS
        </Name>          
    </CenterDiv>
    );
}

export default HomeCenterComponent;


// style="top: 140px; left: 344px; margin: 0px 0px 6px; padding: 0px; font-size: 28.8px; line-height: 14.4px;"