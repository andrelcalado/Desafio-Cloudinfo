import styled from "styled-components";
import { colors } from "../../style/colors";

interface CardContainerProps {
  favorite: boolean;
  thumb: string;
}

interface HoverProps {
  hover: boolean;
  favorite: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  background: url(${(props) => props.thumb});
  background-size: cover;
  position: relative;
  width: 207px;
  height: 320px;
  animation: born 2s ease;
  border: ${(props) =>
    props.favorite ? `10px solid ${colors.mainRed}` : "0px solid transparent"};
  transition: 0.3s ease;

  :hover {
    cursor: pointer;
    border-bottom: 10px solid ${colors.mainRed};
  }
`;

export const Overlay = styled.div<HoverProps>`
  transition: 0.3s ease;
  background-color: ${(props) => (props.hover || props.favorite ? colors.backOverlay : "none")};
  width: 100%;
  height: 100%;
`;

export const HeartIcon = styled.img<HoverProps>`
  position: absolute;
  width: 25px;
  right: 10px;
  top: 10px;
  opacity: ${(props) => (props.hover || props.favorite ? 1 : 0)};
  transition: 0.3s ease;
`;

export const CardLabel = styled.p<HoverProps>`
  opacity: ${(props) => (props.hover || props.favorite ? 1 : 0)};
  position: absolute;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 14.7px;
  width: 100%;
  bottom: 0;
  background-color: ${colors.white};
  font-size: 14.7px;
  padding: 11px 10px 10px;
  transition: 0.3s ease;
`;
