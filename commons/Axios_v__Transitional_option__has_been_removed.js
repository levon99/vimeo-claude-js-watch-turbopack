{
  "use strict";

  var _v3 = _v0.r(0).version,
    _v4 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function (_v0, _v1) {
    _v4[_v0] = function (_v0) {
      return typeof _v0 === _v0 || "a" + (_v1 < 1 ? "n " : " ") + _v0;
    };
  });
  var _v5 = {};
  _v4.transitional = function (_v0, _v1, _v2) {
    function _v3(_v0, _v1) {
      return "[Axios v" + _v3 + "] Transitional option '" + _v0 + "'" + _v1 + (_v2 ? ". " + _v2 : "");
    }
    return function (_v0, _v1, _v2) {
      if (!1 === _v0) throw Error(_v3(_v1, " has been removed" + (_v1 ? " in " + _v1 : "")));
      return _v1 && !_v5[_v1] && (_v5[_v1] = !0, console.warn(_v3(_v1, " has been deprecated since v" + _v1 + " and will be removed in the near future"))), !_v0 || _v0(_v0, _v1, _v2);
    };
  }, _v1.exports = {
    assertOptions: function (_v0, _v1, _v2) {
      if ("object" != typeof _v0) throw TypeError("options must be an object");
      for (var _v3 = Object.keys(_v0), _v4 = _v3.length; _v4-- > 0;) {
        var _v5 = _v3[_v4],
          _v6 = _v1[_v5];
        if (_v6) {
          var _v7 = _v0[_v5],
            _v8 = void 0 === _v7 || _v6(_v7, _v5, _v0);
          if (!0 !== _v8) throw TypeError("option " + _v5 + " must be " + _v8);
          continue;
        }
        if (!0 !== _v2) throw Error("Unknown option " + _v5);
      }
    },
    validators: _v4
  };
}