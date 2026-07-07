{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["LeftPanelDismiss", 0, function ({
    id: _v0 = (0, _v7.createDomName)("left-panel-dismiss"),
    className: _v1 = (0, _v7.createDomName)("left-panel-dismiss"),
    panelsContext: {
      panelActions: _v2
    } = (0, _v2.useManager)(_v5.PanelsManager, ({
      panelActions: _v0
    }) => [_v0])
  }) {
    let _v3 = (0, _v3.useCallback)(() => _v2.setLeftPanel(null), [_v2]);
    return (0, _v1.jsx)(_v8.BokehTooltip, {
      placement: "bottom",
      label: _v6.T_CLOSE,
      shouldWrapChildren: !0,
      children: (0, _v1.jsx)(_v4.CloseButton, {
        id: _v0,
        className: _v1,
        "aria-label": "dismiss",
        size: "sm",
        variant: "tertiary",
        onClick: _v3
      })
    });
  }], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["LeftPanelHeader", 0, function ({
    id: _v0 = (0, _v7.createDomName)("left-panel-header"),
    className: _v1 = (0, _v7.createDomName)("left-panel-header"),
    label: _v2,
    controls: _v3
  }) {
    return (0, _v1.jsxs)(_v9.Flex, {
      id: _v0,
      className: _v1,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: (0, _v11.rem)(8),
      padding: (0, _v11.rem)(16),
      children: [(0, _v1.jsx)(_v10.Header, {
        id: (0, _v7.createDomName)(_v0, "label"),
        className: (0, _v7.createDomName)(_v1, "label"),
        size: "sm",
        fontWeight: 500,
        children: _v2
      }), (0, _v1.jsx)(_v9.Flex, {
        id: (0, _v7.createDomName)(_v0, "controls"),
        className: (0, _v7.createDomName)(_v1, "controls"),
        gap: (0, _v11.rem)(4),
        children: _v3
      })]
    });
  }], 0);
}