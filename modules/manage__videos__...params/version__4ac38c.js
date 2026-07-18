{
  "use strict";

  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0);
  _v1.exports = (_v0, _v1, _v2, _v3) => {
    switch (_v1) {
      case "===":
        return "object" == typeof _v0 && (_v0 = _v0.version), "object" == typeof _v2 && (_v2 = _v2.version), _v0 === _v2;
      case "!==":
        return "object" == typeof _v0 && (_v0 = _v0.version), "object" == typeof _v2 && (_v2 = _v2.version), _v0 !== _v2;
      case "":
      case "=":
      case "==":
        return _v3(_v0, _v2, _v3);
      case "!=":
        return _v4(_v0, _v2, _v3);
      case ">":
        return _v5(_v0, _v2, _v3);
      case ">=":
        return _v6(_v0, _v2, _v3);
      case "<":
        return _v7(_v0, _v2, _v3);
      case "<=":
        return _v8(_v0, _v2, _v3);
      default:
        throw TypeError(`Invalid operator: ${_v1}`);
    }
  };
}