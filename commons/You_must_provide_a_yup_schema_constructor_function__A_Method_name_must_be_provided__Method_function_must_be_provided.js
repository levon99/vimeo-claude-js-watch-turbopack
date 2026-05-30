{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.addMethod = function (_v0, _v1, _v2) {
    if (!_v0 || !(0, _v7.default)(_v0.prototype)) throw TypeError("You must provide a yup schema constructor function");
    if ("string" != typeof _v1) throw TypeError("A Method name must be provided");
    if ("function" != typeof _v2) throw TypeError("Method function must be provided");
    _v0.prototype[_v1] = _v2;
  }, _v2.lazy = _v2.ref = _v2.boolean = void 0, _v2.mixed = _v3(_v0.r(0)).default;
  var _v4 = _v3(_v0.r(0));
  _v2.bool = _v4.default, _v2.string = _v3(_v0.r(0)).default, _v2.number = _v3(_v0.r(0)).default, _v2.date = _v3(_v0.r(0)).default, _v2.object = _v3(_v0.r(0)).default, _v2.array = _v3(_v0.r(0)).default;
  var _v5 = _v3(_v0.r(0)),
    _v6 = _v3(_v0.r(0));
  _v2.ValidationError = _v3(_v0.r(0)).default, _v2.reach = _v3(_v0.r(0)).default;
  var _v7 = _v3(_v0.r(0));
  _v2.isSchema = _v7.default, _v2.setLocale = _v3(_v0.r(0)).default, _v2.boolean = _v4.default, _v2.ref = function (_v0, _v1) {
    return new _v5.default(_v0, _v1);
  }, _v2.lazy = function (_v0) {
    return new _v6.default(_v0);
  };
}