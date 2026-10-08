{
  "use strict";

  var _v1,
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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = ((_v1 = {})[_v1.NUMERIC = 0] = "NUMERIC", _v1[_v1.TIME = 1] = "TIME", _v1);
  function _v23({
    type: _v0 = 0,
    isLoading: _v1 = !1,
    value: _v2,
    label: _v3,
    tipContent: _v4
  }) {
    let _v5 = (0, _v17.useMemo)(() => 1 === _v0 ? (0, _v21.getFormattedTimecodeFromSeconds)(_v2, _v21.TimecodeFormats.OnlyDigits, {
      shouldShowZero: !0
    }) : String(_v2), [_v2, _v0]);
    return _v1 ? (0, _v2.jsx)(_v19.Progress, {
      width: "100%",
      height: (0, _v4.rem)(72)
    }) : (0, _v2.jsxs)(_v16.Flex, {
      direction: "column",
      alignSelf: "stretch",
      padding: (0, _v4.rem)(16),
      border: "1px solid",
      gap: (0, _v4.rem)(8),
      borderRadius: (0, _v4.rem)(12),
      borderColor: "stroke",
      background: "fill-component",
      children: [(0, _v2.jsxs)(_v18.Header, {
        size: "xs",
        display: "flex",
        alignItems: "center",
        gap: (0, _v4.rem)(4),
        children: [_v3, (0, _v2.jsx)(_v20.CircleTip, {
          label: _v4,
          placement: "top",
          color: "text-tertiary",
          width: (0, _v4.rem)(240)
        })]
      }), (0, _v2.jsx)(_v18.Header, {
        size: "xl",
        children: _v5
      })]
    });
  }
  function _v24({
    stats: {
      value: _v0,
      isLoading: _v1
    }
  }) {
    let _v2 = _v0 && _v0.totalViewTime && _v0.plays ? Math.round(_v0.totalViewTime / _v0.plays) : 0;
    return (0, _v2.jsxs)(_v16.Flex, {
      direction: "column",
      alignItems: "flex-start",
      gap: (0, _v4.rem)(8),
      padding: `${(0, _v4.rem)(16)} 0`,
      alignSelf: "stretch",
      children: [(0, _v2.jsx)(_v23, {
        isLoading: _v1,
        value: _v0?.viewers?.current ?? 0,
        label: _v15.T_WATCHING_NOW,
        tipContent: _v15.T_WATCHING_NOW_TIP
      }), (0, _v2.jsx)(_v23, {
        isLoading: _v1,
        value: _v0?.viewers?.peak ?? 0,
        label: _v15.T_PEAK_VIEWS,
        tipContent: _v15.T_PEAK_VIEWS_TIP
      }), (0, _v2.jsx)(_v23, {
        isLoading: _v1,
        value: _v0?.plays ?? 0,
        label: _v15.T_TOTAL_VIEWS,
        tipContent: _v15.T_TOTAL_VIEWS_TIP
      }), (0, _v2.jsx)(_v23, {
        isLoading: _v1,
        value: _v2,
        type: _v22.TIME,
        label: _v15.T_AVG_VIEW_TIME,
        tipContent: _v15.T_AVG_VIEW_TIP
      })]
    });
  }
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  _v0.s(["AnalyticsTab", 0, function ({
    id: _v0 = (0, _v25.createLiveDomName)("analytics-tab"),
    className: _v1 = (0, _v25.createLiveDomName)("analytics-tab"),
    composerSessionStatsContext: {
      stats: _v2
    } = (0, _v3.useManager)(_v14.ComposerSessionStatsManager)
  }) {
    let _v3 = (0, _v13.useScrollbarStyles)();
    return (0, _v2.jsxs)(_v5.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v12.createTabWrapperStyle)({
        withScroll: !0
      }),
      children: [(0, _v2.jsx)(_v11.RightPanelHeader, {
        id: (0, _v25.createLiveDomName)(_v0, "header"),
        className: (0, _v25.createLiveDomName)(_v1, "header"),
        label: _v26.translations.analytics,
        rightControls: (0, _v2.jsx)(_v10.RightPanelDismiss, {})
      }), (0, _v2.jsx)(_v9.RightPanelContent, {
        id: (0, _v25.createLiveDomName)(_v0, "content"),
        className: (0, _v25.createLiveDomName)(_v1, "content"),
        children: (0, _v2.jsx)(_v5.Box, {
          id: (0, _v25.createLiveDomName)(_v0, "scroll"),
          className: (0, _v25.createLiveDomName)(_v1, "scroll"),
          marginRight: (0, _v4.rem)(-16),
          overflowY: "scroll",
          height: "100%",
          sx: _v3,
          children: _v2.value || _v2.isLoading ? (0, _v2.jsxs)(_v2.Fragment, {
            children: [(0, _v2.jsx)(_v6.Paragraph, {
              id: (0, _v25.createLiveDomName)(_v0, "label"),
              size: "md",
              color: "text-secondary",
              children: _v15.T_TRACK_VIMEO_EVENTS
            }), (0, _v2.jsx)(_v24, {
              stats: _v2
            })]
          }) : (0, _v2.jsx)(_v8.EmptyStatePlaceholder, {
            id: (0, _v25.createLiveDomName)(_v0, "placeholder"),
            control: null,
            icon: (0, _v2.jsx)(_v7.Analytics, {
              boxSize: "lg"
            }),
            description: (0, _v15.T_VIEW_YOUR_ANALYTICS)()
          })
        })
      })]
    });
  }], 0);
}