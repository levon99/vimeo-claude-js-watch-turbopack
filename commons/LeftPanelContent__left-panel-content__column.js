{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["LeftPanelContent", 0, function ({
    id: _v0,
    className: _v1 = (0, _v4.createDomName)("left-panel-content"),
    fitContent: _v2 = !1,
    alignItems: _v3,
    justifyContent: _v4,
    gap: _v5,
    withTopPadding: _v6,
    children: _v7
  }) {
    return (0, _v1.jsx)(_v2.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      alignItems: _v3,
      justifyContent: _v4,
      gap: _v5,
      flex: _v2 ? void 0 : 1,
      overflowX: "hidden",
      overflowY: _v2 ? "visible" : "auto",
      width: "100%",
      height: _v2 ? "auto" : "100%",
      padding: `${_v6 ? (0, _v3.rem)(16) : 0} ${(0, _v3.rem)(16)} ${(0, _v3.rem)(16)} ${(0, _v3.rem)(16)}`,
      children: _v7
    });
  }]);
}