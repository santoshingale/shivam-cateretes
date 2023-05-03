import React from 'react'
import { Flex } from '../styles/globalStyle'
import { HomeContainer } from '../styles/homeContainerStyle';
import Header from './Header';
import HomeCenterComponent from './HomeCenterComponent';
import leftImage from '../assets/slide01-01.png'
import rightImage from '../assets/slide01-06.png'
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { LazyMotion, domAnimation, m } from "framer-motion"
import Overlay from './Overlay';




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
    // const [globalMousePos, setGlobalMousePos] = useState({});
    // const [axis, setAxis] = useState({});

    // const handleMouseMove = (event) => {
    //     const localX = ((window.innerWidth / 2) - event.clientX) / 50;
    //     const localY = ((window.innerHeight / 2) - event.clientY ) / 50;

    //     setAxis({ x: localX, y: localY });
    // };



    // useEffect(() => {
    //     const handleMouseMove = (event) => {
    //         setGlobalMousePos({
    //             x: event.clientX,
    //             y: event.clientY,
    //         });
    //     };

    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         setAxis({x: 0, y : 0});
    //         window.removeEventListener(
    //             'mousemove',
    //             handleMouseMove
    //         );
    //         setAxis({x: 0, y : 0});            
    //     };
    // }, []);

    return (
        <LazyMotion features={domAnimation}>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Flex component={m.div} flexCenter>
                    <HomeContainer>
                        <Overlay />

                        <Header></Header>
                        <Grid container spacing={0}>
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
                                style={{display: 'block',
                                width: '75%',
                                // width: 'auto',
                                height: '92%',
                            }}
                             height={'auto'} alt='leftSIde'/>

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
                    </HomeContainer>
                </Flex>
            </m.div>
        </LazyMotion>

    );
}

export default Home