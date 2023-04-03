"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyError = void 0;
/**
 * Stringify an Error instance
 * @param err - The error to stringify
 */
function stringifyErrorValue(err) {
    return "".concat(err.name.toUpperCase(), ": ").concat(err.message, "\n  ").concat(err.stack || '(no stack trace information)');
}
/**
 * Stringify a thrown value
 *
 * @param errorDescription
 * @param err
 *
 */
function stringifyError(errorDescription, err) {
    return "".concat(errorDescription, "\n").concat(err instanceof Error
        ? stringifyErrorValue(err)
        : err
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            ? '' + err
            : '(missing error information)');
}
exports.stringifyError = stringifyError;
