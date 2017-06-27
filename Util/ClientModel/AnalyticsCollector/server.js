var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('mongoose');
var httpsSetting = config.https || 'no';


mongoose.connect(config.mongoUri);

var api = require('./api');

app.use(bodyParser({limit: '50mb'}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());
app.use('/api/v1', api);
app.use('/', router);

if(httpsSetting === 'lets-encrypt') {
  var lex = require('greenlock-express').create({
    // set to https://acme-v01.api.letsencrypt.org/directory in production
    server: 'staging',
    challenges: {
      'http-01': require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' })
    },
    store: require('le-store-certbot').create({ webrootPath: '/tmp/acme-challenges' }),
    approveDomains: approveDomains
  });

  function approveDomains(opts, certs, cb) {
    if (certs) {
      opts.domains = certs.altnames;
    }
    else {
      opts.email = 'janoky.laszlo@aut.bme.hu';
      opts.agreeTos = true;
    }
    cb(null, { options: opts, certs: certs });
  }

  require('http').createServer(lex.middleware(require('redirect-https')())).listen(8080, function () {
    console.log("Listening for ACME http-01 challenges on", this.address());
  });


  require('https').createServer(lex.httpsOptions, lex.middleware(app)).listen(8443, function () {
    console.log("Listening for ACME tls-sni-01 challenges and serve app on", this.address());
  });

  console.log('Analytics collector started!');
} else if(httpsSetting === 'valid-cert' || httpsSetting === 'self-signed') {
  var fs = require('fs');
  var https = require('https');

  var options = {
    key: fs.readFileSync('certs/server.key'),
    cert: fs.readFileSync('certs/server.crt')
  };

  if(httpsSetting === 'valid-cert') {
    options.ca = fs.readFileSync('certs/server.ca');
  }

  var httpsServer = https.createServer(options, app);
  httpsServer.listen(8443);
} else if (httpsSetting === 'no'){
  app.listen(config.port);
  console.log('Analytics collector started on ' + config.port + ' port!');
}

