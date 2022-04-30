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
  potion = "potion",
}

interface IItemProps {
  title: string;
  callback?: (store: Store) => void;
}

export const itemMap: Record<EItems, IItemProps> = {
  [EItems.jacket]: { title: "Bunda" },
  [EItems.key]: { title: "Klíče" },
  [EItems.potion]: {
    title: "Lektvar",
    callback: (store: Store) => {
      store.addItem(EItems.jacket);
      store.addItem(EItems.key);
      store.removeItem(EItems.potion);
    },
  },
};

export enum EScenes {
  entry = "entry",
  hanger = "hanger",
  washroom = "washroom",
  door = "door",
  cabinet = "cabinet",
}

export const sceneMap: Record<EScenes, React.ReactElement> = {
  [EScenes.entry]: <EntryScene />,
  [EScenes.hanger]: <HangerScene />,
  [EScenes.washroom]: <WashroomScene />,
  [EScenes.door]: <DoorScene />,
  [EScenes.cabinet]: <CabinetScene />,
};

const didPlay = localStorage.getItem("didPlay");

export class Store {
  isItemListOpen: boolean = false;

  scene: EScenes = EScenes.entry;
  items: EItems[] = !!didPlay ? [EItems.potion] : [];

  selectItemCallback: any;

  constructor() {
    makeAutoObservable(this);
  }

  hasItem = (item: EItems) => {
    return this.items.includes(item);
  };

  addItem = (item: EItems) => {
    if (!this.hasItem(item)) this.items.push(item);
  };

  removeItem = (item: EItems) => {
    if (this.hasItem(item)) this.items = this.items.filter((x) => x !== item);
  };

  setScene = (scene: EScenes) => {
    if (this.scene !== scene) this.scene = scene;
  };

  setOpenItemList = (value: boolean) => {
    this.isItemListOpen = value;
  };

  promptSelectItem = (callback: any) => {
    this.selectItemCallback = callback;
    this.setOpenItemList(true);
  };

  selectItem = (item: EItems) => {
    if (this.isItemListOpen) {
      if (this.selectItemCallback) {
        this.selectItemCallback(item);
        this.closeItemList();
      } else if (itemMap[item].callback) {
        itemMap[item].callback?.(this);
      }
    }
  };

  closeItemList = () => {
    this.setOpenItemList(false);
    this.selectItemCallback = undefined;
  };
}

export const store = new Store();
