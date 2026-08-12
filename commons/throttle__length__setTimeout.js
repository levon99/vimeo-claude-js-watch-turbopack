{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["throttle", 0, function (_v0, _v1) {
    var _v2;
    return function () {
      for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
      return !_v2 && (_v2 = setTimeout(function () {
        return _v2 = !1;
      }, _v1)) && _v0.apply(void 0, (0, _v1.e)([], (0, _v1._)(_v0), !1));
    };
  }]);
}