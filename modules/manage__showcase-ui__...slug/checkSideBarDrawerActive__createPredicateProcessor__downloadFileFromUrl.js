{
  "use strict";

  _v0.s(["checkSideBarDrawerActive", () => _v38, "createPredicateProcessor", () => _v60, "downloadFileFromUrl", () => _v68, "extendDeltaValuesWithReqFields", () => _v47, "extractPremiumFlags", () => _v77, "generateConfigPremiumFields", () => _v79, "getCurrentPath", () => _v72, "getDotKey", () => _v73, "getFormErrorMessage", () => _v61, "getParentPath", () => _v71, "getRawUploadedImageUrl", () => _v65, "getSideDrawerHeaderText", () => _v43, "getSideDrawerMaxWidth", () => _v80, "getViewerVideosTotal", () => _v81, "isDeltaFieldValueEmpty", () => _v59, "isEmbedViewAllowed", () => _v49, "isEmbeddable", () => _v48, "isEmpty", () => _v41, "isEventFromPlaylist", () => _v66, "isLiveEvent", () => _v69, "isNullOrUndefined", () => _v39, "isPasswordValid", () => _v67, "isPathMatch", () => _v70, "isSame", () => _v42, "isValidDeltaLength", () => _v58, "omit", () => _v62, "pipe", () => _v57, "pipeAllTrue", () => _v75, "pipeSomeTrue", () => _v76, "postIframeMessage", () => _v63, "postIframeMessageReload", () => _v64, "processDeltaValues", () => _v46, "setSeoKeywordsHandler", () => _v44, "traverseAndSetValue", () => _v74, "updateAppearanceData", () => _v53, "updateCommonData", () => _v52, "updateInfoData", () => _v55, "updateSeoData", () => _v56, "updateTVAppsData", () => _v54], 0), _v0.s(["applyShowcaseDownloadPermissions", () => _v35, "createShowcaseConfigLookups", () => _v33, "gerFloatingUpgradeBannerText", () => _v32, "getCustomLogo", () => _v26, "getCustomLogoSrcSet", () => _v27, "getDefaultLayout", () => _v30, "getDeltaFieldsForLayout", () => _v20, "getLayoutTypeForPreview", () => _v31, "getThumbnailUrl", () => _v28, "getViewerClips", () => _v29, "hasNestedPremiumField", () => _v34, "isConfigValueObject", () => _v10, "isHexColor", () => _v25, "setAppearanceConfigHandler", () => _v13, "setAppearanceConfigWithTrackedKeysHandler", () => _v19, "setAppearanceDataFromLayout", () => _v12, "setAppearanceFromUpgrade", () => _v22, "setApperanceHideNavHandler", () => _v23, "setApperanceHideVimeoLogoHandler", () => _v24, "setBrandColorHandler", () => _v21], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = _v0 => _v0 && "object" == typeof _v0 && !Array.isArray(_v0),
    _v11 = _v0 => _v0 === _v9.AppearanceLayoutEnum.PLAYLIST ? _v5.PlaylistDisabledFields : _v5.GridDisabledFields,
    _v12 = _v0 => (_v0, _v1, _v2) => !!_v5.AppearanceStoreFields.includes(_v1) && (Reflect.set(_v0, _v1, _v11(_v0).includes(_v1) ? null : _v2), !0),
    _v13 = (_v0, _v1, _v2) => {
      if (["showVideoDetails", "showVideoPlayerCards"].includes(_v1) && Array.isArray(_v2)) {
        let _v0 = Array.isArray(_v0.config) ? [..._v0.config] : [{}, {}];
        return _v0[0][_v1] = _v2[0], _v0[1][_v1] = _v2[1], Reflect.set(_v0, "config", _v0), !0;
      }
      return !1;
    },
    _v14 = _v0 => !_v41(_v0),
    _v15 = _v0 => !!_v10(_v0),
    _v16 = _v0 => _v0?.[_v9.ConfigItemEnum.IS_UPGRADE] === !1,
    _v17 = _v0 => _v75(_v15, _v14, _v16)(_v0),
    _v18 = _v0 => !_v39(_v0) && "object" != typeof _v0 && "function" != typeof _v0,
    _v19 = _v0 => (_v0, _v1, _v2) => {
      if ("albumConfig" !== _v1 || !Array.isArray(_v2)) return !1;
      let _v3 = _v0.config,
        [_v4, _v5] = _v2;
      if (_v41(_v5)) return !1;
      let _v6 = _v3.reduce((_v0, _v1) => {
        if (_v1.includes(".")) {
          let [_v0, _v1] = _v1.split("."),
            _v2 = _v5?.[_v0],
            _v3 = _v2?.[_v1];
          _v76(_v17, _v18)(_v3) && (_v0[_v0] = {
            ...(_v0[_v0] || {}),
            [_v1]: (0, _v4.getConfigProperty)(_v3)
          });
        } else {
          let _v0 = _v5?.[_v1];
          _v76(_v17, _v18)(_v0) && (_v0[_v1] = (0, _v4.getConfigProperty)(_v0));
        }
        return _v0;
      }, {});
      return !_v41(_v6) && (Reflect.set(_v0, "config", [_v4, _v6]), !0);
    },
    _v20 = _v0 => _v0 => {
      if (_v41(_v0)) return {};
      let _v1 = _v11(_v0);
      return Object.keys(_v0).reduce((_v0, _v1) => (_v1.includes(_v1) || (_v0[_v1] = _v0[_v1]), _v0), {});
    },
    _v21 = (_v0, _v1, _v2) => {
      if ("brandColor" === _v1 && Array.isArray(_v2)) {
        let _v0 = _v2[1].split("#").pop();
        return Reflect.set(_v0, _v1, [_v2[0], _v0]), !0;
      }
      return !1;
    },
    _v22 = (_v0, _v1) => (_v0, _v1, _v2) => !!(_v1 !== _v9.AppearanceLayoutEnum.LIVE && !_v0 && _v8.RESTRICT_UPGRADE_FIELDS.includes(_v1)) && (Reflect.set(_v0, _v1, null), !0),
    _v23 = _v0 => (_v0, _v1, _v2) => !_v11(_v0).includes(_v1) && !!Array.isArray(_v2) && _v2.length > 1 && "showNav" === _v1 && (Reflect.set(_v0, "hideNav", [!_v2[0], !_v2[1]]), !0),
    _v24 = _v0 => (_v0, _v1, _v2) => !_v11(_v0).includes(_v1) && !!Array.isArray(_v2) && _v2.length > 1 && "showVimeoLogo" === _v1 && (Reflect.set(_v0, "hideVimeoLogo", [!_v2[0], !_v2[1]]), !0),
    _v25 = _v0 => !!_v0 && _v8.HEX_6DIGIT_REGEX.test(_v0),
    _v26 = (_v0, _v1) => _v0 && (_v1?.baseLink || _v1?.sizes?.[_v1.sizes.length - 1]?.link) || "",
    _v27 = (_v0, _v1) => _v0 && _v1?.sizes?.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", ") || "",
    _v28 = _v0 => _v0?.sizes?.length && (_v0.sizes[_v0.sizes.length - 1]?.link || _v0.sizes[_v8.THUMBNAIL_SIZE_INDEX]?.link) || "",
    _v29 = (_v0, _v1, _v2) => _v0 || _v1 || !_v2 ? [] : _v2.map(_v0 => ({
      ..._v0,
      pictures: {
        ..._v0.pictures,
        sizes: _v0.pictures.sizes.filter(({
          width: _v0
        }) => _v8.ViewerClipsAllowedPicturesSizes.includes(_v0))
      }
    })),
    _v30 = () => sessionStorage.getItem("defaultLayout") || _v9.AppearanceLayoutEnum.GRID,
    _v31 = (_v0, _v1, _v2, _v3) => _v2 === _v9.AppearanceLayoutEnum.PLAYLIST ? _v9.AppearanceLayoutEnum.PLAYLIST : !_v1 || [0, 2, 3].includes(_v3) && _v2 === _v9.AppearanceLayoutEnum.GRID ? _v9.AppearanceLayoutEnum.DEFAULT : _v69(_v0) ? _v9.AppearanceLayoutEnum.LIVE : _v9.AppearanceLayoutEnum.FEATURED,
    _v32 = () => window.innerWidth <= 800 ? _v8.FloatingUpgradeBannerTextMobile : _v8.FloatingUpgradeBannerTextDesktop,
    _v33 = (0, _v6.default)(() => {
      let _v0 = new Map(),
        _v1 = new Set(Object.keys(_v8.ALBUM_CONFIG_DEFAULTS));
      for (let [_v0, _v1] of Object.entries(_v8.ALBUM_CONFIG_DEFAULTS)) if ("object" == typeof _v1 && !_v39(_v1) && !Array.isArray(_v1) && !Object.hasOwn(_v1, _v9.ConfigItemEnum.IS_UPGRADE) && !Object.hasOwn(_v1, _v9.ConfigItemEnum.VALUE)) for (let _v0 of Object.keys(_v1)) _v0.set(_v0, _v0);
      return {
        showcaseNestedKeyMap: _v0,
        showcaseConfigSet: _v1
      };
    }),
    _v34 = (_v0, _v1, _v2) => {
      try {
        let [_v0, ..._v1] = _v0.split(".");
        if (!_v0 || 0 === _v1.length) return !1;
        let _v2 = _v1.join(".");
        if (!_v1.has(_v2)) return !1;
        let _v3 = _v2?.[_v0]?.[1] || {};
        for (let _v0 of _v1) {
          if (!Object.hasOwn(_v3, _v0)) return !1;
          _v3 = _v3[_v0];
        }
        return _v10(_v3) ? !!_v3?.[_v9.ConfigItemEnum.IS_UPGRADE] : _v9.ConfigItemDefaultValue.IS_UPGRADE;
      } catch {
        return !1;
      }
    },
    _v35 = _v0 => _v0 => _v0.map(_v0 => ({
      ..._v0,
      privacy: {
        ..._v0.privacy,
        download: _v0 || !!_v0.privacy.download
      }
    })),
    _v36 = {
      unlisted: {
        title: (0, _v7.translate)({
          singular: "Unlisted",
          dictionary: {
            es: {
              singular: "Sin listar"
            },
            "de-DE": {
              singular: "Nicht gelistet"
            },
            "fr-FR": {
              singular: "Non répertorié"
            },
            "ja-JP": {
              singular: "限定公開"
            },
            "ko-KR": {
              singular: "일부 공개"
            },
            "pt-BR": {
              singular: "Não listado"
            },
            "zh-CN": {
              singular: "未公开发布"
            }
          }
        })
      },
      password: {
        title: (0, _v7.translate)({
          singular: "Password",
          dictionary: {
            es: {
              singular: "Contraseña"
            },
            "de-DE": {
              singular: "Kennwort"
            },
            "fr-FR": {
              singular: "Mot de passe "
            },
            "ja-JP": {
              singular: "パスワード"
            },
            "ko-KR": {
              singular: "비밀번호"
            },
            "pt-BR": {
              singular: "Senha"
            },
            "zh-CN": {
              singular: "密码"
            }
          }
        }),
        description: (0, _v7.translate)({
          singular: "Not available on embeds",
          dictionary: {
            es: {
              singular: "No disponible en inserciones"
            },
            "de-DE": {
              singular: "Nicht verfügbar für Einbettungen"
            },
            "fr-FR": {
              singular: "Non disponible sur les intégrations"
            },
            "ja-JP": {
              singular: "埋め込みでは利用できません"
            },
            "ko-KR": {
              singular: "임베드에서는 사용할 수 없습니다."
            },
            "pt-BR": {
              singular: "Não disponível em incorporações"
            },
            "zh-CN": {
              singular: "无法用于嵌入"
            }
          }
        }),
        longDescription: (0, _v7.translate)({
          singular: "Not visible when embedded because privacy is set to Password",
          dictionary: {
            es: {
              singular: "No es visible cuando está insertado porque la privacidad está configurada en la opción Contraseña"
            },
            "de-DE": {
              singular: "Nicht sichtbar, wenn eingebettet, da die Datenschutzeinstellung auf „Passwort“ gesetzt ist."
            },
            "fr-FR": {
              singular: "Non visible lorsqu'elle est intégrée, car la confidentialité est définie sur « Mot de passe »."
            },
            "ja-JP": {
              singular: "プライバシーが「パスワード」に設定されているため、埋め込み時には表示されません。"
            },
            "ko-KR": {
              singular: "개인정보 설정이 비밀번호로 지정되어 있어, 임베드되는 경우 표시되지 않습니다."
            },
            "pt-BR": {
              singular: "Não visível em incorporações com privacidade definida como Senha"
            },
            "zh-CN": {
              singular: "嵌入时不可见，因为隐私设置为密码"
            }
          }
        })
      },
      disable: {
        title: (0, _v7.translate)({
          singular: "Embed only",
          dictionary: {
            es: {
              singular: "Solo incrustado"
            },
            "de-DE": {
              singular: "Nur Einbetten"
            },
            "fr-FR": {
              singular: "Intégration uniquement"
            },
            "ja-JP": {
              singular: "埋め込みのみ"
            },
            "ko-KR": {
              singular: "임베드 전용"
            },
            "pt-BR": {
              singular: "Somente incorporado"
            },
            "zh-CN": {
              singular: "仅限嵌入"
            }
          }
        }),
        description: (0, _v7.translate)({
          singular: "Only available on embeds",
          dictionary: {
            es: {
              singular: "Solo disponible en inserciones"
            },
            "de-DE": {
              singular: "Nur in einbetten verfügbar"
            },
            "fr-FR": {
              singular: "Disponible uniquement sur les intégrations"
            },
            "ja-JP": {
              singular: "埋め込みでのみ利用可能"
            },
            "ko-KR": {
              singular: "임베드에서만 사용 가능합니다."
            },
            "pt-BR": {
              singular: "Disponível apenas em incorporações"
            },
            "zh-CN": {
              singular: "仅在嵌入中可用"
            }
          }
        }),
        longDescription: (0, _v7.translate)({
          singular: "Only visible when embedded because privacy is set to Embed only",
          dictionary: {
            es: {
              singular: "Solo visible cuando está incrustado porque la privacidad está configurada como Solo incrustar"
            },
            "de-DE": {
              singular: "Nur sichtbar, wenn eingebettet, da die Privatsphäre auf „Nur Einbetten“ gesetzt ist"
            },
            "fr-FR": {
              singular: "Visible uniquement lorsqu'il est intégré car la confidentialité est réglée sur Embed only"
            },
            "ja-JP": {
              singular: "プライバシーが「埋め込みのみ」に設定されているため、埋め込まれたときにのみ表示されます"
            },
            "ko-KR": {
              singular: "프라이버시가 'Embed only'로 설정되어 있어 임베드될 때만 표시됩니다"
            },
            "pt-BR": {
              singular: "Visível apenas quando incorporado porque a privacidade está definida como Embed only"
            },
            "zh-CN": {
              singular: "仅在嵌入时可见，因为隐私设置为“仅嵌入”"
            }
          }
        })
      },
      nobody: {
        title: (0, _v7.translate)({
          singular: "Private",
          dictionary: {
            es: {
              singular: "Privado"
            },
            "de-DE": {
              singular: "Privat"
            },
            "fr-FR": {
              singular: "Privé"
            },
            "ja-JP": {
              singular: "プライベート"
            },
            "ko-KR": {
              singular: "비공개"
            },
            "pt-BR": {
              singular: "Privado"
            },
            "zh-CN": {
              singular: "私密"
            }
          }
        })
      },
      anybody: {
        title: (0, _v7.translate)({
          singular: "Public",
          dictionary: {
            es: {
              singular: "Público"
            },
            "de-DE": {
              singular: "Öffentlich"
            },
            "ja-JP": {
              singular: "一般公開"
            },
            "ko-KR": {
              singular: "공개"
            },
            "pt-BR": {
              singular: "Público"
            },
            "zh-CN": {
              singular: "公开"
            }
          }
        })
      }
    },
    _v37 = {
      UPCOMING: (0, _v7.translate)({
        singular: "Upcoming",
        dictionary: {
          es: {
            singular: "PRÓXIMAMENTE"
          },
          "de-DE": {
            singular: "IN KÜRZE"
          },
          "fr-FR": {
            singular: "À VENIR"
          },
          "ja-JP": {
            singular: "近日配信"
          },
          "ko-KR": {
            singular: "예정"
          },
          "pt-BR": {
            singular: "EM BREVE"
          },
          "zh-CN": {
            singular: "即将上线"
          }
        }
      }),
      LIVE: (0, _v7.translate)({
        singular: "Live",
        dictionary: {
          es: {
            singular: "En vivo"
          },
          "fr-FR": {
            singular: "Direct"
          },
          "ja-JP": {
            singular: "ライブ"
          },
          "ko-KR": {
            singular: "라이브"
          },
          "pt-BR": {
            singular: "Ao vivo"
          },
          "zh-CN": {
            singular: "直播"
          }
        }
      }),
      COMPLETED: (0, _v7.translate)({
        singular: "Completed",
        dictionary: {
          es: {
            singular: "COMPLETADO"
          },
          "de-DE": {
            singular: "ABGESCHLOSSEN"
          },
          "fr-FR": {
            singular: "TERMINÉ"
          },
          "ja-JP": {
            singular: "完了"
          },
          "ko-KR": {
            singular: "종료됨"
          },
          "pt-BR": {
            singular: "CONCLUÍDO"
          },
          "zh-CN": {
            singular: "已完成"
          }
        }
      }),
      STREAMING: "streaming",
      ENDED: "ended",
      DONE: "done"
    };
  _v0.s(["LIVE_EVENT_STATE", 0, _v37, "PrivacyMap", 0, _v36], 0);
  let _v38 = _v0 => {
      let _v1 = "/" + (_v0.split("/").pop() || "");
      return ![_v9.ShowcaseRouteMap.LIST, _v9.ShowcaseRouteMap.WEB_LAYOUT].includes(_v1);
    },
    _v39 = _v0 => null == _v0,
    _v40 = _v0 => !_v39(_v0) && "object" == typeof _v0 && !Array.isArray(_v0),
    _v41 = (_v0, _v1 = !0) => null == _v0 || (Array.isArray(_v0) ? 0 === _v0.length : _v0 instanceof Map || _v0 instanceof Set ? 0 === _v0.size : "object" == typeof _v0 ? 0 === Object.keys(_v0).length : "string" == typeof _v0 ? 0 === _v0.trim().length : _v1 && "number" == typeof _v0 ? isNaN(_v0) || 0 === _v0 : "boolean" == typeof _v0 && !1 === _v0),
    _v42 = (_v0, _v1) => !(_v39(_v0) || _v39(_v1)) && typeof _v0 == typeof _v1 && ("object" == typeof _v0 && "object" == typeof _v1 ? JSON.stringify(_v0) === JSON.stringify(_v1) : _v0 === _v1),
    _v43 = _v0 => {
      if (_v41(_v0)) return "";
      let _v1 = _v0.split("/").pop() || "";
      switch ("/" + _v1) {
        case _v9.ShowcaseRouteMap.ROKU_TV_APPS:
        case _v9.ShowcaseRouteMap.AMAZON_TV_APPS:
          return _v9.SideDrawerHeaderKeyEnum.TV_APPS;
        default:
          return _v1;
      }
    },
    _v44 = _v0 => (_v0, _v1, _v2) => {
      if (Array.isArray(_v2) && _v2.length > 1 && "seoKeywords" === _v1) {
        let _v0 = {
          add: [],
          remove: []
        };
        return _v41(_v0.addSeoKeywords) || (_v0.add = _v0.addSeoKeywords[1].map(_v0 => _v0.text)), _v41(_v0.removeSeoKeywords) || (_v0.remove = _v0.removeSeoKeywords[1]), !(_v41(_v0.add) && _v41(_v0.remove)) && (Reflect.set(_v0, _v1, [{
          add: [],
          remove: []
        }, _v0]), !0);
      }
      return !1;
    },
    _v45 = (_v0, _v1, _v2) => !!Array.isArray(_v2) && _v2.length > 1 && (Reflect.set(_v0, _v1, _v2), !0),
    _v46 = (_v0, _v1) => {
      let _v2,
        _v3 = new Proxy({}, {
          set: (_v2 = _v41(_v1) ? [_v45] : [..._v1, _v45], (_v0, _v1, _v2) => {
            for (let _v0 of _v2) if (_v0(_v0, _v1, _v2)) return !0;
            return !1;
          })
        });
      for (let [_v0, _v1] of Object.entries(_v0)) _v3[_v0] = _v1;
      return _v3;
    },
    _v47 = (_v0, _v1, _v2) => _v2.reduce((_v0, _v1) => ((_v0, _v1, _v2) => {
      if (!_v2.includes(".")) return _v1;
      let [_v3, _v4] = _v2.split("."),
        {
          deltaKeys: _v5
        } = _v0.commonStore;
      if (!new Set(_v5.map(_v0 => _v0.split(".")[0])).has(_v3) || !_v41(_v1[_v4])) return _v1;
      let _v6 = _v0[_v3][_v4];
      return {
        ..._v1,
        [_v4]: [_v6, _v6]
      };
    })(_v0, _v0, _v1), _v1),
    _v48 = _v0 => ![_v9.ShowcaseTVAppsPrivacyView.ANYBODY, _v9.ShowcaseTVAppsPrivacyView.DISABLE, _v9.ShowcaseTVAppsPrivacyView.STOCK].includes(_v0.privacy.view),
    _v49 = (_v0, _v1, _v2) => {
      let _v3 = _v0.user.uri !== _v1.userUri && _v0.user.uri !== `/users/${_v2.ownerId}`,
        _v4 = _v0.privacy.embed === _v9.ShowcaseTVAppsPrivacy.PRIVATE;
      return _v3 || _v48(_v0) || _v4;
    },
    _v50 = (_v0, _v1) => _v0 => {
      _v41(_v1?.[_v0]?.[1]) || (_v0[_v0] = _v1[_v0][1]);
    },
    _v51 = (_v0, _v1, _v2) => {
      let _v3 = Object.keys(_v1).filter(_v0 => "actions" !== _v0),
        _v4 = [_v0 => {
          _v0 in _v8.fallBackStore && _v41(_v0[_v0], !1) && (_v0[_v0] = _v8.fallBackStore[_v0]);
        }, _v0 => {
          _v3.includes(_v0) && (_v1[_v0] = _v0[_v0]);
        }, ..._v2];
      Object.keys(_v0).forEach(_v0 => {
        _v4.forEach(_v0 => _v0(_v0));
      });
    },
    _v52 = (_v0, _v1, _v2) => {
      _v51(_v0, _v1, [_v0 => {
        if ("user" === _v0) {
          let _v0, _v1;
          _v0 = _v0.user, _v1.showcaseOwnerId = _v41(_v1 = _v0?.uri?.split("/").pop()) ? 0 : Number(_v1);
        }
      }, _v0 => {
        if ("allowedPrivacies" !== _v0 || _v39(_v0.allowedPrivacies)) return;
        let _v1 = _v0.allowedPrivacies;
        _v1.allowedPrivacies = Array.isArray(_v0.allowedPrivacies) ? _v1 : [];
      }, _v0 => {
        if ("metadata" !== _v0) return;
        let {
          interactions: _v1,
          connections: _v2
        } = _v0.metadata;
        _v1.metadataInteractionsDeleteUri = _v1?.delete?.uri || "", _v1.metadataInteractionsAddVideosUri = _v1?.addVideos?.uri ?? "", _v1.metadataInteractionsAddLiveEventsUri = _v1?.addLiveEvents?.uri || "", _v1.metadataInteractionsEditLiveEventsUri = _v1?.editLiveEvents?.uri || "", _v1.metadataInteractionsCanUpdatePrivacyToPublic = _v1?.canUpdatePrivacyToPublic || {}, _v1.metadataConnectionsVideosTotal = _v2?.videos?.total || 0;
      }, _v50(_v1, _v2)]);
    },
    _v53 = (_v0, _v1, _v2) => {
      _v51(_v0, _v1, [_v0 => {
        "hideVimeoLogo" === _v0 && (_v1.showVimeoLogo = !_v0[_v0]);
      }, _v0 => {
        "hideNav" === _v0 && (_v1.showNav = !_v0.hideNav);
      }, _v0 => {
        "hasFeaturedContent" === _v0 && (_v1.defaultHasFeaturedContent = _v0.hasFeaturedContent);
      }, _v0 => {
        if ("config" !== _v0) return;
        let _v1 = _v0.config;
        _v1.showVideoDetails = !!(0, _v4.getConfigProperty)(_v1?.showVideoDetails), _v1.showVideoPlayerCards = !!(0, _v4.getConfigProperty)(_v1?.showVideoPlayerCards);
      }, _v0 => {
        if ("config" === _v0) try {
          let _v0 = _v1?.albumConfig,
            _v1 = _v0?.config;
          if (_v41(_v1)) return;
          if (_v41(_v0)) {
            _v1.albumConfig = _v1;
            return;
          }
          if (_v42(_v0, _v1)) return;
          let _v2 = {
            ..._v0
          };
          for (let _v0 in _v1) {
            if (!Object.prototype.hasOwnProperty.call(_v1, _v0)) continue;
            let _v0 = _v1[_v0],
              _v1 = _v0[_v0];
            _v39(_v0) || (_v40(_v1) && _v40(_v0) ? _v2[_v0] = {
              ..._v1,
              ..._v0
            } : _v2[_v0] = _v0);
          }
          _v1.albumConfig = _v2;
        } catch (_v0) {
          return;
        }
      }, _v50(_v1, _v2)]);
    },
    _v54 = (_v0, _v1, _v2, _v3) => {
      _v51(_v0, _v1, [_v0 => {
        if ("rokuProviderName" !== _v0) return;
        let _v1 = _v2?.name || "";
        _v1.rokuProviderName = _v41(_v0[_v0]) ? _v1 : _v0[_v0];
      }, _v0 => {
        if ("rokuLanguage" !== _v0) return;
        let _v1 = _v2?.locale || "en";
        _v1.rokuLanguage = _v41(_v0[_v0]) ? _v1 : _v0[_v0];
      }, _v50(_v1, _v3)]);
    },
    _v55 = (_v0, _v1, _v2) => {
      _v51(_v0, _v1, [_v50(_v1, _v2)]);
    },
    _v56 = (_v0, _v1, _v2) => {
      _v51(_v0, _v1, [_v50(_v1, _v2)]);
    },
    _v57 = (..._v0) => _v0 => _v0.reduce((_v0, _v1) => _v1(_v0), _v0),
    _v58 = (_v0, _v1, _v2) => {
      if (_v41(_v0?.[_v2])) return !0;
      let _v3 = (_v0?.[_v2])[1];
      return !!_v41(_v3) || !(_v3.length > _v1);
    },
    _v59 = (_v0, _v1) => !!_v41(_v0?.[_v1]) || !_v41((_v0?.[_v1])[1]),
    _v60 = _v0 => _v0 => {
      if (!Array.isArray(_v0) || _v0.some(_v0 => "function" != typeof _v0)) throw TypeError("Predicates must be an array of functions.");
      if ("object" != typeof _v0 || _v39(_v0) || Array.isArray(_v0)) throw TypeError("Delta must be a non-null object.");
      return _v0.every(_v0 => _v0(_v0)) ? _v0 : {};
    },
    _v61 = _v0 => (0, _v7.translate)({
      singular: "Use fewer than {CHARACTERLIMIT} characters.",
      replacements: {
        CHARACTERLIMIT: _v0
      },
      dictionary: {
        es: {
          singular: "Utilice menos de {CHARACTERLIMIT} caracteres."
        },
        "de-DE": {
          singular: "Verwenden Sie weniger als {CHARACTERLIMIT} Zeichen."
        },
        "fr-FR": {
          singular: "Utilisez moins de {CHARACTERLIMIT} caractères."
        },
        "ja-JP": {
          singular: "{CHARACTERLIMIT}文字未満を使用してください。"
        },
        "ko-KR": {
          singular: "{CHARACTERLIMIT}자 미만을 사용하세요."
        },
        "pt-BR": {
          singular: "Use menos de {CHARACTERLIMIT} caracteres."
        },
        "zh-CN": {
          singular: "使用少于 {CHARACTERLIMIT} 个字符。"
        }
      }
    }),
    _v62 = (_v0, _v1) => {
      if ("object" != typeof _v0 || null === _v0) return {};
      let _v2 = {};
      for (let _v0 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v0) && _v0 !== _v1 && (_v2[_v0] = _v0[_v0]);
      return _v2;
    },
    _v63 = (_v0, _v1) => {
      let _v2 = _v0?.current?.querySelector("iframe");
      _v2?.contentWindow?.postMessage({
        type: "UPDATE_EMBED_SETTINGS",
        payload: _v1
      }, window.location.href);
    },
    _v64 = _v0 => {
      let _v1 = _v0?.current?.querySelector("iframe");
      if (!_v1) return;
      let _v2 = _v1.src;
      _v1.src = _v2;
    },
    _v65 = _v0 => _v0?.sizes?.[0]?.link ?? _v0?.baseLink ?? "",
    _v66 = _v0 => _v8.KNOWN_PLAYER_ORIGINS.some(_v0 => _v0?.origin?.endsWith?.(_v0)),
    _v67 = _v0 => !_v39(_v0) && _v0.length <= _v8.PASSWORD_MAX_LENGTH && _v0 === _v0.trim(),
    _v68 = async (_v0, _v1 = {}) => {
      let _v2,
        {
          fetchOptions: _v3,
          defaultFilename: _v4 = "logo"
        } = _v1,
        _v5 = {
          mode: "cors",
          credentials: "same-origin",
          ..._v3
        };
      if (!_v0 || "string" != typeof _v0) throw Error("URL is required and must be a string");
      try {
        _v2 = new URL(_v0);
      } catch {
        throw Error("Invalid URL format");
      }
      try {
        let _v0 = await fetch(_v2.toString(), _v5);
        if (!_v0.ok) throw Error(`Failed to fetch file: ${_v0.status} ${_v0.statusText}`);
        let _v1 = await _v0.blob(),
          _v2 = _v2.pathname,
          _v3 = _v2.split("/").pop()?.split("?")[0] || "",
          _v4 = _v1.type || "application/octet-stream",
          _v5 = _v4.includes("/") ? _v4.split("/")[1] : "",
          _v6 = _v3 || (_v5 ? `${_v4}.${_v5}` : _v4);
        return new File([_v1], _v6, {
          type: _v4
        });
      } catch (_v0) {
        if (_v0 instanceof Error) throw Error(`Download failed: ${_v0.message}`);
        throw Error("Download failed: Unknown error occurred");
      }
    },
    _v69 = _v0 => _v0?.type === _v9.VideoType.LIVE && !!_v0?.live && _v0.live.status !== _v37.DONE,
    _v70 = (_v0, _v1, _v2) => _v0.some(_v0 => {
      let _v1 = _v0.split("/").filter(_v0 => "" !== _v0);
      return 2 === _v1.length ? _v1[0] === _v1 && _v1[1] === _v2 : _v1[0] === _v2;
    }),
    _v71 = _v0 => _v39(_v0) ? "" : _v0?.split("/").slice(-2, -1)[0] || "",
    _v72 = _v0 => _v39(_v0) ? "" : _v0?.split("/").pop() || "",
    _v73 = (_v0, _v1 = "") => {
      if ("object" != typeof _v0 || null === _v0 || Array.isArray(_v0)) return _v1 ? [_v1] : [];
      let _v2 = [];
      return Object.keys(_v0).forEach(_v0 => {
        let _v1 = _v0[_v0],
          _v2 = _v1 ? `${_v1}.${_v0}` : _v0;
        "object" != typeof _v1 || null === _v1 || Array.isArray(_v1) ? _v2.push(_v2) : _v2 = _v2.concat(_v73(_v1, _v2));
      }), _v2;
    },
    _v74 = (_v0, _v1, _v2) => {
      let _v3 = _v0;
      for (let _v0 of _v1.slice(1)) if (!(_v3 && Object.hasOwn(_v3, _v0))) return;else _v3 = _v3?.[_v0];
      _v3 && (_v3.value = _v2);
    };
  function _v75(..._v0) {
    return _v0 => _v0.every(_v0 => _v0(_v0));
  }
  function _v76(..._v0) {
    return _v0 => _v0.some(_v0 => _v0(_v0));
  }
  let _v77 = (0, _v6.default)((_v0, _v1 = "") => _v41(_v0) ? {} : Object.entries(_v0).reduce((_v0, [_v1, _v2]) => ("object" == typeof _v2 && null !== _v2 && "isUpgrade" in _v2 ? _v0[`is${_v1}${_v1.charAt(0).toUpperCase() + _v1.slice(1)}PremiumFeature`] = _v2.isUpgrade || !1 : "object" == typeof _v2 && null !== _v2 && Object.assign(_v0, _v77(_v2, _v1 + _v1.charAt(0).toUpperCase() + _v1.slice(1))), _v0), {}), (_v0, _v1 = "") => `${JSON.stringify(_v0)}_${_v1}`),
    _v78 = (_v0, _v1, _v2, _v3) => {
      _v2 && _v3.push({
        attribute: _v0,
        defaultValue: _v1
      });
    },
    _v79 = (0, _v6.default)(_v0 => {
      if (!_v0 || "object" != typeof _v0) return {
        PremiumConfigFieldsList: [],
        ResetConfigStoreFields: []
      };
      let {
        showcaseNestedKeyMap: _v1,
        showcaseConfigSet: _v2
      } = _v33();
      if (!_v2 || !_v1) return {
        PremiumConfigFieldsList: [],
        ResetConfigStoreFields: []
      };
      let _v3 = _v9.NestedStoreKeyEnum.ALBUM_CONFIG,
        _v4 = [];
      for (let _v0 of _v2) {
        if (!_v0 || "string" != typeof _v0) continue;
        let _v0 = (0, _v4.getConfigProperty)(_v8.ALBUM_CONFIG_DEFAULTS?.[_v0]),
          _v1 = !!(0, _v4.getConfigProperty)(_v0?.[_v0], _v9.ConfigItemEnum.IS_UPGRADE);
        _v78(`${_v3}.${_v0}`, _v0, _v1, _v4);
      }
      for (let [_v0, _v1] of _v1) {
        if (!_v0 || !_v1 || "string" != typeof _v0 || "string" != typeof _v1) continue;
        let _v0 = (0, _v4.getConfigProperty)(_v8.ALBUM_CONFIG_DEFAULTS?.[_v1]?.[_v0]),
          _v1 = !!(0, _v4.getConfigProperty)(_v0?.[_v1]?.[_v0], _v9.ConfigItemEnum.IS_UPGRADE);
        _v78(`${_v3}.${_v1}.${_v0}`, _v0, _v1, _v4);
      }
      return {
        PremiumConfigFieldsList: _v4.map(_v0 => _v0.attribute),
        ResetConfigStoreFields: _v4
      };
    }, _v0 => JSON.stringify(_v0)),
    _v80 = () => {
      let _v0 = window.innerWidth;
      return _v0 >= _v8.BREAKPOINT_XL ? _v8.SIDEBAR_CONSTRAINTS.MAX_WIDTH : _v0 >= _v8.BREAKPOINT_LG ? _v8.SIDEBAR_CONSTRAINTS.MAX_WIDTH_LG : _v8.SIDEBAR_CONSTRAINTS.MIN_WIDTH;
    },
    _v81 = (_v0, _v1) => _v41(_v0) ? _v41(_v1) ? 0 : _v1.length : _v0,
    {
      showcaseConfigSet: _v82,
      showcaseNestedKeyMap: _v83
    } = _v33();
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = (_v0, _v1, _v2) => {
    if ("privacy" !== _v1 || !Array.isArray(_v2) || 2 !== _v2.length || _v41(_v2[0]) || _v41(_v2[1])) return !1;
    let _v3 = _v2[0],
      _v4 = _v2[1];
    return Reflect.set(_v0, _v1, [_v3?.view, _v4?.view]), _v4?.view === _v86.EVENT_PRIVACY_VALUES.PASSWORD && Reflect.set(_v0, "password", [_v3?.password, _v4?.password || ""]), !0;
  };
  _v0.s(["isInfoDescriptionValid", 0, _v0 => _v58(_v0, _v9.ShowcaseFormMaxCharLength.INFO_DESCRIPTION, "description"), "isInfoTitleValid", 0, _v0 => _v58(_v0, _v9.ShowcaseFormMaxCharLength.INFO_TITLE, "name"), "isPrivacyValid", 0, _v0 => {
    let _v1 = _v0?.privacy;
    if (!_v1) return !0;
    if (!Array.isArray(_v1) || 0 === _v1.length) return !1;
    if (_v1[1]?.view === _v86.EVENT_PRIVACY_VALUES.PASSWORD) {
      let _v0 = _v1[1]?.password;
      return "string" == typeof _v0 && !_v41(_v0) && _v67(_v0);
    }
    return !0;
  }, "setPrivacyHandler", 0, _v87], 0);
  let _v88 = () => ({
    nodes: {},
    headId: null,
    tailId: null,
    pointerId: null
  });
  var _v89 = _v0.i(0);
  let _v90 = (0, _v1.create)()((0, _v2.devtools)((0, _v3.immer)((_v0, _v1) => ({
    commonStore: {
      isDesktopView: null,
      actionType: _v9.ShowcaseActionTypeEnum.NOACTION,
      capabilities: {},
      teamConfig: {},
      sidebarWidth: _v8.SIDEBAR_CONSTRAINTS.DEFAULT_WIDTH,
      deltaValues: {},
      deltaKeys: [],
      embed: {
        html: null
      },
      isModalOpen: !1,
      isSearchOpen: !1,
      isSideNavOpen: !1,
      focusType: null,
      link: "",
      allowedPrivacies: [],
      metadataConnectionsVideosTotal: 0,
      metadataInteractionsDeleteUri: "",
      metadataInteractionsAddVideosUri: "",
      metadataInteractionsAddLiveEventsUri: "",
      metadataInteractionsEditLiveEventsUri: "",
      metadataInteractionsCanUpdatePrivacyToPublic: {},
      modalType: null,
      mutateShowcaseData: async () => void 0,
      showcaseConfig: _v8.defaultShowcaseConfig,
      showcaseOwnerId: 0,
      privacy: {},
      url: null,
      sort: "",
      isSaveLoading: !1,
      trackNestedKeys: {},
      upsellModalFeatureName: "",
      actions: {
        getDeltaChanges: () => {
          let _v0 = _v1(),
            {
              deltaValues: _v1,
              capabilities: _v2,
              trackNestedKeys: _v3
            } = _v1().commonStore,
            {
              layout: _v4
            } = _v1().appearanceStore;
          return _v46(_v47(_v0, _v1, _v8.DeltaMandatoryFields), [_v44(_v1), _v21, _v87, _v13, _v19(_v3), _v22(_v2.canCustomizeAlbums, _v4), _v23(_v4), _v24(_v4), _v12(_v4)]);
        },
        getFeatureFlag: (_v0, _v1 = !0, _v2 = !0) => {
          let _v3 = _v1().commonStore.showcaseConfig?.user?.badge?.type,
            _v4 = (0, _v4.isCI)(),
            _v5 = "staff" === _v3;
          _v4 && (_v5 = !0);
          let _v6 = (0, _v85.shouldShowInDevelopmentFeature)(_v0, _v2);
          return _v1 ? _v5 && _v6 : _v6;
        },
        setIsDesktopView: _v0 => _v0(_v0 => {
          _v0.commonStore.isDesktopView = _v0;
        }),
        setCapabilities: _v0 => _v0(_v0 => {
          _v0.commonStore.capabilities = _v0;
        }),
        setCloseModal: () => _v0(_v0 => {
          _v0.commonStore.isModalOpen = !1, _v0.commonStore.modalType = null;
        }),
        setIsSearchOpen: _v0 => _v0(_v0 => {
          _v0.commonStore.isSearchOpen = _v0;
        }),
        setIsSideNavOpen: _v0 => _v0(_v0 => {
          _v0.commonStore.isSideNavOpen = _v0;
        }),
        setMutateShowcaseData: _v0 => _v0(_v0 => {
          _v0.commonStore.mutateShowcaseData = _v0;
        }),
        setOpenModal: _v0 => _v0(_v0 => {
          _v0.commonStore.modalType = _v0, _v0.commonStore.isModalOpen = !0;
        }),
        setFocusType: (_v0 = null) => {
          _v0(_v0 => {
            _v0.commonStore.focusType = _v0;
          });
        },
        setTeamConfig: _v0 => _v0(_v0 => {
          _v0.commonStore.teamConfig = _v0;
        }),
        setShowcaseConfig: _v0 => _v0(_v0 => {
          _v0.commonStore.showcaseConfig = _v0;
        }),
        setCommonData: _v0 => {
          _v0(_v0 => {
            _v52(_v0, _v0.commonStore, _v1().commonStore.deltaValues);
          });
        },
        setDeltaKeys: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.deltaKeys = _v0;
          });
        },
        setDeltaValues: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.deltaValues = _v0;
          });
        },
        setIsSaveLoading: _v0 => _v0(_v0 => {
          _v0.commonStore.isSaveLoading = _v0;
        }),
        setPrivacy: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseCommonActionTypeEnum.COMMONSTORE_PRIVACY, _v0.commonStore.privacy = _v0;
        }),
        setTrackNestedKeys: (_v0, _v1) => _v0(_v0 => {
          _v0.commonStore.trackNestedKeys[_v0] = _v1;
        }),
        updateDeltaChanges: (_v0, _v1, _v2) => {
          _v0(_v0 => {
            let _v1 = _v0.split(".")[1],
              _v2 = _v1().commonStore.deltaValues[_v1];
            if (_v2) {
              let [_v0] = _v2;
              if (_v42(_v0, _v2)) {
                let _v0 = _v1().commonStore.deltaKeys.indexOf(_v0);
                _v0 > -1 && _v0.commonStore.deltaKeys.splice(_v0, 1), delete _v0.commonStore.deltaValues[_v1];
              } else _v1().commonStore.deltaKeys.includes(_v0) || _v0.commonStore.deltaKeys.push(_v0), _v0.commonStore.deltaValues[_v1][1] = _v2;
            } else _v0.commonStore.deltaKeys.push(_v0), _v0.commonStore.deltaValues[_v1] = [_v1, _v2];
            _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION;
          });
        },
        resetStoreValues: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.deltaKeys.forEach(_v0 => {
              let [_v1, _v2] = _v0.split(".");
              _v0.filter(_v0 => {
                let _v1 = _v0.attribute.split(".");
                return _v1.length > 1 ? _v1[0] === _v2 : _v0.attribute === _v2;
              }).forEach(_v0 => {
                if (_v0.hasOwnProperty(_v1) && !_v39(_v0)) {
                  let _v0 = _v0?.attribute?.split(".") ?? [];
                  if (_v0?.length > 1) {
                    let _v0 = _v0[_v1][_v2];
                    _v74(_v0, _v0, _v0?.defaultValue), _v0[_v1][_v2] = _v0;
                  } else _v0[_v1][_v2] = _v0?.defaultValue;
                }
              });
            });
          });
        },
        resetDeltaValues: _v0 => _v0(_v0 => {
          if (_v0 === _v9.ResetTypeEnum.CANCELLED) {
            let _v0 = _v1().commonStore.deltaKeys,
              _v1 = _v1().commonStore.deltaValues;
            _v0.forEach(_v0 => {
              let [_v1, _v2] = _v0.split(".");
              _v0.hasOwnProperty(_v1) && (_v0[_v1][_v2] = _v1[_v2][0]);
            });
          }
          _v0.commonStore.deltaValues = {}, _v0.commonStore.deltaKeys = [], _v0.commonStore.trackNestedKeys = {};
        }),
        updateStoreAttribute: (_v0, _v1) => {
          _v0(_v0 => {
            if (!_v41(_v0) && !_v39(_v1)) {
              let [_v0, _v1] = _v0.split(".");
              _v0[_v0][_v1] = _v1;
            }
          });
        },
        setSidebarWidth: _v0 => _v0(_v0 => {
          _v0.commonStore.sidebarWidth = (0, _v84.default)(_v0, _v8.SIDEBAR_CONSTRAINTS.MIN_WIDTH, _v8.SIDEBAR_CONSTRAINTS.MAX_WIDTH);
        }),
        setUpsellModalFeatureName: _v0 => _v0(_v0 => {
          !_v39(_v0) && (_v41(_v0) || _v8.UPSELL_MODAL_FEATURE_NAMES.has(_v0)) && (_v0.commonStore.upsellModalFeatureName = _v0);
        }),
        updateDeltaValueDirectly: () => _v0(_v0 => {
          _v8.LIST_OF_DELTA_FIELDS_FOR_UPSERT.forEach(_v0 => {
            let [_v1, _v2] = _v0.split("."),
              _v3 = _v1()[_v1][_v2],
              _v4 = _v1().commonStore.deltaValues?.[_v2]?.[1];
            _v41(_v4) || _v4 !== _v3 || delete _v0.commonStore.deltaValues[_v2];
          });
        })
      }
    },
    infoStore: {
      name: "",
      description: "",
      actions: {
        setName: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v5.ShowcaseInfoActionTypeEnum.INFOSTORE_NAME, _v0.infoStore.name = _v0;
          });
        },
        setDescription: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v5.ShowcaseInfoActionTypeEnum.INFOSTORE_DESCRIPTION, _v0.infoStore.description = _v0;
          });
        },
        setInfoData: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v55(_v0, _v0.infoStore, _v1().commonStore.deltaValues);
          });
        }
      }
    },
    seoStore: {
      seoTitle: "",
      seoDescription: "",
      seoAllowIndexed: !1,
      seoKeywords: [],
      addSeoKeywords: [],
      removeSeoKeywords: [],
      currentKeywords: "",
      actions: {
        setSeoTitle: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseSeoActionTypeEnum.SEOSTORE_SEO_TITLE, _v0.seoStore.seoTitle = _v0;
        }),
        setSeoDescription: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v5.ShowcaseSeoActionTypeEnum.SEOSTORE_SEO_DESCRIPTION, _v0.seoStore.seoDescription = _v0;
          });
        },
        setAddSeoKeywords: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v5.ShowcaseSeoActionTypeEnum.SEOSTORE_ADD_SEO_KEYWORDS, _v0.seoStore.addSeoKeywords = _v1().seoStore.addSeoKeywords.concat(_v0);
          });
        },
        setRemoveSeoKeywords: _v0 => {
          _v0(_v0 => {
            _v0?.id && (_v0.commonStore.actionType = _v5.ShowcaseSeoActionTypeEnum.SEOSTORE_REMOVE_SEO_KEYWORDS, _v0.seoStore.removeSeoKeywords.push(_v0.id));
          });
        },
        deleteSeoKeywords: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v5.ShowcaseSeoActionTypeEnum.SEOSTORE_SEO_KEYWORDS, _v0.seoStore.seoKeywords.splice(_v0, 1);
          });
        },
        deleteAddSeoKeywords: _v0 => {
          _v0(_v0 => {
            _v0.seoStore.addSeoKeywords.length > 0 && (_v0.commonStore.actionType = _v5.ShowcaseSeoActionTypeEnum.SEOSTORE_ADD_SEO_KEYWORDS, _v0.seoStore.addSeoKeywords = _v1().seoStore.addSeoKeywords.filter(_v0 => !_v42(_v0, _v0)));
          });
        },
        setCurrentKeywords: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.seoStore.currentKeywords = _v0;
          });
        },
        setSeoKeywords: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v5.ShowcaseSeoActionTypeEnum.SEOSTORE_SEO_KEYWORDS, _v0.seoStore.seoKeywords = _v1().seoStore.seoKeywords.concat(_v0);
          });
        },
        setSeoAllowIndexed: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v5.ShowcaseSeoActionTypeEnum.SEOSTORE_SEO_ALLOW_INDEXED, _v0.seoStore.seoAllowIndexed = _v0;
          });
        },
        setSeoData: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v56(_v0, _v0.seoStore, _v1().commonStore.deltaValues), _v0.seoStore.addSeoKeywords = [], _v0.seoStore.removeSeoKeywords = [], _v0.seoStore.currentKeywords = "";
          });
        }
      }
    },
    tvAppsStore: {
      tabIdx: _v9.ShowcaseTVAppsTabIdxEnum.ROKU,
      genreSearchValue: "",
      genreValue: "",
      rokuProviderName: "",
      rokuLanguage: "",
      rokuGenres: [],
      rokuUrl: "",
      amazonUrl: "",
      actions: {
        setTabIdx: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.tvAppsStore.tabIdx = _v0;
          });
        },
        setGenreValue: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.tvAppsStore.genreValue = _v0;
          });
        },
        setGenreSearchValue: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.tvAppsStore.genreSearchValue = _v0;
          });
        },
        setRokuProviderName: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseTVAppsActionTypeEnum.TVAPPSSTORE_ROKU_PROVIDER_NAME, _v0.tvAppsStore.rokuProviderName = _v0;
        }),
        setRokuLanguage: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseTVAppsActionTypeEnum.TVAPPSSTORE_ROKU_LANGUAGE, _v0.tvAppsStore.rokuLanguage = _v0;
        }),
        setRokuGenres: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseTVAppsActionTypeEnum.TVAPPSSTORE_ROKU_GENRES, _v0.tvAppsStore.rokuGenres = _v0;
        }),
        setRokuUrl: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.tvAppsStore.rokuUrl = _v0;
        }),
        setAmazonUrl: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.tvAppsStore.amazonUrl = _v0;
        }),
        setTvAppsData: _v0 => {
          _v0(_v0 => {
            _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION;
            let _v1 = {
              name: _v1().commonStore?.showcaseConfig?.user?.name,
              locale: _v1().commonStore?.showcaseConfig?.locale
            };
            _v54(_v0, _v0.tvAppsStore, _v1, _v1().commonStore.deltaValues), _v0.tvAppsStore.genreSearchValue = "", _v0.tvAppsStore.tabIdx = _v9.ShowcaseTVAppsTabIdxEnum.ROKU, _v0.tvAppsStore.genreValue = "";
          });
        }
      }
    },
    videoListStore: {
      isSearchActive: !1,
      mutateVideoList: async () => [],
      videoList: [],
      selectedVideos: [],
      pageNumber: 1,
      liveEventToDelete: {
        uri: "",
        name: ""
      },
      sortParams: {},
      searchQuery: "",
      dragAndDrop: {
        newPosition: 0,
        videoUri: "",
        isDragging: !1
      },
      videoListCount: 0,
      videoToDeleteUri: "",
      isLiveEventAvailable: !1,
      actions: {
        setIsSearchActive: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.isSearchActive = _v0;
          });
        },
        setMutateVideoList: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.mutateVideoList = _v0;
          });
        },
        setVideos: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.videoList = _v0;
          });
        },
        selectVideo: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.selectedVideos.includes(_v0) || _v0.videoListStore.selectedVideos.push(_v0);
          });
        },
        deselectVideo: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.selectedVideos = _v0.videoListStore.selectedVideos.filter(_v0 => _v0 !== _v0);
          });
        },
        selectAllVideos: () => {
          _v0(_v0 => {
            _v0.videoListStore.selectedVideos = _v0.videoListStore.videoList.map(_v0 => _v0.uri);
          });
        },
        deselectAllVideos: () => {
          _v0(_v0 => {
            _v0.videoListStore.selectedVideos = [];
          });
        },
        setSortParams: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.sortParams = _v0;
          });
        },
        setSearchQuery: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.searchQuery = _v0;
          });
        },
        setDragAndDrop: (_v0, _v1, _v2) => {
          _v0(_v0 => {
            _v0.videoListStore.dragAndDrop.newPosition = _v0, _v0.videoListStore.dragAndDrop.videoUri = _v1, _v0.videoListStore.dragAndDrop.isDragging = _v2;
          });
        },
        setVideoListCount: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.videoListCount = _v0;
          });
        },
        setLiveEventToDelete: ({
          uri: _v0,
          name: _v1
        }) => {
          _v0(_v0 => {
            _v0.videoListStore.liveEventToDelete = {
              uri: _v0,
              name: _v1
            };
          });
        },
        setVideoToDeleteUri: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.videoToDeleteUri = _v0;
          });
        },
        setInitialSortParam: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.sortParams = (0, _v89.mapSortPrefToSortParams)(_v0.sort);
          });
        },
        setIsLiveEventAvailable: _v0 => {
          _v0(_v0 => {
            _v0.videoListStore.isLiveEventAvailable = _v0;
          });
        }
      }
    },
    appearanceStore: {
      layout: _v9.AppearanceLayoutEnum.GRID,
      theme: _v9.AppearanceThemeEnum.LIGHT,
      showNav: !1,
      showVimeoLogo: !1,
      customLogo: {},
      pictures: {},
      customThumbnail: {},
      brandColor: "",
      embedCustomLogo: !1,
      webCustomLogo: !1,
      embedBrandColor: !1,
      reloadIframe: !1,
      webBrandColor: !1,
      allowDownloads: !1,
      allowContinuousPlay: !1,
      autoplay: !1,
      loop: !1,
      allowShare: !1,
      isFeaturedContentLoading: !1,
      isSelectedVideoUpdating: !1,
      isCustomLogoLoading: !1,
      hasChosenThumbnail: !1,
      defaultHasFeaturedContent: !1,
      hasFeaturedContent: !1,
      useCustomDomain: !1,
      featuredContent: null,
      mutateFeaturedContent: null,
      isCustomPopOverActive: !1,
      isFeaturedPopOverActive: !1,
      hideUpcoming: !1,
      showVideoDetails: !1,
      showVideoPlayerCards: !1,
      thumbnailType: 0,
      legacyBannerHeight: 0,
      albumConfig: {},
      mutatePreviewVideoList: null,
      selectedBackground: null,
      actions: {
        setSelectedBackground: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.selectedBackground = _v0;
        }),
        setLayout: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_LAYOUT, _v0.appearanceStore.layout = _v0;
        }),
        setTheme: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_THEME, _v0.appearanceStore.theme = _v0;
        }),
        setUseCustomDomain: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.useCustomDomain = _v0;
        }),
        setShowNav: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_SHOW_NAV, _v0.appearanceStore.showNav = _v0;
        }),
        setShowVimeoLogo: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_SHOW_VIMEO_LOGO, _v0.appearanceStore.showVimeoLogo = _v0;
        }),
        setCustomLogo: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION;
          let _v1 = _v1().appearanceStore.customLogo;
          _v0.appearanceStore.customLogo = {
            ..._v1,
            ..._v0
          };
        }),
        setPictures: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION;
          let _v1 = _v1().appearanceStore.pictures;
          _v0.appearanceStore.pictures = {
            ..._v1,
            ..._v0
          };
        }),
        setIsFeaturedContentLoading: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.isFeaturedContentLoading = _v0;
        }),
        setIsSelectedVideoUpdating: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.isSelectedVideoUpdating = _v0;
        }),
        setIsCustomLogoLoading: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.isCustomLogoLoading = _v0;
        }),
        setBrandColor: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_BRAND_COLOR, _v0.appearanceStore.brandColor = _v0;
        }),
        setEmbedCustomLogo: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_EMBED_CUSTOM_LOGO, _v0.appearanceStore.embedCustomLogo = _v0;
        }),
        setWebCustomLogo: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_WEB_CUSTOM_LOGO, _v0.appearanceStore.webCustomLogo = _v0;
        }),
        setEmbedBrandColor: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_EMBED_BRAND_COLOR, _v0.appearanceStore.embedBrandColor = _v0;
        }),
        setReloadIframe: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.reloadIframe = _v0;
        }),
        setWebBrandColor: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_WEB_BRAND_COLOR, _v0.appearanceStore.webBrandColor = _v0;
        }),
        setAllowDownloads: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_ALLOW_DOWNLOADS, _v0.appearanceStore.allowDownloads = _v0;
        }),
        setAllowContinuousPlay: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_ALLOW_CONTINUOUS_PLAY, _v0.appearanceStore.allowContinuousPlay = _v0;
        }),
        setAutoplay: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_AUTOPLAY, _v0.appearanceStore.autoplay = _v0;
        }),
        setLoop: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_LOOP, _v0.appearanceStore.loop = _v0;
        }),
        setAllowShare: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_ALLOW_SHARE, _v0.appearanceStore.allowShare = _v0;
        }),
        setHasFeaturedContent: _v0 => {
          let {
              isSelectedVideoUpdating: _v1,
              isFeaturedContentLoading: _v2
            } = _v1().appearanceStore,
            _v3 = _v1 || _v2;
          return _v0(_v0 => {
            _v0.commonStore.actionType = _v3 ? _v9.ShowcaseActionTypeEnum.NOACTION : _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_HAS_FEATURED_CONTENT, _v0.appearanceStore.hasFeaturedContent = _v0;
          });
        },
        setFeaturedContent: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.featuredContent = _v0;
        }),
        setMutateFeaturedContent: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.mutateFeaturedContent = _v0;
        }),
        setIsCustomPopOverActive: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.isCustomPopOverActive = _v0;
        }),
        setIsFeaturedPopOverActive: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.isFeaturedPopOverActive = _v0;
        }),
        setHideUpcoming: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.hideUpcoming = _v0;
        }),
        setAppearanceData: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v53(_v0, _v0.appearanceStore, _v1().commonStore.deltaValues);
        }),
        setShowVideoDetails: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_SHOW_VIDEO_DETAILS, _v0.appearanceStore.showVideoDetails = _v0;
        }),
        setLegacyBannerHeight: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.legacyBannerHeight = _v0;
        }),
        setShowVideoPlayerCards: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_SHOW_VIDEO_PLAYER_CARDS, _v0.appearanceStore.showVideoPlayerCards = _v0;
        }),
        setThumbnailType: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_THUMBNAIL_TYPE, _v0.appearanceStore.thumbnailType = _v0;
        }),
        setAlbumConfig: _v0 => _v0(_v0 => {
          let _v1 = new Set(_v1().commonStore.trackNestedKeys?.config || []);
          _v0.commonStore.actionType = _v5.ShowcaseAppearanceActionTypeEnum.APPEARANCESTORE_ALBUM_CONFIG;
          let _v2 = _v1().commonStore.deltaValues?.albumConfig?.[0] || {};
          _v41(_v1().appearanceStore.albumConfig) && (_v0.appearanceStore.albumConfig = {}), Object.entries(_v0).forEach(([_v0, _v1]) => {
            if (_v82.has(_v0)) _v0.appearanceStore.albumConfig[_v0] = _v10(_v1().appearanceStore.albumConfig[_v0]) ? {
              ...(_v0.appearanceStore.albumConfig?.[_v0] || {}),
              value: _v1
            } : _v1, (0, _v4.getConfigProperty)(_v2?.[_v0]) === _v1 ? _v1.delete(_v0) : _v1.add(_v0);else {
              let _v0 = _v83.get(_v0);
              if (_v0) {
                _v41(_v0.appearanceStore.albumConfig?.[_v0]) && (_v0.appearanceStore.albumConfig[_v0] = {}), _v0.appearanceStore.albumConfig[_v0][_v0] = _v10(_v1().appearanceStore.albumConfig[_v0][_v0]) ? {
                  ...(_v0.appearanceStore.albumConfig?.[_v0]?.[_v0] || {}),
                  value: _v1
                } : _v1;
                let _v0 = `${_v0}.${_v0}`;
                (0, _v4.getConfigProperty)(_v2?.[_v0]?.[_v0]) === _v1 ? _v1.delete(_v0) : _v1.add(_v0);
              }
            }
          }), _v0.commonStore.trackNestedKeys.config = Array.from(_v1);
        }),
        setMutatePreviewVideoList: _v0 => _v0(_v0 => {
          _v0.commonStore.actionType = _v9.ShowcaseActionTypeEnum.NOACTION, _v0.appearanceStore.mutatePreviewVideoList = _v0;
        })
      }
    },
    timelineStore: {
      timeline: _v88(),
      actions: {
        timelinePush: (_v0, _v1, _v2) => {
          _v0(_v0 => {
            let _v1 = Date.now().toString(),
              _v2 = {
                id: _v1,
                deltaValue: _v0,
                deltaKey: _v1,
                url: _v2,
                prevId: _v0.timelineStore.timeline.tailId,
                nextId: null
              };
            _v0.timelineStore.timeline.nodes[_v1] = _v2, _v0.timelineStore.timeline.tailId ? _v0.timelineStore.timeline.nodes[_v0.timelineStore.timeline.tailId].nextId = _v1 : _v0.timelineStore.timeline.headId = _v1, _v0.timelineStore.timeline.tailId = _v1, _v0.timelineStore.timeline.pointerId = _v1;
          });
        },
        timelineGoBack: () => {
          _v0(_v0 => {
            let {
              pointerId: _v1,
              nodes: _v2
            } = _v1().timelineStore.timeline;
            _v1 && (_v0.timelineStore.timeline.pointerId = _v2[_v1].prevId || null);
          });
        },
        timelineGoForward: () => {
          _v0(_v0 => {
            let {
              pointerId: _v1,
              headId: _v2,
              nodes: _v3
            } = _v1().timelineStore.timeline;
            _v1 && _v3[_v1].nextId ? _v0.timelineStore.timeline.pointerId = _v3[_v1].nextId : _v1 || (_v0.timelineStore.timeline.pointerId = _v2);
          });
        },
        timelineCurrent: () => {
          let {
            pointerId: _v0,
            headId: _v1
          } = _v1().timelineStore.timeline;
          return _v0 ? {
            pointerId: _v0,
            data: _v1().timelineStore.timeline.nodes[_v0]
          } : _v1 ? {
            pointerId: null,
            data: _v1().timelineStore.timeline.nodes[_v1]
          } : null;
        },
        timelineReset: () => {
          _v0(_v0 => {
            _v0.timelineStore.timeline = _v88();
          });
        }
      }
    }
  })), {
    enabled: !0
  }));
  _v0.s(["useStore", 0, _v90], 0);
}