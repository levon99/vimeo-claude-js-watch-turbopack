{
  "use strict";

  _v0.s(["EventSettingsManager", () => _v21], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  async function _v11(_v0) {
    _v0.log.info("Live event settings load"), _v0.assertIsInitialized(), _v0.onBeforeSettingsUpdate();
    try {
      let _v0 = await (0, _v5.getLiveEventSettings)({
        connection: _v0.connections.settings,
        gctlConfig: (0, _v4.queryManagerGctlConfig)(_v0),
        fields: _v21.EVENT_SETTINGS_FETCH_FIELDS.map(_v0 => (0, _v9.decamelize)(_v0))
      });
      _v0.onSettingsLoaded(_v0), _v0.onSettingsUpdated(_v0), _v0.streamPrivacy?.embed === _v7.EStreamEmbedPrivacy.WHITELIST && (await _v14(_v0));
    } catch (_v0) {
      _v0.log.error("Failed to load live event settings:", _v0);
    }
  }
  async function _v12(_v0, _v1) {
    _v0.log.info("Forcing live event settings update"), _v0.assertIsInitialized(), _v0.onBeforeSettingsUpdate();
    try {
      let _v0 = await (0, _v5.getLiveEventSettings)({
        connection: _v0.connections.settings,
        gctlConfig: (0, _v4.queryManagerGctlConfig)(_v0),
        fields: _v1
      });
      _v0.onSettingsUpdated(_v0, !1, "forced");
    } catch (_v0) {
      _v0.log.error("Failed to load live event settings:", _v0);
    }
  }
  async function _v13(_v0, _v1, _v2, _v3 = !1) {
    _v0.log.info("Updating event settings:", _v1), _v0.assertIsInitialized(), _v0.onBeforeSettingsUpdate();
    let _v4 = _v0.context.settings.value?.streamPrivacy.embed,
      _v5 = _v0.context.settings.value?.title;
    _v0.onSettingsUpdated(_v1, _v3, "optimistic");
    let _v6 = _v0.context.settings.value?.streamPrivacy.embed,
      _v7 = _v0.context.settings.value?.title;
    _v4 !== _v6 && _v0.log.info("New event embed privacy:", _v6);
    let _v8 = await (0, _v5.patchLiveEvent)({
      connection: _v0.connections.settings,
      gctlConfig: (0, _v4.queryManagerGctlConfig)(_v0),
      fields: _v2?.length ? _v2?.map(_v0 => (0, _v9.decamelize)(_v0)) : ["uri"]
    }, _v1);
    _v0.onSettingsUpdated(_v8, !1, "on-response"), _v5 !== _v7 && _v0.emitSignal({
      type: _v10.ELiveSignal.EVENT_TITLE_UPDATED
    }), _v6 === _v7.EStreamEmbedPrivacy.WHITELIST && _v4 !== _v7.EStreamEmbedPrivacy.WHITELIST && (await _v14(_v0));
  }
  async function _v14(_v0) {
    _v0.assertIsInitialized(), _v0.log.info("Loading live event embed whitelist");
    try {
      let _v0 = (await (0, _v5.getLiveEventEmbedWhitelist)({
        gctlConfig: (0, _v4.queryManagerGctlConfig)(_v0),
        eventId: _v0.eventId
      })).items.map(_v0 => _v0.domain);
      _v0.setContext({
        embedWhitelist: _v0.context.embedWhitelist.asReady(_v0)
      });
    } catch (_v0) {
      _v0.log.error("Failed to load embed whitelist:", _v0);
    }
  }
  async function _v15(_v0, _v1) {
    _v0.assertIsInitialized(), _v0.log.info("Updating live event embed whitelist:", _v1);
    let {
        embedWhitelist: _v2
      } = _v0.context,
      _v3 = _v2.value || [];
    _v0.setContext({
      embedWhitelist: _v2.asLoading(_v1)
    });
    try {
      await (0, _v5.updateLiveEventEmbedWhitelist)({
        gctlConfig: (0, _v4.queryManagerGctlConfig)(_v0),
        eventId: _v0.eventId,
        domains: _v1
      }), _v0.setContext({
        embedWhitelist: _v2.asReady(_v1)
      });
    } catch (_v0) {
      _v0.log.error("Failed updating live event embed whitelist:", _v0), _v0.setContext({
        embedWhitelist: _v2.asReady(_v3)
      });
    }
  }
  async function _v16(_v0, _v1) {
    if (_v0.assertIsInitialized(), !_v0.connections.updateRtmpPreview) throw new _v8.LiveError("Cannot update rtmp preview, no meta available.");
    let _v2 = !!_v0.context.settings.value?.rtmpPreview;
    try {
      _v0.onSettingsUpdated({}, !0, "optimistic");
      let {
        rtmpPreview: _v0
      } = await (0, _v6.patchRtmpPreview)({
        connection: _v0.connections.updateRtmpPreview,
        gctlConfig: (0, _v4.queryManagerGctlConfig)(_v0),
        fields: ["rtmp_preview"]
      }, _v1);
      _v0.onSettingsUpdated({
        rtmpPreview: _v0
      }, !1, "on-response");
    } catch (_v0) {
      throw _v0.log.error("Failed to update rtmp preview: ", _v0), _v0.onSettingsUpdated({
        rtmpPreview: _v2
      }, !1, "on-failure"), _v0;
    }
  }
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  class _v21 extends _v2.ContextManager {
    static EVENT_SETTINGS_PRODUCTION_FIELDS = ["autoCcEnabled", "autoCcLimit", "autoCcRemaining", "disableAutoArchiving", "dvr", "latency", "preferredStreamMethod", "streamingAutoStop", "unlimitedDuration"];
    static EVENT_SETTINGS_FETCH_FIELDS = [..._v21.EVENT_SETTINGS_PRODUCTION_FIELDS, "album", "allowedPrivacies", "autoCcKeywords", "autoCcLanguage", "contentRating", "dashLink", "embed.chatEmbedSource", "embed.embedProperties.sourceUrl", "fromShowcase", "hasRegistration", "link", "parentFolder.isPrivateToUser", "rtmpLink", "rtmpPreview", "rtmpsLink", "schedule", "scheduledPlayback", "srtEncryptionEnabled", "srtLink", "srtPassphrase", "status", "streamDescription", "streamKey", "streamPassword", "streamPrivacy", "title", "unlimitedAutoCc", "uri"];
    context = {
      isInitialized: !1,
      settings: (0, _v2.createLoadable)(null, !0),
      embedWhitelist: (0, _v2.createLoadable)([], !0),
      actions: (0, _v2.createActions)({
        updateLiveEventSettings: (_v0, _v1, _v2) => this.updateLiveEventSettings(_v0, _v1, _v2),
        updateEmbedWhitelist: _v0 => this.updateEmbedWhitelist(_v0),
        updateRtmpPreview: _v0 => this.updateRtmpPreview(_v0),
        forcedUpdate: _v0 => this.forcedUpdate(_v0)
      })
    };
    log = new _v3.Logger("🎩EVNTSTNGS");
    eventId = "";
    connections = null;
    channel = null;
    onProvisionEnded() {
      this.channel?.close();
    }
    async loadLiveEventSettings() {
      return (0, _v20.withLiveErrorTracking)(() => _v11(this), {
        method: "loadLiveEventSettings",
        category: _v19.ELiveErrorCategory.LIVE
      });
    }
    async forcedUpdate(_v0) {
      return (0, _v20.withLiveErrorTracking)(() => _v12(this, _v0), {
        method: "forcedUpdate",
        category: _v19.ELiveErrorCategory.LIVE
      });
    }
    async updateLiveEventSettings(_v0, _v1, _v2) {
      return (0, _v20.withLiveErrorTracking)(() => _v13(this, _v0, _v1, _v2), {
        method: "updateLiveEventSettings",
        category: _v19.ELiveErrorCategory.LIVE
      });
    }
    async updateEmbedWhitelist(_v0) {
      return (0, _v20.withLiveErrorTracking)(() => _v15(this, _v0), {
        method: "updateWhitelistedDomains",
        category: _v19.ELiveErrorCategory.LIVE
      });
    }
    async updateRtmpPreview(_v0) {
      return (0, _v20.withLiveErrorTracking)(() => _v16(this, _v0), {
        method: "updateRtmpPreview",
        category: _v19.ELiveErrorCategory.LIVE
      });
    }
    assertIsInitialized() {
      if (!this.context.isInitialized || !this.connections || !this.eventId) throw new _v8.LiveError("Event settings manager is not initialized.", {
        code: _v18.ELiveErrorCode.INITIALIZATION
      });
    }
    onBeforeSettingsUpdate() {
      let {
        settings: _v0,
        embedWhitelist: _v1
      } = this.context;
      _v0.isLoading || this.setContext({
        settings: _v0.asLoading(),
        embedWhitelist: _v1.asLoading()
      });
    }
    onSettingsUpdated(_v0, _v1 = !1, _v2 = "generic") {
      this.setContext(({
        settings: _v0
      }) => {
        let _v1 = function _v0(..._v1) {
          let _v2 = _v1[0];
          return _v1.shift(), _v1.forEach(_v0 => {
            for (let _v0 in _v0) try {
              _v0[_v0].constructor === Object ? _v2[_v0] = _v0(_v2[_v0], _v0[_v0]) : _v2[_v0] = _v0[_v0];
            } catch (_v0) {
              _v2[_v0] = _v0[_v0];
            }
          }), _v2;
        }(_v0.value || {}, _v0);
        return {
          settings: _v1 ? _v0.asLoading(_v1) : _v0.asReady(_v1)
        };
      }), this.log.info("On event settings update:", _v2, "#", this.context.settings.value, "->", _v0);
    }
    onSettingsLoaded(_v0) {
      if (this.log.info("On event settings loaded:", _v0), this.IS_DISPOSED) return this.log.warn("On event settings loaded cancelled due to disposal");
      this.log.info("Initializing lead capture channel:", this.IS_DISPOSED), this.channel = this.IS_DISPOSED ? null : function (_v0) {
        if (!_v17.browserConfig.CAN_USE_BROADCAST_CHANNEL()) return null;
        let _v1 = new window.BroadcastChannel("lc_broadcast_channel");
        return _v1.addEventListener("message", _v0 => {
          _v0.data?.code === 0 && _v0.forcedUpdate(["schedule"]);
        }), _v1;
      }(this), _v0.streamKey ? this.emitSignal({
        type: _v10.ELiveSignal.RTMP_STREAM_KEY_RECEIVED,
        data: _v0.streamKey
      }) : this.log.warn("No stream key in initialized settings, possible stream health issues:", _v0);
    }
    async onComposerSessionReady({
      data: {
        metadata: _v0,
        id: _v1,
        type: _v2
      }
    }) {
      "settings" in _v0.connections && _v0.connections.settings ? (this.log.info("Initializing event settings context:", _v0.connections.settings), this.eventId = _v1, this.connections = {
        settings: _v0.connections.settings,
        autoClosedCaptions: _v0.connections?.autoClosedCaptions,
        updateRtmpPreview: _v0?.interactions?.updateRtmpPreview
      }, this.setContext({
        isInitialized: !0
      }), this.loadLiveEventSettings().catch(_v0 => {
        this.log.error("Failure on composer session ready:", _v0);
      })) : this.log.info("Skip event settings context setup:", _v0.connections.settings, _v2, _v1);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v10.ELiveSignal.COMPOSER_SESSION_READY)], _v21.prototype, "onComposerSessionReady", null);
}