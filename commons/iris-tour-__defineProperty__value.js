{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v4 && "object" == typeof _v4 && "default" in _v4 ? _v4 : {
      default: _v4
    },
    _v7 = _v4.createContext({});
  _v2.Tour = function (_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.id,
      _v3 = void 0 === _v2 ? null : _v2,
      _v4 = _v0.steps,
      _v5 = void 0 === _v4 ? 2 : _v4,
      _v6 = _v0.automated,
      _v7 = _v3.__read(_v4.useState(1), 2),
      _v8 = _v7[0],
      _v9 = _v7[1];
    _v3 || (_v3 = "iris-tour-" + _v5.generateUID());
    var _v10 = {
      active: _v8,
      activeSet: function (_v0) {
        var _v1 = "number" == typeof _v0 && _v0,
          _v2 = "number" == typeof _v1;
        return "function" == typeof _v0 || _v2 ? "function" == typeof _v0 ? _v9(_v0(_v8)) : "number" == typeof _v0 ? _v9(_v2 && (_v1 < _v5 || _v1 > 0) ? _v1 : null) : void 0 : _v9(null);
      },
      id: _v3,
      steps: _v5,
      automated: void 0 === _v6 || _v6
    };
    return _v6.default.createElement(_v7.Provider, {
      value: _v10
    }, _v1);
  }, _v2.TourContext = _v7;
}