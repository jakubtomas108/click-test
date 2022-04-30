import React from "react";
import { observer } from "mobx-react";

import hangerWithoutJacketImg from "../assets/1.jpeg";
import hangerWithJacketImg from "../assets/5.jpeg";
import { EScenes, store, EItems } from "../store";

import { Image } from "../components/Image";
import { Button } from "../components/Button";

export const HangerScene = observer<React.FC>(() => {
  const getProperImage = () => {
    if (store.hasItem(EItems.jacket)) {
      return (
        <Image src={hangerWithoutJacketImg} alt="Hanger without Jacket scene" />
      );
    }

    return <Image src={hangerWithJacketImg} alt="Hanger with Jacket scene" />;
  };

  const turnLeft = () => {
    store.setScene(EScenes.door);
  };

  const turnRight = () => {
    store.setScene(EScenes.entry);
  };

  const takeJacket = () => {
    store.addItem(EItems.jacket);
    alert("Ahh, venku mi bude teplo");
  };

  return (
    <div>
      {getProperImage()}

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

      {!store.hasItem(EItems.jacket) && (
        <Button
          left="22%"
          bottom="0"
          height="700px"
          width="400px"
          text="Vzít si bundu"
          onClick={takeJacket}
        ></Button>
      )}
    </div>
  );
});
