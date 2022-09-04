import { openDB } from 'idb';

const initdb = async () =>
openDB('txtEditor', 1, {
  upgrade(db) {
    if (db.objectStoreNames.contains('txtEditor')) {
      console.log('txtEditor database already exists 😣');
      return;
    }
    db.createObjectStore('txtEditor', { keyPath: 'id', autoIncrement: true });
    console.log('Database successfully created 🚀');
  },
});

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT request to update the database 📈');
  // connect to DB and version we want to use
  const txtDb = await openDB('txtEditor', 1);
  // read and write privileges 
  const txt = txtDb.transaction('txtEditor', 'readwrite');
  const objStore = tx.objectStore('txtEditor');
  // add new content
  const req = objStore.put({ id: 1, value: content });
  const res = await req;
  console.log('Data saved successfully 📈', res);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Getting data from the database 📈');
  // connect to database
  const txtDb = await openDB('txtEditor', 1);
  // read and write privileges 
  const txt = txtDb.transaction('txtEditor', 'readwrite');
  const objStore = tx.objectStore('txtEditor');
  // getAll database store
  const req = objStore.getAll()
  const res = await req;
  console.log('Data saved successfully 📈', res);
};

initdb();
