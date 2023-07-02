import { state } from "../store";
import { DialogBaseState } from "../types";

export const bindDialogControls = (
  show: DialogBaseState["showFn"],
  close: DialogBaseState["closeFn"]
) => {
  if (!state.dialog) return;

  state.dialog.showFn = show;
  state.dialog.closeFn = close;
};

export const openDialog = () => {
  if (state.dialog) {
    state.dialog.showFn?.();
  }
};

export const closeDialog = () => {
  if (!state.dialog) return;

  state.dialog.closeFn?.();
};
