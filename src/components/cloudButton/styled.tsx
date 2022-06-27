import styled from "styled-components";
import { colors } from "../../style/colors";

interface ButtonProps {
  disabled: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 207px;
  border: none;
  font-size: 24px;
  padding: 13px 0;
  font-weight: 800;
  transition: 0.3s ease;
  letter-spacing: -1px;
  font-family: "Gotham";
  color: ${(props) => (props.disabled ? colors.white : colors.mainRed)};
  text-transform: uppercase;
  background-color: ${(props) => (props.disabled ? colors.text : colors.white)};

  :hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    ${(props) =>
      props.disabled
        ? null
        : `color: ${colors.white};
        font-size: 23px;
        background-color: ${colors.mainRed};`}
  }
`;
