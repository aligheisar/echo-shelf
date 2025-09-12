import { create } from "zustand";

type State = {
  currentTrack: null | string;
};

type Action = {
  setCurrentTrack: (src: string) => void;
};

const usePlayerStore = create<State & Action>((set) => ({
  currentTrack: null,
  setCurrentTrack(src) {
    set({ currentTrack: src });
  },
}));

export { usePlayerStore };
