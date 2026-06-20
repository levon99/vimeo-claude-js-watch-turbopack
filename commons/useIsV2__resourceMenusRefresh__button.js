{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useIsV2", 0, () => {
    let {
      capabilities: _v0
    } = (0, _v1.useCapability)(["resourceMenusRefresh"]);
    return _v0?.resourceMenusRefresh === !0;
  }], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ({
    children: _v0,
    onClick: _v1
  }) => (0, _v2.jsx)(_v3.Text, {
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
  }) => (0, _v2.jsxs)(_v3.Text, {
    color: "text-secondary",
    variant: "body-sm",
    minHeight: "1rem",
    padding: ".5rem",
    children: [_v0 && (0, _v2.jsx)(_v4, {
      onClick: _v2,
      children: _v0
    }), _v0 && _v1 && " · ", _v1]
  })], 0);
}