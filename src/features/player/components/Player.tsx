import { Cover } from "./Cover";
import { Info } from "./Info";
import { TimeIndicator } from "./TimeIndicator";
import { Controls } from "./Controls";

const Player = () => {
  return (
    <section>
      <Cover />
      <Info />
      <TimeIndicator />
      <Controls />
    </section>
  );
};

export { Player };
