if (typeof define !== 'function') { var define = require('amdefine')(module) }


define(["require", "exports"], function (require, exports) {
    "use strict";
    var count = 0;
    var countFun = function () {
        count++;
    };
    return { count: count, countFun: countFun };
});
//# sourceMappingURL=counter.js.map

