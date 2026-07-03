{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "initializing",
    _v4 = "initialized",
    _v5 = "bypassed",
    _v6 = "STRING",
    _v7 = "NUMERIC",
    _v8 = "INTEGER",
    _v9 = "BOOLEAN",
    _v10 = "JSON";
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  class _v18 {
    contexts = {};
    static CONTEXT_CONFIGURATION_MAP = {
      ...(0, _v13.buildProductAnalyticsBpContext)({
        product: "general",
        feature: "general",
        location: "not_applicable_pageview"
      }),
      ...(0, _v14.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      ...(0, _v15.buildWebBpContext)({
        page_name: "other"
      }),
      ...(0, _v16.buildTeamBpContext)({
        is_team_member: !1
      }),
      ...(0, _v17.buildViewBpContext)({
        view_type: "impression",
        feature: null
      })
    };
    constructor(_v0 = {}) {
      this.initializeContexts(_v0);
    }
    initializeContexts(_v0) {
      for (let [_v0, _v1] of Object.entries(_v18.CONTEXT_CONFIGURATION_MAP)) {
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
  let _v19 = (0, _v0.i(0).create)(_v0 => ({
    initializationState: "uninitialized",
    setInitializationState: _v0 => _v0({
      initializationState: _v0
    })
  }));
  var _v20 = _v0.i(0);
  let _v21 = class {
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
        (0, _v20.sendBpEventWithContexts)("vimeo.eppo_feature_flag_assignment", JSON.parse(_v9), 1, _v11);
      }
    },
    _v22 = new Set();
  _v0.s(["useInteractivityFreemiumAccess", 0, function () {
    let _v0 = (0, _v11.useViewer)(),
      _v1 = _v0?.user,
      _v2 = _v1?.id,
      _v3 = _v0?.teamUser,
      _v4 = _v3?.ownerId,
      _v5 = (_v4 || _v2) ?? 0,
      _v6 = (!_v3 || _v4 === _v2) && _v1?.account === "free",
      _v7 = (0, _v2.useIsStaff)(),
      _v8 = (!_v3 || _v4 === _v2) && _v7,
      _v9 = (0, _v1.useMemo)(() => ({
        cuid: _v5,
        is_free: _v6,
        is_staff: _v8
      }), [_v5, _v6, _v8]),
      {
        assignment: _v10
      } = function ({
        flagKey: _v0,
        subject: _v1,
        bigPictureOverrides: _v2,
        defaultAssignment: _v3,
        assignmentType: _v4,
        disabled: _v5 = !1
      }) {
        let _v6,
          _v7 = (0, _v11.useViewer)(),
          {
            isInitialized: _v8
          } = function ({
            flagsConfiguration: _v0,
            bypassInitialization: _v1 = !1
          }) {
            let {
                initializationState: _v2,
                setInitializationState: _v3
              } = _v19(),
              _v4 = (0, _v1.useRef)(_v2);
            return (0, _v1.useEffect)(() => {
              if (_v4.current !== _v4 && (!_v1 || _v4.current !== _v5)) {
                if (_v1 || !_v0) {
                  _v4.current = _v5, _v3(_v5);
                  return;
                }
                (async () => {
                  if (_v4.current !== _v3) {
                    _v4.current = _v3;
                    try {
                      let {
                        offlineInit: _v0
                      } = await _v0.A(0);
                      _v0({
                        flagsConfiguration: _v0,
                        assignmentLogger: new _v21(),
                        overridesStorageKey: "eppo-overrides",
                        enableOverrides: !0
                      }), _v3(_v4), _v4.current = _v4;
                    } catch (_v0) {
                      _v3(_v5), _v4.current = _v5;
                    }
                  }
                })();
              }
            }, [_v1, _v3, _v0]), {
              initializationState: _v2,
              isInitialized: _v2 === _v4
            };
          }({
            flagsConfiguration: _v7?.eppoConfig?.flags,
            bypassInitialization: _v5
          }),
          _v9 = (_v6 = (0, _v11.useViewer)()) ? {
            cuid: _v6.user?.id,
            vuid: _v6.vuid,
            is_free: !_v6.user?.capabilities?.hasPaid,
            is_enterprise: _v6.user?.capabilities?.hasEnterprise,
            is_staff: _v6.user?.badge?.type === "staff",
            device_type: (() => {
              if ("u" > typeof navigator && navigator.userAgent) return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent) ? "mobile" : "desktop";
            })(),
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
          if (!_v4) return _v22.has(_v0) || (console.warn(`Eppo flag "${_v0}" not found in configuration. Check that the flag is enabled in Eppo UI.`), _v22.add(_v0)), {
            assignment: _v3
          };
          let _v5 = new _v18(_v2 ?? {}).getAllContexts(),
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
              assignment: _v4 === _v9 ? "true" === _v2 : _v4 === _v7 || _v4 === _v8 ? Number(_v2) : _v4 === _v10 ? JSON.parse(_v2) : _v2
            };
          }
          return {
            assignment: ((_v0, _v1, _v2, _v3, _v4 = _v6) => {
              try {
                let _v0 = _v12.getInstance(),
                  _v1 = _v1.subject_key;
                if (!_v0 || !_v1) return _v3;
                let _v2 = {
                  bigPictureContexts: JSON.stringify(_v2),
                  ..._v1
                };
                switch (_v4) {
                  case _v6:
                    return _v0.getStringAssignment(_v0, _v1.toString(), _v2, _v3);
                  case _v7:
                    return _v0.getNumericAssignment(_v0, _v1.toString(), _v2, _v3);
                  case _v8:
                    return _v0.getIntegerAssignment(_v0, _v1.toString(), _v2, _v3);
                  case _v9:
                    return _v0.getBooleanAssignment(_v0, _v1.toString(), _v2, _v3);
                  case _v10:
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
      }({
        flagKey: "interactivity-freemium-access",
        subject: {
          key: _v5,
          keyType: "team_owner_id",
          additionalData: _v9
        },
        defaultAssignment: !1,
        disabled: !_v6,
        assignmentType: _v9
      });
    return _v10;
  }], 0);
}