import React, { ImgHTMLAttributes } from "react";
import { observer } from "mobx-react";

import { ImageStyled } from "./Image.styled";

export const Image = observer<React.FC<ImgHTMLAttributes<HTMLImageElement>>>(
  (props) => {
    return <ImageStyled {...props}></ImageStyled>;
  }
);
