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
    _v16 = _v0.i(0);
  let _v17 = (0, _v3.createContext)(null);
  function _v18() {
    return (0, _v3.useContext)(_v17);
  }
  _v0.s(["InteractionToolsRegistrantObserver", 0, function ({
    isActive: _v0 = !1,
    children: _v1,
    sessionId: _v2
  }) {
    let _v3 = (0, _v16.useRegistrantLoginCookie)(_v0, _v2);
    return (0, _v1.jsx)(_v17.Provider, {
      value: _v3,
      children: _v1
    });
  }, "useInteractionToolsRegistrantUuid", 0, _v18], 0);
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = (0, _v3.memo)(function ({
    sessionId: _v0,
    sessionType: _v1,
    isCollapsibleSignIn: _v2 = !0,
    isActiveStatusObservingEnabled: _v3 = !0,
    isBypassStatusObservingEnabled: _v4 = !1,
    isFooterEnabled: _v5 = !0,
    isCustomThemeEnabled: _v6 = !1,
    isManagementDisabled: _v7 = !1,
    isReactionsOnly: _v8 = !1,
    isStandalone: _v9 = !1,
    roomPassword: _v10,
    roomHashedPassword: _v11,
    roomUnlistedHash: _v12,
    roomDisabledOptions: _v13,
    toolbarAttachPosition: _v14 = _v6.ESidebarAttach.RIGHT,
    toolbarPanelIsFluid: _v15 = !1,
    toolbarPanelMaxSize: _v16,
    toolbarPanelOnClose: _v17,
    toolbarPanelOnOpen: _v18,
    toolbarPanelOnToggleExtend: _v19,
    backgroundColor: _v20,
    renderApplicationShell: _v21
  }) {
    let _v22 = (0, _v14.useIsVpaas)(),
      _v23 = (0, _v13.useViewer)(),
      _v24 = (0, _v8.useInitialRenderTime)(),
      _v25 = _v18(),
      _v26 = (0, _v3.useMemo)(() => ({
        renderAt: _v24,
        sessionApplicationType: _v10.EComposerApplicationType.INTERACTION_TOOLS,
        sessionType: _v1,
        sessionId: _v0,
        isVpaas: _v22,
        interaction: {
          isStandalone: _v9,
          auth: {
            noAutoSignIn: !1,
            isCollapsibleSignIn: _v2,
            roomPassword: _v10,
            roomHashedPassword: _v11,
            roomUnlistedHash: _v12,
            roomRegistrantUuid: _v25,
            roomDisabledOptions: _v13
          },
          feature: {
            isManagementDisabled: _v7,
            isReactionsOnly: _v8,
            module: _v11.EInteractionModule.AUTO
          },
          toolbar: {
            attachPosition: _v14,
            panelIsFluid: _v15,
            panelMaxSize: _v16,
            panelOnClose: _v17,
            panelOnOpen: _v18,
            panelOnToggleExtend: _v19
          },
          theme: (0, _v12.getUrlQueryValue)(_v7.liveQueryConfig.INTERACTION.THEME),
          backgroundColor: _v20
        },
        externalModules: [_v10.EExternalModule.FIREBASE]
      }), [_v1, _v0, _v22, _v10, _v11, _v12, _v25, _v13, _v7, _v8, _v14, _v15, _v16, _v24, _v17, _v18, _v19, _v20, _v2, _v9]);
    (0, _v9.useApplicationTrackingDetailsSync)({
      sessionApplicationType: _v26.sessionApplicationType,
      sessionType: _v26.sessionType,
      sessionId: _v26.sessionId,
      userId: _v23?.user?.id,
      userLocale: _v23?.locale
    });
    let _v27 = (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v24.InteractionToolsRouter, {}), (0, _v1.jsx)(_v15.InteractionToolsAmbient, {}), (0, _v1.jsx)(_v22.ReactionOverlay, {}), _v5 ? (0, _v1.jsx)(_v21.InteractionToolsFooter, {}) : null]
      }),
      _v28 = (0, _v1.jsx)(_v5.ScopeErrorBoundary, {
        fallback: _v20.InteractionToolsErrorPage,
        children: (0, _v1.jsx)(_v23.InteractionToolsProvider, {
          initialState: _v26,
          children: _v21 ? _v21(_v27) : _v27
        })
      });
    return (0, _v1.jsx)(_v19.InteractionToolsStatusObserver, {
      isActive: _v3,
      isBypass: _v4,
      sessionId: _v0,
      sessionType: _v1,
      children: (0, _v1.jsx)(_v2.ScopeProvider, {
        children: _v6 ? _v28 : (0, _v1.jsx)(_v4.ThemeProvider, {
          children: _v28
        })
      })
    });
  });
  _v0.s(["InteractionToolsEntry", 0, _v25], 0);
}