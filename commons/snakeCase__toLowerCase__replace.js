{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    return _v0.toLowerCase();
  }
  var _v3 = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
    _v4 = /[^A-Z0-9]+/gi;
  function _v5(_v0, _v1, _v2) {
    return _v1 instanceof RegExp ? _v0.replace(_v1, _v2) : _v1.reduce(function (_v0, _v1) {
      return _v0.replace(_v1, _v2);
    }, _v0);
  }
  _v0.s(["snakeCase", 0, function (_v0, _v1) {
    var _v2;
    return void 0 === _v1 && (_v1 = {}), void 0 === (_v2 = (0, _v1.__assign)({
      delimiter: "_"
    }, _v1)) && (_v2 = {}), function (_v0, _v1) {
      void 0 === _v1 && (_v1 = {});
      for (var _v2 = _v1.splitRegexp, _v3 = _v1.stripRegexp, _v4 = _v1.transform, _v5 = _v1.delimiter, _v6 = _v5(_v5(_v0, void 0 === _v2 ? _v3 : _v2, "$1\0$2"), void 0 === _v3 ? _v4 : _v3, "\0"), _v7 = 0, _v8 = _v6.length; "\0" === _v6.charAt(_v7);) _v7++;
      for (; "\0" === _v6.charAt(_v8 - 1);) _v8--;
      return _v6.slice(_v7, _v8).split("\0").map(void 0 === _v4 ? _v2 : _v4).join(void 0 === _v5 ? " " : _v5);
    }(_v0, (0, _v1.__assign)({
      delimiter: "."
    }, _v2));
  }], 0);
}