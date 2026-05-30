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
          ..._v3
        } = _v0,
        _v4 = (0, _v1.useCardStyles)();
      return (0, _v5.jsx)(_v4.chakra.div, {
        ref: _v1,
        className: (0, _v2.cx)("chakra-card__body", _v2),
        __css: _v4.body,
        ..._v3
      });
    });
  _v0.s(["CardBody", 0, _v6], 0);
  var _v7 = (0, _v3.forwardRef)(function (_v0, _v1) {
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
  _v0.s(["CardFooter", 0, _v7], 0);
  var _v8 = _v0.i(0);
  _v0.s(["usePrefersReducedMotion", 0, function (_v0) {
    let [_v1] = (0, _v8.useMediaQuery)("(prefers-reduced-motion: reduce)", _v0);
    return _v1;
  }], 0);
}