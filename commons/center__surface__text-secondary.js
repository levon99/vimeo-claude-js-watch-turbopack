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
  let _v10 = _v9.createGlobalStyle`
  html,
  body,
  html[data-theme] {
    background: transparent;
    background-color: transparent;
  }
`;
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
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = (0, _v7.memo)(() => (0, _v1.jsx)(_v29.Flex, {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: (0, _v27.rem)(64),
    grow: 1,
    background: "surface",
    width: "100%",
    height: "100%",
    children: (0, _v1.jsx)(_v28.Paragraph, {
      size: "lg",
      color: "text-secondary",
      children: _v30.translations.whenAudienceEngagementIsOpen
    })
  }));
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  function _v34({
    pageProps: _v0,
    sessionId: _v1,
    sessionType: _v2
  }) {
    let _v3 = (0, _v22.useViewer)(),
      _v4 = (0, _v14.useInitialRenderTime)(),
      _v5 = (0, _v23.useIsVpaas)(),
      _v6 = (0, _v7.useMemo)(() => {
        let _v0 = (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.IS_MANAGEMENT_DISABLED),
          _v1 = "string" == typeof _v0 ? "true" === _v0 : _v12.environmentConfig.IS_IFRAME,
          _v2 = (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.SIDEBAR_ATTACH_POSITION);
        _v2 || (_v2 = _v12.environmentConfig.IS_IFRAME ? _v11.ESidebarAttach.BOTTOM : _v11.ESidebarAttach.TOP);
        let _v3 = (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.AUTH_ROOM_DISABLED_OPTIONS),
          _v4 = "true" === (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.PROXY_ONLY),
          _v5 = "true" === (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.FORCE_TAILING),
          _v6 = "true" === (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.HIDE_COMPOSER),
          _v7 = "true" === (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.OVERLAY),
          _v8 = (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.MODULE) || _v17.EInteractionModule.AUTO;
        return {
          renderAt: _v4,
          sessionApplicationType: _v16.EComposerApplicationType.INTERACTION_TOOLS,
          sessionType: _v2,
          sessionId: _v1,
          isVpaas: _v5,
          interaction: {
            isStandalone: !0,
            auth: {
              noAutoSignIn: "true" === (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.AUTH_NO_AUTO_SIGN_IN),
              isCollapsibleSignIn: "true" === (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.AUTH_COLLAPSIBLE_SIGN_IN),
              roomDisabledOptions: _v3 ? String(_v3).split(",").map(_v0 => _v0.trim()) : [],
              roomPassword: (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.AUTH_ROOM_PASSWORD),
              roomUnlistedHash: (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.AUTH_ROOM_UNLISTED_HASH),
              roomInjectedAuthToken: (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.AUTH_INJECTED_JWT_TOKEN)
            },
            feature: {
              isBackstageAllowed: !1,
              isManagementDisabled: !!_v7 || _v1,
              module: _v4 || _v7 ? _v17.EInteractionModule.CHAT : _v8,
              isProxyOnly: _v4,
              isForcedTailing: _v7 || _v5,
              isComposerHidden: _v7 || _v6,
              isOverlay: _v7
            },
            toolbar: {
              attachPosition: _v2,
              panelIsFluid: !0
            },
            theme: (0, _v18.getUrlQueryValue)(_v13.liveQueryConfig.INTERACTION.THEME) || "dark"
          },
          externalModules: [_v16.EExternalModule.FIREBASE]
        };
      }, []);
    (0, _v15.useApplicationTrackingDetailsSync)({
      sessionApplicationType: _v6.sessionApplicationType,
      sessionType: _v6.sessionType,
      sessionId: _v6.sessionId,
      userId: _v3?.user?.id,
      userLocale: _v3?.locale
    }), function (_v0 = "light") {
      let {
        setTheme: _v1
      } = (0, _v19.useThemeContext)();
      (0, _v21.useIsomorphicLayoutEffect)(() => {
        _v20.Logger.getGlobal().info("Synchronizing theme:", _v0), _v1({
          name: _v0
        });
      }, [_v1]);
    }(_v6.interaction?.theme);
    let _v7 = (0, _v1.jsxs)(_v32.InteractionToolsProvider, {
      pageProps: _v0,
      initialState: _v6,
      children: [(0, _v1.jsx)(_v33.InteractionToolsRouter, {}), (0, _v1.jsx)(_v24.InteractionToolsAmbient, {}), (0, _v1.jsx)(_v26.InteractionToolsFooter, {})]
    });
    return (0, _v1.jsxs)(_v6.ScopeProvider, {
      children: [_v6?.interaction?.feature?.isOverlay ? (0, _v1.jsx)(_v10, {}) : null, (0, _v1.jsx)(_v8.ScopeErrorBoundary, {
        fallback: _v5.InteractionToolsErrorPage,
        children: _v6?.interaction?.feature?.module === _v17.EInteractionModule.AUTO ? (0, _v1.jsx)(_v25.InteractionToolsStatusObserver, {
          isActive: !0,
          isAvailableForModeration: !0,
          sessionId: _v1,
          sessionType: _v2,
          placeholder: (0, _v1.jsx)(_v31, {}),
          children: _v7
        }) : _v7
      })]
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
      children: (0, _v1.jsx)(_v34, {
        sessionId: _v2,
        sessionType: _v3,
        pageProps: _v0
      })
    }) : null;
  }], 0);
}