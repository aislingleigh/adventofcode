"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArrayFromText = void 0;
var fs = require("fs");
/***
 * PARSE ARRAY FROM TEXT FILE
 *
 * @param {String} path - path to file relative to root
 * @param {Array<String>} delimeters - MAX LENGTH 2 string to split by
 * @param {Boolean} convertToNum - convert final array to number
 */
function parseArrayFromText(path, delimiters, convertToNum) {
    var file = fs.readFileSync(path).toString();
    var result = file.split(delimiters[0]);
    delimiters = delimiters.slice(1);
    if (delimiters.length) {
        result = result.map(function (x) { return x.split(delimiters[0]); });
        if (convertToNum) {
            var newResult_1 = [];
            result.forEach(function (res) {
                newResult_1.push(res.map(function (x) { return +x; }));
            });
            result = newResult_1;
        }
    }
    else {
        if (convertToNum) {
            result = result.map(function (x) { return +x; });
        }
    }
    return result;
}
exports.parseArrayFromText = parseArrayFromText;
function splitArray(array, delimiter) {
    return array.map(function (x) { return x.split(delimiter); });
}
//# sourceMappingURL=util.js.map