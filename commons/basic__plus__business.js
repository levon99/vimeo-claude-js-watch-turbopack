{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = ((_v1 = {}).Basic = "basic", _v1.Plus = "plus", _v1.Pro = "pro", _v1.Business = "business", _v1.Premium = "premium", _v1.Enterprise = "enterprise", _v1.Free = "free", _v1.Starter = "starter", _v1.Standard = "standard", _v1.Advanced = "advanced", _v1.StarterBlocking = "starterBlocking", _v1.StandardBlocking = "standardBlocking", _v1.Creator = "creator", _v1.Professional = "professional", _v1.Studio = "studio", _v1.Production = "production", _v1);
  _v0.s(["TeamUserPermissionLevel", 0, {
    Owner: "Owner",
    Admin: "Admin",
    Contributor: "Contributor",
    Uploader: "Uploader",
    Viewer: "Viewer",
    ContributorPlus: "Contributor Plus"
  }, "Tier", () => _v9], 0);
  let _v10 = {
    basic: 0,
    plus: 1,
    pro: 2,
    business: 3,
    premium: 4,
    enterprise: 5,
    free: 10,
    starter: 11,
    standard: 12,
    advanced: 13,
    creator: 11,
    professional: 12,
    studio: 13,
    production: 14
  };
  _v0.s(["TIER_LEVEL", 0, _v10], 0);
  var _v11 = _v0.i(0);
  let _v12 = (_v0, _v1) => {
      let _v2 = !1;
      return _v0 && _v1 && _v10[_v0] && _v10[_v1] && _v10[_v0] <= _v10[_v1] && (_v2 = !0), _v2;
    },
    _v13 = (_v0 = _v9.Pro) => _v0 === _v9.Plus ? _v11.TierMeta[_v9.Pro] : _v11.TierMeta[_v0];
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  class _v16 {
    static request = (_v0, _v1, _v2 = !0) => {
      let _v3 = {
        "X-Requested-With": "XMLHttpRequest"
      };
      return _v1.sessionId && (_v3.Authorization = _v1.sessionId), fetch(`//${_v1.magistoApiHost}${_v0}`, {
        headers: _v3
      }).then(_v0 => {
        if (_v0.ok) return _v0.json().then(_v0 => _v2 ? (0, _v14.camelizeDeep)(_v0) : _v0);
        throw _v0;
      });
    };
    static getBearerToken = async _v0 => {
      let _v1 = await fetch("/_next/access_token", {
        body: JSON.stringify({
          app_id: 0,
          token: _v0,
          scopes: ["public", "private", "create", "edit", "upload"],
          get_magisto_team_token: 1
        }),
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        }
      });
      if (_v1.ok) {
        let {
          access_token: _v0,
          magisto_team_token: _v1
        } = await _v1.json();
        return {
          ..._v0,
          magisto_team_token: _v1
        };
      }
      throw _v1;
    };
    static getSession = async (_v0, _v1, _v2) => {
      let _v3 = new FormData();
      _v3.append("method", "VIMEO"), _v3.append("token", _v1), _v3.append("settings", "1"), _v3.append("dont_create", "1"), _v2 && _v3.append("teamToken", _v2);
      let _v4 = await fetch(`//${_v0}/api/auth`, {
        body: _v3,
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      if (_v4.ok) {
        let _v0 = _v4.headers.get("vmosessionid");
        if (null === _v0) throw Error("vmosessionid not found in response headers.");
        let _v1 = await _v4.json(),
          _v2 = _v1.active_package && _v1.active_package.max_movies_allowed,
          _v3 = _v1.vimeo && _v1.vimeo.share_privacies,
          _v4 = _v1.labelled_products;
        return {
          sessionId: _v0,
          draftsLimit: _v2,
          sharePrivacies: _v3,
          videoMigrationStatus: _v1.user && _v1.user.video_migration_status,
          labelledProducts: _v4
        };
      }
      throw _v4;
    };
    static post = async (_v0, _v1, _v2) => {
      let _v3 = {
        "X-Requested-With": "XMLHttpRequest"
      };
      _v2.sessionId && (_v3.Authorization = _v2.sessionId);
      let _v4 = await fetch(`//${_v2.magistoApiHost}${_v0}`, {
        method: "POST",
        headers: _v3,
        body: _v1
      });
      if (_v4.ok) return _v4.json().then(_v0 => _v0);
      throw await _v4.json().then(_v0 => _v0);
    };
    static canSaveByParams = async (_v0, _v1, _v2) => {
      let _v3 = {
        "X-Requested-With": "XMLHttpRequest"
      };
      _v2.sessionId && (_v3.Authorization = _v2.sessionId);
      let _v4 = await fetch(`//${_v2.magistoApiHost}${_v0}`, {
          method: "POST",
          headers: _v3,
          body: _v1
        }),
        _v5 = _v4.json().then(_v0 => _v0);
      if (_v4.ok) return _v5;
      throw await _v5;
    };
    static authorizeWithXsrft = async (_v0, _v1, _v2) => {
      let _v3 = await _v15.default.getAccessToken(_v7.VIMEO_CREATE_WEB_APP_ID, _v0, _v7.VIMEO_ACCESS_TOKEN_SCOPES);
      return _v16.authorize(_v3.token, _v1, void 0, _v2);
    };
    static authorize = async (_v0, _v1, _v2, _v3) => {
      let _v4 = new FormData();
      _v4.append("method", "VIMEO"), _v4.append("token", _v0), _v4.append("settings", "1"), _v2 && _v4.append("teamToken", _v2), _v3 && _v4.append("partnerApp", _v3);
      try {
        let _v0 = await ((_v0, _v1, _v2 = 3, _v3 = [504], _v4 = 300) => new Promise(function (_v0, _v1) {
          let _v2 = function (_v0) {
            fetch(_v0, _v1).then(function (_v0) {
              _v3.includes(_v0.status) && _v0 < _v2 ? _v3(_v0) : _v0(_v0);
            }).catch(function (_v0) {
              _v0 < _v2 ? _v3(_v0) : _v1(_v0);
            });
          };
          function _v3(_v0) {
            setTimeout(function () {
              _v2(++_v0);
            }, _v4);
          }
          _v2(0);
        }))(`//${_v1.magistoApiHost}/api/auth`, {
          body: _v4,
          method: "POST",
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        });
        if (_v0.ok) {
          let _v0 = _v0.headers.get("vmosessionid");
          if (!_v0) throw Error("`vmosessionid` header not found in response.");
          return _v0.json().then(_v0 => ({
            sessionId: _v0,
            response: (0, _v14.camelizeDeep)(_v0)
          }));
        }
        throw _v0;
      } catch (_v0) {
        throw _v0;
      }
    };
    static getPopularTags = _v0 => _v16.request("/api/template/popular/tags", _v0);
    static getTagsList = _v0 => _v16.request("/api/template/tags", _v0);
    static getTemplateCollections = _v0 => _v16.request("/api/template/collections", _v0);
    static getTemplates = (_v0, _v1, _v2) => _v16.request(`/api/template/collections?p=${_v0}&collection_id=${_v1}`, _v2);
    static getVideoSessionForEdit = async (_v0, _v1) => {
      let _v2 = new FormData();
      _v2.append("vitid", _v0);
      let _v3 = await fetch(`//${_v1.magistoApiHost}/api/video/template/duplicate`, {
        body: _v2,
        method: "POST",
        headers: {
          Authorization: _v1.sessionId,
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      if (_v3.ok) return _v3.json().then(_v0 => (0, _v14.camelizeDeep)(_v0));
      throw _v3;
    };
    static getDraftsWithXsrft = async (_v0 = 1, _v1, _v2, _v3) => {
      let {
          sessionId: _v4,
          response: {
            activePackage: {
              maxMoviesAllowed: _v5
            }
          }
        } = await _v16.authorizeWithXsrft(_v2, {
          magistoApiHost: _v1
        }, _v3),
        _v6 = `/api/video/mine?p=${_v0}`;
      return _v16.request(_v6, {
        magistoApiHost: _v1,
        sessionId: _v4
      }).then(_v0 => ({
        drafts: _v0,
        maxMoviesAllowed: _v5
      }));
    };
    static getDrafts = (_v0 = 1, _v1, _v2) => {
      let _v3 = `/api/video/mine?with_in_creation&p=${_v0}`;
      return _v16.request(_v3, {
        magistoApiHost: _v1,
        sessionId: _v2
      });
    };
    static search = (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
      let _v7 = `/api/template/browse?limit=${_v1}&include_prefilled=1`;
      return _v2 && (_v7 += `&offset=${_v2}`), _v3 && _v3.length > 0 && (_v7 += `&keywords=${_v3.map(_v0 => _v0.keyword).filter(_v0 => "" !== _v0).join(",")}`), _v4 && (_v7 += `&freetext=${_v4}`), _v5 && (_v7 += `&sort=${_v5.id}`), _v6 && (_v7 += `&sort_order=${_v6}`), _v16.request(_v7, _v0);
    };
    static getTemplate(_v0, _v1) {
      return "-s" === _v0.slice(-2) ? _v16.getScript(_v0.slice(0, -2), _v1) : _v16.request(`/api/video/template/${_v0}`, _v1);
    }
    static getScript(_v0, _v1) {
      return _v16.request(`/api/script/${_v0}`, _v1);
    }
    static getSuggestions = async (_v0, _v1) => {
      let _v2 = `/api/video/template/autocomplete?keyword=${_v0}`;
      return _v16.request(_v2, _v1);
    };
    static getVideo = async (_v0, _v1) => _v16.request(`/api/video/${_v0}`, _v1, !1);
    static submitRatingAndFeedback = async (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = new FormData();
      return _v5.append("hash", _v1), _v5.append("rate", _v2), _v3 && _v3.length > 0 && _v5.append("reasons", _v3.join(",")), _v4 && _v5.append("free_text", _v4), _v16.post("/api/video/rate", _v5, _v0);
    };
    static removeWatermark = (_v0, _v1, _v2) => {
      let _v3 = new FormData();
      return _v16.post(`/api/video/watermark/remove/vimeo?video_id=${_v2}`, _v3, {
        magistoApiHost: _v0,
        sessionId: _v1
      }).then(_v0 => {
        if ("OK" === _v0.status) return _v0.jobId;
      });
    };
    static checkWatermarkRemovingJobStatus = (_v0, _v1, _v2, _v3, _v4) => _v16.request(`/api/video/upload/check?job=${_v2}`, {
      magistoApiHost: _v0,
      sessionId: _v1
    }).then(_v0 => {
      if (_v0 && "OK" === _v0.status) switch (_v0.jobStatus) {
        case _v7.JOB_DONE:
          _v4();
          break;
        case _v7.JOB_ERROR:
          _v3();
          break;
        case _v7.JOB_PRCS:
          setTimeout(() => {
            _v16.checkWatermarkRemovingJobStatus(_v0, _v1, _v2, _v3, _v4);
          }, _v7.JOB_POLL_DELAY);
      }
    }).catch(() => {
      _v3();
    });
    static triggerMaxResolutionTranscoding = (_v0, _v1, _v2) => {
      let _v3 = new FormData();
      return _v3.append("h", _v0), _v16.post("/api/premium/get", _v3, {
        magistoApiHost: _v1,
        sessionId: _v2
      });
    };
    static saveCustomTemplate = (_v0, _v1, _v2) => {
      let _v3 = new FormData();
      return _v3.append("name", _v0), _v16.post("/api/customtemplates/save", _v3, {
        magistoApiHost: _v1,
        sessionId: _v2
      });
    };
  }
  _v0.s(["default", 0, _v16], 0);
  let _v17 = _v3.default.createContext({
    loading: !1,
    authError: void 0,
    auth: void 0,
    sessionId: void 0,
    canBrandVideo: void 0,
    labeledCapabilities: void 0,
    authenticate: () => Promise.resolve(void 0),
    updateLabeledCapabilities: void 0
  });
  _v0.s(["MagistoSessionContext", 0, _v17, "default", 0, function ({
    viewer: _v0,
    children: _v1,
    partnerConfig: _v2
  }) {
    let _v3 = (0, _v3.useRef)({
        token: ""
      }),
      [_v4, _v5] = (0, _v3.useState)(),
      [_v6, _v7] = (0, _v3.useState)(),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useState)(),
      [_v12, _v13] = (0, _v3.useState)({}),
      [_v14, _v15] = (0, _v3.useState)([]),
      [_v16, _v17] = (0, _v3.useState)({
        capabilities: {},
        accountTier: _v9.Basic,
        badgeLevels: _v10
      }),
      {
        thirdPartyIntegration: _v18
      } = (0, _v3.useContext)(_v8.ConfigContext),
      {
        xsrft: _v19,
        user: _v20,
        magistoApiHost: _v21,
        teamUser: _v22
      } = _v0,
      _v23 = !!_v20 && !!_v20.id,
      {
        capabilities: _v24,
        loading: _v25
      } = (0, _v4.useCapability)(["hasUpsellsForFlatRateTiers"], _v0?.teamUser?.ownerId),
      _v26 = !_v24.hasUpsellsForFlatRateTiers,
      _v27 = !!_v2;
    (0, _v3.useEffect)(() => {
      _v25 || _v17({
        capabilities: ((_v0, _v1, _v2, _v3, _v4) => {
          let _v5 = {};
          for (let _v0 in _v0) {
            let _v0 = _v0[_v0];
            "boolean" == typeof _v0 && (_v5[_v0] = {
              allowed: _v0,
              tier: _v13(_v1[_v0]),
              showBadge: !0,
              isVisible: !0,
              isUpsellBlocker: _v3
            });
          }
          for (let _v0 in _v1) _v5[_v0] || (_v5[_v0] = {
            allowed: _v12(_v1[_v0], _v2),
            tier: _v13(_v1[_v0]),
            showBadge: !0,
            isVisible: !0,
            isUpsellBlocker: _v3
          });
          for (let _v0 in _v4?.capabilityVisibility) _v5[_v0] && (_v5[_v0].isVisible = (_v4?.capabilityVisibility)[_v0]);
          return _v5;
        })(_v12, ((_v0, _v1) => {
          let _v2 = {},
            _v3 = [_v9.Pro, _v9.Plus, _v9.Business],
            _v4 = [_v9.Free, _v9.Starter, _v9.Standard, _v9.Advanced, _v9.Creator, _v9.Professional, _v9.Studio, _v9.Production];
          for (let _v0 of _v0 = _v0.filter(_v0 => _v1 ? _v0.vimeoAccountEligibility && _v4.includes(_v0.vimeoAccountEligibility) : _v0.vimeoAccountEligibility && _v3.includes(_v0.vimeoAccountEligibility))) for (let _v0 of _v0.label) _v2[_v0] || (_v2[_v0] = _v0.vimeoAccountEligibility);
          return _v2;
        })(_v14, _v26), _v10, !1, _v2),
        accountTier: _v10,
        badgeLevels: _v10
      });
    }, [_v10, _v14, !1, _v12, _v2, _v26, _v25]);
    let _v28 = (0, _v3.useCallback)((_v0, _v1) => {
        _v9(!1), _v7(_v0 instanceof Error ? _v0.message : String(_v0)), _v1(_v0 instanceof Error ? _v0 : Error(String(_v0)));
      }, []),
      _v29 = (0, _v3.useCallback)(async (_v0, _v1, _v2) => {
        try {
          let _v0 = await _v16.authorize(_v0.token, {
            magistoApiHost: _v21
          }, _v0.magistoTeamToken, _v18);
          null != _v0.sessionId ? (_v5(_v0), _v11(_v0.response.activePackage.vimeoAccountEligibility), _v13({
            ..._v0.response.activePackage,
            ..._v0.response.user?.capabilities
          }), _v15(_v0.response.labelledProducts), _v1(_v0)) : (_v7("auth has no vmosessionid."), _v2(Error("Magisto auth has no vmosessionid.")));
        } catch (_v0) {
          _v28(_v0, _v2);
        } finally {
          _v9(!1);
        }
      }, [_v21, _v18, _v28]),
      _v30 = (0, _v3.useCallback)(async (_v0 = !1) => new Promise((_v0, _v1) => {
        if ((!_v27 || _v18 !== _v5.ThirdPartyIntegration.None) && _v23) {
          _v9(!0);
          let _v0 = _v22 && _v22.plainTextPermissionLevel !== _v6.TeamUserPermissionLevel.Viewer && _v22.plainTextPermissionLevel !== _v6.TeamUserPermissionLevel.Uploader;
          if (_v3.current.token && !_v0) return void _v29(_v3.current, _v0, _v1).catch(_v0 => _v28(_v0, _v1));
          _v15.default.getAccessToken(_v7.VIMEO_CREATE_WEB_APP_ID, _v19, ["public", "private", "create", "edit", "upload"], _v0).then(_v0 => {
            _v3.current = _v0, _v29(_v0, _v0, _v1);
          }).catch(_v0 => _v28(_v0, _v1));
        }
      }), [_v23, _v27, _v22, _v18, _v19, _v29, _v28]);
    return (0, _v3.useEffect)(() => {
      _v30();
    }, [_v30]), (0, _v2.jsx)(_v17.Provider, {
      value: {
        loading: _v8,
        authError: _v6,
        auth: _v4,
        sessionId: _v4 && _v4.sessionId,
        authenticate: _v30,
        canBrandVideo: _v4?.response?.activePackage?.canBrandVideo,
        labeledCapabilities: _v16,
        updateLabeledCapabilities: _v0 => {
          _v11(_v0.response.activePackage.vimeoAccountEligibility), _v13({
            ..._v0.response.activePackage,
            ..._v0.response.user?.capabilities
          }), _v15(_v0.response.labelledProducts);
        }
      },
      children: _v1
    });
  }], 0);
  var _v18 = _v0.i(0);
  let _v19 = {
      OWNER: {
        title: (0, _v18.translate)({
          singular: "You’ve reached the video limit for your account.",
          dictionary: {
            es: {
              singular: "Has alcanzado el límite de videos de tu cuenta."
            },
            "de-DE": {
              singular: "Du hast das Video-Limit für dein Konto erreicht."
            },
            "fr-FR": {
              singular: "Vous avez atteint la limite de vidéos pour votre compte."
            },
            "ja-JP": {
              singular: "アカウントの動画上限に達しました。"
            },
            "ko-KR": {
              singular: "계정의 동영상 한도에 도달했습니다."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de vídeo para sua conta."
            },
            "zh-CN": {
              singular: "您的帐户已达到视频限额。"
            }
          }
        }),
        content: (0, _v18.translate)({
          singular: "To increase your video count you’ll need to upgrade your account.",
          dictionary: {
            es: {
              singular: "Para aumentar la cantidad de videos, tendrás que actualizar tu cuenta."
            },
            "de-DE": {
              singular: "Um deine Videoanzahl zu erhöhen, musst du ein Upgrade für dein Konto vornehmen."
            },
            "fr-FR": {
              singular: "Pour mettre en ligne plus de vidéos, vous devez mettre votre compte à niveau."
            },
            "ja-JP": {
              singular: "動画数を増やすには、アカウントをアップグレードする必要があります。"
            },
            "ko-KR": {
              singular: "동영상 한도를 늘리려면 계정을 업그레이드해야 합니다."
            },
            "pt-BR": {
              singular: "Para aumentar seu número de vídeos, faça upgrade da sua conta."
            },
            "zh-CN": {
              singular: "要增加视频数量，您需要升级您的账户。"
            }
          }
        }),
        cta: (0, _v18.translate)({
          singular: "Upgrade now",
          dictionary: {
            es: {
              singular: "Actualizar ahora"
            },
            "de-DE": {
              singular: "Jetzt Upgrade vornehmen"
            },
            "fr-FR": {
              singular: "Mettre à niveau"
            },
            "ja-JP": {
              singular: "今すぐアップグレード"
            },
            "ko-KR": {
              singular: "지금 업그레이드"
            },
            "pt-BR": {
              singular: "Faça o upgrade agora"
            },
            "zh-CN": {
              singular: "立即升级"
            }
          }
        }),
        canUpgrade: !0
      },
      TEAM_MEMBER: {
        title: (0, _v18.translate)({
          singular: "Your team has reached the video limit for your account.",
          dictionary: {
            es: {
              singular: "Tu equipo ha alcanzado el límite de videos de tu cuenta."
            },
            "de-DE": {
              singular: "Dein Team hat das Video-Limit für dein Konto erreicht."
            },
            "fr-FR": {
              singular: "Votre équipe a atteint la limite de vidéos pour votre compte."
            },
            "ja-JP": {
              singular: "あなたのチームはアカウントの動画上限に達しました。"
            },
            "ko-KR": {
              singular: "팀이 계정의 동영상 한도에 도달했습니다."
            },
            "pt-BR": {
              singular: "Sua equipe atingiu o limite de vídeo para sua conta."
            },
            "zh-CN": {
              singular: "您的团队已达到账户的视频限制。"
            }
          }
        }),
        content: (0, _v18.translate)({
          singular: "To continue creating videos this period, please contact your Account Owner to upgrade.",
          dictionary: {
            es: {
              singular: "Para seguir creando videos durante este periodo, ponte en contacto con el propietario de tu cuenta para actualizar el plan."
            },
            "de-DE": {
              singular: "Wenn du in diesem Zeitraum weiterhin Videos erstellen möchtest, kontaktiere deinen Kontoinhaber, um ein Upgrade durchzuführen."
            },
            "fr-FR": {
              singular: "Pour continuer à créer des vidéos pendant cette période, veuillez contacter le détenteur du compte pour le mettre à niveau."
            },
            "ja-JP": {
              singular: "この期間中に動画作成を続けるには、アカウント所有者に連絡してアップグレードしてください。"
            },
            "ko-KR": {
              singular: "이 기간 동안 동영상을 계속 제작하려면 계정 소유자에게 문의하여 업그레이드하세요."
            },
            "pt-BR": {
              singular: "Para continuar criando vídeos neste período, entre em contato com o proprietário da conta para fazer o upgrade."
            },
            "zh-CN": {
              singular: "要在此期间继续创建视频，请联系您的账户所有者升级账户。"
            }
          }
        }),
        cta: (0, _v18.translate)({
          singular: "Got it",
          dictionary: {
            es: {
              singular: "Entendido"
            },
            "de-DE": {
              singular: "Alles klar"
            },
            "fr-FR": {
              singular: "J'ai compris"
            },
            "ja-JP": {
              singular: "了解"
            },
            "ko-KR": {
              singular: "확인"
            },
            "pt-BR": {
              singular: "Entendi"
            },
            "zh-CN": {
              singular: "明白"
            }
          }
        }),
        canUpgrade: !1
      }
    },
    _v20 = {
      OWNER: {
        title: (0, _v18.translate)({
          singular: "You’ve reached the storage limit for your account.",
          dictionary: {
            es: {
              singular: "Ha alcanzado el límite de almacenamiento de su cuenta."
            },
            "de-DE": {
              singular: "Sie haben das Speicher-Limit für Ihr Konto erreicht."
            },
            "fr-FR": {
              singular: "Vous avez atteint la limite de stockage pour votre compte."
            },
            "ja-JP": {
              singular: "アカウントのストレージ容量の上限に達しました。"
            },
            "ko-KR": {
              singular: "회원님의 계정이 저장 공간 한도에 도달했습니다."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de armazenamento para sua conta."
            },
            "zh-CN": {
              singular: "您已达到帐户的存储上限。"
            }
          }
        }),
        content: (0, _v18.translate)({
          singular: "To increase your storage limit, upgrade your account.",
          dictionary: {
            es: {
              singular: "Para aumentar su límite de almacenamiento, actualice su cuenta."
            },
            "de-DE": {
              singular: "Nehmen Sie ein Upgrade für Ihr Konto vor, um Ihr Speicher-Limit zu erhöhen."
            },
            "fr-FR": {
              singular: "Pour augmenter votre limite de stockage, mettez votre compte à niveau."
            },
            "ja-JP": {
              singular: "ストレージ容量を増やすには、アカウントをアップグレードしてください。"
            },
            "ko-KR": {
              singular: "저장 공간 한도를 늘리려면 계정을 업그레이드하세요."
            },
            "pt-BR": {
              singular: "Para aumentar seu limite de armazenamento, faça o upgrade da conta."
            },
            "zh-CN": {
              singular: "要提高存储空间上限，请升级您的账户。"
            }
          }
        }),
        cta: (0, _v18.translate)({
          singular: "Upgrade",
          dictionary: {
            es: {
              singular: "Actualizar"
            },
            "de-DE": {
              singular: "Upgraden"
            },
            "fr-FR": {
              singular: "Mettre à niveau"
            },
            "ja-JP": {
              singular: "アップグレード"
            },
            "ko-KR": {
              singular: "업그레이드"
            },
            "zh-CN": {
              singular: "升级"
            }
          }
        }),
        canUpgrade: !0
      },
      TEAM_MEMBER: {
        title: (0, _v18.translate)({
          singular: "Your team has reached the storage limit for your account.",
          dictionary: {
            es: {
              singular: "Su equipo ha alcanzado el límite de almacenamiento de su cuenta."
            },
            "de-DE": {
              singular: "Ihr Team hat das Speicherlimit für Ihr Konto erreicht."
            },
            "fr-FR": {
              singular: "Votre équipe a atteint la limite de stockage de votre compte."
            },
            "ja-JP": {
              singular: "あなたのチームはアカウントのストレージ容量の上限に達しました。"
            },
            "ko-KR": {
              singular: "팀에서 사용하는 회원님의 계정이 저장 공간 한도에 도달했습니다."
            },
            "pt-BR": {
              singular: "Sua equipe atingiu o limite de armazenamento para sua conta."
            },
            "zh-CN": {
              singular: "您的团队已达到账户的存储限制。"
            }
          }
        }),
        content: (0, _v18.translate)({
          singular: "To continue creating videos this period, please contact your Account Owner to upgrade.",
          dictionary: {
            es: {
              singular: "Para seguir creando videos durante este periodo, ponte en contacto con el propietario de tu cuenta para actualizar el plan."
            },
            "de-DE": {
              singular: "Wenn du in diesem Zeitraum weiterhin Videos erstellen möchtest, kontaktiere deinen Kontoinhaber, um ein Upgrade durchzuführen."
            },
            "fr-FR": {
              singular: "Pour continuer à créer des vidéos pendant cette période, veuillez contacter le détenteur du compte pour le mettre à niveau."
            },
            "ja-JP": {
              singular: "この期間中に動画作成を続けるには、アカウント所有者に連絡してアップグレードしてください。"
            },
            "ko-KR": {
              singular: "이 기간 동안 동영상을 계속 제작하려면 계정 소유자에게 문의하여 업그레이드하세요."
            },
            "pt-BR": {
              singular: "Para continuar criando vídeos neste período, entre em contato com o proprietário da conta para fazer o upgrade."
            },
            "zh-CN": {
              singular: "要在此期间继续创建视频，请联系您的账户所有者升级账户。"
            }
          }
        }),
        cta: (0, _v18.translate)({
          singular: "Got it",
          dictionary: {
            es: {
              singular: "Entendido"
            },
            "de-DE": {
              singular: "Alles klar"
            },
            "fr-FR": {
              singular: "J'ai compris"
            },
            "ja-JP": {
              singular: "了解"
            },
            "ko-KR": {
              singular: "확인"
            },
            "pt-BR": {
              singular: "Entendi"
            },
            "zh-CN": {
              singular: "明白"
            }
          }
        }),
        canUpgrade: !1
      }
    };
  _v0.s(["QUOTA_NOTIFICATION_CONTENT", 0, _v19, "QUOTA_SIZE_NOTIFICATION_CONTENT", 0, _v20], 0), _v0.s(["default", 0, (_v0, _v1) => {
    (0, _v3.useEffect)(() => {
      let _v0 = () => {
        "visible" === document.visibilityState ? _v0?.() : _v1?.();
      };
      return document.addEventListener("visibilitychange", _v0), () => {
        document.removeEventListener("visibilitychange", _v0);
      };
    }, [_v1, _v0]);
  }], 0);
}