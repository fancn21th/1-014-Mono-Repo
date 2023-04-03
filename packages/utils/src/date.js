"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimestamp = void 0;
var date_fns_1 = require("date-fns");
/**
 * Format a timestamp as a string
 * @param date - the date value to format
 * @public
 */
function formatTimestamp(date) {
    return (0, date_fns_1.format)(date, "MMM dd, yyyy HH:MM:SS a");
}
exports.formatTimestamp = formatTimestamp;
