{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useInitialRenderTime", 0, function () {
    return (0, _v1.useRef)(Date.now()).current;
  }], 0);
  var _v2 = _v0.i(0),
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
    _v15 = _v0.i(0);
  _v0.s(["useBroadcasterTrackingConfigUpdater", 0, function () {
    let {
        sessionId: _v0,
        sessionType: _v1,
        sessionInfo: {
          value: _v2
        }
      } = (0, _v2.useManager)(_v7.ComposerSessionManager),
      {
        ingestStatus: _v3,
        cloudSessionId: _v4,
        streamMode: _v5
      } = (0, _v2.useManager)(_v8.ComposerSessionStatusManager),
      {
        trackingActions: _v6,
        config: _v7,
        isReady: _v8
      } = (0, _v2.useManager)(_v12.TrackingManager, ({
        config: _v0,
        isReady: _v1
      }) => [_v0, _v1]),
      {
        settings: {
          value: _v9
        }
      } = (0, _v2.useManager)(_v9.EventSettingsManager);
    return (0, _v1.useEffect)(() => {
      let _v0 = _v2?.metadata.connections.ingestStatus,
        _v1 = _v0 && (0, _v15.parseClipIdFromURI)(_v0.uri) || null,
        _v2 = _v14.EIngestStatus[_v3].toLowerCase(),
        _v3 = _v9?.preferredStreamMethod ? _v5.ProductionMethod[_v9.preferredStreamMethod] : null;
      _v6.setConfig({
        DETAILS: {
          SESSION_CLOUD_ID: _v4
        },
        BIG_PICTURE_LIVE_SCHEMA_BASE: {
          page: _v4.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          liveEventType: _v1,
          liveEventId: _v0 ? String(_v0) : null,
          liveStatus: _v2,
          videoId: _v1
        },
        BIG_PICTURE_INTERACTION_SCHEMA_BASE: {
          page: _v4.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          view: "moderator",
          liveStatus: _v2,
          videoId: _v1,
          roomType: _v1,
          roomId: _v0 ? String(_v0) : null
        },
        BIG_PICTURE_SCHEME_ADDITIONAL: {
          isSimulive: _v5 === _v13.EComposerStreamModeType.SIMULIVE,
          isRecord: _v5 === _v13.EComposerStreamModeType.RECORD
        },
        BIG_PICTURE_EVENT_SETTINGS_SCHEMA_BASE: {
          eventPrivacy: _v9?.streamPrivacy?.view,
          productionMethod: _v3
        }
      }), (0, _v6.isLiveTrackingConfigReady)(_v4.liveTrackingConfig) && _v6.setIsReady();
    }, [_v9?.streamPrivacy?.view, _v9?.preferredStreamMethod, _v6, _v1, _v0, _v3, _v4, _v2?.metadata, _v5]), {
      isTrackingReady: _v8,
      trackingConfig: _v7
    };
  }, "useGuestTrackingConfigUpdater", 0, function () {
    let {
        sessionType: _v0,
        sessionId: _v1,
        sessionInfo: {
          value: _v2
        }
      } = (0, _v2.useManager)(_v10.GuestSessionManager),
      {
        ingestStatus: _v3,
        cloudSessionId: _v4,
        streamMode: _v5
      } = (0, _v2.useManager)(_v8.ComposerSessionStatusManager),
      {
        trackingActions: _v6
      } = (0, _v2.useManager)(_v12.TrackingManager, ({
        trackingActions: _v0
      }) => [_v0]);
    (0, _v1.useEffect)(() => {
      let _v0 = _v2?.metadata.connections.ingestStatus,
        _v1 = _v0 && (0, _v15.parseClipIdFromURI)(_v0.uri) || null,
        _v2 = _v14.EIngestStatus[_v3].toLowerCase();
      _v6.setConfig({
        DETAILS: {
          SESSION_CLOUD_ID: _v4
        },
        BIG_PICTURE_LIVE_SCHEMA_BASE: {
          page: _v4.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          liveEventType: _v0,
          liveEventId: _v1 ? String(_v1) : null,
          liveStatus: _v2,
          videoId: _v1
        },
        BIG_PICTURE_INTERACTION_SCHEMA_BASE: {
          page: _v4.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          view: "attendee",
          liveStatus: _v2,
          videoId: _v1,
          roomType: _v0,
          roomId: _v1 ? String(_v1) : null
        }
      }), (0, _v6.isLiveTrackingConfigReady)(_v4.liveTrackingConfig) && _v6.setIsReady();
    }, [_v6, _v1, _v0, _v3, _v4, _v2, _v5]);
  }, "useInteractionToolsConfigUpdater", 0, function () {
    let {
        sessionType: _v0,
        sessionId: _v1,
        roomInfo: {
          value: _v2
        },
        roomUser: {
          value: _v3
        }
      } = (0, _v2.useManager)(_v11.InteractionSessionManager),
      {
        trackingActions: _v4,
        config: _v5,
        isReady: _v6
      } = (0, _v2.useManager)(_v12.TrackingManager, ({
        config: _v0,
        isReady: _v1
      }) => [_v0, _v1]),
      {
        initialState: {
          interaction: _v7
        }
      } = (0, _v3.useLiveGlobals)();
    return (0, _v1.useEffect)(() => {
      let _v0 = _v2?.metadata.connections.ingestStatus,
        _v1 = _v0 ? (0, _v15.parseClipIdFromURI)(_v0.uri) : null,
        _v2 = !!(_v7?.feature?.isManagementDisabled || !_v3?.isCreator),
        _v3 = {
          BIG_PICTURE_INTERACTION_SCHEMA_BASE: {
            page: _v4.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
            view: _v2 ? "attendee" : "moderator",
            videoId: _v1,
            roomType: _v0,
            roomId: _v1 ? String(_v1) : null
          }
        };
      _v0 === _v13.EComposerSessionType.VENUE && (_v3.BIG_PICTURE_VENUE_SCHEMA_BASE = {
        ..._v2?.metadata?.misc?.tracking
      }), _v4.setConfig(_v3), !_v6 && (0, _v6.isInteractionTrackingConfigReady)(_v4.liveTrackingConfig) && _v4.setIsReady();
    }, [_v4, _v1, _v0, _v2, _v6, _v7?.feature?.isManagementDisabled, _v3?.isCreator]), {
      isTrackingReady: _v6,
      trackingConfig: _v5
    };
  }, "useRTMPTrackingConfigUpdater", 0, function () {
    let {
        sessionId: _v0,
        sessionType: _v1,
        sessionInfo: {
          value: _v2
        }
      } = (0, _v2.useManager)(_v7.ComposerSessionManager),
      {
        ingestStatus: _v3
      } = (0, _v2.useManager)(_v8.ComposerSessionStatusManager),
      {
        trackingActions: _v4,
        config: _v5,
        isReady: _v6
      } = (0, _v2.useManager)(_v12.TrackingManager, ({
        config: _v0,
        isReady: _v1
      }) => [_v0, _v1]),
      {
        settings: {
          value: _v7
        }
      } = (0, _v2.useManager)(_v9.EventSettingsManager);
    return (0, _v1.useEffect)(() => {
      let _v0 = _v2?.metadata.connections.ingestStatus,
        _v1 = _v0 && (0, _v15.parseClipIdFromURI)(_v0.uri) || null,
        _v2 = _v14.EIngestStatus[_v3].toLowerCase(),
        _v3 = _v7?.preferredStreamMethod ? _v5.ProductionMethod[_v7.preferredStreamMethod] : null;
      _v4.setConfig({
        BIG_PICTURE_LIVE_SCHEMA_BASE: {
          page: _v4.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          liveEventType: _v1,
          liveEventId: _v0 ? String(_v0) : null,
          liveStatus: _v2,
          videoId: _v1
        },
        BIG_PICTURE_EVENT_SETTINGS_SCHEMA_BASE: {
          eventPrivacy: _v7?.streamPrivacy?.view,
          productionMethod: _v3
        }
      }), (0, _v6.isLiveTrackingConfigReady)(_v4.liveTrackingConfig) && _v4.setIsReady();
    }, [_v7?.streamPrivacy?.view, _v7?.preferredStreamMethod, _v4, _v1, _v0, _v3, _v2?.metadata]), {
      isTrackingReady: _v6,
      trackingConfig: _v5
    };
  }], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  function _v20({
    children: _v0,
    isVisible: _v1
  }) {
    let _v2 = (0, _v1.useMemo)(() => ({
      "&::after": {
        content: '""',
        position: "absolute",
        top: (0, _v18.rem)(-4),
        right: (0, _v18.rem)(-4),
        width: (0, _v18.rem)(8),
        height: (0, _v18.rem)(8),
        borderRadius: (0, _v18.rem)(4),
        background: "red.500",
        display: _v1 ? "block" : "none"
      }
    }), [_v1]);
    return (0, _v16.jsx)(_v19.Box, {
      position: "relative",
      width: (0, _v18.rem)(24),
      height: (0, _v18.rem)(24),
      sx: _v2,
      children: _v0
    });
  }
  _v0.s(["IconNotification", 0, _v20], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = (0, _v1.memo)(function ({
    isActive: _v0,
    isGlobal: _v1 = !0,
    isManagementAccessed: _v2,
    chatContext: {
      isEnabled: _v3,
      isBackstageEnabled: _v4,
      enabledAt: _v5,
      hydratedAt: _v6,
      [_v22.EChatType.BACKSTAGE]: {
        messages: _v7
      },
      [_v22.EChatType.PUBLIC]: {
        messages: _v8
      }
    } = (0, _v2.useManager)(_v21.ChatManager)
  }) {
    let {
        initialState: {
          renderAt: _v9
        }
      } = (0, _v3.useLiveGlobals)(),
      _v10 = (0, _v1.useRef)((_v1 ? _v9 : (0, _v23.getAbsoluteNow)()) + 500),
      [_v11, _v12] = (0, _v1.useState)(!1),
      _v13 = Object.values(_v2 && _v4 ? {
        ..._v7,
        ..._v8
      } : _v8).reduce((_v0, _v1) => _v0 && _v0.createdAt > _v1.createdAt ? _v0 : _v1, null);
    return (0, _v1.useEffect)(() => {
      _v12(() => _v0 ? (_v10.current = (0, _v23.getAbsoluteNow)(), !1) : !!(_v3 && ((_v13?.createdAt || 0) > _v10.current || _v5 && _v5 > _v10.current)));
    }, [_v0, _v13, _v3, _v5]), (0, _v1.useEffect)(() => {
      _v6 && (_v10.current = Math.max(_v6 + 100, _v10.current));
    }, [_v6]), (0, _v16.jsx)(_v20, {
      isVisible: _v11,
      children: (0, _v16.jsx)(_v17.Chats, {})
    });
  });
  _v0.s(["PanelChatIcon", 0, _v24], 0);
}