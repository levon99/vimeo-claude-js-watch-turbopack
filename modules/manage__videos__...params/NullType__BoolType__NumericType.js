{
  "use strict";

  var _v3, _v4;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.EppoValue = _v2.EppoValueType = void 0;
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  (_v4 = _v3 || (_v2.EppoValueType = _v3 = {}))[_v4.NullType = 0] = "NullType", _v4[_v4.BoolType = 1] = "BoolType", _v4[_v4.NumericType = 2] = "NumericType", _v4[_v4.StringType = 3] = "StringType", _v4[_v4.JSONType = 4] = "JSONType";
  class _v7 {
    constructor(_v0, _v1, _v2, _v3, _v4) {
      this.valueType = _v0, this.boolValue = _v1, this.numericValue = _v2, this.stringValue = _v3, this.objectValue = _v4;
    }
    static valueOf(_v0, _v1) {
      if (null == _v0) return _v7.Null();
      switch (_v1) {
        case _v5.VariationType.BOOLEAN:
          return _v7.Bool(_v0);
        case _v5.VariationType.NUMERIC:
        case _v5.VariationType.INTEGER:
          return _v7.Numeric(_v0);
        case _v5.VariationType.STRING:
          return _v7.String(_v0);
        case _v5.VariationType.JSON:
          return _v7.JSON(_v0);
        default:
          return _v7.String(_v0);
      }
    }
    toString() {
      switch (this.valueType) {
        case _v3.NullType:
          return "null";
        case _v3.BoolType:
          return this.boolValue ? "true" : "false";
        case _v3.NumericType:
          return this.numericValue ? this.numericValue.toString() : "0";
        case _v3.StringType:
          return this.stringValue ?? "";
        case _v3.JSONType:
          try {
            return JSON.stringify(this.objectValue) ?? "";
          } catch {
            return this.stringValue ?? "";
          }
      }
    }
    toHashedString() {
      let _v0 = this.toString();
      return (0, _v6.getMD5Hash)(_v0);
    }
    static Bool(_v0) {
      return new _v7(_v3.BoolType, _v0, void 0, void 0, void 0);
    }
    static Numeric(_v0) {
      return new _v7(_v3.NumericType, void 0, _v0, void 0, void 0);
    }
    static String(_v0) {
      return new _v7(_v3.StringType, void 0, void 0, _v0, void 0);
    }
    static JSON(_v0) {
      return new _v7(_v3.JSONType, void 0, void 0, void 0, "string" == typeof _v0 ? JSON.parse(_v0) : _v0);
    }
    static Null() {
      return new _v7(_v3.NullType, void 0, void 0, void 0, void 0);
    }
  }
  _v2.EppoValue = _v7;
}