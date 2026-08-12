{
  "use strict";

  var _v1 = {
    isSsr: !("u" > typeof window && window.document && window.document.createElement && window.setTimeout),
    get: function (_v0) {
      return _v1[_v0];
    },
    set: function (_v0, _v1) {
      if ("string" == typeof _v0) _v1[_v0] = _v1;else {
        var _v2 = Object.keys(_v0);
        _v2 && _v2.length && _v2.forEach(function (_v0) {
          _v1[_v0] = _v0[_v0];
        });
      }
    }
  };
  _v0.s(["Global", 0, _v1]);
}