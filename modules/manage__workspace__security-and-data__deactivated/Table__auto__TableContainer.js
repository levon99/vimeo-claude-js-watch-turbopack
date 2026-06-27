{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v2.forwardRef)((_v0, _v1) => {
    let {
        overflow: _v2,
        overflowX: _v3,
        ..._v4
      } = _v0,
      {
        container: _v5
      } = (0, _v3.useStyleConfig)("Table", {
        overflow: _v2,
        overflowX: _v3
      });
    return (0, _v1.jsx)(_v4.chakra.div, {
      ref: _v1,
      overflow: _v2 ?? _v3 ?? "auto",
      __css: _v5,
      ..._v4
    });
  });
  _v0.s(["TableContainer", 0, _v5]);
}