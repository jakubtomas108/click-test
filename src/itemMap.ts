import { Store } from "./store";
import { EItems, IItemProps } from "./types";

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
