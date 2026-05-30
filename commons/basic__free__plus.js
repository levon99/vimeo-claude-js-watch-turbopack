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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = (_v0, _v1) => {
    if (!_v0) return !0;
    if ("basic" !== _v0 && "free" !== _v0) {
      if (_v1.canUsePaidTemplates) return !0;
      if (!_v1) return !1;
      switch (_v0) {
        case "plus":
        case "starter":
          return _v1.hasPaid;
        case "pro":
          return _v1.hasPaid && !_v1.hasPlus;
        case "business":
          return _v1.hasPaid && !_v1.hasPlus && !_v1.hasPro;
        default:
          return !1;
      }
    }
    return !0;
  };
  function _v16(_v0) {
    localStorage.setItem(_v0, "true");
  }
  var _v17 = _v0.i(0);
  let _v18 = "v_c_c",
    _v19 = (_v0, _v1) => fetch(`https://${_v0}/me/videos?filter=app_ids&filter_app_ids=154809,154316,154317,163348&fields=total`, {
      mode: "cors",
      headers: {
        Authorization: `jwt ${_v1}`,
        "Content-Type": "application/json"
      }
    }).then(async _v0 => {
      if (_v0.ok) {
        let {
          total: _v0
        } = await _v0.json();
        return window.sessionStorage.setItem(_v18, _v0), _v0;
      }
    }),
    _v20 = async (_v0, _v1) => {
      let _v2 = parseInt(window.sessionStorage.getItem(_v18) || "");
      return isNaN(_v2) ? _v19(_v0, _v1) : (_v19(_v0, _v1), _v2);
    },
    _v21 = () => Error("Not implemented"),
    _v22 = _v3.default.createContext({
      showUpsell: !1,
      upsellType: _v9.UpsellType.NONE,
      showUpsellIfRequired: () => Promise.reject(),
      checkIfNeedUpgrade: () => !0,
      onDismissModal: _v21,
      onPlanUpgrade: _v21,
      onContinueAndUpgradeLater: _v21,
      shouldUpgradeIn: _v5.UpgradeWindowOption.NEW_TAB,
      upsellTitle: ""
    });
  _v0.s(["UpsellContext", 0, _v22, "UpsellContextProvider", 0, function ({
    canCreateUnlimitedDraftVideos: _v0,
    canSaveDraftVideos: _v1,
    DRAFTS_LIMIT: _v2,
    sessionId: _v3,
    draftsState: _v4,
    children: _v5,
    teamUser: _v6
  }) {
    let _v7 = (0, _v3.useRef)(!1),
      {
        magistoApiHost: _v8,
        user: _v9,
        apiUrl: _v10,
        jwt: _v11,
        thirdPartyIntegration: _v12
      } = (0, _v3.useContext)(_v10.ConfigContext),
      {
        labeledCapabilities: _v13,
        auth: _v14,
        authenticate: _v15,
        updateLabeledCapabilities: _v16
      } = (0, _v3.useContext)(_v11.MagistoSessionContext),
      [_v17, _v18] = (0, _v3.useState)({
        showUpsell: !1,
        upsellType: _v9.UpsellType.NONE,
        shouldUpgradeIn: _v5.UpgradeWindowOption.NEW_TAB,
        upsellTitle: ""
      }),
      _v19 = (0, _v3.useRef)(null),
      _v20 = (0, _v3.useCallback)(() => _v6 && (_v6.plainTextPermissionLevel === _v7.TeamUserPermissionLevel.Contributor || _v6.plainTextPermissionLevel === _v7.TeamUserPermissionLevel.ContributorPlus || _v6.plainTextPermissionLevel === _v7.TeamUserPermissionLevel.Admin), [_v6]),
      _v21 = (0, _v3.useContext)(_v8.ViewerContext),
      _v22 = `users/${_v21?.teamUser?.ownerId || _v21?.user?.id}`,
      {
        capabilities: _v23
      } = (0, _v6.useCapability)(["canUsePaidTemplates", "hasVideoSizeQuota", "hasCreateBrandApply"], _v22),
      _v24 = (0, _v3.useRef)(_v13?.capabilities),
      _v25 = (0, _v3.useCallback)((_v0, _v1) => _v1 ? _v6 && _v20() ? !_v15(_v0, {
        hasPaid: _v6.hasPaid,
        hasPlus: _v6.hasPlus,
        hasPro: _v6.hasPro,
        canUsePaidTemplates: _v23.canUsePaidTemplates
      }) : !_v15(_v0, {
        hasPaid: _v1.vimeoCurUser.isPaid,
        hasPlus: _v1.vimeoCurUser.capabilities.hasPlus,
        hasPro: _v1.vimeoCurUser.capabilities.hasPro,
        canUsePaidTemplates: _v23.canUsePaidTemplates
      }) : _v6 && _v20() ? !_v15(_v0, {
        hasPaid: _v6.hasPaid,
        hasPlus: _v6.hasPlus,
        hasPro: _v6.hasPro,
        canUsePaidTemplates: _v23.canUsePaidTemplates
      }) : !_v15(_v0, {
        hasPaid: _v9?.capabilities.hasPaid || !1,
        hasPlus: _v9?.capabilities.hasPlus || !1,
        hasPro: _v9?.capabilities.hasPro || !1,
        canUsePaidTemplates: _v23.canUsePaidTemplates
      }), [_v6, _v20, _v9, _v23.canUsePaidTemplates]),
      _v26 = (0, _v3.useCallback)(async (_v0, _v1, _v2, _v3, _v4, _v5) => {
        let {
            tier: _v6
          } = _v13?.capabilities.noDraftsLimit || {},
          _v7 = _v6?.name === "plus" ? "PLUS_PRO" : "PRO_BUSINESS",
          _v8 = _v14?.response?.user?.videoMigrationStatus === _v9.USER_MIGRATION_STATUS.MIGRATED;
        if (_v0) {
          let {
            isPaid: _v0,
            capabilities: {
              hasPlus: _v1
            }
          } = _v0.vimeoCurUser;
          return _v0 && !_v1 ? Promise.resolve({
            didShowUpsell: !1,
            didUpgrade: !1
          }) : new Promise((_v0, _v1) => {
            _v17.default.getDraftsWithXsrft(1, _v8, _v0.token, _v12).then(async ({
              drafts: _v0,
              maxMoviesAllowed: _v1
            }) => {
              if (_v8) {
                if (_v1) return Promise.resolve({
                  didShowUpsell: !1,
                  didUpgrade: !1
                });
                let _v0 = await _v20(_v10, _v11);
                _v1 && _v0 >= _v1 ? (_v18(_v0 => ({
                  ..._v0,
                  bpLocation: "create_draft_limit_modal",
                  showUpsell: !0,
                  upsellType: _v9.UpsellType[_v7],
                  upsellTitle: _v14.default.ModalTitleTextCreateNumVideos(_v1),
                  pageLocation: _v1,
                  flow: _v2,
                  upsellTrigger: _v3,
                  triggerCapability: _v4,
                  isBlocker: _v5
                })), _v19.current = {
                  resolve: _v0,
                  reject: _v1
                }) : _v0({
                  didShowUpsell: !1,
                  didUpgrade: !1
                });
              } else {
                let _v0 = _v0.totalItems;
                _v2 && _v0 >= _v2 ? (_v18(_v0 => ({
                  ..._v0,
                  bpLocation: "create_draft_limit_modal",
                  showUpsell: !0,
                  upsellType: _v9.UpsellType[_v7],
                  upsellTitle: _v14.default.ModalTitleTextCreate,
                  pageLocation: _v1,
                  flow: _v2,
                  upsellTrigger: _v3,
                  triggerCapability: _v4,
                  isBlocker: _v5
                })), _v19.current = {
                  resolve: _v0,
                  reject: _v1
                }) : _v0({
                  didShowUpsell: !1,
                  didUpgrade: !1
                });
              }
            });
          });
        }
        if (_v8) return await _v20(_v10, _v11).then(_v0 => _v3 && !_v0 && _v2 && _v0 >= _v2 ? (_v18(_v0 => ({
          ..._v0,
          bpLocation: "create_draft_limit_modal",
          showUpsell: !0,
          upsellType: _v9.UpsellType[_v7],
          upsellTitle: _v14.default.ModalTitleTextCreateNumVideos(_v2),
          pageLocation: _v1,
          flow: _v2,
          upsellTrigger: "use_10_drafts",
          triggerCapability: _v4,
          isBlocker: _v5
        })), new Promise((_v0, _v1) => {
          _v19.current = {
            resolve: _v0,
            reject: _v1
          };
        })) : Promise.resolve({
          didShowUpsell: !1,
          didUpgrade: !1
        }));
        if (_v3 && void 0 !== _v4.draftsCount && !_v0 && _v2 && _v4.draftsCount >= _v2) {
          let {
              tier: _v0
            } = _v13?.capabilities.noDraftsLimit || {},
            _v1 = _v0?.name === "plus" ? "PLUS_PRO" : "PRO_BUSINESS";
          return _v18(_v0 => ({
            ..._v0,
            bpLocation: "create_draft_limit_modal",
            showUpsell: !0,
            upsellType: _v9.UpsellType[_v1],
            upsellTitle: _v14.default.ModalTitleTextCreate,
            pageLocation: _v1,
            flow: _v2,
            upsellTrigger: "use_10_drafts",
            triggerCapability: _v4,
            isBlocker: _v5
          })), new Promise((_v0, _v1) => {
            _v19.current = {
              resolve: _v0,
              reject: _v1
            };
          });
        }
        return Promise.resolve({
          didShowUpsell: !1,
          didUpgrade: !1
        });
      }, [_v13, _v14, _v8, _v12, _v10, _v11, _v2, _v3, _v0, _v4.draftsCount]),
      _v27 = (0, _v3.useCallback)((_v0 = _v9.UpsellType.PLUS_PRO, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9) => {
        _v2 = void 0;
        let _v10 = _v0 === _v9.UpsellType.STARTER_BLOCKING || _v0 === _v9.UpsellType.STANDARD_BLOCKING || _v0 === _v9.UpsellType.ADVANCED_BLOCKING || _v0 === _v9.UpsellType.ENTERPRISE_BLOCKING;
        if (!_v1 || _v10) {
          if (!_v10) if (_v1) _v0 = "plus" === _v0 ? _v9.UpsellType.PLUS_PRO : _v9.UpsellType.PRO_BUSINESS;else {
            let _v0 = _v0 || "PRO";
            _v0 = _v9.UpsellType[_v0.toUpperCase()];
          }
          return _v18(_v0 => ({
            ..._v0,
            showUpsell: !0,
            upsellType: _v0,
            upsellTitle: _v2 || _v14.default.SaveShareAndUnlockTools,
            pageLocation: _v3,
            flow: _v4,
            upsellTrigger: _v5,
            triggerCapability: _v6,
            isBlocker: _v7,
            bpLocation: _v8,
            vsid: _v9
          })), new Promise((_v0, _v1) => {
            _v19.current = {
              resolve: _v0,
              reject: _v1
            };
          });
        }
        return Promise.resolve({
          didShowUpsell: !1,
          didUpgrade: !1
        });
      }, [_v1, !1]),
      _v28 = (0, _v3.useCallback)(_v0 => {
        let _v1 = _v13?.capabilities.canBrandVideo;
        if (!_v1) return Promise.resolve({
          didShowUpsell: !1,
          didUpgrade: !1
        });
        let _v2 = _v1.allowed && _v23.hasCreateBrandApply,
          {
            feature: _v3,
            pageLocation: _v4,
            upsellName: _v5,
            trackingParams: _v6
          } = _v0;
        return _v2 ? Promise.resolve({
          didShowUpsell: !1,
          didUpgrade: !1
        }) : (_v18(_v0 => ({
          ..._v0,
          showUpsell: !0,
          upsellType: _v9.UpsellType.BRAND,
          pageLocation: _v4,
          feature: _v3,
          upsellName: _v5,
          trackingParams: _v6
        })), new Promise((_v0, _v1) => {
          _v19.current = {
            resolve: _v0,
            reject: _v1
          };
        }));
      }, [_v13, _v23.hasCreateBrandApply]),
      _v29 = (0, _v3.useCallback)((_v0, _v1) => _v0 && !_v15(_v0, _v1) ? new Promise((_v0, _v1) => {
        _v19.current = {
          resolve: _v0,
          reject: _v1
        };
      }) : Promise.resolve({
        didShowUpsell: !1,
        didUpgrade: !1
      }), []),
      _v30 = (0, _v3.useCallback)((_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9) => {
        if (_v8 && _v9 && null !== localStorage.getItem(_v9)) return Promise.resolve({
          didShowUpsell: !1,
          didUpgrade: !1
        });
        let _v10 = {
          hasPaid: _v6 && _v20() ? _v6.hasPaid : _v9?.capabilities.hasPaid || !1,
          hasPlus: _v6 && _v20() ? _v6.hasPlus : _v9?.capabilities.hasPlus || !1,
          hasPro: _v6 && _v20() ? _v6.hasPro : _v9?.capabilities.hasPro || !1,
          canUsePaidTemplates: _v23.canUsePaidTemplates
        };
        if (_v0 && !_v15(_v0, _v10)) {
          let _v0 = _v0.toUpperCase();
          _v4.TierMeta[_v0]?.text, _v18(_v0 => ({
            ..._v0,
            showUpsell: !0,
            upsellType: _v9.UpsellType[_v0],
            upsellTitle: void 0,
            pageLocation: _v2,
            flow: _v3,
            upsellTrigger: _v4,
            triggerCapability: _v5,
            isBlocker: _v6
          }));
        }
        return _v7 && (_v10 = {
          hasPaid: _v7.vimeoCurUser.isPaid,
          hasPlus: _v7.vimeoCurUser.capabilities.hasPlus,
          hasPro: _v7.vimeoCurUser.capabilities.hasPro,
          canUsePaidTemplates: _v23.canUsePaidTemplates
        }), _v29(_v0, _v10);
      }, [_v20, _v29, _v6, !1, _v9, _v23.canUsePaidTemplates]),
      _v31 = (0, _v3.useCallback)(_v0 => (_v18(_v0 => ({
        ..._v0,
        showUpsell: !0,
        upsellType: _v9.UpsellType.STORAGE_QUOTA,
        ..._v0
      })), new Promise((_v0, _v1) => {
        _v19.current = {
          resolve: _v0,
          reject: _v1
        };
      })), []),
      _v32 = (0, _v3.useCallback)(_v0 => (_v18(_v0 => ({
        ..._v0,
        showUpsell: !0,
        upsellType: _v9.UpsellType.CREATE_QUOTA_NOTIFICATION,
        ..._v0
      })), new Promise((_v0, _v1) => {
        _v19.current = {
          resolve: _v0,
          reject: _v1
        };
      })), []),
      _v33 = (0, _v3.useCallback)(({
        loginResponse: _v0,
        context: _v1,
        templateTier: _v2,
        tier: _v3,
        upsellTitle: _v4,
        pageLocation: _v5,
        flow: _v6,
        upsellTrigger: _v7,
        triggerCapability: _v8,
        isBlocker: _v9,
        bpLocation: _v10,
        vsid: _v11,
        contentText: _v12,
        ctaText: _v13,
        canUpgradeFromQuotaNotification: _v14,
        feature: _v15,
        upsellName: _v16,
        trackingParams: _v17,
        ..._v18
      }) => {
        switch (_v1 !== _v5.Context.CREATE_QUOTA_NOTIFICATION && (_v4 = void 0), _v1) {
          case _v5.Context.SAVE:
            return _v27(_v18.saveTier, _v18.isComparison, _v4, _v5, _v6, _v7, _v8, _v9, _v10);
          case _v5.Context.CREATE:
            return _v26(_v0, _v5, _v6, _v7, _v8, _v9);
          case _v5.Context.CUSTOMIZE:
            return _v30(_v2, _v4, _v5, _v6, _v7, _v8, _v9, _v0, !0, _v9.TEMPLATE_FREEMIUM_IMPRESSION_KEY).then(_v0 => (_v0.didShowUpsell && _v16(_v9.TEMPLATE_FREEMIUM_IMPRESSION_KEY), _v26(_v0, _v5, _v6, _v7, _v8, _v9))).catch(() => (_v16(_v9.TEMPLATE_FREEMIUM_IMPRESSION_KEY), Promise.reject()));
          case _v5.Context.TIER_BADGE:
            return _v18(_v0 => ({
              ..._v0,
              showUpsell: !0,
              upsellType: _v9.UpsellType.TIER_BADGE,
              upsellTitle: _v4,
              pageLocation: _v5,
              flow: _v6,
              upsellTrigger: _v7,
              triggerCapability: _v8,
              isBlocker: _v9,
              thirdPartyIntegration: _v12,
              trackingParams: _v17
            })), new Promise((_v0, _v1) => {
              _v19.current = {
                resolve: _v0,
                reject: _v1
              };
            });
          case _v5.Context.TOGGLE_WATERMARK:
            return _v30(_v2, _v4, _v5, _v6, _v7, _v8, _v9, _v0, !0, _v9.TOGGLE_WATERMARK_IMPRESSION_KEY).then(_v0 => (_v0.didShowUpsell && _v16(_v9.TOGGLE_WATERMARK_IMPRESSION_KEY), Promise.resolve(_v0)));
          case _v5.Context.BRAND:
            return _v28({
              pageLocation: _v5,
              feature: _v15,
              upsellName: _v16,
              trackingParams: _v17
            });
          case _v5.Context.STOCK:
            {
              let _v0 = (_v3 || _v2 || "PRO").toUpperCase();
              return _v18(_v0 => ({
                ..._v0,
                showUpsell: !0,
                upsellType: _v9.UpsellType[_v0],
                upsellTitle: _v4,
                pageLocation: _v5,
                flow: _v6,
                upsellTrigger: _v7,
                triggerCapability: _v8,
                isBlocker: _v9,
                thirdPartyIntegration: _v12,
                trackingParams: _v17
              })), new Promise((_v0, _v1) => {
                _v19.current = {
                  resolve: _v0,
                  reject: _v1
                };
              });
            }
          case _v5.Context.TVE:
            {
              let _v0 = (_v3 || _v2 || "PRO").toUpperCase();
              return _v18(_v0 => ({
                ..._v0,
                showUpsell: !0,
                upsellType: _v9.UpsellType[_v0],
                upsellTitle: _v4,
                pageLocation: _v5,
                flow: _v6,
                upsellTrigger: _v7,
                triggerCapability: _v8,
                isBlocker: _v9,
                thirdPartyIntegration: _v12,
                trackingParams: _v17
              })), new Promise((_v0, _v1) => {
                _v19.current = {
                  resolve: _v0,
                  reject: _v1
                };
              });
            }
          case _v5.Context.STORAGE_QUOTA:
            return _v31({
              upsellTitle: _v4,
              pageLocation: _v5,
              flow: _v6,
              upsellTrigger: _v7,
              triggerCapability: _v8,
              isBlocker: _v9,
              thirdPartyIntegration: _v12,
              bpLocation: _v10
            });
          case _v5.Context.CREATE_BLOCKER:
            return _v27(_v3 ? _v9.UpsellType[_v3.toUpperCase()] : _v18.saveTier, _v18.isComparison, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11);
          case _v5.Context.CREATE_QUOTA_NOTIFICATION:
            {
              let _v0 = !_v6 || _v6 && _v6.plainTextPermissionLevel === _v7.TeamUserPermissionLevel.Owner,
                {
                  hasVideoSizeQuota: _v1
                } = _v23,
                _v2 = (_v1 ? _v12.QUOTA_SIZE_NOTIFICATION_CONTENT : _v12.QUOTA_NOTIFICATION_CONTENT)[_v0 ? "OWNER" : "TEAM_MEMBER"];
              return _v32({
                upsellTitle: _v2.title,
                pageLocation: _v5,
                flow: _v6,
                upsellTrigger: _v7,
                triggerCapability: _v0 ? "Quota - Owner / Personal" : "Quota - Team member",
                isBlocker: _v9,
                thirdPartyIntegration: _v12,
                bpLocation: _v10,
                contentText: _v2.content,
                ctaText: _v2.cta,
                canUpgradeFromQuotaNotification: _v2.canUpgrade
              });
            }
          default:
            return Promise.reject();
        }
      }, [!1, _v27, _v26, _v30, _v12, _v28, _v31, _v6, _v23, _v32]),
      _v34 = (0, _v3.useCallback)(() => (_v18(_v0 => ({
        ..._v0,
        showUpsell: !1
      })), _v19.current?.reject()), []),
      _v35 = (0, _v3.useCallback)(() => (_v18(_v0 => ({
        ..._v0,
        showUpsell: !1
      })), _v19.current?.resolve({
        didShowUpsell: !0,
        didUpgrade: !1
      })), []),
      _v36 = (0, _v3.useCallback)(() => (_v15(!1).then(_v0 => {
        _v0 && _v16?.(_v0);
      }), _v18(_v0 => ({
        ..._v0,
        showUpsell: !1
      })), _v19.current?.resolve({
        didShowUpsell: !0,
        didUpgrade: !0
      })), [_v15, _v16]);
    (0, _v3.useEffect)(() => {
      (0, _v2.default)(_v24.current) || (0, _v2.default)(_v13?.capabilities) || JSON.stringify(_v24.current) === JSON.stringify(_v13?.capabilities) || _v36(), _v24.current = _v13?.capabilities;
    }, [_v13?.capabilities, _v36]);
    let _v37 = (0, _v3.useCallback)(() => {
        _v7.current && _v15(!1).then(_v0 => {
          _v0 && _v16?.(_v0);
        }), _v7.current = !1;
      }, [_v15, _v16]),
      _v38 = (0, _v3.useCallback)(() => {
        _v7.current = !0;
      }, []);
    (0, _v13.default)(_v37, _v38);
    let _v39 = {
      checkIfNeedUpgrade: _v25,
      showUpsellIfRequired: _v33,
      onDismissModal: _v34,
      onPlanUpgrade: _v36,
      updateLabeledCapabilities: _v16,
      onContinueAndUpgradeLater: _v35,
      ..._v17
    };
    return (0, _v1.jsx)(_v22.Provider, {
      value: _v39,
      children: _v5
    });
  }], 0);
}