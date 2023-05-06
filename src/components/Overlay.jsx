import React, { useEffect, useState } from 'react';
import { OverlaySubStyle } from '../styles/homeContainerStyle';
import image01 from '../assets/slide01-02.png'
import image02 from '../assets/slide01-03.png'
import image03 from '../assets/slide01-04.png'
import image04 from '../assets/slide01-05.png'
import image05 from '../assets/slide01-07.png'
import image06 from '../assets/slide01-08.png'
import image07 from '../assets/slide01-09.png'
import image08 from '../assets/slide01-10.png'
import { Container } from 'react-bootstrap';
import { motion, spring } from 'framer-motion';

const Overlay = (props) => {
    const [globalMousePos, setGlobalMousePos] = useState({});
    const [axis, setAxis] = useState({});

    const handleMouseMove = (event) => {
        const localX = ((window.innerWidth / 2) - event.clientX) / 30;
        const localY = ((window.innerHeight / 2) - event.clientY) / 30;

        setAxis({ x: localX, y: localY });
    };

    const windowX = props.width;
    const windowY = props.height;
    useEffect(() => {
        const handleMouseMove = (event) => {
            setGlobalMousePos({
                x: ((window.innerWidth / 2) - event.clientX) / 20,
                y: ((window.innerHeight / 2) - event.clientY) / 20,
            });
        };
        console.log(axis);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            setAxis({ x: 0, y: 0 });
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
            setAxis({ x: 0, y: 0 });
        };
    }, []);
    return (
        <motion.div
            style={{marging:0, padding:0, }}
            animate={{ x: globalMousePos.x, y: globalMousePos.y, mass: 0 }}
            transition={{ type: "tween", stiffness: 100 }}

            >
            <Container 
            component={motion.div} 
            animate={{ x: globalMousePos.x, y: globalMousePos.y, mass: .6, type: spring }}>
                <OverlaySubStyle x={windowX / 6.5} y={windowY / 4.6}>
                    <img src={image01} alt='leftSIde'
                        width={'75%'}
                    />
                </OverlaySubStyle>
                <OverlaySubStyle x={windowX / 6.8} y={windowY / 1.7}>
                    <img src={image02} alt='leftSIde'
                        width={'75%'}
                    />
                </OverlaySubStyle>
                <OverlaySubStyle x={windowX / 6.4} y={windowY / 1.3}>
                    <img src={image03} alt='leftSIde'
                        width={'75%'}
                    />
                </OverlaySubStyle>

                <OverlaySubStyle x={windowX / 7} y={windowY / 1.15}>
                    <img src={image04} alt='leftSIde'
                        width={'75%'}
                    />
                </OverlaySubStyle>


                <OverlaySubStyle x={windowX / 1.3} y={windowY / 6}>
                    <img src={image05} alt='leftSIde'
                        width={'75%'}
                    />
                </OverlaySubStyle>
                <OverlaySubStyle x={windowX / 1.43} y={windowY / 6}>
                    <img src={image07} alt='leftSIde'
                        width={'75%'}
                    />
                </OverlaySubStyle>

                <OverlaySubStyle x={windowX / 1.44} y={windowY / 2}>
                    <img src={image08} alt='leftSIde'
                        width={'75%'}
                    />
                </OverlaySubStyle>

                <OverlaySubStyle x={windowX / 1.3} y={windowY / 1.8}>
                    <img src={image06} alt='leftSIde'
                        width={'75%'}
                    />
                </OverlaySubStyle>
            </Container>
        </motion.div>
    );
}

export default Overlay;
