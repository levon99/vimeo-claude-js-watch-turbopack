{
  "use strict";

  _v2.__esModule = !0, _v2.resizableProps = void 0;
  var _v3,
    _v4 = (_v3 = _v0.r(0)) && _v3.__esModule ? _v3 : {
      default: _v3
    };
  _v0.r(0), _v2.resizableProps = {
    axis: _v4.default.oneOf(["both", "x", "y", "none"]),
    className: _v4.default.string,
    children: _v4.default.element.isRequired,
    draggableOpts: _v4.default.shape({
      allowAnyClick: _v4.default.bool,
      cancel: _v4.default.string,
      children: _v4.default.node,
      disabled: _v4.default.bool,
      enableUserSelectHack: _v4.default.bool,
      offsetParent: "u" > typeof Element ? _v4.default.instanceOf(Element) : _v4.default.any,
      grid: _v4.default.arrayOf(_v4.default.number),
      handle: _v4.default.string,
      nodeRef: _v4.default.object,
      onStart: _v4.default.func,
      onDrag: _v4.default.func,
      onStop: _v4.default.func,
      onMouseDown: _v4.default.func,
      scale: _v4.default.number
    }),
    height: function () {
      for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
      let [_v3] = _v1;
      return "both" === _v3.axis || "y" === _v3.axis ? _v4.default.number.isRequired(..._v1) : _v4.default.number(..._v1);
    },
    handle: _v4.default.oneOfType([_v4.default.node, _v4.default.func]),
    handleSize: _v4.default.arrayOf(_v4.default.number),
    lockAspectRatio: _v4.default.bool,
    maxConstraints: _v4.default.arrayOf(_v4.default.number),
    minConstraints: _v4.default.arrayOf(_v4.default.number),
    onResizeStop: _v4.default.func,
    onResizeStart: _v4.default.func,
    onResize: _v4.default.func,
    resizeHandles: _v4.default.arrayOf(_v4.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
    transformScale: _v4.default.number,
    width: function () {
      for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
      let [_v3] = _v1;
      return "both" === _v3.axis || "x" === _v3.axis ? _v4.default.number.isRequired(..._v1) : _v4.default.number(..._v1);
    }
  };
}