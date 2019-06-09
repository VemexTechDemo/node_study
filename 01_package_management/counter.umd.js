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
})(this/*node 环境指向 module, 浏览器环境指向 window*/, function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    var count = 0;

    var countFun = function countFun() {
        count++;
    };

    var _default = {
        count: count,
        countFun: countFun
    };
    _exports.default = _default;
});
