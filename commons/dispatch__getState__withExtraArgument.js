{
  "use strict";

  function _v1(_v0) {
    return function (_v0) {
      var _v1 = _v0.dispatch,
        _v2 = _v0.getState;
      return function (_v0) {
        return function (_v0) {
          return "function" == typeof _v0 ? _v0(_v1, _v2, _v0) : _v0(_v0);
        };
      };
    };
  }
  var _v2 = _v1();
  _v2.withExtraArgument = _v1, _v0.s(["default", 0, _v2]);
}