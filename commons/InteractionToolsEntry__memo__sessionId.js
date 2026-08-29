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
    _v23 = _v0.i(0);
  let _v24 = (0, _v3.memo)(function ({
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
    isOnsite: _v10 = !1,
    isAudienceSpeakerEnabled: _v11 = !1,
    isAudienceSpeakerOnly: _v12 = !1,
    roomPassword: _v13,
    roomHashedPassword: _v14,
    roomUnlistedHash: _v15,
    roomDisabledOptions: _v16,
    toolbarAttachPosition: _v17 = _v6.ESidebarAttach.RIGHT,
    toolbarPanelIsFluid: _v18 = !1,
    toolbarPanelMaxSize: _v19,
    toolbarPanelOnClose: _v20,
    toolbarPanelOnOpen: _v21,
    toolbarPanelOnToggleExtend: _v22,
    backgroundColor: _v23,
    renderApplicationShell: _v24
  }) {
    let _v25 = (0, _v14.useIsVpaas)(),
      _v26 = (0, _v13.useViewer)(),
      _v27 = (0, _v8.useInitialRenderTime)(),
      _v28 = (0, _v17.useInteractionToolsRegistrantUuid)(),
      _v29 = (0, _v3.useMemo)(() => ({
        renderAt: _v27,
        sessionApplicationType: _v10.EComposerApplicationType.INTERACTION_TOOLS,
        sessionType: _v1,
        sessionId: _v0,
        isVpaas: _v25,
        interaction: {
          isStandalone: _v9,
          isOnsite: _v10,
          isAudienceSpeakerEnabled: _v11,
          auth: {
            noAutoSignIn: !1,
            isCollapsibleSignIn: _v2,
            roomPassword: _v13,
            roomHashedPassword: _v14,
            roomUnlistedHash: _v15,
            roomRegistrantUuid: _v28,
            roomDisabledOptions: _v16
          },
          feature: {
            isManagementDisabled: _v7,
            isReactionsOnly: _v8,
            module: _v11.EInteractionModule.AUTO
          },
          toolbar: {
            attachPosition: _v17,
            panelIsFluid: _v18,
            panelMaxSize: _v19,
            panelOnClose: _v20,
            panelOnOpen: _v21,
            panelOnToggleExtend: _v22
          },
          theme: (0, _v12.getUrlQueryValue)(_v7.liveQueryConfig.INTERACTION.THEME),
          backgroundColor: _v23
        },
        externalModules: [_v10.EExternalModule.FIREBASE]
      }), [_v1, _v0, _v25, _v13, _v14, _v15, _v28, _v16, _v7, _v8, _v17, _v18, _v19, _v27, _v20, _v21, _v22, _v23, _v2, _v9, _v10, _v11]);
    (0, _v9.useApplicationTrackingDetailsSync)({
      sessionApplicationType: _v29.sessionApplicationType,
      sessionType: _v29.sessionType,
      sessionId: _v29.sessionId,
      userId: _v26?.user?.id,
      userLocale: _v26?.locale
    });
    let _v30 = _v12 ? (0, _v1.jsx)(_v16.AudienceSpeakerStage, {}) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v23.InteractionToolsRouter, {}), (0, _v1.jsx)(_v15.InteractionToolsAmbient, {}), (0, _v1.jsx)(_v21.ReactionOverlay, {}), _v10 ? (0, _v1.jsx)(_v16.AudienceSpeakerStage, {}) : null, _v5 ? (0, _v1.jsx)(_v20.InteractionToolsFooter, {}) : null]
      }),
      _v31 = (0, _v1.jsx)(_v5.ScopeErrorBoundary, {
        fallback: _v19.InteractionToolsErrorPage,
        children: (0, _v1.jsx)(_v22.InteractionToolsProvider, {
          initialState: _v29,
          children: _v24 && !_v12 ? _v24(_v30) : _v30
        })
      });
    return (0, _v1.jsx)(_v18.InteractionToolsStatusObserver, {
      isActive: _v3,
      isBypass: _v4,
      sessionId: _v0,
      sessionType: _v1,
      children: (0, _v1.jsx)(_v2.ScopeProvider, {
        children: _v6 ? _v31 : (0, _v1.jsx)(_v4.ThemeProvider, {
          children: _v31
        })
      })
    });
  });
  _v0.s(["InteractionToolsEntry", 0, _v24]);
}