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
exports.__esModule = true;
exports.EasyAccount = void 0;
var DioAccount_1 = require("./DioAccount");
var EasyAccount = /** @class */ (function (_super) {
    __extends(EasyAccount, _super);
    function EasyAccount(name, accountNumber) {
        return _super.call(this, name, accountNumber) || this;
    }
    EasyAccount.prototype.deposit = function (value) {
        this.deposit(value + 10);
    };
    return EasyAccount;
}(DioAccount_1.DioAccount));
exports.EasyAccount = EasyAccount;
