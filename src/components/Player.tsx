import { useLiveQuery } from "dexie-react-hooks";
import { useRouter } from "next/router";

import Object from "#/components/Object";
import { db } from "#/db";

const Player: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const objects =
    useLiveQuery(async () => db.objects.where({ projectId: pid }).toArray()) ||
    [];
  return (
    <div style={{ width: 600, height: 400, backgroundColor: "black" }}>
      {objects.map((object) => (
        <Object key={object.objectId} objectId={object.objectId} />
      ))}
    </div>
  );
};
export default Player;
