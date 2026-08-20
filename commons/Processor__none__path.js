{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["Processor", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M14 9h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 4h-2v-2h2v2Zm8 0a1 1 0 0 0 0-2h-2V9h2a1 1 0 1 0 0-2h-2.18A3 3 0 0 0 17 5.18V3a1 1 0 0 0-2 0v2h-2V3a1 1 0 0 0-2 0v2H9V3a1 1 0 0 0-2 0v2.18A3 3 0 0 0 5.18 7H3a1 1 0 0 0 0 2h2v2H3a1 1 0 0 0 0 2h2v2H3a1 1 0 0 0 0 2h2.18A3 3 0 0 0 7 18.82V21a1 1 0 1 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2.18A3 3 0 0 0 18.82 17H21a1 1 0 0 0 0-2h-2v-2h2Zm-4 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8Z",
      fill: "currentColor"
    })
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10(_v0) {
    let _v1 = _v0?.match?.(/#([\w\-\_]+)/);
    return (_v1 && _v1[1]) ?? "";
  }
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  function _v22({
    id: _v0 = (0, _v18.createDomName)("left-panel-controls"),
    className: _v1 = (0, _v18.createDomName)("left-panel-controls"),
    isLoading: _v2,
    defaultValue: _v3,
    value: _v4,
    panels: _v5,
    footer: _v6,
    onPanelChange: _v7,
    onUserActivateLeftPanel: _v8
  }) {
    let _v9,
      _v10,
      _v11 = (0, _v4.useCallback)(_v0 => () => {
        let _v0 = _v0?.id === _v4 ? null : _v0,
          _v1 = _v0?.id ?? null;
        _v7(_v1), null !== _v1 && void 0 !== _v8 && _v8(_v1);
      }, [_v4, _v7, _v8]);
    return !function ({
      isLoading: _v0,
      defaultValue: _v1,
      items: _v2,
      onPanelChange: _v3
    }) {
      let _v4 = (0, _v4.useRef)(!1);
      (0, _v4.useLayoutEffect)(() => {
        if (_v0 || _v4.current) return;
        _v4.current = !0;
        let _v0 = _v10(window.location.hash),
          _v1 = _v2.find(_v0 => _v0.hash === _v0);
        if (_v1) return void _v3(_v1.id);
        let _v2 = _v2.find(_v0 => _v0.id === _v1);
        _v2 ? _v3(_v2.id) : _v0 === _v9.ELeftPanelHash.NONE || null === _v1 ? _v3(null) : _v3(_v2[0]?.id || null);
      }, [_v3, _v0]);
    }({
      items: _v5,
      defaultValue: _v3,
      isLoading: _v2,
      onPanelChange: _v7
    }), _v9 = (0, _v16.useLogger)("🪲LTPL"), _v10 = (0, _v3.useScope)(), (0, _v4.useEffect)(() => _v10.subscribeToSignals(_v0 => {
      if (_v0.type === _v17.ELiveSignal.LEFT_PANEL_TAB_CHANGE_REQUEST || _v0.type === _v17.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST) {
        if (_v9.info("Left panel change request:", _v0), !_v0.data) {
          _v9.info("Left panel closed based on signal"), _v7(null);
          return;
        }
        let _v0 = _v5.find(_v0 => _v0.id === _v0.data);
        _v0 && (_v9.info("Left panel change based on signal:", _v0), _v7(_v0.id));
      }
    }), [_v10, _v9, _v5, _v7]), (0, _v1.jsxs)(_v5.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      height: "100%",
      minWidth: "max-content",
      overflow: "hidden",
      children: [(0, _v1.jsx)(_v5.Flex, {
        id: (0, _v18.createDomName)(_v0, "panels"),
        className: (0, _v18.createDomName)(_v1, "panels"),
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "md",
        grow: 1,
        minWidth: "max-content",
        children: _v2 ? (0, _v19.range)(5).map(_v0 => (0, _v1.jsx)(_v20.BokehSkeleton, {
          className: (0, _v18.createDomName)(_v1, "item-loader"),
          width: (0, _v8.rem)(48),
          maxWidth: (0, _v8.rem)(48),
          height: (0, _v8.rem)(48),
          maxHeight: (0, _v8.rem)(48),
          borderRadius: "50%"
        }, _v0)) : _v5.map(_v0 => (0, _v1.jsxs)(_v5.Flex, {
          className: (0, _v18.createDomName)(_v1, `item-${_v0.id}`),
          direction: "column",
          gap: (0, _v8.rem)(4),
          alignItems: "center",
          height: "auto",
          children: [(0, _v1.jsxs)(_v12.Box, {
            position: "relative",
            children: [(0, _v1.jsx)(_v13.IconButton, {
              "aria-label": _v0.header,
              className: (0, _v18.createDomName)(_v1, `item-button-${_v0.id === _v4 ? "active" : "inactive"}-${_v0.id}`),
              variant: "secondary",
              isActive: _v0.id === _v4,
              size: "lg",
              icon: _v0.icon,
              borderRadius: "50%",
              onClick: _v11(_v0)
            }), _v0.isNew ? (0, _v1.jsx)(_v11.Badge, {
              size: "xs",
              variant: "new",
              height: (0, _v8.rem)(16),
              paddingY: 0,
              position: "absolute",
              top: (0, _v8.rem)(-6),
              left: "50%",
              transform: "translateX(-50%)",
              children: (0, _v15.translate)({
                singular: "New",
                dictionary: {
                  es: {
                    singular: "Nuevo"
                  },
                  "de-DE": {
                    singular: "Neu"
                  },
                  "fr-FR": {
                    singular: "Nouveau"
                  },
                  "ja-JP": {
                    singular: "新規作成"
                  },
                  "ko-KR": {
                    singular: "신규"
                  },
                  "pt-BR": {
                    singular: "Novo"
                  },
                  "zh-CN": {
                    singular: "新"
                  }
                }
              })
            }) : null]
          }), (0, _v1.jsx)(_v14.Paragraph, {
            className: (0, _v18.createDomName)(_v1, `item-label-${_v0.id}`),
            size: "xs",
            color: "text-secondary",
            whiteSpace: "nowrap",
            textAlign: "center",
            children: _v0.header
          })]
        }, _v0.id))
      }), (0, _v1.jsx)(_v21.LiveErrorBoundary, {
        component: "LeftPanelControlsFooter",
        isDetailed: !1,
        children: _v6 && !_v2 ? (0, _v1.jsx)(_v5.Flex, {
          id: (0, _v18.createDomName)(_v0, "footer"),
          className: (0, _v18.createDomName)(_v1, "footer"),
          children: _v6
        }) : null
      })]
    });
  }
  var _v23 = _v0.i(0);
  let _v24 = () => {};
  _v0.s(["LeftPanel", 0, function ({
    id: _v0 = (0, _v18.createDomName)("left-panel"),
    className: _v1 = (0, _v18.createDomName)("left-panel"),
    isLoading: _v2 = !1,
    defaultValue: _v3,
    items: _v4 = [],
    footer: _v5 = null,
    maxHeight: _v6 = "100%",
    onUserActivateLeftPanel: _v7 = _v24,
    panelsContext: {
      leftPanel: _v8,
      panelActions: _v9
    } = (0, _v3.useManager)(_v23.PanelsManager, ({
      leftPanel: _v0
    }) => [_v0])
  }) {
    let _v10 = (0, _v4.useMemo)(() => _v4.find(_v0 => _v0.id === _v8), [_v8, _v4]),
      _v11 = (0, _v4.useMemo)(() => _v10?.content ? (0, _v1.jsx)(_v10.content, {}) : null, [_v10?.content]),
      _v12 = function ({
        isLoading: _v0,
        defaultValue: _v1,
        items: _v2
      }) {
        return (0, _v4.useMemo)(() => {
          if (!_v0) return !1;
          let _v0 = _v10(window.location.hash),
            _v1 = Object.values(_v9.ELeftPanelHash);
          if (_v0) {
            if (_v0 === _v9.ELeftPanelHash.NONE) return !1;else if (_v1.find(_v0 => _v0 === _v0)) return !0;
          }
          return null !== _v1 && (!_v1 || !!_v2.find(_v0 => _v0.hash === _v0));
        }, [_v0, _v1, _v2]);
      }({
        isLoading: _v2,
        items: _v4,
        defaultValue: _v3
      }),
      _v13 = !!(_v11 || _v12),
      _v14 = _v10?.contentHeight === "fit";
    return (0, _v1.jsx)(_v5.Flex, {
      id: (0, _v18.createDomName)(_v0, "panel-wrapper"),
      className: (0, _v18.createDomName)(_v1, "panel-wrapper"),
      direction: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 201,
      children: (0, _v1.jsxs)(_v6.Grid, {
        id: (0, _v18.createDomName)(_v0, "panel-grid"),
        className: (0, _v18.createDomName)(_v1, "panel-grid"),
        transition: "300ms",
        alignItems: "center",
        height: "100%",
        gridTemplateColumns: `${(0, _v8.rem)(80)} var(--panel-width)`,
        py: (0, _v8.rem)(16),
        marginRight: _v13 ? 0 : (0, _v8.rem)(-16),
        overflow: "hidden",
        sx: {
          "--panel-width": _v13 ? (0, _v8.rem)(324) : (0, _v8.rem)(0),
          "& > div:nth-of-type(2) > *": {
            height: _v14 ? "auto" : "100%"
          }
        },
        children: [(0, _v1.jsx)(_v22, {
          id: (0, _v18.createDomName)(_v0, "controls"),
          className: (0, _v18.createDomName)(_v1, "controls"),
          isLoading: _v2,
          defaultValue: _v3,
          value: _v8,
          panels: _v4,
          footer: _v5,
          onPanelChange: _v9.setLeftPanel,
          onUserActivateLeftPanel: _v7
        }), (0, _v1.jsx)(_v7.Panel, {
          id: _v0,
          className: _v1,
          isVisible: _v13,
          width: (0, _v8.rem)(324),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          motionProps: {
            transition: {
              duration: .3
            }
          },
          sx: {
            height: _v14 ? "auto" : "100%",
            maxHeight: _v6
          },
          children: (0, _v1.jsx)(_v7.PanelBody, {
            className: (0, _v18.createDomName)(_v1, "panel-body"),
            overflowX: "hidden",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "100%",
            height: _v14 ? "auto" : "100%",
            maxHeight: "100%",
            padding: 0,
            children: (0, _v1.jsx)(_v21.LiveErrorBoundary, {
              additionalInfo: _v8,
              component: "LeftPanel",
              children: _v12 ? (0, _v1.jsx)(_v20.BokehSkeleton, {
                width: "100%",
                height: "100%",
                borderRadius: 0
              }) : _v11
            })
          })
        })]
      })
    });
  }], 0);
}