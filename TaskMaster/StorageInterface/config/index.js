var config = {};
config.port = process.env.PORT || 8001;
config.mongoUri = process.env.MONGODB_URI || 'mongodb://taskdbuser:taskdbpass@ds033966.mlab.com:33966/weavery-taskdb';

module.exports = config;