import { Group, TextInput, Button, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import moment from "moment";
import { useRouter } from "next/router";

import db from "#/db";

const CreateNewProject: React.FC = () => {
  const router = useRouter();
  const form = useForm<{ project_id: string; project_name: string }>({
    initialValues: {
      project_id: "",
      project_name: "",
    },
    validate: (values) => ({
      project_id:
        values.project_id.length === 0 ? "IDが入力されていません" : null,
    }),
    validateInputOnChange: true,
  });

  const createProject = () => {
    if (form.validate()) {
      const timestamp = moment().toString();
      db.projects
        .add({
          projectId: form.values.project_id,
          name: form.values.project_name,
          createdAt: timestamp,
          updatedAt: timestamp,
        })
        .then((project_id) => {
          form.reset();
          router.push(`/project/${project_id}/studio`);
        });
    }
  };

  return (
    <div>
      <Title order={2}>プロジェクトの作成</Title>
      <TextInput
        withAsterisk
        label="プロジェクトID"
        {...form.getInputProps("project_id")}
      />
      <TextInput
        label="プロジェクト名"
        placeholder="テスト"
        {...form.getInputProps("project_name")}
      />
      <Group position="right" mt="md">
        <Button onClick={createProject}>新規作成</Button>
      </Group>
    </div>
  );
};
export default CreateNewProject;
