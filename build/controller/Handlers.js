"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // check request
    Utils.match = function (req, res, route) {
        console.log();
        var pathMatched = (req.url == route.path);
        var verbMatched = (req.method == route.verb);
        console.log("pathmatched: " + pathMatched);
        console.log("verbmatched: " + verbMatched);
        console.log('---------------------------');
        if (pathMatched && verbMatched)
            return true;
    };
    return Utils;
}());
exports.u = Utils;
