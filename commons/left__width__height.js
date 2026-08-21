{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    return (_v5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  var _v6 = ["x", "y", "top", "left", "width", "height", "className"];
  function _v7() {
    return (_v7 = Object.assign.bind()).apply(this, arguments);
  }
  function _v8(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  _v0.s(["Cross", 0, function (_v0) {
    var _v1 = _v0.x,
      _v2 = void 0 === _v1 ? 0 : _v1,
      _v3 = _v0.y,
      _v4 = void 0 === _v3 ? 0 : _v3,
      _v5 = _v0.top,
      _v6 = void 0 === _v5 ? 0 : _v5,
      _v7 = _v0.left,
      _v8 = void 0 === _v7 ? 0 : _v7,
      _v9 = _v0.width,
      _v10 = void 0 === _v9 ? 0 : _v9,
      _v11 = _v0.height,
      _v12 = void 0 === _v11 ? 0 : _v11,
      _v13 = _v0.className,
      _v14 = function (_v0) {
        for (var _v1 = 1; _v1 < arguments.length; _v1++) {
          var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
          _v1 % 2 ? _v8(Object(_v2), !0).forEach(function (_v0) {
            var _v1, _v2, _v3;
            _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
              var _v1 = function (_v0, _v1) {
                if ("object" != _v5(_v0) || !_v0) return _v0;
                var _v2 = _v0[Symbol.toPrimitive];
                if (void 0 !== _v2) {
                  var _v3 = _v2.call(_v0, _v1 || "default");
                  if ("object" != _v5(_v3)) return _v3;
                  throw TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === _v1 ? String : Number)(_v0);
              }(_v0, "string");
              return "symbol" == _v5(_v1) ? _v1 : _v1 + "";
            }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
              value: _v3,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : _v1[_v2] = _v3;
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v8(Object(_v2)).forEach(function (_v0) {
            Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
          });
        }
        return _v0;
      }({
        x: _v2,
        y: _v4,
        top: _v6,
        left: _v8,
        width: _v10,
        height: _v12
      }, function (_v0, _v1) {
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
      }(_v0, _v6));
    return (0, _v3.isNumber)(_v2) && (0, _v3.isNumber)(_v4) && (0, _v3.isNumber)(_v10) && (0, _v3.isNumber)(_v12) && (0, _v3.isNumber)(_v6) && (0, _v3.isNumber)(_v8) ? _v1.default.createElement("path", _v7({}, (0, _v4.filterProps)(_v14, !0), {
      className: (0, _v2.default)("recharts-cross", _v13),
      d: "M".concat(_v2, ",").concat(_v6, "v").concat(_v12, "M").concat(_v8, ",").concat(_v4, "h").concat(_v10)
    })) : null;
  }]);
}