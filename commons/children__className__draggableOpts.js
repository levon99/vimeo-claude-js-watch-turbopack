{
  "use strict";

  _v2.__esModule = !0, _v2.default = void 0;
  var _v3 = _v8(_v0.r(0)),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  let _v7 = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function _v8(_v0, _v1) {
    if ("function" == typeof WeakMap) var _v2 = new WeakMap(),
      _v3 = new WeakMap();
    return (_v8 = function (_v0, _v1) {
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
  function _v9() {
    return (_v9 = Object.assign.bind()).apply(null, arguments);
  }
  function _v10(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v11(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v10(Object(_v2), !0).forEach(function (_v0) {
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
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v10(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  class _v12 extends _v3.Component {
    constructor() {
      super(...arguments), this.handleRefs = {}, this.lastHandleRect = null, this.slack = null, this.lastSize = null;
    }
    componentWillUnmount() {
      this.resetData();
    }
    resetData() {
      this.lastHandleRect = this.slack = this.lastSize = null;
    }
    runConstraints(_v0, _v1) {
      let {
        minConstraints: _v2,
        maxConstraints: _v3,
        lockAspectRatio: _v4
      } = this.props;
      if (!_v2 && !_v3 && !_v4) return [_v0, _v1];
      if (_v4) {
        let _v0 = this.props.width / this.props.height;
        Math.abs(_v0 - this.props.width) > Math.abs((_v1 - this.props.height) * _v0) ? _v1 = _v0 / _v0 : _v0 = _v1 * _v0;
      }
      let [_v5, _v6] = [_v0, _v1],
        [_v7, _v8] = this.slack || [0, 0];
      return _v0 += _v7, _v1 += _v8, _v2 && (_v0 = Math.max(_v2[0], _v0), _v1 = Math.max(_v2[1], _v1)), _v3 && (_v0 = Math.min(_v3[0], _v0), _v1 = Math.min(_v3[1], _v1)), this.slack = [_v7 + (_v5 - _v0), _v8 + (_v6 - _v1)], [_v0, _v1];
    }
    resizeHandler(_v0, _v1) {
      return (_v0, _v1) => {
        let {
          node: _v2,
          deltaX: _v3,
          deltaY: _v4
        } = _v1;
        "onResizeStart" === _v0 && this.resetData();
        let _v5 = ("both" === this.props.axis || "x" === this.props.axis) && "n" !== _v1 && "s" !== _v1,
          _v6 = ("both" === this.props.axis || "y" === this.props.axis) && "e" !== _v1 && "w" !== _v1;
        if (!_v5 && !_v6) return;
        let _v7 = _v1[0],
          _v8 = _v1[_v1.length - 1],
          _v9 = _v2.getBoundingClientRect();
        null != this.lastHandleRect && ("w" === _v8 && (_v3 += _v9.left - this.lastHandleRect.left), "n" === _v7 && (_v4 += _v9.top - this.lastHandleRect.top)), this.lastHandleRect = _v9, "w" === _v8 && (_v3 = -_v3), "n" === _v7 && (_v4 = -_v4);
        let _v10 = this.props.width + (_v5 ? _v3 / this.props.transformScale : 0),
          _v11 = this.props.height + (_v6 ? _v4 / this.props.transformScale : 0);
        [_v10, _v11] = this.runConstraints(_v10, _v11), "onResizeStop" === _v0 && this.lastSize && ({
          width: _v10,
          height: _v11
        } = this.lastSize);
        let _v12 = _v10 !== this.props.width || _v11 !== this.props.height;
        "onResizeStop" !== _v0 && (this.lastSize = {
          width: _v10,
          height: _v11
        });
        let _v13 = "function" == typeof this.props[_v0] ? this.props[_v0] : null;
        _v13 && !("onResize" === _v0 && !_v12) && (_v0.persist?.(), _v13(_v0, {
          node: _v2,
          size: {
            width: _v10,
            height: _v11
          },
          handle: _v1
        })), "onResizeStop" === _v0 && this.resetData();
      };
    }
    renderResizeHandle(_v0, _v1) {
      let {
        handle: _v2
      } = this.props;
      if (!_v2) return _v3.createElement("span", {
        className: `react-resizable-handle react-resizable-handle-${_v0}`,
        ref: _v1
      });
      if ("function" == typeof _v2) return _v2(_v0, _v1);
      let _v3 = _v11({
        ref: _v1
      }, "string" == typeof _v2.type ? {} : {
        handleAxis: _v0
      });
      return _v3.cloneElement(_v2, _v3);
    }
    render() {
      let _v0 = this.props,
        {
          children: _v1,
          className: _v2,
          draggableOpts: _v3,
          width: _v4,
          height: _v5,
          handle: _v6,
          handleSize: _v7,
          lockAspectRatio: _v8,
          axis: _v9,
          minConstraints: _v10,
          maxConstraints: _v11,
          onResize: _v12,
          onResizeStop: _v13,
          onResizeStart: _v14,
          resizeHandles: _v15,
          transformScale: _v16
        } = _v0,
        _v17 = function (_v0, _v1) {
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
      return (0, _v5.cloneElement)(_v1, _v11(_v11({}, _v17), {}, {
        className: `${_v2 ? `${_v2} ` : ""}react-resizable`,
        children: [..._v3.Children.toArray(_v1.props.children), ..._v15.map(_v0 => {
          let _v1 = this.handleRefs[_v0] ?? (this.handleRefs[_v0] = _v3.createRef());
          return _v3.createElement(_v4.DraggableCore, _v9({}, _v3, {
            nodeRef: _v1,
            key: `resizableHandle-${_v0}`,
            onStop: this.resizeHandler("onResizeStop", _v0),
            onStart: this.resizeHandler("onResizeStart", _v0),
            onDrag: this.resizeHandler("onResize", _v0)
          }), this.renderResizeHandle(_v0, _v1));
        })]
      }));
    }
  }
  _v2.default = _v12, _v12.propTypes = _v6.resizableProps, _v12.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  };
}