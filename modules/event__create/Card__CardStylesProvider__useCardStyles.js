{
  "use strict";

  var [_v1, _v2] = (0, _v0.i(0).createStylesContext)("Card");
  _v0.s(["CardStylesProvider", 0, _v1, "useCardStyles", 0, _v2], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = (0, _v4.forwardRef)(function (_v0, _v1) {
      let {
          className: _v2,
          children: _v3,
          direction: _v4 = "column",
          justify: _v5,
          align: _v6,
          ..._v7
        } = (0, _v6.omitThemingProps)(_v0),
        _v8 = (0, _v7.useMultiStyleConfig)("Card", _v0);
      return (0, _v8.jsx)(_v5.chakra.div, {
        ref: _v1,
        className: (0, _v3.cx)("chakra-card", _v2),
        __css: {
          display: "flex",
          flexDirection: _v4,
          justifyContent: _v5,
          alignItems: _v6,
          position: "relative",
          minWidth: 0,
          wordWrap: "break-word",
          ..._v8.container
        },
        ..._v7,
        children: (0, _v8.jsx)(_v1, {
          value: _v8,
          children: _v3
        })
      });
    });
  _v0.s(["Card", 0, _v9], 0);
}