{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.i(0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = ((_v1 = {}).ONBOARDING_RTC_BOKEH_PENDO_ID = "tFycqmahlV58D6KZDhjm0w_gaBY", _v1.ONBOARDING_RTC_REGULAR_PENDO_ID = "V75Ih5C6kJnxUyy47ADbUFzKGeE", _v1.ONBOARDING_RTC_SIMULIVE_PENDO_ID = "z9Na2wCKV8eC4CxpAdxFkZmGkd8", _v1.ONBOARDING_RTMP_REGULAR_PENDO_ID = "BnGM1gi_qj1jw4Da363WY3oLOVs", _v1),
    _v14 = ((_v2 = {}).RTC_MODE_CSAT = "kC9rIuUAUsRzwKLJrRig3988KTk", _v2.RTMP_MODE_CSAT = "YcC0ow-Tz2Pm7UKOtn5d6RSWewA", _v2);
  _v0.s(["EPendoSurveysIds", () => _v14, "EPendoToursIds", () => _v13], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  async function _v19(_v0) {
    _v0.log.info("Initializing user preferences manager with:", _v0.requiredPreferences);
    let _v1 = await _v20(_v0, _v0.requiredPreferences);
    _v0.setContext({
      userPreferences: (0, _v3.createLoadable)(_v1, !1),
      isActiveFinishedStreamSurvey: function (_v0) {
        if (!_v0.isModuleActive) return !1;
        if (((0, _v7.getFromLocalStorage)(`${_v0.sessionType}${_v0.sessionApplicationType}_streamed`) ?? 0) >= 3) {
          let _v0 = (0, _v7.getFromLocalStorage)(`${_v0.sessionType}${_v0.sessionApplicationType}_date`);
          return !_v0 || _v0 < (0, _v8.getAbsoluteNow)() - _v0.PENDO_CSAT_TIMEOUT;
        }
        return !1;
      }(_v0),
      isRtmpOnboardingTourActive: !1 === _v1[_v15.EUserPreference.ONBOARDING_RTMP],
      isRtcOnboardingTourActive: !1 === _v1[_v15.EUserPreference.ONBOARDING_RTC],
      isRtcBokehOnboardingTourActive: !1 !== _v1[_v15.EUserPreference.ONBOARDING_RTC] && !1 === _v1[_v15.EUserPreference.ONBOARDING_RTC_BOKEH],
      isRtcSimuliveTourActive: !1 === _v1[_v15.EUserPreference.ONBOARDING_RTC_SIMULIVE]
    }), _v0.log.info("Initialized user preferences manager with:", _v0.requiredPreferences, _v1);
  }
  async function _v20(_v0, _v1) {
    var _v2;
    let _v3 = (0, _v16.getUrlQueryObject)(),
      _v4 = _v1.length ? await (_v2 = {
        gctlConfig: (0, _v9.queryManagerGctlConfig)(_v0),
        fields: _v1
      }, (0, _v10.withConnectionSupport)(_v11.ERequestMethod.GET, _v2, () => ({
        path: "/me/preferences"
      }))) : {},
      _v5 = Object.entries(_v3).reduce((_v0, [_v1, _v2]) => (_v1.startsWith(_v12.liveQueryConfig.USER_PREFERENCE_OVERRIDE_PREFIX) && (_v0[_v1.substr(_v12.liveQueryConfig.USER_PREFERENCE_OVERRIDE_PREFIX.length)] = !0 === _v2 || "true" === _v2), _v0), {});
    return {
      ..._v4,
      ..._v5
    };
  }
  async function _v21(_v0, _v1) {
    if (_v0.isModuleActive) {
      _v0.log.info("Show pendo tour by ID:", _v1);
      try {
        await _v6.PendoClient.showGuideById(_v1), _v0.log.info("Shown pendo tour by ID:", _v1);
      } catch (_v0) {
        _v0.log.error("Failed to show pendo tour:", _v1, _v0);
      }
    }
  }
  function _v22(_v0, _v1) {
    _v0.log.info("Dismiss pendo tour by ID:", _v1);
    try {
      if (!window.pendo) return _v0.log.info("Skipped dismiss pendo tour by ID, no pendo:", _v1);
      let _v0 = window.pendo.findGuideById(_v1);
      _v0 ? (_v0.hide(), _v0.log.info("Hidden pendo tour by ID:", _v1)) : _v0.log.info("Skip hide tour by ID, tour not found:", _v1);
    } catch (_v0) {
      _v0.log.error("Failed to hide pendo tour:", _v1, _v0);
    }
  }
  async function _v23(_v0) {
    try {
      _v0.log.info("RTC simulive tour dismissed"), await Promise.all([_v0.dismissUserPreference(_v15.EUserPreference.ONBOARDING_RTC_SIMULIVE), _v0.dismissUserPreference(_v15.EUserPreference.ONBOARDING_RTC_BOKEH)]), _v22(_v0, _v13.ONBOARDING_RTC_SIMULIVE_PENDO_ID);
    } catch (_v0) {
      _v0.log.error("Failed to dismiss try scheduled tour:", _v0);
    } finally {
      _v0.setContext({
        isRtcSimuliveTourActive: !1,
        isRtcBokehOnboardingTourActive: !1
      });
    }
  }
  async function _v24(_v0) {
    try {
      _v0.log.info("RTC onboarding tour dismissed"), await Promise.all([_v0.dismissUserPreference(_v15.EUserPreference.ONBOARDING_RTC), _v0.dismissUserPreference(_v15.EUserPreference.ONBOARDING_RTC_BOKEH)]), _v22(_v0, _v13.ONBOARDING_RTC_REGULAR_PENDO_ID);
    } catch (_v0) {
      (0, _v18.trackLiveError)(_v0, {
        method: "dismissRtcOnboardingTour",
        category: _v17.ELiveErrorCategory.GENERIC
      }), _v0.log.error("Failed to dismiss tour:", _v0);
    } finally {
      _v0.setContext({
        isRtcOnboardingTourActive: !1,
        isRtcBokehOnboardingTourActive: !1
      });
    }
  }
  async function _v25(_v0) {
    try {
      _v0.log.info("RTMP onboarding tour dismissed"), await _v0.dismissUserPreference(_v15.EUserPreference.ONBOARDING_RTMP), _v22(_v0, _v13.ONBOARDING_RTMP_REGULAR_PENDO_ID);
    } catch (_v0) {
      (0, _v18.trackLiveError)(_v0, {
        method: "dismissRtmpOnboardingTour",
        category: _v17.ELiveErrorCategory.GENERIC
      }), _v0.log.error("Failed to dismiss tour:", _v0);
    } finally {
      _v0.setContext({
        isRtmpOnboardingTourActive: !1
      });
    }
  }
  async function _v26(_v0) {
    try {
      _v0.log.info("RTC bokeh onboarding tour dismissed"), await _v0.dismissUserPreference(_v15.EUserPreference.ONBOARDING_RTC_BOKEH), _v22(_v0, _v13.ONBOARDING_RTC_BOKEH_PENDO_ID);
    } catch (_v0) {
      (0, _v18.trackLiveError)(_v0, {
        method: "dismissRtcBokehOnboardingTour",
        category: _v17.ELiveErrorCategory.GENERIC
      }), _v0.log.error("Failed to dismiss bokeh onboarding tour:", _v0);
    } finally {
      _v0.setContext({
        isRtcBokehOnboardingTourActive: !1
      });
    }
  }
  async function _v27(_v0) {
    try {
      let _v0;
      _v0.log.info("CSAT survey dismissed:", _v0.sessionApplicationType, _v0.sessionType), _v0 = (0, _v8.getAbsoluteNow)(), _v0.log.info("Marking CSAT as shown:", _v0, _v0.sessionApplicationType, _v0.sessionType), (0, _v7.setLocalStorageItem)(`${_v0.sessionType}${_v0.sessionApplicationType}_date`, _v0);
    } catch (_v0) {
      (0, _v18.trackLiveError)(_v0, {
        method: "dismissCsatSurvey",
        category: _v17.ELiveErrorCategory.GENERIC
      }), _v0.log.error("Failed to dismiss csat survey:", _v0);
    } finally {
      _v0.setContext({
        isActiveFinishedStreamSurvey: !1
      });
    }
  }
  async function _v28(_v0, _v1) {
    var _v2;
    _v0.log.info("Dismissing user preference:", _v1), _v0.setContext(({
      userPreferences: _v0
    }) => ({
      userPreferences: _v0.asReady({
        ..._v0.value,
        [_v1]: !0
      })
    })), await (_v2 = {
      userPreference: _v1,
      gctlConfig: (0, _v9.queryManagerGctlConfig)(_v0),
      fields: [_v1]
    }, (0, _v10.withConnectionSupport)(_v11.ERequestMethod.PATCH, _v2, () => ({
      path: "/me/preferences"
    }), {
      body: {
        [_v2.userPreference]: 1
      }
    })), _v0.log.info("Dismissed user preference:", _v1);
  }
  var _v29 = _v0.i(0);
  class _v30 extends _v3.ContextManager {
    PENDO_LIVE_EVENT_MANAGER_HANDLER = `PENDO_LIVE_EVENT_MANAGER_HANDLER_${(0, _v4.v4)()}`;
    PENDO_LIVE_EVENT_HOOK_HANDLER = `PENDO_LIVE_EVENT_HOOK_HANDLER_${(0, _v4.v4)()}`;
    PENDO_CSAT_TIMEOUT = 0;
    context = {
      tourActions: (0, _v3.createActions)({
        dismissRtcOnboardingTour: () => _v24(this),
        dismissRtcBokehOnboardingTour: () => _v26(this),
        dismissRtcSimuliveTour: () => _v23(this),
        dismissRtmpOnboardingTour: () => _v25(this),
        forceRtmpOnboardingTourStart: () => this.setContext({
          isRtmpOnboardingTourActive: !0
        }),
        forceRtcOnboardingTourStart: () => this.setContext({
          isRtcOnboardingTourActive: !0
        }),
        forceRtcBokehOnboardingTourStart: () => this.setContext({
          isRtcBokehOnboardingTourActive: !0
        }),
        forceRtcSimuliveTourStart: () => this.setContext({
          isRtcSimuliveTourActive: !0
        }),
        showPendoTourById: _v0 => _v21(this, _v0)
      }),
      userPreferencesActions: (0, _v3.createActions)({
        setEnterpriseUpgradeTiersModalState: _v0 => this.setContext({
          isEnterpriseTiersUpgradeModalActive: _v0
        }),
        dismissUserPreference: _v0 => this.dismissUserPreference(_v0),
        dismissUserPreferenceLocally: _v0 => this.dismissUserPreferenceLocally(_v0),
        forceUserPreference: _v0 => this.forceUserPreference(_v0),
        isUserPreference: (_v0, _v1) => this.isUserPreference(_v0, _v1)
      }),
      userPreferences: (0, _v3.createLoadable)(null, !0),
      isPendoReady: !1,
      isPendoLoaded: !1,
      activePendoTourId: null,
      isEnterpriseTiersUpgradeModalActive: !1,
      isRtmpOnboardingTourActive: !1,
      isRtcOnboardingTourActive: !1,
      isRtcBokehOnboardingTourActive: !1,
      isActiveFinishedStreamSurvey: !1,
      isRtcSimuliveTourActive: !1,
      tourState: (0, _v3.createComputed)(({
        isRtmpOnboardingTourActive: _v0,
        isRtcOnboardingTourActive: _v1,
        isRtcBokehOnboardingTourActive: _v2,
        isRtcSimuliveTourActive: _v3
      }) => {
        let _v4 = !!_v0,
          _v5 = !!(_v1 || _v2 || _v3);
        return {
          isAnyTourExisting: _v4 || _v5,
          isAnyRtmpTourExisting: _v4,
          isAnyRtcTourExisting: _v5
        };
      })
    };
    isModuleActive = !1;
    log = new _v5.Logger("🌎UPM");
    requiredPreferences;
    sessionType;
    sessionApplicationType;
    constructor(_v0) {
      super(), this.isModuleActive = !_v0?.live?.isUserPreferencesDisabled, this.requiredPreferences = _v0?.user?.requiredPreferences || [], this.sessionType = _v0?.sessionType ?? _v29.EComposerSessionType.UNKNOWN, this.sessionApplicationType = _v0?.sessionApplicationType ?? _v29.EComposerApplicationType.UNKNOWN, this.isModuleActive ? this.log.info("Initializing user preferences manager for:", this.requiredPreferences, this.sessionType, this.sessionApplicationType) : this.log.info("Skip init of user preferences manager, not enabled:", _v0?.sessionType ?? _v29.EComposerSessionType.UNKNOWN);
    }
    async onProvisionStarted() {
      if (this.isModuleActive) {
        var _v0, _v1, _v2;
        return _v6.PendoClient.addHandler({
          onGuideDismiss: (_v0 = this, _v0 => {
            switch (_v0.log.info("Captured pendo guide dismiss action:", _v0?.guide?.guideId, _v0), _v0.setContext({
              activePendoTourId: null
            }), _v0?.guide?.guideId) {
              case _v13.ONBOARDING_RTC_REGULAR_PENDO_ID:
                _v24(_v0);
                break;
              case _v13.ONBOARDING_RTC_BOKEH_PENDO_ID:
                _v26(_v0);
                break;
              case _v13.ONBOARDING_RTC_SIMULIVE_PENDO_ID:
                _v23(_v0);
                break;
              case _v13.ONBOARDING_RTMP_REGULAR_PENDO_ID:
                _v25(_v0);
                break;
              case _v14.RTC_MODE_CSAT:
              case _v14.RTMP_MODE_CSAT:
                _v27(_v0);
            }
          }),
          onGuideAdvanced: (_v1 = this, async _v0 => {
            _v1.log.info("Captured pendo guide advance:", _v0?.currentGuideState?.guideId, _v0?.currentGuideState?.step?.stepNumber, _v0);
          }),
          onGuideDisplayed: (_v2 = this, async _v0 => {
            _v2.log.info("Captured pendo guide display action:", _v0?.guideId), _v2.setContext({
              activePendoTourId: _v0?.guideId || null
            });
          }),
          onReady: () => {
            this.log.info("Pendo guide ready"), this.setContext({
              isPendoReady: !0
            });
          },
          onGuideLoaded: () => {
            this.log.info("Pendo guide loaded"), this.setContext({
              isPendoLoaded: !0
            });
          },
          onGuideFailed: () => this.log.info("Pendo guide failed")
        }, this.PENDO_LIVE_EVENT_MANAGER_HANDLER), this.initialize();
      }
    }
    async onProvisionEnded() {
      this.isModuleActive && _v6.PendoClient.removeHandler(this.PENDO_LIVE_EVENT_MANAGER_HANDLER);
    }
    async initialize() {
      return (0, _v18.withLiveErrorTracking)(() => _v19(this), {
        category: _v17.ELiveErrorCategory.GENERIC,
        method: "initialize"
      });
    }
    async dismissUserPreference(_v0) {
      return (0, _v18.withLiveErrorTracking)(() => _v28(this, _v0), {
        category: _v17.ELiveErrorCategory.GENERIC,
        method: "dismissUserPreference"
      }).catch(_v0 => this.log.error("Failed to dismiss pref:", _v0));
    }
    async dismissUserPreferenceLocally(_v0) {
      return (0, _v18.withLiveErrorTracking)(() => {
        this.log.info("Dismissing user preference locally:", _v0), this.setContext(({
          userPreferences: _v0
        }) => ({
          userPreferences: _v0.asReady({
            ..._v0.value,
            [_v0]: !0
          })
        }));
      }, {
        category: _v17.ELiveErrorCategory.GENERIC,
        method: "dismissUserPreferenceLocally"
      }).catch(_v0 => this.log.error("Failed to dismiss pref:", _v0));
    }
    async forceUserPreference(_v0) {
      return (0, _v18.withLiveErrorTracking)(() => {
        this.log.info("Forcing user preference locally:", _v0), this.setContext(({
          userPreferences: _v0
        }) => ({
          userPreferences: _v0.asReady({
            ..._v0.value,
            [_v0]: !1
          })
        })), (0, _v16.addCurrentPathQueryValue)(`${_v12.liveQueryConfig.USER_PREFERENCE_OVERRIDE_PREFIX}${_v0}`, String(!1));
      }, {
        category: _v17.ELiveErrorCategory.GENERIC,
        method: "forceUserPreference"
      });
    }
    isUserPreference(_v0, _v1) {
      let {
        userPreferences: {
          value: _v2
        }
      } = this.context;
      return !!(_v2 && _v2[_v0] === _v1);
    }
  }
  _v0.s(["UserPreferencesManager", 0, _v30], 0);
}