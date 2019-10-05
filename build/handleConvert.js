"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Converter_1 = require("./Converter");
exports.handleConvert = function (req, res) {
    var num = +req.params.n;
    if (isNaN(num)) {
        return res.status(500).send('Передано не число');
    }
    var converter = new Converter_1.Converter(num);
    var converted;
    try {
        converted = converter.convert();
    }
    catch (e) {
        var err = e;
        return res.status(500).send(err.message);
    }
    return res.status(200).send(converted);
};
