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
  let _v9 = _v0 => (0, _v1.jsx)(_v8.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M19 14h2a1 1 0 0 0 0-2h-2v-1a5.15 5.15 0 0 0-.21-1.36A5 5 0 0 0 22 5a1 1 0 0 0-2 0 3 3 0 0 1-2.14 2.87A5 5 0 0 0 16 6.4c.01-.133.01-.267 0-.4a4 4 0 1 0-8 0 2.58 2.58 0 0 0 0 .4 5 5 0 0 0-1.9 1.47A3 3 0 0 1 4 5a1 1 0 0 0-2 0 5 5 0 0 0 3.21 4.64c-.13.442-.201.9-.21 1.36v1H3a1 1 0 0 0 0 2h2v1a7 7 0 0 0 .14 1.38A5 5 0 0 0 2 21a1 1 0 1 0 2 0 3 3 0 0 1 1.81-2.74 7 7 0 0 0 12.38 0A3 3 0 0 1 20 21a1 1 0 0 0 2 0 5 5 0 0 0-3.14-4.62c.092-.454.14-.916.14-1.38v-1Zm-8 5.9A5 5 0 0 1 7 15v-4a3 3 0 0 1 3-3h1v11.9ZM10 6a2 2 0 1 1 4 0h-4Zm7 9a5 5 0 0 1-4 4.9V8h1a3 3 0 0 1 3 3v4Z",
        fill: "currentColor"
      })
    }),
    _v10 = _v0 => (0, _v1.jsx)(_v8.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M9 12H7a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2Zm-1-2h4a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Zm1 6H7a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2Zm12-4h-3V3a1 1 0 0 0-1.5-.87l-3 1.72-3-1.72a1 1 0 0 0-1 0l-3 1.72-3-1.72A1 1 0 0 0 2 3v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1ZM5 20a1 1 0 0 1-1-1V4.73l2 1.14a1.08 1.08 0 0 0 1 0l3-1.72 3 1.72a1.08 1.08 0 0 0 1 0l2-1.14V19a3 3 0 0 0 .18 1H5Zm15-1a1 1 0 1 1-2 0v-5h2v5Zm-6.44-2.83a.758.758 0 0 0-.18-.09.597.597 0 0 0-.19-.06 1 1 0 0 0-.9.27A1.05 1.05 0 0 0 12 17a1 1 0 0 0 .07.38c.054.122.129.233.22.33.097.088.209.16.33.21a.94.94 0 0 0 .76 0c.121-.05.233-.122.33-.21A1.001 1.001 0 0 0 14 17a1.05 1.05 0 0 0-.29-.71 1.573 1.573 0 0 0-.15-.12Zm.14-3.88a1 1 0 0 0-1.62.33A1 1 0 0 0 13 14a1 1 0 0 0 1-1 1.001 1.001 0 0 0-.08-.38.91.91 0 0 0-.22-.33Z",
        fill: "currentColor"
      })
    });
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  function _v20({
    id: _v0 = (0, _v18.createDomName)("live-composer-debugging-options"),
    className: _v1 = (0, _v18.createDomName)("live-composer-debugging-options"),
    debugContext: {
      isEnabled: _v2,
      isLoggingEnabled: _v3,
      isFileLoggingEnabled: _v4,
      debugActions: _v5
    } = (0, _v4.useManager)(_v16.DebugControlManager)
  }) {
    let _v6 = (0, _v5.useMemo)(() => new _v12.Logger("DBG"), []),
      _v7 = (0, _v4.useScope)(),
      _v8 = (0, _v17.useCanToggleDebugTools)(),
      _v9 = (0, _v5.useCallback)(() => _v5.setDebugState(!_v2), [_v5, _v2]),
      _v10 = (0, _v5.useCallback)(() => _v5.setLoggingState(!_v3), [_v5, _v3]),
      _v11 = (0, _v5.useCallback)(async () => {
        let {
          agoraActions: _v0
        } = _v7.getContextOf(_v15.BroadcasterAgoraManager) || _v7.getContextOf(_v14.GuestAgoraManager);
        _v6.info("Got following RTC report:", JSON.stringify(await _v0.getPerformanceReport(), null, 2));
      }, [_v7, _v6]);
    return (0, _v1.jsxs)(_v2.Flex, {
      id: _v0,
      className: _v1,
      gap: (0, _v3.rem)(8),
      children: [_v13.liveApplicationConfig.FEATURE.USE_RTC_PERFORMANCE_TOOLS ? (0, _v1.jsx)(_v19.BokehTooltip, {
        label: "Collect RTC report",
        children: (0, _v1.jsx)(_v6.IconButton, {
          id: (0, _v18.createDomName)("save-performance-report-control"),
          "aria-label": "save-performance-report",
          icon: (0, _v1.jsx)(_v11.TranscriptOn, {}),
          variant: "tertiary",
          size: "sm",
          onClick: _v11
        })
      }) : null, _v4 ? (0, _v1.jsx)(_v19.BokehTooltip, {
        label: "Download file logs",
        children: (0, _v1.jsx)(_v6.IconButton, {
          id: (0, _v18.createDomName)(_v0, "save-report-control"),
          className: (0, _v18.createDomName)(_v1, "save-report-control"),
          "aria-label": "save-report",
          icon: (0, _v1.jsx)(_v7.ArrowToBottom, {}),
          variant: "tertiary",
          size: "sm",
          onClick: _v5.saveReportFile
        })
      }) : null, _v8 ? (0, _v1.jsx)(_v19.BokehTooltip, {
        label: _v3 ? "Turn off logs" : "Turn on logs",
        children: (0, _v1.jsx)(_v6.IconButton, {
          id: (0, _v18.createDomName)(_v0, "toggle-logs-control"),
          className: (0, _v18.createDomName)(_v1, "toggle-logs-control"),
          "aria-label": "toggle-logs",
          icon: (0, _v1.jsx)(_v10, {}),
          variant: "tertiary",
          size: "sm",
          onClick: _v10
        })
      }) : null, _v8 ? (0, _v1.jsx)(_v19.BokehTooltip, {
        label: _v2 ? "Turn off staff debug" : "Turn on staff debug",
        children: (0, _v1.jsx)(_v6.IconButton, {
          id: (0, _v18.createDomName)(_v0, "toggle-debug-control"),
          className: (0, _v18.createDomName)(_v1, "toggle-debug-control"),
          "aria-label": "toggle-debug",
          icon: (0, _v1.jsx)(_v9, {}),
          variant: "tertiary",
          size: "sm",
          onClick: _v9
        })
      }) : null]
    });
  }
  _v0.s(["LiveComposerFooter", 0, function ({
    id: _v0 = (0, _v18.createDomName)("footer"),
    className: _v1 = (0, _v18.createDomName)("footer")
  }) {
    return (0, _v1.jsx)(_v2.Flex, {
      id: _v0,
      className: _v1,
      as: "footer",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: 0,
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1,
      children: (0, _v1.jsx)(_v2.Flex, {
        id: (0, _v18.createDomName)(_v0, "right-section"),
        className: (0, _v18.createDomName)(_v1, "right-section"),
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        right: (0, _v3.rem)(16),
        bottom: (0, _v3.rem)(16),
        children: (0, _v1.jsx)(_v20, {})
      })
    });
  }], 0);
}