import { EditableText, H1 } from "@blueprintjs/core";
import { useLiveQuery } from "dexie-react-hooks";
import { useRouter } from "next/router";

import { db } from "@/db";

const ProjectName: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const project = useLiveQuery(async () =>
    db.projects
      .where("id")
      .equals(pid as string)
      .first()
  );
  return (
    <div>
      {project && (
        <H1>
          <EditableText
            value={project.name}
            onChange={(v) => db.projects.where({ id: pid }).modify({ name: v })}
          />
        </H1>
      )}
    </div>
  );
};
export default ProjectName;
