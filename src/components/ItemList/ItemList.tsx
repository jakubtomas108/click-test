import React from "react";
import { observer } from "mobx-react";

import { ItemListStyled, ItemListPopup } from "./ItemList.styled";
import { store, itemMap } from "../../store";

export const ItemList = observer<React.FC>(() => {
  return (
    <ItemListStyled onClick={store.closeItemList}>
      <ItemListPopup onClick={(e) => e.stopPropagation()}>
        {store.items.length === 0
          ? "Nemáš žádné předměty"
          : store.items.map((item, i) => (
              <div key={i} onClick={() => store.selectItem(item)}>
                {itemMap[item].title}
              </div>
            ))}
      </ItemListPopup>
    </ItemListStyled>
  );
});
