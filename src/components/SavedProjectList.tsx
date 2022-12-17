import { useState } from "react";

import {
  Button,
  Card,
  Classes,
  H2,
  H3,
  Overlay,
  Text,
} from "@blueprintjs/core";
import { useLiveQuery } from "dexie-react-hooks";
import moment from "moment";
import Link from "next/link";

import db from "#/db";

const SavedProjectList: React.FC = () => {
  const [projectId, setProjectId] = useState<string | null>(null);
  const projects = useLiveQuery(async () => db.projects.toArray()) || [];

  const deleteProject = (projectId: string) => {
    db.projects.delete(projectId);
    setProjectId(null);
  };

  return (
    <div>
      <H2>保存済みのプロジェクト</H2>
      {projects && projects.length !== 0 ? (
        projects.map((project) => (
          <Card key={project.projectId} style={{ margin: "1rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <H3>{project.name}</H3>
              <Button
                icon="trash"
                outlined
                onClick={() => setProjectId(project.projectId)}
              />
            </div>
            <Text>{moment(project.createdAt).format("MM/DD HH:mm")}更新</Text>
            <Link href={`/project/${project.projectId}/studio`}>開く</Link>
          </Card>
        ))
      ) : (
        <Text>保存済みのプロジェクトはありません。</Text>
      )}
      <Overlay isOpen={!!projectId} onClose={() => setProjectId(null)}>
        <div className={Classes.CARD}>
          <H3>プロジェクト 「{projectId}」 を削除しますか？</H3>
          <Button
            intent="danger"
            onClick={() => deleteProject(projectId as string)}
          >
            削除
          </Button>
        </div>
      </Overlay>
    </div>
  );
};
export default SavedProjectList;
