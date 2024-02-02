import styled from "@emotion/styled";
import "@fontsource/poppins/600.css"; // Specify weight

export const InputSearchStyled = styled.input`
    background: white;
    border: none;
    color: ${props => props.title? '#FFF':'#B2B2B2'};
    font-family: 'Poppins;
    font-size: 500px;
    font-style: normal;
    font-weight: ${props => props.title? '600':'500'};
    line-height: normal;
    width: 400px;
    height: 30px;
`