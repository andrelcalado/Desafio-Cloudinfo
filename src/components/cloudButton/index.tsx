import React from "react";
import { Button } from "./styled";

interface IProps {
  label: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CloudButton: React.FC<IProps> = ({ label, onClick, disabled }) => {
  return <Button disabled={disabled} onClick={onClick}>{label}</Button>;
};

export default CloudButton;
