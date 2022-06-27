import styled from "styled-components";
import { colors } from "../../style/colors";

export const Main = styled.main`
  margin: 0 auto;
  max-width: 1115px;
  padding: 165px 0 80px;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  gap: 25px;
  padding: 26px 0 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.mainRed};
  z-index: 1000;
`;

export const LogoMarvel = styled.img``;

export const SearchInput = styled.input`
  height: 40px;
  width: 432px;
  border: none;
  padding-left: 14px;
  border-radius: 3px;
  font-style: italic;
  color: ${colors.text};
  font-weight: 500;
  font-family: 'Gotham';

  :focus {
    outline: none;
  }
`;

export const MagazinesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 60px;
  gap: 20px;
`;

export const Loading = styled.section`
  
`;

export const CloudButtonsContainer = styled.footer`
  display: flex;
  justify-content: space-between;
`;
