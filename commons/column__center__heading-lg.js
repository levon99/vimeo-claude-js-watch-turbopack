{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ({
    cta: _v0,
    header: _v1,
    icon: _v2,
    subheader: _v3
  }) => (0, _v1.jsxs)(_v2.Flex, {
    direction: "column",
    align: "center",
    children: [_v2 && (0, _v1.jsx)(_v2.Flex, {
      width: (0, _v3.rem)(128),
      justify: "center",
      children: _v2
    }), (0, _v1.jsxs)(_v2.Flex, {
      direction: "column",
      align: "center",
      textAlign: "center",
      margin: `${(0, _v3.rem)(16)} 0`,
      rowGap: (0, _v3.rem)(16),
      children: ["string" == typeof _v1 ? (0, _v1.jsx)(_v5.Header, {
        children: _v1
      }) : _v1, "string" == typeof _v3 ? (0, _v1.jsx)(_v5.Subheader, {
        children: _v3
      }) : _v3]
    }), _v0]
  });
  _v5.Header = ({
    children: _v0
  }) => (0, _v1.jsx)(_v4.Text, {
    variant: "heading-lg",
    children: _v0
  }), _v5.Subheader = ({
    children: _v0
  }) => (0, _v1.jsx)(_v4.Text, {
    color: "text-secondary",
    variant: "body-lg",
    children: _v0
  }), _v0.s(["EmptyState", 0, _v5]);
}