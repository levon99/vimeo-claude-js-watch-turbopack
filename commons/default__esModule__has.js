{
  var _v3 = _v0.r(0).default;
  function _v4(_v0) {
    if ("function" != typeof WeakMap) return null;
    var _v1 = new WeakMap(),
      _v2 = new WeakMap();
    return (_v4 = function (_v0) {
      return _v0 ? _v2 : _v1;
    })(_v0);
  }
  _v1.exports = function (_v0, _v1) {
    if (!_v1 && _v0 && _v0.__esModule) return _v0;
    if (null === _v0 || "object" !== _v3(_v0) && "function" != typeof _v0) return {
      default: _v0
    };
    var _v2 = _v4(_v1);
    if (_v2 && _v2.has(_v0)) return _v2.get(_v0);
    var _v3 = {},
      _v4 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var _v5 in _v0) if ("default" !== _v5 && Object.prototype.hasOwnProperty.call(_v0, _v5)) {
      var _v6 = _v4 ? Object.getOwnPropertyDescriptor(_v0, _v5) : null;
      _v6 && (_v6.get || _v6.set) ? Object.defineProperty(_v3, _v5, _v6) : _v3[_v5] = _v0[_v5];
    }
    return _v3.default = _v0, _v2 && _v2.set(_v0, _v3), _v3;
  }, _v1.exports.__esModule = !0, _v1.exports.default = _v1.exports;
}