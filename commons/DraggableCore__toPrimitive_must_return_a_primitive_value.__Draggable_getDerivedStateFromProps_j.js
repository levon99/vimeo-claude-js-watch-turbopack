{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "DraggableCore", {
    enumerable: !0,
    get: function () {
      return _v10.default;
    }
  }), _v2.default = void 0;
  var _v3 = _v13(_v0.r(0)),
    _v4 = _v12(_v0.r(0)),
    _v5 = _v12(_v0.r(0)),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v12(_v0.r(0)),
    _v11 = _v12(_v0.r(0));
  function _v12(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  function _v13(_v0, _v1) {
    if ("function" == typeof WeakMap) var _v2 = new WeakMap(),
      _v3 = new WeakMap();
    return (_v13 = function (_v0, _v1) {
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
  function _v14() {
    return (_v14 = Object.assign.bind()).apply(null, arguments);
  }
  function _v15(_v0, _v1, _v2) {
    var _v3;
    return (_v1 = "symbol" == typeof (_v3 = function (_v0, _v1) {
      if ("object" != typeof _v0 || !_v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" != typeof _v3) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v1, "string")) ? _v3 : _v3 + "") in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  class _v16 extends _v3.Component {
    static getDerivedStateFromProps(_v0, _v1) {
      let {
          position: _v2
        } = _v0,
        {
          prevPropsPosition: _v3
        } = _v1;
      return _v2 && (!_v3 || _v2.x !== _v3.x || _v2.y !== _v3.y) ? ((0, _v11.default)("Draggable: getDerivedStateFromProps %j", {
        position: _v2,
        prevPropsPosition: _v3
      }), {
        x: _v2.x,
        y: _v2.y,
        prevPropsPosition: {
          ..._v2
        }
      }) : null;
    }
    constructor(_v0) {
      super(_v0), _v15(this, "onDragStart", (_v0, _v1) => {
        if ((0, _v11.default)("Draggable: onDragStart: %j", _v1), !1 === this.props.onStart(_v0, (0, _v8.createDraggableData)(this, _v1))) return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), _v15(this, "onDrag", (_v0, _v1) => {
        if (!this.state.dragging) return !1;
        (0, _v11.default)("Draggable: onDrag: %j", _v1);
        let _v2 = (0, _v8.createDraggableData)(this, _v1),
          _v3 = {
            x: _v2.x,
            y: _v2.y,
            slackX: 0,
            slackY: 0
          };
        if (this.props.bounds) {
          let {
            x: _v0,
            y: _v1
          } = _v3;
          _v3.x += this.state.slackX, _v3.y += this.state.slackY;
          let [_v2, _v3] = (0, _v8.getBoundPosition)(this, _v3.x, _v3.y);
          _v3.x = _v2, _v3.y = _v3, _v3.slackX = this.state.slackX + (_v0 - _v3.x), _v3.slackY = this.state.slackY + (_v1 - _v3.y), _v2.x = _v3.x, _v2.y = _v3.y, _v2.deltaX = _v3.x - this.state.x, _v2.deltaY = _v3.y - this.state.y;
        }
        if (!1 === this.props.onDrag(_v0, _v2)) return !1;
        this.setState(_v3);
      }), _v15(this, "onDragStop", (_v0, _v1) => {
        if (!this.state.dragging || !1 === this.props.onStop(_v0, (0, _v8.createDraggableData)(this, _v1))) return !1;
        (0, _v11.default)("Draggable: onDragStop: %j", _v1);
        let _v2 = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (this.props.position) {
          let {
            x: _v0,
            y: _v1
          } = this.props.position;
          _v2.x = _v0, _v2.y = _v1;
        }
        this.setState(_v2);
      }), this.state = {
        dragging: !1,
        dragged: !1,
        x: _v0.position ? _v0.position.x : _v0.defaultPosition.x,
        y: _v0.position ? _v0.position.y : _v0.defaultPosition.y,
        prevPropsPosition: {
          ..._v0.position
        },
        slackX: 0,
        slackY: 0,
        isElementSVG: !1
      }, _v0.position && !(_v0.onDrag || _v0.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    componentDidMount() {
      void 0 !== window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({
        isElementSVG: !0
      });
    }
    componentWillUnmount() {
      this.state.dragging && this.setState({
        dragging: !1
      });
    }
    findDOMNode() {
      return this.props?.nodeRef?.current ?? _v5.default.findDOMNode(this);
    }
    render() {
      let {
          axis: _v0,
          bounds: _v1,
          children: _v2,
          defaultPosition: _v3,
          defaultClassName: _v4,
          defaultClassNameDragging: _v5,
          defaultClassNameDragged: _v6,
          position: _v7,
          positionOffset: _v8,
          scale: _v9,
          ..._v10
        } = this.props,
        _v11 = {},
        _v12 = null,
        _v13 = !_v7 || this.state.dragging,
        _v14 = _v7 || _v3,
        _v15 = {
          x: (0, _v8.canDragX)(this) && _v13 ? this.state.x : _v14.x,
          y: (0, _v8.canDragY)(this) && _v13 ? this.state.y : _v14.y
        };
      this.state.isElementSVG ? _v12 = (0, _v7.createSVGTransform)(_v15, _v8) : _v11 = (0, _v7.createCSSTransform)(_v15, _v8);
      let _v16 = (0, _v6.clsx)(_v2.props.className || "", _v4, {
        [_v5]: this.state.dragging,
        [_v6]: this.state.dragged
      });
      return _v3.createElement(_v10.default, _v14({}, _v10, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), _v3.cloneElement(_v3.Children.only(_v2), {
        className: _v16,
        style: {
          ..._v2.props.style,
          ..._v11
        },
        transform: _v12
      }));
    }
  }
  _v2.default = _v16, _v15(_v16, "displayName", "Draggable"), _v15(_v16, "propTypes", {
    ..._v10.default.propTypes,
    axis: _v4.default.oneOf(["both", "x", "y", "none"]),
    bounds: _v4.default.oneOfType([_v4.default.shape({
      left: _v4.default.number,
      right: _v4.default.number,
      top: _v4.default.number,
      bottom: _v4.default.number
    }), _v4.default.string, _v4.default.oneOf([!1])]),
    defaultClassName: _v4.default.string,
    defaultClassNameDragging: _v4.default.string,
    defaultClassNameDragged: _v4.default.string,
    defaultPosition: _v4.default.shape({
      x: _v4.default.number,
      y: _v4.default.number
    }),
    positionOffset: _v4.default.shape({
      x: _v4.default.oneOfType([_v4.default.number, _v4.default.string]),
      y: _v4.default.oneOfType([_v4.default.number, _v4.default.string])
    }),
    position: _v4.default.shape({
      x: _v4.default.number,
      y: _v4.default.number
    }),
    className: _v9.dontSetMe,
    style: _v9.dontSetMe,
    transform: _v9.dontSetMe
  }), _v15(_v16, "defaultProps", {
    ..._v10.default.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  });
}