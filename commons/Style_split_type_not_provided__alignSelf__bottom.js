{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    var _v1 = _v0.style,
      _v2 = _v0.layout,
      _v3 = _v0.display,
      _v4 = {},
      _v5 = {};
    return (Object.keys(_v1).map(function (_v0) {
      return _v3.includes(_v0) ? _v4[_v0] = _v1[_v0] : _v5[_v0] = _v1[_v0];
    }), void 0 !== _v2 && _v2) ? (0, _v1.c)({}, _v4) : void 0 !== _v3 && _v3 ? (0, _v1.c)({}, _v5) : void console.warn("Style split type not provided!");
  }
  var _v3 = ["alignSelf", "bottom", "display", "flex", "flexBasis", "float", "height", "left", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "minHeight", "minWidth", "position", "right", "top", "width", "flexGrow", "flexShrink", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "justifySelf", "placeSelf"];
  _v0.s(["useLayoutStyles", 0, function (_v0) {
    return (void 0 === _v0 && (_v0 = null), _v0) ? [_v2({
      style: _v0,
      layout: !0
    }), _v2({
      style: _v0,
      display: !0
    })] : [null];
  }]);
}