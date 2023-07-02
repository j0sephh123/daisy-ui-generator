export type DialogBaseState = {
  showFn: (() => void) | undefined;
  closeFn: (() => void) | undefined;
};

export type State = {
  dialog: DialogBaseState;
};
