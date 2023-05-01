import React, { useState, useEffect } from 'react'
import { Container, Flex } from '../styles/globalStyle'
// import { HomeContainer } from '../styles/homeContainerStyle'


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
            <Container>
                <>{globalMousePos.x}</>
                <>{globalMousePos.y}</> 
            </Container>
        </Flex>
    );
}

export default Home