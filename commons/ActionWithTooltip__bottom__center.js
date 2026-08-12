{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["ActionWithTooltip", 0, ({
    actionCopy: _v0,
    icon: _v1,
    onClick: _v2,
    showTooltip: _v3 = !1,
    tooltipCopy: _v4 = ""
  }) => _v3 ? (0, _v1.jsx)(_v5.Tooltip, {
    placement: "bottom",
    label: _v4,
    children: (0, _v1.jsxs)(_v2.Flex, {
      align: "center",
      gap: (0, _v3.rem)(10),
      paddingLeft: _v1 && (0, _v3.rem)(8),
      paddingRight: (0, _v3.rem)(8),
      py: (0, _v3.rem)(8),
      cursor: "pointer",
      color: "text-tertiary",
      children: [_v1, (0, _v1.jsx)(_v4.Text, {
        variant: "body-xl",
        fontSize: (0, _v3.rem)(14),
        lineHeight: (0, _v3.rem)(20),
        children: _v0
      })]
    })
  }) : (0, _v1.jsx)(_v6.Action, {
    icon: _v1,
    label: _v0,
    onClick: _v2
  })]);
}