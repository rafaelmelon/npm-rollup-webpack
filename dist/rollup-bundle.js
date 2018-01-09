var strings = (function (exports) {
'use strict';

function left(value, count) {
    return value.substr(0, count);
}

function right(value, count) {
    return value.substr(-count);
}

function upper(value) {
    return value.toUpperCase();
}

function lower(value) {
    return value.toLowerCase();
}

exports.left = left;
exports.right = right;
exports.upper = upper;
exports.lower = lower;

return exports;

}({}));
