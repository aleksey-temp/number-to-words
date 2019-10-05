"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var handleConvert_1 = require("./handleConvert");
var app = express_1.default();
app.get('/spell/:n', handleConvert_1.handleConvert);
app.listen(3000, function () { return console.log('Server started on port 3000'); });
