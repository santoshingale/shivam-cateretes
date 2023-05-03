import React, { useEffect, useState } from 'react';
import { OverlayStyle, OverlaySubStyle } from '../styles/homeContainerStyle';
import image01 from '../assets/slide01-02.png'
import image02 from '../assets/slide01-03.png'
import image03 from '../assets/slide01-04.png'
import image04 from '../assets/slide01-05.png'
import image05 from '../assets/slide01-07.png'
import image06 from '../assets/slide01-08.png'
import image07 from '../assets/slide01-09.png'
import image08 from '../assets/slide01-10.png'



const Overlay = () => {
    const [globalMousePos, setGlobalMousePos] = useState({});
    const [axis, setAxis] = useState({});

    const handleMouseMove = (event) => {
        const localX = ((window.innerWidth / 2) - event.clientX) / 400;
        const localY = ((window.innerHeight / 2) - event.clientY ) / 400;

        setAxis({ x: localX, y: localY });
    };

    const windowX = window.innerWidth;
    const windowY = window.innerHeight;

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
        <>
            <OverlaySubStyle x={windowX / 6.5} y = {windowY / 4}>
                <img src={image01}  alt='leftSIde' 
                width={'75%'}
                // style={{zIndex:1, width:100, marginLeft:`${globalMousePos.x/5+ axis.x}px`,
                // marginTop:`${globalMousePos.y/4 + axis.y}px`}}
                // style={{position: 'absolute'}}
            />
            </OverlaySubStyle>
            <OverlaySubStyle x={windowX / 6.8} y = {windowY / 1.7}>
                <img src={image02} alt='leftSIde'
                    width={'75%'}  
                />
            </OverlaySubStyle>
            <OverlaySubStyle x={windowX / 6.4} y = {windowY/1.3}>
                <img src={image03} alt='leftSIde'
                    width={'75%'}  
                />
            </OverlaySubStyle>

            <OverlaySubStyle x={windowX / 7} y = {windowY / 1.15}>
                <img src={image04} alt='leftSIde'
                    width={'75%'}  
                />
            </OverlaySubStyle>
            

            <OverlaySubStyle x={windowX / 1.26} y = {windowY / 6}>
                <img src={image05} alt='leftSIde'
                    width={'75%'}  
                />
            </OverlaySubStyle>
            <OverlaySubStyle x={windowX / 1.37} y = {windowY / 6}>
                <img src={image07} alt='leftSIde'
                    width={'75%'}  
                />
            </OverlaySubStyle>

            <OverlaySubStyle x={windowX / 1.4} y = {windowY / 2}>
                <img src={image08} alt='leftSIde'
                    width={'75%'}  
                />
            </OverlaySubStyle>

            <OverlaySubStyle x={windowX / 1.25} y = {windowY / 1.8}>
                <img src={image06} alt='leftSIde'
                    width={'75%'}  
                />
            </OverlaySubStyle>
        </>
    );
}

export default Overlay;
