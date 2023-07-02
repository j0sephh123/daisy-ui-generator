import { State } from "./types";

export const initialdialogState: State["dialog"] = {
  showFn: undefined,
  closeFn: undefined,
};

export const initialState: State = {
  dialog: initialdialogState,
};
