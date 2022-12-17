import Dexie, { Table } from "dexie";

export type DexieDatabase = { [P in keyof Dexie]: Dexie[P] };

export type ProjectDBProps = {
  projectId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ObjectDBProps = {
  objectId?: number;
  projectId: string;
  type: "text";
  content: string;
  from: React.CSSProperties;
  to: gsap.TweenVars;
  duration: number;
};

export interface MotionCraftDatabase extends DexieDatabase {
  projects: Table<ProjectDBProps>;
  objects: Table<ObjectDBProps>;
}

const db = new Dexie("motion-craft") as MotionCraftDatabase;
db.version(1).stores({
  projects: "projectId, name, createdAt, updatedAt",
  objects: "++objectId, projectId, type, content, from, to, duration",
});
db.open();

export default db;
