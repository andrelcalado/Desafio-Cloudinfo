import React from "react";
import { LoadingStyled } from "./styled";
import marvelLogo from "../../assets/img/marvel_logo.png";

const Loading: React.FC = () => {
  return <LoadingStyled src={marvelLogo} />
};

export default Loading;
