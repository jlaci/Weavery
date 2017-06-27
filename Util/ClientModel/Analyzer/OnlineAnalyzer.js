var mongoose = require('mongoose');
var _ = require('lodash');

var AnalyticEntry = require('../AnalyticsCollector/api/analytic-entry/model/AnalyticEntry');
var config = require('./config');

function ObjectId(str) {
  return str;
}

function ISODate(str) {
  return new Date(str);
}

function NumberInt(int) {
  return int;
}

var raw = [{
  "_id" : ObjectId("59522ff3804cda1b9a122776"),
  "clientInfo" : {
    "fingerprint" : 4141258844.0,
    "browser" : {
      "version" : "59.0.3071.115",
      "name" : "Chrome"
    },
    "webGL" : {
      "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
      "vendor" : "ATI Technologies Inc."
    },
    "_id" : ObjectId("59522ff3804cda1b9a122785")
  },
  "benchmarkData" : {
    "location" : "https://www.reddit.com/",
    "_id" : ObjectId("59522ff3804cda1b9a122777"),
    "sessionData" : [
      {
        "plannedTime" : ISODate("2017-06-27T10:14:05.044+0000"),
        "time" : ISODate("2017-06-27T10:14:05.044+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a122784")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:05.544+0000"),
        "time" : ISODate("2017-06-27T10:14:05.545+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a122783")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:06.045+0000"),
        "time" : ISODate("2017-06-27T10:14:06.049+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a122782")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:06.549+0000"),
        "time" : ISODate("2017-06-27T10:14:06.550+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a122781")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:07.050+0000"),
        "time" : ISODate("2017-06-27T10:14:07.055+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a122780")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:07.555+0000"),
        "time" : ISODate("2017-06-27T10:14:07.555+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a12277f")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:08.055+0000"),
        "time" : ISODate("2017-06-27T10:14:08.056+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a12277e")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:08.556+0000"),
        "time" : ISODate("2017-06-27T10:14:08.556+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a12277d")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:09.056+0000"),
        "time" : ISODate("2017-06-27T10:14:09.056+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a12277c")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:09.556+0000"),
        "time" : ISODate("2017-06-27T10:14:09.557+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a12277b")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:10.057+0000"),
        "time" : ISODate("2017-06-27T10:14:10.057+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a12277a")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:10.557+0000"),
        "time" : ISODate("2017-06-27T10:14:10.558+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a122779")
      },
      {
        "plannedTime" : ISODate("2017-06-27T10:14:11.058+0000"),
        "time" : ISODate("2017-06-27T10:14:11.058+0000"),
        "_id" : ObjectId("59522ff3804cda1b9a122778")
      }
    ]
  },
  "__v" : NumberInt(0)
},
  {
    "_id" : ObjectId("59523001804cda1b9a12279c"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("59523001804cda1b9a1227a0")
    },
    "benchmarkData" : {
      "location" : "https://www.reddit.com/r/popular/",
      "_id" : ObjectId("59523001804cda1b9a12279d"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:14:25.325+0000"),
          "time" : ISODate("2017-06-27T10:14:25.325+0000"),
          "_id" : ObjectId("59523001804cda1b9a12279f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:25.825+0000"),
          "time" : ISODate("2017-06-27T10:14:25.826+0000"),
          "_id" : ObjectId("59523001804cda1b9a12279e")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595230b8804cda1b9a122853"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595230b8804cda1b9a12285d")
    },
    "benchmarkData" : {
      "location" : "https://www.otpbank.hu/portal/hu/fooldal",
      "_id" : ObjectId("595230b8804cda1b9a122854"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:17:24.748+0000"),
          "time" : ISODate("2017-06-27T10:17:24.748+0000"),
          "_id" : ObjectId("595230b8804cda1b9a12285c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:25.248+0000"),
          "time" : ISODate("2017-06-27T10:17:25.249+0000"),
          "_id" : ObjectId("595230b8804cda1b9a12285b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:25.749+0000"),
          "time" : ISODate("2017-06-27T10:17:25.749+0000"),
          "_id" : ObjectId("595230b8804cda1b9a12285a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:26.249+0000"),
          "time" : ISODate("2017-06-27T10:17:26.252+0000"),
          "_id" : ObjectId("595230b8804cda1b9a122859")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:26.752+0000"),
          "time" : ISODate("2017-06-27T10:17:26.753+0000"),
          "_id" : ObjectId("595230b8804cda1b9a122858")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:27.253+0000"),
          "time" : ISODate("2017-06-27T10:17:27.254+0000"),
          "_id" : ObjectId("595230b8804cda1b9a122857")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:27.754+0000"),
          "time" : ISODate("2017-06-27T10:17:27.754+0000"),
          "_id" : ObjectId("595230b8804cda1b9a122856")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:28.254+0000"),
          "time" : ISODate("2017-06-27T10:17:28.254+0000"),
          "_id" : ObjectId("595230b8804cda1b9a122855")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952401c804cda1b9a122894"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952401c804cda1b9a12289a")
    },
    "benchmarkData" : {
      "location" : "https://localhost:8443/api/v1/analytic-entry",
      "_id" : ObjectId("5952401c804cda1b9a122895"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:23:06.779+0000"),
          "time" : ISODate("2017-06-27T11:23:06.779+0000"),
          "_id" : ObjectId("5952401c804cda1b9a122899")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:07.279+0000"),
          "time" : ISODate("2017-06-27T11:23:07.280+0000"),
          "_id" : ObjectId("5952401c804cda1b9a122898")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:07.780+0000"),
          "time" : ISODate("2017-06-27T11:23:07.781+0000"),
          "_id" : ObjectId("5952401c804cda1b9a122897")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:08.281+0000"),
          "time" : ISODate("2017-06-27T11:23:08.282+0000"),
          "_id" : ObjectId("5952401c804cda1b9a122896")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595240ea7c446a27f654c9fb"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595240ea7c446a27f654ca04")
    },
    "benchmarkData" : {
      "location" : "https://www.google.hu/_/chrome/newtab?espv=2&ie=UTF-8",
      "_id" : ObjectId("595240ea7c446a27f654c9fc"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:26:31.413+0000"),
          "time" : ISODate("2017-06-27T11:26:31.413+0000"),
          "_id" : ObjectId("595240ea7c446a27f654ca03")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:26:31.913+0000"),
          "time" : ISODate("2017-06-27T11:26:31.914+0000"),
          "_id" : ObjectId("595240ea7c446a27f654ca02")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:26:32.414+0000"),
          "time" : ISODate("2017-06-27T11:26:32.414+0000"),
          "_id" : ObjectId("595240ea7c446a27f654ca01")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:26:32.914+0000"),
          "time" : ISODate("2017-06-27T11:26:32.915+0000"),
          "_id" : ObjectId("595240ea7c446a27f654ca00")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:26:33.415+0000"),
          "time" : ISODate("2017-06-27T11:26:33.416+0000"),
          "_id" : ObjectId("595240ea7c446a27f654c9ff")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:26:33.916+0000"),
          "time" : ISODate("2017-06-27T11:26:33.917+0000"),
          "_id" : ObjectId("595240ea7c446a27f654c9fe")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:26:34.417+0000"),
          "time" : ISODate("2017-06-27T11:26:34.417+0000"),
          "_id" : ObjectId("595240ea7c446a27f654c9fd")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595240eb7c446a27f654ca05"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595240eb7c446a27f654ca08")
    },
    "benchmarkData" : {
      "location" : "https://www.google.hu/search?q=mongoose+version&oq=mongoose+vers&aqs=chrome.3.69i57j0l5.3215j0j7&sourceid=chrome&ie=UTF-8",
      "_id" : ObjectId("595240eb7c446a27f654ca06"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:26:35.902+0000"),
          "time" : ISODate("2017-06-27T11:26:35.902+0000"),
          "_id" : ObjectId("595240eb7c446a27f654ca07")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("59522fea804cda1b9a122760"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("59522fea804cda1b9a122775")
    },
    "benchmarkData" : {
      "location" : "http://index.hu/tudomany/",
      "_id" : ObjectId("59522fea804cda1b9a122761"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:13:53.221+0000"),
          "time" : ISODate("2017-06-27T10:13:53.221+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122774")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:53.721+0000"),
          "time" : ISODate("2017-06-27T10:13:53.721+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122773")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:54.221+0000"),
          "time" : ISODate("2017-06-27T10:13:54.222+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122772")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:54.722+0000"),
          "time" : ISODate("2017-06-27T10:13:54.722+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122771")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:55.222+0000"),
          "time" : ISODate("2017-06-27T10:13:55.228+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122770")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:55.728+0000"),
          "time" : ISODate("2017-06-27T10:13:55.732+0000"),
          "_id" : ObjectId("59522fea804cda1b9a12276f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:56.232+0000"),
          "time" : ISODate("2017-06-27T10:13:56.233+0000"),
          "_id" : ObjectId("59522fea804cda1b9a12276e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:56.733+0000"),
          "time" : ISODate("2017-06-27T10:13:56.735+0000"),
          "_id" : ObjectId("59522fea804cda1b9a12276d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:57.235+0000"),
          "time" : ISODate("2017-06-27T10:13:57.235+0000"),
          "_id" : ObjectId("59522fea804cda1b9a12276c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:57.735+0000"),
          "time" : ISODate("2017-06-27T10:13:57.735+0000"),
          "_id" : ObjectId("59522fea804cda1b9a12276b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:58.235+0000"),
          "time" : ISODate("2017-06-27T10:13:58.240+0000"),
          "_id" : ObjectId("59522fea804cda1b9a12276a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:58.740+0000"),
          "time" : ISODate("2017-06-27T10:13:58.740+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122769")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:59.240+0000"),
          "time" : ISODate("2017-06-27T10:13:59.244+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122768")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:59.744+0000"),
          "time" : ISODate("2017-06-27T10:13:59.747+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122767")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:00.247+0000"),
          "time" : ISODate("2017-06-27T10:14:00.252+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122766")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:00.752+0000"),
          "time" : ISODate("2017-06-27T10:14:00.757+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122765")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:01.257+0000"),
          "time" : ISODate("2017-06-27T10:14:01.259+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122764")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:01.759+0000"),
          "time" : ISODate("2017-06-27T10:14:01.760+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122763")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:02.260+0000"),
          "time" : ISODate("2017-06-27T10:14:02.263+0000"),
          "_id" : ObjectId("59522fea804cda1b9a122762")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("59522fff804cda1b9a122786"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("59522fff804cda1b9a12279b")
    },
    "benchmarkData" : {
      "location" : "https://www.reddit.com/r/pics/comments/6jqt3o/the_water_flying_onto_this_elephant_looks_like_an/",
      "_id" : ObjectId("59522fff804cda1b9a122787"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:14:14.059+0000"),
          "time" : ISODate("2017-06-27T10:14:14.059+0000"),
          "_id" : ObjectId("59522fff804cda1b9a12279a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:14.559+0000"),
          "time" : ISODate("2017-06-27T10:14:14.560+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122799")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:15.060+0000"),
          "time" : ISODate("2017-06-27T10:14:15.065+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122798")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:15.565+0000"),
          "time" : ISODate("2017-06-27T10:14:15.566+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122797")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:16.066+0000"),
          "time" : ISODate("2017-06-27T10:14:16.066+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122796")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:16.566+0000"),
          "time" : ISODate("2017-06-27T10:14:16.566+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122795")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:17.066+0000"),
          "time" : ISODate("2017-06-27T10:14:17.067+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122794")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:17.567+0000"),
          "time" : ISODate("2017-06-27T10:14:17.567+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122793")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:18.067+0000"),
          "time" : ISODate("2017-06-27T10:14:18.069+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122792")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:18.569+0000"),
          "time" : ISODate("2017-06-27T10:14:18.569+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122791")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:19.069+0000"),
          "time" : ISODate("2017-06-27T10:14:19.069+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122790")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:19.569+0000"),
          "time" : ISODate("2017-06-27T10:14:19.571+0000"),
          "_id" : ObjectId("59522fff804cda1b9a12278f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:20.071+0000"),
          "time" : ISODate("2017-06-27T10:14:20.071+0000"),
          "_id" : ObjectId("59522fff804cda1b9a12278e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:20.571+0000"),
          "time" : ISODate("2017-06-27T10:14:20.571+0000"),
          "_id" : ObjectId("59522fff804cda1b9a12278d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:21.071+0000"),
          "time" : ISODate("2017-06-27T10:14:21.075+0000"),
          "_id" : ObjectId("59522fff804cda1b9a12278c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:21.575+0000"),
          "time" : ISODate("2017-06-27T10:14:21.577+0000"),
          "_id" : ObjectId("59522fff804cda1b9a12278b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:22.077+0000"),
          "time" : ISODate("2017-06-27T10:14:22.077+0000"),
          "_id" : ObjectId("59522fff804cda1b9a12278a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:22.577+0000"),
          "time" : ISODate("2017-06-27T10:14:22.578+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122789")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:23.078+0000"),
          "time" : ISODate("2017-06-27T10:14:23.078+0000"),
          "_id" : ObjectId("59522fff804cda1b9a122788")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952300c804cda1b9a1227a1"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952300c804cda1b9a1227b2")
    },
    "benchmarkData" : {
      "location" : "https://www.reddit.com/",
      "_id" : ObjectId("5952300c804cda1b9a1227a2"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:14:28.952+0000"),
          "time" : ISODate("2017-06-27T10:14:28.952+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227b1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:29.452+0000"),
          "time" : ISODate("2017-06-27T10:14:29.454+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227b0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:29.954+0000"),
          "time" : ISODate("2017-06-27T10:14:29.960+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227af")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:30.460+0000"),
          "time" : ISODate("2017-06-27T10:14:30.461+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227ae")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:30.961+0000"),
          "time" : ISODate("2017-06-27T10:14:30.961+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227ad")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:31.461+0000"),
          "time" : ISODate("2017-06-27T10:14:31.463+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227ac")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:31.963+0000"),
          "time" : ISODate("2017-06-27T10:14:31.965+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227ab")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:32.465+0000"),
          "time" : ISODate("2017-06-27T10:14:32.466+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227aa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:32.966+0000"),
          "time" : ISODate("2017-06-27T10:14:32.966+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227a9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:33.466+0000"),
          "time" : ISODate("2017-06-27T10:14:33.466+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227a8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:33.966+0000"),
          "time" : ISODate("2017-06-27T10:14:33.966+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227a7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:34.466+0000"),
          "time" : ISODate("2017-06-27T10:14:34.466+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227a6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:34.966+0000"),
          "time" : ISODate("2017-06-27T10:14:34.969+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227a5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:35.469+0000"),
          "time" : ISODate("2017-06-27T10:14:35.469+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227a4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:35.969+0000"),
          "time" : ISODate("2017-06-27T10:14:35.969+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227a3")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952300c804cda1b9a1227b3"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952300c804cda1b9a1227c4")
    },
    "benchmarkData" : {
      "location" : "https://i.imgur.com/RFOZnOt.gifv",
      "_id" : ObjectId("5952300c804cda1b9a1227b4"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T08:49:23.627+0000"),
          "time" : ISODate("2017-06-27T08:49:23.627+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227c3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:24.127+0000"),
          "time" : ISODate("2017-06-27T08:49:24.128+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227c2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:24.628+0000"),
          "time" : ISODate("2017-06-27T08:49:24.630+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227c1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:25.130+0000"),
          "time" : ISODate("2017-06-27T08:49:25.133+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227c0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:25.633+0000"),
          "time" : ISODate("2017-06-27T08:49:25.635+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227bf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:26.135+0000"),
          "time" : ISODate("2017-06-27T08:49:26.138+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227be")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:26.638+0000"),
          "time" : ISODate("2017-06-27T08:49:26.642+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227bd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:27.142+0000"),
          "time" : ISODate("2017-06-27T08:49:27.147+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227bc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:27.647+0000"),
          "time" : ISODate("2017-06-27T08:49:27.647+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227bb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:28.147+0000"),
          "time" : ISODate("2017-06-27T08:49:28.147+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227ba")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:28.647+0000"),
          "time" : ISODate("2017-06-27T08:49:28.648+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227b9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:29.148+0000"),
          "time" : ISODate("2017-06-27T08:49:29.148+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227b8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:29.648+0000"),
          "time" : ISODate("2017-06-27T08:49:29.648+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227b7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:30.148+0000"),
          "time" : ISODate("2017-06-27T08:49:30.149+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227b6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T08:49:30.649+0000"),
          "time" : ISODate("2017-06-27T08:49:30.649+0000"),
          "_id" : ObjectId("5952300c804cda1b9a1227b5")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("59523034804cda1b9a1227c5"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("59523034804cda1b9a122816")
    },
    "benchmarkData" : {
      "location" : "https://i.imgur.com/CnBbcml.gifv",
      "_id" : ObjectId("59523034804cda1b9a1227c6"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:14:36.811+0000"),
          "time" : ISODate("2017-06-27T10:14:36.811+0000"),
          "_id" : ObjectId("59523034804cda1b9a122815")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:37.311+0000"),
          "time" : ISODate("2017-06-27T10:14:37.315+0000"),
          "_id" : ObjectId("59523034804cda1b9a122814")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:37.815+0000"),
          "time" : ISODate("2017-06-27T10:14:37.816+0000"),
          "_id" : ObjectId("59523034804cda1b9a122813")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:38.316+0000"),
          "time" : ISODate("2017-06-27T10:14:38.316+0000"),
          "_id" : ObjectId("59523034804cda1b9a122812")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:38.816+0000"),
          "time" : ISODate("2017-06-27T10:14:38.817+0000"),
          "_id" : ObjectId("59523034804cda1b9a122811")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:39.317+0000"),
          "time" : ISODate("2017-06-27T10:14:39.317+0000"),
          "_id" : ObjectId("59523034804cda1b9a122810")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:39.817+0000"),
          "time" : ISODate("2017-06-27T10:14:39.819+0000"),
          "_id" : ObjectId("59523034804cda1b9a12280f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:40.319+0000"),
          "time" : ISODate("2017-06-27T10:14:40.319+0000"),
          "_id" : ObjectId("59523034804cda1b9a12280e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:40.819+0000"),
          "time" : ISODate("2017-06-27T10:14:40.819+0000"),
          "_id" : ObjectId("59523034804cda1b9a12280d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:41.319+0000"),
          "time" : ISODate("2017-06-27T10:14:41.320+0000"),
          "_id" : ObjectId("59523034804cda1b9a12280c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:41.820+0000"),
          "time" : ISODate("2017-06-27T10:14:41.820+0000"),
          "_id" : ObjectId("59523034804cda1b9a12280b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:42.320+0000"),
          "time" : ISODate("2017-06-27T10:14:42.320+0000"),
          "_id" : ObjectId("59523034804cda1b9a12280a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:42.820+0000"),
          "time" : ISODate("2017-06-27T10:14:42.821+0000"),
          "_id" : ObjectId("59523034804cda1b9a122809")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:43.321+0000"),
          "time" : ISODate("2017-06-27T10:14:43.321+0000"),
          "_id" : ObjectId("59523034804cda1b9a122808")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:43.821+0000"),
          "time" : ISODate("2017-06-27T10:14:43.821+0000"),
          "_id" : ObjectId("59523034804cda1b9a122807")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:44.321+0000"),
          "time" : ISODate("2017-06-27T10:14:44.323+0000"),
          "_id" : ObjectId("59523034804cda1b9a122806")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:44.823+0000"),
          "time" : ISODate("2017-06-27T10:14:44.823+0000"),
          "_id" : ObjectId("59523034804cda1b9a122805")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:45.323+0000"),
          "time" : ISODate("2017-06-27T10:14:45.323+0000"),
          "_id" : ObjectId("59523034804cda1b9a122804")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:45.823+0000"),
          "time" : ISODate("2017-06-27T10:14:45.824+0000"),
          "_id" : ObjectId("59523034804cda1b9a122803")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:46.324+0000"),
          "time" : ISODate("2017-06-27T10:14:46.328+0000"),
          "_id" : ObjectId("59523034804cda1b9a122802")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:46.828+0000"),
          "time" : ISODate("2017-06-27T10:14:46.830+0000"),
          "_id" : ObjectId("59523034804cda1b9a122801")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:47.330+0000"),
          "time" : ISODate("2017-06-27T10:14:47.332+0000"),
          "_id" : ObjectId("59523034804cda1b9a122800")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:47.832+0000"),
          "time" : ISODate("2017-06-27T10:14:47.833+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227ff")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:48.333+0000"),
          "time" : ISODate("2017-06-27T10:14:48.333+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227fe")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:48.833+0000"),
          "time" : ISODate("2017-06-27T10:14:48.834+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227fd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:49.334+0000"),
          "time" : ISODate("2017-06-27T10:14:49.334+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227fc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:49.834+0000"),
          "time" : ISODate("2017-06-27T10:14:49.835+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227fb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:50.335+0000"),
          "time" : ISODate("2017-06-27T10:14:50.335+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227fa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:50.835+0000"),
          "time" : ISODate("2017-06-27T10:14:50.835+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:51.335+0000"),
          "time" : ISODate("2017-06-27T10:14:51.336+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:51.836+0000"),
          "time" : ISODate("2017-06-27T10:14:51.837+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:52.337+0000"),
          "time" : ISODate("2017-06-27T10:14:52.337+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:52.837+0000"),
          "time" : ISODate("2017-06-27T10:14:52.837+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:53.337+0000"),
          "time" : ISODate("2017-06-27T10:14:53.338+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:53.838+0000"),
          "time" : ISODate("2017-06-27T10:14:53.839+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:54.339+0000"),
          "time" : ISODate("2017-06-27T10:14:54.339+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:54.839+0000"),
          "time" : ISODate("2017-06-27T10:14:54.840+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:55.340+0000"),
          "time" : ISODate("2017-06-27T10:14:55.340+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227f0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:55.840+0000"),
          "time" : ISODate("2017-06-27T10:14:55.841+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227ef")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:56.341+0000"),
          "time" : ISODate("2017-06-27T10:14:56.341+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227ee")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:56.841+0000"),
          "time" : ISODate("2017-06-27T10:14:56.842+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227ed")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:57.342+0000"),
          "time" : ISODate("2017-06-27T10:14:57.342+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227ec")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:57.842+0000"),
          "time" : ISODate("2017-06-27T10:14:57.842+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227eb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:58.342+0000"),
          "time" : ISODate("2017-06-27T10:14:58.343+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227ea")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:58.843+0000"),
          "time" : ISODate("2017-06-27T10:14:58.843+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:59.343+0000"),
          "time" : ISODate("2017-06-27T10:14:59.344+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:14:59.844+0000"),
          "time" : ISODate("2017-06-27T10:14:59.844+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:00.344+0000"),
          "time" : ISODate("2017-06-27T10:15:00.345+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:00.845+0000"),
          "time" : ISODate("2017-06-27T10:15:00.845+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:01.345+0000"),
          "time" : ISODate("2017-06-27T10:15:01.345+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:01.845+0000"),
          "time" : ISODate("2017-06-27T10:15:01.846+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:02.346+0000"),
          "time" : ISODate("2017-06-27T10:15:02.346+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:02.846+0000"),
          "time" : ISODate("2017-06-27T10:15:02.847+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:03.347+0000"),
          "time" : ISODate("2017-06-27T10:15:03.348+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227e0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:03.848+0000"),
          "time" : ISODate("2017-06-27T10:15:03.848+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227df")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:04.348+0000"),
          "time" : ISODate("2017-06-27T10:15:04.350+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227de")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:04.850+0000"),
          "time" : ISODate("2017-06-27T10:15:04.850+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227dd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:05.350+0000"),
          "time" : ISODate("2017-06-27T10:15:05.351+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227dc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:05.851+0000"),
          "time" : ISODate("2017-06-27T10:15:05.854+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227db")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:06.354+0000"),
          "time" : ISODate("2017-06-27T10:15:06.355+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227da")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:06.855+0000"),
          "time" : ISODate("2017-06-27T10:15:06.856+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:07.356+0000"),
          "time" : ISODate("2017-06-27T10:15:07.356+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:07.856+0000"),
          "time" : ISODate("2017-06-27T10:15:07.858+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:08.358+0000"),
          "time" : ISODate("2017-06-27T10:15:08.360+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:08.860+0000"),
          "time" : ISODate("2017-06-27T10:15:08.863+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:09.363+0000"),
          "time" : ISODate("2017-06-27T10:15:09.368+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:09.868+0000"),
          "time" : ISODate("2017-06-27T10:15:09.868+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:10.368+0000"),
          "time" : ISODate("2017-06-27T10:15:10.368+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:10.868+0000"),
          "time" : ISODate("2017-06-27T10:15:10.870+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:11.370+0000"),
          "time" : ISODate("2017-06-27T10:15:11.370+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227d0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:11.870+0000"),
          "time" : ISODate("2017-06-27T10:15:11.870+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227cf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:12.370+0000"),
          "time" : ISODate("2017-06-27T10:15:12.371+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227ce")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:12.871+0000"),
          "time" : ISODate("2017-06-27T10:15:12.872+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227cd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:13.372+0000"),
          "time" : ISODate("2017-06-27T10:15:13.372+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227cc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:13.872+0000"),
          "time" : ISODate("2017-06-27T10:15:13.873+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227cb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:14.373+0000"),
          "time" : ISODate("2017-06-27T10:15:14.373+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227ca")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:14.873+0000"),
          "time" : ISODate("2017-06-27T10:15:14.873+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227c9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:15.373+0000"),
          "time" : ISODate("2017-06-27T10:15:15.374+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227c8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:15:15.874+0000"),
          "time" : ISODate("2017-06-27T10:15:15.874+0000"),
          "_id" : ObjectId("59523034804cda1b9a1227c7")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("59523061804cda1b9a122817"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("59523061804cda1b9a122822")
    },
    "benchmarkData" : {
      "location" : "https://www.google.hu/search?q=chrome+accept+self+signed+certificate+permanently&oq=chrome+add+self+signed+certificate+perm&aqs=chrome.1.69i57j0.5239j0j7&sourceid=chrome&ie=UTF-8",
      "_id" : ObjectId("59523061804cda1b9a122818"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:12:02.840+0000"),
          "time" : ISODate("2017-06-27T10:12:02.840+0000"),
          "_id" : ObjectId("59523061804cda1b9a122821")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:12:03.340+0000"),
          "time" : ISODate("2017-06-27T10:12:03.340+0000"),
          "_id" : ObjectId("59523061804cda1b9a122820")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:12:03.840+0000"),
          "time" : ISODate("2017-06-27T10:12:03.840+0000"),
          "_id" : ObjectId("59523061804cda1b9a12281f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:12:04.340+0000"),
          "time" : ISODate("2017-06-27T10:12:04.341+0000"),
          "_id" : ObjectId("59523061804cda1b9a12281e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:12:04.841+0000"),
          "time" : ISODate("2017-06-27T10:12:04.842+0000"),
          "_id" : ObjectId("59523061804cda1b9a12281d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:12:05.342+0000"),
          "time" : ISODate("2017-06-27T10:12:05.347+0000"),
          "_id" : ObjectId("59523061804cda1b9a12281c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:12:05.847+0000"),
          "time" : ISODate("2017-06-27T10:12:05.848+0000"),
          "_id" : ObjectId("59523061804cda1b9a12281b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:12:06.348+0000"),
          "time" : ISODate("2017-06-27T10:12:06.349+0000"),
          "_id" : ObjectId("59523061804cda1b9a12281a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:12:06.849+0000"),
          "time" : ISODate("2017-06-27T10:12:06.850+0000"),
          "_id" : ObjectId("59523061804cda1b9a122819")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952306b804cda1b9a122823"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952306b804cda1b9a122838")
    },
    "benchmarkData" : {
      "location" : "https://www.google.hu/_/chrome/newtab?espv=2&ie=UTF-8",
      "_id" : ObjectId("5952306b804cda1b9a122824"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:16:01.960+0000"),
          "time" : ISODate("2017-06-27T10:16:01.960+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122837")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:02.460+0000"),
          "time" : ISODate("2017-06-27T10:16:02.465+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122836")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:02.965+0000"),
          "time" : ISODate("2017-06-27T10:16:02.968+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122835")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:03.468+0000"),
          "time" : ISODate("2017-06-27T10:16:03.473+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122834")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:03.973+0000"),
          "time" : ISODate("2017-06-27T10:16:03.973+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122833")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:04.473+0000"),
          "time" : ISODate("2017-06-27T10:16:04.478+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122832")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:04.978+0000"),
          "time" : ISODate("2017-06-27T10:16:04.980+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122831")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:05.480+0000"),
          "time" : ISODate("2017-06-27T10:16:05.480+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122830")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:05.980+0000"),
          "time" : ISODate("2017-06-27T10:16:05.981+0000"),
          "_id" : ObjectId("5952306b804cda1b9a12282f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:06.481+0000"),
          "time" : ISODate("2017-06-27T10:16:06.483+0000"),
          "_id" : ObjectId("5952306b804cda1b9a12282e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:06.983+0000"),
          "time" : ISODate("2017-06-27T10:16:06.983+0000"),
          "_id" : ObjectId("5952306b804cda1b9a12282d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:07.483+0000"),
          "time" : ISODate("2017-06-27T10:16:07.493+0000"),
          "_id" : ObjectId("5952306b804cda1b9a12282c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:07.993+0000"),
          "time" : ISODate("2017-06-27T10:16:07.994+0000"),
          "_id" : ObjectId("5952306b804cda1b9a12282b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:08.494+0000"),
          "time" : ISODate("2017-06-27T10:16:08.496+0000"),
          "_id" : ObjectId("5952306b804cda1b9a12282a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:08.996+0000"),
          "time" : ISODate("2017-06-27T10:16:09.000+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122829")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:09.500+0000"),
          "time" : ISODate("2017-06-27T10:16:09.501+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122828")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:10.001+0000"),
          "time" : ISODate("2017-06-27T10:16:10.001+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122827")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:10.501+0000"),
          "time" : ISODate("2017-06-27T10:16:10.502+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122826")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:11.002+0000"),
          "time" : ISODate("2017-06-27T10:16:11.002+0000"),
          "_id" : ObjectId("5952306b804cda1b9a122825")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952306d804cda1b9a122839"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952306d804cda1b9a12283e")
    },
    "benchmarkData" : {
      "location" : "https://www.google.hu/search?q=proxmox+set+up+birdged+network&oq=proxmox+set+up+birdged+network&aqs=chrome..69i57.9183j0j7&sourceid=chrome&ie=UTF-8",
      "_id" : ObjectId("5952306d804cda1b9a12283a"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:16:12.574+0000"),
          "time" : ISODate("2017-06-27T10:16:12.574+0000"),
          "_id" : ObjectId("5952306d804cda1b9a12283d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:13.074+0000"),
          "time" : ISODate("2017-06-27T10:16:13.076+0000"),
          "_id" : ObjectId("5952306d804cda1b9a12283c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:16:13.576+0000"),
          "time" : ISODate("2017-06-27T10:16:13.576+0000"),
          "_id" : ObjectId("5952306d804cda1b9a12283b")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595230b3804cda1b9a12283f"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595230b3804cda1b9a122852")
    },
    "benchmarkData" : {
      "location" : "https://www.google.hu/_/chrome/newtab?espv=2&ie=UTF-8",
      "_id" : ObjectId("595230b3804cda1b9a122840"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:17:15.209+0000"),
          "time" : ISODate("2017-06-27T10:17:15.209+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122851")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:15.709+0000"),
          "time" : ISODate("2017-06-27T10:17:15.709+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122850")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:16.209+0000"),
          "time" : ISODate("2017-06-27T10:17:16.211+0000"),
          "_id" : ObjectId("595230b3804cda1b9a12284f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:16.711+0000"),
          "time" : ISODate("2017-06-27T10:17:16.711+0000"),
          "_id" : ObjectId("595230b3804cda1b9a12284e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:17.211+0000"),
          "time" : ISODate("2017-06-27T10:17:17.213+0000"),
          "_id" : ObjectId("595230b3804cda1b9a12284d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:17.713+0000"),
          "time" : ISODate("2017-06-27T10:17:17.718+0000"),
          "_id" : ObjectId("595230b3804cda1b9a12284c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:18.218+0000"),
          "time" : ISODate("2017-06-27T10:17:18.218+0000"),
          "_id" : ObjectId("595230b3804cda1b9a12284b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:18.718+0000"),
          "time" : ISODate("2017-06-27T10:17:18.719+0000"),
          "_id" : ObjectId("595230b3804cda1b9a12284a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:19.219+0000"),
          "time" : ISODate("2017-06-27T10:17:19.220+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122849")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:19.720+0000"),
          "time" : ISODate("2017-06-27T10:17:19.720+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122848")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:20.220+0000"),
          "time" : ISODate("2017-06-27T10:17:20.220+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122847")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:20.720+0000"),
          "time" : ISODate("2017-06-27T10:17:20.754+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122846")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:21.254+0000"),
          "time" : ISODate("2017-06-27T10:17:21.254+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122845")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:21.754+0000"),
          "time" : ISODate("2017-06-27T10:17:21.754+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122844")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:22.254+0000"),
          "time" : ISODate("2017-06-27T10:17:22.256+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122843")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:22.756+0000"),
          "time" : ISODate("2017-06-27T10:17:22.756+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122842")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:23.256+0000"),
          "time" : ISODate("2017-06-27T10:17:23.257+0000"),
          "_id" : ObjectId("595230b3804cda1b9a122841")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595230c0804cda1b9a12285e"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595230c0804cda1b9a12286e")
    },
    "benchmarkData" : {
      "location" : "https://www.otpbank.hu/portal/hu/Onkormanyzat/Szamlavezetes/Forint",
      "_id" : ObjectId("595230c0804cda1b9a12285f"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:17:29.175+0000"),
          "time" : ISODate("2017-06-27T10:17:29.175+0000"),
          "_id" : ObjectId("595230c0804cda1b9a12286d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:29.675+0000"),
          "time" : ISODate("2017-06-27T10:17:29.676+0000"),
          "_id" : ObjectId("595230c0804cda1b9a12286c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:30.176+0000"),
          "time" : ISODate("2017-06-27T10:17:30.176+0000"),
          "_id" : ObjectId("595230c0804cda1b9a12286b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:30.676+0000"),
          "time" : ISODate("2017-06-27T10:17:30.676+0000"),
          "_id" : ObjectId("595230c0804cda1b9a12286a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:31.176+0000"),
          "time" : ISODate("2017-06-27T10:17:31.178+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122869")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:31.678+0000"),
          "time" : ISODate("2017-06-27T10:17:31.681+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122868")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:32.181+0000"),
          "time" : ISODate("2017-06-27T10:17:32.185+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122867")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:32.685+0000"),
          "time" : ISODate("2017-06-27T10:17:32.685+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122866")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:33.185+0000"),
          "time" : ISODate("2017-06-27T10:17:33.186+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122865")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:33.686+0000"),
          "time" : ISODate("2017-06-27T10:17:33.688+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122864")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:34.188+0000"),
          "time" : ISODate("2017-06-27T10:17:34.192+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122863")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:34.692+0000"),
          "time" : ISODate("2017-06-27T10:17:34.692+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122862")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:35.192+0000"),
          "time" : ISODate("2017-06-27T10:17:35.193+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122861")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:35.693+0000"),
          "time" : ISODate("2017-06-27T10:17:35.694+0000"),
          "_id" : ObjectId("595230c0804cda1b9a122860")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595230cb804cda1b9a12286f"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595230cb804cda1b9a122887")
    },
    "benchmarkData" : {
      "location" : "https://www.otpbank.hu/portal/hu/fooldal",
      "_id" : ObjectId("595230cb804cda1b9a122870"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:17:36.544+0000"),
          "time" : ISODate("2017-06-27T10:17:36.544+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122886")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:37.044+0000"),
          "time" : ISODate("2017-06-27T10:17:37.044+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122885")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:37.544+0000"),
          "time" : ISODate("2017-06-27T10:17:37.545+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122884")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:38.045+0000"),
          "time" : ISODate("2017-06-27T10:17:38.045+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122883")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:38.545+0000"),
          "time" : ISODate("2017-06-27T10:17:38.545+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122882")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:39.045+0000"),
          "time" : ISODate("2017-06-27T10:17:39.046+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122881")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:39.546+0000"),
          "time" : ISODate("2017-06-27T10:17:39.547+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122880")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:40.047+0000"),
          "time" : ISODate("2017-06-27T10:17:40.047+0000"),
          "_id" : ObjectId("595230cb804cda1b9a12287f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:40.547+0000"),
          "time" : ISODate("2017-06-27T10:17:40.548+0000"),
          "_id" : ObjectId("595230cb804cda1b9a12287e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:41.048+0000"),
          "time" : ISODate("2017-06-27T10:17:41.048+0000"),
          "_id" : ObjectId("595230cb804cda1b9a12287d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:41.548+0000"),
          "time" : ISODate("2017-06-27T10:17:41.549+0000"),
          "_id" : ObjectId("595230cb804cda1b9a12287c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:42.049+0000"),
          "time" : ISODate("2017-06-27T10:17:42.050+0000"),
          "_id" : ObjectId("595230cb804cda1b9a12287b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:42.550+0000"),
          "time" : ISODate("2017-06-27T10:17:42.550+0000"),
          "_id" : ObjectId("595230cb804cda1b9a12287a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:43.050+0000"),
          "time" : ISODate("2017-06-27T10:17:43.051+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122879")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:43.551+0000"),
          "time" : ISODate("2017-06-27T10:17:43.552+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122878")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:44.052+0000"),
          "time" : ISODate("2017-06-27T10:17:44.052+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122877")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:44.552+0000"),
          "time" : ISODate("2017-06-27T10:17:44.553+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122876")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:45.053+0000"),
          "time" : ISODate("2017-06-27T10:17:45.055+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122875")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:45.555+0000"),
          "time" : ISODate("2017-06-27T10:17:45.555+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122874")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:46.055+0000"),
          "time" : ISODate("2017-06-27T10:17:46.056+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122873")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:46.556+0000"),
          "time" : ISODate("2017-06-27T10:17:46.557+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122872")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:17:47.057+0000"),
          "time" : ISODate("2017-06-27T10:17:47.058+0000"),
          "_id" : ObjectId("595230cb804cda1b9a122871")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952401a804cda1b9a12288a"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952401a804cda1b9a122893")
    },
    "benchmarkData" : {
      "location" : "https://localhost:8443/api/v1/analytic-entry",
      "_id" : ObjectId("5952401a804cda1b9a12288b"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:13:43.671+0000"),
          "time" : ISODate("2017-06-27T10:13:43.671+0000"),
          "_id" : ObjectId("5952401a804cda1b9a122892")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:44.171+0000"),
          "time" : ISODate("2017-06-27T10:13:44.174+0000"),
          "_id" : ObjectId("5952401a804cda1b9a122891")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:44.674+0000"),
          "time" : ISODate("2017-06-27T10:13:44.676+0000"),
          "_id" : ObjectId("5952401a804cda1b9a122890")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:45.176+0000"),
          "time" : ISODate("2017-06-27T10:13:45.177+0000"),
          "_id" : ObjectId("5952401a804cda1b9a12288f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:45.677+0000"),
          "time" : ISODate("2017-06-27T10:13:45.677+0000"),
          "_id" : ObjectId("5952401a804cda1b9a12288e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:46.177+0000"),
          "time" : ISODate("2017-06-27T10:13:46.179+0000"),
          "_id" : ObjectId("5952401a804cda1b9a12288d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:13:46.679+0000"),
          "time" : ISODate("2017-06-27T10:13:46.681+0000"),
          "_id" : ObjectId("5952401a804cda1b9a12288c")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952402c7c446a27f654c3ef"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952402c7c446a27f654c407")
    },
    "benchmarkData" : {
      "location" : "https://localhost:8443/api/v1/analytic-entry",
      "_id" : ObjectId("5952402c7c446a27f654c3f0"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:23:08.668+0000"),
          "time" : ISODate("2017-06-27T11:23:08.668+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c406")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:09.168+0000"),
          "time" : ISODate("2017-06-27T11:23:09.168+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c405")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:09.668+0000"),
          "time" : ISODate("2017-06-27T11:23:09.669+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c404")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:10.169+0000"),
          "time" : ISODate("2017-06-27T11:23:10.172+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c403")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:10.672+0000"),
          "time" : ISODate("2017-06-27T11:23:10.676+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c402")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:11.176+0000"),
          "time" : ISODate("2017-06-27T11:23:11.176+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c401")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:11.676+0000"),
          "time" : ISODate("2017-06-27T11:23:11.677+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c400")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:12.177+0000"),
          "time" : ISODate("2017-06-27T11:23:12.179+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3ff")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:12.679+0000"),
          "time" : ISODate("2017-06-27T11:23:13.037+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3fe")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:13.537+0000"),
          "time" : ISODate("2017-06-27T11:23:13.950+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3fd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:14.450+0000"),
          "time" : ISODate("2017-06-27T11:23:15.214+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3fc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:15.714+0000"),
          "time" : ISODate("2017-06-27T11:23:16.109+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3fb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:16.609+0000"),
          "time" : ISODate("2017-06-27T11:23:16.948+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3fa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:17.448+0000"),
          "time" : ISODate("2017-06-27T11:23:17.942+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3f9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:18.442+0000"),
          "time" : ISODate("2017-06-27T11:23:19.247+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3f8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:19.747+0000"),
          "time" : ISODate("2017-06-27T11:23:20.264+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3f7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:20.764+0000"),
          "time" : ISODate("2017-06-27T11:23:21.253+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3f6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:21.753+0000"),
          "time" : ISODate("2017-06-27T11:23:22.276+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3f5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:22.776+0000"),
          "time" : ISODate("2017-06-27T11:23:23.068+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3f4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:23.568+0000"),
          "time" : ISODate("2017-06-27T11:23:23.573+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3f3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:24.073+0000"),
          "time" : ISODate("2017-06-27T11:23:24.073+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3f2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:24.573+0000"),
          "time" : ISODate("2017-06-27T11:23:24.574+0000"),
          "_id" : ObjectId("5952402c7c446a27f654c3f1")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952402d7c446a27f654c428"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952402d7c446a27f654c440")
    },
    "benchmarkData" : {
      "location" : "https://localhost:8443/api/v1/analytic-entry",
      "_id" : ObjectId("5952402d7c446a27f654c429"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:23:08.668+0000"),
          "time" : ISODate("2017-06-27T11:23:08.668+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c43f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:09.168+0000"),
          "time" : ISODate("2017-06-27T11:23:09.168+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c43e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:09.668+0000"),
          "time" : ISODate("2017-06-27T11:23:09.669+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c43d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:10.169+0000"),
          "time" : ISODate("2017-06-27T11:23:10.172+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c43c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:10.672+0000"),
          "time" : ISODate("2017-06-27T11:23:10.676+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c43b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:11.176+0000"),
          "time" : ISODate("2017-06-27T11:23:11.176+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c43a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:11.676+0000"),
          "time" : ISODate("2017-06-27T11:23:11.677+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c439")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:12.177+0000"),
          "time" : ISODate("2017-06-27T11:23:12.179+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c438")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:12.679+0000"),
          "time" : ISODate("2017-06-27T11:23:13.037+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c437")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:13.537+0000"),
          "time" : ISODate("2017-06-27T11:23:13.950+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c436")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:14.450+0000"),
          "time" : ISODate("2017-06-27T11:23:15.214+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c435")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:15.714+0000"),
          "time" : ISODate("2017-06-27T11:23:16.109+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c434")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:16.609+0000"),
          "time" : ISODate("2017-06-27T11:23:16.948+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c433")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:17.448+0000"),
          "time" : ISODate("2017-06-27T11:23:17.942+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c432")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:18.442+0000"),
          "time" : ISODate("2017-06-27T11:23:19.247+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c431")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:19.747+0000"),
          "time" : ISODate("2017-06-27T11:23:20.264+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c430")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:20.764+0000"),
          "time" : ISODate("2017-06-27T11:23:21.253+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c42f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:21.753+0000"),
          "time" : ISODate("2017-06-27T11:23:22.276+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c42e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:22.776+0000"),
          "time" : ISODate("2017-06-27T11:23:23.068+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c42d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:23.568+0000"),
          "time" : ISODate("2017-06-27T11:23:23.573+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c42c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:24.073+0000"),
          "time" : ISODate("2017-06-27T11:23:24.073+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c42b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:24.573+0000"),
          "time" : ISODate("2017-06-27T11:23:24.574+0000"),
          "_id" : ObjectId("5952402d7c446a27f654c42a")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595240377c446a27f654c441"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595240377c446a27f654c454")
    },
    "benchmarkData" : {
      "location" : "https://localhost:8443/api/v1/analytic-entry",
      "_id" : ObjectId("595240377c446a27f654c442"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:23:25.110+0000"),
          "time" : ISODate("2017-06-27T11:23:25.110+0000"),
          "_id" : ObjectId("595240377c446a27f654c453")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:25.610+0000"),
          "time" : ISODate("2017-06-27T11:23:25.612+0000"),
          "_id" : ObjectId("595240377c446a27f654c452")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:26.112+0000"),
          "time" : ISODate("2017-06-27T11:23:26.115+0000"),
          "_id" : ObjectId("595240377c446a27f654c451")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:26.615+0000"),
          "time" : ISODate("2017-06-27T11:23:26.617+0000"),
          "_id" : ObjectId("595240377c446a27f654c450")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:27.117+0000"),
          "time" : ISODate("2017-06-27T11:23:27.121+0000"),
          "_id" : ObjectId("595240377c446a27f654c44f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:27.621+0000"),
          "time" : ISODate("2017-06-27T11:23:27.622+0000"),
          "_id" : ObjectId("595240377c446a27f654c44e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:28.122+0000"),
          "time" : ISODate("2017-06-27T11:23:28.125+0000"),
          "_id" : ObjectId("595240377c446a27f654c44d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:28.625+0000"),
          "time" : ISODate("2017-06-27T11:23:28.628+0000"),
          "_id" : ObjectId("595240377c446a27f654c44c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:29.128+0000"),
          "time" : ISODate("2017-06-27T11:23:29.133+0000"),
          "_id" : ObjectId("595240377c446a27f654c44b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:29.633+0000"),
          "time" : ISODate("2017-06-27T11:23:29.635+0000"),
          "_id" : ObjectId("595240377c446a27f654c44a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:30.135+0000"),
          "time" : ISODate("2017-06-27T11:23:30.138+0000"),
          "_id" : ObjectId("595240377c446a27f654c449")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:30.638+0000"),
          "time" : ISODate("2017-06-27T11:23:30.643+0000"),
          "_id" : ObjectId("595240377c446a27f654c448")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:31.143+0000"),
          "time" : ISODate("2017-06-27T11:23:32.012+0000"),
          "_id" : ObjectId("595240377c446a27f654c447")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:32.512+0000"),
          "time" : ISODate("2017-06-27T11:23:33.172+0000"),
          "_id" : ObjectId("595240377c446a27f654c446")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:33.672+0000"),
          "time" : ISODate("2017-06-27T11:23:33.960+0000"),
          "_id" : ObjectId("595240377c446a27f654c445")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:34.460+0000"),
          "time" : ISODate("2017-06-27T11:23:34.529+0000"),
          "_id" : ObjectId("595240377c446a27f654c444")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:35.029+0000"),
          "time" : ISODate("2017-06-27T11:23:35.029+0000"),
          "_id" : ObjectId("595240377c446a27f654c443")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595240417c446a27f654c47b"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595240417c446a27f654c491")
    },
    "benchmarkData" : {
      "location" : "https://localhost:8443/api/v1/analytic-entry",
      "_id" : ObjectId("595240417c446a27f654c47c"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:23:35.357+0000"),
          "time" : ISODate("2017-06-27T11:23:35.357+0000"),
          "_id" : ObjectId("595240417c446a27f654c490")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:35.857+0000"),
          "time" : ISODate("2017-06-27T11:23:35.859+0000"),
          "_id" : ObjectId("595240417c446a27f654c48f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:36.359+0000"),
          "time" : ISODate("2017-06-27T11:23:36.360+0000"),
          "_id" : ObjectId("595240417c446a27f654c48e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:36.860+0000"),
          "time" : ISODate("2017-06-27T11:23:36.865+0000"),
          "_id" : ObjectId("595240417c446a27f654c48d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:37.365+0000"),
          "time" : ISODate("2017-06-27T11:23:37.367+0000"),
          "_id" : ObjectId("595240417c446a27f654c48c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:37.867+0000"),
          "time" : ISODate("2017-06-27T11:23:37.870+0000"),
          "_id" : ObjectId("595240417c446a27f654c48b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:38.370+0000"),
          "time" : ISODate("2017-06-27T11:23:38.371+0000"),
          "_id" : ObjectId("595240417c446a27f654c48a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:38.871+0000"),
          "time" : ISODate("2017-06-27T11:23:38.871+0000"),
          "_id" : ObjectId("595240417c446a27f654c489")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:39.371+0000"),
          "time" : ISODate("2017-06-27T11:23:40.008+0000"),
          "_id" : ObjectId("595240417c446a27f654c488")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:40.508+0000"),
          "time" : ISODate("2017-06-27T11:23:40.508+0000"),
          "_id" : ObjectId("595240417c446a27f654c487")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:41.008+0000"),
          "time" : ISODate("2017-06-27T11:23:41.011+0000"),
          "_id" : ObjectId("595240417c446a27f654c486")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:41.511+0000"),
          "time" : ISODate("2017-06-27T11:23:41.515+0000"),
          "_id" : ObjectId("595240417c446a27f654c485")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:42.015+0000"),
          "time" : ISODate("2017-06-27T11:23:42.018+0000"),
          "_id" : ObjectId("595240417c446a27f654c484")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:42.518+0000"),
          "time" : ISODate("2017-06-27T11:23:42.521+0000"),
          "_id" : ObjectId("595240417c446a27f654c483")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:43.021+0000"),
          "time" : ISODate("2017-06-27T11:23:43.024+0000"),
          "_id" : ObjectId("595240417c446a27f654c482")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:43.524+0000"),
          "time" : ISODate("2017-06-27T11:23:43.528+0000"),
          "_id" : ObjectId("595240417c446a27f654c481")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:44.028+0000"),
          "time" : ISODate("2017-06-27T11:23:44.029+0000"),
          "_id" : ObjectId("595240417c446a27f654c480")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:44.529+0000"),
          "time" : ISODate("2017-06-27T11:23:44.530+0000"),
          "_id" : ObjectId("595240417c446a27f654c47f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:45.030+0000"),
          "time" : ISODate("2017-06-27T11:23:45.033+0000"),
          "_id" : ObjectId("595240417c446a27f654c47e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:45.533+0000"),
          "time" : ISODate("2017-06-27T11:23:45.533+0000"),
          "_id" : ObjectId("595240417c446a27f654c47d")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952407c7c446a27f654c4ba"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952407c7c446a27f654c502")
    },
    "benchmarkData" : {
      "location" : "https://localhost:8443/api/v1/analytic-entry",
      "_id" : ObjectId("5952407c7c446a27f654c4bb"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:23:46.316+0000"),
          "time" : ISODate("2017-06-27T11:23:46.316+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c501")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:46.816+0000"),
          "time" : ISODate("2017-06-27T11:23:46.820+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c500")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:47.320+0000"),
          "time" : ISODate("2017-06-27T11:23:47.324+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4ff")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:47.824+0000"),
          "time" : ISODate("2017-06-27T11:23:47.824+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4fe")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:48.324+0000"),
          "time" : ISODate("2017-06-27T11:23:48.327+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4fd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:48.827+0000"),
          "time" : ISODate("2017-06-27T11:23:48.830+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4fc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:49.330+0000"),
          "time" : ISODate("2017-06-27T11:23:49.331+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4fb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:49.831+0000"),
          "time" : ISODate("2017-06-27T11:23:49.833+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4fa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:50.333+0000"),
          "time" : ISODate("2017-06-27T11:23:50.337+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:50.837+0000"),
          "time" : ISODate("2017-06-27T11:23:50.840+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:51.340+0000"),
          "time" : ISODate("2017-06-27T11:23:51.342+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:51.842+0000"),
          "time" : ISODate("2017-06-27T11:23:51.842+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:52.342+0000"),
          "time" : ISODate("2017-06-27T11:23:52.343+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:52.843+0000"),
          "time" : ISODate("2017-06-27T11:23:52.847+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:53.347+0000"),
          "time" : ISODate("2017-06-27T11:23:53.351+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:53.851+0000"),
          "time" : ISODate("2017-06-27T11:23:53.851+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:54.351+0000"),
          "time" : ISODate("2017-06-27T11:23:54.352+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:54.852+0000"),
          "time" : ISODate("2017-06-27T11:23:54.957+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4f0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:55.457+0000"),
          "time" : ISODate("2017-06-27T11:23:56.026+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4ef")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:56.526+0000"),
          "time" : ISODate("2017-06-27T11:23:56.959+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4ee")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:57.459+0000"),
          "time" : ISODate("2017-06-27T11:23:58.200+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4ed")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:58.700+0000"),
          "time" : ISODate("2017-06-27T11:23:59.302+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4ec")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:23:59.802+0000"),
          "time" : ISODate("2017-06-27T11:24:00.252+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4eb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:00.752+0000"),
          "time" : ISODate("2017-06-27T11:24:00.940+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4ea")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:01.440+0000"),
          "time" : ISODate("2017-06-27T11:24:02.211+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:02.711+0000"),
          "time" : ISODate("2017-06-27T11:24:03.295+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:03.795+0000"),
          "time" : ISODate("2017-06-27T11:24:04.252+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:04.752+0000"),
          "time" : ISODate("2017-06-27T11:24:04.945+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:05.445+0000"),
          "time" : ISODate("2017-06-27T11:24:06.429+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:06.929+0000"),
          "time" : ISODate("2017-06-27T11:24:07.189+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:07.689+0000"),
          "time" : ISODate("2017-06-27T11:24:08.311+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:08.811+0000"),
          "time" : ISODate("2017-06-27T11:24:09.252+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:09.752+0000"),
          "time" : ISODate("2017-06-27T11:24:10.258+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:10.758+0000"),
          "time" : ISODate("2017-06-27T11:24:11.263+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4e0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:11.763+0000"),
          "time" : ISODate("2017-06-27T11:24:12.270+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4df")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:12.770+0000"),
          "time" : ISODate("2017-06-27T11:24:13.260+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4de")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:13.760+0000"),
          "time" : ISODate("2017-06-27T11:24:14.260+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4dd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:14.760+0000"),
          "time" : ISODate("2017-06-27T11:24:14.939+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4dc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:15.439+0000"),
          "time" : ISODate("2017-06-27T11:24:16.438+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4db")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:16.938+0000"),
          "time" : ISODate("2017-06-27T11:24:17.187+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4da")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:17.687+0000"),
          "time" : ISODate("2017-06-27T11:24:18.312+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:18.812+0000"),
          "time" : ISODate("2017-06-27T11:24:19.251+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:19.751+0000"),
          "time" : ISODate("2017-06-27T11:24:20.257+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:20.757+0000"),
          "time" : ISODate("2017-06-27T11:24:20.939+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:21.439+0000"),
          "time" : ISODate("2017-06-27T11:24:22.342+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:22.842+0000"),
          "time" : ISODate("2017-06-27T11:24:23.227+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:23.727+0000"),
          "time" : ISODate("2017-06-27T11:24:24.291+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:24.791+0000"),
          "time" : ISODate("2017-06-27T11:24:24.939+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:25.439+0000"),
          "time" : ISODate("2017-06-27T11:24:26.033+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:26.533+0000"),
          "time" : ISODate("2017-06-27T11:24:27.384+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4d0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:27.884+0000"),
          "time" : ISODate("2017-06-27T11:24:28.211+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4cf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:28.711+0000"),
          "time" : ISODate("2017-06-27T11:24:29.299+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4ce")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:29.799+0000"),
          "time" : ISODate("2017-06-27T11:24:30.255+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4cd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:30.755+0000"),
          "time" : ISODate("2017-06-27T11:24:31.221+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4cc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:31.721+0000"),
          "time" : ISODate("2017-06-27T11:24:31.939+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4cb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:32.439+0000"),
          "time" : ISODate("2017-06-27T11:24:33.424+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4ca")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:33.924+0000"),
          "time" : ISODate("2017-06-27T11:24:34.194+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:34.694+0000"),
          "time" : ISODate("2017-06-27T11:24:35.304+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:35.804+0000"),
          "time" : ISODate("2017-06-27T11:24:36.251+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:36.751+0000"),
          "time" : ISODate("2017-06-27T11:24:37.251+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:37.751+0000"),
          "time" : ISODate("2017-06-27T11:24:38.274+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:38.774+0000"),
          "time" : ISODate("2017-06-27T11:24:39.264+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:39.764+0000"),
          "time" : ISODate("2017-06-27T11:24:40.271+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:40.771+0000"),
          "time" : ISODate("2017-06-27T11:24:41.252+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:41.752+0000"),
          "time" : ISODate("2017-06-27T11:24:41.756+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:42.256+0000"),
          "time" : ISODate("2017-06-27T11:24:42.256+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4c0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:42.756+0000"),
          "time" : ISODate("2017-06-27T11:24:42.760+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4bf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:43.260+0000"),
          "time" : ISODate("2017-06-27T11:24:43.265+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4be")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:43.765+0000"),
          "time" : ISODate("2017-06-27T11:24:43.765+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4bd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:44.265+0000"),
          "time" : ISODate("2017-06-27T11:24:44.266+0000"),
          "_id" : ObjectId("5952407c7c446a27f654c4bc")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("5952407d7c446a27f654c52d"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("5952407d7c446a27f654c531")
    },
    "benchmarkData" : {
      "location" : "https://localhost:8443/api/v1/analytic-entry",
      "_id" : ObjectId("5952407d7c446a27f654c52e"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:24:45.072+0000"),
          "time" : ISODate("2017-06-27T11:24:45.072+0000"),
          "_id" : ObjectId("5952407d7c446a27f654c530")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:24:45.572+0000"),
          "time" : ISODate("2017-06-27T11:24:45.572+0000"),
          "_id" : ObjectId("5952407d7c446a27f654c52f")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595240ba7c446a27f654c532"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595240ba7c446a27f654c543")
    },
    "benchmarkData" : {
      "location" : "https://www.google.hu/_/chrome/newtab?espv=2&ie=UTF-8",
      "_id" : ObjectId("595240ba7c446a27f654c533"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:25:38.734+0000"),
          "time" : ISODate("2017-06-27T11:25:38.734+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c542")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:39.234+0000"),
          "time" : ISODate("2017-06-27T11:25:39.235+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c541")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:39.735+0000"),
          "time" : ISODate("2017-06-27T11:25:39.735+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c540")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:40.235+0000"),
          "time" : ISODate("2017-06-27T11:25:40.240+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c53f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:40.740+0000"),
          "time" : ISODate("2017-06-27T11:25:40.740+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c53e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:41.240+0000"),
          "time" : ISODate("2017-06-27T11:25:41.241+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c53d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:41.741+0000"),
          "time" : ISODate("2017-06-27T11:25:41.745+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c53c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:42.245+0000"),
          "time" : ISODate("2017-06-27T11:25:42.250+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c53b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:42.750+0000"),
          "time" : ISODate("2017-06-27T11:25:42.753+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c53a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:43.253+0000"),
          "time" : ISODate("2017-06-27T11:25:43.257+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c539")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:43.757+0000"),
          "time" : ISODate("2017-06-27T11:25:43.758+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c538")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:44.258+0000"),
          "time" : ISODate("2017-06-27T11:25:44.284+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c537")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:44.784+0000"),
          "time" : ISODate("2017-06-27T11:25:44.788+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c536")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:45.288+0000"),
          "time" : ISODate("2017-06-27T11:25:45.288+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c535")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:25:45.788+0000"),
          "time" : ISODate("2017-06-27T11:25:45.791+0000"),
          "_id" : ObjectId("595240ba7c446a27f654c534")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595240bb7c446a27f654c544"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595240bb7c446a27f654c547")
    },
    "benchmarkData" : {
      "location" : "https://www.google.hu/search?q=ubuntu+install+ssh&oq=ubuntu+install+ssh&aqs=chrome..69i57j0l5.6936j0j7&sourceid=chrome&ie=UTF-8",
      "_id" : ObjectId("595240bb7c446a27f654c545"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:25:46.878+0000"),
          "time" : ISODate("2017-06-27T11:25:46.878+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c546")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595241287c446a27f654ca09"),
    "clientInfo" : {
      "fingerprint" : NumberInt(994007707),
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595241287c446a27f654ca0c")
    },
    "benchmarkData" : {
      "location" : "https://www.google.hu/search?q=mongoose+connect+example&oq=mongoose+connect+ex&aqs=chrome.1.69i57j0l5.6375j0j4&sourceid=chrome&ie=UTF-8",
      "_id" : ObjectId("595241287c446a27f654ca0a"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:27:35.839+0000"),
          "time" : ISODate("2017-06-27T11:27:35.839+0000"),
          "_id" : ObjectId("595241287c446a27f654ca0b")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595241287c446a27f654ca0d"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595241287c446a27f654cae4")
    },
    "benchmarkData" : {
      "location" : "http://mongoosejs.com/docs/queries.html",
      "_id" : ObjectId("595241287c446a27f654ca0e"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T11:08:28.297+0000"),
          "time" : ISODate("2017-06-27T11:08:28.297+0000"),
          "_id" : ObjectId("595241287c446a27f654cae3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:28.797+0000"),
          "time" : ISODate("2017-06-27T11:08:28.798+0000"),
          "_id" : ObjectId("595241287c446a27f654cae2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:29.298+0000"),
          "time" : ISODate("2017-06-27T11:08:29.298+0000"),
          "_id" : ObjectId("595241287c446a27f654cae1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:29.798+0000"),
          "time" : ISODate("2017-06-27T11:08:29.798+0000"),
          "_id" : ObjectId("595241287c446a27f654cae0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:30.298+0000"),
          "time" : ISODate("2017-06-27T11:08:30.299+0000"),
          "_id" : ObjectId("595241287c446a27f654cadf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:30.799+0000"),
          "time" : ISODate("2017-06-27T11:08:30.799+0000"),
          "_id" : ObjectId("595241287c446a27f654cade")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:31.299+0000"),
          "time" : ISODate("2017-06-27T11:08:31.300+0000"),
          "_id" : ObjectId("595241287c446a27f654cadd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:31.800+0000"),
          "time" : ISODate("2017-06-27T11:08:31.802+0000"),
          "_id" : ObjectId("595241287c446a27f654cadc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:32.302+0000"),
          "time" : ISODate("2017-06-27T11:08:33.065+0000"),
          "_id" : ObjectId("595241287c446a27f654cadb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:33.565+0000"),
          "time" : ISODate("2017-06-27T11:08:34.390+0000"),
          "_id" : ObjectId("595241287c446a27f654cada")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:34.890+0000"),
          "time" : ISODate("2017-06-27T11:08:35.227+0000"),
          "_id" : ObjectId("595241287c446a27f654cad9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:35.727+0000"),
          "time" : ISODate("2017-06-27T11:08:36.307+0000"),
          "_id" : ObjectId("595241287c446a27f654cad8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:36.807+0000"),
          "time" : ISODate("2017-06-27T11:08:36.967+0000"),
          "_id" : ObjectId("595241287c446a27f654cad7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:37.467+0000"),
          "time" : ISODate("2017-06-27T11:08:38.026+0000"),
          "_id" : ObjectId("595241287c446a27f654cad6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:38.526+0000"),
          "time" : ISODate("2017-06-27T11:08:39.147+0000"),
          "_id" : ObjectId("595241287c446a27f654cad5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:39.647+0000"),
          "time" : ISODate("2017-06-27T11:08:40.346+0000"),
          "_id" : ObjectId("595241287c446a27f654cad4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:40.846+0000"),
          "time" : ISODate("2017-06-27T11:08:41.257+0000"),
          "_id" : ObjectId("595241287c446a27f654cad3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:41.757+0000"),
          "time" : ISODate("2017-06-27T11:08:43.275+0000"),
          "_id" : ObjectId("595241287c446a27f654cad2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:43.775+0000"),
          "time" : ISODate("2017-06-27T11:08:44.293+0000"),
          "_id" : ObjectId("595241287c446a27f654cad1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:44.793+0000"),
          "time" : ISODate("2017-06-27T11:08:45.283+0000"),
          "_id" : ObjectId("595241287c446a27f654cad0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:45.783+0000"),
          "time" : ISODate("2017-06-27T11:08:46.278+0000"),
          "_id" : ObjectId("595241287c446a27f654cacf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:46.778+0000"),
          "time" : ISODate("2017-06-27T11:08:47.052+0000"),
          "_id" : ObjectId("595241287c446a27f654cace")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:47.552+0000"),
          "time" : ISODate("2017-06-27T11:08:48.041+0000"),
          "_id" : ObjectId("595241287c446a27f654cacd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:48.541+0000"),
          "time" : ISODate("2017-06-27T11:08:49.408+0000"),
          "_id" : ObjectId("595241287c446a27f654cacc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:49.908+0000"),
          "time" : ISODate("2017-06-27T11:08:50.215+0000"),
          "_id" : ObjectId("595241287c446a27f654cacb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:50.715+0000"),
          "time" : ISODate("2017-06-27T11:08:51.289+0000"),
          "_id" : ObjectId("595241287c446a27f654caca")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:51.789+0000"),
          "time" : ISODate("2017-06-27T11:08:52.279+0000"),
          "_id" : ObjectId("595241287c446a27f654cac9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:52.779+0000"),
          "time" : ISODate("2017-06-27T11:08:53.236+0000"),
          "_id" : ObjectId("595241287c446a27f654cac8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:53.736+0000"),
          "time" : ISODate("2017-06-27T11:08:54.097+0000"),
          "_id" : ObjectId("595241287c446a27f654cac7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:54.597+0000"),
          "time" : ISODate("2017-06-27T11:08:55.381+0000"),
          "_id" : ObjectId("595241287c446a27f654cac6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:55.881+0000"),
          "time" : ISODate("2017-06-27T11:08:56.205+0000"),
          "_id" : ObjectId("595241287c446a27f654cac5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:56.705+0000"),
          "time" : ISODate("2017-06-27T11:08:57.328+0000"),
          "_id" : ObjectId("595241287c446a27f654cac4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:57.828+0000"),
          "time" : ISODate("2017-06-27T11:08:58.251+0000"),
          "_id" : ObjectId("595241287c446a27f654cac3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:58.751+0000"),
          "time" : ISODate("2017-06-27T11:08:59.274+0000"),
          "_id" : ObjectId("595241287c446a27f654cac2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:08:59.774+0000"),
          "time" : ISODate("2017-06-27T11:09:00.231+0000"),
          "_id" : ObjectId("595241287c446a27f654cac1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:00.731+0000"),
          "time" : ISODate("2017-06-27T11:09:01.288+0000"),
          "_id" : ObjectId("595241287c446a27f654cac0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:01.788+0000"),
          "time" : ISODate("2017-06-27T11:09:02.278+0000"),
          "_id" : ObjectId("595241287c446a27f654cabf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:02.778+0000"),
          "time" : ISODate("2017-06-27T11:09:03.278+0000"),
          "_id" : ObjectId("595241287c446a27f654cabe")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:03.778+0000"),
          "time" : ISODate("2017-06-27T11:09:04.257+0000"),
          "_id" : ObjectId("595241287c446a27f654cabd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:04.757+0000"),
          "time" : ISODate("2017-06-27T11:09:05.215+0000"),
          "_id" : ObjectId("595241287c446a27f654cabc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:05.715+0000"),
          "time" : ISODate("2017-06-27T11:09:06.271+0000"),
          "_id" : ObjectId("595241287c446a27f654cabb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:06.771+0000"),
          "time" : ISODate("2017-06-27T11:09:07.261+0000"),
          "_id" : ObjectId("595241287c446a27f654caba")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:07.761+0000"),
          "time" : ISODate("2017-06-27T11:09:08.297+0000"),
          "_id" : ObjectId("595241287c446a27f654cab9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:08.797+0000"),
          "time" : ISODate("2017-06-27T11:09:09.241+0000"),
          "_id" : ObjectId("595241287c446a27f654cab8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:09.741+0000"),
          "time" : ISODate("2017-06-27T11:09:10.301+0000"),
          "_id" : ObjectId("595241287c446a27f654cab7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:10.801+0000"),
          "time" : ISODate("2017-06-27T11:09:11.220+0000"),
          "_id" : ObjectId("595241287c446a27f654cab6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:11.720+0000"),
          "time" : ISODate("2017-06-27T11:09:12.309+0000"),
          "_id" : ObjectId("595241287c446a27f654cab5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:12.809+0000"),
          "time" : ISODate("2017-06-27T11:09:13.266+0000"),
          "_id" : ObjectId("595241287c446a27f654cab4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:13.766+0000"),
          "time" : ISODate("2017-06-27T11:09:14.289+0000"),
          "_id" : ObjectId("595241287c446a27f654cab3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:14.789+0000"),
          "time" : ISODate("2017-06-27T11:09:15.247+0000"),
          "_id" : ObjectId("595241287c446a27f654cab2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:15.747+0000"),
          "time" : ISODate("2017-06-27T11:09:16.302+0000"),
          "_id" : ObjectId("595241287c446a27f654cab1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:16.802+0000"),
          "time" : ISODate("2017-06-27T11:09:17.260+0000"),
          "_id" : ObjectId("595241287c446a27f654cab0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:17.760+0000"),
          "time" : ISODate("2017-06-27T11:09:18.249+0000"),
          "_id" : ObjectId("595241287c446a27f654caaf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:18.749+0000"),
          "time" : ISODate("2017-06-27T11:09:19.272+0000"),
          "_id" : ObjectId("595241287c446a27f654caae")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:19.772+0000"),
          "time" : ISODate("2017-06-27T11:09:20.288+0000"),
          "_id" : ObjectId("595241287c446a27f654caad")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:20.788+0000"),
          "time" : ISODate("2017-06-27T11:09:20.954+0000"),
          "_id" : ObjectId("595241287c446a27f654caac")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:21.454+0000"),
          "time" : ISODate("2017-06-27T11:09:22.447+0000"),
          "_id" : ObjectId("595241287c446a27f654caab")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:22.947+0000"),
          "time" : ISODate("2017-06-27T11:09:23.166+0000"),
          "_id" : ObjectId("595241287c446a27f654caaa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:23.666+0000"),
          "time" : ISODate("2017-06-27T11:09:24.327+0000"),
          "_id" : ObjectId("595241287c446a27f654caa9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:24.827+0000"),
          "time" : ISODate("2017-06-27T11:09:25.256+0000"),
          "_id" : ObjectId("595241287c446a27f654caa8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:25.756+0000"),
          "time" : ISODate("2017-06-27T11:09:26.268+0000"),
          "_id" : ObjectId("595241287c446a27f654caa7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:26.768+0000"),
          "time" : ISODate("2017-06-27T11:09:27.292+0000"),
          "_id" : ObjectId("595241287c446a27f654caa6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:27.792+0000"),
          "time" : ISODate("2017-06-27T11:09:28.282+0000"),
          "_id" : ObjectId("595241287c446a27f654caa5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:28.782+0000"),
          "time" : ISODate("2017-06-27T11:09:29.271+0000"),
          "_id" : ObjectId("595241287c446a27f654caa4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:29.771+0000"),
          "time" : ISODate("2017-06-27T11:09:30.294+0000"),
          "_id" : ObjectId("595241287c446a27f654caa3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:30.794+0000"),
          "time" : ISODate("2017-06-27T11:09:31.270+0000"),
          "_id" : ObjectId("595241287c446a27f654caa2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:31.770+0000"),
          "time" : ISODate("2017-06-27T11:09:32.279+0000"),
          "_id" : ObjectId("595241287c446a27f654caa1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:32.779+0000"),
          "time" : ISODate("2017-06-27T11:09:33.278+0000"),
          "_id" : ObjectId("595241287c446a27f654caa0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:33.778+0000"),
          "time" : ISODate("2017-06-27T11:09:34.266+0000"),
          "_id" : ObjectId("595241287c446a27f654ca9f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:34.766+0000"),
          "time" : ISODate("2017-06-27T11:09:35.281+0000"),
          "_id" : ObjectId("595241287c446a27f654ca9e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:35.781+0000"),
          "time" : ISODate("2017-06-27T11:09:36.281+0000"),
          "_id" : ObjectId("595241287c446a27f654ca9d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:36.781+0000"),
          "time" : ISODate("2017-06-27T11:09:37.282+0000"),
          "_id" : ObjectId("595241287c446a27f654ca9c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:37.782+0000"),
          "time" : ISODate("2017-06-27T11:09:37.787+0000"),
          "_id" : ObjectId("595241287c446a27f654ca9b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:38.287+0000"),
          "time" : ISODate("2017-06-27T11:09:38.287+0000"),
          "_id" : ObjectId("595241287c446a27f654ca9a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:38.787+0000"),
          "time" : ISODate("2017-06-27T11:09:38.787+0000"),
          "_id" : ObjectId("595241287c446a27f654ca99")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:39.287+0000"),
          "time" : ISODate("2017-06-27T11:09:40.164+0000"),
          "_id" : ObjectId("595241287c446a27f654ca98")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:40.664+0000"),
          "time" : ISODate("2017-06-27T11:09:41.315+0000"),
          "_id" : ObjectId("595241287c446a27f654ca97")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:41.815+0000"),
          "time" : ISODate("2017-06-27T11:09:42.241+0000"),
          "_id" : ObjectId("595241287c446a27f654ca96")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:42.741+0000"),
          "time" : ISODate("2017-06-27T11:09:43.294+0000"),
          "_id" : ObjectId("595241287c446a27f654ca95")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:43.794+0000"),
          "time" : ISODate("2017-06-27T11:09:44.263+0000"),
          "_id" : ObjectId("595241287c446a27f654ca94")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:44.763+0000"),
          "time" : ISODate("2017-06-27T11:09:44.954+0000"),
          "_id" : ObjectId("595241287c446a27f654ca93")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:45.454+0000"),
          "time" : ISODate("2017-06-27T11:09:45.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca92")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:46.453+0000"),
          "time" : ISODate("2017-06-27T11:09:47.443+0000"),
          "_id" : ObjectId("595241287c446a27f654ca91")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:47.943+0000"),
          "time" : ISODate("2017-06-27T11:09:48.208+0000"),
          "_id" : ObjectId("595241287c446a27f654ca90")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:48.708+0000"),
          "time" : ISODate("2017-06-27T11:09:50.226+0000"),
          "_id" : ObjectId("595241287c446a27f654ca8f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:50.726+0000"),
          "time" : ISODate("2017-06-27T11:09:51.234+0000"),
          "_id" : ObjectId("595241287c446a27f654ca8e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:51.734+0000"),
          "time" : ISODate("2017-06-27T11:09:52.306+0000"),
          "_id" : ObjectId("595241287c446a27f654ca8d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:52.806+0000"),
          "time" : ISODate("2017-06-27T11:09:52.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca8c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:53.453+0000"),
          "time" : ISODate("2017-06-27T11:09:54.451+0000"),
          "_id" : ObjectId("595241287c446a27f654ca8b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:54.951+0000"),
          "time" : ISODate("2017-06-27T11:09:55.176+0000"),
          "_id" : ObjectId("595241287c446a27f654ca8a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:55.676+0000"),
          "time" : ISODate("2017-06-27T11:09:56.283+0000"),
          "_id" : ObjectId("595241287c446a27f654ca89")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:56.783+0000"),
          "time" : ISODate("2017-06-27T11:09:56.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca88")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:57.453+0000"),
          "time" : ISODate("2017-06-27T11:09:58.446+0000"),
          "_id" : ObjectId("595241287c446a27f654ca87")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:58.946+0000"),
          "time" : ISODate("2017-06-27T11:09:59.203+0000"),
          "_id" : ObjectId("595241287c446a27f654ca86")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:09:59.703+0000"),
          "time" : ISODate("2017-06-27T11:10:00.327+0000"),
          "_id" : ObjectId("595241287c446a27f654ca85")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:00.827+0000"),
          "time" : ISODate("2017-06-27T11:10:01.263+0000"),
          "_id" : ObjectId("595241287c446a27f654ca84")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:01.763+0000"),
          "time" : ISODate("2017-06-27T11:10:01.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca83")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:02.453+0000"),
          "time" : ISODate("2017-06-27T11:10:03.444+0000"),
          "_id" : ObjectId("595241287c446a27f654ca82")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:03.944+0000"),
          "time" : ISODate("2017-06-27T11:10:03.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca81")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:04.453+0000"),
          "time" : ISODate("2017-06-27T11:10:04.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca80")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:05.453+0000"),
          "time" : ISODate("2017-06-27T11:10:06.452+0000"),
          "_id" : ObjectId("595241287c446a27f654ca7f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:06.952+0000"),
          "time" : ISODate("2017-06-27T11:10:07.154+0000"),
          "_id" : ObjectId("595241287c446a27f654ca7e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:07.654+0000"),
          "time" : ISODate("2017-06-27T11:10:08.350+0000"),
          "_id" : ObjectId("595241287c446a27f654ca7d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:08.850+0000"),
          "time" : ISODate("2017-06-27T11:10:09.245+0000"),
          "_id" : ObjectId("595241287c446a27f654ca7c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:09.745+0000"),
          "time" : ISODate("2017-06-27T11:10:09.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca7b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:10.453+0000"),
          "time" : ISODate("2017-06-27T11:10:11.047+0000"),
          "_id" : ObjectId("595241287c446a27f654ca7a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:11.547+0000"),
          "time" : ISODate("2017-06-27T11:10:12.402+0000"),
          "_id" : ObjectId("595241287c446a27f654ca79")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:12.902+0000"),
          "time" : ISODate("2017-06-27T11:10:13.226+0000"),
          "_id" : ObjectId("595241287c446a27f654ca78")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:13.726+0000"),
          "time" : ISODate("2017-06-27T11:10:14.316+0000"),
          "_id" : ObjectId("595241287c446a27f654ca77")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:14.816+0000"),
          "time" : ISODate("2017-06-27T11:10:14.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca76")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:15.453+0000"),
          "time" : ISODate("2017-06-27T11:10:15.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca75")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:16.453+0000"),
          "time" : ISODate("2017-06-27T11:10:17.451+0000"),
          "_id" : ObjectId("595241287c446a27f654ca74")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:17.951+0000"),
          "time" : ISODate("2017-06-27T11:10:18.196+0000"),
          "_id" : ObjectId("595241287c446a27f654ca73")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:18.696+0000"),
          "time" : ISODate("2017-06-27T11:10:19.324+0000"),
          "_id" : ObjectId("595241287c446a27f654ca72")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:19.824+0000"),
          "time" : ISODate("2017-06-27T11:10:19.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca71")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:20.453+0000"),
          "time" : ISODate("2017-06-27T11:10:21.451+0000"),
          "_id" : ObjectId("595241287c446a27f654ca70")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:21.951+0000"),
          "time" : ISODate("2017-06-27T11:10:22.170+0000"),
          "_id" : ObjectId("595241287c446a27f654ca6f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:22.670+0000"),
          "time" : ISODate("2017-06-27T11:10:23.325+0000"),
          "_id" : ObjectId("595241287c446a27f654ca6e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:23.825+0000"),
          "time" : ISODate("2017-06-27T11:10:24.017+0000"),
          "_id" : ObjectId("595241287c446a27f654ca6d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:24.517+0000"),
          "time" : ISODate("2017-06-27T11:10:24.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca6c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:25.453+0000"),
          "time" : ISODate("2017-06-27T11:10:26.426+0000"),
          "_id" : ObjectId("595241287c446a27f654ca6b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:26.926+0000"),
          "time" : ISODate("2017-06-27T11:10:27.206+0000"),
          "_id" : ObjectId("595241287c446a27f654ca6a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:27.706+0000"),
          "time" : ISODate("2017-06-27T11:10:28.319+0000"),
          "_id" : ObjectId("595241287c446a27f654ca69")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:28.819+0000"),
          "time" : ISODate("2017-06-27T11:10:29.266+0000"),
          "_id" : ObjectId("595241287c446a27f654ca68")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:29.766+0000"),
          "time" : ISODate("2017-06-27T11:10:30.295+0000"),
          "_id" : ObjectId("595241287c446a27f654ca67")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:30.795+0000"),
          "time" : ISODate("2017-06-27T11:10:31.277+0000"),
          "_id" : ObjectId("595241287c446a27f654ca66")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:31.777+0000"),
          "time" : ISODate("2017-06-27T11:10:32.287+0000"),
          "_id" : ObjectId("595241287c446a27f654ca65")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:32.787+0000"),
          "time" : ISODate("2017-06-27T11:10:33.272+0000"),
          "_id" : ObjectId("595241287c446a27f654ca64")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:33.772+0000"),
          "time" : ISODate("2017-06-27T11:10:34.287+0000"),
          "_id" : ObjectId("595241287c446a27f654ca63")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:34.787+0000"),
          "time" : ISODate("2017-06-27T11:10:35.283+0000"),
          "_id" : ObjectId("595241287c446a27f654ca62")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:35.783+0000"),
          "time" : ISODate("2017-06-27T11:10:36.276+0000"),
          "_id" : ObjectId("595241287c446a27f654ca61")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:36.776+0000"),
          "time" : ISODate("2017-06-27T11:10:37.286+0000"),
          "_id" : ObjectId("595241287c446a27f654ca60")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:37.786+0000"),
          "time" : ISODate("2017-06-27T11:10:38.274+0000"),
          "_id" : ObjectId("595241287c446a27f654ca5f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:38.774+0000"),
          "time" : ISODate("2017-06-27T11:10:38.981+0000"),
          "_id" : ObjectId("595241287c446a27f654ca5e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:39.481+0000"),
          "time" : ISODate("2017-06-27T11:10:40.362+0000"),
          "_id" : ObjectId("595241287c446a27f654ca5d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:40.862+0000"),
          "time" : ISODate("2017-06-27T11:10:41.244+0000"),
          "_id" : ObjectId("595241287c446a27f654ca5c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:41.744+0000"),
          "time" : ISODate("2017-06-27T11:10:42.266+0000"),
          "_id" : ObjectId("595241287c446a27f654ca5b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:42.766+0000"),
          "time" : ISODate("2017-06-27T11:10:43.289+0000"),
          "_id" : ObjectId("595241287c446a27f654ca5a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:43.789+0000"),
          "time" : ISODate("2017-06-27T11:10:44.279+0000"),
          "_id" : ObjectId("595241287c446a27f654ca59")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:44.779+0000"),
          "time" : ISODate("2017-06-27T11:10:45.269+0000"),
          "_id" : ObjectId("595241287c446a27f654ca58")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:45.769+0000"),
          "time" : ISODate("2017-06-27T11:10:45.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca57")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:46.453+0000"),
          "time" : ISODate("2017-06-27T11:10:46.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca56")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:47.452+0000"),
          "time" : ISODate("2017-06-27T11:10:47.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca55")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:48.452+0000"),
          "time" : ISODate("2017-06-27T11:10:49.428+0000"),
          "_id" : ObjectId("595241287c446a27f654ca54")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:49.928+0000"),
          "time" : ISODate("2017-06-27T11:10:50.187+0000"),
          "_id" : ObjectId("595241287c446a27f654ca53")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:50.687+0000"),
          "time" : ISODate("2017-06-27T11:10:50.953+0000"),
          "_id" : ObjectId("595241287c446a27f654ca52")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:51.453+0000"),
          "time" : ISODate("2017-06-27T11:10:51.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca51")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:52.452+0000"),
          "time" : ISODate("2017-06-27T11:10:53.420+0000"),
          "_id" : ObjectId("595241287c446a27f654ca50")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:53.920+0000"),
          "time" : ISODate("2017-06-27T11:10:54.213+0000"),
          "_id" : ObjectId("595241287c446a27f654ca4f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:54.713+0000"),
          "time" : ISODate("2017-06-27T11:10:54.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca4e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:55.452+0000"),
          "time" : ISODate("2017-06-27T11:10:55.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca4d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:56.452+0000"),
          "time" : ISODate("2017-06-27T11:10:56.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca4c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:57.452+0000"),
          "time" : ISODate("2017-06-27T11:10:58.036+0000"),
          "_id" : ObjectId("595241287c446a27f654ca4b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:58.536+0000"),
          "time" : ISODate("2017-06-27T11:10:58.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca4a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:10:59.452+0000"),
          "time" : ISODate("2017-06-27T11:11:00.448+0000"),
          "_id" : ObjectId("595241287c446a27f654ca49")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:00.948+0000"),
          "time" : ISODate("2017-06-27T11:11:00.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca48")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:01.452+0000"),
          "time" : ISODate("2017-06-27T11:11:02.431+0000"),
          "_id" : ObjectId("595241287c446a27f654ca47")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:02.931+0000"),
          "time" : ISODate("2017-06-27T11:11:03.200+0000"),
          "_id" : ObjectId("595241287c446a27f654ca46")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:03.700+0000"),
          "time" : ISODate("2017-06-27T11:11:03.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca45")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:04.452+0000"),
          "time" : ISODate("2017-06-27T11:11:04.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca44")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:05.452+0000"),
          "time" : ISODate("2017-06-27T11:11:05.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca43")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:06.452+0000"),
          "time" : ISODate("2017-06-27T11:11:06.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca42")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:07.452+0000"),
          "time" : ISODate("2017-06-27T11:11:08.446+0000"),
          "_id" : ObjectId("595241287c446a27f654ca41")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:08.946+0000"),
          "time" : ISODate("2017-06-27T11:11:09.204+0000"),
          "_id" : ObjectId("595241287c446a27f654ca40")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:09.704+0000"),
          "time" : ISODate("2017-06-27T11:11:10.283+0000"),
          "_id" : ObjectId("595241287c446a27f654ca3f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:10.783+0000"),
          "time" : ISODate("2017-06-27T11:11:11.208+0000"),
          "_id" : ObjectId("595241287c446a27f654ca3e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:11.708+0000"),
          "time" : ISODate("2017-06-27T11:11:12.263+0000"),
          "_id" : ObjectId("595241287c446a27f654ca3d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:12.763+0000"),
          "time" : ISODate("2017-06-27T11:11:13.286+0000"),
          "_id" : ObjectId("595241287c446a27f654ca3c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:13.786+0000"),
          "time" : ISODate("2017-06-27T11:11:14.275+0000"),
          "_id" : ObjectId("595241287c446a27f654ca3b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:14.775+0000"),
          "time" : ISODate("2017-06-27T11:11:15.233+0000"),
          "_id" : ObjectId("595241287c446a27f654ca3a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:15.733+0000"),
          "time" : ISODate("2017-06-27T11:11:16.255+0000"),
          "_id" : ObjectId("595241287c446a27f654ca39")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:16.755+0000"),
          "time" : ISODate("2017-06-27T11:11:17.279+0000"),
          "_id" : ObjectId("595241287c446a27f654ca38")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:17.779+0000"),
          "time" : ISODate("2017-06-27T11:11:18.145+0000"),
          "_id" : ObjectId("595241287c446a27f654ca37")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:18.645+0000"),
          "time" : ISODate("2017-06-27T11:11:18.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca36")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:19.452+0000"),
          "time" : ISODate("2017-06-27T11:11:19.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca35")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:20.452+0000"),
          "time" : ISODate("2017-06-27T11:11:21.353+0000"),
          "_id" : ObjectId("595241287c446a27f654ca34")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:21.853+0000"),
          "time" : ISODate("2017-06-27T11:11:22.228+0000"),
          "_id" : ObjectId("595241287c446a27f654ca33")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:22.728+0000"),
          "time" : ISODate("2017-06-27T11:11:23.287+0000"),
          "_id" : ObjectId("595241287c446a27f654ca32")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:23.787+0000"),
          "time" : ISODate("2017-06-27T11:11:24.274+0000"),
          "_id" : ObjectId("595241287c446a27f654ca31")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:24.774+0000"),
          "time" : ISODate("2017-06-27T11:11:25.266+0000"),
          "_id" : ObjectId("595241287c446a27f654ca30")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:25.766+0000"),
          "time" : ISODate("2017-06-27T11:11:26.287+0000"),
          "_id" : ObjectId("595241287c446a27f654ca2f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:26.787+0000"),
          "time" : ISODate("2017-06-27T11:11:27.278+0000"),
          "_id" : ObjectId("595241287c446a27f654ca2e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:27.778+0000"),
          "time" : ISODate("2017-06-27T11:11:28.267+0000"),
          "_id" : ObjectId("595241287c446a27f654ca2d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:28.767+0000"),
          "time" : ISODate("2017-06-27T11:11:29.291+0000"),
          "_id" : ObjectId("595241287c446a27f654ca2c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:29.791+0000"),
          "time" : ISODate("2017-06-27T11:11:30.280+0000"),
          "_id" : ObjectId("595241287c446a27f654ca2b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:30.780+0000"),
          "time" : ISODate("2017-06-27T11:11:31.270+0000"),
          "_id" : ObjectId("595241287c446a27f654ca2a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:31.770+0000"),
          "time" : ISODate("2017-06-27T11:11:32.289+0000"),
          "_id" : ObjectId("595241287c446a27f654ca29")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:32.789+0000"),
          "time" : ISODate("2017-06-27T11:11:32.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca28")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:33.452+0000"),
          "time" : ISODate("2017-06-27T11:11:34.447+0000"),
          "_id" : ObjectId("595241287c446a27f654ca27")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:34.947+0000"),
          "time" : ISODate("2017-06-27T11:11:35.197+0000"),
          "_id" : ObjectId("595241287c446a27f654ca26")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:35.697+0000"),
          "time" : ISODate("2017-06-27T11:11:36.287+0000"),
          "_id" : ObjectId("595241287c446a27f654ca25")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:36.787+0000"),
          "time" : ISODate("2017-06-27T11:11:37.279+0000"),
          "_id" : ObjectId("595241287c446a27f654ca24")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:37.779+0000"),
          "time" : ISODate("2017-06-27T11:11:38.267+0000"),
          "_id" : ObjectId("595241287c446a27f654ca23")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:38.767+0000"),
          "time" : ISODate("2017-06-27T11:11:39.289+0000"),
          "_id" : ObjectId("595241287c446a27f654ca22")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:39.789+0000"),
          "time" : ISODate("2017-06-27T11:11:40.247+0000"),
          "_id" : ObjectId("595241287c446a27f654ca21")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:40.747+0000"),
          "time" : ISODate("2017-06-27T11:11:40.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca20")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:41.452+0000"),
          "time" : ISODate("2017-06-27T11:11:41.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca1f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:42.452+0000"),
          "time" : ISODate("2017-06-27T11:11:43.382+0000"),
          "_id" : ObjectId("595241287c446a27f654ca1e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:43.882+0000"),
          "time" : ISODate("2017-06-27T11:11:44.227+0000"),
          "_id" : ObjectId("595241287c446a27f654ca1d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:44.727+0000"),
          "time" : ISODate("2017-06-27T11:11:45.300+0000"),
          "_id" : ObjectId("595241287c446a27f654ca1c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:45.800+0000"),
          "time" : ISODate("2017-06-27T11:11:46.276+0000"),
          "_id" : ObjectId("595241287c446a27f654ca1b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:46.776+0000"),
          "time" : ISODate("2017-06-27T11:11:47.275+0000"),
          "_id" : ObjectId("595241287c446a27f654ca1a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:47.775+0000"),
          "time" : ISODate("2017-06-27T11:11:47.951+0000"),
          "_id" : ObjectId("595241287c446a27f654ca19")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:48.451+0000"),
          "time" : ISODate("2017-06-27T11:11:49.386+0000"),
          "_id" : ObjectId("595241287c446a27f654ca18")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:49.886+0000"),
          "time" : ISODate("2017-06-27T11:11:49.952+0000"),
          "_id" : ObjectId("595241287c446a27f654ca17")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:50.452+0000"),
          "time" : ISODate("2017-06-27T11:11:50.951+0000"),
          "_id" : ObjectId("595241287c446a27f654ca16")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:51.451+0000"),
          "time" : ISODate("2017-06-27T11:11:51.951+0000"),
          "_id" : ObjectId("595241287c446a27f654ca15")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:52.451+0000"),
          "time" : ISODate("2017-06-27T11:11:52.951+0000"),
          "_id" : ObjectId("595241287c446a27f654ca14")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:53.451+0000"),
          "time" : ISODate("2017-06-27T11:11:54.144+0000"),
          "_id" : ObjectId("595241287c446a27f654ca13")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:54.644+0000"),
          "time" : ISODate("2017-06-27T11:11:54.981+0000"),
          "_id" : ObjectId("595241287c446a27f654ca12")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:55.481+0000"),
          "time" : ISODate("2017-06-27T11:11:55.629+0000"),
          "_id" : ObjectId("595241287c446a27f654ca11")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:56.129+0000"),
          "time" : ISODate("2017-06-27T11:11:56.130+0000"),
          "_id" : ObjectId("595241287c446a27f654ca10")
        },
        {
          "plannedTime" : ISODate("2017-06-27T11:11:56.630+0000"),
          "time" : ISODate("2017-06-27T11:11:56.630+0000"),
          "_id" : ObjectId("595241287c446a27f654ca0f")
        }
      ]
    },
    "__v" : NumberInt(0)
  },
  {
    "_id" : ObjectId("595240bb7c446a27f654c548"),
    "clientInfo" : {
      "fingerprint" : 4141258844.0,
      "browser" : {
        "version" : "59.0.3071.115",
        "name" : "Chrome"
      },
      "webGL" : {
        "renderer" : "AMD Radeon Barts PRO Prototype OpenGL Engine",
        "vendor" : "ATI Technologies Inc."
      },
      "_id" : ObjectId("595240bb7c446a27f654c9fa")
    },
    "benchmarkData" : {
      "location" : "https://help.ubuntu.com/community/NetworkConfigurationCommandLine/Automatic",
      "_id" : ObjectId("595240bb7c446a27f654c549"),
      "sessionData" : [
        {
          "plannedTime" : ISODate("2017-06-27T10:40:23.112+0000"),
          "time" : ISODate("2017-06-27T10:40:23.112+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:23.612+0000"),
          "time" : ISODate("2017-06-27T10:40:23.613+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:24.113+0000"),
          "time" : ISODate("2017-06-27T10:40:24.113+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:24.613+0000"),
          "time" : ISODate("2017-06-27T10:40:24.613+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:25.113+0000"),
          "time" : ISODate("2017-06-27T10:40:25.114+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:25.614+0000"),
          "time" : ISODate("2017-06-27T10:40:25.616+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:26.116+0000"),
          "time" : ISODate("2017-06-27T10:40:26.116+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:26.616+0000"),
          "time" : ISODate("2017-06-27T10:40:26.616+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:27.116+0000"),
          "time" : ISODate("2017-06-27T10:40:27.117+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:27.617+0000"),
          "time" : ISODate("2017-06-27T10:40:27.617+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9f0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:28.117+0000"),
          "time" : ISODate("2017-06-27T10:40:28.121+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ef")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:28.621+0000"),
          "time" : ISODate("2017-06-27T10:40:28.622+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ee")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:29.122+0000"),
          "time" : ISODate("2017-06-27T10:40:29.124+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ed")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:29.624+0000"),
          "time" : ISODate("2017-06-27T10:40:29.625+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ec")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:30.125+0000"),
          "time" : ISODate("2017-06-27T10:40:30.129+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9eb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:30.629+0000"),
          "time" : ISODate("2017-06-27T10:40:30.631+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ea")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:31.131+0000"),
          "time" : ISODate("2017-06-27T10:40:31.133+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:31.633+0000"),
          "time" : ISODate("2017-06-27T10:40:31.633+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:32.133+0000"),
          "time" : ISODate("2017-06-27T10:40:32.139+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:32.639+0000"),
          "time" : ISODate("2017-06-27T10:40:32.641+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:33.141+0000"),
          "time" : ISODate("2017-06-27T10:40:33.142+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:33.642+0000"),
          "time" : ISODate("2017-06-27T10:40:33.643+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:34.143+0000"),
          "time" : ISODate("2017-06-27T10:40:34.144+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:34.644+0000"),
          "time" : ISODate("2017-06-27T10:40:34.647+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:35.147+0000"),
          "time" : ISODate("2017-06-27T10:40:35.149+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:35.649+0000"),
          "time" : ISODate("2017-06-27T10:40:35.652+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9e0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:36.152+0000"),
          "time" : ISODate("2017-06-27T10:40:36.157+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9df")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:36.657+0000"),
          "time" : ISODate("2017-06-27T10:40:36.657+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9de")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:37.157+0000"),
          "time" : ISODate("2017-06-27T10:40:37.157+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9dd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:37.657+0000"),
          "time" : ISODate("2017-06-27T10:40:37.659+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9dc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:38.159+0000"),
          "time" : ISODate("2017-06-27T10:40:38.159+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9db")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:38.659+0000"),
          "time" : ISODate("2017-06-27T10:40:38.661+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9da")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:39.161+0000"),
          "time" : ISODate("2017-06-27T10:40:39.166+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:39.666+0000"),
          "time" : ISODate("2017-06-27T10:40:39.670+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:40.170+0000"),
          "time" : ISODate("2017-06-27T10:40:40.176+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:40.676+0000"),
          "time" : ISODate("2017-06-27T10:40:40.678+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:41.178+0000"),
          "time" : ISODate("2017-06-27T10:40:41.180+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:41.680+0000"),
          "time" : ISODate("2017-06-27T10:40:41.684+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:42.184+0000"),
          "time" : ISODate("2017-06-27T10:40:42.184+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:42.684+0000"),
          "time" : ISODate("2017-06-27T10:40:42.688+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:43.188+0000"),
          "time" : ISODate("2017-06-27T10:40:43.189+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:43.689+0000"),
          "time" : ISODate("2017-06-27T10:40:43.690+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9d0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:44.190+0000"),
          "time" : ISODate("2017-06-27T10:40:44.191+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9cf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:44.691+0000"),
          "time" : ISODate("2017-06-27T10:40:44.691+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ce")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:45.191+0000"),
          "time" : ISODate("2017-06-27T10:40:45.195+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9cd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:45.695+0000"),
          "time" : ISODate("2017-06-27T10:40:45.695+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9cc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:46.195+0000"),
          "time" : ISODate("2017-06-27T10:40:46.195+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9cb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:46.695+0000"),
          "time" : ISODate("2017-06-27T10:40:46.699+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ca")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:47.199+0000"),
          "time" : ISODate("2017-06-27T10:40:47.201+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:47.701+0000"),
          "time" : ISODate("2017-06-27T10:40:47.703+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:48.203+0000"),
          "time" : ISODate("2017-06-27T10:40:48.203+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:48.703+0000"),
          "time" : ISODate("2017-06-27T10:40:48.703+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:49.203+0000"),
          "time" : ISODate("2017-06-27T10:40:49.208+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:49.708+0000"),
          "time" : ISODate("2017-06-27T10:40:49.712+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:50.212+0000"),
          "time" : ISODate("2017-06-27T10:40:50.216+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:50.716+0000"),
          "time" : ISODate("2017-06-27T10:40:50.717+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:51.217+0000"),
          "time" : ISODate("2017-06-27T10:40:51.220+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:51.720+0000"),
          "time" : ISODate("2017-06-27T10:40:51.720+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9c0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:52.220+0000"),
          "time" : ISODate("2017-06-27T10:40:52.222+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9bf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:52.722+0000"),
          "time" : ISODate("2017-06-27T10:40:52.722+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9be")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:53.222+0000"),
          "time" : ISODate("2017-06-27T10:40:53.227+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9bd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:53.727+0000"),
          "time" : ISODate("2017-06-27T10:40:53.729+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9bc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:54.229+0000"),
          "time" : ISODate("2017-06-27T10:40:54.230+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9bb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:54.730+0000"),
          "time" : ISODate("2017-06-27T10:40:54.734+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ba")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:55.234+0000"),
          "time" : ISODate("2017-06-27T10:40:55.239+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:55.739+0000"),
          "time" : ISODate("2017-06-27T10:40:55.741+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:56.241+0000"),
          "time" : ISODate("2017-06-27T10:40:56.242+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:56.742+0000"),
          "time" : ISODate("2017-06-27T10:40:56.744+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:57.244+0000"),
          "time" : ISODate("2017-06-27T10:40:57.245+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:57.745+0000"),
          "time" : ISODate("2017-06-27T10:40:57.749+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:58.249+0000"),
          "time" : ISODate("2017-06-27T10:40:58.253+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:58.753+0000"),
          "time" : ISODate("2017-06-27T10:40:58.759+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:59.259+0000"),
          "time" : ISODate("2017-06-27T10:40:59.259+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:40:59.759+0000"),
          "time" : ISODate("2017-06-27T10:40:59.760+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9b0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:00.260+0000"),
          "time" : ISODate("2017-06-27T10:41:00.262+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9af")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:00.762+0000"),
          "time" : ISODate("2017-06-27T10:41:00.762+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ae")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:01.262+0000"),
          "time" : ISODate("2017-06-27T10:41:01.267+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ad")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:01.767+0000"),
          "time" : ISODate("2017-06-27T10:41:01.767+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ac")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:02.267+0000"),
          "time" : ISODate("2017-06-27T10:41:02.268+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9ab")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:02.768+0000"),
          "time" : ISODate("2017-06-27T10:41:02.770+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9aa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:03.270+0000"),
          "time" : ISODate("2017-06-27T10:41:03.273+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:03.773+0000"),
          "time" : ISODate("2017-06-27T10:41:03.778+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:04.278+0000"),
          "time" : ISODate("2017-06-27T10:41:04.279+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:04.779+0000"),
          "time" : ISODate("2017-06-27T10:41:04.784+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:05.284+0000"),
          "time" : ISODate("2017-06-27T10:41:05.286+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:05.786+0000"),
          "time" : ISODate("2017-06-27T10:41:05.788+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:06.288+0000"),
          "time" : ISODate("2017-06-27T10:41:06.289+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:06.789+0000"),
          "time" : ISODate("2017-06-27T10:41:06.789+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:07.289+0000"),
          "time" : ISODate("2017-06-27T10:41:07.291+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:07.791+0000"),
          "time" : ISODate("2017-06-27T10:41:07.795+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c9a0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:08.295+0000"),
          "time" : ISODate("2017-06-27T10:41:08.297+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c99f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:08.797+0000"),
          "time" : ISODate("2017-06-27T10:41:08.797+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c99e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:09.297+0000"),
          "time" : ISODate("2017-06-27T10:41:09.301+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c99d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:09.801+0000"),
          "time" : ISODate("2017-06-27T10:41:09.804+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c99c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:10.304+0000"),
          "time" : ISODate("2017-06-27T10:41:10.308+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c99b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:10.808+0000"),
          "time" : ISODate("2017-06-27T10:41:10.809+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c99a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:11.309+0000"),
          "time" : ISODate("2017-06-27T10:41:11.310+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c999")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:11.810+0000"),
          "time" : ISODate("2017-06-27T10:41:11.812+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c998")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:12.312+0000"),
          "time" : ISODate("2017-06-27T10:41:12.313+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c997")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:12.813+0000"),
          "time" : ISODate("2017-06-27T10:41:12.816+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c996")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:13.316+0000"),
          "time" : ISODate("2017-06-27T10:41:13.318+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c995")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:13.818+0000"),
          "time" : ISODate("2017-06-27T10:41:13.818+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c994")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:14.318+0000"),
          "time" : ISODate("2017-06-27T10:41:14.320+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c993")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:14.820+0000"),
          "time" : ISODate("2017-06-27T10:41:14.821+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c992")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:15.321+0000"),
          "time" : ISODate("2017-06-27T10:41:15.321+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c991")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:15.821+0000"),
          "time" : ISODate("2017-06-27T10:41:15.826+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c990")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:16.326+0000"),
          "time" : ISODate("2017-06-27T10:41:16.326+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c98f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:16.826+0000"),
          "time" : ISODate("2017-06-27T10:41:16.828+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c98e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:17.328+0000"),
          "time" : ISODate("2017-06-27T10:41:17.330+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c98d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:17.830+0000"),
          "time" : ISODate("2017-06-27T10:41:17.832+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c98c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:18.332+0000"),
          "time" : ISODate("2017-06-27T10:41:18.333+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c98b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:18.833+0000"),
          "time" : ISODate("2017-06-27T10:41:18.833+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c98a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:19.333+0000"),
          "time" : ISODate("2017-06-27T10:41:19.336+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c989")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:19.836+0000"),
          "time" : ISODate("2017-06-27T10:41:19.837+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c988")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:20.337+0000"),
          "time" : ISODate("2017-06-27T10:41:20.337+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c987")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:20.837+0000"),
          "time" : ISODate("2017-06-27T10:41:20.842+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c986")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:21.342+0000"),
          "time" : ISODate("2017-06-27T10:41:21.346+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c985")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:21.846+0000"),
          "time" : ISODate("2017-06-27T10:41:21.846+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c984")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:22.346+0000"),
          "time" : ISODate("2017-06-27T10:41:22.350+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c983")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:22.850+0000"),
          "time" : ISODate("2017-06-27T10:41:22.851+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c982")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:23.351+0000"),
          "time" : ISODate("2017-06-27T10:41:23.351+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c981")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:23.851+0000"),
          "time" : ISODate("2017-06-27T10:41:23.851+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c980")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:24.351+0000"),
          "time" : ISODate("2017-06-27T10:41:24.352+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c97f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:24.852+0000"),
          "time" : ISODate("2017-06-27T10:41:24.852+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c97e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:25.352+0000"),
          "time" : ISODate("2017-06-27T10:41:25.355+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c97d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:25.855+0000"),
          "time" : ISODate("2017-06-27T10:41:25.855+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c97c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:26.355+0000"),
          "time" : ISODate("2017-06-27T10:41:26.356+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c97b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:26.856+0000"),
          "time" : ISODate("2017-06-27T10:41:26.860+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c97a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:27.360+0000"),
          "time" : ISODate("2017-06-27T10:41:27.366+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c979")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:27.866+0000"),
          "time" : ISODate("2017-06-27T10:41:27.868+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c978")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:28.368+0000"),
          "time" : ISODate("2017-06-27T10:41:28.370+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c977")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:28.870+0000"),
          "time" : ISODate("2017-06-27T10:41:28.872+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c976")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:29.372+0000"),
          "time" : ISODate("2017-06-27T10:41:29.372+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c975")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:29.872+0000"),
          "time" : ISODate("2017-06-27T10:41:29.877+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c974")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:30.377+0000"),
          "time" : ISODate("2017-06-27T10:41:30.382+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c973")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:30.882+0000"),
          "time" : ISODate("2017-06-27T10:41:30.885+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c972")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:31.385+0000"),
          "time" : ISODate("2017-06-27T10:41:31.387+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c971")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:31.887+0000"),
          "time" : ISODate("2017-06-27T10:41:31.888+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c970")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:32.388+0000"),
          "time" : ISODate("2017-06-27T10:41:32.392+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c96f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:32.892+0000"),
          "time" : ISODate("2017-06-27T10:41:32.892+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c96e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:33.392+0000"),
          "time" : ISODate("2017-06-27T10:41:33.394+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c96d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:33.894+0000"),
          "time" : ISODate("2017-06-27T10:41:33.894+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c96c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:34.394+0000"),
          "time" : ISODate("2017-06-27T10:41:34.399+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c96b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:34.899+0000"),
          "time" : ISODate("2017-06-27T10:41:34.900+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c96a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:35.400+0000"),
          "time" : ISODate("2017-06-27T10:41:35.402+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c969")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:35.902+0000"),
          "time" : ISODate("2017-06-27T10:41:35.903+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c968")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:36.403+0000"),
          "time" : ISODate("2017-06-27T10:41:36.407+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c967")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:36.907+0000"),
          "time" : ISODate("2017-06-27T10:41:36.907+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c966")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:37.407+0000"),
          "time" : ISODate("2017-06-27T10:41:37.408+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c965")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:37.908+0000"),
          "time" : ISODate("2017-06-27T10:41:37.908+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c964")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:38.408+0000"),
          "time" : ISODate("2017-06-27T10:41:38.409+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c963")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:38.909+0000"),
          "time" : ISODate("2017-06-27T10:41:38.910+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c962")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:39.410+0000"),
          "time" : ISODate("2017-06-27T10:41:39.413+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c961")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:39.913+0000"),
          "time" : ISODate("2017-06-27T10:41:39.917+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c960")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:40.417+0000"),
          "time" : ISODate("2017-06-27T10:41:40.417+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c95f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:40.917+0000"),
          "time" : ISODate("2017-06-27T10:41:40.918+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c95e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:41.418+0000"),
          "time" : ISODate("2017-06-27T10:41:41.418+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c95d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:41.918+0000"),
          "time" : ISODate("2017-06-27T10:41:41.920+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c95c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:42.420+0000"),
          "time" : ISODate("2017-06-27T10:41:42.420+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c95b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:42.920+0000"),
          "time" : ISODate("2017-06-27T10:41:42.921+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c95a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:43.421+0000"),
          "time" : ISODate("2017-06-27T10:41:43.425+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c959")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:43.925+0000"),
          "time" : ISODate("2017-06-27T10:41:43.926+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c958")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:44.426+0000"),
          "time" : ISODate("2017-06-27T10:41:44.427+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c957")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:44.927+0000"),
          "time" : ISODate("2017-06-27T10:41:44.927+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c956")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:45.427+0000"),
          "time" : ISODate("2017-06-27T10:41:45.428+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c955")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:45.928+0000"),
          "time" : ISODate("2017-06-27T10:41:45.928+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c954")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:46.428+0000"),
          "time" : ISODate("2017-06-27T10:41:46.428+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c953")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:46.928+0000"),
          "time" : ISODate("2017-06-27T10:41:46.929+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c952")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:47.429+0000"),
          "time" : ISODate("2017-06-27T10:41:47.429+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c951")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:47.929+0000"),
          "time" : ISODate("2017-06-27T10:41:47.930+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c950")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:48.430+0000"),
          "time" : ISODate("2017-06-27T10:41:48.430+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c94f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:48.930+0000"),
          "time" : ISODate("2017-06-27T10:41:48.930+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c94e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:49.430+0000"),
          "time" : ISODate("2017-06-27T10:41:49.431+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c94d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:49.931+0000"),
          "time" : ISODate("2017-06-27T10:41:49.934+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c94c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:50.434+0000"),
          "time" : ISODate("2017-06-27T10:41:50.435+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c94b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:50.935+0000"),
          "time" : ISODate("2017-06-27T10:41:50.935+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c94a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:51.435+0000"),
          "time" : ISODate("2017-06-27T10:41:51.435+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c949")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:51.935+0000"),
          "time" : ISODate("2017-06-27T10:41:51.939+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c948")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:52.439+0000"),
          "time" : ISODate("2017-06-27T10:41:52.439+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c947")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:52.939+0000"),
          "time" : ISODate("2017-06-27T10:41:52.939+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c946")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:53.439+0000"),
          "time" : ISODate("2017-06-27T10:41:53.441+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c945")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:53.941+0000"),
          "time" : ISODate("2017-06-27T10:41:53.946+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c944")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:54.446+0000"),
          "time" : ISODate("2017-06-27T10:41:54.447+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c943")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:54.947+0000"),
          "time" : ISODate("2017-06-27T10:41:54.948+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c942")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:55.448+0000"),
          "time" : ISODate("2017-06-27T10:41:55.451+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c941")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:55.951+0000"),
          "time" : ISODate("2017-06-27T10:41:55.952+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c940")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:56.452+0000"),
          "time" : ISODate("2017-06-27T10:41:56.453+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c93f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:56.953+0000"),
          "time" : ISODate("2017-06-27T10:41:56.955+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c93e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:57.455+0000"),
          "time" : ISODate("2017-06-27T10:41:57.456+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c93d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:57.956+0000"),
          "time" : ISODate("2017-06-27T10:41:57.956+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c93c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:58.456+0000"),
          "time" : ISODate("2017-06-27T10:41:58.460+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c93b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:58.960+0000"),
          "time" : ISODate("2017-06-27T10:41:58.961+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c93a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:59.461+0000"),
          "time" : ISODate("2017-06-27T10:41:59.463+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c939")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:41:59.963+0000"),
          "time" : ISODate("2017-06-27T10:41:59.964+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c938")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:00.464+0000"),
          "time" : ISODate("2017-06-27T10:42:00.467+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c937")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:00.967+0000"),
          "time" : ISODate("2017-06-27T10:42:00.967+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c936")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:01.467+0000"),
          "time" : ISODate("2017-06-27T10:42:01.468+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c935")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:01.968+0000"),
          "time" : ISODate("2017-06-27T10:42:01.971+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c934")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:02.471+0000"),
          "time" : ISODate("2017-06-27T10:42:02.471+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c933")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:02.971+0000"),
          "time" : ISODate("2017-06-27T10:42:02.972+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c932")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:03.472+0000"),
          "time" : ISODate("2017-06-27T10:42:03.473+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c931")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:03.973+0000"),
          "time" : ISODate("2017-06-27T10:42:03.977+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c930")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:04.477+0000"),
          "time" : ISODate("2017-06-27T10:42:04.480+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c92f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:04.980+0000"),
          "time" : ISODate("2017-06-27T10:42:04.981+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c92e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:05.481+0000"),
          "time" : ISODate("2017-06-27T10:42:05.481+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c92d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:05.981+0000"),
          "time" : ISODate("2017-06-27T10:42:05.985+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c92c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:06.485+0000"),
          "time" : ISODate("2017-06-27T10:42:06.485+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c92b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:06.985+0000"),
          "time" : ISODate("2017-06-27T10:42:06.988+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c92a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:07.488+0000"),
          "time" : ISODate("2017-06-27T10:42:07.493+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c929")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:07.993+0000"),
          "time" : ISODate("2017-06-27T10:42:07.993+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c928")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:08.493+0000"),
          "time" : ISODate("2017-06-27T10:42:08.493+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c927")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:08.993+0000"),
          "time" : ISODate("2017-06-27T10:42:08.997+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c926")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:09.497+0000"),
          "time" : ISODate("2017-06-27T10:42:09.499+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c925")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:09.999+0000"),
          "time" : ISODate("2017-06-27T10:42:10.000+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c924")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:10.500+0000"),
          "time" : ISODate("2017-06-27T10:42:10.506+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c923")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:11.006+0000"),
          "time" : ISODate("2017-06-27T10:42:11.006+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c922")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:11.506+0000"),
          "time" : ISODate("2017-06-27T10:42:11.508+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c921")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:12.008+0000"),
          "time" : ISODate("2017-06-27T10:42:12.012+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c920")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:12.512+0000"),
          "time" : ISODate("2017-06-27T10:42:12.513+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c91f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:13.013+0000"),
          "time" : ISODate("2017-06-27T10:42:13.017+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c91e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:13.517+0000"),
          "time" : ISODate("2017-06-27T10:42:13.520+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c91d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:14.020+0000"),
          "time" : ISODate("2017-06-27T10:42:14.024+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c91c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:14.524+0000"),
          "time" : ISODate("2017-06-27T10:42:14.527+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c91b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:15.027+0000"),
          "time" : ISODate("2017-06-27T10:42:15.028+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c91a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:15.528+0000"),
          "time" : ISODate("2017-06-27T10:42:15.528+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c919")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:16.028+0000"),
          "time" : ISODate("2017-06-27T10:42:16.029+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c918")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:16.529+0000"),
          "time" : ISODate("2017-06-27T10:42:16.529+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c917")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:17.029+0000"),
          "time" : ISODate("2017-06-27T10:42:17.030+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c916")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:17.530+0000"),
          "time" : ISODate("2017-06-27T10:42:17.531+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c915")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:18.031+0000"),
          "time" : ISODate("2017-06-27T10:42:18.035+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c914")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:18.535+0000"),
          "time" : ISODate("2017-06-27T10:42:18.536+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c913")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:19.036+0000"),
          "time" : ISODate("2017-06-27T10:42:19.037+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c912")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:19.537+0000"),
          "time" : ISODate("2017-06-27T10:42:19.537+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c911")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:20.037+0000"),
          "time" : ISODate("2017-06-27T10:42:20.039+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c910")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:20.539+0000"),
          "time" : ISODate("2017-06-27T10:42:20.542+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c90f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:21.042+0000"),
          "time" : ISODate("2017-06-27T10:42:21.045+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c90e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:21.545+0000"),
          "time" : ISODate("2017-06-27T10:42:21.548+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c90d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:22.048+0000"),
          "time" : ISODate("2017-06-27T10:42:22.048+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c90c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:22.548+0000"),
          "time" : ISODate("2017-06-27T10:42:22.548+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c90b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:23.048+0000"),
          "time" : ISODate("2017-06-27T10:42:23.054+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c90a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:23.554+0000"),
          "time" : ISODate("2017-06-27T10:42:23.558+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c909")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:24.058+0000"),
          "time" : ISODate("2017-06-27T10:42:24.064+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c908")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:24.564+0000"),
          "time" : ISODate("2017-06-27T10:42:24.564+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c907")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:25.064+0000"),
          "time" : ISODate("2017-06-27T10:42:25.067+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c906")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:25.567+0000"),
          "time" : ISODate("2017-06-27T10:42:25.567+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c905")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:26.067+0000"),
          "time" : ISODate("2017-06-27T10:42:26.069+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c904")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:26.569+0000"),
          "time" : ISODate("2017-06-27T10:42:26.571+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c903")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:27.071+0000"),
          "time" : ISODate("2017-06-27T10:42:27.071+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c902")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:27.571+0000"),
          "time" : ISODate("2017-06-27T10:42:27.575+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c901")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:28.075+0000"),
          "time" : ISODate("2017-06-27T10:42:28.076+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c900")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:28.576+0000"),
          "time" : ISODate("2017-06-27T10:42:28.577+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ff")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:29.077+0000"),
          "time" : ISODate("2017-06-27T10:42:29.082+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8fe")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:29.582+0000"),
          "time" : ISODate("2017-06-27T10:42:29.583+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8fd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:30.083+0000"),
          "time" : ISODate("2017-06-27T10:42:30.086+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8fc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:30.586+0000"),
          "time" : ISODate("2017-06-27T10:42:30.586+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8fb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:31.086+0000"),
          "time" : ISODate("2017-06-27T10:42:31.087+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8fa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:31.587+0000"),
          "time" : ISODate("2017-06-27T10:42:31.587+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:32.087+0000"),
          "time" : ISODate("2017-06-27T10:42:32.088+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:32.588+0000"),
          "time" : ISODate("2017-06-27T10:42:32.591+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:33.091+0000"),
          "time" : ISODate("2017-06-27T10:42:33.094+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:33.594+0000"),
          "time" : ISODate("2017-06-27T10:42:33.594+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:34.094+0000"),
          "time" : ISODate("2017-06-27T10:42:34.100+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:34.600+0000"),
          "time" : ISODate("2017-06-27T10:42:34.600+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:35.100+0000"),
          "time" : ISODate("2017-06-27T10:42:35.103+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:35.603+0000"),
          "time" : ISODate("2017-06-27T10:42:35.608+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:36.108+0000"),
          "time" : ISODate("2017-06-27T10:42:36.109+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8f0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:36.609+0000"),
          "time" : ISODate("2017-06-27T10:42:36.613+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ef")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:37.113+0000"),
          "time" : ISODate("2017-06-27T10:42:37.116+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ee")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:37.616+0000"),
          "time" : ISODate("2017-06-27T10:42:37.617+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ed")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:38.117+0000"),
          "time" : ISODate("2017-06-27T10:42:38.119+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ec")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:38.619+0000"),
          "time" : ISODate("2017-06-27T10:42:38.624+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8eb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:39.124+0000"),
          "time" : ISODate("2017-06-27T10:42:39.129+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ea")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:39.629+0000"),
          "time" : ISODate("2017-06-27T10:42:39.632+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:40.132+0000"),
          "time" : ISODate("2017-06-27T10:42:40.137+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:40.637+0000"),
          "time" : ISODate("2017-06-27T10:42:40.638+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:41.138+0000"),
          "time" : ISODate("2017-06-27T10:42:41.141+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:41.641+0000"),
          "time" : ISODate("2017-06-27T10:42:41.641+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:42.141+0000"),
          "time" : ISODate("2017-06-27T10:42:42.141+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:42.641+0000"),
          "time" : ISODate("2017-06-27T10:42:42.642+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:43.142+0000"),
          "time" : ISODate("2017-06-27T10:42:43.143+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:43.643+0000"),
          "time" : ISODate("2017-06-27T10:42:43.649+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:44.149+0000"),
          "time" : ISODate("2017-06-27T10:42:44.153+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8e0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:44.653+0000"),
          "time" : ISODate("2017-06-27T10:42:44.658+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8df")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:45.158+0000"),
          "time" : ISODate("2017-06-27T10:42:45.158+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8de")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:45.658+0000"),
          "time" : ISODate("2017-06-27T10:42:45.662+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8dd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:46.162+0000"),
          "time" : ISODate("2017-06-27T10:42:46.165+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8dc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:46.665+0000"),
          "time" : ISODate("2017-06-27T10:42:46.667+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8db")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:47.167+0000"),
          "time" : ISODate("2017-06-27T10:42:47.169+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8da")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:47.669+0000"),
          "time" : ISODate("2017-06-27T10:42:47.670+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:48.170+0000"),
          "time" : ISODate("2017-06-27T10:42:48.171+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:48.671+0000"),
          "time" : ISODate("2017-06-27T10:42:48.671+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:49.171+0000"),
          "time" : ISODate("2017-06-27T10:42:49.172+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:49.672+0000"),
          "time" : ISODate("2017-06-27T10:42:49.677+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:50.177+0000"),
          "time" : ISODate("2017-06-27T10:42:50.180+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:50.680+0000"),
          "time" : ISODate("2017-06-27T10:42:50.683+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:51.183+0000"),
          "time" : ISODate("2017-06-27T10:42:51.186+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:51.686+0000"),
          "time" : ISODate("2017-06-27T10:42:51.687+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:52.187+0000"),
          "time" : ISODate("2017-06-27T10:42:52.187+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8d0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:52.687+0000"),
          "time" : ISODate("2017-06-27T10:42:52.691+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8cf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:53.191+0000"),
          "time" : ISODate("2017-06-27T10:42:53.191+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ce")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:53.691+0000"),
          "time" : ISODate("2017-06-27T10:42:53.693+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8cd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:54.193+0000"),
          "time" : ISODate("2017-06-27T10:42:54.195+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8cc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:54.695+0000"),
          "time" : ISODate("2017-06-27T10:42:54.699+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8cb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:55.199+0000"),
          "time" : ISODate("2017-06-27T10:42:55.200+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ca")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:55.700+0000"),
          "time" : ISODate("2017-06-27T10:42:55.701+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:56.201+0000"),
          "time" : ISODate("2017-06-27T10:42:56.201+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:56.701+0000"),
          "time" : ISODate("2017-06-27T10:42:56.701+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:57.201+0000"),
          "time" : ISODate("2017-06-27T10:42:57.207+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:57.707+0000"),
          "time" : ISODate("2017-06-27T10:42:57.707+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:58.207+0000"),
          "time" : ISODate("2017-06-27T10:42:58.210+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:58.710+0000"),
          "time" : ISODate("2017-06-27T10:42:58.711+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:59.211+0000"),
          "time" : ISODate("2017-06-27T10:42:59.211+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:42:59.711+0000"),
          "time" : ISODate("2017-06-27T10:42:59.712+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:00.212+0000"),
          "time" : ISODate("2017-06-27T10:43:00.215+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8c0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:00.715+0000"),
          "time" : ISODate("2017-06-27T10:43:00.715+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8bf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:01.215+0000"),
          "time" : ISODate("2017-06-27T10:43:01.215+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8be")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:01.715+0000"),
          "time" : ISODate("2017-06-27T10:43:01.719+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8bd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:02.219+0000"),
          "time" : ISODate("2017-06-27T10:43:02.220+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8bc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:02.720+0000"),
          "time" : ISODate("2017-06-27T10:43:02.723+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8bb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:03.223+0000"),
          "time" : ISODate("2017-06-27T10:43:03.227+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ba")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:03.727+0000"),
          "time" : ISODate("2017-06-27T10:43:03.731+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:04.231+0000"),
          "time" : ISODate("2017-06-27T10:43:04.232+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:04.732+0000"),
          "time" : ISODate("2017-06-27T10:43:04.737+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:05.237+0000"),
          "time" : ISODate("2017-06-27T10:43:05.237+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:05.737+0000"),
          "time" : ISODate("2017-06-27T10:43:05.742+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:06.242+0000"),
          "time" : ISODate("2017-06-27T10:43:06.243+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:06.743+0000"),
          "time" : ISODate("2017-06-27T10:43:06.746+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:07.246+0000"),
          "time" : ISODate("2017-06-27T10:43:07.250+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:07.750+0000"),
          "time" : ISODate("2017-06-27T10:43:07.750+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:08.250+0000"),
          "time" : ISODate("2017-06-27T10:43:08.251+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8b0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:08.751+0000"),
          "time" : ISODate("2017-06-27T10:43:08.752+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8af")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:09.252+0000"),
          "time" : ISODate("2017-06-27T10:43:09.258+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ae")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:09.758+0000"),
          "time" : ISODate("2017-06-27T10:43:09.758+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ad")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:10.258+0000"),
          "time" : ISODate("2017-06-27T10:43:10.259+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ac")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:10.759+0000"),
          "time" : ISODate("2017-06-27T10:43:10.759+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8ab")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:11.259+0000"),
          "time" : ISODate("2017-06-27T10:43:11.264+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8aa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:11.764+0000"),
          "time" : ISODate("2017-06-27T10:43:11.765+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:12.265+0000"),
          "time" : ISODate("2017-06-27T10:43:12.266+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:12.766+0000"),
          "time" : ISODate("2017-06-27T10:43:12.767+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:13.267+0000"),
          "time" : ISODate("2017-06-27T10:43:13.267+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:13.767+0000"),
          "time" : ISODate("2017-06-27T10:43:13.768+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:14.268+0000"),
          "time" : ISODate("2017-06-27T10:43:14.273+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:14.773+0000"),
          "time" : ISODate("2017-06-27T10:43:14.779+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:15.279+0000"),
          "time" : ISODate("2017-06-27T10:43:15.283+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:15.783+0000"),
          "time" : ISODate("2017-06-27T10:43:15.787+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:16.287+0000"),
          "time" : ISODate("2017-06-27T10:43:16.292+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c8a0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:16.792+0000"),
          "time" : ISODate("2017-06-27T10:43:16.793+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c89f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:17.293+0000"),
          "time" : ISODate("2017-06-27T10:43:17.297+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c89e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:17.797+0000"),
          "time" : ISODate("2017-06-27T10:43:17.800+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c89d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:18.300+0000"),
          "time" : ISODate("2017-06-27T10:43:18.303+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c89c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:18.803+0000"),
          "time" : ISODate("2017-06-27T10:43:18.807+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c89b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:19.307+0000"),
          "time" : ISODate("2017-06-27T10:43:19.307+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c89a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:19.807+0000"),
          "time" : ISODate("2017-06-27T10:43:19.810+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c899")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:20.310+0000"),
          "time" : ISODate("2017-06-27T10:43:20.311+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c898")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:20.811+0000"),
          "time" : ISODate("2017-06-27T10:43:20.812+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c897")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:21.312+0000"),
          "time" : ISODate("2017-06-27T10:43:21.313+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c896")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:21.813+0000"),
          "time" : ISODate("2017-06-27T10:43:21.813+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c895")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:22.313+0000"),
          "time" : ISODate("2017-06-27T10:43:22.314+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c894")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:22.814+0000"),
          "time" : ISODate("2017-06-27T10:43:22.815+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c893")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:23.315+0000"),
          "time" : ISODate("2017-06-27T10:43:23.319+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c892")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:23.819+0000"),
          "time" : ISODate("2017-06-27T10:43:23.821+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c891")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:24.321+0000"),
          "time" : ISODate("2017-06-27T10:43:24.321+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c890")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:24.821+0000"),
          "time" : ISODate("2017-06-27T10:43:24.824+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c88f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:25.324+0000"),
          "time" : ISODate("2017-06-27T10:43:25.327+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c88e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:25.827+0000"),
          "time" : ISODate("2017-06-27T10:43:25.830+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c88d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:26.330+0000"),
          "time" : ISODate("2017-06-27T10:43:26.335+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c88c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:26.835+0000"),
          "time" : ISODate("2017-06-27T10:43:26.835+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c88b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:27.335+0000"),
          "time" : ISODate("2017-06-27T10:43:27.337+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c88a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:27.837+0000"),
          "time" : ISODate("2017-06-27T10:43:27.838+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c889")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:28.338+0000"),
          "time" : ISODate("2017-06-27T10:43:28.338+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c888")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:28.838+0000"),
          "time" : ISODate("2017-06-27T10:43:28.838+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c887")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:29.338+0000"),
          "time" : ISODate("2017-06-27T10:43:29.339+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c886")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:29.839+0000"),
          "time" : ISODate("2017-06-27T10:43:29.839+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c885")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:30.339+0000"),
          "time" : ISODate("2017-06-27T10:43:30.344+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c884")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:30.844+0000"),
          "time" : ISODate("2017-06-27T10:43:30.846+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c883")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:31.346+0000"),
          "time" : ISODate("2017-06-27T10:43:31.348+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c882")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:31.848+0000"),
          "time" : ISODate("2017-06-27T10:43:31.853+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c881")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:32.353+0000"),
          "time" : ISODate("2017-06-27T10:43:32.357+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c880")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:32.857+0000"),
          "time" : ISODate("2017-06-27T10:43:32.857+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c87f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:33.357+0000"),
          "time" : ISODate("2017-06-27T10:43:33.358+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c87e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:33.858+0000"),
          "time" : ISODate("2017-06-27T10:43:33.862+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c87d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:34.362+0000"),
          "time" : ISODate("2017-06-27T10:43:34.365+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c87c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:34.865+0000"),
          "time" : ISODate("2017-06-27T10:43:34.869+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c87b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:35.369+0000"),
          "time" : ISODate("2017-06-27T10:43:35.374+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c87a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:35.874+0000"),
          "time" : ISODate("2017-06-27T10:43:35.875+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c879")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:36.375+0000"),
          "time" : ISODate("2017-06-27T10:43:36.375+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c878")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:36.875+0000"),
          "time" : ISODate("2017-06-27T10:43:36.877+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c877")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:37.377+0000"),
          "time" : ISODate("2017-06-27T10:43:37.377+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c876")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:37.877+0000"),
          "time" : ISODate("2017-06-27T10:43:37.882+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c875")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:38.382+0000"),
          "time" : ISODate("2017-06-27T10:43:38.386+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c874")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:38.886+0000"),
          "time" : ISODate("2017-06-27T10:43:38.890+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c873")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:39.390+0000"),
          "time" : ISODate("2017-06-27T10:43:39.395+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c872")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:39.895+0000"),
          "time" : ISODate("2017-06-27T10:43:39.897+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c871")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:40.397+0000"),
          "time" : ISODate("2017-06-27T10:43:40.398+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c870")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:40.898+0000"),
          "time" : ISODate("2017-06-27T10:43:40.898+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c86f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:41.398+0000"),
          "time" : ISODate("2017-06-27T10:43:41.401+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c86e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:41.901+0000"),
          "time" : ISODate("2017-06-27T10:43:41.906+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c86d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:42.406+0000"),
          "time" : ISODate("2017-06-27T10:43:42.408+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c86c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:42.908+0000"),
          "time" : ISODate("2017-06-27T10:43:42.909+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c86b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:43.409+0000"),
          "time" : ISODate("2017-06-27T10:43:43.411+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c86a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:43.911+0000"),
          "time" : ISODate("2017-06-27T10:43:43.912+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c869")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:44.412+0000"),
          "time" : ISODate("2017-06-27T10:43:44.416+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c868")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:44.916+0000"),
          "time" : ISODate("2017-06-27T10:43:44.917+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c867")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:45.417+0000"),
          "time" : ISODate("2017-06-27T10:43:45.418+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c866")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:45.918+0000"),
          "time" : ISODate("2017-06-27T10:43:45.919+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c865")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:46.419+0000"),
          "time" : ISODate("2017-06-27T10:43:46.419+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c864")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:46.919+0000"),
          "time" : ISODate("2017-06-27T10:43:46.920+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c863")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:47.420+0000"),
          "time" : ISODate("2017-06-27T10:43:47.421+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c862")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:47.921+0000"),
          "time" : ISODate("2017-06-27T10:43:47.922+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c861")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:48.422+0000"),
          "time" : ISODate("2017-06-27T10:43:48.427+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c860")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:48.927+0000"),
          "time" : ISODate("2017-06-27T10:43:48.927+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c85f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:49.427+0000"),
          "time" : ISODate("2017-06-27T10:43:49.430+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c85e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:49.930+0000"),
          "time" : ISODate("2017-06-27T10:43:49.930+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c85d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:50.430+0000"),
          "time" : ISODate("2017-06-27T10:43:50.431+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c85c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:50.931+0000"),
          "time" : ISODate("2017-06-27T10:43:50.936+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c85b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:51.436+0000"),
          "time" : ISODate("2017-06-27T10:43:51.437+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c85a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:51.937+0000"),
          "time" : ISODate("2017-06-27T10:43:51.939+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c859")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:52.439+0000"),
          "time" : ISODate("2017-06-27T10:43:52.442+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c858")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:52.942+0000"),
          "time" : ISODate("2017-06-27T10:43:52.946+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c857")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:53.446+0000"),
          "time" : ISODate("2017-06-27T10:43:53.449+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c856")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:53.949+0000"),
          "time" : ISODate("2017-06-27T10:43:53.955+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c855")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:54.455+0000"),
          "time" : ISODate("2017-06-27T10:43:54.455+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c854")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:54.955+0000"),
          "time" : ISODate("2017-06-27T10:43:54.955+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c853")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:55.455+0000"),
          "time" : ISODate("2017-06-27T10:43:55.456+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c852")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:55.956+0000"),
          "time" : ISODate("2017-06-27T10:43:55.956+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c851")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:56.456+0000"),
          "time" : ISODate("2017-06-27T10:43:56.456+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c850")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:56.956+0000"),
          "time" : ISODate("2017-06-27T10:43:56.958+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c84f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:57.458+0000"),
          "time" : ISODate("2017-06-27T10:43:57.458+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c84e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:57.958+0000"),
          "time" : ISODate("2017-06-27T10:43:57.962+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c84d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:58.462+0000"),
          "time" : ISODate("2017-06-27T10:43:58.465+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c84c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:58.965+0000"),
          "time" : ISODate("2017-06-27T10:43:58.967+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c84b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:59.467+0000"),
          "time" : ISODate("2017-06-27T10:43:59.467+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c84a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:43:59.967+0000"),
          "time" : ISODate("2017-06-27T10:43:59.970+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c849")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:00.470+0000"),
          "time" : ISODate("2017-06-27T10:44:00.472+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c848")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:00.972+0000"),
          "time" : ISODate("2017-06-27T10:44:00.973+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c847")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:01.473+0000"),
          "time" : ISODate("2017-06-27T10:44:01.473+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c846")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:01.973+0000"),
          "time" : ISODate("2017-06-27T10:44:01.977+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c845")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:02.477+0000"),
          "time" : ISODate("2017-06-27T10:44:02.480+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c844")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:02.980+0000"),
          "time" : ISODate("2017-06-27T10:44:02.984+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c843")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:03.484+0000"),
          "time" : ISODate("2017-06-27T10:44:03.484+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c842")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:03.984+0000"),
          "time" : ISODate("2017-06-27T10:44:03.985+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c841")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:04.485+0000"),
          "time" : ISODate("2017-06-27T10:44:04.485+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c840")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:04.985+0000"),
          "time" : ISODate("2017-06-27T10:44:04.985+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c83f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:05.485+0000"),
          "time" : ISODate("2017-06-27T10:44:05.488+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c83e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:05.988+0000"),
          "time" : ISODate("2017-06-27T10:44:05.989+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c83d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:06.489+0000"),
          "time" : ISODate("2017-06-27T10:44:06.489+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c83c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:06.989+0000"),
          "time" : ISODate("2017-06-27T10:44:06.990+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c83b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:07.490+0000"),
          "time" : ISODate("2017-06-27T10:44:07.491+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c83a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:07.991+0000"),
          "time" : ISODate("2017-06-27T10:44:07.992+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c839")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:08.492+0000"),
          "time" : ISODate("2017-06-27T10:44:08.492+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c838")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:08.992+0000"),
          "time" : ISODate("2017-06-27T10:44:08.996+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c837")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:09.496+0000"),
          "time" : ISODate("2017-06-27T10:44:09.499+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c836")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:09.999+0000"),
          "time" : ISODate("2017-06-27T10:44:10.001+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c835")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:10.501+0000"),
          "time" : ISODate("2017-06-27T10:44:10.505+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c834")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:11.005+0000"),
          "time" : ISODate("2017-06-27T10:44:11.010+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c833")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:11.510+0000"),
          "time" : ISODate("2017-06-27T10:44:11.515+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c832")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:12.015+0000"),
          "time" : ISODate("2017-06-27T10:44:12.017+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c831")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:12.517+0000"),
          "time" : ISODate("2017-06-27T10:44:12.517+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c830")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:13.017+0000"),
          "time" : ISODate("2017-06-27T10:44:13.019+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c82f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:13.519+0000"),
          "time" : ISODate("2017-06-27T10:44:13.520+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c82e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:14.020+0000"),
          "time" : ISODate("2017-06-27T10:44:14.020+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c82d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:14.520+0000"),
          "time" : ISODate("2017-06-27T10:44:14.520+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c82c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:15.020+0000"),
          "time" : ISODate("2017-06-27T10:44:15.020+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c82b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:15.520+0000"),
          "time" : ISODate("2017-06-27T10:44:15.521+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c82a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:16.021+0000"),
          "time" : ISODate("2017-06-27T10:44:16.026+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c829")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:16.526+0000"),
          "time" : ISODate("2017-06-27T10:44:16.526+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c828")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:17.026+0000"),
          "time" : ISODate("2017-06-27T10:44:17.029+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c827")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:17.529+0000"),
          "time" : ISODate("2017-06-27T10:44:17.532+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c826")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:18.032+0000"),
          "time" : ISODate("2017-06-27T10:44:18.033+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c825")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:18.533+0000"),
          "time" : ISODate("2017-06-27T10:44:18.538+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c824")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:19.038+0000"),
          "time" : ISODate("2017-06-27T10:44:19.039+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c823")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:19.539+0000"),
          "time" : ISODate("2017-06-27T10:44:19.542+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c822")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:20.042+0000"),
          "time" : ISODate("2017-06-27T10:44:20.043+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c821")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:20.543+0000"),
          "time" : ISODate("2017-06-27T10:44:20.546+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c820")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:21.046+0000"),
          "time" : ISODate("2017-06-27T10:44:21.046+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c81f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:21.546+0000"),
          "time" : ISODate("2017-06-27T10:44:21.549+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c81e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:22.049+0000"),
          "time" : ISODate("2017-06-27T10:44:22.053+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c81d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:22.553+0000"),
          "time" : ISODate("2017-06-27T10:44:22.553+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c81c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:23.053+0000"),
          "time" : ISODate("2017-06-27T10:44:23.054+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c81b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:23.554+0000"),
          "time" : ISODate("2017-06-27T10:44:23.554+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c81a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:24.054+0000"),
          "time" : ISODate("2017-06-27T10:44:24.059+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c819")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:24.559+0000"),
          "time" : ISODate("2017-06-27T10:44:24.561+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c818")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:25.061+0000"),
          "time" : ISODate("2017-06-27T10:44:25.065+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c817")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:25.565+0000"),
          "time" : ISODate("2017-06-27T10:44:25.570+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c816")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:26.070+0000"),
          "time" : ISODate("2017-06-27T10:44:26.075+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c815")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:26.575+0000"),
          "time" : ISODate("2017-06-27T10:44:26.578+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c814")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:27.078+0000"),
          "time" : ISODate("2017-06-27T10:44:27.080+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c813")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:27.580+0000"),
          "time" : ISODate("2017-06-27T10:44:27.581+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c812")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:28.081+0000"),
          "time" : ISODate("2017-06-27T10:44:28.083+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c811")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:28.583+0000"),
          "time" : ISODate("2017-06-27T10:44:28.586+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c810")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:29.086+0000"),
          "time" : ISODate("2017-06-27T10:44:29.086+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c80f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:29.586+0000"),
          "time" : ISODate("2017-06-27T10:44:29.587+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c80e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:30.087+0000"),
          "time" : ISODate("2017-06-27T10:44:30.088+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c80d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:30.588+0000"),
          "time" : ISODate("2017-06-27T10:44:30.591+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c80c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:31.091+0000"),
          "time" : ISODate("2017-06-27T10:44:31.095+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c80b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:31.595+0000"),
          "time" : ISODate("2017-06-27T10:44:31.597+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c80a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:32.097+0000"),
          "time" : ISODate("2017-06-27T10:44:32.099+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c809")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:32.599+0000"),
          "time" : ISODate("2017-06-27T10:44:32.600+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c808")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:33.100+0000"),
          "time" : ISODate("2017-06-27T10:44:33.103+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c807")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:33.603+0000"),
          "time" : ISODate("2017-06-27T10:44:33.606+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c806")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:34.106+0000"),
          "time" : ISODate("2017-06-27T10:44:34.107+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c805")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:34.607+0000"),
          "time" : ISODate("2017-06-27T10:44:34.608+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c804")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:35.108+0000"),
          "time" : ISODate("2017-06-27T10:44:35.109+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c803")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:35.609+0000"),
          "time" : ISODate("2017-06-27T10:44:35.612+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c802")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:36.112+0000"),
          "time" : ISODate("2017-06-27T10:44:36.112+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c801")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:36.612+0000"),
          "time" : ISODate("2017-06-27T10:44:36.613+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c800")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:37.113+0000"),
          "time" : ISODate("2017-06-27T10:44:37.113+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ff")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:37.613+0000"),
          "time" : ISODate("2017-06-27T10:44:37.614+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7fe")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:38.114+0000"),
          "time" : ISODate("2017-06-27T10:44:38.114+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7fd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:38.614+0000"),
          "time" : ISODate("2017-06-27T10:44:38.619+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7fc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:39.119+0000"),
          "time" : ISODate("2017-06-27T10:44:39.120+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7fb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:39.620+0000"),
          "time" : ISODate("2017-06-27T10:44:39.624+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7fa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:40.124+0000"),
          "time" : ISODate("2017-06-27T10:44:40.125+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:40.625+0000"),
          "time" : ISODate("2017-06-27T10:44:40.625+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:41.125+0000"),
          "time" : ISODate("2017-06-27T10:44:41.127+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:41.627+0000"),
          "time" : ISODate("2017-06-27T10:44:41.627+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:42.127+0000"),
          "time" : ISODate("2017-06-27T10:44:42.128+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:42.628+0000"),
          "time" : ISODate("2017-06-27T10:44:42.629+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:43.129+0000"),
          "time" : ISODate("2017-06-27T10:44:43.132+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:43.632+0000"),
          "time" : ISODate("2017-06-27T10:44:43.635+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:44.135+0000"),
          "time" : ISODate("2017-06-27T10:44:44.138+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:44.638+0000"),
          "time" : ISODate("2017-06-27T10:44:44.641+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7f0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:45.141+0000"),
          "time" : ISODate("2017-06-27T10:44:45.144+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ef")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:45.644+0000"),
          "time" : ISODate("2017-06-27T10:44:45.648+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ee")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:46.148+0000"),
          "time" : ISODate("2017-06-27T10:44:46.149+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ed")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:46.649+0000"),
          "time" : ISODate("2017-06-27T10:44:46.649+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ec")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:47.149+0000"),
          "time" : ISODate("2017-06-27T10:44:47.153+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7eb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:47.653+0000"),
          "time" : ISODate("2017-06-27T10:44:47.659+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ea")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:48.159+0000"),
          "time" : ISODate("2017-06-27T10:44:48.159+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:48.659+0000"),
          "time" : ISODate("2017-06-27T10:44:48.660+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:49.160+0000"),
          "time" : ISODate("2017-06-27T10:44:49.164+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:49.664+0000"),
          "time" : ISODate("2017-06-27T10:44:49.665+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:50.165+0000"),
          "time" : ISODate("2017-06-27T10:44:50.169+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:50.669+0000"),
          "time" : ISODate("2017-06-27T10:44:50.674+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:51.174+0000"),
          "time" : ISODate("2017-06-27T10:44:51.174+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:51.674+0000"),
          "time" : ISODate("2017-06-27T10:44:51.678+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:52.178+0000"),
          "time" : ISODate("2017-06-27T10:44:52.182+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:52.682+0000"),
          "time" : ISODate("2017-06-27T10:44:52.684+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7e0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:53.184+0000"),
          "time" : ISODate("2017-06-27T10:44:53.185+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7df")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:53.685+0000"),
          "time" : ISODate("2017-06-27T10:44:53.689+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7de")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:54.189+0000"),
          "time" : ISODate("2017-06-27T10:44:54.189+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7dd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:54.689+0000"),
          "time" : ISODate("2017-06-27T10:44:54.690+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7dc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:55.190+0000"),
          "time" : ISODate("2017-06-27T10:44:55.192+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7db")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:55.692+0000"),
          "time" : ISODate("2017-06-27T10:44:55.693+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7da")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:56.193+0000"),
          "time" : ISODate("2017-06-27T10:44:56.198+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:56.698+0000"),
          "time" : ISODate("2017-06-27T10:44:56.698+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:57.198+0000"),
          "time" : ISODate("2017-06-27T10:44:57.199+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:57.699+0000"),
          "time" : ISODate("2017-06-27T10:44:57.700+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:58.200+0000"),
          "time" : ISODate("2017-06-27T10:44:58.200+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:58.700+0000"),
          "time" : ISODate("2017-06-27T10:44:58.705+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:59.205+0000"),
          "time" : ISODate("2017-06-27T10:44:59.206+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:44:59.706+0000"),
          "time" : ISODate("2017-06-27T10:44:59.706+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:00.206+0000"),
          "time" : ISODate("2017-06-27T10:45:00.208+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:00.708+0000"),
          "time" : ISODate("2017-06-27T10:45:00.709+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7d0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:01.209+0000"),
          "time" : ISODate("2017-06-27T10:45:01.210+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7cf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:01.710+0000"),
          "time" : ISODate("2017-06-27T10:45:01.710+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ce")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:02.210+0000"),
          "time" : ISODate("2017-06-27T10:45:02.215+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7cd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:02.715+0000"),
          "time" : ISODate("2017-06-27T10:45:02.715+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7cc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:03.215+0000"),
          "time" : ISODate("2017-06-27T10:45:03.215+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7cb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:03.715+0000"),
          "time" : ISODate("2017-06-27T10:45:03.721+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ca")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:04.221+0000"),
          "time" : ISODate("2017-06-27T10:45:04.224+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:04.724+0000"),
          "time" : ISODate("2017-06-27T10:45:04.724+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:05.224+0000"),
          "time" : ISODate("2017-06-27T10:45:05.225+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:05.725+0000"),
          "time" : ISODate("2017-06-27T10:45:05.725+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:06.225+0000"),
          "time" : ISODate("2017-06-27T10:45:06.229+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:06.729+0000"),
          "time" : ISODate("2017-06-27T10:45:06.731+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:07.231+0000"),
          "time" : ISODate("2017-06-27T10:45:07.231+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:07.731+0000"),
          "time" : ISODate("2017-06-27T10:45:07.731+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:08.231+0000"),
          "time" : ISODate("2017-06-27T10:45:08.232+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:08.732+0000"),
          "time" : ISODate("2017-06-27T10:45:08.732+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7c0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:09.232+0000"),
          "time" : ISODate("2017-06-27T10:45:09.232+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7bf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:09.732+0000"),
          "time" : ISODate("2017-06-27T10:45:09.736+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7be")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:10.236+0000"),
          "time" : ISODate("2017-06-27T10:45:10.237+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7bd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:10.737+0000"),
          "time" : ISODate("2017-06-27T10:45:10.741+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7bc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:11.241+0000"),
          "time" : ISODate("2017-06-27T10:45:11.241+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7bb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:11.741+0000"),
          "time" : ISODate("2017-06-27T10:45:11.745+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ba")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:12.245+0000"),
          "time" : ISODate("2017-06-27T10:45:12.246+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:12.746+0000"),
          "time" : ISODate("2017-06-27T10:45:12.750+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:13.250+0000"),
          "time" : ISODate("2017-06-27T10:45:13.250+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:13.750+0000"),
          "time" : ISODate("2017-06-27T10:45:13.755+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:14.255+0000"),
          "time" : ISODate("2017-06-27T10:45:14.260+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:14.760+0000"),
          "time" : ISODate("2017-06-27T10:45:14.765+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:15.265+0000"),
          "time" : ISODate("2017-06-27T10:45:15.265+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:15.765+0000"),
          "time" : ISODate("2017-06-27T10:45:15.766+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:16.266+0000"),
          "time" : ISODate("2017-06-27T10:45:16.267+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:16.767+0000"),
          "time" : ISODate("2017-06-27T10:45:16.767+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7b0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:17.267+0000"),
          "time" : ISODate("2017-06-27T10:45:17.268+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7af")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:17.768+0000"),
          "time" : ISODate("2017-06-27T10:45:17.769+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ae")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:18.269+0000"),
          "time" : ISODate("2017-06-27T10:45:18.273+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ad")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:18.773+0000"),
          "time" : ISODate("2017-06-27T10:45:18.776+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ac")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:19.276+0000"),
          "time" : ISODate("2017-06-27T10:45:19.276+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7ab")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:19.776+0000"),
          "time" : ISODate("2017-06-27T10:45:19.777+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7aa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:20.277+0000"),
          "time" : ISODate("2017-06-27T10:45:20.278+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:20.778+0000"),
          "time" : ISODate("2017-06-27T10:45:20.778+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:21.278+0000"),
          "time" : ISODate("2017-06-27T10:45:21.278+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:21.778+0000"),
          "time" : ISODate("2017-06-27T10:45:21.781+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:22.281+0000"),
          "time" : ISODate("2017-06-27T10:45:22.286+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:22.786+0000"),
          "time" : ISODate("2017-06-27T10:45:22.789+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:23.289+0000"),
          "time" : ISODate("2017-06-27T10:45:23.289+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:23.789+0000"),
          "time" : ISODate("2017-06-27T10:45:23.790+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:24.290+0000"),
          "time" : ISODate("2017-06-27T10:45:24.290+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:24.790+0000"),
          "time" : ISODate("2017-06-27T10:45:24.791+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c7a0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:25.291+0000"),
          "time" : ISODate("2017-06-27T10:45:25.291+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c79f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:25.791+0000"),
          "time" : ISODate("2017-06-27T10:45:25.791+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c79e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:26.291+0000"),
          "time" : ISODate("2017-06-27T10:45:26.292+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c79d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:26.792+0000"),
          "time" : ISODate("2017-06-27T10:45:26.793+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c79c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:27.293+0000"),
          "time" : ISODate("2017-06-27T10:45:27.293+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c79b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:27.793+0000"),
          "time" : ISODate("2017-06-27T10:45:27.795+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c79a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:28.295+0000"),
          "time" : ISODate("2017-06-27T10:45:28.295+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c799")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:28.795+0000"),
          "time" : ISODate("2017-06-27T10:45:28.795+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c798")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:29.295+0000"),
          "time" : ISODate("2017-06-27T10:45:29.295+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c797")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:29.795+0000"),
          "time" : ISODate("2017-06-27T10:45:29.799+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c796")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:30.299+0000"),
          "time" : ISODate("2017-06-27T10:45:30.304+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c795")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:30.804+0000"),
          "time" : ISODate("2017-06-27T10:45:30.804+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c794")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:31.304+0000"),
          "time" : ISODate("2017-06-27T10:45:31.309+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c793")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:31.809+0000"),
          "time" : ISODate("2017-06-27T10:45:31.809+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c792")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:32.309+0000"),
          "time" : ISODate("2017-06-27T10:45:32.311+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c791")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:32.811+0000"),
          "time" : ISODate("2017-06-27T10:45:32.812+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c790")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:33.312+0000"),
          "time" : ISODate("2017-06-27T10:45:33.313+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c78f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:33.813+0000"),
          "time" : ISODate("2017-06-27T10:45:33.818+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c78e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:34.318+0000"),
          "time" : ISODate("2017-06-27T10:45:34.323+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c78d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:34.823+0000"),
          "time" : ISODate("2017-06-27T10:45:34.823+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c78c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:35.323+0000"),
          "time" : ISODate("2017-06-27T10:45:35.329+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c78b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:35.829+0000"),
          "time" : ISODate("2017-06-27T10:45:35.830+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c78a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:36.330+0000"),
          "time" : ISODate("2017-06-27T10:45:36.336+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c789")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:36.836+0000"),
          "time" : ISODate("2017-06-27T10:45:36.837+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c788")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:37.337+0000"),
          "time" : ISODate("2017-06-27T10:45:37.342+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c787")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:37.842+0000"),
          "time" : ISODate("2017-06-27T10:45:37.842+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c786")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:38.342+0000"),
          "time" : ISODate("2017-06-27T10:45:38.343+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c785")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:38.843+0000"),
          "time" : ISODate("2017-06-27T10:45:38.844+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c784")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:39.344+0000"),
          "time" : ISODate("2017-06-27T10:45:39.345+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c783")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:39.845+0000"),
          "time" : ISODate("2017-06-27T10:45:39.847+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c782")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:40.347+0000"),
          "time" : ISODate("2017-06-27T10:45:40.349+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c781")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:40.849+0000"),
          "time" : ISODate("2017-06-27T10:45:40.852+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c780")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:41.352+0000"),
          "time" : ISODate("2017-06-27T10:45:41.356+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c77f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:41.856+0000"),
          "time" : ISODate("2017-06-27T10:45:41.861+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c77e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:42.361+0000"),
          "time" : ISODate("2017-06-27T10:45:42.364+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c77d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:42.864+0000"),
          "time" : ISODate("2017-06-27T10:45:42.867+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c77c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:43.367+0000"),
          "time" : ISODate("2017-06-27T10:45:43.368+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c77b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:43.868+0000"),
          "time" : ISODate("2017-06-27T10:45:43.870+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c77a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:44.370+0000"),
          "time" : ISODate("2017-06-27T10:45:44.375+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c779")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:44.875+0000"),
          "time" : ISODate("2017-06-27T10:45:44.876+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c778")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:45.376+0000"),
          "time" : ISODate("2017-06-27T10:45:45.378+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c777")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:45.878+0000"),
          "time" : ISODate("2017-06-27T10:45:45.880+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c776")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:46.380+0000"),
          "time" : ISODate("2017-06-27T10:45:46.384+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c775")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:46.884+0000"),
          "time" : ISODate("2017-06-27T10:45:46.885+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c774")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:47.385+0000"),
          "time" : ISODate("2017-06-27T10:45:47.389+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c773")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:47.889+0000"),
          "time" : ISODate("2017-06-27T10:45:47.894+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c772")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:48.394+0000"),
          "time" : ISODate("2017-06-27T10:45:48.395+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c771")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:48.895+0000"),
          "time" : ISODate("2017-06-27T10:45:48.895+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c770")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:49.395+0000"),
          "time" : ISODate("2017-06-27T10:45:49.396+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c76f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:49.896+0000"),
          "time" : ISODate("2017-06-27T10:45:49.898+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c76e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:50.398+0000"),
          "time" : ISODate("2017-06-27T10:45:50.402+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c76d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:50.902+0000"),
          "time" : ISODate("2017-06-27T10:45:50.903+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c76c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:51.403+0000"),
          "time" : ISODate("2017-06-27T10:45:51.407+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c76b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:51.907+0000"),
          "time" : ISODate("2017-06-27T10:45:51.911+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c76a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:52.411+0000"),
          "time" : ISODate("2017-06-27T10:45:52.415+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c769")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:52.915+0000"),
          "time" : ISODate("2017-06-27T10:45:52.920+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c768")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:53.420+0000"),
          "time" : ISODate("2017-06-27T10:45:53.423+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c767")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:53.923+0000"),
          "time" : ISODate("2017-06-27T10:45:53.924+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c766")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:54.424+0000"),
          "time" : ISODate("2017-06-27T10:45:54.424+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c765")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:54.924+0000"),
          "time" : ISODate("2017-06-27T10:45:54.924+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c764")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:55.424+0000"),
          "time" : ISODate("2017-06-27T10:45:55.424+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c763")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:55.924+0000"),
          "time" : ISODate("2017-06-27T10:45:55.925+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c762")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:56.425+0000"),
          "time" : ISODate("2017-06-27T10:45:56.431+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c761")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:56.931+0000"),
          "time" : ISODate("2017-06-27T10:45:56.936+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c760")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:57.436+0000"),
          "time" : ISODate("2017-06-27T10:45:57.436+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c75f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:57.936+0000"),
          "time" : ISODate("2017-06-27T10:45:57.936+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c75e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:58.436+0000"),
          "time" : ISODate("2017-06-27T10:45:58.437+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c75d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:58.937+0000"),
          "time" : ISODate("2017-06-27T10:45:58.940+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c75c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:59.440+0000"),
          "time" : ISODate("2017-06-27T10:45:59.441+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c75b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:45:59.941+0000"),
          "time" : ISODate("2017-06-27T10:45:59.944+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c75a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:00.444+0000"),
          "time" : ISODate("2017-06-27T10:46:00.448+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c759")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:00.948+0000"),
          "time" : ISODate("2017-06-27T10:46:00.948+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c758")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:01.448+0000"),
          "time" : ISODate("2017-06-27T10:46:01.449+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c757")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:01.949+0000"),
          "time" : ISODate("2017-06-27T10:46:01.954+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c756")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:02.454+0000"),
          "time" : ISODate("2017-06-27T10:46:02.455+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c755")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:02.955+0000"),
          "time" : ISODate("2017-06-27T10:46:02.957+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c754")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:03.457+0000"),
          "time" : ISODate("2017-06-27T10:46:03.461+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c753")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:03.961+0000"),
          "time" : ISODate("2017-06-27T10:46:03.961+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c752")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:04.461+0000"),
          "time" : ISODate("2017-06-27T10:46:04.463+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c751")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:04.963+0000"),
          "time" : ISODate("2017-06-27T10:46:04.963+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c750")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:05.463+0000"),
          "time" : ISODate("2017-06-27T10:46:05.464+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c74f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:05.964+0000"),
          "time" : ISODate("2017-06-27T10:46:05.968+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c74e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:06.468+0000"),
          "time" : ISODate("2017-06-27T10:46:06.469+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c74d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:06.969+0000"),
          "time" : ISODate("2017-06-27T10:46:06.974+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c74c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:07.474+0000"),
          "time" : ISODate("2017-06-27T10:46:07.480+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c74b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:07.980+0000"),
          "time" : ISODate("2017-06-27T10:46:07.983+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c74a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:08.483+0000"),
          "time" : ISODate("2017-06-27T10:46:08.485+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c749")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:08.985+0000"),
          "time" : ISODate("2017-06-27T10:46:08.990+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c748")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:09.490+0000"),
          "time" : ISODate("2017-06-27T10:46:09.490+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c747")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:09.990+0000"),
          "time" : ISODate("2017-06-27T10:46:09.996+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c746")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:10.496+0000"),
          "time" : ISODate("2017-06-27T10:46:10.501+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c745")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:11.001+0000"),
          "time" : ISODate("2017-06-27T10:46:11.002+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c744")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:11.502+0000"),
          "time" : ISODate("2017-06-27T10:46:11.503+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c743")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:12.003+0000"),
          "time" : ISODate("2017-06-27T10:46:12.004+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c742")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:12.504+0000"),
          "time" : ISODate("2017-06-27T10:46:12.509+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c741")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:13.009+0000"),
          "time" : ISODate("2017-06-27T10:46:13.010+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c740")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:13.510+0000"),
          "time" : ISODate("2017-06-27T10:46:13.510+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c73f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:14.010+0000"),
          "time" : ISODate("2017-06-27T10:46:14.012+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c73e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:14.512+0000"),
          "time" : ISODate("2017-06-27T10:46:14.515+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c73d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:15.015+0000"),
          "time" : ISODate("2017-06-27T10:46:15.018+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c73c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:15.518+0000"),
          "time" : ISODate("2017-06-27T10:46:15.518+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c73b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:16.018+0000"),
          "time" : ISODate("2017-06-27T10:46:16.020+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c73a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:16.520+0000"),
          "time" : ISODate("2017-06-27T10:46:16.520+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c739")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:17.020+0000"),
          "time" : ISODate("2017-06-27T10:46:17.023+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c738")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:17.523+0000"),
          "time" : ISODate("2017-06-27T10:46:17.529+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c737")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:18.029+0000"),
          "time" : ISODate("2017-06-27T10:46:18.029+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c736")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:18.529+0000"),
          "time" : ISODate("2017-06-27T10:46:18.530+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c735")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:19.030+0000"),
          "time" : ISODate("2017-06-27T10:46:19.034+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c734")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:19.534+0000"),
          "time" : ISODate("2017-06-27T10:46:19.535+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c733")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:20.035+0000"),
          "time" : ISODate("2017-06-27T10:46:20.036+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c732")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:20.536+0000"),
          "time" : ISODate("2017-06-27T10:46:20.538+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c731")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:21.038+0000"),
          "time" : ISODate("2017-06-27T10:46:21.043+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c730")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:21.543+0000"),
          "time" : ISODate("2017-06-27T10:46:21.545+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c72f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:22.045+0000"),
          "time" : ISODate("2017-06-27T10:46:22.051+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c72e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:22.551+0000"),
          "time" : ISODate("2017-06-27T10:46:22.552+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c72d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:23.052+0000"),
          "time" : ISODate("2017-06-27T10:46:23.057+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c72c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:23.557+0000"),
          "time" : ISODate("2017-06-27T10:46:23.558+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c72b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:24.058+0000"),
          "time" : ISODate("2017-06-27T10:46:24.058+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c72a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:24.558+0000"),
          "time" : ISODate("2017-06-27T10:46:24.560+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c729")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:25.060+0000"),
          "time" : ISODate("2017-06-27T10:46:25.064+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c728")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:25.564+0000"),
          "time" : ISODate("2017-06-27T10:46:25.564+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c727")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:26.064+0000"),
          "time" : ISODate("2017-06-27T10:46:26.066+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c726")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:26.566+0000"),
          "time" : ISODate("2017-06-27T10:46:26.569+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c725")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:27.069+0000"),
          "time" : ISODate("2017-06-27T10:46:27.074+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c724")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:27.574+0000"),
          "time" : ISODate("2017-06-27T10:46:27.575+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c723")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:28.075+0000"),
          "time" : ISODate("2017-06-27T10:46:28.079+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c722")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:28.579+0000"),
          "time" : ISODate("2017-06-27T10:46:28.583+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c721")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:29.083+0000"),
          "time" : ISODate("2017-06-27T10:46:29.083+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c720")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:29.583+0000"),
          "time" : ISODate("2017-06-27T10:46:29.583+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c71f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:30.083+0000"),
          "time" : ISODate("2017-06-27T10:46:30.086+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c71e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:30.586+0000"),
          "time" : ISODate("2017-06-27T10:46:30.587+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c71d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:31.087+0000"),
          "time" : ISODate("2017-06-27T10:46:31.089+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c71c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:31.589+0000"),
          "time" : ISODate("2017-06-27T10:46:31.593+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c71b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:32.093+0000"),
          "time" : ISODate("2017-06-27T10:46:32.095+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c71a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:32.595+0000"),
          "time" : ISODate("2017-06-27T10:46:32.600+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c719")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:33.100+0000"),
          "time" : ISODate("2017-06-27T10:46:33.103+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c718")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:33.603+0000"),
          "time" : ISODate("2017-06-27T10:46:33.603+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c717")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:34.103+0000"),
          "time" : ISODate("2017-06-27T10:46:34.104+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c716")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:34.604+0000"),
          "time" : ISODate("2017-06-27T10:46:34.605+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c715")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:35.105+0000"),
          "time" : ISODate("2017-06-27T10:46:35.108+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c714")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:35.608+0000"),
          "time" : ISODate("2017-06-27T10:46:35.613+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c713")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:36.113+0000"),
          "time" : ISODate("2017-06-27T10:46:36.114+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c712")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:36.614+0000"),
          "time" : ISODate("2017-06-27T10:46:36.617+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c711")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:37.117+0000"),
          "time" : ISODate("2017-06-27T10:46:37.121+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c710")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:37.621+0000"),
          "time" : ISODate("2017-06-27T10:46:37.623+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c70f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:38.123+0000"),
          "time" : ISODate("2017-06-27T10:46:38.123+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c70e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:38.623+0000"),
          "time" : ISODate("2017-06-27T10:46:38.624+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c70d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:39.124+0000"),
          "time" : ISODate("2017-06-27T10:46:39.126+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c70c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:39.626+0000"),
          "time" : ISODate("2017-06-27T10:46:39.628+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c70b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:40.128+0000"),
          "time" : ISODate("2017-06-27T10:46:40.132+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c70a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:40.632+0000"),
          "time" : ISODate("2017-06-27T10:46:40.632+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c709")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:41.132+0000"),
          "time" : ISODate("2017-06-27T10:46:41.137+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c708")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:41.637+0000"),
          "time" : ISODate("2017-06-27T10:46:41.641+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c707")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:42.141+0000"),
          "time" : ISODate("2017-06-27T10:46:42.143+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c706")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:42.643+0000"),
          "time" : ISODate("2017-06-27T10:46:42.649+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c705")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:43.149+0000"),
          "time" : ISODate("2017-06-27T10:46:43.154+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c704")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:43.654+0000"),
          "time" : ISODate("2017-06-27T10:46:43.654+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c703")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:44.154+0000"),
          "time" : ISODate("2017-06-27T10:46:44.154+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c702")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:44.654+0000"),
          "time" : ISODate("2017-06-27T10:46:44.655+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c701")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:45.155+0000"),
          "time" : ISODate("2017-06-27T10:46:45.156+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c700")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:45.656+0000"),
          "time" : ISODate("2017-06-27T10:46:45.657+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ff")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:46.157+0000"),
          "time" : ISODate("2017-06-27T10:46:46.157+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6fe")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:46.657+0000"),
          "time" : ISODate("2017-06-27T10:46:46.658+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6fd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:47.158+0000"),
          "time" : ISODate("2017-06-27T10:46:47.158+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6fc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:47.658+0000"),
          "time" : ISODate("2017-06-27T10:46:47.663+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6fb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:48.163+0000"),
          "time" : ISODate("2017-06-27T10:46:48.163+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6fa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:48.663+0000"),
          "time" : ISODate("2017-06-27T10:46:48.663+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:49.163+0000"),
          "time" : ISODate("2017-06-27T10:46:49.166+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:49.666+0000"),
          "time" : ISODate("2017-06-27T10:46:49.667+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:50.167+0000"),
          "time" : ISODate("2017-06-27T10:46:50.168+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:50.668+0000"),
          "time" : ISODate("2017-06-27T10:46:50.670+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:51.170+0000"),
          "time" : ISODate("2017-06-27T10:46:51.172+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:51.672+0000"),
          "time" : ISODate("2017-06-27T10:46:51.673+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:52.173+0000"),
          "time" : ISODate("2017-06-27T10:46:52.173+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:52.673+0000"),
          "time" : ISODate("2017-06-27T10:46:52.677+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:53.177+0000"),
          "time" : ISODate("2017-06-27T10:46:53.179+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6f0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:53.679+0000"),
          "time" : ISODate("2017-06-27T10:46:53.680+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ef")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:54.180+0000"),
          "time" : ISODate("2017-06-27T10:46:54.181+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ee")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:54.681+0000"),
          "time" : ISODate("2017-06-27T10:46:54.683+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ed")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:55.183+0000"),
          "time" : ISODate("2017-06-27T10:46:55.183+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ec")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:55.683+0000"),
          "time" : ISODate("2017-06-27T10:46:55.684+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6eb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:56.184+0000"),
          "time" : ISODate("2017-06-27T10:46:56.185+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ea")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:56.685+0000"),
          "time" : ISODate("2017-06-27T10:46:56.690+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:57.190+0000"),
          "time" : ISODate("2017-06-27T10:46:57.190+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:57.690+0000"),
          "time" : ISODate("2017-06-27T10:46:57.696+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:58.196+0000"),
          "time" : ISODate("2017-06-27T10:46:58.201+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:58.701+0000"),
          "time" : ISODate("2017-06-27T10:46:58.702+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:59.202+0000"),
          "time" : ISODate("2017-06-27T10:46:59.202+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:46:59.702+0000"),
          "time" : ISODate("2017-06-27T10:46:59.703+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:00.203+0000"),
          "time" : ISODate("2017-06-27T10:47:00.207+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:00.707+0000"),
          "time" : ISODate("2017-06-27T10:47:00.707+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:01.207+0000"),
          "time" : ISODate("2017-06-27T10:47:01.212+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6e0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:01.712+0000"),
          "time" : ISODate("2017-06-27T10:47:01.712+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6df")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:02.212+0000"),
          "time" : ISODate("2017-06-27T10:47:02.212+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6de")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:02.712+0000"),
          "time" : ISODate("2017-06-27T10:47:02.714+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6dd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:03.214+0000"),
          "time" : ISODate("2017-06-27T10:47:03.214+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6dc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:03.714+0000"),
          "time" : ISODate("2017-06-27T10:47:03.718+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6db")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:04.218+0000"),
          "time" : ISODate("2017-06-27T10:47:04.222+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6da")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:04.722+0000"),
          "time" : ISODate("2017-06-27T10:47:04.723+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:05.223+0000"),
          "time" : ISODate("2017-06-27T10:47:05.223+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:05.723+0000"),
          "time" : ISODate("2017-06-27T10:47:05.724+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:06.224+0000"),
          "time" : ISODate("2017-06-27T10:47:06.226+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:06.726+0000"),
          "time" : ISODate("2017-06-27T10:47:06.727+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:07.227+0000"),
          "time" : ISODate("2017-06-27T10:47:07.227+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:07.727+0000"),
          "time" : ISODate("2017-06-27T10:47:07.728+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:08.228+0000"),
          "time" : ISODate("2017-06-27T10:47:08.230+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:08.730+0000"),
          "time" : ISODate("2017-06-27T10:47:08.734+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:09.234+0000"),
          "time" : ISODate("2017-06-27T10:47:09.234+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6d0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:09.734+0000"),
          "time" : ISODate("2017-06-27T10:47:09.738+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6cf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:10.238+0000"),
          "time" : ISODate("2017-06-27T10:47:10.239+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ce")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:10.739+0000"),
          "time" : ISODate("2017-06-27T10:47:10.742+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6cd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:11.242+0000"),
          "time" : ISODate("2017-06-27T10:47:11.244+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6cc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:11.744+0000"),
          "time" : ISODate("2017-06-27T10:47:11.745+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6cb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:12.245+0000"),
          "time" : ISODate("2017-06-27T10:47:12.245+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ca")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:12.745+0000"),
          "time" : ISODate("2017-06-27T10:47:12.745+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:13.245+0000"),
          "time" : ISODate("2017-06-27T10:47:13.246+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:13.746+0000"),
          "time" : ISODate("2017-06-27T10:47:13.750+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:14.250+0000"),
          "time" : ISODate("2017-06-27T10:47:14.250+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:14.750+0000"),
          "time" : ISODate("2017-06-27T10:47:14.753+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:15.253+0000"),
          "time" : ISODate("2017-06-27T10:47:15.253+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:15.753+0000"),
          "time" : ISODate("2017-06-27T10:47:15.753+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:16.253+0000"),
          "time" : ISODate("2017-06-27T10:47:16.259+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:16.759+0000"),
          "time" : ISODate("2017-06-27T10:47:16.759+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:17.259+0000"),
          "time" : ISODate("2017-06-27T10:47:17.262+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6c0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:17.762+0000"),
          "time" : ISODate("2017-06-27T10:47:17.765+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6bf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:18.265+0000"),
          "time" : ISODate("2017-06-27T10:47:18.265+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6be")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:18.765+0000"),
          "time" : ISODate("2017-06-27T10:47:18.766+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6bd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:19.266+0000"),
          "time" : ISODate("2017-06-27T10:47:19.266+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6bc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:19.766+0000"),
          "time" : ISODate("2017-06-27T10:47:19.771+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6bb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:20.271+0000"),
          "time" : ISODate("2017-06-27T10:47:20.273+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ba")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:20.773+0000"),
          "time" : ISODate("2017-06-27T10:47:20.776+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:21.276+0000"),
          "time" : ISODate("2017-06-27T10:47:21.277+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:21.777+0000"),
          "time" : ISODate("2017-06-27T10:47:21.777+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:22.277+0000"),
          "time" : ISODate("2017-06-27T10:47:22.277+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:22.777+0000"),
          "time" : ISODate("2017-06-27T10:47:22.778+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:23.278+0000"),
          "time" : ISODate("2017-06-27T10:47:23.282+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:23.782+0000"),
          "time" : ISODate("2017-06-27T10:47:23.783+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:24.283+0000"),
          "time" : ISODate("2017-06-27T10:47:24.288+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:24.788+0000"),
          "time" : ISODate("2017-06-27T10:47:24.788+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:25.288+0000"),
          "time" : ISODate("2017-06-27T10:47:25.294+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6b0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:25.794+0000"),
          "time" : ISODate("2017-06-27T10:47:25.795+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6af")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:26.295+0000"),
          "time" : ISODate("2017-06-27T10:47:26.296+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ae")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:26.796+0000"),
          "time" : ISODate("2017-06-27T10:47:26.796+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ad")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:27.296+0000"),
          "time" : ISODate("2017-06-27T10:47:27.298+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ac")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:27.798+0000"),
          "time" : ISODate("2017-06-27T10:47:27.798+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6ab")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:28.298+0000"),
          "time" : ISODate("2017-06-27T10:47:28.302+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6aa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:28.802+0000"),
          "time" : ISODate("2017-06-27T10:47:28.802+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:29.302+0000"),
          "time" : ISODate("2017-06-27T10:47:29.303+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:29.803+0000"),
          "time" : ISODate("2017-06-27T10:47:29.804+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:30.304+0000"),
          "time" : ISODate("2017-06-27T10:47:30.308+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:30.808+0000"),
          "time" : ISODate("2017-06-27T10:47:30.810+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:31.310+0000"),
          "time" : ISODate("2017-06-27T10:47:31.313+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:31.813+0000"),
          "time" : ISODate("2017-06-27T10:47:31.814+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:32.314+0000"),
          "time" : ISODate("2017-06-27T10:47:32.317+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:32.817+0000"),
          "time" : ISODate("2017-06-27T10:47:32.817+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:33.317+0000"),
          "time" : ISODate("2017-06-27T10:47:33.319+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c6a0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:33.819+0000"),
          "time" : ISODate("2017-06-27T10:47:33.823+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c69f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:34.323+0000"),
          "time" : ISODate("2017-06-27T10:47:34.323+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c69e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:34.823+0000"),
          "time" : ISODate("2017-06-27T10:47:34.824+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c69d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:35.324+0000"),
          "time" : ISODate("2017-06-27T10:47:35.329+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c69c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:35.829+0000"),
          "time" : ISODate("2017-06-27T10:47:35.830+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c69b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:36.330+0000"),
          "time" : ISODate("2017-06-27T10:47:36.333+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c69a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:36.833+0000"),
          "time" : ISODate("2017-06-27T10:47:36.834+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c699")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:37.334+0000"),
          "time" : ISODate("2017-06-27T10:47:37.335+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c698")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:37.835+0000"),
          "time" : ISODate("2017-06-27T10:47:37.839+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c697")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:38.339+0000"),
          "time" : ISODate("2017-06-27T10:47:38.342+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c696")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:38.842+0000"),
          "time" : ISODate("2017-06-27T10:47:38.842+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c695")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:39.342+0000"),
          "time" : ISODate("2017-06-27T10:47:39.342+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c694")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:39.842+0000"),
          "time" : ISODate("2017-06-27T10:47:39.843+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c693")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:40.343+0000"),
          "time" : ISODate("2017-06-27T10:47:40.343+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c692")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:40.843+0000"),
          "time" : ISODate("2017-06-27T10:47:40.843+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c691")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:41.343+0000"),
          "time" : ISODate("2017-06-27T10:47:41.344+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c690")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:41.844+0000"),
          "time" : ISODate("2017-06-27T10:47:41.845+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c68f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:42.345+0000"),
          "time" : ISODate("2017-06-27T10:47:42.345+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c68e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:42.845+0000"),
          "time" : ISODate("2017-06-27T10:47:42.846+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c68d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:43.346+0000"),
          "time" : ISODate("2017-06-27T10:47:43.351+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c68c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:43.851+0000"),
          "time" : ISODate("2017-06-27T10:47:43.856+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c68b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:44.356+0000"),
          "time" : ISODate("2017-06-27T10:47:44.357+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c68a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:44.857+0000"),
          "time" : ISODate("2017-06-27T10:47:44.858+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c689")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:45.358+0000"),
          "time" : ISODate("2017-06-27T10:47:45.359+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c688")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:45.859+0000"),
          "time" : ISODate("2017-06-27T10:47:45.861+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c687")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:46.361+0000"),
          "time" : ISODate("2017-06-27T10:47:46.361+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c686")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:46.861+0000"),
          "time" : ISODate("2017-06-27T10:47:46.862+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c685")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:47.362+0000"),
          "time" : ISODate("2017-06-27T10:47:47.363+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c684")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:47.863+0000"),
          "time" : ISODate("2017-06-27T10:47:47.863+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c683")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:48.363+0000"),
          "time" : ISODate("2017-06-27T10:47:48.367+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c682")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:48.867+0000"),
          "time" : ISODate("2017-06-27T10:47:48.867+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c681")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:49.367+0000"),
          "time" : ISODate("2017-06-27T10:47:49.369+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c680")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:49.869+0000"),
          "time" : ISODate("2017-06-27T10:47:49.874+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c67f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:50.374+0000"),
          "time" : ISODate("2017-06-27T10:47:50.375+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c67e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:50.875+0000"),
          "time" : ISODate("2017-06-27T10:47:50.878+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c67d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:51.378+0000"),
          "time" : ISODate("2017-06-27T10:47:51.381+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c67c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:51.881+0000"),
          "time" : ISODate("2017-06-27T10:47:51.886+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c67b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:52.386+0000"),
          "time" : ISODate("2017-06-27T10:47:52.388+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c67a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:52.888+0000"),
          "time" : ISODate("2017-06-27T10:47:52.888+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c679")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:53.388+0000"),
          "time" : ISODate("2017-06-27T10:47:53.388+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c678")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:53.888+0000"),
          "time" : ISODate("2017-06-27T10:47:53.893+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c677")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:54.393+0000"),
          "time" : ISODate("2017-06-27T10:47:54.397+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c676")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:54.897+0000"),
          "time" : ISODate("2017-06-27T10:47:54.901+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c675")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:55.401+0000"),
          "time" : ISODate("2017-06-27T10:47:55.402+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c674")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:55.902+0000"),
          "time" : ISODate("2017-06-27T10:47:55.904+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c673")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:56.404+0000"),
          "time" : ISODate("2017-06-27T10:47:56.405+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c672")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:56.905+0000"),
          "time" : ISODate("2017-06-27T10:47:56.905+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c671")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:57.405+0000"),
          "time" : ISODate("2017-06-27T10:47:57.408+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c670")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:57.908+0000"),
          "time" : ISODate("2017-06-27T10:47:57.908+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c66f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:58.408+0000"),
          "time" : ISODate("2017-06-27T10:47:58.408+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c66e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:58.908+0000"),
          "time" : ISODate("2017-06-27T10:47:58.909+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c66d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:59.409+0000"),
          "time" : ISODate("2017-06-27T10:47:59.409+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c66c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:47:59.909+0000"),
          "time" : ISODate("2017-06-27T10:47:59.911+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c66b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:00.411+0000"),
          "time" : ISODate("2017-06-27T10:48:00.412+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c66a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:00.912+0000"),
          "time" : ISODate("2017-06-27T10:48:00.912+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c669")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:01.412+0000"),
          "time" : ISODate("2017-06-27T10:48:01.417+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c668")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:01.917+0000"),
          "time" : ISODate("2017-06-27T10:48:01.919+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c667")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:02.419+0000"),
          "time" : ISODate("2017-06-27T10:48:02.422+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c666")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:02.922+0000"),
          "time" : ISODate("2017-06-27T10:48:02.922+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c665")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:03.422+0000"),
          "time" : ISODate("2017-06-27T10:48:03.423+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c664")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:03.923+0000"),
          "time" : ISODate("2017-06-27T10:48:03.924+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c663")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:04.424+0000"),
          "time" : ISODate("2017-06-27T10:48:04.424+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c662")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:04.924+0000"),
          "time" : ISODate("2017-06-27T10:48:04.927+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c661")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:05.427+0000"),
          "time" : ISODate("2017-06-27T10:48:05.432+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c660")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:05.932+0000"),
          "time" : ISODate("2017-06-27T10:48:05.932+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c65f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:06.432+0000"),
          "time" : ISODate("2017-06-27T10:48:06.436+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c65e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:06.936+0000"),
          "time" : ISODate("2017-06-27T10:48:06.937+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c65d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:07.437+0000"),
          "time" : ISODate("2017-06-27T10:48:07.441+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c65c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:07.941+0000"),
          "time" : ISODate("2017-06-27T10:48:07.941+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c65b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:08.441+0000"),
          "time" : ISODate("2017-06-27T10:48:08.442+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c65a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:08.942+0000"),
          "time" : ISODate("2017-06-27T10:48:08.943+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c659")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:09.443+0000"),
          "time" : ISODate("2017-06-27T10:48:09.443+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c658")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:09.943+0000"),
          "time" : ISODate("2017-06-27T10:48:09.944+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c657")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:10.444+0000"),
          "time" : ISODate("2017-06-27T10:48:10.445+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c656")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:10.945+0000"),
          "time" : ISODate("2017-06-27T10:48:10.945+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c655")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:11.445+0000"),
          "time" : ISODate("2017-06-27T10:48:11.445+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c654")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:11.945+0000"),
          "time" : ISODate("2017-06-27T10:48:11.951+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c653")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:12.451+0000"),
          "time" : ISODate("2017-06-27T10:48:12.451+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c652")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:12.951+0000"),
          "time" : ISODate("2017-06-27T10:48:12.952+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c651")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:13.452+0000"),
          "time" : ISODate("2017-06-27T10:48:13.452+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c650")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:13.952+0000"),
          "time" : ISODate("2017-06-27T10:48:13.954+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c64f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:14.454+0000"),
          "time" : ISODate("2017-06-27T10:48:14.454+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c64e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:14.954+0000"),
          "time" : ISODate("2017-06-27T10:48:14.954+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c64d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:15.454+0000"),
          "time" : ISODate("2017-06-27T10:48:15.458+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c64c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:15.958+0000"),
          "time" : ISODate("2017-06-27T10:48:15.960+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c64b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:16.460+0000"),
          "time" : ISODate("2017-06-27T10:48:16.461+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c64a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:16.961+0000"),
          "time" : ISODate("2017-06-27T10:48:16.966+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c649")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:17.466+0000"),
          "time" : ISODate("2017-06-27T10:48:17.467+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c648")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:17.967+0000"),
          "time" : ISODate("2017-06-27T10:48:17.972+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c647")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:18.472+0000"),
          "time" : ISODate("2017-06-27T10:48:18.472+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c646")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:18.972+0000"),
          "time" : ISODate("2017-06-27T10:48:18.973+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c645")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:19.473+0000"),
          "time" : ISODate("2017-06-27T10:48:19.474+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c644")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:19.974+0000"),
          "time" : ISODate("2017-06-27T10:48:19.979+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c643")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:20.479+0000"),
          "time" : ISODate("2017-06-27T10:48:20.482+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c642")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:20.982+0000"),
          "time" : ISODate("2017-06-27T10:48:20.983+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c641")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:21.483+0000"),
          "time" : ISODate("2017-06-27T10:48:21.483+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c640")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:21.983+0000"),
          "time" : ISODate("2017-06-27T10:48:21.984+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c63f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:22.484+0000"),
          "time" : ISODate("2017-06-27T10:48:22.488+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c63e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:22.988+0000"),
          "time" : ISODate("2017-06-27T10:48:22.988+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c63d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:23.488+0000"),
          "time" : ISODate("2017-06-27T10:48:23.491+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c63c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:23.991+0000"),
          "time" : ISODate("2017-06-27T10:48:23.992+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c63b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:24.492+0000"),
          "time" : ISODate("2017-06-27T10:48:24.497+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c63a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:24.997+0000"),
          "time" : ISODate("2017-06-27T10:48:25.000+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c639")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:25.500+0000"),
          "time" : ISODate("2017-06-27T10:48:25.501+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c638")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:26.001+0000"),
          "time" : ISODate("2017-06-27T10:48:26.001+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c637")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:26.501+0000"),
          "time" : ISODate("2017-06-27T10:48:26.502+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c636")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:27.002+0000"),
          "time" : ISODate("2017-06-27T10:48:27.006+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c635")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:27.506+0000"),
          "time" : ISODate("2017-06-27T10:48:27.507+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c634")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:28.007+0000"),
          "time" : ISODate("2017-06-27T10:48:28.011+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c633")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:28.511+0000"),
          "time" : ISODate("2017-06-27T10:48:28.515+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c632")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:29.015+0000"),
          "time" : ISODate("2017-06-27T10:48:29.015+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c631")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:29.515+0000"),
          "time" : ISODate("2017-06-27T10:48:29.519+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c630")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:30.019+0000"),
          "time" : ISODate("2017-06-27T10:48:30.021+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c62f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:30.521+0000"),
          "time" : ISODate("2017-06-27T10:48:30.523+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c62e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:31.023+0000"),
          "time" : ISODate("2017-06-27T10:48:31.025+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c62d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:31.525+0000"),
          "time" : ISODate("2017-06-27T10:48:31.525+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c62c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:32.025+0000"),
          "time" : ISODate("2017-06-27T10:48:32.029+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c62b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:32.529+0000"),
          "time" : ISODate("2017-06-27T10:48:32.531+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c62a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:33.031+0000"),
          "time" : ISODate("2017-06-27T10:48:33.033+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c629")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:33.533+0000"),
          "time" : ISODate("2017-06-27T10:48:33.533+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c628")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:34.033+0000"),
          "time" : ISODate("2017-06-27T10:48:34.037+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c627")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:34.537+0000"),
          "time" : ISODate("2017-06-27T10:48:34.541+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c626")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:35.041+0000"),
          "time" : ISODate("2017-06-27T10:48:35.042+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c625")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:35.542+0000"),
          "time" : ISODate("2017-06-27T10:48:35.542+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c624")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:36.042+0000"),
          "time" : ISODate("2017-06-27T10:48:36.042+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c623")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:36.542+0000"),
          "time" : ISODate("2017-06-27T10:48:36.546+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c622")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:37.046+0000"),
          "time" : ISODate("2017-06-27T10:48:37.050+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c621")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:37.550+0000"),
          "time" : ISODate("2017-06-27T10:48:37.552+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c620")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:38.052+0000"),
          "time" : ISODate("2017-06-27T10:48:38.052+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c61f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:38.552+0000"),
          "time" : ISODate("2017-06-27T10:48:38.553+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c61e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:39.053+0000"),
          "time" : ISODate("2017-06-27T10:48:39.054+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c61d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:39.554+0000"),
          "time" : ISODate("2017-06-27T10:48:39.555+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c61c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:40.055+0000"),
          "time" : ISODate("2017-06-27T10:48:40.057+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c61b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:40.557+0000"),
          "time" : ISODate("2017-06-27T10:48:40.558+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c61a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:41.058+0000"),
          "time" : ISODate("2017-06-27T10:48:41.061+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c619")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:41.561+0000"),
          "time" : ISODate("2017-06-27T10:48:41.562+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c618")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:42.062+0000"),
          "time" : ISODate("2017-06-27T10:48:42.064+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c617")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:42.564+0000"),
          "time" : ISODate("2017-06-27T10:48:42.568+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c616")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:43.068+0000"),
          "time" : ISODate("2017-06-27T10:48:43.073+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c615")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:43.573+0000"),
          "time" : ISODate("2017-06-27T10:48:43.575+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c614")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:44.075+0000"),
          "time" : ISODate("2017-06-27T10:48:44.080+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c613")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:44.580+0000"),
          "time" : ISODate("2017-06-27T10:48:44.583+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c612")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:45.083+0000"),
          "time" : ISODate("2017-06-27T10:48:45.085+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c611")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:45.585+0000"),
          "time" : ISODate("2017-06-27T10:48:45.588+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c610")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:46.088+0000"),
          "time" : ISODate("2017-06-27T10:48:46.088+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c60f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:46.588+0000"),
          "time" : ISODate("2017-06-27T10:48:46.589+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c60e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:47.089+0000"),
          "time" : ISODate("2017-06-27T10:48:47.089+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c60d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:47.589+0000"),
          "time" : ISODate("2017-06-27T10:48:47.591+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c60c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:48.091+0000"),
          "time" : ISODate("2017-06-27T10:48:48.095+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c60b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:48.595+0000"),
          "time" : ISODate("2017-06-27T10:48:48.595+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c60a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:49.095+0000"),
          "time" : ISODate("2017-06-27T10:48:49.097+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c609")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:49.597+0000"),
          "time" : ISODate("2017-06-27T10:48:49.598+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c608")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:50.098+0000"),
          "time" : ISODate("2017-06-27T10:48:50.101+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c607")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:50.601+0000"),
          "time" : ISODate("2017-06-27T10:48:50.604+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c606")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:51.104+0000"),
          "time" : ISODate("2017-06-27T10:48:51.108+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c605")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:51.608+0000"),
          "time" : ISODate("2017-06-27T10:48:51.612+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c604")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:52.112+0000"),
          "time" : ISODate("2017-06-27T10:48:52.113+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c603")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:52.613+0000"),
          "time" : ISODate("2017-06-27T10:48:52.616+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c602")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:53.116+0000"),
          "time" : ISODate("2017-06-27T10:48:53.117+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c601")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:53.617+0000"),
          "time" : ISODate("2017-06-27T10:48:53.621+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c600")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:54.121+0000"),
          "time" : ISODate("2017-06-27T10:48:54.126+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ff")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:54.626+0000"),
          "time" : ISODate("2017-06-27T10:48:54.630+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5fe")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:55.130+0000"),
          "time" : ISODate("2017-06-27T10:48:55.130+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5fd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:55.630+0000"),
          "time" : ISODate("2017-06-27T10:48:55.631+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5fc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:56.131+0000"),
          "time" : ISODate("2017-06-27T10:48:56.133+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5fb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:56.633+0000"),
          "time" : ISODate("2017-06-27T10:48:56.633+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5fa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:57.133+0000"),
          "time" : ISODate("2017-06-27T10:48:57.137+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:57.637+0000"),
          "time" : ISODate("2017-06-27T10:48:57.638+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:58.138+0000"),
          "time" : ISODate("2017-06-27T10:48:58.141+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:58.641+0000"),
          "time" : ISODate("2017-06-27T10:48:58.642+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:59.142+0000"),
          "time" : ISODate("2017-06-27T10:48:59.142+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:48:59.642+0000"),
          "time" : ISODate("2017-06-27T10:48:59.645+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:00.145+0000"),
          "time" : ISODate("2017-06-27T10:49:00.147+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:00.647+0000"),
          "time" : ISODate("2017-06-27T10:49:00.647+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:01.147+0000"),
          "time" : ISODate("2017-06-27T10:49:01.147+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:01.647+0000"),
          "time" : ISODate("2017-06-27T10:49:01.652+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5f0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:02.152+0000"),
          "time" : ISODate("2017-06-27T10:49:02.153+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ef")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:02.653+0000"),
          "time" : ISODate("2017-06-27T10:49:02.654+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ee")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:03.154+0000"),
          "time" : ISODate("2017-06-27T10:49:03.155+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ed")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:03.655+0000"),
          "time" : ISODate("2017-06-27T10:49:03.659+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ec")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:04.159+0000"),
          "time" : ISODate("2017-06-27T10:49:04.164+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5eb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:04.664+0000"),
          "time" : ISODate("2017-06-27T10:49:04.670+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ea")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:05.170+0000"),
          "time" : ISODate("2017-06-27T10:49:05.171+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:05.671+0000"),
          "time" : ISODate("2017-06-27T10:49:05.675+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:06.175+0000"),
          "time" : ISODate("2017-06-27T10:49:06.179+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:06.679+0000"),
          "time" : ISODate("2017-06-27T10:49:06.679+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:07.179+0000"),
          "time" : ISODate("2017-06-27T10:49:07.180+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:07.680+0000"),
          "time" : ISODate("2017-06-27T10:49:07.681+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:08.181+0000"),
          "time" : ISODate("2017-06-27T10:49:08.181+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:08.681+0000"),
          "time" : ISODate("2017-06-27T10:49:08.681+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:09.181+0000"),
          "time" : ISODate("2017-06-27T10:49:09.183+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:09.683+0000"),
          "time" : ISODate("2017-06-27T10:49:09.683+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5e0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:10.183+0000"),
          "time" : ISODate("2017-06-27T10:49:10.188+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5df")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:10.688+0000"),
          "time" : ISODate("2017-06-27T10:49:10.691+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5de")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:11.191+0000"),
          "time" : ISODate("2017-06-27T10:49:11.195+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5dd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:11.695+0000"),
          "time" : ISODate("2017-06-27T10:49:11.696+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5dc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:12.196+0000"),
          "time" : ISODate("2017-06-27T10:49:12.201+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5db")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:12.701+0000"),
          "time" : ISODate("2017-06-27T10:49:12.706+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5da")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:13.206+0000"),
          "time" : ISODate("2017-06-27T10:49:13.208+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:13.708+0000"),
          "time" : ISODate("2017-06-27T10:49:13.708+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:14.208+0000"),
          "time" : ISODate("2017-06-27T10:49:14.209+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:14.709+0000"),
          "time" : ISODate("2017-06-27T10:49:14.714+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:15.214+0000"),
          "time" : ISODate("2017-06-27T10:49:15.214+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:15.714+0000"),
          "time" : ISODate("2017-06-27T10:49:15.717+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:16.217+0000"),
          "time" : ISODate("2017-06-27T10:49:16.220+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:16.720+0000"),
          "time" : ISODate("2017-06-27T10:49:16.721+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:17.221+0000"),
          "time" : ISODate("2017-06-27T10:49:17.221+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:17.721+0000"),
          "time" : ISODate("2017-06-27T10:49:17.727+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5d0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:18.227+0000"),
          "time" : ISODate("2017-06-27T10:49:18.227+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5cf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:18.727+0000"),
          "time" : ISODate("2017-06-27T10:49:18.731+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ce")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:19.231+0000"),
          "time" : ISODate("2017-06-27T10:49:19.232+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5cd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:19.732+0000"),
          "time" : ISODate("2017-06-27T10:49:19.734+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5cc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:20.234+0000"),
          "time" : ISODate("2017-06-27T10:49:20.236+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5cb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:20.736+0000"),
          "time" : ISODate("2017-06-27T10:49:20.740+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ca")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:21.240+0000"),
          "time" : ISODate("2017-06-27T10:49:21.241+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:21.741+0000"),
          "time" : ISODate("2017-06-27T10:49:21.741+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:22.241+0000"),
          "time" : ISODate("2017-06-27T10:49:22.243+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:22.743+0000"),
          "time" : ISODate("2017-06-27T10:49:22.745+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:23.245+0000"),
          "time" : ISODate("2017-06-27T10:49:23.245+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:23.745+0000"),
          "time" : ISODate("2017-06-27T10:49:23.749+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:24.249+0000"),
          "time" : ISODate("2017-06-27T10:49:24.249+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:24.749+0000"),
          "time" : ISODate("2017-06-27T10:49:24.750+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:25.250+0000"),
          "time" : ISODate("2017-06-27T10:49:25.253+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:25.753+0000"),
          "time" : ISODate("2017-06-27T10:49:25.754+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5c0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:26.254+0000"),
          "time" : ISODate("2017-06-27T10:49:26.254+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5bf")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:26.754+0000"),
          "time" : ISODate("2017-06-27T10:49:26.755+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5be")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:27.255+0000"),
          "time" : ISODate("2017-06-27T10:49:27.257+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5bd")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:27.757+0000"),
          "time" : ISODate("2017-06-27T10:49:27.760+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5bc")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:28.260+0000"),
          "time" : ISODate("2017-06-27T10:49:28.261+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5bb")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:28.761+0000"),
          "time" : ISODate("2017-06-27T10:49:28.761+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ba")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:29.261+0000"),
          "time" : ISODate("2017-06-27T10:49:29.262+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:29.762+0000"),
          "time" : ISODate("2017-06-27T10:49:29.764+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:30.264+0000"),
          "time" : ISODate("2017-06-27T10:49:30.269+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:30.769+0000"),
          "time" : ISODate("2017-06-27T10:49:30.770+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:31.270+0000"),
          "time" : ISODate("2017-06-27T10:49:31.270+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:31.770+0000"),
          "time" : ISODate("2017-06-27T10:49:31.773+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:32.273+0000"),
          "time" : ISODate("2017-06-27T10:49:32.274+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:32.774+0000"),
          "time" : ISODate("2017-06-27T10:49:32.777+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:33.277+0000"),
          "time" : ISODate("2017-06-27T10:49:33.280+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:33.780+0000"),
          "time" : ISODate("2017-06-27T10:49:33.784+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5b0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:34.284+0000"),
          "time" : ISODate("2017-06-27T10:49:34.286+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5af")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:34.786+0000"),
          "time" : ISODate("2017-06-27T10:49:34.790+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ae")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:35.290+0000"),
          "time" : ISODate("2017-06-27T10:49:35.292+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ad")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:35.792+0000"),
          "time" : ISODate("2017-06-27T10:49:35.793+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ac")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:36.293+0000"),
          "time" : ISODate("2017-06-27T10:49:36.294+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5ab")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:36.794+0000"),
          "time" : ISODate("2017-06-27T10:49:36.794+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5aa")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:37.294+0000"),
          "time" : ISODate("2017-06-27T10:49:37.298+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a9")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:37.798+0000"),
          "time" : ISODate("2017-06-27T10:49:37.799+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a8")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:38.299+0000"),
          "time" : ISODate("2017-06-27T10:49:38.300+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a7")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:38.800+0000"),
          "time" : ISODate("2017-06-27T10:49:38.805+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a6")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:39.305+0000"),
          "time" : ISODate("2017-06-27T10:49:39.308+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a5")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:39.808+0000"),
          "time" : ISODate("2017-06-27T10:49:39.812+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a4")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:40.312+0000"),
          "time" : ISODate("2017-06-27T10:49:40.312+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a3")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:40.812+0000"),
          "time" : ISODate("2017-06-27T10:49:40.813+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a2")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:41.313+0000"),
          "time" : ISODate("2017-06-27T10:49:41.313+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a1")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:41.813+0000"),
          "time" : ISODate("2017-06-27T10:49:41.813+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c5a0")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:42.313+0000"),
          "time" : ISODate("2017-06-27T10:49:42.314+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c59f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:42.814+0000"),
          "time" : ISODate("2017-06-27T10:49:42.818+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c59e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:43.318+0000"),
          "time" : ISODate("2017-06-27T10:49:43.318+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c59d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:43.818+0000"),
          "time" : ISODate("2017-06-27T10:49:43.820+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c59c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:44.320+0000"),
          "time" : ISODate("2017-06-27T10:49:44.322+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c59b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:44.822+0000"),
          "time" : ISODate("2017-06-27T10:49:44.823+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c59a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:45.323+0000"),
          "time" : ISODate("2017-06-27T10:49:45.328+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c599")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:45.828+0000"),
          "time" : ISODate("2017-06-27T10:49:45.832+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c598")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:46.332+0000"),
          "time" : ISODate("2017-06-27T10:49:46.333+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c597")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:46.833+0000"),
          "time" : ISODate("2017-06-27T10:49:46.834+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c596")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:47.334+0000"),
          "time" : ISODate("2017-06-27T10:49:47.337+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c595")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:47.837+0000"),
          "time" : ISODate("2017-06-27T10:49:47.841+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c594")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:48.341+0000"),
          "time" : ISODate("2017-06-27T10:49:48.341+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c593")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:48.841+0000"),
          "time" : ISODate("2017-06-27T10:49:48.842+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c592")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:49.342+0000"),
          "time" : ISODate("2017-06-27T10:49:49.342+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c591")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:49.842+0000"),
          "time" : ISODate("2017-06-27T10:49:49.843+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c590")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:50.343+0000"),
          "time" : ISODate("2017-06-27T10:49:50.343+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c58f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:50.843+0000"),
          "time" : ISODate("2017-06-27T10:49:50.843+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c58e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:51.343+0000"),
          "time" : ISODate("2017-06-27T10:49:51.346+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c58d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:51.846+0000"),
          "time" : ISODate("2017-06-27T10:49:51.851+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c58c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:52.351+0000"),
          "time" : ISODate("2017-06-27T10:49:52.352+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c58b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:52.852+0000"),
          "time" : ISODate("2017-06-27T10:49:52.852+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c58a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:53.352+0000"),
          "time" : ISODate("2017-06-27T10:49:53.353+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c589")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:53.853+0000"),
          "time" : ISODate("2017-06-27T10:49:53.858+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c588")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:54.358+0000"),
          "time" : ISODate("2017-06-27T10:49:54.359+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c587")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:54.859+0000"),
          "time" : ISODate("2017-06-27T10:49:54.860+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c586")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:55.360+0000"),
          "time" : ISODate("2017-06-27T10:49:55.365+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c585")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:55.865+0000"),
          "time" : ISODate("2017-06-27T10:49:55.867+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c584")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:56.367+0000"),
          "time" : ISODate("2017-06-27T10:49:56.371+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c583")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:56.871+0000"),
          "time" : ISODate("2017-06-27T10:49:56.871+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c582")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:57.371+0000"),
          "time" : ISODate("2017-06-27T10:49:57.372+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c581")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:57.872+0000"),
          "time" : ISODate("2017-06-27T10:49:57.872+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c580")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:58.372+0000"),
          "time" : ISODate("2017-06-27T10:49:58.376+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c57f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:58.876+0000"),
          "time" : ISODate("2017-06-27T10:49:58.879+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c57e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:59.379+0000"),
          "time" : ISODate("2017-06-27T10:49:59.380+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c57d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:49:59.880+0000"),
          "time" : ISODate("2017-06-27T10:49:59.886+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c57c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:00.386+0000"),
          "time" : ISODate("2017-06-27T10:50:00.389+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c57b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:00.889+0000"),
          "time" : ISODate("2017-06-27T10:50:00.892+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c57a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:01.392+0000"),
          "time" : ISODate("2017-06-27T10:50:01.397+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c579")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:01.897+0000"),
          "time" : ISODate("2017-06-27T10:50:01.900+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c578")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:02.400+0000"),
          "time" : ISODate("2017-06-27T10:50:02.404+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c577")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:02.904+0000"),
          "time" : ISODate("2017-06-27T10:50:02.905+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c576")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:03.405+0000"),
          "time" : ISODate("2017-06-27T10:50:03.406+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c575")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:03.906+0000"),
          "time" : ISODate("2017-06-27T10:50:03.906+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c574")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:04.406+0000"),
          "time" : ISODate("2017-06-27T10:50:04.410+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c573")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:04.910+0000"),
          "time" : ISODate("2017-06-27T10:50:04.915+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c572")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:05.415+0000"),
          "time" : ISODate("2017-06-27T10:50:05.420+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c571")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:05.920+0000"),
          "time" : ISODate("2017-06-27T10:50:05.922+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c570")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:06.422+0000"),
          "time" : ISODate("2017-06-27T10:50:06.422+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c56f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:06.922+0000"),
          "time" : ISODate("2017-06-27T10:50:06.923+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c56e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:07.423+0000"),
          "time" : ISODate("2017-06-27T10:50:07.426+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c56d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:07.926+0000"),
          "time" : ISODate("2017-06-27T10:50:07.927+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c56c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:08.427+0000"),
          "time" : ISODate("2017-06-27T10:50:08.427+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c56b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:08.927+0000"),
          "time" : ISODate("2017-06-27T10:50:08.928+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c56a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:09.428+0000"),
          "time" : ISODate("2017-06-27T10:50:09.428+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c569")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:09.928+0000"),
          "time" : ISODate("2017-06-27T10:50:09.928+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c568")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:10.428+0000"),
          "time" : ISODate("2017-06-27T10:50:10.433+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c567")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:10.933+0000"),
          "time" : ISODate("2017-06-27T10:50:10.937+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c566")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:11.437+0000"),
          "time" : ISODate("2017-06-27T10:50:11.441+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c565")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:11.941+0000"),
          "time" : ISODate("2017-06-27T10:50:11.946+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c564")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:12.446+0000"),
          "time" : ISODate("2017-06-27T10:50:12.449+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c563")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:12.949+0000"),
          "time" : ISODate("2017-06-27T10:50:12.949+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c562")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:13.449+0000"),
          "time" : ISODate("2017-06-27T10:50:13.449+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c561")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:13.949+0000"),
          "time" : ISODate("2017-06-27T10:50:13.952+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c560")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:14.452+0000"),
          "time" : ISODate("2017-06-27T10:50:14.455+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c55f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:14.955+0000"),
          "time" : ISODate("2017-06-27T10:50:14.956+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c55e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:15.456+0000"),
          "time" : ISODate("2017-06-27T10:50:15.459+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c55d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:15.959+0000"),
          "time" : ISODate("2017-06-27T10:50:15.959+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c55c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:16.459+0000"),
          "time" : ISODate("2017-06-27T10:50:16.460+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c55b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:16.960+0000"),
          "time" : ISODate("2017-06-27T10:50:16.964+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c55a")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:17.464+0000"),
          "time" : ISODate("2017-06-27T10:50:17.464+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c559")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:17.964+0000"),
          "time" : ISODate("2017-06-27T10:50:17.964+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c558")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:18.464+0000"),
          "time" : ISODate("2017-06-27T10:50:18.468+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c557")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:18.968+0000"),
          "time" : ISODate("2017-06-27T10:50:18.974+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c556")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:19.474+0000"),
          "time" : ISODate("2017-06-27T10:50:19.474+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c555")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:19.974+0000"),
          "time" : ISODate("2017-06-27T10:50:19.974+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c554")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:20.474+0000"),
          "time" : ISODate("2017-06-27T10:50:20.474+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c553")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:20.974+0000"),
          "time" : ISODate("2017-06-27T10:50:20.978+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c552")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:21.478+0000"),
          "time" : ISODate("2017-06-27T10:50:21.478+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c551")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:21.978+0000"),
          "time" : ISODate("2017-06-27T10:50:21.979+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c550")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:22.479+0000"),
          "time" : ISODate("2017-06-27T10:50:22.480+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c54f")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:22.980+0000"),
          "time" : ISODate("2017-06-27T10:50:22.980+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c54e")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:23.480+0000"),
          "time" : ISODate("2017-06-27T10:50:23.481+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c54d")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:23.981+0000"),
          "time" : ISODate("2017-06-27T10:50:23.981+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c54c")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:24.481+0000"),
          "time" : ISODate("2017-06-27T10:50:24.483+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c54b")
        },
        {
          "plannedTime" : ISODate("2017-06-27T10:50:24.983+0000"),
          "time" : ISODate("2017-06-27T10:50:24.986+0000"),
          "_id" : ObjectId("595240bb7c446a27f654c54a")
        }
      ]
    },
    "__v" : NumberInt(0)
  }];

var timeStep = 500;
var treshold = 10;

var aggregate = {
  correct: 0,
  incorrect: 0,
  totalTime: 0
};

_.forEach(raw, function(entry) {

  if(entry.benchmarkData.sessionData.length > 0) {
    aggregate.totalTime += (entry.benchmarkData.sessionData[entry.benchmarkData.sessionData.length - 1].time.getTime() - entry.benchmarkData.sessionData[0].time.getTime());
  }

  _.forEach(entry.benchmarkData.sessionData, function(sessionEntry) {
    if(Math.abs(sessionEntry.time.getTime() - sessionEntry.plannedTime.getTime()) < treshold) {
      aggregate.correct++;
    } else {
      aggregate.incorrect++;
    }
  });
});

console.log('Total time: ' + aggregate.totalTime + 'ms, potential steps: ' + (aggregate.totalTime / timeStep) + ' actual steps: ' + (aggregate.correct + aggregate.incorrect) + '(' + (aggregate.correct + aggregate.incorrect) / (aggregate.totalTime / timeStep) * 100 + ')% correct: ' + aggregate.correct + ' incorrect: ' + aggregate.incorrect);

var probabilities = {
  idle: 1 - (aggregate.correct + aggregate.incorrect) / (aggregate.totalTime / timeStep),
  participate:  (aggregate.correct + aggregate.incorrect) / (aggregate.totalTime / timeStep),
  partAndCommitment: (aggregate.correct) / (aggregate.totalTime / timeStep),
  partAndStarvation: (aggregate.incorrect) / (aggregate.totalTime / timeStep)
};

console.log(JSON.stringify(probabilities, null, 2));


/*
function execute() {
  console.log('Calculating statistics');
  AnalyticEntry.find({}, function (err, analyticEntry) {
    if(!err) {
      console.log('aa');
    } else {
      throw err;
    }
  });

}

mongoose.connect(config.mongoUri, {}, execute);
*/