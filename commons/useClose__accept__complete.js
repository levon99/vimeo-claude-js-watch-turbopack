{
  "use strict";

  _v0.s(["useClose", 0, function (_v0) {
    if (!_v0) return {};
    var _v1 = _v0.accept,
      _v2 = _v0.complete,
      _v3 = _v0.reject;
    return {
      accept: _v1,
      complete: "function" == typeof _v0 ? _v0 : _v2,
      reject: _v3
    };
  }]);
}