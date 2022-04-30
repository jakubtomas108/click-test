import styled, { css } from "styled-components";

import { IButtonProps } from "./Button";

export const ButtonStyled = styled.div<IButtonProps>`
  ${({ debug }) =>
    debug &&
    css`
      border: 2px solid;
    `}

  position: absolute;
  width: ${({ width }) => (width ? width : "100px")};
  height: ${({ height }) => (height ? height : "100px")};
  cursor: pointer;

  ${({ top }) => top && `top: ${top};`};
  ${({ bottom }) => bottom && `bottom: ${bottom};`};
  ${({ left }) => left && `left: ${left};`};
  ${({ right }) => right && `right: ${right};`};
`;
