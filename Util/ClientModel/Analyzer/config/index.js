var config = {};
config.mongoUri = process.env.MONGODB_URI || 'mongodb://analytics:analpw@ds139122.mlab.com:39122/participatory';
module.exports = config;