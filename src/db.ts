import Dexie, { Table } from "dexie";

export interface Projects {
  id: string;
  name: string;
}

export class MySubClassedDexie extends Dexie {
  projects!: Table<Projects>;

  constructor() {
    super("database");
    this.version(1).stores({
      projects: "id, name",
    });
  }
}

export const db = new MySubClassedDexie();
