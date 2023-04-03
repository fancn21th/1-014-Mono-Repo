"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@shlack/utils");
describe("formatTimestamp() tests", function () {
    var x = 4;
    test("01-01-2020", function () {
        expect((0, utils_1.formatTimestamp)(new Date("01-01-2020"))).toBe("Jan 01, 2020 00:01:00 AM");
    });
});
