{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["LoadingCard", 0, ({
    flex: _v0
  }) => (0, _v1.jsx)(_v5.ContentCard, {
    href: "",
    width: "100%",
    minWidth: (0, _v3.rem)(250),
    height: (0, _v3.rem)(200),
    isHoverDisabled: !0,
    ariaLabel: "Loading card",
    flex: _v0,
    children: (0, _v1.jsx)(_v5.ContentCard.Body, {
      children: (0, _v1.jsxs)(_v2.Flex, {
        direction: "column",
        gap: "md",
        children: [(0, _v1.jsx)(_v4.Skeleton, {
          minHeight: "9.625rem"
        }), (0, _v1.jsx)(_v4.Skeleton, {
          variant: "text"
        })]
      })
    })
  })]);
}