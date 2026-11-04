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
    _v11 = _v0.i(0);
  let _v12 = ["url", "expiresOn", "createdOn", "uri", "intervalDays", "hasExpiration"];
  _v0.s(["SHARING_LINK_SELECT_FIELDS", 0, _v12, "formatIntervalLabel", 0, function _v0(_v1) {
    return _v1 <= 0 ? _v0(7) : 1 === _v1 ? (0, _v5.translate)({
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
    }) : 7 === _v1 ? (0, _v5.translate)({
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
    }) : (0, _v5.translate)({
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
    let _v0 = (0, _v6.useOrionSettingsFields)(["bi_expiring_links_ux_enabled", "bi_expiring_links_default_expiry_days"]),
      _v1 = !!_v0?.bi_expiring_links_ux_enabled,
      _v2 = (0, _v9.useGlobalStore)(({
        clip: _v0
      }) => _v0.clipId),
      {
        mutate: _v3
      } = (0, _v2.useSWRConfig)(),
      _v4 = (0, _v1.useMemo)(() => _v1 && _v2 ? {
        where: {
          videoId: Number(_v2)
        },
        select: [..._v12]
      } : null, [_v1, _v2]),
      {
        data: _v5,
        mutate: _v6,
        isLoading: _v7
      } = (0, _v4.useGetVideoSharingLink)(_v4 ? () => _v4 : () => null),
      {
        data: _v8
      } = (0, _v8.useGetVideoSharingData)(),
      _v9 = _v8?.user?.uri ? (0, _v10.idFromUri)(_v8.user.uri) : null,
      _v10 = (0, _v7.useViewer)(),
      _v11 = !!_v10?.user?.uri && _v10.user.uri === _v8?.user?.uri,
      {
        data: _v12,
        isLoading: _v13
      } = (0, _v3.useGetUser)(() => _v1 && _v9 ? {
        where: {
          userId: _v9
        },
        select: ["preferences.videos.sharingLinkDefaultExpiryDays"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      {
        intervalDays: _v14,
        hasExpiration: _v15
      } = (0, _v11.resolveDefaultExpiry)({
        prefDays: _v12?.preferences?.videos?.sharingLinkDefaultExpiryDays ?? null,
        orionDays: _v0?.bi_expiring_links_default_expiry_days ?? 0
      }),
      [_v16, {
        data: _v17,
        loading: _v18,
        error: _v19
      }] = (0, _v4.usePostVideoSharingLink)(),
      [_v20, {
        loading: _v21,
        error: _v22
      }] = (0, _v4.usePatchVideoSharingLink)(),
      [_v23, _v24] = (0, _v1.useState)(null);
    (0, _v1.useEffect)(() => {
      _v17?.url && _v24(_v17);
    }, [_v17]), (0, _v1.useEffect)(() => {
      _v24(null);
    }, [_v2]);
    let _v25 = (0, _v1.useRef)(_v5);
    _v25.current = _v5;
    let _v26 = (0, _v1.useCallback)((_v0 = {}) => {
        if (!_v2) return;
        let _v1 = _v25.current;
        if (_v1?.url && !(_v1?.expiresOn && !1 !== _v1.hasExpiration && new Date(_v1.expiresOn).getTime() < Date.now())) return;
        let {
            intervalDays: _v2,
            intervalDaysFallback: _v3
          } = _v0,
          _v4 = {};
        void 0 !== _v2 && (_v4.intervalDays = _v2), void 0 === _v2 && void 0 !== _v3 && (_v4.intervalDaysFallback = _v3), _v16({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v12],
          variables: _v4
        });
      }, [_v2, _v16]),
      _v27 = (0, _v1.useCallback)((_v0, _v1, _v2) => {
        _v6(_v0 => _v0 ? {
          ..._v0,
          expiresOn: _v0,
          intervalDays: _v1,
          hasExpiration: _v2
        } : _v0, {
          revalidate: !1
        });
      }, [_v6]),
      _v28 = (0, _v1.useCallback)(async (_v0, _v1, _v2) => {
        _v2 && (await _v20({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v12],
          variables: {
            expiresOn: _v0,
            intervalDays: _v1,
            hasExpiration: _v2
          }
        }));
      }, [_v2, _v20]),
      _v29 = (0, _v1.useCallback)(async _v0 => {
        _v2 && (await _v20({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v12],
          variables: {
            hasExpiration: _v0
          }
        }));
      }, [_v2, _v20]),
      _v30 = (0, _v1.useCallback)(async () => {
        _v2 && (await _v3(_v0 => "string" == typeof _v0 && _v0.startsWith(`/videos/${Number(_v2)}/sharing_link`)));
      }, [_v2, _v3]),
      _v31 = _v1 && (_v7 || _v13);
    return {
      isEnabled: _v1,
      sharingLink: _v5,
      createdLink: _v23,
      isOwner: _v11,
      defaultExpiryDays: _v14,
      defaultHasExpiration: _v15,
      isLoading: _v7,
      isPatchLoading: _v21,
      isCreateLoading: _v18,
      isInitialLoading: _v31,
      patchError: _v22,
      createError: _v19,
      getOrCreateLink: _v26,
      setOptimisticUpdate: _v27,
      saveInterval: _v28,
      saveHasExpiration: _v29,
      revalidateSharingLink: _v30
    };
  }]);
}