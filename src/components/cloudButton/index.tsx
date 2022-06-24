import React from "react";
import { Button } from "./styled";

interface IProps {
  label: string;
}

const CloudButton: React.FC<IProps> = ({ label }) => {
  return <Button>{label}</Button>;
};

export default CloudButton;
