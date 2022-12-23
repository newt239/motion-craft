import Link from "next/link";

import {
  Card,
  Button,
  Title,
  Text,
  Group,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { IconDots, IconTrash } from "@tabler/icons";
import { useLiveQuery } from "dexie-react-hooks";
import moment from "moment";

import db from "#/db";

const SavedProjectList: React.FC = () => {
  const projects = useLiveQuery(async () => db.projects.toArray()) || [];

  const deleteProject = (projectId: string) => {
    db.projects.delete(projectId);
  };

  return (
    <div>
      <Title order={2}>保存済みのプロジェクト</Title>
      {projects && projects.length !== 0 ? (
        projects.map((project) => (
          <Card key={project.projectId} withBorder>
            <Group position="apart">
              <Title order={3}>{project.name}</Title>
              <Menu withinPortal position="bottom-end" shadow="sm">
                <Menu.Target>
                  <ActionIcon>
                    <IconDots size={16} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    onClick={() => deleteProject(project.projectId)}
                    icon={<IconTrash size={14} />}
                    color="red"
                  >
                    削除
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
            <Text>{moment(project.createdAt).format("MM/DD HH:mm")}更新</Text>
            <Link href={`/project/${project.projectId}/studio`}>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                開く
              </Button>
            </Link>
          </Card>
        ))
      ) : (
        <Text>保存済みのプロジェクトはありません。</Text>
      )}
    </div>
  );
};
export default SavedProjectList;
