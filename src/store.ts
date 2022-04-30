import { makeAutoObservable } from "mobx";

import { EItems, EScenes } from "./types";

import { itemMap } from "./itemMap";
import { sceneMap } from "./sceneMap";

export class Store {
  debug: boolean = false;

  isItemListOpen: boolean = false;

  scene: EScenes = EScenes.entry;
  items: EItems[] = [EItems.mask];

  selectItemCallback: any;

  hasMaskOn = false;

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

export { EItems, EScenes, itemMap, sceneMap };
