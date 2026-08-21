{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
  function _v5() {
    return (_v5 = Object.assign.bind()).apply(this, arguments);
  }
  _v0.s(["Surface", 0, function (_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.width,
      _v3 = _v0.height,
      _v4 = _v0.viewBox,
      _v5 = _v0.className,
      _v6 = _v0.style,
      _v7 = _v0.title,
      _v8 = _v0.desc,
      _v9 = function (_v0, _v1) {
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
      _v10 = _v4 || {
        width: _v2,
        height: _v3,
        x: 0,
        y: 0
      },
      _v11 = (0, _v2.default)("recharts-surface", _v5);
    return _v1.default.createElement("svg", _v5({}, (0, _v3.filterProps)(_v9, !0, "svg"), {
      className: _v11,
      width: _v2,
      height: _v3,
      style: _v6,
      viewBox: "".concat(_v10.x, " ").concat(_v10.y, " ").concat(_v10.width, " ").concat(_v10.height)
    }), _v1.default.createElement("title", null, _v7), _v1.default.createElement("desc", null, _v8), _v1);
  }]);
}