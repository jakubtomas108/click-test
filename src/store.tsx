import React from "react";
import { makeAutoObservable } from "mobx";

import { CabinetScene } from "./scenes/CabinetScene";
import { DoorScene } from "./scenes/DoorScene";
import { EntryScene } from "./scenes/EntryScene";
import { HangerScene } from "./scenes/HangerScene";
import { WashroomScene } from "./scenes/WashroomScene";

export enum EItems {
  jacket = "jacket",
  key = "key",
}

export enum EScenes {
  entry = "entry",
  hanger = "hanger",
  washroom = "washroom",
  door = "door",
  cabinet = "cabinet",
}

export const sceneMap: Record<string, React.ReactElement> = {
  [EScenes.entry]: <EntryScene />,
  [EScenes.hanger]: <HangerScene />,
  [EScenes.washroom]: <WashroomScene />,
  [EScenes.door]: <DoorScene />,
  [EScenes.cabinet]: <CabinetScene />,
};

export class Store {
  scene: EScenes = EScenes.entry;
  items: EItems[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  hasItem = (item: EItems) => {
    return this.items.includes(item);
  };

  addItem = (item: EItems) => {
    if (!this.hasItem(item)) this.items.push(item);
  };

  setScene = (scene: EScenes) => {
    if (this.scene !== scene) this.scene = scene;
  };
}

export const store = new Store();
