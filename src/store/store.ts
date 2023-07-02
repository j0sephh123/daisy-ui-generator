import { proxy, useSnapshot } from "valtio";
import { State } from "./types";
import { initialState } from "./defaults";

export const state = proxy<State>(initialState);
export const useStore = () => useSnapshot(state);
