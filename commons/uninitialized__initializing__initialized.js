{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      UNINITIALIZED: "uninitialized",
      INITIALIZING: "initializing",
      INITIALIZED: "initialized",
      BYPASSED: "bypassed"
    },
    _v4 = {
      CUID: "cuid",
      VUID: "vuid",
      DEVICE_ID: "device_id",
      TEAM_OWNER_ID: "team_owner_id",
      CLIP_ID: "clip_id",
      TOGGLE_FOR_ALL_SUBJECTS: "toggle_for_all_subjects"
    },
    _v5 = {
      STRING: "STRING",
      NUMERIC: "NUMERIC",
      INTEGER: "INTEGER",
      BOOLEAN: "BOOLEAN",
      JSON: "JSON"
    };
  _v0.s(["InitializationStates", 0, _v3, "SubjectKeyTypes", 0, _v4, "VariationTypes", 0, _v5], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  class _v11 {
    contexts = {};
    static CONTEXT_CONFIGURATION_MAP = {
      ...(0, _v6.buildProductAnalyticsBpContext)({
        product: "general",
        feature: "general",
        location: "not_applicable_pageview"
      }),
      ...(0, _v7.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v8.buildWebBpContext)({
        page_name: "other"
      }),
      ...(0, _v9.buildTeamBpContext)({
        is_team_member: !1
      }),
      ...(0, _v10.buildViewBpContext)({
        view_type: "impression",
        feature: null
      })
    };
    constructor(_v0 = {}) {
      this.initializeContexts(_v0);
    }
    initializeContexts(_v0) {
      for (let [_v0, _v1] of Object.entries(_v11.CONTEXT_CONFIGURATION_MAP)) {
        let _v0 = _v0[_v0] || {},
          _v1 = _v1.fields || {};
        this.contexts[_v0] = {
          ..._v1,
          fields: {
            ..._v1,
            ..._v0
          }
        };
      }
    }
    getAllContexts() {
      return this.contexts;
    }
  }
  var _v12 = _v0.i(0);
  let _v13 = (0, _v0.i(0).create)(_v0 => ({
    initializationState: _v3.UNINITIALIZED,
    setInitializationState: _v0 => _v0({
      initializationState: _v0
    })
  }));
  var _v14 = _v0.i(0);
  let _v15 = class {
      logAssignment(_v0) {
        let {
            allocation: _v1,
            experiment: _v2,
            featureFlag: _v3,
            subject: _v4,
            subjectAttributes: _v5,
            variation: _v6,
            extraLogging: _v7,
            sdkMetadata: _v8
          } = _v0,
          {
            bigPictureContexts: _v9,
            ..._v10
          } = _v5,
          _v11 = {
            experiment: _v2 ?? "",
            subject: _v4,
            variation: _v6 ?? "",
            subject_attributes: JSON.stringify(_v10),
            feature_flag: _v3,
            allocation: _v1 ?? "",
            extra_logging: _v7 ? JSON.stringify(_v7) : null,
            sdk_metadata: _v8 ? JSON.stringify(_v8) : null
          };
        (0, _v14.sendBpEventWithContexts)("vimeo.eppo_feature_flag_assignment", JSON.parse(_v9), 1, _v11);
      }
    },
    _v16 = new Set();
  function _v17({
    flagKey: _v0,
    subject: _v1,
    bigPictureOverrides: _v2,
    defaultAssignment: _v3,
    assignmentType: _v4,
    disabled: _v5 = !1
  }) {
    let _v6,
      _v7 = (0, _v1.useViewer)(),
      {
        isInitialized: _v8
      } = function ({
        flagsConfiguration: _v0,
        bypassInitialization: _v1 = !1
      }) {
        let {
            initializationState: _v2,
            setInitializationState: _v3
          } = _v13(),
          _v4 = (0, _v12.useRef)(_v2);
        return (0, _v12.useEffect)(() => {
          if (_v4.current !== _v3.INITIALIZED && (!_v1 || _v4.current !== _v3.BYPASSED)) {
            if (_v1 || !_v0) {
              _v4.current = _v3.BYPASSED, _v3(_v3.BYPASSED);
              return;
            }
            (async () => {
              if (_v4.current !== _v3.INITIALIZING) {
                _v4.current = _v3.INITIALIZING;
                try {
                  let {
                    offlineInit: _v0
                  } = await _v0.A(0);
                  _v0({
                    flagsConfiguration: _v0,
                    assignmentLogger: new _v15(),
                    overridesStorageKey: "eppo-overrides",
                    enableOverrides: !0
                  }), _v3(_v3.INITIALIZED), _v4.current = _v3.INITIALIZED;
                } catch (_v0) {
                  _v3(_v3.BYPASSED), _v4.current = _v3.BYPASSED;
                }
              }
            })();
          }
        }, [_v1, _v3, _v0]), {
          initializationState: _v2,
          isInitialized: _v2 === _v3.INITIALIZED
        };
      }({
        flagsConfiguration: _v7?.eppoConfig?.flags,
        bypassInitialization: _v5
      }),
      _v9 = (_v6 = (0, _v1.useViewer)()) ? {
        cuid: _v6.user?.id,
        vuid: _v6.vuid,
        is_free: !_v6.user?.capabilities?.hasPaid,
        is_enterprise: _v6.user?.capabilities?.hasEnterprise,
        is_staff: _v6.user?.badge?.type === "staff",
        device_type: _v18(),
        language: _v6.locale,
        location: _v6.location
      } : {};
    if (_v5 || !_v8 || !_v7?.eppoConfig?.flags) return {
      assignment: _v3,
      isEppoSDKInitialized: _v8
    };
    let {
      assignment: _v10
    } = function ({
      flagKey: _v0,
      subject: _v1,
      bigPictureOverrides: _v2,
      defaultAssignment: _v3,
      assignmentType: _v4
    }) {
      if (!_v4) return _v16.has(_v0) || (console.warn(`Eppo flag "${_v0}" not found in configuration. Check that the flag is enabled in Eppo UI.`), _v16.add(_v0)), {
        assignment: _v3
      };
      let _v5 = new _v11(_v2 ?? {}).getAllContexts(),
        _v6 = ((_v0, _v1, _v2 = {}) => ({
          subject_key: _v0,
          subject_key_type: _v1,
          [_v1]: _v0,
          ..._v2
        }))(_v1.key, _v1.keyType, _v1.additionalData);
      {
        let _v0 = new URLSearchParams(window.location?.search),
          _v1 = _v0.get("eppo_name"),
          _v2 = _v0.get("eppo_var");
        if (_v2 && _v1 === _v0 && _v2 && _v1 === _v0) return {
          assignment: _v4 === _v5.BOOLEAN ? "true" === _v2 : _v4 === _v5.NUMERIC || _v4 === _v5.INTEGER ? Number(_v2) : _v4 === _v5.JSON ? JSON.parse(_v2) : _v2
        };
      }
      return {
        assignment: ((_v0, _v1, _v2, _v3, _v4 = _v5.STRING) => {
          try {
            let _v0 = _v2.getInstance(),
              _v1 = _v1.subject_key;
            if (!_v0 || !_v1) return _v3;
            let _v2 = {
              bigPictureContexts: JSON.stringify(_v2),
              ..._v1
            };
            switch (_v4) {
              case _v5.STRING:
                return _v0.getStringAssignment(_v0, _v1.toString(), _v2, _v3);
              case _v5.NUMERIC:
                return _v0.getNumericAssignment(_v0, _v1.toString(), _v2, _v3);
              case _v5.INTEGER:
                return _v0.getIntegerAssignment(_v0, _v1.toString(), _v2, _v3);
              case _v5.BOOLEAN:
                return _v0.getBooleanAssignment(_v0, _v1.toString(), _v2, _v3);
              case _v5.JSON:
                return _v0.getJSONAssignment(_v0, _v1.toString(), _v2, _v3);
              default:
                return _v3;
            }
          } catch (_v0) {
            return _v3;
          }
        })(_v0, _v6, _v5, _v3, _v4) ?? _v3
      };
    }({
      flagKey: _v0,
      subject: {
        ..._v1,
        additionalData: {
          ..._v9,
          ..._v1.additionalData
        }
      },
      bigPictureOverrides: _v2,
      defaultAssignment: _v3,
      assignmentType: _v7.eppoConfig.flags[_v0]?.variationType ?? _v4
    });
    return {
      assignment: _v10,
      isEppoSDKInitialized: _v8
    };
  }
  let _v18 = () => {
    if ("u" > typeof navigator && navigator.userAgent) return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent) ? "mobile" : "desktop";
  };
  _v0.s(["useCuidEppoAssignment", 0, function ({
    additionalData: _v0,
    disabled: _v1 = !1,
    ..._v2
  }) {
    let _v3 = (0, _v1.useViewer)();
    return _v17({
      ..._v2,
      subject: {
        key: _v3?.user?.id ?? 0,
        keyType: _v4.CUID,
        additionalData: _v0
      },
      disabled: !_v3?.user || _v1
    });
  }, "useEppoAssignment", 0, _v17], 0);
}