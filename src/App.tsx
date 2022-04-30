import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { sceneMap } from "./store";
import { store } from "./store";

export const App = observer<React.FC>(() => {
  useEffect(() => {
    alert("Je úterý - tvým cílem je dostat se do kanceláře!");
  }, []);

  return <div>{sceneMap[store.scene]}</div>;
});
