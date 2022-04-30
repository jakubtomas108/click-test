import React from "react";
import { observer } from "mobx-react";

import doorSceneImg from "../assets/2.jpeg";

import { Image } from "../components/Image";
import { Button } from "../components/Button";
import { EItems, EScenes, store } from "../store";

export const DoorScene = observer<React.FC>(() => {
  const turnLeft = () => {
    store.setScene(EScenes.washroom);
  };

  const turnRight = () => {
    store.setScene(EScenes.hanger);
  };

  const openDoor = () => {
    if (store.hasItem(EItems.jacket) && store.hasItem(EItems.key)) {
      store.promptSelectItem((item: EItems) => {
        if (item === EItems.key) {
          if (!store.hasMaskOn) {
            return alert("Nejprve si musím nasadit roušku.");
          }

          alert("Hurá, jdeme ven!");
          localStorage.setItem("didPlay", "true");
          document.body.innerHTML = `<div style="font-size: 64px; text-align: center;">Vyhrál jsi</div>`;
          return;
        } else {
          alert("S tímhle dveře neodemču!");
          return;
        }
      });
      return;
    }

    if (store.hasItem(EItems.jacket)) {
      return alert("Je zamčeno, musím najít klíče!");
    }

    if (store.hasItem(EItems.key)) {
      return alert("Bez bundy mi bude zima, musím si jí obléct!");
    }

    if (!store.hasItem(EItems.jacket) && !store.hasItem(EItems.key)) {
      return alert(
        "Musím se teple obléct. Mimochodem... kde jsem zase nechal své klíče?"
      );
    }
  };

  return (
    <div>
      <Image src={doorSceneImg} alt="Door scene" />

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
        text="Otevřít dveře"
        left="24%"
        width="60%"
        height="100vh"
        onClick={openDoor}
      />
    </div>
  );
});
