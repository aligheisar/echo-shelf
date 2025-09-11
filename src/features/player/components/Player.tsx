import { Cover } from "@/features/player/components/Cover";
import { Info } from "@/features/player/components/Info";
import { TimeIndicator } from "@/features/player/components/TimeIndicator";
import { Controls } from "@/features/player/components/Controls";
import { usePlayerStore } from "@/features/player/store/player-store";

const Player = () => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);

  return (
    <section>
      <audio src={currentTrack} controls></audio>
      <Cover />
      <Info />
      <TimeIndicator />
      <Controls />
    </section>
  );
};

export { Player };
