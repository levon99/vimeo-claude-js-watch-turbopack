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
    _v10 = _v0.i(0),
    _v11 = (0, _v2.forwardRef)(function (_v0, _v1) {
      let {
          isCurrentPage: _v2,
          separator: _v3,
          isLastChild: _v4,
          spacing: _v5,
          children: _v6,
          className: _v7,
          ..._v8
        } = _v0,
        _v9 = (0, _v8.getValidChildren)(_v6).map(_v0 => _v0.type === _v4.BreadcrumbLink ? (0, _v10.cloneElement)(_v0, {
          isCurrentPage: _v2
        }) : _v0.type === _v5.BreadcrumbSeparator ? (0, _v10.cloneElement)(_v0, {
          spacing: _v5,
          children: _v0.props.children || _v3
        }) : _v0),
        _v10 = {
          display: "inline-flex",
          alignItems: "center",
          ...(0, _v6.useBreadcrumbStyles)().item
        },
        _v11 = (0, _v9.cx)("chakra-breadcrumb__list-item", _v7);
      return (0, _v1.jsxs)(_v7.chakra.li, {
        ref: _v1,
        className: _v11,
        ..._v8,
        __css: _v10,
        children: [_v9, !_v4 && (0, _v1.jsx)(_v5.BreadcrumbSeparator, {
          spacing: _v5,
          children: _v3
        })]
      });
    });
  _v11.displayName = "BreadcrumbItem";
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = _v0 => (0, _v1.jsx)(_v15.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3ZM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7Zm4 10c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3Z",
        fill: "currentColor"
      })
    }),
    _v17 = (0, _v2.forwardRef)(({
      children: _v0,
      separator: _v1 = (0, _v1.jsx)(_v14.ChevronRight, {
        boxSize: "2xs"
      }),
      ..._v2
    }, _v3) => (0, _v1.jsx)(_v3.Breadcrumb, {
      ref: _v3,
      separator: _v1,
      ..._v2,
      children: _v0
    })),
    _v18 = (0, _v2.forwardRef)(({
      children: _v0,
      ..._v1
    }, _v2) => _v1.isCurrentPage ? (0, _v1.jsx)(_v11, {
      ref: _v2,
      ..._v1,
      children: (0, _v1.jsxs)(_v12.Flex, {
        alignItems: "center",
        gap: "2px",
        children: [(0, _v1.jsx)(_v16, {
          boxSize: "2xs"
        }), (0, _v1.jsx)(_v13.Box, {
          children: _v0
        })]
      })
    }) : (0, _v1.jsx)(_v11, {
      ref: _v2,
      ..._v1,
      children: _v0
    }));
  _v0.s(["Breadcrumb", 0, _v17, "BreadcrumbItem", 0, _v18], 0);
}