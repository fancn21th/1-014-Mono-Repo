"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPErrorKind = void 0;
/**
 * High-level outcome of an HTTP status code
 * @public
 */
var HTTPErrorKind;
(function (HTTPErrorKind) {
    HTTPErrorKind[HTTPErrorKind["Information"] = 100] = "Information";
    HTTPErrorKind[HTTPErrorKind["Success"] = 200] = "Success";
    HTTPErrorKind[HTTPErrorKind["Redirect"] = 300] = "Redirect";
    HTTPErrorKind[HTTPErrorKind["Client"] = 400] = "Client";
    HTTPErrorKind[HTTPErrorKind["Server"] = 500] = "Server";
})(HTTPErrorKind = exports.HTTPErrorKind || (exports.HTTPErrorKind = {}));
/**
 * Determine the high-level outcome of a HTTP status code
 *
 * @param status - http status code
 * @see HTTPErrorKind
 * @public
 */
function determineKind(status) {
    if (status >= 100 && status < 200)
        return HTTPErrorKind.Information;
    else if (status < 300)
        return HTTPErrorKind.Success;
    else if (status < 400)
        return HTTPErrorKind.Redirect;
    else if (status < 500)
        return HTTPErrorKind.Client;
    else if (status < 600)
        return HTTPErrorKind.Server;
    else
        throw new Error("Unknown HTTP status code ".concat(status));
}
/**
 * An error that's associated with a HTTP response status code
 * @public
 */
var HTTPError = /** @class */ (function (_super) {
    __extends(HTTPError, _super);
    function HTTPError(info, message) {
        var _this = _super.call(this, "HTTPError [status: ".concat(info.statusText, " (").concat(info.status, ")]\n").concat(message)) || this;
        _this.kind = determineKind(info.status);
        return _this;
    }
    return HTTPError;
}(Error));
exports.default = HTTPError;
