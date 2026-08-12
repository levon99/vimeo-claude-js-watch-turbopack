{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          isCurrentPage: _v2,
          as: _v3,
          className: _v4,
          href: _v5,
          ..._v6
        } = _v0,
        _v7 = (0, _v1.useBreadcrumbStyles)(),
        _v8 = {
          ref: _v1,
          as: _v3,
          className: (0, _v4.cx)("chakra-breadcrumb__link", _v4),
          ..._v6
        };
      return _v2 ? (0, _v5.jsx)(_v2.chakra.span, {
        "aria-current": "page",
        __css: _v7.link,
        ..._v8
      }) : (0, _v5.jsx)(_v2.chakra.a, {
        __css: _v7.link,
        href: _v5,
        ..._v8
      });
    });
  _v6.displayName = "BreadcrumbLink", _v0.s(["BreadcrumbLink", 0, _v6], 0);
  var _v7 = (0, _v3.forwardRef)(function (_v0, _v1) {
    let {
        spacing: _v2,
        ..._v3
      } = _v0,
      _v4 = {
        mx: _v2,
        ...(0, _v1.useBreadcrumbStyles)().separator
      };
    return (0, _v5.jsx)(_v2.chakra.span, {
      ref: _v1,
      role: "presentation",
      ..._v3,
      __css: _v4
    });
  });
  _v7.displayName = "BreadcrumbSeparator", _v0.s(["BreadcrumbSeparator", 0, _v7], 0);
}