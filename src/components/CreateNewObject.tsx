import { useState } from "react";

import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { useRouter } from "next/router";

import db from "#/db";

const CreateNewObject: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const createProject = async () => {
    try {
      const objectId = await db.objects.put({
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
      console.log(objectId);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Button onClick={createProject} intent="primary" icon="add">
          新規作成
        </Button>
      </div>
    </div>
  );
};
export default CreateNewObject;
