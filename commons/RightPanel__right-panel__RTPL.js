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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.s(["RightPanel", 0, function ({
    id: _v0 = (0, _v10.createDomName)("right-panel"),
    className: _v1 = (0, _v10.createDomName)("right-panel"),
    items: _v2 = [],
    maxHeight: _v3 = "100%",
    isLoading: _v4 = !1,
    panelsContext: {
      rightPanel: _v5,
      panelActions: _v6
    } = (0, _v2.useManager)(_v9.PanelsManager, ({
      rightPanel: _v0
    }) => [_v0])
  }) {
    let _v7,
      _v8,
      _v9 = _v2.find(_v0 => _v0.id === _v5),
      _v10 = _v9?.content ? (0, _v1.jsx)(_v9.content, {}) : null,
      _v11 = _v9?.isVisible ?? !1,
      _v12 = (0, _v3.useCallback)(_v0 => _v6.setRightPanel(_v0?.id ?? null), [_v6]);
    return _v7 = (0, _v7.useLogger)("🪲RTPL"), _v8 = (0, _v2.useScope)(), (0, _v3.useEffect)(() => _v8.subscribeToSignals(_v0 => {
      if (_v0.type === _v8.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST || _v0.type === _v8.ELiveSignal.RIGHT_PANEL_TAB_CHANGE_REQUEST) if (_v7.info("Right panel change request:", _v0), _v0.data) {
        let _v0 = _v2.find(_v0 => _v0.id === _v0.data);
        _v0 && (_v7.info("Right panel change based on signal:", _v0), _v12(_v0));
      } else _v7.info("Right panel closed based on signal"), _v12(null);
    }), [_v8, _v7, _v2, _v12]), (0, _v1.jsx)(_v4.Flex, {
      id: (0, _v10.createDomName)(_v0, "panel-wrapper"),
      className: (0, _v10.createDomName)(_v1, "panel-wrapper"),
      direction: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: `${(0, _v6.rem)(16)} ${(0, _v6.rem)(16)} ${(0, _v6.rem)(16)} 0`,
      sx: {
        "& > :last-child > *": {
          height: "100%"
        }
      },
      children: (0, _v1.jsx)(_v5.Panel, {
        id: _v0,
        className: _v1,
        isVisible: !!_v10 && _v11,
        width: (0, _v6.rem)(324),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        sx: {
          height: "100%",
          maxHeight: _v3
        },
        children: (0, _v1.jsx)(_v5.PanelBody, {
          className: (0, _v10.createDomName)(_v1, "panel-body"),
          overflowX: "hidden",
          overflowY: "auto",
          display: "flex",
          gap: "sm",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          padding: 0,
          children: (0, _v1.jsx)(_v12.LiveErrorBoundary, {
            additionalInfo: _v5,
            component: "RightPanel",
            children: _v4 ? (0, _v1.jsx)(_v11.BokehSkeleton, {
              width: "100%",
              height: "100%",
              borderRadius: 0
            }) : _v10
          })
        })
      })
    });
  }], 0);
}