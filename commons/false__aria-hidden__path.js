{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7(_v0) {
    return (0, _v6.jsx)(_v1.Icon, {
      focusable: "false",
      "aria-hidden": !0,
      ..._v0,
      children: (0, _v6.jsx)("path", {
        fill: "currentColor",
        d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
      })
    });
  }
  var _v8 = (0, _v3.forwardRef)(function (_v0, _v1) {
    let _v2 = (0, _v5.useStyleConfig)("CloseButton", _v0),
      {
        children: _v3,
        isDisabled: _v4,
        __css: _v5,
        ..._v6
      } = (0, _v4.omitThemingProps)(_v0);
    return (0, _v6.jsx)(_v2.chakra.button, {
      type: "button",
      "aria-label": "Close",
      ref: _v1,
      disabled: _v4,
      __css: {
        outline: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ..._v2,
        ..._v5
      },
      ..._v6,
      children: _v3 || (0, _v6.jsx)(_v7, {
        width: "1em",
        height: "1em"
      })
    });
  });
  _v8.displayName = "CloseButton", _v0.s(["CloseButton", 0, _v8]);
}