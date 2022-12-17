import Dexie, { Table } from "dexie";

export type ProjectProps = {
  projectId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ObjectProps = {
  objectId: string;
  projectId: string;
  type: "text";
  content: string;
  from: React.CSSProperties;
  to: gsap.TweenVars;
  duration: number;
};

export class MySubClassedDexie extends Dexie {
  projects!: Table<ProjectProps>;
  objects!: Table<ObjectProps>;

  constructor() {
    super("motion-craft");
    this.version(1).stores({
      projects: "projectId, name, createdAt, updatedAt",
      objects: "objectId, projectId, type, content, from, to, duration",
    });
  }
}

export const db = new MySubClassedDexie();
