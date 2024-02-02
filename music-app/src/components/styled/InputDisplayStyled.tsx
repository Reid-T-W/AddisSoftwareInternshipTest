import styled from "@emotion/styled";
import "@fontsource/poppins/600.css"; // Specify weight

export const InputDisplayStyled = styled.input`
    background: none;
    border: none;
    color: ${props => props.title? '#FFF':'#B2B2B2'};
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: ${props => props.title? '600':'500'};
    line-height: normal;
`