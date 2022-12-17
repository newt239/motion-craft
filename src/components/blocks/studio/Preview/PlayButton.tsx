import { Button } from "@blueprintjs/core";
import { useLiveQuery } from "dexie-react-hooks";
import { gsap } from "gsap";
import { useRouter } from "next/router";

import db from "#/db";

const PlayButton: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const objects =
    useLiveQuery(() =>
      db.objects
        .where("projectId")
        .equals(pid || "")
        .toArray()
    ) || [];
  const tl = gsap.timeline();
  const playAnime = () => {
    for (const object of objects) {
      tl.to(`#object-${object.objectId}`, {
        duration: object.duration,
        ...object.to,
      });
    }
    tl.play();
  };
  return <Button icon="play" onClick={playAnime} />;
};
export default PlayButton;
