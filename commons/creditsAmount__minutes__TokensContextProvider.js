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
  let _v10 = ["creditsAmount", "minutes"],
    _v11 = {
      total: 0,
      minutes: 0,
      byLanguage: {}
    },
    _v12 = (0, _v2.createContext)(null);
  _v0.s(["TokensContextProvider", 0, ({
    children: _v0,
    videoId: _v1
  }) => {
    let [_v2, _v3] = (0, _v2.useState)([]),
      _v4 = _v2.length,
      [_v5, _v6] = (0, _v2.useState)(null),
      [_v7, _v8] = (0, _v2.useState)(_v8.TranslationTypes.DUBBING),
      [_v9, _v10] = (0, _v2.useState)(0),
      [_v11, _v12] = (0, _v2.useState)(0),
      [_v13, _v14] = (0, _v2.useState)(!1),
      [_v15, _v16] = (0, _v2.useState)(_v11),
      [_v17, _v18] = (0, _v2.useState)(0),
      {
        isAccountDictionaryAvailable: _v19,
        shouldUseAccountDictionary: _v20,
        setShouldUseAccountDictionary: _v21,
        accountDictionaryPreference: _v22
      } = (0, _v9.useAccountDictionarySelection)(),
      {
        baseUrl: _v23,
        jwt: _v24
      } = (0, _v5.useGctlConfig)(),
      _v25 = (0, _v7.useViewer)(),
      [_v26, {
        error: _v27,
        loading: _v28,
        data: _v29
      }] = (0, _v6.useGetVideoLazy)();
    (0, _v2.useEffect)(() => {
      !_v28 && _v29 && null != _v29.duration && _v6({
        duration: _v29.duration,
        quota: _v29.user?.aiCreditsQuota,
        ownerUri: _v29.user?.uri
      });
    }, [_v27, _v28, _v29]);
    let {
        capabilities: _v30
      } = (0, _v3.useCapability)(["entitlementAiCredits"], _v5?.ownerUri),
      _v31 = Number(_v5?.ownerUri?.split("/").pop()),
      _v32 = Number.isInteger(_v31) ? _v31 : _v25?.teamUser?.ownerId ?? _v25?.user?.id,
      _v33 = (0, _v2.useCallback)(({
        serviceName: _v0,
        serviceUnits: _v1,
        jobNumbers: _v2,
        targetLang: _v3,
        useAccountDictionary: _v4,
        select: _v5
      }) => (0, _v4.getUserAiCreditsEstimate)({
        where: {
          userId: _v32
        },
        headers: {
          Authorization: `jwt ${_v24}`,
          "Content-Type": "application/json"
        },
        baseUrl: _v23,
        query: {
          serviceName: _v0,
          serviceUnits: _v1,
          jobNumbers: _v2,
          targetLang: _v3,
          useAccountDictionary: _v4
        },
        select: _v5
      }), [_v23, _v24, _v32]);
    (0, _v2.useEffect)(() => {
      let _v0 = !0;
      return Promise.all([_v8.TranslationTypes.DUBBING, _v8.TranslationTypes.SUBTITLING].map(_v0 => _v33({
        serviceName: _v0,
        serviceUnits: 1,
        jobNumbers: 1,
        select: ["creditsPerMinute"]
      }))).then(([_v0, _v1]) => {
        _v0 && (_v10(_v0.creditsPerMinute), _v12(_v1.creditsPerMinute));
      }).catch(() => void 0), () => {
        _v0 = !1;
      };
    }, [_v33]);
    let _v34 = (0, _v2.useCallback)(() => {
        _v26({
          where: {
            videoId: _v1
          },
          select: ["duration", "user.uri", "user.aiCreditsQuota"]
        });
      }, [_v1, _v26]),
      _v35 = (0, _v2.useCallback)(() => _v3([]), []),
      _v36 = (0, _v2.useCallback)(async (_v0, _v1, _v2) => {
        let _v3 = await Promise.all(_v2.map(_v0 => _v33({
          serviceName: _v0,
          serviceUnits: _v1,
          jobNumbers: 1,
          targetLang: _v0,
          useAccountDictionary: _v22,
          select: _v10
        })));
        return {
          total: _v3.reduce((_v0, {
            creditsAmount: _v1
          }) => _v0 + _v1, 0),
          minutes: _v3[0].minutes,
          byLanguage: Object.fromEntries(_v2.map((_v0, _v1) => [_v0, _v3[_v1].creditsAmount]))
        };
      }, [_v22, _v33]),
      _v37 = (0, _v2.useMemo)(() => _v5?.quota?.remaining, [_v5]),
      _v38 = (0, _v2.useMemo)(() => _v5?.duration != null && (_v15?.total ?? 0) <= (_v37 ?? 0), [_v5?.duration, _v15?.total, _v37]),
      _v39 = (0, _v2.useMemo)(() => _v25?.user?.uri === _v5?.ownerUri, [_v5?.ownerUri, _v25?.user?.uri]),
      _v40 = _v5?.duration;
    return (0, _v2.useEffect)(() => {
      if (0 === _v2.length) return void _v16(_v11);
      if (_v16(null), null == _v40) return;
      let _v0 = !0,
        _v1 = setTimeout(() => {
          _v36(_v7, _v40, _v2).then(_v0 => {
            _v0 && (_v16(_v0), _v18(_v0.minutes));
          }).catch(() => {
            _v0 && _v16(null);
          });
        }, 200);
      return () => {
        _v0 = !1, clearTimeout(_v1);
      };
    }, [_v7, _v40, _v36, _v2]), (0, _v1.jsx)(_v12.Provider, {
      value: {
        hasEntitlementAiCredits: !!_v30?.entitlementAiCredits,
        amount: _v15?.total ?? 0,
        isEnoughTokens: _v38,
        balance: _v37,
        dubbingCreditsPerMin: _v9,
        subtitlingCreditsPerMin: _v11,
        minutes: _v17,
        langCnt: _v4,
        estimateByLanguage: _v15?.byLanguage ?? {},
        isEstimateReady: null !== _v15,
        duration: _v5?.duration ?? 0,
        setTargetLanguages: _v3,
        reloadTokens: _v34,
        setCurrentService: _v8,
        resetTokensContext: _v35,
        isBlockingModalOpen: _v13,
        setIsBlockingModalOpen: _v14,
        isOwner: _v39,
        isAccountDictionaryAvailable: _v19,
        shouldUseAccountDictionary: _v20,
        setShouldUseAccountDictionary: _v21,
        accountDictionaryPreference: _v22
      },
      children: _v0
    });
  }, "useTokensContext", 0, () => {
    let _v0 = (0, _v2.useContext)(_v12);
    if (!_v0) throw Error("useTokensContext must be used within a TokensContextProvider");
    return _v0;
  }]);
}