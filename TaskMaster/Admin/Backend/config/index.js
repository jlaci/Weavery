var config = {};
config.port = process.env.PORT || 8000;
config.mongoUri = process.env.MONGODB_URI || 'mongodb://taskmaster:taskpw@ds033986.mlab.com:33986/weavery';
config.storageUrl =  process.env.STORAGE_URL || 'http://localhost:8001';

module.exports = config;