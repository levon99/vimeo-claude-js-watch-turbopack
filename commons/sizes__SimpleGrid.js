{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v2.forwardRef)(function (_v0, _v1) {
      var _v2, _v3, _v4;
      let {
          columns: _v5,
          spacingX: _v6,
          spacingY: _v7,
          spacing: _v8,
          minChildWidth: _v9,
          ..._v10
        } = _v0,
        _v11 = (0, _v4.useTheme)(),
        _v12 = _v9 ? (_v2 = _v9, _v3 = _v11, (0, _v5.mapResponsive)(_v2, _v0 => {
          let _v1 = (0, _v3.getToken)("sizes", _v0, "number" == typeof _v0 ? `${_v0}px` : _v0)(_v3);
          return null === _v0 ? null : `repeat(auto-fit, minmax(${_v1}, 1fr))`;
        })) : (_v4 = _v5, (0, _v5.mapResponsive)(_v4, _v0 => null === _v0 ? null : `repeat(${_v0}, minmax(0, 1fr))`));
      return (0, _v6.jsx)(_v1.Grid, {
        ref: _v1,
        gap: _v8,
        columnGap: _v6,
        rowGap: _v7,
        templateColumns: _v12,
        ..._v10
      });
    });
  _v7.displayName = "SimpleGrid", _v0.s(["SimpleGrid", 0, _v7]);
}