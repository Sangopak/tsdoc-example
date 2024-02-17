"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
var HelloWorld = /** @class */ (function () {
    function HelloWorld(value) {
        this.value = value;
        this.message = value;
    }
    HelloWorld.prototype.getMessage = function (name) {
        return "".concat(this.message, " ").concat(name);
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
