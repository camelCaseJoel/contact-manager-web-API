"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // check request
    Utils.match = function (req, route) {
        var urlMatched = (req.url == url);
        var verbMatched = (req.verb == url);
        if (urlMatched && verbMatched)
            func();
    };
    return Utils;
}());
exports.u = Utils;
