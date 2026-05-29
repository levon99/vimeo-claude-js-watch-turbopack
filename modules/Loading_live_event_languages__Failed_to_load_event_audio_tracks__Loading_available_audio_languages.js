{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7(_v0) {
    _v0.assertIsInitialized(), _v0.log.info("Loading live event languages");
    try {
      var _v1;
      _v0.setContext({
        eventLanguages: _v0.context.eventLanguages.asLoading()
      });
      let {
        audioTracks: _v0,
        primaryAudioTrack: _v1
      } = await (_v1 = {
        connection: _v0.connections.audioTracks,
        gctlConfig: (0, _v6.queryManagerGctlConfig)(_v0)
      }, (0, _v4.withConnectionSupport)(_v5.ERequestMethod.GET, _v1, ({
        eventId: _v0
      }) => ({
        path: `/live_events/${_v0}/audio_tracks`
      })));
      _v0.setContext({
        eventLanguages: _v0.context.eventLanguages.asReady({
          secondary: _v0,
          primary: _v1
        })
      });
    } catch (_v0) {
      _v0.log.error("Failed to load event audio tracks:", _v0);
    }
  }
  async function _v8(_v0) {
    _v0.assertIsInitialized(), _v0.log.info("Loading available audio languages");
    try {
      var _v1;
      _v0.setContext({
        availableLanguages: _v0.context.availableLanguages.asLoading()
      });
      let {
        items: _v0
      } = await (_v1 = {
        connection: _v0.connections.availableLanguages,
        gctlConfig: (0, _v6.queryManagerGctlConfig)(_v0)
      }, (0, _v4.withConnectionSupport)(_v5.ERequestMethod.GET, {
        ..._v1,
        fields: ["code", "name"]
      }, () => ({
        path: "/languages"
      }), {
        query: {
          filter: "audiotracks"
        }
      }));
      _v0.setContext({
        availableLanguages: _v0.context.availableLanguages.asReady(_v0)
      }), _v0.languagesMap = new Map(_v0?.map(_v0 => [_v0.code, _v0.name]));
    } catch (_v0) {
      _v0.log.error("Failed to load all available languages:", _v0);
    }
  }
  async function _v9(_v0, _v1) {
    _v0.assertIsInitialized(), _v0.log.info("Updating live event audio tracks");
    try {
      var _v2;
      _v0.setContext({
        eventLanguages: _v0.context.eventLanguages.asLoading()
      });
      let {
        audioTracks: _v0,
        primaryAudioTrack: _v1
      } = await (_v2 = {
        connection: _v0.connections.audioTracks,
        gctlConfig: (0, _v6.queryManagerGctlConfig)(_v0)
      }, (0, _v4.withConnectionSupport)(_v5.ERequestMethod.PATCH, _v2, ({
        eventId: _v0
      }) => ({
        path: `/live_events/${_v0}/audio_tracks`
      }), {
        body: _v1
      }));
      _v0.setContext({
        eventLanguages: _v0.context.eventLanguages.asReady({
          secondary: _v0,
          primary: _v1
        })
      });
    } catch (_v0) {
      _v0.log.error("Failed to update event audio tracks:", _v0);
    }
  }
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  class _v16 extends _v2.ContextManager {
    context = {
      isInitialized: !1,
      eventLanguages: (0, _v2.createLoadable)({
        secondary: [],
        primary: _v10.liveApplicationConfig.AUDIO_TRACKS.DEFAULT_LANGUAGE
      }, !0),
      availableLanguages: (0, _v2.createLoadable)([], !0),
      audioTracksActions: (0, _v2.createActions)({
        getLanguageLabelByCode: _v0 => this.languagesMap.get(_v0) ?? _v10.liveApplicationConfig.AUDIO_TRACKS.DEFAULT_LANGUAGE,
        updateEventLanguages: _v0 => this.updateEventLanguages(_v0)
      })
    };
    log = new _v3.Logger("🎩EVNTAUTRCKS");
    connections = null;
    languagesMap = new Map();
    async loadEventAudioTracks() {
      return (0, _v14.withLiveErrorTracking)(() => _v7(this), {
        method: "loadEventAudioTracks",
        category: _v13.ELiveErrorCategory.LIVE
      });
    }
    async loadAvailableLanguages() {
      return (0, _v14.withLiveErrorTracking)(() => _v8(this), {
        method: "loadAvailableLanguages",
        category: _v13.ELiveErrorCategory.LIVE
      });
    }
    async updateEventLanguages(_v0) {
      return (0, _v14.withLiveErrorTracking)(() => _v9(this, _v0), {
        method: "updateEventLanguages",
        category: _v13.ELiveErrorCategory.LIVE
      });
    }
    assertIsInitialized() {
      if (!this.context.isInitialized || !this.connections) throw new _v12.LiveError("Event audio tracks manager is not initialized.", {
        code: _v11.ELiveErrorCode.INITIALIZATION
      });
    }
    async onComposerSessionReady({
      data: {
        metadata: _v0,
        id: _v1,
        type: _v2
      }
    }) {
      console.log("yohoho"), "audioTracks" in _v0.connections && _v0.connections.audioTracks && "availableLanguages" in _v0.connections && _v0.connections.availableLanguages ? (this.log.info("Initializing event audio tracks context:", _v0.connections?.audioTracks, _v0.connections?.availableLanguages), this.connections = {
        audioTracks: _v0.connections?.audioTracks,
        availableLanguages: _v0.connections?.availableLanguages
      }, this.setContext({
        isInitialized: !0
      }), Promise.all([this.loadEventAudioTracks(), this.loadAvailableLanguages()]).catch(_v0 => {
        this.log.error("Failure on composer session ready:", _v0);
      })) : this.log.info("Skip event audio tracks context setup:", _v0.connections.audioTracks, _v2, _v1);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v15.ELiveSignal.COMPOSER_SESSION_READY)], _v16.prototype, "onComposerSessionReady", null), _v0.s(["EventAudioTracksManager", 0, _v16], 0);
}