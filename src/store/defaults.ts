import { State } from "./types";

export const initialdialogState: State["dialog"] = {
  showFn: undefined,
  closeFn: undefined,
};

export const initialPreviewState: State["preview"] = {
  selectedVariant: "btn",
};

export const initialState: State = {
  dialog: initialdialogState,
  preview: initialPreviewState,
};
