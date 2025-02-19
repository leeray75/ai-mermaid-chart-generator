const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;
require('dotenv').config();


// Start an in-memory MongoDB server before all tests
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = process.env.MONGO_URI
  .replace("${MONGO_INITDB_ROOT_USERNAME}", process.env.MONGO_INITDB_ROOT_USERNAME)
  .replace("${MONGO_INITDB_ROOT_PASSWORD}", process.env.MONGO_INITDB_ROOT_PASSWORD);
  console.log("[test][setup] uri:",uri);
  await mongoose.connect(uri);
});

// Disconnect and stop the in-memory MongoDB server after all tests
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});