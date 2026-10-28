{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = void 0;
  var _v3 = _v11(_v0.r(0)),
    _v4 = _v10(_v0.r(0)),
    _v5 = _v10(_v0.r(0)),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v10(_v0.r(0));
  function _v10(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  function _v11(_v0, _v1) {
    if ("function" == typeof WeakMap) var _v2 = new WeakMap(),
      _v3 = new WeakMap();
    return (_v11 = function (_v0, _v1) {
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
  function _v12(_v0, _v1, _v2) {
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
  let _v13 = {
      start: "touchstart",
      move: "touchmove",
      stop: "touchend"
    },
    _v14 = {
      start: "mousedown",
      move: "mousemove",
      stop: "mouseup"
    },
    _v15 = _v14;
  class _v16 extends _v3.Component {
    constructor() {
      super(...arguments), _v12(this, "dragging", !1), _v12(this, "lastX", NaN), _v12(this, "lastY", NaN), _v12(this, "touchIdentifier", null), _v12(this, "mounted", !1), _v12(this, "handleDragStart", _v0 => {
        if (this.props.onMouseDown(_v0), !this.props.allowAnyClick && "number" == typeof _v0.button && 0 !== _v0.button) return !1;
        let _v1 = this.findDOMNode();
        if (!_v1 || !_v1.ownerDocument || !_v1.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
        let {
          ownerDocument: _v2
        } = _v1;
        if (this.props.disabled || !(_v0.target instanceof _v2.defaultView.Node) || this.props.handle && !(0, _v6.matchesSelectorAndParentsTo)(_v0.target, this.props.handle, _v1) || this.props.cancel && (0, _v6.matchesSelectorAndParentsTo)(_v0.target, this.props.cancel, _v1)) return;
        "touchstart" !== _v0.type || this.props.allowMobileScroll || _v0.preventDefault();
        let _v3 = (0, _v6.getTouchIdentifier)(_v0);
        this.touchIdentifier = _v3;
        let _v4 = (0, _v7.getControlPosition)(_v0, _v3, this);
        if (null == _v4) return;
        let {
            x: _v5,
            y: _v6
          } = _v4,
          _v7 = (0, _v7.createCoreData)(this, _v5, _v6);
        (0, _v9.default)("DraggableCore: handleDragStart: %j", _v7), (0, _v9.default)("calling", this.props.onStart), !1 !== this.props.onStart(_v0, _v7) && !1 !== this.mounted && (this.props.enableUserSelectHack && (0, _v6.addUserSelectStyles)(_v2), this.dragging = !0, this.lastX = _v5, this.lastY = _v6, (0, _v6.addEvent)(_v2, _v15.move, this.handleDrag), (0, _v6.addEvent)(_v2, _v15.stop, this.handleDragStop));
      }), _v12(this, "handleDrag", _v0 => {
        let _v1 = (0, _v7.getControlPosition)(_v0, this.touchIdentifier, this);
        if (null == _v1) return;
        let {
          x: _v2,
          y: _v3
        } = _v1;
        if (Array.isArray(this.props.grid)) {
          let _v0 = _v2 - this.lastX,
            _v1 = _v3 - this.lastY;
          if ([_v0, _v1] = (0, _v7.snapToGrid)(this.props.grid, _v0, _v1), !_v0 && !_v1) return;
          _v2 = this.lastX + _v0, _v3 = this.lastY + _v1;
        }
        let _v4 = (0, _v7.createCoreData)(this, _v2, _v3);
        if ((0, _v9.default)("DraggableCore: handleDrag: %j", _v4), !1 === this.props.onDrag(_v0, _v4) || !1 === this.mounted) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch (_v0) {
            let _v1 = document.createEvent("MouseEvents");
            _v1.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(_v1);
          }
          return;
        }
        this.lastX = _v2, this.lastY = _v3;
      }), _v12(this, "handleDragStop", _v0 => {
        if (!this.dragging) return;
        let _v1 = (0, _v7.getControlPosition)(_v0, this.touchIdentifier, this);
        if (null == _v1) return;
        let {
          x: _v2,
          y: _v3
        } = _v1;
        if (Array.isArray(this.props.grid)) {
          let _v0 = _v2 - this.lastX || 0,
            _v1 = _v3 - this.lastY || 0;
          [_v0, _v1] = (0, _v7.snapToGrid)(this.props.grid, _v0, _v1), _v2 = this.lastX + _v0, _v3 = this.lastY + _v1;
        }
        let _v4 = (0, _v7.createCoreData)(this, _v2, _v3);
        if (!1 === this.props.onStop(_v0, _v4) || !1 === this.mounted) return !1;
        let _v5 = this.findDOMNode();
        _v5 && this.props.enableUserSelectHack && (0, _v6.scheduleRemoveUserSelectStyles)(_v5.ownerDocument), (0, _v9.default)("DraggableCore: handleDragStop: %j", _v4), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, _v5 && ((0, _v9.default)("DraggableCore: Removing handlers"), (0, _v6.removeEvent)(_v5.ownerDocument, _v15.move, this.handleDrag), (0, _v6.removeEvent)(_v5.ownerDocument, _v15.stop, this.handleDragStop));
      }), _v12(this, "onMouseDown", _v0 => (_v15 = _v14, this.handleDragStart(_v0))), _v12(this, "onMouseUp", _v0 => (_v15 = _v14, this.handleDragStop(_v0))), _v12(this, "onTouchStart", _v0 => (_v15 = _v13, this.handleDragStart(_v0))), _v12(this, "onTouchEnd", _v0 => (_v15 = _v13, this.handleDragStop(_v0)));
    }
    componentDidMount() {
      this.mounted = !0;
      let _v0 = this.findDOMNode();
      _v0 && (0, _v6.addEvent)(_v0, _v13.start, this.onTouchStart, {
        passive: !1
      });
    }
    componentWillUnmount() {
      this.mounted = !1;
      let _v0 = this.findDOMNode();
      if (_v0) {
        let {
          ownerDocument: _v0
        } = _v0;
        (0, _v6.removeEvent)(_v0, _v14.move, this.handleDrag), (0, _v6.removeEvent)(_v0, _v13.move, this.handleDrag), (0, _v6.removeEvent)(_v0, _v14.stop, this.handleDragStop), (0, _v6.removeEvent)(_v0, _v13.stop, this.handleDragStop), (0, _v6.removeEvent)(_v0, _v13.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, _v6.scheduleRemoveUserSelectStyles)(_v0);
      }
    }
    findDOMNode() {
      return this.props?.nodeRef ? this.props?.nodeRef?.current : _v5.default.findDOMNode(this);
    }
    render() {
      return _v3.cloneElement(_v3.Children.only(this.props.children), {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd
      });
    }
  }
  _v2.default = _v16, _v12(_v16, "displayName", "DraggableCore"), _v12(_v16, "propTypes", {
    allowAnyClick: _v4.default.bool,
    allowMobileScroll: _v4.default.bool,
    children: _v4.default.node.isRequired,
    disabled: _v4.default.bool,
    enableUserSelectHack: _v4.default.bool,
    offsetParent: function (_v0, _v1) {
      if (_v0[_v1] && 1 !== _v0[_v1].nodeType) throw Error("Draggable's offsetParent must be a DOM Node.");
    },
    grid: _v4.default.arrayOf(_v4.default.number),
    handle: _v4.default.string,
    cancel: _v4.default.string,
    nodeRef: _v4.default.object,
    onStart: _v4.default.func,
    onDrag: _v4.default.func,
    onStop: _v4.default.func,
    onMouseDown: _v4.default.func,
    scale: _v4.default.number,
    className: _v8.dontSetMe,
    style: _v8.dontSetMe,
    transform: _v8.dontSetMe
  }), _v12(_v16, "defaultProps", {
    allowAnyClick: !1,
    allowMobileScroll: !1,
    disabled: !1,
    enableUserSelectHack: !0,
    onStart: function () {},
    onDrag: function () {},
    onStop: function () {},
    onMouseDown: function () {},
    scale: 1
  });
}