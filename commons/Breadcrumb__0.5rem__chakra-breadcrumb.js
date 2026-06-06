{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = (0, _v5.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v7.useMultiStyleConfig)("Breadcrumb", _v0),
        {
          children: _v3,
          spacing: _v4 = "0.5rem",
          separator: _v5 = "/",
          className: _v6,
          listProps: _v7,
          ..._v8
        } = (0, _v6.omitThemingProps)(_v0),
        _v9 = (0, _v3.getValidChildren)(_v3),
        _v10 = _v9.length,
        _v11 = _v9.map((_v0, _v1) => (0, _v8.cloneElement)(_v0, {
          separator: _v5,
          spacing: _v4,
          isLastChild: _v10 === _v1 + 1
        })),
        _v12 = (0, _v2.cx)("chakra-breadcrumb", _v6);
      return (0, _v9.jsx)(_v4.chakra.nav, {
        ref: _v1,
        "aria-label": "breadcrumb",
        className: _v12,
        __css: _v2.container,
        ..._v8,
        children: (0, _v9.jsx)(_v1.BreadcrumbStylesProvider, {
          value: _v2,
          children: (0, _v9.jsx)(_v4.chakra.ol, {
            className: "chakra-breadcrumb__list",
            ..._v7,
            __css: {
              display: "flex",
              alignItems: "center",
              ..._v2.list
            },
            children: _v11
          })
        })
      });
    });
  _v10.displayName = "Breadcrumb", _v0.s(["Breadcrumb", 0, _v10]);
}