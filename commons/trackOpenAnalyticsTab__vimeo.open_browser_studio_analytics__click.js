{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["trackOpenAnalyticsTab", 0, function () {
    (0, _v3.createBPv2EventFactory)("vimeo.open_browser_studio_analytics", -1, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "analytics"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "analytics",
        location: "header",
        copy: null,
        modal_name: null,
        element: "button",
        device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
      })
    }), () => void 0)();
  }], 0), _v0.s(["trackOpenRegistrationSection", 0, function () {
    (0, _v3.createBPv2EventFactory)("vimeo.open_browser_studio_registration", -1, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "registration"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "registration",
        location: "header",
        copy: "registration",
        modal_name: null,
        element: "button",
        device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
      })
    }), () => void 0)();
  }, "trackOpenSettingsTab", 0, function () {
    (0, _v3.createBPv2EventFactory)("vimeo.open_browser_studio_settings", -1, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "settings"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "header",
        copy: null,
        modal_name: null,
        element: "button",
        device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
      })
    }), () => void 0)();
  }], 0);
  var _v4 = _v0.i(0),
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
    _v19 = _v0.i(0);
  function _v20(_v0 = !1) {
    return {
      flexShrink: +!!_v0,
      overflow: _v0 ? "hidden" : void 0
    };
  }
  function _v21(_v0 = !1) {
    return {
      fontSize: (0, _v7.rem)(14),
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      ...(_v0 ? {} : {
        maxWidth: (0, _v7.rem)(160),
        "@media screen and (min-width: 1191px)": {
          maxWidth: (0, _v7.rem)(220)
        }
      })
    };
  }
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  function _v25() {
    let _v0 = Object.values(_v22.liveQueryConfig.CREATION),
      _v1 = (0, _v23.filterObject)((0, _v24.getUrlQueryObject)(), _v0 => !_v0.includes(_v0));
    return (0, _v24.encodeQueryObjectAsString)(_v1);
  }
  var _v26 = _v0.i(0);
  function _v27({
    id: _v0 = (0, _v26.createLiveDomName)("event-path"),
    className: _v1 = (0, _v26.createLiveDomName)("event-path"),
    title: _v2,
    isLive: _v3,
    isWithPath: _v4 = !0,
    sessionInfo: _v5
  }) {
    let _v6 = (0, _v6.useMemo)(_v25, []),
      _v7 = `${_v5?.baseLink.uri}${_v6}`,
      _v8 = _v2 || (_v3 ? _v5?.title : _v5?.settingsLink.name);
    return (0, _v4.jsxs)(_v17.Breadcrumb, {
      id: _v0,
      className: _v1,
      marginLeft: (0, _v7.rem)(16),
      spacing: (0, _v7.rem)(4),
      variant: "primary",
      separator: (0, _v4.jsx)(_v19.ChevronRight, {
        height: (0, _v7.rem)(16)
      }),
      overflow: "hidden",
      children: [_v4 ? (0, _v4.jsx)(_v17.BreadcrumbItem, {
        className: (0, _v26.createLiveDomName)(_v1, "item"),
        sx: _v20(),
        children: (0, _v4.jsx)(_v18.BreadcrumbLink, {
          id: (0, _v26.createLiveDomName)(_v0, "list-link"),
          className: (0, _v26.createLiveDomName)(_v1, "link"),
          href: _v7,
          target: _v3 ? "_blank" : void 0,
          sx: _v21(),
          children: _v5?.baseLink.name
        })
      }) : null, (0, _v4.jsx)(_v17.BreadcrumbItem, {
        className: (0, _v26.createLiveDomName)(_v1, "item"),
        display: "inline",
        textOverflow: "ellipsis",
        isCurrentPage: !1,
        sx: _v20(!0),
        children: (0, _v4.jsx)(_v18.BreadcrumbLink, {
          id: (0, _v26.createLiveDomName)(_v0, "event-link"),
          className: (0, _v26.createLiveDomName)(_v1, "link"),
          sx: _v21(!0),
          color: "text-primary",
          children: _v8
        })
      }), ")"]
    });
  }
  _v0.s(["LiveBreadcrumb", 0, _v27], 0);
  let _v28 = (0, _v6.memo)(({
    id: _v0 = (0, _v15.createDomName)("live-path"),
    className: _v1 = (0, _v15.createDomName)("live-path"),
    composerSessionContext: {
      sessionInfo: {
        value: _v2,
        isLoading: _v3
      }
    } = (0, _v5.useManager)(_v13.ComposerSessionManager),
    composerSessionStatusContext: {
      liveComposerStatuses: _v4
    } = (0, _v5.useManager)(_v14.ComposerSessionStatusManager)
  }) => {
    let _v5 = (0, _v16.useIsVpaas)(),
      _v6 = (0, _v6.useMemo)(_v25, []),
      _v7 = `${_v2?.baseLink.uri}${_v6}`;
    return _v3 ? (0, _v4.jsx)(_v12.BokehSkeleton, {
      id: (0, _v15.createDomName)(_v0, "loader"),
      className: (0, _v15.createDomName)(_v1, "loader"),
      height: "60%",
      width: (0, _v7.rem)(300),
      marginX: (0, _v7.rem)(16)
    }) : (0, _v4.jsxs)(_v4.Fragment, {
      children: [_v5 ? null : (0, _v4.jsx)(_v9.Link, {
        href: "/",
        children: (0, _v4.jsx)(_v8.IconButton, {
          id: (0, _v15.createDomName)(_v0, "vimeo-button"),
          className: (0, _v15.createDomName)(_v1, "vimeo-button"),
          "aria-label": "logo",
          variant: "secondary",
          icon: (0, _v4.jsx)(_v11.VimeoV, {}),
          margin: `0 ${(0, _v7.rem)(16)} 0 ${(0, _v7.rem)(4)}`
        })
      }), _v5 ? null : (0, _v4.jsx)(_v9.Link, {
        href: _v7,
        children: (0, _v4.jsx)(_v8.IconButton, {
          id: (0, _v15.createDomName)(_v0, "back-button"),
          className: (0, _v15.createDomName)(_v1, "back-button"),
          "aria-label": "back",
          variant: "secondary",
          icon: (0, _v4.jsx)(_v10.ArrowLeft, {})
        })
      }), (0, _v4.jsx)(_v27, {
        id: _v0,
        className: _v1,
        isLive: _v4.isSessionLive,
        isWithPath: !_v5,
        sessionInfo: _v2
      })]
    });
  });
  _v0.s(["LivePath", 0, _v28], 0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = (0, _v29.default)(async () => {
    let {
      AccountMenu: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  });
  _v0.s(["LiveBroadcasterHeaderProfile", 0, function ({
    id: _v0 = (0, _v26.createLiveDomName)("header-profile"),
    className: _v1 = (0, _v26.createLiveDomName)("header-profile"),
    isLive: _v2 = !1
  }) {
    let _v3 = (0, _v34.useViewer)(),
      _v4 = (0, _v6.useCallback)(() => !_v2 || window.confirm(_v35.translations.promptBeforePageLeave), [_v2]);
    return (0, _v4.jsx)(_v30.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "center",
      minWidth: (0, _v7.rem)(28),
      zIndex: _v33.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_LABEL + 1,
      children: (0, _v4.jsx)(_v32.LiveErrorBoundary, {
        component: "LiveHeaderProfile",
        isDetailed: !1,
        children: (0, _v4.jsx)(_v6.Suspense, {
          fallback: (0, _v4.jsx)(_v31.Spinner, {
            size: "sm"
          }),
          children: _v3?.user ? (0, _v4.jsx)(_v36, {
            onConfirmTeamSwitch: _v4
          }) : null
        })
      })
    });
  }], 0);
}