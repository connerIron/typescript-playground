"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameSafe = exports.getName = exports.introduce = exports.formatThings = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
var addStrings = function (str1, str2) {
    return str1 + ' ' + str2;
};
exports.addStrings = addStrings;
var formatThings = function (title, param) {
    return title + ': ' + param;
};
exports.formatThings = formatThings;
// export const fetchData = (url: string): Promise<string> => Promise.resolve('Data from '+url);
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
exports.introduce = introduce;
/* Not enforced at runtime */
function getName(user) {
    return "".concat(user.first, ", ").concat(user.last);
}
exports.getName = getName;
function getNameSafe(user) {
    return "".concat(user === null || user === void 0 ? void 0 : user.first, ", ").concat(user === null || user === void 0 ? void 0 : user.last);
}
exports.getNameSafe = getNameSafe;
exports.default = addNumbers;
