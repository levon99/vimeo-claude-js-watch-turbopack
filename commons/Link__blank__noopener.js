{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v2.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v4.useStyleConfig)("Link", _v0),
        {
          className: _v3,
          isExternal: _v4,
          ..._v5
        } = (0, _v3.omitThemingProps)(_v0);
      return (0, _v6.jsx)(_v1.chakra.a, {
        target: _v4 ? "_blank" : void 0,
        rel: _v4 ? "noopener" : void 0,
        ref: _v1,
        className: (0, _v5.cx)("chakra-link", _v3),
        ..._v5,
        __css: _v2
      });
    });
  _v7.displayName = "Link", _v0.s(["Link", 0, _v7]);
}