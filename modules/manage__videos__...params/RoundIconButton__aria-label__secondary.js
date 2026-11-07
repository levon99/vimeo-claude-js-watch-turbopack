{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["RoundIconButton", 0, ({
    label: _v0,
    isDisabled: _v1,
    ..._v2
  }) => (0, _v1.jsxs)(_v5.VStack, {
    gap: "2",
    width: (0, _v3.rem)(72),
    children: [(0, _v1.jsx)(_v2.IconButton, {
      "aria-label": _v0,
      variant: "secondary",
      isRound: !0,
      isDisabled: _v1,
      width: (0, _v3.rem)(62),
      height: `${(0, _v3.rem)(62)} !important`,
      ..._v2
    }), (0, _v1.jsx)(_v4.Text, {
      variant: "body-sm",
      textAlign: "center",
      opacity: _v1 ? .5 : 1,
      children: _v0
    })]
  })]);
}