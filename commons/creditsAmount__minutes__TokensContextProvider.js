{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = ["creditsAmount", "minutes"],
    _v10 = {
      total: 0,
      minutes: 0,
      byLanguage: {}
    },
    _v11 = (0, _v2.createContext)(null);
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
      [_v15, _v16] = (0, _v2.useState)(_v10),
      [_v17, _v18] = (0, _v2.useState)(0),
      {
        baseUrl: _v19,
        jwt: _v20
      } = (0, _v5.useGctlConfig)(),
      _v21 = (0, _v7.useViewer)(),
      [_v22, {
        error: _v23,
        loading: _v24,
        data: _v25
      }] = (0, _v6.useGetVideoLazy)();
    (0, _v2.useEffect)(() => {
      !_v24 && _v25 && null != _v25.duration && _v6({
        duration: _v25.duration,
        quota: _v25.user?.aiCreditsQuota,
        ownerUri: _v25.user?.uri
      });
    }, [_v23, _v24, _v25]);
    let {
        capabilities: _v26
      } = (0, _v3.useCapability)(["entitlementAiCredits"], _v5?.ownerUri),
      _v27 = Number(_v5?.ownerUri?.split("/").pop()),
      _v28 = Number.isInteger(_v27) ? _v27 : _v21?.teamUser?.ownerId ?? _v21?.user?.id,
      _v29 = (0, _v2.useCallback)(({
        serviceName: _v0,
        serviceUnits: _v1,
        jobNumbers: _v2,
        targetLang: _v3,
        select: _v4
      }) => (0, _v4.getUserAiCreditsEstimate)({
        where: {
          userId: _v28
        },
        headers: {
          Authorization: `jwt ${_v20}`,
          "Content-Type": "application/json"
        },
        baseUrl: _v19,
        query: {
          serviceName: _v0,
          serviceUnits: _v1,
          jobNumbers: _v2,
          targetLang: _v3
        },
        select: _v4
      }), [_v19, _v20, _v28]);
    (0, _v2.useEffect)(() => {
      let _v0 = !0;
      return Promise.all([_v8.TranslationTypes.DUBBING, _v8.TranslationTypes.SUBTITLING].map(_v0 => _v29({
        serviceName: _v0,
        serviceUnits: 1,
        jobNumbers: 1,
        select: ["creditsPerMinute"]
      }))).then(([_v0, _v1]) => {
        _v0 && (_v10(_v0.creditsPerMinute), _v12(_v1.creditsPerMinute));
      }).catch(() => void 0), () => {
        _v0 = !1;
      };
    }, [_v29]);
    let _v30 = (0, _v2.useCallback)(() => {
        _v22({
          where: {
            videoId: _v1
          },
          select: ["duration", "user.uri", "user.aiCreditsQuota"]
        });
      }, [_v1, _v22]),
      _v31 = (0, _v2.useCallback)(() => _v3([]), []),
      _v32 = (0, _v2.useCallback)(async (_v0, _v1, _v2) => {
        if (_v0 !== _v8.TranslationTypes.SUBTITLING) {
          let {
            creditsAmount: _v0,
            minutes: _v1
          } = await _v29({
            serviceName: _v0,
            serviceUnits: _v1,
            jobNumbers: _v2.length,
            select: _v9
          });
          return {
            total: _v0,
            minutes: _v1,
            byLanguage: {}
          };
        }
        let _v3 = await Promise.all(_v2.map(_v0 => _v29({
          serviceName: _v0,
          serviceUnits: _v1,
          jobNumbers: 1,
          targetLang: _v0,
          select: _v9
        })));
        return {
          total: _v3.reduce((_v0, {
            creditsAmount: _v1
          }) => _v0 + _v1, 0),
          minutes: _v3[0].minutes,
          byLanguage: Object.fromEntries(_v2.map((_v0, _v1) => [_v0, _v3[_v1].creditsAmount]))
        };
      }, [_v29]),
      _v33 = (0, _v2.useMemo)(() => _v5?.quota?.remaining, [_v5]),
      _v34 = (0, _v2.useMemo)(() => _v5?.duration != null && (_v15?.total ?? 0) <= (_v33 ?? 0), [_v5?.duration, _v15?.total, _v33]),
      _v35 = (0, _v2.useMemo)(() => _v21?.user?.uri === _v5?.ownerUri, [_v5?.ownerUri, _v21?.user?.uri]),
      _v36 = _v5?.duration;
    return (0, _v2.useEffect)(() => {
      if (0 === _v2.length) return void _v16(_v10);
      if (_v16(null), null == _v36) return;
      let _v0 = !0,
        _v1 = setTimeout(() => {
          _v32(_v7, _v36, _v2).then(_v0 => {
            _v0 && (_v16(_v0), _v18(_v0.minutes));
          }).catch(() => {
            _v0 && _v16(null);
          });
        }, 200);
      return () => {
        _v0 = !1, clearTimeout(_v1);
      };
    }, [_v7, _v36, _v32, _v2]), (0, _v1.jsx)(_v11.Provider, {
      value: {
        hasEntitlementAiCredits: !!_v26?.entitlementAiCredits,
        amount: _v15?.total ?? 0,
        isEnoughTokens: _v34,
        balance: _v33,
        dubbingCreditsPerMin: _v9,
        subtitlingCreditsPerMin: _v11,
        minutes: _v17,
        langCnt: _v4,
        estimateByLanguage: _v15?.byLanguage ?? {},
        isEstimateReady: null !== _v15,
        duration: _v5?.duration ?? 0,
        setTargetLanguages: _v3,
        reloadTokens: _v30,
        setCurrentService: _v8,
        resetTokensContext: _v31,
        isBlockingModalOpen: _v13,
        setIsBlockingModalOpen: _v14,
        isOwner: _v35
      },
      children: _v0
    });
  }, "useTokensContext", 0, () => {
    let _v0 = (0, _v2.useContext)(_v11);
    if (!_v0) throw Error("useTokensContext must be used within a TokensContextProvider");
    return _v0;
  }]);
}