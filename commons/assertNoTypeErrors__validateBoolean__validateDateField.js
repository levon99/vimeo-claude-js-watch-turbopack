{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3({
    field: _v0,
    fieldName: _v1,
    errors: _v2
  }) {
    (0, _v2.isPlainNumber)(_v0) || _v2.push(`${_v1} should be a number, but found ${typeof _v0}`);
  }
  function _v4({
    field: _v0,
    fieldName: _v1,
    errors: _v2
  }) {
    (0, _v2.isNonEmptyString)(_v0) || _v2.push(`${_v1} should be a non-empty string, but found ${typeof _v0}`);
  }
  _v0.s(["assertNoTypeErrors", 0, function (_v0, _v1) {
    if (_v1.length > 0) throw TypeError(`${_v0}: ${_v1.map(_v0 => `${_v0}, `)}`);
  }, "validateBoolean", 0, function ({
    field: _v0,
    fieldName: _v1,
    errors: _v2
  }) {
    "boolean" != typeof _v0 && _v2.push(`${_v1} should be a boolean, but found ${typeof _v0}`);
  }, "validateDateField", 0, function ({
    field: _v0,
    fieldName: _v1,
    errors: _v2
  }) {
    (0, _v2.isPlainNumber)(_v0) ? isFinite(_v0) || _v2.push(`${_v1} is in invalid range: ${_v0}`) : _v2.push(`${_v1} should be a number, but found ${typeof _v0}`);
  }, "validateNumber", 0, _v3, "validateObject", 0, function ({
    field: _v0,
    fieldName: _v1,
    errors: _v2
  }) {
    (0, _v1.default)(_v0) || _v2.push(`${_v1} should be an object, but found ${typeof _v0}`);
  }, "validateString", 0, _v4, "validateStringOrNumber", 0, function (_v0) {
    (0, _v2.isPlainNumber)(_v0.field) ? _v3({
      ..._v0,
      field: _v0.field
    }) : _v4({
      ..._v0,
      field: _v0.field
    });
  }]);
}