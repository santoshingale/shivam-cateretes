import styled, {css} from "styled-components";
import background from "../assets/first_background.jpg"
import { Container } from "./globalStyle";

export const HomeContainer = styled(Container)`
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
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