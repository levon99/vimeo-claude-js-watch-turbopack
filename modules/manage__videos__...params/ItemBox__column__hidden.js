{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["ItemBox", 0, _v0 => {
    let {
      headerTitle: _v1,
      subHeaderTitle: _v2,
      subHeaderLoading: _v3,
      rightTrigger: _v4,
      iconBox: _v5
    } = _v0;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v5 && _v5, (0, _v1.jsxs)(_v3.Flex, {
        flexDir: "column",
        flex: "2",
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v4.Header, {
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          size: "xs",
          children: _v1
        }), _v2 && (0, _v1.jsx)(_v5.Paragraph, {
          size: "sm",
          color: "text-secondary",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          children: _v2
        }), _v3 && (0, _v1.jsx)(_v6.Spinner, {
          size: "xs"
        })]
      }), _v4 && (0, _v1.jsx)(_v2.Box, {
        ml: (0, _v7.rem)(2),
        children: _v4
      })]
    });
  }]);
}