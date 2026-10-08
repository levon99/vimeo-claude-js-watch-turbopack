{
  "use strict";

  let _v1 = {
    RIGHT: "right",
    TOP: "top"
  };
  _v0.s(["DragEdgeDirection", 0, _v1], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["default", 0, ({
    position: _v0,
    isDragging: _v1,
    isVisible: _v2,
    onMouseDown: _v3,
    dataTestId: _v4
  }) => {
    let _v5 = {
        ...(_v0 === _v1.RIGHT && {
          top: "0",
          left: "calc(100% - 4px)",
          width: "10px",
          height: "100%"
        }),
        ...(_v0 === _v1.TOP && {
          left: "0",
          bottom: "calc(100% - 4px)",
          width: "100%",
          height: "10px"
        })
      },
      _v6 = {
        position: "relative",
        ...(_v0 === _v1.RIGHT && {
          height: "48px",
          width: "4px",
          left: "-10px",
          cursor: "ew-resize"
        }),
        ...(_v0 === _v1.TOP && {
          width: "48px",
          height: "4px",
          bottom: "6px",
          cursor: "ns-resize"
        })
      };
    return (0, _v2.jsx)(_v4.Center, {
      position: "absolute",
      display: _v2 ? "flex" : "none",
      zIndex: 10,
      sx: _v5,
      children: (0, _v2.jsx)(_v3.Box, {
        sx: _v6,
        background: _v1 ? "input-stroke-hover" : "stroke",
        borderRadius: "sm",
        onMouseDown: _v3,
        _hover: {
          background: "input-stroke-hover"
        },
        "data-testid": _v4
      })
    });
  }], 0);
}