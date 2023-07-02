import { state } from "./store";
import { State } from "./types";

export const setSelectedVariant = (
  selectedVariant: State["preview"]["selectedVariant"]
) => {
  state.preview.selectedVariant = selectedVariant;
};
