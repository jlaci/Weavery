"use strict";
var ArrayParamAppender = (function () {
    function ArrayParamAppender() {
    }
    ArrayParamAppender.appendArray = function (params, key, array) {
        array.forEach(function (item, index) {
            params.append(key + '[' + index + ']', item);
        });
    };
    return ArrayParamAppender;
}());
exports.ArrayParamAppender = ArrayParamAppender;
//# sourceMappingURL=ArrayParamAppender.js.map