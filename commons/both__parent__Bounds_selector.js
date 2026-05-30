{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.canDragX = function (_v0) {
    return "both" === _v0.props.axis || "x" === _v0.props.axis;
  }, _v2.canDragY = function (_v0) {
    return "both" === _v0.props.axis || "y" === _v0.props.axis;
  }, _v2.createCoreData = function (_v0, _v1, _v2) {
    let _v3 = !(0, _v3.isNum)(_v0.lastX),
      _v4 = _v5(_v0);
    return _v3 ? {
      node: _v4,
      deltaX: 0,
      deltaY: 0,
      lastX: _v1,
      lastY: _v2,
      x: _v1,
      y: _v2
    } : {
      node: _v4,
      deltaX: _v1 - _v0.lastX,
      deltaY: _v2 - _v0.lastY,
      lastX: _v0.lastX,
      lastY: _v0.lastY,
      x: _v1,
      y: _v2
    };
  }, _v2.createDraggableData = function (_v0, _v1) {
    let _v2 = _v0.props.scale;
    return {
      node: _v1.node,
      x: _v0.state.x + _v1.deltaX / _v2,
      y: _v0.state.y + _v1.deltaY / _v2,
      deltaX: _v1.deltaX / _v2,
      deltaY: _v1.deltaY / _v2,
      lastX: _v0.state.x,
      lastY: _v0.state.y
    };
  }, _v2.getBoundPosition = function (_v0, _v1, _v2) {
    var _v3;
    if (!_v0.props.bounds) return [_v1, _v2];
    let {
      bounds: _v4
    } = _v0.props;
    _v4 = "string" == typeof _v4 ? _v4 : {
      left: (_v3 = _v4).left,
      top: _v3.top,
      right: _v3.right,
      bottom: _v3.bottom
    };
    let _v5 = _v5(_v0);
    if ("string" == typeof _v4) {
      let _v0,
        {
          ownerDocument: _v1
        } = _v5,
        _v2 = _v1.defaultView;
      if (!((_v0 = "parent" === _v4 ? _v5.parentNode : _v5.getRootNode().querySelector(_v4)) instanceof _v2.HTMLElement)) throw Error('Bounds selector "' + _v4 + '" could not find an element.');
      let _v3 = _v2.getComputedStyle(_v5),
        _v4 = _v2.getComputedStyle(_v0);
      _v4 = {
        left: -_v5.offsetLeft + (0, _v3.int)(_v4.paddingLeft) + (0, _v3.int)(_v3.marginLeft),
        top: -_v5.offsetTop + (0, _v3.int)(_v4.paddingTop) + (0, _v3.int)(_v3.marginTop),
        right: (0, _v4.innerWidth)(_v0) - (0, _v4.outerWidth)(_v5) - _v5.offsetLeft + (0, _v3.int)(_v4.paddingRight) - (0, _v3.int)(_v3.marginRight),
        bottom: (0, _v4.innerHeight)(_v0) - (0, _v4.outerHeight)(_v5) - _v5.offsetTop + (0, _v3.int)(_v4.paddingBottom) - (0, _v3.int)(_v3.marginBottom)
      };
    }
    return (0, _v3.isNum)(_v4.right) && (_v1 = Math.min(_v1, _v4.right)), (0, _v3.isNum)(_v4.bottom) && (_v2 = Math.min(_v2, _v4.bottom)), (0, _v3.isNum)(_v4.left) && (_v1 = Math.max(_v1, _v4.left)), (0, _v3.isNum)(_v4.top) && (_v2 = Math.max(_v2, _v4.top)), [_v1, _v2];
  }, _v2.getControlPosition = function (_v0, _v1, _v2) {
    let _v3 = "number" == typeof _v1 ? (0, _v4.getTouch)(_v0, _v1) : null;
    if ("number" == typeof _v1 && !_v3) return null;
    let _v4 = _v5(_v2),
      _v5 = _v2.props.offsetParent || _v4.offsetParent || _v4.ownerDocument.body;
    return (0, _v4.offsetXYFromParent)(_v3 || _v0, _v5, _v2.props.scale);
  }, _v2.snapToGrid = function (_v0, _v1, _v2) {
    return [Math.round(_v1 / _v0[0]) * _v0[0], Math.round(_v2 / _v0[1]) * _v0[1]];
  };
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0) {
    let _v1 = _v0.findDOMNode();
    if (!_v1) throw Error("<DraggableCore>: Unmounted during event!");
    return _v1;
  }
}