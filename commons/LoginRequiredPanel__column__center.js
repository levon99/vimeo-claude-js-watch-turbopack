{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["LoginRequiredPanel", 0, ({
    onLoginRequired: _v0
  }) => ((0, _v2.useEffect)(() => {
    _v0();
  }, []), (0, _v1.jsxs)(_v3.Flex, {
    h: "100%",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    children: [(0, _v1.jsx)(_v6.InfoCircle, {
      boxSize: "md",
      fill: "text-primary"
    }), (0, _v1.jsx)(_v5.Paragraph, {
      children: _v7.youMustBeLoggedIn
    }), (0, _v1.jsx)(_v4.Button, {
      onClick: _v0,
      children: _v7.logIn
    })]
  }))]);
}