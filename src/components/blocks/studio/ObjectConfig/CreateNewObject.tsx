import { useRouter } from "next/router";

import { Button } from "@mantine/core";

import db from "#/db";

const CreateNewObject: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const createProject = async () => {
    try {
      await db.objects.put({
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Button onClick={createProject}>新規作成</Button>
      </div>
    </div>
  );
};
export default CreateNewObject;
