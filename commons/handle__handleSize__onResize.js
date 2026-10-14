{
  "use strict";

  _v2.__esModule = !0, _v2.default = void 0;
  var _v3 = _v9(_v0.r(0)),
    _v4 = _v8(_v0.r(0)),
    _v5 = _v8(_v0.r(0)),
    _v6 = _v0.r(0);
  let _v7 = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function _v8(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  function _v9(_v0, _v1) {
    if ("function" == typeof WeakMap) var _v2 = new WeakMap(),
      _v3 = new WeakMap();
    return (_v9 = function (_v0, _v1) {
      if (!_v1 && _v0 && _v0.__esModule) return _v0;
      var _v2,
        _v3,
        _v4 = {
          __proto__: null,
          default: _v0
        };
      if (null === _v0 || "object" != typeof _v0 && "function" != typeof _v0) return _v4;
      if (_v2 = _v1 ? _v3 : _v2) {
        if (_v2.has(_v0)) return _v2.get(_v0);
        _v2.set(_v0, _v4);
      }
      for (let _v0 in _v0) "default" !== _v0 && {}.hasOwnProperty.call(_v0, _v0) && ((_v3 = (_v2 = Object.defineProperty) && Object.getOwnPropertyDescriptor(_v0, _v0)) && (_v3.get || _v3.set) ? _v2(_v4, _v0, _v3) : _v4[_v0] = _v0[_v0]);
      return _v4;
    })(_v0, _v1);
  }
  function _v10() {
    return (_v10 = Object.assign.bind()).apply(null, arguments);
  }
  function _v11(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v12(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v11(Object(_v2), !0).forEach(function (_v0) {
        var _v1, _v2, _v3;
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" != typeof _v0 || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != typeof _v3) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == typeof _v1 ? _v1 : _v1 + "";
        }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
          value: _v3,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v1[_v2] = _v3;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v11(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  class _v13 extends _v3.Component {
    constructor() {
      super(...arguments), this.state = {
        width: this.props.width,
        height: this.props.height,
        propsWidth: this.props.width,
        propsHeight: this.props.height
      }, this.onResize = (_v0, _v1) => {
        let {
          size: _v2
        } = _v1;
        this.props.onResize ? (_v0.persist?.(), this.setState(_v2, () => this.props.onResize && this.props.onResize(_v0, _v1))) : this.setState(_v2);
      };
    }
    static getDerivedStateFromProps(_v0, _v1) {
      return _v1.propsWidth !== _v0.width || _v1.propsHeight !== _v0.height ? {
        width: _v0.width,
        height: _v0.height,
        propsWidth: _v0.width,
        propsHeight: _v0.height
      } : null;
    }
    render() {
      let _v0 = this.props,
        {
          handle: _v1,
          handleSize: _v2,
          onResize: _v3,
          onResizeStart: _v4,
          onResizeStop: _v5,
          draggableOpts: _v6,
          minConstraints: _v7,
          maxConstraints: _v8,
          lockAspectRatio: _v9,
          axis: _v10,
          width: _v11,
          height: _v12,
          resizeHandles: _v13,
          style: _v14,
          transformScale: _v15
        } = _v0,
        _v16 = function (_v0, _v1) {
          if (null == _v0) return {};
          var _v2,
            _v3,
            _v4 = function (_v0, _v1) {
              if (null == _v0) return {};
              var _v2 = {};
              for (var _v3 in _v0) if ({}.hasOwnProperty.call(_v0, _v3)) {
                if (-1 !== _v1.indexOf(_v3)) continue;
                _v2[_v3] = _v0[_v3];
              }
              return _v2;
            }(_v0, _v1);
          if (Object.getOwnPropertySymbols) {
            var _v5 = Object.getOwnPropertySymbols(_v0);
            for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], -1 === _v1.indexOf(_v2) && {}.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
          }
          return _v4;
        }(_v0, _v7);
      return _v3.createElement(_v5.default, {
        axis: _v10,
        draggableOpts: _v6,
        handle: _v1,
        handleSize: _v2,
        height: this.state.height,
        lockAspectRatio: _v9,
        maxConstraints: _v8,
        minConstraints: _v7,
        onResizeStart: _v4,
        onResize: this.onResize,
        onResizeStop: _v5,
        resizeHandles: _v13,
        transformScale: _v15,
        width: this.state.width
      }, _v3.createElement("div", _v10({}, _v16, {
        style: _v12(_v12({}, _v14), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }
  }
  _v2.default = _v13, _v13.propTypes = _v12(_v12({}, _v6.resizableProps), {}, {
    children: _v4.default.element
  });
}