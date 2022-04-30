import React from "react";
import { observer } from "mobx-react";
import ReactTooltip from "react-tooltip";

import { ButtonStyled } from "./Button.styled.";
import { store } from "../../store";

export interface IButtonProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  text: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  debug?: boolean;
}

export const Button = observer<React.FC<IButtonProps>>((props) => {
  return (
    <>
      <ButtonStyled {...props} data-tip={props.text} debug={store.debug} />
      <ReactTooltip />
    </>
  );
});
