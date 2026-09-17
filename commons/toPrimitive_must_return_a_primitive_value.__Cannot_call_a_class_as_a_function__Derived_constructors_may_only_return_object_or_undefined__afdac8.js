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
  var _v6 = ["ref"];
  function _v7(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v8(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v7(Object(_v2), !0).forEach(function (_v0) {
        _v13(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v7(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v9(_v0, _v1) {
    for (var _v2 = 0; _v2 < _v1.length; _v2++) {
      var _v3 = _v1[_v2];
      _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v14(_v3.key), _v3);
    }
  }
  function _v10() {
    try {
      var _v0 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (_v0) {}
    return (_v10 = function () {
      return !!_v0;
    })();
  }
  function _v11(_v0) {
    return (_v11 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v12(_v0, _v1) {
    return (_v12 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v13(_v0, _v1, _v2) {
    return (_v1 = _v14(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v14(_v0) {
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
  }
  function _v15(_v0) {
    return _v0.value;
  }
  var _v16 = function (_v0) {
    var _v1, _v2;
    function _v3() {
      var _v0, _v1, _v2;
      if (!(this instanceof _v3)) throw TypeError("Cannot call a class as a function");
      for (var _v3 = arguments.length, _v4 = Array(_v3), _v5 = 0; _v5 < _v3; _v5++) _v4[_v5] = arguments[_v5];
      return _v1 = _v3, _v2 = [].concat(_v4), _v1 = _v11(_v1), _v13(_v0 = function (_v0, _v1) {
        if (_v1 && ("object" === _v5(_v1) || "function" == typeof _v1)) return _v1;
        if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
        var _v2 = _v0;
        if (void 0 === _v2) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _v2;
      }(this, _v10() ? Reflect.construct(_v1, _v2 || [], _v11(this).constructor) : _v1.apply(this, _v2)), "lastBoundingBox", {
        width: -1,
        height: -1
      }), _v0;
    }
    if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
    return _v3.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v3,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(_v3, "prototype", {
      writable: !1
    }), _v0 && _v12(_v3, _v0), _v1 = [{
      key: "componentDidMount",
      value: function () {
        this.updateBBox();
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        this.updateBBox();
      }
    }, {
      key: "getBBox",
      value: function () {
        if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
          var _v0 = this.wrapperNode.getBoundingClientRect();
          return _v0.height = this.wrapperNode.offsetHeight, _v0.width = this.wrapperNode.offsetWidth, _v0;
        }
        return null;
      }
    }, {
      key: "updateBBox",
      value: function () {
        var _v0 = this.props.onBBoxUpdate,
          _v1 = this.getBBox();
        _v1 ? (Math.abs(_v1.width - this.lastBoundingBox.width) > 1 || Math.abs(_v1.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = _v1.width, this.lastBoundingBox.height = _v1.height, _v0 && _v0(_v1)) : (-1 !== this.lastBoundingBox.width || -1 !== this.lastBoundingBox.height) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, _v0 && _v0(null));
      }
    }, {
      key: "getBBoxSnapshot",
      value: function () {
        return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? _v8({}, this.lastBoundingBox) : {
          width: 0,
          height: 0
        };
      }
    }, {
      key: "getDefaultPosition",
      value: function (_v0) {
        var _v1,
          _v2,
          _v3 = this.props,
          _v4 = _v3.layout,
          _v5 = _v3.align,
          _v6 = _v3.verticalAlign,
          _v7 = _v3.margin,
          _v8 = _v3.chartWidth,
          _v9 = _v3.chartHeight;
        return _v0 && (void 0 !== _v0.left && null !== _v0.left || void 0 !== _v0.right && null !== _v0.right) || (_v1 = "center" === _v5 && "vertical" === _v4 ? {
          left: ((_v8 || 0) - this.getBBoxSnapshot().width) / 2
        } : "right" === _v5 ? {
          right: _v7 && _v7.right || 0
        } : {
          left: _v7 && _v7.left || 0
        }), _v0 && (void 0 !== _v0.top && null !== _v0.top || void 0 !== _v0.bottom && null !== _v0.bottom) || (_v2 = "middle" === _v6 ? {
          top: ((_v9 || 0) - this.getBBoxSnapshot().height) / 2
        } : "bottom" === _v6 ? {
          bottom: _v7 && _v7.bottom || 0
        } : {
          top: _v7 && _v7.top || 0
        }), _v8(_v8({}, _v1), _v2);
      }
    }, {
      key: "render",
      value: function () {
        var _v0 = this,
          _v1 = this.props,
          _v2 = _v1.content,
          _v3 = _v1.width,
          _v4 = _v1.height,
          _v5 = _v1.wrapperStyle,
          _v6 = _v1.payloadUniqBy,
          _v7 = _v1.payload,
          _v8 = _v8(_v8({
            position: "absolute",
            width: _v3 || "auto",
            height: _v4 || "auto"
          }, this.getDefaultPosition(_v5)), _v5);
        return _v1.default.createElement("div", {
          className: "recharts-legend-wrapper",
          style: _v8,
          ref: function (_v0) {
            _v0.wrapperNode = _v0;
          }
        }, function (_v0, _v1) {
          if (_v1.default.isValidElement(_v0)) return _v1.default.cloneElement(_v0, _v1);
          if ("function" == typeof _v0) return _v1.default.createElement(_v0, _v1);
          _v1.ref;
          var _v2 = function (_v0, _v1) {
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
          }(_v1, _v6);
          return _v1.default.createElement(_v2.DefaultLegendContent, _v2);
        }(_v2, _v8(_v8({}, this.props), {}, {
          payload: (0, _v4.getUniqPayload)(_v7, _v6, _v15)
        })));
      }
    }], _v2 = [{
      key: "getWithHeight",
      value: function (_v0, _v1) {
        var _v2 = _v8(_v8({}, this.defaultProps), _v0.props).layout;
        return "vertical" === _v2 && (0, _v3.isNumber)(_v0.props.height) ? {
          height: _v0.props.height
        } : "horizontal" === _v2 ? {
          width: _v0.props.width || _v1
        } : null;
      }
    }], _v1 && _v9(_v3.prototype, _v1), _v2 && _v9(_v3, _v2), Object.defineProperty(_v3, "prototype", {
      writable: !1
    }), _v3;
  }(_v1.PureComponent);
  _v13(_v16, "displayName", "Legend"), _v13(_v16, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom"
  }), _v0.s(["Legend", 0, _v16]);
}