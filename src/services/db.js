import Dexie from "dexie";

export const db = new Dexie("myDatabaseNotes");
db.version(1).stores({
  notes: "_id, noteItem",
});
