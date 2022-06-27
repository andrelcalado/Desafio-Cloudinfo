import styled from "styled-components";
import { colors } from "../../style/colors";

export const Card = styled.div`
  width: 100%;
  padding: 20px 100px;
  margin-bottom: 50px;
  font-weight: 500;
  box-shadow: -1px 3px 15px -5px ${colors.black};
  background-color: ${colors.white};
`;
