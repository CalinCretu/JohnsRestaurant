// src/db.js
import Dexie from 'dexie';

const db = new Dexie('restaurant');
db.version(1).stores({
  dishes: '++id,name,description,price,category'
});

export default db;
