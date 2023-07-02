export type DialogBaseState = {
  showFn: (() => void) | undefined;
  closeFn: (() => void) | undefined;
};

export type PreviewState = {
  selectedVariant: string;
};

export type State = {
  dialog: DialogBaseState;
  preview: PreviewState;
};
