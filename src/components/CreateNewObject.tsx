import { useState } from "react";

import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

import { db } from "#/db";

const CreateNewObject: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [objectId, setObjectId] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const createProject = async () => {
    try {
      await db.objects.add({
        objectId,
        projectId: pid as string,
        type: "text",
        content: "hello",
        from: {
          color: "red",
        },
        to: {
          color: "green",
        },
        duration: 3,
      });
      router.push(`/project/${objectId}/studio`);
    } catch (err) {
      console.log(err);
      setNameError("IDが既存のプロジェクトと重複しています。");
    }
  };
  return (
    <div>
      <FormGroup
        intent={nameError ? "danger" : "none"}
        label="オブジェクトID"
        labelFor="object-id"
        labelInfo="(required)"
        helperText={nameError}
      >
        <InputGroup
          intent={nameError ? "danger" : "none"}
          id="object-id"
          placeholder="test"
          value={objectId}
          onChange={(v) => {
            setNameError(null);
            setObjectId(v.target.value as string);
          }}
        />
      </FormGroup>
      <div style={{ textAlign: "right" }}>
        <Button
          onClick={createProject}
          disabled={!objectId || !!nameError}
          intent="primary"
          icon="add"
        >
          新規作成
        </Button>
      </div>
    </div>
  );
};
export default CreateNewObject;
