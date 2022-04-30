import { Store } from "./store";

export enum EItems {
  jacket = "jacket",
  key = "key",
  potion = "potion",
}

export enum EScenes {
  entry = "entry",
  hanger = "hanger",
  washroom = "washroom",
  door = "door",
  cabinet = "cabinet",
}

export interface IItemProps {
  title: string;
  callback?: (store: Store) => void;
}
