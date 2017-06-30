var config = {};
config.port = process.env.PORT || 8888;
config.mongoUri = process.env.MONGODB_URI || 'mongodb://analytics:analpw@ds139122.mlab.com:39122/participatory';

config.https = process.env.HTTPS_MODE || 'no'; //Other possiblities are: 'no', 'self-signed', 'valid-cert', 'lets-encrypt'

module.exports = config;