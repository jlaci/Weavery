var config = {};

config.port = process.env.PORT || 8002;
config.storageUrl =  process.env.STORAGE_URL || 'http://localhost:8001';

module.exports = config;
