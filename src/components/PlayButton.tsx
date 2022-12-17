import { Button } from "@blueprintjs/core";
import { gsap } from "gsap";

const PlayButton: React.FC = () => {
  const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
  const playAnime = () => {
    tl.to("#a", {
      color: "#30CFD0",
      duration: 5,
    });
    tl.play();
  };
  return <Button icon="play" onClick={playAnime}></Button>;
};
export default PlayButton;
