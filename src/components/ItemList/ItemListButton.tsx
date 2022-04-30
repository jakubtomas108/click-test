import React from "react";
import { observer } from "mobx-react";
import { ItemListButtonStyled } from "./ItemList.styled";
import { store } from "../../store";

export const ItemListButton = observer<React.FC>(() => {
  return (
    <ItemListButtonStyled
      onClick={() => {
        store.isItemListOpen = true;
      }}
    >
      Předměty
    </ItemListButtonStyled>
  );
});
