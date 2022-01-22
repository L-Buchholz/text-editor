import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate");
      console.log("jate database created");
    },
  });

// DONE: Add logic to a method that accepts some content and PUTs (adds) it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");
  const jateDb = await openDB("jate", 1);
  const text = jateDb.transaction("jate", "readwrite");
  const store = text.objectStore("jate");
  const request = store.put(content, "content");
  const result = await request;
  console.log("🚀 Hooray! Content saved to the database", result);
};

// DONE: Add logic for a method that GETs all the content from the database
export const getDb = async () => {
  console.log("GET all from the database");
  const jateDB = await openDB("jate", 1);
  const text = jateDB.transaction("jate", "readonly");
  const store = text.objectStore("jate");
  const request = store.get("content");
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
