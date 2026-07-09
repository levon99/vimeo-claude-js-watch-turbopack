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
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = (0, _v7.memo)(() => (0, _v1.jsx)(_v27.Flex, {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: (0, _v25.rem)(64),
    grow: 1,
    background: "surface",
    width: "100%",
    height: "100%",
    children: (0, _v1.jsx)(_v26.Paragraph, {
      size: "lg",
      color: "text-secondary",
      children: _v28.translations.whenAudienceEngagementIsOpen
    })
  }));
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  function _v32({
    pageProps: _v0,
    sessionId: _v1,
    sessionType: _v2
  }) {
    let _v3 = (0, _v20.useViewer)(),
      _v4 = (0, _v12.useInitialRenderTime)(),
      _v5 = (0, _v21.useIsVpaas)(),
      _v6 = (0, _v7.useMemo)(() => {
        let _v0 = (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.IS_MANAGEMENT_DISABLED),
          _v1 = "string" == typeof _v0 ? "true" === _v0 : _v10.environmentConfig.IS_IFRAME,
          _v2 = (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.SIDEBAR_ATTACH_POSITION);
        _v2 || (_v2 = _v10.environmentConfig.IS_IFRAME ? _v9.ESidebarAttach.BOTTOM : _v9.ESidebarAttach.TOP);
        let _v3 = (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.AUTH_ROOM_DISABLED_OPTIONS);
        return {
          renderAt: _v4,
          sessionApplicationType: _v14.EComposerApplicationType.INTERACTION_TOOLS,
          sessionType: _v2,
          sessionId: _v1,
          isVpaas: _v5,
          interaction: {
            isStandalone: !0,
            auth: {
              noAutoSignIn: "true" === (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.AUTH_NO_AUTO_SIGN_IN),
              isCollapsibleSignIn: "true" === (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.AUTH_COLLAPSIBLE_SIGN_IN),
              roomDisabledOptions: _v3 ? String(_v3).split(",").map(_v0 => _v0.trim()) : [],
              roomPassword: (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.AUTH_ROOM_PASSWORD),
              roomUnlistedHash: (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.AUTH_ROOM_UNLISTED_HASH),
              roomInjectedAuthToken: (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.AUTH_INJECTED_JWT_TOKEN)
            },
            feature: {
              isBackstageAllowed: !1,
              isManagementDisabled: _v1,
              module: (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.MODULE) || _v15.EInteractionModule.AUTO
            },
            toolbar: {
              attachPosition: _v2,
              panelIsFluid: !0
            },
            theme: (0, _v16.getUrlQueryValue)(_v11.liveQueryConfig.INTERACTION.THEME) || "dark"
          },
          externalModules: [_v14.EExternalModule.FIREBASE]
        };
      }, []);
    (0, _v13.useApplicationTrackingDetailsSync)({
      sessionApplicationType: _v6.sessionApplicationType,
      sessionType: _v6.sessionType,
      sessionId: _v6.sessionId,
      userId: _v3?.user?.id,
      userLocale: _v3?.locale
    }), function (_v0 = "light") {
      let {
        setTheme: _v1
      } = (0, _v17.useThemeContext)();
      (0, _v19.useIsomorphicLayoutEffect)(() => {
        _v18.Logger.getGlobal().info("Synchronizing theme:", _v0), _v1({
          name: _v0
        });
      }, [_v1]);
    }(_v6.interaction?.theme);
    let _v7 = (0, _v1.jsxs)(_v30.InteractionToolsProvider, {
      pageProps: _v0,
      initialState: _v6,
      children: [(0, _v1.jsx)(_v31.InteractionToolsRouter, {}), (0, _v1.jsx)(_v22.InteractionToolsAmbient, {}), (0, _v1.jsx)(_v24.InteractionToolsFooter, {})]
    });
    return (0, _v1.jsx)(_v6.ScopeProvider, {
      children: (0, _v1.jsx)(_v8.ScopeErrorBoundary, {
        fallback: _v5.InteractionToolsErrorPage,
        children: _v6?.interaction?.feature?.module === _v15.EInteractionModule.AUTO ? (0, _v1.jsx)(_v23.InteractionToolsStatusObserver, {
          isActive: !0,
          isAvailableForModeration: !0,
          sessionId: _v1,
          sessionType: _v2,
          placeholder: (0, _v1.jsx)(_v29, {}),
          children: _v7
        }) : _v7
      })
    });
  }
  _v0.s(["LiveInteractionToolsRoot", 0, function (_v0) {
    let _v1 = (0, _v4.useOptionalViewer)(),
      {
        sessionId: _v2,
        sessionType: _v3
      } = (0, _v3.usePageSessionContext)();
    return _v1 ? (0, _v1.jsx)(_v2.LiveErrorBoundary, {
      component: "LiveInteractionToolsRoot",
      componentHandler: _v5.InteractionToolsErrorPage,
      children: (0, _v1.jsx)(_v32, {
        sessionId: _v2,
        sessionType: _v3,
        pageProps: _v0
      })
    }) : null;
  }], 0);
}