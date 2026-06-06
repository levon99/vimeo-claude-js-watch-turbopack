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
    _v11 = _v0.i(0);
  let _v12 = (0, _v4.lazy)(() => _v0.A(0).then(_v0 => ({
    default: _v0.InteractionDebugContent
  })));
  function _v13() {
    let [_v0, _v1] = (0, _v4.useState)(!1),
      _v2 = (0, _v4.useCallback)(() => {
        _v1(_v0 => !_v0);
      }, []);
    return (0, _v1.jsxs)(_v4.Suspense, {
      fallback: null,
      children: [(0, _v1.jsx)(_v11.BokehTooltip, {
        label: _v10.translations.debug,
        shouldWrapChildren: !1,
        placement: "left",
        children: (0, _v1.jsx)(_v8.IconButton, {
          "aria-label": "debug",
          size: "xs",
          variant: "tertiary",
          icon: (0, _v1.jsx)(_v9.SettingsGear, {}),
          position: "absolute",
          bottom: (0, _v5.rem)(16),
          right: (0, _v5.rem)(16),
          onClick: _v2
        })
      }), (0, _v1.jsx)(_v6.Drawer, {
        isOpen: _v0,
        placement: "right",
        onClose: _v2,
        children: (0, _v1.jsx)(_v7.DrawerContent, {
          padding: (0, _v5.rem)(16),
          children: (0, _v1.jsx)(_v12, {
            onDismiss: _v2
          })
        })
      })]
    });
  }
  _v0.s(["InteractionToolsFooter", 0, function () {
    let _v0 = (0, _v3.useCanSeeDebugTools)();
    return (0, _v1.jsx)(_v2.Flex, {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 0,
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 0,
      children: _v0 ? (0, _v1.jsx)(_v13, {}) : null
    });
  }], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  class _v23 extends _v20.AbstractFirebaseManager {
    context = {
      isFirebaseReady: !1,
      isComposerReady: !1,
      isInteractionReady: !1,
      isStreamHealthReady: !1,
      isDisposed: !1,
      interactionCredentials: null,
      composerCredentials: null,
      streamHealthCredentials: null,
      interactionConnection: (0, _v14.createNested)({
        isConnected: !1,
        user: null
      }),
      composerConnection: (0, _v14.createNested)({
        isConnected: !1,
        user: null
      }),
      streamHealthConnection: (0, _v14.createNested)({
        isConnected: !1,
        user: null
      }),
      connectionStatuses: (0, _v14.createComputed)(({
        interactionConnection: _v0
      }) => ({
        isInteractionConnected: !!(_v0?.isConnected && _v0?.user !== null)
      }))
    };
    isConnected() {
      let {
        interactionConnection: _v0
      } = this.context;
      return _v0.isConnected && null !== _v0.user;
    }
    async onInteractionSessionReady(_v0) {
      this.log.info("Initializing firebase connection on session init"), await (0, _v21.initializeInteractionToolsConnection)(this, _v0);
    }
  }
  (0, _v19._)([(0, _v14.OnSignal)(_v22.ELiveSignal.INTERACTION_SESSION_READY)], _v23.prototype, "onInteractionSessionReady", null), _v0.s(["InteractionFirebaseManager", 0, _v23], 0);
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = [_v17.DebugControlManager, _v18.ModuleManager, _v29.TrackingManager, _v27.InteractionSessionManager, _v23, _v28.NotificationManager, _v24.ChatManager, _v26.QnAManager, _v25.PollManager],
    _v32 = (0, _v14.createProvider)(_v31);
  _v0.s(["InteractionToolsProvider", 0, function ({
    children: _v0,
    initialState: _v1,
    pageProps: _v2 = null
  }) {
    return (0, _v30.useScopeViewerProvision)(), (0, _v15.useScopeGctlProvision)(), (0, _v1.jsx)(_v16.LiveGlobalsProvider, {
      initialState: _v1,
      pageProps: _v2,
      children: (0, _v1.jsx)(_v32, {
        initialState: _v1,
        children: _v0
      })
    });
  }], 0);
}