{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = (0, _v1.chakra)("div", {
      baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    });
  _v4.displayName = "Center";
  var _v5 = {
    horizontal: {
      insetStart: "50%",
      transform: "translateX(-50%)"
    },
    vertical: {
      top: "50%",
      transform: "translateY(-50%)"
    },
    both: {
      insetStart: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    }
  };
  (0, _v2.forwardRef)(function (_v0, _v1) {
    let {
      axis: _v2 = "both",
      ..._v3
    } = _v0;
    return (0, _v3.jsx)(_v1.chakra.div, {
      ref: _v1,
      __css: _v5[_v2],
      ..._v3,
      position: "absolute"
    });
  }), _v0.s(["Center", 0, _v4]);
}