import { parseWebStream } from "music-metadata";
import { Cover } from "@/features/player/components/Cover";
import { Info } from "@/features/player/components/Info";
import { TimeIndicator } from "@/features/player/components/TimeIndicator";
import { Controls } from "@/features/player/components/Controls";
import { usePlayerStore } from "@/features/player/store/player-store";

const Player = () => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const setCurrentTrack = usePlayerStore((state) => state.setCurrentTrack);

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const audio = new FormData(event.currentTarget)
            .get("audio")
            ?.toString();
          if (!audio) return;

          (async () => {
            try {
              // Fetch the audio file
              const response = await fetch(audio);

              if (!response.ok || !response.body) {
                throw new Error(
                  `Failed to fetch audio: ${response.statusText}`
                );
              }

              // Extract headers for better parsing
              const mimeType =
                response.headers.get("content-type") || undefined;
              const size =
                parseInt(response.headers.get("content-length") || "0", 10) ||
                undefined;

              // Parse metadata from the web stream
              const metadata = await parseWebStream(response.body, {
                mimeType,
                size,
              });

              console.log(metadata);
            } catch (error) {
              console.error("Error reading metadata:", error);
            }
          })();

          setCurrentTrack(audio);
        }}
      >
        <input type="url" name="audio" />
        <button>add</button>
      </form>
      {currentTrack ? <audio src={currentTrack} controls></audio> : null}
      <Cover />
      <Info />
      <TimeIndicator />
      <Controls />
    </section>
  );
};

export { Player };
