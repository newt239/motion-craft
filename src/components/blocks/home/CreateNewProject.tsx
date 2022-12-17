import { useState } from "react";

import { Button, FormGroup, H2, InputGroup } from "@blueprintjs/core";
import moment from "moment";
import { useRouter } from "next/router";

import db from "#/db";

const CreateNewProject: React.FC = () => {
  const router = useRouter();
  const [projectId, setProjectId] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const createProject = async () => {
    try {
      await db.projects.add({
        projectId,
        name,
        createdAt: moment().toString(),
        updatedAt: moment().toString(),
      });
      router.push(`/project/${projectId}/studio`);
    } catch (err) {
      console.log(err);
      setNameError("IDが既存のプロジェクトと重複しています。");
    }
  };
  return (
    <div>
      <H2>プロジェクトの作成</H2>
      <FormGroup
        intent={nameError ? "danger" : "none"}
        label="プロジェクトID"
        labelFor="project-id"
        labelInfo="(required)"
        helperText={nameError}
      >
        <InputGroup
          intent={nameError ? "danger" : "none"}
          id="project-id"
          placeholder="test"
          value={projectId}
          onChange={(v) => {
            setNameError(null);
            setProjectId(v.target.value as string);
          }}
        />
      </FormGroup>
      <FormGroup
        label="プロジェクト名"
        labelFor="project-name"
        labelInfo="(required)"
      >
        <InputGroup
          id="project-name"
          placeholder="テスト"
          value={name}
          onChange={(v) => setName(v.target.value as string)}
        />
      </FormGroup>
      <div style={{ textAlign: "right" }}>
        <Button
          onClick={createProject}
          disabled={!projectId || !!nameError}
          intent="primary"
          icon="add"
        >
          新規作成
        </Button>
      </div>
    </div>
  );
};
export default CreateNewProject;
