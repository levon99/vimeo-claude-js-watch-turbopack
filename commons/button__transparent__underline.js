{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = ({
    children: _v0,
    onClick: _v1
  }) => (0, _v1.jsx)(_v2.Text, {
    ...(_v1 ? {
      as: "button",
      background: "transparent",
      onClick: _v1,
      padding: "0",
      textDecoration: "underline"
    } : {
      as: "span"
    }),
    variant: "body-sm",
    color: "text-primary",
    children: _v0
  });
  _v0.s(["AccessCopy", 0, ({
    title: _v0,
    description: _v1,
    onClick: _v2
  }) => (0, _v1.jsxs)(_v2.Text, {
    color: "text-secondary",
    variant: "body-sm",
    minHeight: "1rem",
    padding: ".5rem",
    children: [_v0 && (0, _v1.jsx)(_v3, {
      onClick: _v2,
      children: _v0
    }), _v0 && _v1 && " · ", _v1]
  })]);
}