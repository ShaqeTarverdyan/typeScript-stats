"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParser = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParser[2], dateParser[1] - 1, dateParser[0]);
};
