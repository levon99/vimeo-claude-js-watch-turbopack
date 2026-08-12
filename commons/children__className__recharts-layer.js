{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = ["children", "className"];
  function _v5() {
    return (_v5 = Object.assign.bind()).apply(this, arguments);
  }
  var _v6 = _v1.default.forwardRef(function (_v0, _v1) {
    var _v2 = _v0.children,
      _v3 = _v0.className,
      _v4 = function (_v0, _v1) {
        if (null == _v0) return {};
        var _v2,
          _v3,
          _v4 = function (_v0, _v1) {
            if (null == _v0) return {};
            var _v2 = {};
            for (var _v3 in _v0) if (Object.prototype.hasOwnProperty.call(_v0, _v3)) {
              if (_v1.indexOf(_v3) >= 0) continue;
              _v2[_v3] = _v0[_v3];
            }
            return _v2;
          }(_v0, _v1);
        if (Object.getOwnPropertySymbols) {
          var _v5 = Object.getOwnPropertySymbols(_v0);
          for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], !(_v1.indexOf(_v2) >= 0) && Object.prototype.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
        }
        return _v4;
      }(_v0, _v4),
      _v5 = (0, _v2.default)("recharts-layer", _v3);
    return _v1.default.createElement("g", _v5({
      className: _v5
    }, (0, _v3.filterProps)(_v4, !0), {
      ref: _v1
    }), _v2);
  });
  _v0.s(["Layer", 0, _v6]);
}