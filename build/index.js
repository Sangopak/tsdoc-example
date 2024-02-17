"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_world_1 = require("./services/hello-world");
var message = new hello_world_1.HelloWorld("Hello World").getMessage("Snago");
console.log("Message is ".concat(message));
