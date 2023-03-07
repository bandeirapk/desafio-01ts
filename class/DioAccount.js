"use strict";
exports.__esModule = true;
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, accountNumber) {
        this.balance = 0;
        this.status = true;
        this.name = name;
        this.accountNumber = accountNumber;
    }
    DioAccount.prototype.deposit = function (value) {
        if (value > 0 && this.validateStatus()) {
            this.balance += value;
        }
    };
    DioAccount.prototype.withdraw = function (value) {
        if (this.balance >= value && this.validateStatus()) {
            this.balance -= value;
        }
        console.log("Você sacou");
    };
    DioAccount.prototype.getBalance = function () {
        console.log("Seu saldo é: " + this.balance);
    };
    DioAccount.prototype.validateStatus = function () {
        if (this.status === true) {
            return this.status;
        }
        throw new Error();
    };
    return DioAccount;
}());
exports.DioAccount = DioAccount;
