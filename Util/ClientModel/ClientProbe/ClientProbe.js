var ClientProbe = function(url){
  this.url = url;
  this.timeStep = 500;
  this.startClient();
};

ClientProbe.prototype = {

  startClient: function () {
    console.log('Starting client probe');
    var self = this;

    // Client info should not change
    var clientInfo = self.loadClientInfo();
    if (!clientInfo) {
      console.log('ClientInfo not found in localStorage, gathering...');
      clientInfo = self.gatherClientInfo();
    }

    self.clientInfo = clientInfo;
    self.saveClientInfo(clientInfo);

    // Start/resume the benchmark if we have
    self.startBenchmark()
  },

  /**
   * Loads the stored client information from the local storage
   */
  loadClientInfo: function () {
    console.log('Loading clientInfo from localStorage');
    var stored = localStorage.getItem('clientInfo');
    if (stored) {
      return JSON.parse(stored);
    }
  },

  /**
   * Save the given client info into the local storage
   * @param clientInfo
   */
  saveClientInfo: function (clientInfo) {
    console.log('Saving clientInfo to localStorage');
    localStorage.setItem('clientInfo', JSON.stringify(clientInfo));
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

  loadBenchmarkData: function () {
    console.log('Loading benchmarkData from localStorage');
    var stored = localStorage.getItem('benchmarkData');
    if (stored) {
      return JSON.parse(stored);
    }
  },

  saveBenchmarkData: function () {
    var self = this;
    localStorage.setItem('benchmarkData', JSON.stringify(self.benchmarkData));
  },

  getNewSessionData: function () {
    return {
      startTime: new Date().getTime(),
      endTime: new Date().getTime(),
      steps: 0
    }
  },

  startBenchmark: function () {
    var self = this;

    self.benchmarkData = self.loadBenchmarkData();
    if (!self.benchmarkData) {
      console.log('BenchmarkData not found in localStorage, starting anew.');
      self.benchmarkData = {
        nextSessionIndex: 1,
        sessionData: [
          self.getNewSessionData()
        ]
      };
    } else {
      console.log('Stored BenchmarkData was found, resuming.');
      self.benchmarkData.nextSessionIndex++;
      self.benchmarkData.sessionData.push(self.getNewSessionData());
    }

    // Add a listener to save the benchmark data before leaving the site
    window.onbeforeunload = function() {
      self.saveBenchmarkData();
    };

    self.benchmarkTick(self);
  },

  benchmarkTick: function(clientProbe) {
    console.log('Tick.');
    var index = clientProbe.benchmarkData.nextSessionIndex - 1;
    clientProbe.benchmarkData.sessionData[index].steps++;
    clientProbe.benchmarkData.sessionData[index].endTime = new Date().getTime();

    setTimeout(function() {clientProbe.benchmarkTick(clientProbe)}, clientProbe.timeStep);
  },

  exportData: function () {
    var self = this;
    self.saveBenchmarkData();
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent('{"clientInfo": ' + localStorage.getItem('clientInfo') + ', "benchmarkData":' + localStorage.getItem('benchmarkData') + '}');
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
  window.participatoryClientProbe = new ClientProbe('http://localhost:8080')
}());