{
  "use strict";

  var _v1,
    _v2 = _v0.i(0);
  _v0.s(["useInitialRenderTime", 0, function () {
    return (0, _v2.useRef)(Date.now()).current;
  }], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = ((_v1 = {}).LEFT_PANEL = "left_panel", _v1.SCENE_PREVIEW = "scene_preview", _v1.SCENE_THUMBNAIL = "scene_thumbnail", _v1);
  _v7.EStreamPrivacy.NOBODY, _v7.EStreamPrivacy.PASSWORD, _v7.EStreamPrivacy.ANYBODY, _v7.EStreamPrivacy.UNLISTED, _v7.EStreamPrivacy.EMBED_ONLY, _v6.EComposerSessionType.VENUE, _v6.EComposerSessionType.LIVE_EVENT, _v6.EComposerSessionType.INTERVIEW, _v6.EComposerSessionType.UNKNOWN;
  let _v9 = {
    [_v7.EEventStreamingMethodVariant.Browser]: "browser_studio",
    [_v7.EEventStreamingMethodVariant.Encoder]: "stream_management"
  };
  _v7.EEventLatency.FailSafe, _v7.EEventLatency.Standard, _v7.EEventLatency.Low, _v0.s(["ETtrackingAddGraphicLocations", () => _v8, "ProductionMethod", 0, _v9], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["useBroadcasterTrackingConfigUpdater", 0, function () {
    let {
        sessionId: _v0,
        sessionType: _v1,
        sessionInfo: {
          value: _v2
        }
      } = (0, _v3.useManager)(_v11.ComposerSessionManager),
      {
        ingestStatus: _v3,
        cloudSessionId: _v4,
        streamMode: _v5
      } = (0, _v3.useManager)(_v12.ComposerSessionStatusManager),
      {
        trackingActions: _v6,
        config: _v7,
        isReady: _v8
      } = (0, _v3.useManager)(_v16.TrackingManager, ({
        config: _v0,
        isReady: _v1
      }) => [_v0, _v1]),
      {
        settings: {
          value: _v9
        }
      } = (0, _v3.useManager)(_v13.EventSettingsManager);
    return (0, _v2.useEffect)(() => {
      let _v0 = _v2?.metadata.connections.ingestStatus,
        _v1 = _v0 && (0, _v17.parseClipIdFromURI)(_v0.uri) || null,
        _v2 = _v7.EIngestStatus[_v3].toLowerCase(),
        _v3 = _v9?.preferredStreamMethod ? _v9[_v9.preferredStreamMethod] : null;
      _v6.setConfig({
        DETAILS: {
          SESSION_CLOUD_ID: _v4
        },
        LIVE_SCHEMA_BASE: {
          page: _v5.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          liveEventType: _v1,
          liveEventId: _v0 ? String(_v0) : null,
          liveStatus: _v2,
          videoId: _v1
        },
        INTERACTION_SCHEMA_BASE: {
          page: _v5.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          view: "moderator",
          liveStatus: _v2,
          videoId: _v1,
          roomType: _v1,
          roomId: _v0 ? String(_v0) : null
        },
        SCHEME_ADDITIONAL: {
          isSimulive: _v5 === _v6.EComposerStreamModeType.SIMULIVE,
          isRecord: _v5 === _v6.EComposerStreamModeType.RECORD
        },
        EVENT_SETTINGS_SCHEMA_BASE: {
          eventPrivacy: _v9?.streamPrivacy?.view,
          productionMethod: _v3
        }
      }), (0, _v10.isLiveTrackingConfigReady)(_v5.liveTrackingConfig) && _v6.setIsReady();
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
      } = (0, _v3.useManager)(_v14.GuestSessionManager),
      {
        ingestStatus: _v3,
        cloudSessionId: _v4,
        streamMode: _v5
      } = (0, _v3.useManager)(_v12.ComposerSessionStatusManager),
      {
        trackingActions: _v6
      } = (0, _v3.useManager)(_v16.TrackingManager, ({
        trackingActions: _v0
      }) => [_v0]);
    (0, _v2.useEffect)(() => {
      let _v0 = _v2?.metadata.connections.ingestStatus,
        _v1 = _v0 && (0, _v17.parseClipIdFromURI)(_v0.uri) || null,
        _v2 = _v7.EIngestStatus[_v3].toLowerCase();
      _v6.setConfig({
        DETAILS: {
          SESSION_CLOUD_ID: _v4
        },
        LIVE_SCHEMA_BASE: {
          page: _v5.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          liveEventType: _v0,
          liveEventId: _v1 ? String(_v1) : null,
          liveStatus: _v2,
          videoId: _v1
        },
        INTERACTION_SCHEMA_BASE: {
          page: _v5.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          view: "attendee",
          liveStatus: _v2,
          videoId: _v1,
          roomType: _v0,
          roomId: _v1 ? String(_v1) : null
        }
      }), (0, _v10.isLiveTrackingConfigReady)(_v5.liveTrackingConfig) && _v6.setIsReady();
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
      } = (0, _v3.useManager)(_v15.InteractionSessionManager),
      {
        trackingActions: _v4,
        config: _v5,
        isReady: _v6
      } = (0, _v3.useManager)(_v16.TrackingManager, ({
        config: _v0,
        isReady: _v1
      }) => [_v0, _v1]),
      {
        initialState: {
          interaction: _v7
        }
      } = (0, _v4.useLiveGlobals)();
    return (0, _v2.useEffect)(() => {
      let _v0 = _v2?.metadata.connections.ingestStatus,
        _v1 = _v0 ? (0, _v17.parseClipIdFromURI)(_v0.uri) : null,
        _v2 = !!(_v7?.feature?.isManagementDisabled || !_v3?.isCreator),
        _v3 = {
          INTERACTION_SCHEMA_BASE: {
            page: _v5.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
            view: _v2 ? "attendee" : "moderator",
            videoId: _v1,
            roomType: _v0,
            roomId: _v1 ? String(_v1) : null
          }
        };
      _v0 === _v6.EComposerSessionType.VENUE && (_v3.VENUE_SCHEMA_BASE = {
        ..._v2?.metadata?.misc?.tracking
      }), _v4.setConfig(_v3), !_v6 && (0, _v10.isInteractionTrackingConfigReady)(_v5.liveTrackingConfig) && _v4.setIsReady();
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
      } = (0, _v3.useManager)(_v11.ComposerSessionManager),
      {
        ingestStatus: _v3
      } = (0, _v3.useManager)(_v12.ComposerSessionStatusManager),
      {
        trackingActions: _v4,
        config: _v5,
        isReady: _v6
      } = (0, _v3.useManager)(_v16.TrackingManager, ({
        config: _v0,
        isReady: _v1
      }) => [_v0, _v1]),
      {
        settings: {
          value: _v7
        }
      } = (0, _v3.useManager)(_v13.EventSettingsManager);
    return (0, _v2.useEffect)(() => {
      let _v0 = _v2?.metadata.connections.ingestStatus,
        _v1 = _v0 && (0, _v17.parseClipIdFromURI)(_v0.uri) || null,
        _v2 = _v7.EIngestStatus[_v3].toLowerCase(),
        _v3 = _v7?.preferredStreamMethod ? _v9[_v7.preferredStreamMethod] : null;
      _v4.setConfig({
        LIVE_SCHEMA_BASE: {
          page: _v5.liveTrackingConfig.DETAILS.SESSION_APPLICATION,
          liveEventType: _v1,
          liveEventId: _v0 ? String(_v0) : null,
          liveStatus: _v2,
          videoId: _v1
        },
        EVENT_SETTINGS_SCHEMA_BASE: {
          eventPrivacy: _v7?.streamPrivacy?.view,
          productionMethod: _v3
        }
      }), (0, _v10.isLiveTrackingConfigReady)(_v5.liveTrackingConfig) && _v4.setIsReady();
    }, [_v7?.streamPrivacy?.view, _v7?.preferredStreamMethod, _v4, _v1, _v0, _v3, _v2?.metadata]), {
      isTrackingReady: _v6,
      trackingConfig: _v5
    };
  }], 0);
}