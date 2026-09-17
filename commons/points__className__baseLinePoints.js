{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = ["points", "className", "baseLinePoints", "connectNulls"];
  function _v5() {
    return (_v5 = Object.assign.bind()).apply(this, arguments);
  }
  function _v6(_v0) {
    return function (_v0) {
      if (Array.isArray(_v0)) return _v7(_v0);
    }(_v0) || function (_v0) {
      if ("u" > typeof Symbol && null != _v0[Symbol.iterator] || null != _v0["@@iterator"]) return Array.from(_v0);
    }(_v0) || function (_v0) {
      if (_v0) {
        if ("string" == typeof _v0) return _v7(_v0, void 0);
        var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
        if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
        if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v7(_v0, void 0);
      }
    }(_v0) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _v7(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  var _v8 = function (_v0) {
      return _v0 && _v0.x === +_v0.x && _v0.y === +_v0.y;
    },
    _v9 = function () {
      var _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        _v1 = [[]];
      return _v0.forEach(function (_v0) {
        _v8(_v0) ? _v1[_v1.length - 1].push(_v0) : _v1[_v1.length - 1].length > 0 && _v1.push([]);
      }), _v8(_v0[0]) && _v1[_v1.length - 1].push(_v0[0]), _v1[_v1.length - 1].length <= 0 && (_v1 = _v1.slice(0, -1)), _v1;
    },
    _v10 = function (_v0, _v1) {
      var _v2 = _v9(_v0);
      _v1 && (_v2 = [_v2.reduce(function (_v0, _v1) {
        return [].concat(_v6(_v0), _v6(_v1));
      }, [])]);
      var _v3 = _v2.map(function (_v0) {
        return _v0.reduce(function (_v0, _v1, _v2) {
          return "".concat(_v0).concat(0 === _v2 ? "M" : "L").concat(_v1.x, ",").concat(_v1.y);
        }, "");
      }).join("");
      return 1 === _v2.length ? "".concat(_v3, "Z") : _v3;
    },
    _v11 = function (_v0, _v1, _v2) {
      var _v3 = _v10(_v0, _v2);
      return "".concat("Z" === _v3.slice(-1) ? _v3.slice(0, -1) : _v3, "L").concat(_v10(_v1.reverse(), _v2).slice(1));
    };
  _v0.s(["Polygon", 0, function (_v0) {
    var _v1 = _v0.points,
      _v2 = _v0.className,
      _v3 = _v0.baseLinePoints,
      _v4 = _v0.connectNulls,
      _v5 = function (_v0, _v1) {
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
      }(_v0, _v4);
    if (!_v1 || !_v1.length) return null;
    var _v6 = (0, _v2.default)("recharts-polygon", _v2);
    if (_v3 && _v3.length) {
      var _v7 = _v5.stroke && "none" !== _v5.stroke,
        _v8 = _v11(_v1, _v3, _v4);
      return _v1.default.createElement("g", {
        className: _v6
      }, _v1.default.createElement("path", _v5({}, (0, _v3.filterProps)(_v5, !0), {
        fill: "Z" === _v8.slice(-1) ? _v5.fill : "none",
        stroke: "none",
        d: _v8
      })), _v7 ? _v1.default.createElement("path", _v5({}, (0, _v3.filterProps)(_v5, !0), {
        fill: "none",
        d: _v10(_v1, _v4)
      })) : null, _v7 ? _v1.default.createElement("path", _v5({}, (0, _v3.filterProps)(_v5, !0), {
        fill: "none",
        d: _v10(_v3, _v4)
      })) : null);
    }
    var _v9 = _v10(_v1, _v4);
    return _v1.default.createElement("path", _v5({}, (0, _v3.filterProps)(_v5, !0), {
      fill: "Z" === _v9.slice(-1) ? _v5.fill : "none",
      className: _v6,
      d: _v9
    }));
  }]);
}