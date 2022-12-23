import { useRouter } from "next/router";

import { useLiveQuery } from "dexie-react-hooks";

import Object from "#/components/blocks/studio/Preview/Object";
import db from "#/db";

const Player: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const objects =
    useLiveQuery(() =>
      db.objects
        .where("projectId")
        .equals(pid || "")
        .toArray()
    ) || [];
  return (
    <div
      style={{
        width: 600,
        height: 400,
        backgroundColor: "black",
        position: "relative",
      }}
    >
      {objects.map((object) => (
        <Object key={object.objectId} object={object} />
      ))}
    </div>
  );
};
export default Player;
