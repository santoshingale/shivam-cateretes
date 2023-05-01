import styled, {css} from "styled-components";

export const Container = styled.div`
    flex-grow:1;
    margin: 0 0;

    position:relative;
    padding: 0 0;
    width: 100vw;
    height: 100vh;
    ${props => props.fluid && css`
        padding:0;
        margin:0;
        max-width:100%;
    `}
`

export const Flex = styled.div`
flex: 0 1 auto;
position: relative;
display: flex;
align-items: center;
height: 100%;
width: 100%;
${props =>
  props.spaceBetween &&
  css`
    justify-content: space-between;
  `};
${props =>
  props.flexEnd &&
  css`
    justify-content: flex-end;
  `};
${props =>
  props.alignTop &&
  css`
    align-items: flex-start;
  `};
  ${props =>
  props.flexCenter &&
  css`
    justify-content: center;
  `};
${props =>
  props.noHeight &&
  css`
    height: 0;
  `};

`