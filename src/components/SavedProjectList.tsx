import { Card, H2, H3, Text } from "@blueprintjs/core";
import { useLiveQuery } from "dexie-react-hooks";
import moment from "moment";
import Link from "next/link";

import { db } from "@/db";

const SavedProjectList: React.FC = () => {
  const projects = useLiveQuery(async () => db.projects.toArray()) || [];
  return (
    <div>
      <H2>保存済みのプロジェクト</H2>
      {projects && projects.length !== 0 ? (
        projects.map((project) => (
          <Card key={project.id}>
            <H3>{project.name}</H3>
            <Text>{moment(project.createdAt).format("MM/DD HH:mm")}更新</Text>
            <Link href={`/project/${project.id}/studio`}>開く</Link>
          </Card>
        ))
      ) : (
        <Text>保存済みのプロジェクトはありません。</Text>
      )}
    </div>
  );
};
export default SavedProjectList;
