{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["RightPanelContent", 0, function ({
    id: _v0,
    className: _v1,
    children: _v2
  }) {
    return (0, _v1.jsx)(_v2.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      grow: 1,
      basis: 0,
      overflowX: "hidden",
      overflowY: "auto",
      width: "100%",
      height: "100%",
      padding: `0 ${(0, _v3.rem)(16)} ${(0, _v3.rem)(16)} ${(0, _v3.rem)(16)}`,
      children: _v2
    });
  }], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["RightPanelDismiss", 0, function ({
    id: _v0 = (0, _v9.createDomName)("right-panel-dismiss"),
    className: _v1 = (0, _v9.createDomName)("right-panel-dismiss"),
    panelsContext: {
      panelActions: _v2
    } = (0, _v4.useManager)(_v7.PanelsManager, ({
      panelActions: _v0
    }) => [_v0])
  }) {
    let _v3 = (0, _v5.useCallback)(() => _v2.setRightPanel(null), [_v2]);
    return (0, _v1.jsx)(_v10.BokehTooltip, {
      placement: "bottom",
      label: _v8.T_CLOSE,
      shouldWrapChildren: !0,
      children: (0, _v1.jsx)(_v6.CloseButton, {
        id: _v0,
        className: _v1,
        "aria-label": "dismiss",
        size: "sm",
        variant: "tertiary",
        onClick: _v3
      })
    });
  }], 0);
  var _v11 = _v0.i(0);
  _v0.s(["RightPanelHeader", 0, function ({
    id: _v0 = (0, _v9.createDomName)("right-panel-header"),
    className: _v1 = (0, _v9.createDomName)("right-panel-header"),
    label: _v2,
    leftControls: _v3,
    rightControls: _v4
  }) {
    return (0, _v1.jsxs)(_v2.Flex, {
      id: _v0,
      className: _v1,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: (0, _v3.rem)(8),
      padding: (0, _v3.rem)(16),
      children: [_v3 ? (0, _v1.jsx)(_v2.Flex, {
        id: (0, _v9.createDomName)(_v0, "left-controls"),
        className: (0, _v9.createDomName)(_v1, "left-controls"),
        gap: (0, _v3.rem)(4),
        children: _v3
      }) : null, (0, _v1.jsx)(_v11.Header, {
        id: (0, _v9.createDomName)(_v0, "label"),
        className: (0, _v9.createDomName)(_v1, "label"),
        size: "sm",
        fontWeight: 500,
        marginRight: "auto",
        children: _v2
      }), _v4 ? (0, _v1.jsx)(_v2.Flex, {
        id: (0, _v9.createDomName)(_v0, "right-controls"),
        className: (0, _v9.createDomName)(_v1, "right-controls"),
        gap: (0, _v3.rem)(4),
        children: _v4
      }) : null]
    });
  }], 0);
}