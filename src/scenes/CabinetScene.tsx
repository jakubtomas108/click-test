import React from "react";
import { observer } from "mobx-react";

import cabinetSceneWithKeysImg from "../assets/6.jpeg";
import cabinetSceneWithoutKeysImg from "../assets/7.jpeg";

import { Image } from "../components/Image";
import { Button } from "../components/Button";
import { EItems, EScenes, store } from "../store";

export const CabinetScene = observer<React.FC>(() => {
  const getProperImage = () => {
    if (store.hasItem(EItems.key)) {
      return (
        <Image
          src={cabinetSceneWithoutKeysImg}
          alt="Hanger without Jacket scene"
        />
      );
    }

    return <Image src={cabinetSceneWithKeysImg} alt="Cabinet with key scene" />;
  };

  const goBack = () => {
    store.setScene(EScenes.entry);
  };

  const takeKey = () => {
    store.addItem(EItems.key);
    alert("Supr, já věděl, že je najdu.");
  };

  return (
    <div>
      {getProperImage()}

      <Button left="0" height="100vh" text="Jít zpět" onClick={goBack} />

      {!store.hasItem(EItems.key) && (
        <Button left="50%" top="43%" text="Vzít klíče" onClick={takeKey} />
      )}
    </div>
  );
});
