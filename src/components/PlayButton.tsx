import { Button } from "@blueprintjs/core";
import { useLiveQuery } from "dexie-react-hooks";
import { gsap } from "gsap";
import { useRouter } from "next/router";

import { db } from "#/db";

const PlayButton: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const objects =
    useLiveQuery(async () => db.objects.where({ projectId: pid }).toArray()) ||
    [];
  const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
  const playAnime = () => {
    for (const object of objects) {
      tl.to(`#${object.objectId}`, {
        duration: object.duration,
        ...object.to,
      });
    }
    tl.play();
  };
  return <Button icon="play" onClick={playAnime}></Button>;
};
export default PlayButton;
