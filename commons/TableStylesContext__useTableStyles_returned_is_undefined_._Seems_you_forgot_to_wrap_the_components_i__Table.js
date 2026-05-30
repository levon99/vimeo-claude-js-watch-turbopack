{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    [_v8, _v9] = (0, _v6.createContext)({
      name: "TableStylesContext",
      errorMessage: "useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "
    }),
    _v10 = (0, _v2.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v4.useMultiStyleConfig)("Table", _v0),
        {
          className: _v3,
          layout: _v4,
          ..._v5
        } = (0, _v3.omitThemingProps)(_v0);
      return (0, _v7.jsx)(_v8, {
        value: _v2,
        children: (0, _v7.jsx)(_v1.chakra.table, {
          ref: _v1,
          __css: {
            tableLayout: _v4,
            ..._v2.table
          },
          className: (0, _v5.cx)("chakra-table", _v3),
          ..._v5
        })
      });
    });
  _v10.displayName = "Table", _v0.s(["Table", 0, _v10, "useTableStyles", 0, _v9]);
}