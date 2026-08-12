{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0) {
    return (0, _v4.mapResponsive)(_v0, _v0 => "auto" === _v0 ? "auto" : `span ${_v0}/span ${_v0}`);
  }
  var _v7 = (0, _v1.forwardRef)(function (_v0, _v1) {
    let {
        area: _v2,
        colSpan: _v3,
        colStart: _v4,
        colEnd: _v5,
        rowEnd: _v6,
        rowSpan: _v7,
        rowStart: _v8,
        ..._v9
      } = _v0,
      _v10 = (0, _v3.compact)({
        gridArea: _v2,
        gridColumn: _v6(_v3),
        gridRow: _v6(_v7),
        gridColumnStart: _v4,
        gridColumnEnd: _v5,
        gridRowStart: _v8,
        gridRowEnd: _v6
      });
    return (0, _v5.jsx)(_v2.chakra.div, {
      ref: _v1,
      __css: _v10,
      ..._v9
    });
  });
  _v7.displayName = "GridItem", _v0.s(["GridItem", 0, _v7]);
}