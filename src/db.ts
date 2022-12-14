import Dexie, { Table } from "dexie";

export interface Projects {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export class MySubClassedDexie extends Dexie {
  projects!: Table<Projects>;

  constructor() {
    super("motion-craft");
    this.version(1).stores({
      projects: "id, name, createdAt, up",
    });
  }
}

export const db = new MySubClassedDexie();
