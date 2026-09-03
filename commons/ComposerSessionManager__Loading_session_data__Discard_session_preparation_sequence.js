{
  "use strict";

  _v0.s(["ComposerSessionManager", () => _v18], 0);
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
  async function _v12(_v0) {
    let {
      sessionId: _v1,
      sessionType: _v2,
      sessionApplicationType: _v3
    } = _v0.context;
    _v0.log.info("Loading session data:", _v1, _v2), _v0.setContext({
      sessionInfo: (0, _v2.createLoadable)(null, !0)
    });
    try {
      let _v0 = await (0, _v6.getBroadcasterComposerSessionInfo)({
        sessionId: _v1,
        sessionType: _v2,
        isVpaas: _v0.isVpaas,
        capabilities: _v0.requiredCapabilities,
        entitlements: _v0.requiredEntitlements,
        preferences: _v0.requiredPreferences,
        gctlConfig: (0, _v5.queryManagerGctlConfig)(_v0),
        fields: _v18.REQUIRED_SESSION_FIELDS
      });
      if (_v0.IS_DISPOSED) return _v0.log.info("Discard session preparation sequence");
      if (_v3 !== _v7.EComposerApplicationType.COMPLETED && _v0.status === _v8.EEventCompletionStatus.ENDED) return _v0.emitSignal({
        type: _v11.ELiveSignal.COMPOSER_SESSION_COMPLETED
      }), _v0.log.info("Session completed, redirecting to completed page");
      (0, _v10.trackLiveAction)("session_info_fetched"), _v0.log.info("Fetched session info:", _v0, {
        requiredCapabilities: _v0.requiredCapabilities,
        requiredPreferences: _v0.requiredPreferences
      }), _v0.liveQuota?.status === "stream_limit" && _v0.emitSignal({
        type: _v11.ELiveSignal.SIMULTANEOUS_STREAM_LIMIT_EXCEEDED
      }), _v0.liveQuota?.status === "time_limit" && _v0.emitSignal({
        type: _v11.ELiveSignal.TIME_STREAM_LIMIT_EXCEEDED
      }), _v0.liveQuota?.status === "provision_limit" && _v0.emitSignal({
        type: _v11.ELiveSignal.PROVISION_LIMIT_EXCEEDED
      }), _v0.owner.capabilities.hasLiveComposerApp ? (_v0.log.info("Accessing composer session"), _v0.setContext({
        sessionInfo: (0, _v2.createLoadable)(_v0)
      }), _v0.emitSignal({
        type: _v11.ELiveSignal.COMPOSER_SESSION_READY,
        data: {
          id: _v1,
          type: _v2,
          metadata: _v0.metadata
        }
      })) : ((0, _v10.trackLiveAction)("session_access_denied"), _v0.log.warn("Session access forbidden:", _v1, _v0.owner.capabilities.hasLiveComposerApp), _v0.emitSignal({
        type: _v11.ELiveSignal.GLOBAL_ERROR,
        data: new _v4.ForbiddenError()
      }));
    } catch (_v0) {
      _v0.log.error("Failed to load session:", _v0), _v0.IS_DISPOSED ? (0, _v10.trackLiveError)(_v0, {
        category: _v9.ELiveErrorCategory.LIVE,
        method: "prepareSessionInfo"
      }) : _v0.emitSignal({
        type: _v11.ELiveSignal.GLOBAL_ERROR,
        data: _v0
      });
    }
  }
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  class _v18 extends _v2.ContextManager {
    static REQUIRED_SESSION_FIELDS = ["uri", "view_link", "rtc_preview_link", "rtmps_preview_link", "settings_link", "base_link", "appearance_link", "registration_form_link", "registration_table_link", "registration_email_link", "title", "thumbnail", "time_zone", "live_quota.hi_res_streaming", "live_quota.hi_res_viewing", "live_quota.streams", "live_quota.status", "live_quota.max_event_audio_tracks", "graphics_version", "status", "owner.user", "metadata.connections.owner", "metadata.connections.team_member", "metadata.connections.capabilities", "metadata.connections.preferences", "metadata.connections.auto_closed_captions", "metadata.connections.audio_tracks", "metadata.connections.available_languages", "metadata.connections.available_destinations", "metadata.connections.destinations", "metadata.connections.viewer_stats", "metadata.connections.ingest_status", "metadata.connections.rtc", "metadata.connections.firebase", "metadata.connections.interaction_tools", "metadata.connections.guest", "metadata.connections.guests", "metadata.connections.rtmp_credentials", "metadata.connections.rtmp_signaling_credentials", "metadata.connections.stream_health", "metadata.connections.settings", "metadata.connections.latest_video", "metadata.connections.ott_channels", "metadata.connections.ott_destination", "metadata.connections.ott_destinations", "metadata.connections.ott_metadata", "metadata.interactions.invite_guest", "metadata.interactions.activate_session", "metadata.interactions.start_session", "metadata.interactions.end_session", "metadata.interactions.update_schedule", "metadata.interactions.update_rtmp_preview", "metadata.interactions.complete_event", "metadata.interactions.update_stream_mode", "metadata.interactions.update_record_mode"];
    context = {
      sessionApplicationType: _v7.EComposerApplicationType.UNKNOWN,
      sessionType: _v7.EComposerSessionType.UNKNOWN,
      sessionId: -1,
      sessionInfo: (0, _v2.createLoadable)(null, !0),
      permissions: (0, _v2.createComputed)(({
        sessionInfo: {
          value: _v0
        }
      }) => ({
        canStream: !!_v0?.metadata.interactions?.startSession,
        canActivate: !!_v0?.metadata.interactions?.activateSession,
        canUseAutoCC: !!_v0?.metadata.connections?.autoClosedCaptions,
        canUseBackupStream: !!_v0?.owner?.capabilities?.canUseBackupStream,
        canEnableAudienceSpeaker: !!_v0?.owner?.capabilities?.canEnableAudienceSpeaker,
        canUseScheduledMediaPlayback: !!(_v0?.metadata.interactions.updateSchedule && _v0?.owner.capabilities?.hasScheduledMediaPlayback),
        canUseRecordMode: !!_v0?.metadata.interactions?.startSession,
        canSeeTemplatesTab: !!_v0?.owner?.entitlements?.[_v15.EUserEntitlement.LIVE_COMPOSER_TEMPLATES_ACCESS],
        canUseContentProtectionSettings: !!_v0?.owner.capabilities.hasGeoBlock,
        canUseExtendedStreamWithDVR: !!_v0?.owner.preferences?.[_v15.EUserPreference.EXTENDED_STREAM_WITH_DVR],
        canUseExtendedStreamWithSimulcast: !!_v0?.owner.preferences?.[_v15.EUserPreference.EXTENDED_STREAM_WITH_SIMULCAST],
        hasExplicitApiGuestsManagement: !!_v0?.owner?.entitlements?.[_v15.EUserEntitlement.LIVE_GUEST_API_MANAGEMENT],
        hasExplicitApiMediaManagement: !!_v0?.owner?.entitlements?.[_v15.EUserEntitlement.LIVE_MEDIA_API_MANAGEMENT],
        hasAudioTracksManagement: !!_v0?.owner.preferences?.[_v15.EUserPreference.AUDIO_TRACKS_MANAGEMENT],
        hasKollektiv: !!_v0?.owner.preferences?.[_v15.EUserPreference.ECDN_KOLLECTIVE_JITC],
        hasLandingPageCustomizations: !!_v0?.owner.capabilities?.hasEnterprise
      }))
    };
    log = new _v3.Logger("🌴CSM");
    requiredCapabilities;
    requiredEntitlements;
    requiredPreferences;
    isVpaas = !1;
    constructor(_v0) {
      if (super(), !_v0?.sessionId || !_v0?.sessionType || !_v0?.sessionApplicationType) throw new _v16.LiveError("Failed to start session manager, invalid initial state.", {
        code: _v14.ELiveErrorCode.INVALID_PARAMETERS,
        data: _v0
      });
      this.isVpaas = !!_v0?.isVpaas, this.context.sessionApplicationType = _v0.sessionApplicationType, this.context.sessionId = _v0.sessionId, this.context.sessionType = _v0.sessionType, this.requiredCapabilities = _v0.user?.requiredOwnerCapabilities || [], this.requiredEntitlements = _v0.user?.requiredOwnerEntitlements || [], this.requiredPreferences = _v0.user?.requiredOwnerPreferences || [], this.log.info("Initializing session manager for:", this.context.sessionType, this.context.sessionId);
    }
    async onProvisionStarted() {
      await this.prepareSessionInfo();
    }
    async prepareSessionInfo() {
      return (0, _v10.withLiveErrorTracking)(() => _v12(this), {
        category: _v9.ELiveErrorCategory.LIVE,
        method: "prepareSessionInfo"
      });
    }
    onEventTitleUpdated() {
      this.log.info("Updating session title on event title update"), this.setContext({
        sessionInfo: this.context.sessionInfo.asLoading()
      }), (0, _v6.getBroadcasterComposerSessionInfo)({
        sessionId: this.context.sessionId,
        sessionType: this.context.sessionType,
        isVpaas: this.isVpaas,
        capabilities: this.requiredCapabilities,
        entitlements: this.requiredEntitlements,
        preferences: this.requiredPreferences,
        gctlConfig: (0, _v5.queryManagerGctlConfig)(this),
        fields: _v18.REQUIRED_SESSION_FIELDS
      }).then(_v0 => this.setContext({
        sessionInfo: (0, _v2.createLoadable)(_v0)
      })).catch(_v0 => {
        this.setContext({
          sessionInfo: this.context.sessionInfo.asReady()
        }), (0, _v10.trackLiveError)(_v0, {
          category: _v9.ELiveErrorCategory.LIVE,
          method: "updateSessionInfo"
        });
      });
    }
    redirectToCompletedApp() {
      let {
        sessionType: _v0,
        sessionId: _v1
      } = this.context;
      window.location.assign(`${_v13.vimeoConfig.PATH.COMPLETED_PAGE(_v0, _v1)}`);
    }
    hasStreamingPermissions() {
      return this.context.permissions.canStream;
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v11.ELiveSignal.EVENT_TITLE_UPDATED)], _v18.prototype, "onEventTitleUpdated", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.ELiveSignal.COMPOSER_SESSION_COMPLETED)], _v18.prototype, "redirectToCompletedApp", null), (0, _v1._)([(0, _v2.OnQuery)(_v17.ELiveQuery.CAN_STREAM)], _v18.prototype, "hasStreamingPermissions", null);
}