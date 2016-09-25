var config = {};
config.port = process.env.PORT || 8880;
config.mongoUri = process.env.MONGODB_URI || 'mongodb://taskmaster:taskpw@ds033986.mlab.com:33986/weavery';

module.exports = config;