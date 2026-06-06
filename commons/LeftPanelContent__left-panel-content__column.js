{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["LeftPanelContent", 0, function ({
    id: _v0,
    className: _v1 = (0, _v4.createDomName)("left-panel-content"),
    alignItems: _v2,
    justifyContent: _v3,
    gap: _v4,
    withTopPadding: _v5,
    children: _v6
  }) {
    return (0, _v1.jsx)(_v2.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      alignItems: _v2,
      justifyContent: _v3,
      gap: _v4,
      grow: 1,
      basis: 0,
      overflowX: "hidden",
      overflowY: "auto",
      width: "100%",
      height: "100%",
      padding: `${_v5 ? (0, _v3.rem)(16) : 0} ${(0, _v3.rem)(16)} ${(0, _v3.rem)(16)} ${(0, _v3.rem)(16)}`,
      children: _v6
    });
  }]);
}