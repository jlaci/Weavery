var Task = require("./Task");

var storageInterfaceUrl = 'http://localhost:8001';

function TaskManager(jobMap) {
    this.taskMap = jobMap;
}

TaskManager.prototype = {
    taskMap: null,
    getAllResults : function() {
        var clients = ["2e999440-8b2d-4f9c-b47f-78db7cf11c07"];

        for(var i = 0; i < clients.length; i++) {
            for(var j = 0; j < 64; j++) {
                //         testTask0_result_43_3f949edd-9abe-4821-b295-44e66f46479d
                var key = "testTask0_result_" + j + "_" + clients[i];
                console.time(clients[i] + "_result_fetch");

                this.taskMap.get(key, function (err, value) {
                    console.timeEnd(clients[i] + "_result_fetch");

                    if (err) {
                        console.log(err);
                    } else {
                        console.log(value);
                    }
                });


            }
        }
    }
};

module.exports = TaskManager;