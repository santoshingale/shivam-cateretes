import React, { useState, useEffect } from 'react'
import { Flex } from '../styles/globalStyle'
import { HomeCenterContainder, HomeContainer, HomeSubDiv } from '../styles/homeContainerStyle';
import Header from './Header';
import HomeCenterComponent from './HomeCenterComponent';
import leftImage from '../assets/slide01-01.png'
import rightImage from '../assets/slide01-06.png'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';



const imageGridMotionLeft = {
    hidden: { 
        opacity: 0, 
    //   x: '100vw',
    x: '-5vw',

        transition: {
        staggerChildren: 0.5,
        } 
    },
    visible: { 
        opacity: 1,
        x: 0, 
        transition: { 
        duration: 2,
        when: "beforeChildren",
        }
    },
};

const imageGridMotionRight = {
    hidden: { 
        opacity: 0, 
    //   x: '100vw',
    x: '5vw',

        transition: {
        staggerChildren: 0.5,
        } 
    },
    visible: { 
        opacity: 1,
        x: 0, 
        transition: { 
        duration: 2,
        when: "beforeChildren",
        }
    },
};

const Home = () => {
    const [globalMousePos, setGlobalMousePos] = useState({});
    const [axis, setAxis] = useState({});

    const handleMouseMove = (event) => {
        const localX = ((window.innerWidth / 2) - event.clientX) / 50;
        const localY = ((window.innerHeight / 2) - event.clientY ) / 50;

        setAxis({ x: localX, y: localY });
    };



    useEffect(() => {
        const handleMouseMove = (event) => {
            setGlobalMousePos({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            setAxis({x: 0, y : 0});
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
            setAxis({x: 0, y : 0});            
        };
    }, []);

    return (
        <Flex flexCenter>
        <HomeContainer>
            <Header></Header>
            <Grid container spacing={0}>
                <Grid sx={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                    
                    }} xs={4} md={4}
                    
                    component={motion.div}
                    variants={imageGridMotionLeft}
                    initial="hidden"
                    animate="visible"
                    exit="exit"

                    >
                        <img src={leftImage} height={'75%'}/>
                        
                </Grid>
                <Grid  xs={4} md={4}>
                    {/* <HomeSubDiv> */}
                    <HomeCenterComponent/>
                    {/* </HomeSubDiv> */}

                </Grid>
                <Grid sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                    
                    }}
                    component={motion.div}
                    variants={imageGridMotionRight}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    item xs={4} alignSelf={'right'} md={4}>
                    <img src={rightImage} height={'75%'} />

                </Grid>
            </Grid>
            
        </HomeContainer>
    </Flex>
    );
}

export default Home