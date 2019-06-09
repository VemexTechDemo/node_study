(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.counter = mod.exports;
    }
})(this, function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.countFun = _exports.count = void 0;
    var count = 0;
    _exports.count = count;

    var countFun = function countFun() {
        _exports.count = count = count + 1;
    };

    _exports.countFun = countFun;
});
