"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCpfOrCnpj = exports.isUndefined = exports.isNull = exports.isBoolean = exports.isFunction = exports.isObject = exports.isString = exports.isTrue = exports.isFalse = exports.notIsInstanceOf = exports.isInstanceOf = exports.isFill = exports.isDifferentNotStrict = exports.isEqualNotStrict = exports.isDifferent = exports.isEqual = void 0;
var is_cnpj_validation_1 = require("./is-cnpj.validation");
var is_cpf_validation_1 = require("./is-cpf.validation");
var is_empty_validation_1 = require("./is-empty.validation");
var isEqual = function (value, compare) { return value === compare; };
exports.isEqual = isEqual;
var isDifferent = function (value, compare) { return value !== compare; };
exports.isDifferent = isDifferent;
var isEqualNotStrict = function (value, compare) { return value == compare; };
exports.isEqualNotStrict = isEqualNotStrict;
var isDifferentNotStrict = function (value, compare) { return value != compare; };
exports.isDifferentNotStrict = isDifferentNotStrict;
var isFill = function (item) { return !is_empty_validation_1.isEmpty(item); };
exports.isFill = isFill;
var isInstanceOf = function (value, instance) { return value instanceof instance; };
exports.isInstanceOf = isInstanceOf;
var notIsInstanceOf = function (value, instance) { return !exports.isInstanceOf(value, instance); };
exports.notIsInstanceOf = notIsInstanceOf;
var isFalse = function (value) { return !value; };
exports.isFalse = isFalse;
var isTrue = function (value) { return !!value; };
exports.isTrue = isTrue;
var isString = function (value) { return typeof value === "string"; };
exports.isString = isString;
var isObject = function (value) { return typeof value === "object"; };
exports.isObject = isObject;
var isFunction = function (value) { return typeof value === "function"; };
exports.isFunction = isFunction;
var isBoolean = function (value) { return typeof value === "boolean"; };
exports.isBoolean = isBoolean;
var isNull = function (value) { return value === null; };
exports.isNull = isNull;
var isUndefined = function (value) { return typeof value === "undefined"; };
exports.isUndefined = isUndefined;
var isCpfOrCnpj = function (value) {
    value = value.replace(/\D/g, "");
    return value.length <= 11 ? is_cpf_validation_1.isCpf(value) : is_cnpj_validation_1.isCnpj(value);
};
exports.isCpfOrCnpj = isCpfOrCnpj;
//# sourceMappingURL=common.validation.js.map