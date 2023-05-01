import styled, {css} from "styled-components";
import background from "../assets/first_background.jpg"
import { Container } from "./globalStyle";

export const HomeContainer = styled(Container)`
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`