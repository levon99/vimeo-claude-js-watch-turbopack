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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = ((_v1 = _v16 || {}).ReportComponentError = "reportRemoteComponentError", _v1.RemoteComponentReady = "remoteComponentReady", _v1);
  let _v17 = _v0 => {
      let _v1 = window?.document?.referrer ?? "*";
      _v1 && window?.parent?.postMessage(_v0, _v1);
    },
    _v18 = _v0 => {
      _v17({
        method: "reportRemoteComponentError",
        value: JSON.stringify(_v0),
        id: "ai-widget"
      });
    };
  _v0.s(["sendAppReady", 0, () => {
    _v17({
      method: "remoteComponentReady",
      id: "ai-widget"
    });
  }, "sendPlayerError", 0, _v18], 0);
  let _v19 = (0, _v3.createContext)(null),
    _v20 = ["answer", "relevantQuotes", "relatedQuestions"];
  _v0.s(["QuestionContextProvider", 0, ({
    videoId: _v0,
    children: _v1,
    guestSignature: _v2
  }) => {
    let _v3 = (0, _v14.useContainerDataStore)(_v0 => _v0.videoId),
      _v4 = (0, _v12.useBokehToast)(),
      {
        baseUrl: _v5,
        jwt: _v6,
        xVimeoPage: _v7,
        locale: _v8
      } = (0, _v6.useGctlConfig)(),
      {
        value: _v9
      } = (0, _v4.default)(_v10.POLLING_SERVICE_KEY, null),
      [_v10, {
        error: _v11,
        loading: _v12
      }] = (0, _v8.usePostVideoQuestionsActivation)(),
      _v13 = (0, _v13.useGetVideoSignature)(_v3),
      [_v14, _v15] = (0, _v3.useState)(""),
      [_v16, _v17] = (0, _v3.useState)(!1),
      [_v18, _v19] = (0, _v3.useState)(!1),
      [_v20, _v21] = (0, _v3.useState)(""),
      [_v22, _v23] = (0, _v3.useState)(null),
      [_v24, _v25] = (0, _v3.useState)([]),
      [_v26, _v27] = (0, _v3.useState)([]),
      [_v28, _v29] = (0, _v3.useState)(null),
      [_v30, _v31] = (0, _v3.useState)(!1),
      [_v32, _v33] = (0, _v3.useState)([]),
      [_v34, _v35] = (0, _v3.useState)(null),
      [_v36, _v37] = (0, _v3.useState)(!1),
      [_v38, _v39] = (0, _v3.useState)(null),
      _v40 = (0, _v3.useRef)(!1);
    (0, _v7.useGetVideoQuestions)(() => _v0 && _v18 ? {
      where: {
        videoId: _v0
      },
      select: ["question", "answer", "relevantQuotes", "relatedQuestions", "status", "languageCode", "languageLabel"]
    } : null, {
      refreshInterval: 0 * !!_v16,
      refreshWhenHidden: !1,
      revalidateOnFocus: !1,
      shouldRetryOnError: !1,
      onSuccess: _v0 => {
        if (_v0) {
          let _v0 = !!_v0.status,
            _v1 = !!_v0.data;
          (!_v0 || "NONE_EXISTING" !== _v0.status || !_v16) && (_v1 && _v0.data && 0 === _v0.data.length || (_v1 && _v0.data ? (_v27(_v0.data), _v17(!1), _v29(null)) : "qna" === _v9 && _v17(!0)));
        } else _v47();
      },
      onError: _v0 => {
        _v47(_v0);
      }
    });
    let _v41 = (0, _v3.useCallback)((_v0, _v1) => {
        _v37(!1), _v35(null), _v0 && _v0.answer && (_v21(_v0.answer), _v23("generated"), _v39(_v1), _v25(_v0?.relevantQuotes ?? []), _v33(_v0.relatedQuestions ?? []));
      }, []),
      _v42 = (0, _v3.useCallback)(_v0 => {
        _v35(_v0), _v37(!1), (0, _v15.handleError)(_v0, _v11.failedToAskTheVimeoAi, _v4), _v0?.status >= 500 && _v18(_v0);
      }, [_v4]),
      _v43 = (0, _v3.useCallback)(async (_v0, _v1) => {
        if (!_v0) return null;
        let _v2 = (0, _v9.getPasswordHashFromCookie)(_v0);
        _v37(!0), _v40.current = !0;
        try {
          let _v0 = await (0, _v5.postVideoQuestions)({
            baseUrl: _v5,
            where: {
              videoId: _v0
            },
            variables: {
              question: _v0
            },
            select: _v20,
            ...(_v2 ? {
              query: {
                password: _v2,
                signature: _v2 ?? _v13
              }
            } : {
              query: {
                signature: _v2 ?? _v13
              }
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: _v6 ? `jwt ${_v6}` : "",
              "Vimeo-Page": `${_v7}`,
              "Accept-Language": _v8 ?? "en"
            }
          });
          _v41(_v0, _v1);
        } catch (_v0) {
          _v42(_v0);
        } finally {
          _v40.current = !1;
        }
        return null;
      }, [_v0, _v5, _v2, _v13, _v6, _v7, _v8, _v41, _v42]),
      _v44 = (0, _v3.useCallback)((_v0, _v1 = "typed") => {
        _v35(null), _v15(_v0), _v21(""), _v23(null), _v25([]), _v33([]), _v39(_v1), _v43(_v0, _v1);
      }, [_v43]),
      _v45 = (0, _v3.useCallback)((_v0, _v1, _v2, _v3, _v4 = "suggested_question") => {
        _v15(_v0), _v21(_v1), _v23("pre_generated"), _v25(_v2 ?? []), _v33(_v3 ?? []), _v39(_v4);
      }, []),
      _v46 = (0, _v3.useCallback)(() => {
        _v15(""), _v21(""), _v23(null), _v25([]), _v33([]), _v39(null);
      }, []);
    (0, _v3.useEffect)(function () {
      _v40.current = _v12;
    }, [_v12]), (0, _v3.useEffect)(function () {
      _v11 && _v47(_v11);
    }, [_v11]);
    let _v47 = (0, _v3.useCallback)(_v0 => {
      _v17(!1), _v29(_v0 ?? _v11.failedToAskTheVimeoAi), (0, _v15.handleError)(_v0 ?? _v11.failedToAskTheVimeoAi, _v11.failedToAskTheVimeoAi, _v4);
    }, [_v4]);
    return (0, _v2.jsx)(_v19.Provider, {
      value: {
        answer: _v20,
        answerOrigin: _v22,
        askNewQuestion: _v44,
        askPredefinedQuestion: _v45,
        errorData: _v28,
        generateVideoQnA: () => {
          !_v16 && _v0 && (_v31(!0), _v10({
            where: {
              videoId: _v0
            }
          }), _v17(!0));
        },
        isGeneratedInSession: _v30,
        isLoading: _v16,
        moments: _v24,
        predefinedQuestions: _v26,
        question: _v14,
        questionSource: _v38,
        questionResponseError: _v34,
        questionResponseLoading: _v36,
        relatedQuestions: _v32,
        resetQuestionData: _v46,
        setCanCall: _v19,
        setIsGeneratedInSession: _v31,
        setQuestion: _v15
      },
      children: _v1
    });
  }, "useQuestionContext", 0, () => {
    let _v0 = (0, _v3.useContext)(_v19);
    if (!_v0) throw Error("useQuestionContext must be used within a QuestionContextProvider");
    return _v0;
  }], 0);
}