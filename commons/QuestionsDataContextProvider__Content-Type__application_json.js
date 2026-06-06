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
  let _v10 = (0, _v2.createContext)(null);
  _v0.s(["QuestionsDataContextProvider", 0, ({
    children: _v0,
    videoId: _v1,
    guestSignature: _v2
  }) => {
    let [_v3, _v4] = (0, _v2.useState)(!1),
      [_v5, _v6] = (0, _v2.useState)(!1),
      [_v7, _v8] = (0, _v2.useState)(!1),
      [_v9, _v10] = (0, _v2.useState)(null),
      _v11 = (0, _v9.useContainerDataStore)(_v0 => _v0.videoId),
      _v12 = (0, _v7.getPasswordHashFromCookie)(_v1),
      _v13 = (0, _v8.useGetVideoSignature)(_v11),
      {
        baseUrl: _v14,
        jwt: _v15
      } = (0, _v4.useGctlConfig)(),
      _v16 = (0, _v2.useCallback)(async () => {
        _v10(null), _v8(!0);
        try {
          await (0, _v3.postVideoQuestionsActivation)({
            where: {
              videoId: _v1
            },
            headers: {
              Authorization: `jwt ${_v15}`,
              "Content-Type": "application/json"
            },
            baseUrl: _v14,
            ...(_v12 ? {
              query: {
                password: _v12,
                signature: _v2 ?? _v13
              }
            } : {
              query: {
                signature: _v2 ?? _v13
              }
            })
          }), _v4(!0);
        } catch (_v0) {
          _v8(!1), _v4(!1), _v10(_v0);
        }
      }, [_v14, _v2, _v12, _v15, _v1, _v13]),
      {
        data: _v17
      } = (0, _v6.useGetVideoQuestionsActivation)(() => _v1 ? {
        where: {
          videoId: _v1
        },
        select: ["status"],
        ...(_v12 ? {
          query: {
            password: _v12
          }
        } : {})
      } : null, {
        refreshInterval: 0 * !!_v3,
        revalidateOnFocus: !1,
        onSuccess: _v0 => {
          _v5 || _v6(!0), _v0?.status === "PRCS" || _v0?.status === "INIT" ? _v7 || (_v8(!0), _v4(!0)) : _v0?.status === "DONE" ? (_v8(!1), _v4(!1)) : _v0?.status === "FAILED" || _v0?.status === "INVALID" ? (_v8(!1), _v4(!1), _v10(Error("An error occurred during the activation."))) : _v0?.status !== "NONE_EXISTING" || _v7 || _v16();
        },
        onError: _v0 => {
          _v4(!1), _v8(!1), _v10(_v0);
        }
      }),
      {
        data: _v18,
        isLoading: _v19
      } = (0, _v5.useGetVideoQuestions)(() => _v1 && _v17?.status === "DONE" ? {
        where: {
          videoId: _v1
        },
        select: ["question", "answer", "relevantQuotes", "relatedQuestions", "languageCode", "languageLabel"],
        ...(_v12 ? {
          query: {
            password: _v12
          }
        } : {})
      } : null, {
        revalidateOnFocus: !1,
        onError: _v0 => _v10(_v0)
      }),
      _v20 = _v18?.data ?? [];
    return (0, _v1.jsx)(_v10.Provider, {
      value: {
        error: _v9,
        videoId: _v1,
        hasValidStatus: _v5,
        isActivatingAi: _v7,
        isQuestionsLoading: _v19,
        questions: _v20,
        forceRefresh: _v16
      },
      children: _v0
    });
  }, "useQuestionsDataContext", 0, () => {
    let _v0 = (0, _v2.useContext)(_v10);
    if (!_v0) throw Error("useViewerAiContext must be used within a ViewerAiContextProvider");
    return _v0;
  }]);
}