import React, { useEffect } from 'react'
import Header from './Header';
import HomeCenterComponent from './HomeCenterComponent';
import leftImage from '../assets/slide01-01.png'
import rightImage from '../assets/slide01-06.png'
import Grid from '@mui/material/Grid';
import { motion, useMotionValue, useTransform, LazyMotion, domAnimation, m } from "framer-motion"
import Overlay from './Overlay';
import { Container } from 'react-bootstrap';
import background from "../assets/first_background.jpg"
import { useLayoutEffect, useRef, useState } from 'react';



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

    const [width, setWidth] = useState(1440);
    const [height, setHeight] = useState(900 - 100);
    const ref = useRef({});

    useLayoutEffect(() => {
        setWidth(ref.current.scrollWidth);
        setHeight(ref.current.scrollWidth / 2.2);
    }, []);

    return (
        <div ref={ref}>

        <LazyMotion features={domAnimation}  >
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >

                {/* <Flex component={m.div} flexCenter> */}
                    <Container fluid className=" p-0" style={{ backgroundImage: `url(${background})` , backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'}} >
                        <Header />
                        <br></br>
                        <br></br>
                        <motion.div  initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 3 ,delay: 1 }}>
                        <Overlay 
                        height={height} width={width} />
                        </motion.div>
                        <Grid container spacing={0} >
                            <Grid sx={{
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }} xs={4} md={4}
                                height={'auto'}
                                component={motion.div}
                                variants={imageGridMotionLeft}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <img src={leftImage}
                                    style={{
                                        display: 'block',
                                        width: '75%',
                                        // width: 'auto',
                                        height: '92%',
                                    }}
                                    height={'auto'} alt='leftSIde' />

                            </Grid>
                            <Grid xs={4} md={4}>
                                <HomeCenterComponent />
                            </Grid>
                            <Grid sx={{
                                display: 'flex',
                                justifyContent: 'flex-end'

                            }}
                                // maxHeight={'800px'}
                                component={motion.div}
                                variants={imageGridMotionRight}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                item xs={4} alignSelf={'right'} md={4}>
                                <img src={rightImage} width={'48%'} alt='rightside' />

                            </Grid>
                        </Grid>
                    </Container>
                    {/* </Flex> */}

            </m.div>
        </LazyMotion>
        </div >


    );
}

export default Home