import { Input } from "@mantine/core";
import { useLiveQuery } from "dexie-react-hooks";
import { useRouter } from "next/router";

import db from "#/db";

const ProjectName: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const projects = useLiveQuery(
    () =>
      db.projects
        .where("projectId")
        .equals(pid || "")
        .toArray() || []
  );
  if (!projects) {
    return null;
  } else {
    return (
      <div>
        {projects.length === 1 && (
          <Input
            variant="unstyled"
            value={projects[0].name}
            onChange={(v) =>
              db.projects.where({ projectId: pid }).modify({ name: v })
            }
            size="xl"
          />
        )}
      </div>
    );
  }
};

export default ProjectName;
