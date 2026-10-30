{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          className: _v2,
          justify: _v3,
          ..._v4
        } = _v0,
        _v5 = (0, _v1.useCardStyles)();
      return (0, _v5.jsx)(_v4.chakra.div, {
        ref: _v1,
        className: (0, _v2.cx)("chakra-card__footer", _v2),
        __css: {
          display: "flex",
          justifyContent: _v3,
          ..._v5.footer
        },
        ..._v4
      });
    });
  _v0.s(["CardFooter", 0, _v6]);
}