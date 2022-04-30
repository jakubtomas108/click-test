import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { sceneMap } from "./store";
import { store } from "./store";
import { ItemList } from "./components/ItemList";
import { ItemListButton } from "./components/ItemList/ItemListButton";
import { EItems } from "./types";

export const App = observer<React.FC>(() => {
  useEffect(() => {
    const didPlay = localStorage.getItem("didPlay");

    if (didPlay) store.addItem(EItems.potion);
  }, []);

  return (
    <>
      <div>{sceneMap[store.scene]}</div>
      {store.isItemListOpen ? <ItemList /> : <ItemListButton />}
    </>
  );
});
