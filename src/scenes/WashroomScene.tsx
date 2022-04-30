import React from "react";
import { observer } from "mobx-react";

import washroomSceneImg from "../assets/3.jpeg";

import { Image } from "../components/Image";
import { Button } from "../components/Button";
import { EScenes, store } from "../store";

export const WashroomScene = observer<React.FC>(() => {
  const handleOpenDoor = () => {
    alert("Dveře nejdou otevřít, v koupelně je obsazeno");
  };

  const turnLeft = () => {
    store.setScene(EScenes.entry);
  };

  const turnRight = () => {
    store.setScene(EScenes.door);
  };

  return (
    <div>
      <Image src={washroomSceneImg} alt="Washroom scene" />

      <Button
        left="0"
        height="100vh"
        text="Otočit se doleva"
        onClick={turnLeft}
      />
      <Button
        right="0"
        height="100vh"
        text="Otočit se doprava"
        onClick={turnRight}
      />

      <Button
        left="35%"
        height="100vh"
        width="750px"
        text="Otevřít dveře"
        onClick={handleOpenDoor}
      />
    </div>
  );
});
