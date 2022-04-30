import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { sceneMap } from "./store";
import { store } from "./store";
import { ItemList } from "./components/ItemList";
import { ItemListButton } from "./components/ItemList/ItemListButton";

export const App = observer<React.FC>(() => {
  useEffect(() => {
    // alert("Je úterý - tvým cílem je dostat se do kanceláře!");
  }, []);

  return (
    <>
      <div>{sceneMap[store.scene]}</div>
      {store.isItemListOpen ? <ItemList /> : <ItemListButton />}
    </>
  );
});
