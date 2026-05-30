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
  let _v10 = (0, _v3.createContext)(null);
  _v0.s(["TokensContextProvider", 0, ({
    children: _v0,
    videoId: _v1
  }) => {
    let [_v2, _v3] = (0, _v3.useState)(0),
      [_v4, _v5] = (0, _v3.useState)(null),
      [_v6, _v7] = (0, _v3.useState)(_v9.TranslationTypes.DUBBING),
      [_v8, _v9] = (0, _v3.useState)(0),
      [_v10, _v11] = (0, _v3.useState)(0),
      [_v12, _v13] = (0, _v3.useState)(!1),
      [_v14, _v15] = (0, _v3.useState)(0),
      [_v16, _v17] = (0, _v3.useState)(0),
      {
        baseUrl: _v18,
        jwt: _v19
      } = (0, _v6.useGctlConfig)(),
      _v20 = (0, _v8.useViewer)(),
      _v21 = _v20?.teamUser?.ownerId ?? _v20?.user?.id,
      [_v22, {
        error: _v23,
        loading: _v24,
        data: _v25
      }] = (0, _v7.useGetVideoLazy)();
    (0, _v3.useEffect)(() => {
      !_v24 && _v25 && null != _v25.duration && _v5({
        duration: _v25.duration,
        quota: _v25.user?.aiCreditsQuota,
        ownerUri: _v25.user?.uri
      });
    }, [_v23, _v24, _v25]);
    let {
        capabilities: _v26
      } = (0, _v4.useCapability)(["entitlementAiCredits"], _v4?.ownerUri),
      _v27 = (0, _v3.useCallback)(async ({
        serviceName: _v0,
        serviceUnits: _v1,
        jobNumbers: _v2,
        select: _v3
      }) => await (0, _v5.getUserAiCreditsEstimate)({
        where: {
          userId: _v21
        },
        headers: {
          Authorization: `jwt ${_v19}`,
          "Content-Type": "application/json"
        },
        baseUrl: _v18,
        query: {
          serviceName: _v0,
          serviceUnits: _v1,
          jobNumbers: _v2
        },
        select: _v3
      }), [_v18, _v19, _v21]),
      _v28 = (0, _v3.useCallback)(() => {
        _v27({
          serviceName: _v9.TranslationTypes.DUBBING,
          serviceUnits: 1,
          jobNumbers: 1,
          select: ["creditsPerMinute"]
        }).then(({
          creditsPerMinute: _v0
        }) => _v9(_v0)), _v27({
          serviceName: _v9.TranslationTypes.SUBTITLING,
          serviceUnits: 1,
          jobNumbers: 1,
          select: ["creditsPerMinute"]
        }).then(({
          creditsPerMinute: _v0
        }) => _v11(_v0));
      }, [_v27]),
      _v29 = (0, _v3.useCallback)(() => {
        _v22({
          where: {
            videoId: _v1
          },
          select: ["duration", "user.uri", "user.aiCreditsQuota"]
        });
      }, [_v1, _v22]),
      _v30 = (0, _v3.useCallback)(() => {
        _v3(0);
      }, []),
      _v31 = (0, _v3.useCallback)(async (_v0, _v1) => {
        try {
          let _v0 = await _v27({
            jobNumbers: _v1,
            serviceName: _v0,
            serviceUnits: Number(_v4?.duration),
            select: ["creditsAmount", "minutes"]
          });
          return Number(_v0?.creditsAmount);
        } catch (_v0) {
          return 0;
        }
      }, [_v27, _v4?.duration]),
      _v32 = (0, _v3.useMemo)(() => (0, _v2.default)(async ({
        serviceName: _v0,
        serviceUnits: _v1,
        jobNumbers: _v2
      }) => {
        if (_v2 > 0) try {
          let {
            creditsAmount: _v0,
            minutes: _v1
          } = await _v27({
            serviceName: _v0,
            serviceUnits: _v1,
            jobNumbers: _v2,
            select: ["creditsAmount", "minutes"]
          });
          _v15(_v0), _v17(_v1);
        } catch (_v0) {} else _v15(0), _v17(0);
      }, 200), [_v27]),
      _v33 = (0, _v3.useMemo)(() => _v4?.quota?.remaining, [_v4]),
      _v34 = (0, _v3.useMemo)(() => _v4?.duration != null && _v14 <= (_v33 ?? 0), [_v4?.duration, _v14, _v33]),
      _v35 = (0, _v3.useMemo)(() => _v20?.user?.uri === _v4?.ownerUri, [_v4?.ownerUri, _v20?.user?.uri]);
    return (0, _v3.useEffect)(() => {
      _v15(0);
    }, [_v6]), (0, _v3.useEffect)(() => {
      _v4?.duration != null ? _v32({
        serviceName: _v6,
        serviceUnits: _v4.duration,
        jobNumbers: _v2
      }) : 0 === _v2 && _v32.cancel();
    }, [_v6, _v32, _v2, _v4?.duration]), (0, _v1.jsx)(_v10.Provider, {
      value: {
        hasEntitlementAiCredits: !!_v26?.entitlementAiCredits,
        amount: _v2 ? _v14 : 0,
        isEnoughTokens: _v34,
        balance: _v33,
        dubbingCreditsPerMin: _v8,
        subtitlingCreditsPerMin: _v10,
        minutes: _v16,
        langCnt: _v2,
        duration: _v4?.duration ?? 0,
        setLangCnt: _v3,
        reloadTokens: _v29,
        initCreditsPerMin: _v28,
        setCurrentService: _v7,
        resetTokensContext: _v30,
        calculateTokensAmount: _v31,
        isBlockingModalOpen: _v12,
        setIsBlockingModalOpen: _v13,
        isOwner: _v35
      },
      children: _v0
    });
  }, "useTokensContext", 0, () => {
    let _v0 = (0, _v3.useContext)(_v10);
    if (!_v0) throw Error("useTokensContext must be used within a TokensContextProvider");
    return _v0;
  }]);
}