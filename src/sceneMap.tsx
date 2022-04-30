import React from "react";

import { EScenes } from "./types";

import { CabinetScene } from "./scenes/CabinetScene";
import { DoorScene } from "./scenes/DoorScene";
import { EntryScene } from "./scenes/EntryScene";
import { HangerScene } from "./scenes/HangerScene";
import { WashroomScene } from "./scenes/WashroomScene";

export const sceneMap: Record<EScenes, React.ReactElement> = {
  [EScenes.entry]: <EntryScene />,
  [EScenes.hanger]: <HangerScene />,
  [EScenes.washroom]: <WashroomScene />,
  [EScenes.door]: <DoorScene />,
  [EScenes.cabinet]: <CabinetScene />,
};
