{
  "use strict";

  let _v3 = _v0.r(0),
    {
      snakeCase: _v4
    } = _v0.r(0);
  _v1.exports = function (_v0, _v1) {
    return _v3(_v0, function (_v0, _v1) {
      var _v2, _v3, _v4, _v5, _v6;
      return [(_v2 = _v1.exclude, _v3 = _v0, _v2.some(function (_v0) {
        return "string" == typeof _v0 ? _v0 === _v3 : _v0.test(_v3);
      })) ? _v0 : _v4(_v0, _v1.parsingOptions), _v1, (_v4 = _v0, _v5 = _v1, (_v6 = _v1).shouldRecurse ? {
        shouldRecurse: _v6.shouldRecurse(_v4, _v5)
      } : void 0)];
    }, _v1 = Object.assign({
      deep: !0,
      exclude: [],
      parsingOptions: {}
    }, _v1));
  };
}