{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          spacing: _v2 = "0.5rem",
          spacingX: _v3,
          spacingY: _v4,
          children: _v5,
          justify: _v6,
          direction: _v7,
          align: _v8,
          className: _v9,
          shouldWrapChildren: _v10,
          ..._v11
        } = _v0,
        _v12 = (0, _v4.useMemo)(() => _v10 ? _v4.Children.map(_v5, (_v0, _v1) => (0, _v5.jsx)(_v7, {
          children: _v0
        }, _v1)) : _v5, [_v5, _v10]);
      return (0, _v5.jsx)(_v2.chakra.div, {
        ref: _v1,
        className: (0, _v1.cx)("chakra-wrap", _v9),
        ..._v11,
        children: (0, _v5.jsx)(_v2.chakra.ul, {
          className: "chakra-wrap__list",
          __css: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: _v6,
            alignItems: _v8,
            flexDirection: _v7,
            listStyleType: "none",
            gap: _v2,
            columnGap: _v3,
            rowGap: _v4,
            padding: "0"
          },
          children: _v12
        })
      });
    });
  _v6.displayName = "Wrap";
  var _v7 = (0, _v3.forwardRef)(function (_v0, _v1) {
    let {
      className: _v2,
      ..._v3
    } = _v0;
    return (0, _v5.jsx)(_v2.chakra.li, {
      ref: _v1,
      __css: {
        display: "flex",
        alignItems: "flex-start"
      },
      className: (0, _v1.cx)("chakra-wrap__listitem", _v2),
      ..._v3
    });
  });
  _v7.displayName = "WrapItem", _v0.s(["Wrap", 0, _v6, "WrapItem", 0, _v7]);
}