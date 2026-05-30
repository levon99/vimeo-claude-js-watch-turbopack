{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = function (_v0, _v1) {
    void 0 === _v1 && (_v1 = []);
    var _v2 = [],
      _v3 = [];
    function _v4(_v0, _v1) {
      var _v2 = (0, _v6.split)(_v0)[0];
      ~_v3.indexOf(_v2) || _v3.push(_v2), ~_v1.indexOf(_v1 + "-" + _v2) || _v2.push([_v1, _v2]);
    }
    for (var _v5 in _v0) if ((0, _v4.default)(_v0, _v5)) {
      var _v6 = _v0[_v5];
      ~_v3.indexOf(_v5) || _v3.push(_v5), _v7.default.isRef(_v6) && !_v6.isContext ? _v4(_v6.path, _v5) : (0, _v8.default)(_v6) && _v6._deps && _v6._deps.forEach(function (_v0) {
        return _v4(_v0, _v5);
      });
    }
    return _v5.default.array(_v3, _v2).reverse();
  };
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v3(_v0.r(0)),
    _v6 = _v0.r(0),
    _v7 = _v3(_v0.r(0)),
    _v8 = _v3(_v0.r(0));
  _v1.exports = _v2.default;
}