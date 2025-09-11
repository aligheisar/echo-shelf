import { create } from "zustand";

type State = {
  currentTrack: string;
};

type Action = {
  setCurrentTrack: () => void;
};

const usePlayerStore = create<State & Action>((set) => ({
  currentTrack:
    "https://dls.musics-fa.com/song/alibz/dlswm/Mohsen%20Chavoshi%20-%20Saate%20Divari%20(320).mp3",
  setCurrentTrack() {
    set({ currentTrack: "" });
  },
}));

export { usePlayerStore };
