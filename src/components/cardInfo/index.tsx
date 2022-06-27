import React from "react";
import { Card } from "./styled";

interface IProps {
    label: string;
}

const CardInfo: React.FC<IProps> = ({ label}) => {
  return <Card>{label}</Card>;
};

export default CardInfo;
