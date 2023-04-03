"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncDataEffect = void 0;
var react_1 = require("react");
var deferred_1 = require("./deferred");
/**
 *
 * @param  getData
 * @param  options
 */
function useAsyncDataEffect(getData, options) {
    var cancelled = false;
    var setter = options.setter, stateName = options.stateName;
    (0, react_1.useEffect)(function () {
        var d = new deferred_1.default();
        getData()
            .then(function (jsonData) {
            if (cancelled)
                return;
            else
                d.resolve(jsonData);
        })
            .catch(d.reject);
        d.promise
            .then(function (data) {
            if (!cancelled) {
                console.info("%c Updating state: " + stateName, "background: green; color: white; display: block;");
                setter(data);
            }
        })
            .catch(console.error);
        return function () {
            cancelled = true;
        };
    }, __spreadArray(__spreadArray([], (options.otherStatesToMonitor || []), true), [stateName], false));
}
exports.useAsyncDataEffect = useAsyncDataEffect;
