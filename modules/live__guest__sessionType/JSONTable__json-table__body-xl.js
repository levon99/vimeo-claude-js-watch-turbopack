{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["JSONTable", 0, function _v0({
    id: _v1,
    className: _v2 = (0, _v5.createDomName)("json-table"),
    header: _v3,
    data: _v4,
    maxDepth: _v5 = 3,
    depth: _v6 = 0
  }) {
    if (!_v6 && !_v4) return null;
    if (_v6 >= _v5 || "object" != typeof _v4) return (0, _v1.jsx)(_v3.Text, {
      variant: "body-xl",
      className: (0, _v5.createDomName)(_v2, "stringified"),
      sx: {
        wordBreak: "break-word"
      },
      as: "span",
      children: JSON.stringify(_v4, (0, _v6.getCircularReplacer)())
    });
    let _v7 = (0, _v1.jsx)(_v1.Fragment, {
      children: Object.entries(_v4).map(([_v0, _v1]) => (0, _v1.jsxs)(_v4.Flex, {
        className: (0, _v5.createDomName)(_v2, "entry"),
        padding: (0, _v2.rem)(4),
        margin: (0, _v2.rem)(4),
        grow: 1,
        color: "text-primary",
        border: `${(0, _v2.rem)(2)} solid`,
        borderColor: "blue.500",
        children: [(0, _v1.jsxs)(_v3.Text, {
          variant: "body-xl",
          className: (0, _v5.createDomName)(_v2, "heading"),
          fontWeight: "medium",
          children: [_v0, ":"]
        }), " ", (0, _v1.jsx)(_v0, {
          className: (0, _v5.createDomName)(_v2, "child"),
          depth: _v6 + 1,
          data: _v1
        })]
      }, _v0))
    });
    return 0 === _v6 ? (0, _v1.jsxs)(_v4.Flex, {
      id: _v1,
      className: _v2,
      padding: (0, _v2.rem)(4),
      direction: "column",
      border: `${(0, _v2.rem)(2)} solid`,
      borderColor: "blue.500",
      overflowX: "auto",
      maxWidth: "100%",
      children: [_v3, " ", (0, _v1.jsx)(_v3.Text, {
        variant: "body-xl",
        as: "span",
        children: _v7
      })]
    }) : (0, _v1.jsx)(_v4.Flex, {
      className: (0, _v5.createDomName)(_v2, "text"),
      direction: "column",
      children: _v7
    });
  }]);
}