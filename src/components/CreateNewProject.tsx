import { useState } from "react";

import { Button, FormGroup, H2, InputGroup, Overlay } from "@blueprintjs/core";
import { useRouter } from "next/router";

import { db } from "@/db";

const CreateNewProject: React.FC = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const createProject = async () => {
    try {
      await db.projects.add({
        id,
        name,
      });
      router.push(`/project/${id}/studio`);
    } catch (err) {
      console.log(err);
      setNameError("IDが既存のプロジェクトと重複しています。");
    }
  };
  return (
    <div>
      <H2>新規プロジェクトの作成</H2>
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
          value={id}
          onChange={(v) => {
            setNameError(null);
            setId(v.target.value as string);
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
      <Button onClick={createProject} disabled={!id || !!nameError}>
        作成
      </Button>
    </div>
  );
};
export default CreateNewProject;