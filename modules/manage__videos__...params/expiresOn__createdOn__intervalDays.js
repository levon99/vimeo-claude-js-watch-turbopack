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
    _v10 = _v0.i(0);
  let _v11 = ["url", "expiresOn", "createdOn", "uri", "intervalDays", "hasExpiration"];
  _v0.s(["formatIntervalLabel", 0, function _v0(_v1) {
    return _v1 <= 0 ? _v0(7) : 1 === _v1 ? (0, _v4.translate)({
      singular: "Tomorrow",
      dictionary: {
        es: {
          singular: "Mañana"
        },
        "de-DE": {
          singular: "Morgen"
        },
        "fr-FR": {
          singular: "Demain"
        },
        "ja-JP": {
          singular: "明日"
        },
        "ko-KR": {
          singular: "내일"
        },
        "pt-BR": {
          singular: "Amanhã"
        },
        "zh-CN": {
          singular: "明天"
        }
      }
    }) : 7 === _v1 ? (0, _v4.translate)({
      singular: "1 week",
      dictionary: {
        es: {
          singular: "1 semana"
        },
        "de-DE": {
          singular: "1 Woche"
        },
        "fr-FR": {
          singular: "1 semaine"
        },
        "ja-JP": {
          singular: "1週間"
        },
        "ko-KR": {
          singular: "1주일"
        },
        "pt-BR": {
          singular: "1 semana"
        },
        "zh-CN": {
          singular: "1 周"
        }
      }
    }) : (0, _v4.translate)({
      singular: "{count} day",
      plural: "{count} days",
      count: _v1,
      replacements: {
        count: String(_v1)
      },
      dictionary: {
        es: {
          singular: "{count} día",
          plural: "{count} días"
        },
        "de-DE": {
          singular: "{count} Tag",
          plural: "{count} Tage"
        },
        "fr-FR": {
          singular: "{count} jour",
          plural: "{count} jours"
        },
        "ja-JP": {
          singular: "{count}日",
          plural: "{count}日"
        },
        "ko-KR": {
          singular: "{count}일",
          plural: "{count}일"
        },
        "pt-BR": {
          singular: "{count} dia",
          plural: "{count} dias"
        },
        "zh-CN": {
          singular: "{count} 天",
          plural: "{count} 天"
        }
      }
    });
  }, "useSharingLink", 0, function () {
    let _v0 = (0, _v5.useOrionSettingsFields)(["bi_expiring_links_ux_enabled", "bi_expiring_links_default_expiry_days"]),
      _v1 = !!_v0?.bi_expiring_links_ux_enabled,
      _v2 = (0, _v8.useGlobalStore)(({
        clip: _v0
      }) => _v0.clipId),
      _v3 = (0, _v1.useMemo)(() => _v1 && _v2 ? {
        where: {
          videoId: Number(_v2)
        },
        select: [..._v11]
      } : null, [_v1, _v2]),
      {
        data: _v4,
        mutate: _v5,
        isLoading: _v6
      } = (0, _v3.useGetVideoSharingLink)(_v3 ? () => _v3 : () => null),
      {
        data: _v7
      } = (0, _v7.useGetVideoSharingData)(),
      _v8 = _v7?.user?.uri ? (0, _v9.idFromUri)(_v7.user.uri) : null,
      _v9 = (0, _v6.useViewer)(),
      _v10 = !!_v9?.user?.uri && _v9.user.uri === _v7?.user?.uri,
      {
        data: _v11,
        isLoading: _v12
      } = (0, _v2.useGetUser)(() => _v1 && _v8 ? {
        where: {
          userId: _v8
        },
        select: ["preferences.videos.sharingLinkDefaultExpiryDays"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      {
        intervalDays: _v13,
        hasExpiration: _v14
      } = (0, _v10.resolveDefaultExpiry)({
        prefDays: _v11?.preferences?.videos?.sharingLinkDefaultExpiryDays ?? null,
        orionDays: _v0?.bi_expiring_links_default_expiry_days ?? 0
      }),
      [_v15, {
        data: _v16,
        loading: _v17,
        error: _v18
      }] = (0, _v3.usePostVideoSharingLink)(),
      [_v19, {
        loading: _v20,
        error: _v21
      }] = (0, _v3.usePatchVideoSharingLink)(),
      [_v22, _v23] = (0, _v1.useState)(null);
    (0, _v1.useEffect)(() => {
      _v16?.url && _v23(_v16);
    }, [_v16]), (0, _v1.useEffect)(() => {
      _v23(null);
    }, [_v2]);
    let _v24 = (0, _v1.useRef)(_v4);
    _v24.current = _v4;
    let _v25 = (0, _v1.useCallback)((_v0 = {}) => {
        if (!_v2) return;
        let _v1 = _v24.current;
        if (_v1?.url && !(_v1?.expiresOn && !1 !== _v1.hasExpiration && new Date(_v1.expiresOn).getTime() < Date.now())) return;
        let {
            intervalDays: _v2,
            intervalDaysFallback: _v3
          } = _v0,
          _v4 = {};
        void 0 !== _v2 && (_v4.intervalDays = _v2), void 0 === _v2 && void 0 !== _v3 && (_v4.intervalDaysFallback = _v3), _v15({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v11],
          variables: _v4
        });
      }, [_v2, _v15]),
      _v26 = (0, _v1.useCallback)((_v0, _v1, _v2) => {
        _v5(_v0 => _v0 ? {
          ..._v0,
          expiresOn: _v0,
          intervalDays: _v1,
          hasExpiration: _v2
        } : _v0, {
          revalidate: !1
        });
      }, [_v5]),
      _v27 = (0, _v1.useCallback)(async (_v0, _v1, _v2) => {
        _v2 && (await _v19({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v11],
          variables: {
            expiresOn: _v0,
            intervalDays: _v1,
            hasExpiration: _v2
          }
        }));
      }, [_v2, _v19]),
      _v28 = (0, _v1.useCallback)(async _v0 => {
        _v2 && (await _v19({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v11],
          variables: {
            hasExpiration: _v0
          }
        }));
      }, [_v2, _v19]),
      _v29 = _v1 && (_v6 || _v12);
    return {
      isEnabled: _v1,
      sharingLink: _v4,
      createdLink: _v22,
      isOwner: _v10,
      defaultExpiryDays: _v13,
      defaultHasExpiration: _v14,
      isLoading: _v6,
      isPatchLoading: _v20,
      isCreateLoading: _v17,
      isInitialLoading: _v29,
      patchError: _v21,
      createError: _v18,
      getOrCreateLink: _v25,
      setOptimisticUpdate: _v26,
      saveInterval: _v27,
      saveHasExpiration: _v28
    };
  }]);
}