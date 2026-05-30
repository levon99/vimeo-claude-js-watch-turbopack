{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = _v2.array = _v2.object = _v2.boolean = _v2.date = _v2.number = _v2.string = _v2.mixed = void 0;
  var _v4 = _v3(_v0.r(0)),
    _v5 = {
      default: "${path} is invalid",
      required: "${path} is a required field",
      oneOf: "${path} must be one of the following values: ${values}",
      notOneOf: "${path} must not be one of the following values: ${values}",
      notType: function (_v0) {
        var _v1 = _v0.path,
          _v2 = _v0.type,
          _v3 = _v0.value,
          _v4 = _v0.originalValue,
          _v5 = null != _v4 && _v4 !== _v3,
          _v6 = _v1 + " must be a `" + _v2 + "` type, but the final value was: `" + (0, _v4.default)(_v3, !0) + "`" + (_v5 ? " (cast from the value `" + (0, _v4.default)(_v4, !0) + "`)." : ".");
        return null === _v3 && (_v6 += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), _v6;
      }
    };
  _v2.mixed = _v5;
  var _v6 = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string"
  };
  _v2.string = _v6;
  var _v7 = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    notEqual: "${path} must be not equal to ${notEqual}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
  };
  _v2.number = _v7;
  var _v8 = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  };
  _v2.date = _v8;
  var _v9 = {};
  _v2.boolean = _v9;
  var _v10 = {
    noUnknown: "${path} field cannot have keys not specified in the object shape"
  };
  _v2.object = _v10;
  var _v11 = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items"
  };
  _v2.array = _v11, _v2.default = {
    mixed: _v5,
    string: _v6,
    number: _v7,
    date: _v8,
    object: _v10,
    array: _v11,
    boolean: _v9
  };
}