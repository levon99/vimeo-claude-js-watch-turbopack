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
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = "clipId",
    _v17 = "clipHash",
    _v18 = "customerId",
    _v19 = "course_title",
    _v20 = "scoring_algorithm",
    _v21 = "completion_threshold",
    _v22 = "passing_score",
    _v23 = "completed",
    _v24 = "in_progress",
    _v25 = "interactive:",
    _v26 = {
      LEARNER_STATE: `${_v25}learnerState`,
      GET_LEARNER_STATE: `${_v25}getLearnerState`,
      SET_LEARNER_STATE: `${_v25}setLearnerState`,
      SET_QUIZ_RESULT: `${_v25}setQuizResult`,
      RESET_QUIZ_RESULT: `${_v25}resetQuizResult`
    },
    _v27 = (_v0, _v1) => {
      let _v2 = window.parent.RXD;
      if (!_v2) return void _v1("RXD is not defined in the parent window.");
      try {
        _v0(_v2);
      } catch (_v0) {
        _v1(_v0?.message);
      }
    };
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  async function _v31({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      videoId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v29.measureLatency)("getUserLmsPlayerUrl", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/lms/player_url/${_v3}?${(0, _v30.searchQueryString)(_v4)}&fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  function _v36(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v35.useGctlConfig)();
    return (0, _v32.default)(_v2 ? `/users/${_v2.where.userId}/lms/player_url/${_v2.where.videoId}${(0, _v34.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v31({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  async function _v37({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      videoId: _v3
    },
    ..._v4
  }) {
    return (0, _v29.measureLatency)("postUserClipLmsReport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/clip/${_v3}/lms/report`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v30.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  function _v38() {
    let {
        mutate: _v0
      } = (0, _v33.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v35.useGctlConfig)(),
      [_v5, _v6] = (0, _v34.useInternalState)();
    return [(0, _v14.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/clip/${_v0.where.videoId}/lms/report${(0, _v34.serializeQuery)(_v0)}`, _v37({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v28.default.env.STORYBOOK && (0, _v34.assignMswData)(_v36, {
    endpoint: "/users/:userId/lms/player_url/:videoId",
    method: "GET"
  }), "true" === _v28.default.env.STORYBOOK && (0, _v34.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v33.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v35.useGctlConfig)(),
      [_v5, _v6] = (0, _v34.useInternalState)();
    return [(0, _v14.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/lms/player_url/${_v0.where.videoId}${(0, _v34.serializeQuery)(_v0)}`, _v31({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/users/:userId/lms/player_url/:videoId",
    method: "GET"
  }), "true" === _v28.default.env.STORYBOOK && (0, _v34.assignMswData)(_v38, {
    endpoint: "/users/:userId/clip/:videoId/lms/report",
    method: "POST"
  });
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = ({
    handleCourseButtonClick: _v0,
    courseStatus: _v1,
    isEligibleForComplete: _v2,
    ..._v3
  }) => {
    let _v4 = {
      ..._v3,
      variant: "primary",
      onClick: _v0
    };
    switch (_v1) {
      case _v24:
        return _v2 ? (0, _v1.jsx)(_v39.Button, {
          leftIcon: (0, _v1.jsx)(_v41.Checkmark, {}),
          ..._v4,
          children: _v11.T.Complete
        }) : (0, _v1.jsx)(_v39.Button, {
          ..._v4,
          children: _v11.T.Exit
        });
      case _v23:
        return (0, _v1.jsxs)(_v5.Flex, {
          gap: "300",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            alignItems: "center",
            gap: "75",
            opacity: "0.5",
            children: [(0, _v1.jsx)(_v41.Checkmark, {}), (0, _v1.jsx)(_v40.Text, {
              variant: "heading-xs",
              children: _v11.T.Completed
            })]
          }), (0, _v1.jsx)(_v39.Button, {
            ..._v4,
            children: _v11.T.Exit
          })]
        });
      default:
        return (0, _v1.jsx)(_v39.Button, {
          ..._v4,
          children: _v11.T.Exit
        });
    }
  };
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = ({
      onPlayerInitialized: _v0,
      style: _v1,
      iframeTitle: _v2,
      embedUrl: _v3
    }) => {
      let [_v4, _v5] = (0, _v14.useState)(!1),
        _v6 = window?.playerAssetUrls?.player_api_js ?? null,
        _v7 = (0, _v14.useCallback)(() => {
          window?.Vimeo?.Player && _v5(!0);
        }, []);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v6 && (0, _v1.jsx)(_v43.default, {
          src: _v6,
          onLoad: _v7
        }), _v3 && _v4 && (0, _v1.jsx)(_v44.EmbedPlayer, {
          src: _v3,
          style: _v1,
          title: _v2,
          onPlayerAPIReady: _v0
        })]
      });
    },
    _v46 = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: (0, _v7.rem)(16)
    };
  _v0.s(["LMSCoursePage", 0, () => {
    let {
        clipId: _v0,
        clipHash: _v1,
        courseTitle: _v2,
        completionThreshold: _v3,
        scoringAlgorithm: _v4,
        customerId: _v5,
        embedOptions: _v6
      } = (() => {
        let [_v0, _v1] = (0, _v14.useState)(null),
          [_v2, _v3] = (0, _v14.useState)(null),
          [_v4, _v5] = (0, _v14.useState)(null),
          [_v6, _v7] = (0, _v14.useState)(""),
          [_v8, _v9] = (0, _v14.useState)("percentage"),
          [_v10, _v11] = (0, _v14.useState)(80),
          [_v12, _v13] = (0, _v14.useState)(80),
          [_v14, _v15] = (0, _v14.useState)(null),
          [_v16, _v17] = (0, _v14.useState)(null),
          _v18 = (0, _v13.useRouter)(),
          _v19 = (0, _v12.useSearchParams)();
        return (0, _v14.useEffect)(() => {
          if (!_v18.isReady) return;
          let _v0 = _v18.query[_v16],
            _v1 = _v18.query[_v17],
            _v2 = _v18.query[_v18],
            _v3 = _v19.get(_v19),
            _v4 = _v19.get(_v20),
            _v5 = _v19.get(_v21),
            _v6 = _v19.get(_v22),
            _v7 = _v19.get("skipping_forward"),
            _v8 = _v19.get("speed"),
            _v9 = {};
          _v7 && (_v9.skipping_forward = _v7), _v8 && (_v9.speed = _v8), Object.keys(_v9).length && _v17(_v9), _v0 ? Array.isArray(_v0) ? _v15(`${_v16} parameter is incorrect`) : isNaN(parseInt(_v0)) ? _v15(`${_v16} parameter must be a valid number`) : _v3(_v0) : _v15(`${_v16} parameter is required`), _v1 && (Array.isArray(_v1) ? _v15(`${_v17} parameter is incorrect`) : _v5(_v1)), _v2 ? Array.isArray(_v2) ? _v15(`${_v18} parameter is incorrect`) : isNaN(parseInt(_v2)) ? _v15(`${_v18} parameter must be a valid number`) : _v1(parseInt(_v2)) : _v15(`${_v18} parameter is required`), _v3 ? Array.isArray(_v3) ? _v15(`${_v19} parameter is incorrect`) : _v7(_v3) : _v15(`${_v19} parameter is required`), _v5 ? Array.isArray(_v5) ? _v15(`${_v21} parameter is incorrect`) : isNaN(parseInt(_v5)) ? _v15(`${_v21} parameter must be a valid number`) : _v11(Number(_v5)) : _v15(`${_v21} parameter is required`), _v6 ? Array.isArray(_v6) ? _v15(`${_v22} parameter is incorrect`) : isNaN(parseInt(_v6)) ? _v15(`${_v22} parameter must be a valid number`) : _v13(Number(_v6)) : _v15(`${_v22} parameter is required`), _v4 ? Array.isArray(_v4) ? _v15(`${_v20} parameter is incorrect`) : _v15.SCORING_ALGORITHM_OPTIONS.map(_v0 => _v0.value).includes(_v4) ? _v9(_v4) : _v15(`${_v20} parameter must be a supported scoring algorithm`) : _v15(`${_v20} parameter is required`);
        }, [_v18, _v19]), (0, _v14.useMemo)(() => ({
          clipId: _v2,
          clipHash: _v4,
          customerId: _v0,
          courseTitle: _v6,
          completionThreshold: _v10,
          passingScore: _v12,
          scoringAlgorithm: _v8,
          error: _v14,
          embedOptions: _v16
        }), [_v2, _v4, _v0, _v6, _v10, _v12, _v8, _v14, _v16]);
      })(),
      _v7 = !!(0, _v10.useViewer)()?.jwt,
      {
        embedUrl: _v8,
        error: _v9
      } = ((_v0, _v1, _v2, _v3, _v4) => {
        let {
          data: _v5,
          error: _v6
        } = _v36(() => _v0 && _v1 && _v4 ? {
          where: {
            userId: _v0,
            videoId: _v2 ? `${_v1}:${_v2}` : _v1
          },
          select: ["playerUrl"],
          query: _v3 ?? void 0
        } : null);
        return {
          embedUrl: _v5?.playerUrl ?? null,
          error: _v6
        };
      })(_v5, _v0, _v1, _v6, _v7),
      {
        player: _v10,
        onPlayerInitialized: _v11,
        width: _v12,
        height: _v13,
        isInitialized: _v14
      } = (() => {
        let [_v0, _v1] = (0, _v14.useState)(null),
          [_v2, _v3] = (0, _v14.useState)(null),
          [_v4, _v5] = (0, _v14.useState)(!1),
          [_v6, _v7] = (0, _v14.useState)(0),
          [_v8, _v9] = (0, _v14.useState)(0);
        return (0, _v14.useEffect)(() => {
          if (!_v0) return;
          let _v0 = _v0 => {
            _v3(_v0.message ?? null);
          };
          return _v0.ready().catch(_v0).finally(() => _v5(!0)), _v0.getVideoWidth().then(_v7).catch(_v0), _v0.getVideoHeight().then(_v9).catch(_v0), _v0.on("error", _v0), () => {
            _v0.off("error", _v0);
          };
        }, [_v0]), (0, _v14.useMemo)(() => ({
          player: _v0,
          error: _v2,
          width: _v6,
          height: _v8,
          onPlayerInitialized: _v1,
          isInitialized: _v4
        }), [_v2, _v8, _v0, _v6, _v4]);
      })(),
      {
        width: _v15,
        height: _v16
      } = ((_v0, _v1) => {
        let [_v2, _v3] = (0, _v14.useState)({
          width: 0,
          height: 0
        });
        return (0, _v14.useEffect)(() => {
          if (window) {
            let _v0 = () => {
              var _v0, _v1;
              _v3(_v0 / _v1 >= (_v0 = window.innerWidth - 48) / (_v1 = window.innerHeight - 113) ? {
                width: _v0,
                height: _v1 / (_v0 / _v0)
              } : {
                width: _v0 / (_v1 / _v1),
                height: _v1
              });
            };
            return window.addEventListener("resize", _v0), _v0(), () => {
              window.removeEventListener("resize", _v0);
            };
          }
        }, [113, _v1, _v0, 48]), _v2;
      })(_v12, _v13),
      {
        learnerId: _v17,
        ..._v18
      } = (({
        player: _v0,
        completionThreshold: _v1,
        scoringAlgorithm: _v2
      }) => {
        let _v3 = (0, _v14.useRef)(0),
          _v4 = (0, _v14.useRef)(Date.now()),
          _v5 = (0, _v14.useRef)(null),
          [_v6, _v7] = (0, _v14.useState)(!1),
          [_v8, _v9] = (0, _v14.useState)(_v24),
          [_v10, _v11] = (0, _v14.useState)(null),
          _v12 = (0, _v14.useCallback)(_v0 => {
            let _v1,
              _v2 = _v3.current,
              _v3 = _v2 >= _v1;
            switch (_v2) {
              case _v15.SCORING_ALGORITHM.PASSFAIL:
                _v1 = 100 * !!_v3;
                break;
              case _v15.SCORING_ALGORITHM.PERCENTAGE:
                _v1 = Math.round(_v2);
                break;
              case _v15.SCORING_ALGORITHM.QUIZ:
                if (!_v5.current) return;
                _v1 = _v5.current.score, _v3 = _v5.current.didPass;
                break;
              default:
                _v1 = 0;
            }
            _v0.SetScore(_v1, 100, 0), _v3 ? (_v0.SetPassed(), _v0.SetReachedEnd()) : _v2 === _v15.SCORING_ALGORITHM.QUIZ && _v0.SetFailed();
          }, [_v1, _v2]);
        (0, _v14.useEffect)(function () {
          let _v0 = _v0 => {
            _v0.data?.type?.startsWith?.(_v25) && function (_v0, _v1) {
              let {
                data: _v2,
                source: _v3,
                origin: _v4
              } = _v0;
              switch (_v2.type) {
                case _v26.SET_LEARNER_STATE:
                  {
                    let {
                      state: _v0
                    } = _v2.data;
                    _v27(_v0 => {
                      _v0.SetBookmark(JSON.stringify(_v0));
                    }, console.error);
                    break;
                  }
                case _v26.GET_LEARNER_STATE:
                  _v27(_v0 => {
                    let _v1 = _v0.GetBookmark(),
                      _v2 = _v1 ? JSON.parse(_v1) : null,
                      _v3 = {
                        type: _v26.LEARNER_STATE,
                        data: {
                          state: _v2
                        }
                      };
                    _v3 && _v4 ? _v3.postMessage(_v3, {
                      targetOrigin: _v4
                    }) : console.error(`[LMS <-> Interactive] Cannot send message: source or origin is missing source="${_v3}" origin="${_v4}"`);
                  }, console.error);
                  break;
                case _v26.SET_QUIZ_RESULT:
                  {
                    let _v0 = _v2.data;
                    _v1?.onQuizResult && _v1.onQuizResult(_v0);
                    break;
                  }
                case _v26.RESET_QUIZ_RESULT:
                  break;
                default:
                  console.error("[LMS <-> Interactive] Unknown message type:", _v2.type);
              }
            }(_v0, {
              onQuizResult: _v0 => {
                _v5.current = _v0, _v2 === _v15.SCORING_ALGORITHM.QUIZ && _v27(_v12, console.error);
              }
            });
          };
          return window.addEventListener("message", _v0), () => {
            window.removeEventListener("message", _v0);
          };
        }, [_v2, _v12]), (0, _v14.useEffect)(() => {
          if (!_v0) return;
          let _v0 = ({
            percent: _v0
          }) => {
            let _v1 = _v2 === _v15.SCORING_ALGORITHM.QUIZ ? _v5.current?.score ?? 0 : 100 * _v0,
              _v2 = _v1 >= _v1,
              _v3 = _v2 === _v15.SCORING_ALGORITHM.PERCENTAGE && Date.now() > _v4.current + 0,
              _v4 = _v2 === _v15.SCORING_ALGORITHM.PASSFAIL && _v2 !== _v6;
            _v1 > _v3.current && (_v3.current = _v1), _v2 && !_v6 && _v7(_v2), _v8 === _v24 && (_v3 || _v4) && (_v4.current = Date.now(), _v27(_v12, console.error));
          };
          return _v0.on("timeupdate", _v0), () => {
            _v0.off("timeupdate", _v0);
          };
        }, [_v1, _v6, _v0, _v2, _v12, _v8]), (0, _v14.useEffect)(() => {
          _v27(_v0 => {
            let _v1 = _v0.GetStatus();
            _v11(_v0.GetStudentID()?.toString()), _v9(["completed", "passed"].includes(_v1) ? _v23 : _v24);
          }, console.error);
        }, []);
        let _v13 = (0, _v14.useCallback)(() => {
          _v27(_v0 => {
            _v8 !== _v23 && _v12(_v0), _v0.ConcedeControl();
          }, console.error);
        }, [_v12, _v8]);
        return (0, _v14.useMemo)(() => ({
          handleCourseButtonClick: _v13,
          courseStatus: _v8,
          isEligibleForComplete: _v6,
          learnerId: _v10
        }), [_v13, _v6, _v8, _v10]);
      })({
        player: _v10,
        completionThreshold: _v3,
        scoringAlgorithm: _v4
      });
    return (({
      customerId: _v0,
      learnerId: _v1,
      clipId: _v2,
      pageIsReady: _v3
    }) => {
      let _v4 = (0, _v14.useRef)(!1),
        [_v5] = _v38();
      (0, _v14.useEffect)(() => {
        !_v4.current && _v1 && _v0 && _v2 && _v3 && (_v5({
          where: {
            userId: _v0,
            videoId: parseInt(_v2)
          },
          variables: {
            learnerId: _v1
          }
        }), _v4.current = !0);
      }, [_v0, _v1, _v2, _v3, _v5]);
    })({
      customerId: _v5,
      learnerId: _v17,
      clipId: _v0,
      pageIsReady: _v7 && !!_v8
    }), (0, _v1.jsxs)(_v5.Flex, {
      width: "100dvw",
      height: "100dvh",
      flexDirection: "column",
      children: [_v9 ? (0, _v1.jsx)(_v5.Flex, {
        padding: "lg",
        width: "100%",
        height: `calc(100% - ${(0, _v7.rem)(65)})`,
        alignItems: "flex-start",
        children: (0, _v1.jsx)(_v2.Alert, {
          status: "error",
          children: (0, _v1.jsx)(_v3.AlertDescription, {
            marginTop: "50",
            children: _v11.T.SomethingWentWrong
          })
        })
      }) : (0, _v1.jsx)(_v4.Center, {
        padding: "lg",
        width: "100%",
        height: `calc(100% - ${(0, _v7.rem)(65)})`,
        children: (0, _v1.jsxs)(_v4.Center, {
          position: "relative",
          width: (0, _v7.rem)(_v15),
          height: (0, _v7.rem)(_v16),
          children: [(0, _v1.jsx)(_v8.Skeleton, {
            ..._v46
          }), _v8 && (0, _v1.jsx)(_v45, {
            embedUrl: _v8,
            style: _v46,
            iframeTitle: _v2,
            onPlayerInitialized: _v11
          })]
        })
      }), (0, _v1.jsxs)(_v5.Flex, {
        justifyContent: "space-between",
        paddingX: "lg",
        paddingY: "100",
        alignItems: "center",
        width: "100%",
        borderTopColor: "stroke",
        borderTopWidth: "1px",
        boxSizing: "border-box",
        height: (0, _v7.rem)(65),
        gap: "md",
        children: [(0, _v1.jsx)(_v6.Header, {
          variant: "heading-xs",
          as: "h1",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          size: "xl",
          children: _v2
        }), (0, _v1.jsx)(_v42, {
          ..._v18
        })]
      }), !_v14 && !_v9 && (0, _v1.jsx)(_v4.Center, {
        position: "absolute",
        left: "0",
        top: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "fill-surface",
        children: (0, _v1.jsx)(_v9.Spinner, {
          size: "md"
        })
      })]
    });
  }], 0);
}