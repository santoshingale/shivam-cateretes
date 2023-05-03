import styled from "styled-components";
import background from "../assets/first_background.jpg"
import { Container } from "./globalStyle";

export const HomeContainer = styled(Container)`
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;    
    position: relative;

`


export const OverlayStyle = styled(Container)`
    box-sizing: border-box;
    z-index: 100;
    height: 100%;
    width: 100%;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    position: relative;
`

export const OverlaySubStyle = styled(Container)`
    z-index: 100;
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
`


export const HomeCenterContainder = styled(Container)`
    margin-top: 6%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const HomeSubDiv = styled(Container)`
    margin-top: 6%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 33.33vwrt8;
`