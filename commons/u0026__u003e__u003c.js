{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    ESCAPE_REGEX: function () {
      return _v6;
    },
    htmlEscapeAttributeString: function () {
      return _v10;
    },
    htmlEscapeJsonString: function () {
      return _v9;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    },
    _v6 = /[&><\u2028\u2029]/g,
    _v7 = {
      "&": "&amp;",
      '"': "&quot;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;"
    },
    _v8 = /[&"'<>]/g;
  function _v9(_v0) {
    return _v0.replace(_v6, _v0 => _v5[_v0]);
  }
  function _v10(_v0) {
    return _v0.replace(_v8, _v0 => _v7[_v0]);
  }
}