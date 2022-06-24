import styled from "styled-components";
import { colors } from "../../style/colors";

export const Button = styled.button`
    width: 207px;
    border: none;
    font-size: 24px;
    padding: 13px 0;
    font-weight: 800;
    transition: 0.3s ease;
    letter-spacing: -1px;
    font-family: 'Gotham';
    color: ${colors.mainRed};
    text-transform: uppercase;
    background-color: ${colors.white};

    :hover {
        cursor: pointer;
        color: ${colors.white};
        font-size: 23px;
        background-color: ${colors.mainRed};
    }
`;