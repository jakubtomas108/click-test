import React from "react";
import { observer } from "mobx-react";

import entrySceneImg from "../assets/4.jpeg";
import { store, EScenes } from "../store";

import { Image } from "../components/Image";
import { Button } from "../components/Button";

export const EntryScene = observer<React.FC>(() => {
  const turnLeft = () => {
    store.setScene(EScenes.hanger);
  };

  const turnRight = () => {
    store.setScene(EScenes.washroom);
  };

  const openCabinet = () => {
    store.setScene(EScenes.cabinet);
  };

  const openRoomDoor = () => {
    alert("Nene, do pokoje už zpátky nejdu. Potřebuji se přeci dostat ven.");
  };

  return (
    <div>
      <Image src={entrySceneImg} alt="Entry scene" />

      <Button
        left="0"
        height="100vh"
        text="Otočit se doleva"
        onClick={turnLeft}
      />
      <Button
        text="Otočit se doprava"
        right="0"
        height="100vh"
        onClick={turnRight}
      />

      <Button
        text="Otevřít skříň"
        bottom="0"
        height="600px"
        width="550px"
        left="150px"
        onClick={openCabinet}
      />
      <Button
        text="Jít do pokoje"
        height="650px"
        width="380px"
        top="50px"
        left="53%"
        onClick={openRoomDoor}
      />
    </div>
  );
});
