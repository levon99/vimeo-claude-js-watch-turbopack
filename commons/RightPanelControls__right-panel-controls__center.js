{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["RightPanelControls", 0, function ({
    id: _v0 = (0, _v8.createDomName)("right-panel-controls"),
    className: _v1 = (0, _v8.createDomName)("right-panel-controls"),
    panels: _v2,
    onPanelChange: _v3,
    panelsContext: {
      rightPanel: _v4,
      panelActions: _v5
    } = (0, _v2.useManager)(_v7.PanelsManager, ({
      rightPanel: _v0
    }) => [_v0])
  }) {
    let _v6 = (0, _v3.useCallback)(_v0 => () => {
      _v5.toggleRightPanel(_v0), _v3?.(_v0);
    }, [_v3, _v5]);
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      className: _v1,
      align: "center",
      justify: "flex-end",
      flexShrink: 0,
      gap: (0, _v6.rem)(8),
      height: "100%",
      children: _v2.filter(_v0 => _v0.isVisible).map(_v0 => (0, _v1.jsx)(_v9.BokehTooltip, {
        placement: "bottom",
        label: _v0.label,
        children: (0, _v1.jsx)(_v5.IconButton, {
          id: (0, _v8.createDomName)(_v0, _v0.id),
          "aria-label": _v0.label ?? String(_v0.id),
          variant: "tertiary",
          isActive: _v0.id === _v4,
          icon: _v0.icon,
          onClick: _v6(_v0.id)
        })
      }, _v0.id))
    });
  }]);
}