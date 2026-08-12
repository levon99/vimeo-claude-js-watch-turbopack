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
  async function _v10(_v0, _v1) {
    _v0.log.info("Hydrating composer settings");
    let _v2 = await (0, _v7.getRefValue)(_v0.firebase, _v1),
      _v3 = _v2?.audio_mixing_mode || (0, _v8.getFromLocalStorage)(_v6.localStorageConfig.MEDIA.AUDIO_MIXING_MODE) || _v5.liveApplicationConfig.MEDIA.DEFAULT_AUDIO_MIXING_MODE;
    _v2?.audio_mixing_mode || (await _v0.setAudioMode(_v3).catch(_v0 => _v0.log.error("Failed to save initial mixing mode in FB:", _v0))), _v0.setContext({
      globalLogo: _v2?.logo ?? null,
      audioMode: _v3,
      isStudioDebugEnabled: !!_v2?.is_studio_debug_enabled,
      isLocalMirrored: !!_v2?.is_local_mirrored,
      isRecordingPaused: !!_v2?.is_recording_paused,
      recordingOffset: _v2?.streaming_offset ?? null,
      recordingStartedAt: _v2?.streaming_started_at ?? null
    }), _v0.log.info("Hydrated audio mode: ", _v3), _v0.emitSignal({
      type: _v9.ELiveSignal.AUDIO_MIXING_MODE_CHANGED,
      data: _v3
    });
  }
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  class _v21 extends _v18.UnsubscribingContextManager {
    context = {
      composerSettingsActions: (0, _v2.createActions)({
        setGlobalLogo: _v0 => this.setGlobalLogo(_v0),
        setGlobalLogoVisibility: _v0 => this.setGlobalLogoVisibility(_v0),
        setLocalMirrored: _v0 => this.setLocalMirrored(_v0),
        setStudioDebugStatus: _v0 => this.setStudioDebugStatus(_v0),
        setAudioMode: _v0 => this.setAudioMode(_v0)
      }),
      globalLogo: null,
      isHydrated: !1,
      isLocalMirrored: !1,
      isStudioDebugEnabled: !1,
      isRecordingPaused: !1,
      recordingStartedAt: null,
      recordingOffset: null,
      audioMode: _v5.liveApplicationConfig.MEDIA.DEFAULT_AUDIO_MIXING_MODE
    };
    log = new _v3.Logger("🌎CMPSR");
    firebase;
    settingsRef = null;
    async setGlobalLogo(_v0) {
      this.log.info("Setting global logo graphic object"), this.assertIsInitialized(), await (0, _v7.updateRefValue)(this.firebase, (0, _v7.getRefChild)(this.firebase, this.settingsRef, "logo"), {
        id: _v0,
        position: (0, _v16.omit)(_v12.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v14.EGraphicsDescriptorType.LOGO), "visible")
      });
    }
    async setGlobalLogoVisibility(_v0) {
      this.log.info("Setting visibility of global logo graphic object to:", _v0), this.assertIsInitialized(), await (0, _v7.updateRefValue)(this.firebase, (0, _v7.getRefChild)(this.firebase, this.settingsRef, "logo"), {
        visible: _v0,
        visibleAt: (0, _v17.getAbsoluteNow)()
      });
    }
    async setAudioMode(_v0) {
      this.log.info("Setting audio mode to: ", _v0), this.assertIsInitialized(), (0, _v8.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.AUDIO_MIXING_MODE, _v0), await (0, _v7.setRefValue)(this.firebase, (0, _v7.getRefChild)(this.firebase, this.settingsRef, "audio_mixing_mode"), _v0);
    }
    async setLocalMirrored(_v0) {
      this.log.info("Setting mirroring of broadcaster video to:", _v0), this.assertIsInitialized(), _v0 ? await (0, _v7.setRefValue)(this.firebase, (0, _v7.getRefChild)(this.firebase, this.settingsRef, "is_local_mirrored"), _v0) : await (0, _v7.removeRefValue)(this.firebase, (0, _v7.getRefChild)(this.firebase, this.settingsRef, "is_local_mirrored"));
    }
    async setStudioDebugStatus(_v0) {
      this.log.info("Setting studio debug enabled:", _v0), this.assertIsInitialized(), _v0 ? await (0, _v7.setRefValue)(this.firebase, (0, _v7.getRefChild)(this.firebase, this.settingsRef, "is_studio_debug_enabled"), _v0) : await (0, _v7.removeRefValue)(this.firebase, (0, _v7.getRefChild)(this.firebase, this.settingsRef, "is_studio_debug_enabled"));
    }
    assertIsInitialized() {
      if (!this.settingsRef) throw (0, _v20.trackLiveError)("Composer settings manager is not initialized", {
        method: "assertIsInitialized",
        category: _v19.ELiveErrorCategory.GRAPHICS
      }), new _v15.LiveError("Composer settings manager is not initialized.", {
        code: _v13.ELiveErrorCode.INITIALIZATION
      });
    }
    async onBroadcasterApplicationReady({
      data: {
        app: _v0,
        firebase: _v1,
        sessionId: _v2
      }
    }) {
      var _v3, _v4;
      let _v5;
      this.firebase = _v1, this.log.info("🚀Initializing composer settings connection"), this.settingsRef = (0, _v7.getDatabaseRef)(_v1, (0, _v7.getRealtimeDatabase)(_v1, _v0), _v11.firebaseConfig.REFS.COMPOSER.SETTINGS(_v2)), await _v10(this, this.settingsRef).finally(() => this.setContext({
        isHydrated: !0
      })), this.addUnSubscribers([(_v3 = this, _v4 = this.settingsRef, _v5 = _v0 => {
        _v3.log.info("Composer settings update received");
        let _v1 = _v0.val(),
          _v2 = {},
          _v3 = _v1?.logo ?? null;
        (0, _v4.default)(_v3, _v3.context.globalLogo) || (_v2.globalLogo = _v3);
        let _v4 = _v1?.audio_mixing_mode ?? _v5.liveApplicationConfig.MEDIA.DEFAULT_AUDIO_MIXING_MODE;
        _v4 !== _v3.context.audioMode && (_v2.audioMode = _v4), !!_v1?.is_studio_debug_enabled !== _v3.context.isStudioDebugEnabled && (_v2.isStudioDebugEnabled = !!_v1?.is_studio_debug_enabled), !!_v1?.is_local_mirrored !== _v3.context.isLocalMirrored && (_v2.isLocalMirrored = !!_v1?.is_local_mirrored), !!_v1?.is_recording_paused !== _v3.context.isRecordingPaused && (_v2.isRecordingPaused = !!_v1?.is_recording_paused);
        let _v5 = _v1?.streaming_offset ?? null;
        _v5 !== _v3.context.recordingOffset && (_v2.recordingOffset = _v5);
        let _v6 = _v1?.streaming_started_at ?? null;
        _v6 !== _v3.context.recordingStartedAt && (_v2.recordingStartedAt = _v6), Object.keys(_v2).length && _v3.setContext(_v2), _v2.audioMode && (_v3.log.info("Updating audio mode: ", _v2.audioMode), _v3.emitSignal({
          type: _v9.ELiveSignal.AUDIO_MIXING_MODE_CHANGED,
          data: _v2.audioMode
        }));
      }, (0, _v7.onRefEvent)(_v3.firebase, _v4, "value", _v5, "settings"), () => (0, _v7.offRefEvent)(_v3.firebase, _v4, "value", _v5))]);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v9.ELiveRealtimeSignal.FIREBASE_COMPOSER_APP_READY)], _v21.prototype, "onBroadcasterApplicationReady", null), _v0.s(["ComposerSettingsManager", 0, _v21], 0);
}