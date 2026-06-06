{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = (0, _v2.forwardRef)(function (_v0, _v1) {
      let {
        templateAreas: _v2,
        gap: _v3,
        rowGap: _v4,
        columnGap: _v5,
        column: _v6,
        row: _v7,
        autoFlow: _v8,
        autoRows: _v9,
        templateRows: _v10,
        autoColumns: _v11,
        templateColumns: _v12,
        ..._v13
      } = _v0;
      return (0, _v3.jsx)(_v1.chakra.div, {
        ref: _v1,
        __css: {
          display: "grid",
          gridTemplateAreas: _v2,
          gridGap: _v3,
          gridRowGap: _v4,
          gridColumnGap: _v5,
          gridAutoColumns: _v11,
          gridColumn: _v6,
          gridRow: _v7,
          gridAutoFlow: _v8,
          gridAutoRows: _v9,
          gridTemplateRows: _v10,
          gridTemplateColumns: _v12
        },
        ..._v13
      });
    });
  _v4.displayName = "Grid", _v0.s(["Grid", 0, _v4]);
}