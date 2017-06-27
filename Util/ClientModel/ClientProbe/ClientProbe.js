var ClientProbe = function(){
  this.timeStep = 500;
  this.maxSteps = 1200;
  this.step = 0;
  this.startClient();
};

ClientProbe.prototype = {

  startClient: function () {
    console.log('Starting client probe');
    var self = this;

    var stored = localStorage.getItem('savedClientProbeData');
    if(stored) {
      var parsed = JSON.parse(stored);
      self.benchmarkData = parsed.benchmarkData;
      self.clientInfo = parsed.clientInfo;
      console.log('Found previously un-uploaded data, uploading');
      self.uploadResult();
    }

    self.clientInfo = self.gatherClientInfo();

    // Start/resume the benchmark if we have
    self.startBenchmark()
  },

  /**
   * Gathers and returns the current client information
   */
  gatherClientInfo: function () {
    var webGLProbe = new WebGLProbe();
    var client = new ClientJS();

    return {
      fingerprint: client.getFingerprint(),
      os: {
        name: client.getOS(),
        version: client.getOSVersion()
      },
      browser: {
        name: client.getBrowser(),
        version: client.getBrowserVersion()
      },
      webGL: webGLProbe.getResult()
    };
  },

  startBenchmark: function () {
    var self = this;

    self.benchmarkData = {
      location: window.location.href,
      sessionData: [

      ]
    };

    // Add a listener to save the benchmark data before leaving the site
    window.onbeforeunload = function() {
      self.uploadResult();
    };

    self.benchmarkTick(self);
  },

  benchmarkTick: function(clientProbe) {
    if(clientProbe.step < clientProbe.maxSteps) {
      clientProbe.step++;
      var now = new Date().getTime();

      var last;
      if (clientProbe.benchmarkData.sessionData.length > 0) {
        last = clientProbe.benchmarkData.sessionData[clientProbe.benchmarkData.sessionData.length - 1].time;
      } else {
        last = now - clientProbe.timeStep;
      }

      clientProbe.benchmarkData.sessionData.push({
        plannedTime: last + clientProbe.timeStep,
        time: now
      });

      setTimeout(function () {
        clientProbe.benchmarkTick(clientProbe)
      }, clientProbe.timeStep);
    } else {
      clientProbe.uploadResult();
    }
  },

  uploadResult: function () {
    var self = this;
    var data = JSON.stringify({
      clientInfo: self.clientInfo,
      benchmarkData: self.benchmarkData
    });
    localStorage.setItem('savedClientProbeData', data);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://localhost:8443/api/v1/analytic-entry', true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        localStorage.removeItem('savedClientProbeData');
        console.log('Successfully uploaded, removing stored data.')
      }
    };

    xhr.send(data);
  },

  exportData: function () {
    var self = this;
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent('{"clientInfo": ' + JSON.stringify(self.clientInfo) + ', "benchmarkData":' + JSON.stringify(self.benchmarkData) + '}');
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "measurements.json");
    dlAnchorElem.click();
  }
};

/**
 * Self calling function for initializing the client and attaching to the window object
 */
(function () {
  window.participatoryClientProbe = new ClientProbe()
}());