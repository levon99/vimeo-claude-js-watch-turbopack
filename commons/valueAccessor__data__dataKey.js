{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10(_v0) {
    return (_v10 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  var _v11 = ["valueAccessor"],
    _v12 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
  function _v13(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  function _v14() {
    return (_v14 = Object.assign.bind()).apply(this, arguments);
  }
  function _v15(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v16(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v15(Object(_v2), !0).forEach(function (_v0) {
        var _v1, _v2, _v3;
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" != _v10(_v0) || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != _v10(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == _v10(_v1) ? _v1 : _v1 + "";
        }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
          value: _v3,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v1[_v2] = _v3;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v15(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v17(_v0, _v1) {
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
  }
  var _v18 = function (_v0) {
    return Array.isArray(_v0.value) ? (0, _v5.default)(_v0.value) : _v0.value;
  };
  function _v19(_v0) {
    var _v1 = _v0.valueAccessor,
      _v2 = void 0 === _v1 ? _v18 : _v1,
      _v3 = _v17(_v0, _v11),
      _v4 = _v3.data,
      _v5 = _v3.dataKey,
      _v6 = _v3.clockWise,
      _v7 = _v3.id,
      _v8 = _v3.textBreakAll,
      _v9 = _v17(_v3, _v12);
    return _v4 && _v4.length ? _v1.default.createElement(_v7.Layer, {
      className: "recharts-label-list"
    }, _v4.map(function (_v0, _v1) {
      var _v2 = (0, _v2.default)(_v5) ? _v2(_v0, _v1) : (0, _v9.getValueByDataKey)(_v0 && _v0.payload, _v5),
        _v3 = (0, _v2.default)(_v7) ? {} : {
          id: "".concat(_v7, "-").concat(_v1)
        };
      return _v1.default.createElement(_v6.Label, _v14({}, (0, _v8.filterProps)(_v0, !0), _v9, _v3, {
        parentViewBox: _v0.parentViewBox,
        value: _v2,
        textBreakAll: _v8,
        viewBox: _v6.Label.parseViewBox((0, _v2.default)(_v6) ? _v0 : _v16(_v16({}, _v0), {}, {
          clockWise: _v6
        })),
        key: "label-".concat(_v1),
        index: _v1
      }));
    })) : null;
  }
  _v19.displayName = "LabelList", _v19.renderCallByParent = function (_v0, _v1) {
    var _v2,
      _v3 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (!_v0 || !_v0.children && _v3 && !_v0.label) return null;
    var _v4 = _v0.children,
      _v5 = (0, _v8.findAllByType)(_v4, _v19).map(function (_v0, _v1) {
        return (0, _v1.cloneElement)(_v0, {
          data: _v1,
          key: "labelList-".concat(_v1)
        });
      });
    return _v3 ? [(_v2 = _v0.label, !_v2 ? null : !0 === _v2 ? _v1.default.createElement(_v19, {
      key: "labelList-implicit",
      data: _v1
    }) : _v1.default.isValidElement(_v2) || (0, _v4.default)(_v2) ? _v1.default.createElement(_v19, {
      key: "labelList-implicit",
      data: _v1,
      content: _v2
    }) : (0, _v3.default)(_v2) ? _v1.default.createElement(_v19, _v14({
      data: _v1
    }, _v2, {
      key: "labelList-implicit"
    })) : null)].concat(function (_v0) {
      if (Array.isArray(_v0)) return _v13(_v0);
    }(_v5) || function (_v0) {
      if ("u" > typeof Symbol && null != _v0[Symbol.iterator] || null != _v0["@@iterator"]) return Array.from(_v0);
    }(_v5) || function (_v0) {
      if (_v0) {
        if ("string" == typeof _v0) return _v13(_v0, void 0);
        var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
        if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
        if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v13(_v0, void 0);
      }
    }(_v5) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }()) : _v5;
  }, _v0.s(["LabelList", 0, _v19]);
}