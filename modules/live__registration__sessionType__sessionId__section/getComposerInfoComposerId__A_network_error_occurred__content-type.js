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
    _v12 = _v0.i(0);
  async function _v13({
    baseUrl: _v0,
    select: _v1,
    where: {
      composerType: _v2,
      composerId: _v3
    },
    ..._v4
  }) {
    return (0, _v11.measureLatency)("getComposerInfoComposerId", "GET", async () => {
      let _v0 = await fetch(`${_v0}/composer_info/${_v2}/${_v3}?fields=${_v1.map(_v12.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v12.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v12.deepCamelCase)(_v1);
    });
  }
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  function _v18() {
    let {
        mutate: _v0
      } = (0, _v15.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v16.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/composer_info/${_v0.where.composerType}/${_v0.where.composerId}${(0, _v16.serializeQuery)(_v0)}`, _v13({
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
  }
  function _v19(_v0) {
    let [_v1, _v2] = _v18();
    return [(0, _v2.useCallback)(() => {
      _v1({
        select: ["metadata.interactions.completeEvent"],
        where: {
          composerType: "live_event",
          composerId: _v0
        }
      });
    }, [_v0, _v1]), !!_v2?.data?.metadata?.interactions?.completeEvent];
  }
  "true" === _v10.default.env.STORYBOOK && (0, _v16.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v17.useGctlConfig)();
    return (0, _v14.default)(_v2 ? `/composer_info/${_v2.where.composerType}/${_v2.where.composerId}${(0, _v16.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v13({
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
  }, {
    endpoint: "/composer_info/:composerType/:composerId",
    method: "GET"
  }), "true" === _v10.default.env.STORYBOOK && (0, _v16.assignMswData)(_v18, {
    endpoint: "/composer_info/:composerType/:composerId",
    method: "GET"
  }), _v0.s(["useCanCompleteEvent", 0, _v19], 0);
  var _v20 = _v0.i(0);
  let _v21 = {
      Accept: "application/vnd.vimeo.*+json;version=3.4.9"
    },
    _v22 = ["hasRegistration", "schedule.startTime", "schedule.timeZone", "schedule.endTime", "schedule.rrule", "user"],
    _v23 = {
      STARTED: "started",
      ENDED: "ended",
      EMPTY: ""
    };
  _v0.s(["ENTITY_STATUS", 0, _v23, "HEADERS", 0, _v21, "SELECT", 0, _v22], 0);
  let _v24 = {
      status: _v23.EMPTY,
      hasRegistration: !0,
      schedule: {
        startTime: void 0,
        endTime: void 0
      }
    },
    _v25 = (_v0, _v1 = !0) => {
      let [_v2, _v3] = (0, _v2.useState)(_v24),
        _v4 = !_v2 || _v1 && _v2?.status !== _v23.ENDED,
        {
          data: _v5
        } = (0, _v20.useGetLiveEvent)({
          select: ["status", "hasRegistration", "schedule"],
          where: {
            liveEventId: _v0
          },
          headers: _v21
        }, {
          refreshInterval: 0 * !!_v4,
          refreshWhenHidden: !1
        });
      return (0, _v2.useEffect)(() => {
        _v3({
          status: _v5?.status || _v23.EMPTY,
          hasRegistration: !!_v5?.hasRegistration,
          schedule: _v5?.schedule
        });
      }, [_v5]), _v2;
    };
  _v0.s(["useEventData", 0, _v25], 0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  async function _v36({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      liveEventId: _v3
    },
    ..._v4
  }) {
    return (0, _v11.measureLatency)("postUserLiveEventComplete", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/live_events/${_v3}/complete?fields=${_v1.map(_v12.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST"
      });
      if (!_v0.ok) throw new _v12.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v12.deepCamelCase)(_v1);
    });
  }
  function _v37() {
    let {
        mutate: _v0
      } = (0, _v15.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v16.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/live_events/${_v0.where.liveEventId}/complete${(0, _v16.serializeQuery)(_v0)}`, _v36({
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
  "true" === _v10.default.env.STORYBOOK && (0, _v16.assignMswData)(_v37, {
    endpoint: "/users/:userId/live_events/:liveEventId/complete",
    method: "POST"
  });
  let _v38 = ({
    showModal: _v0,
    onClose: _v1,
    sessionId: _v2,
    reloadPage: _v3 = !0
  }) => {
    let [_v4, _v5] = function (_v0) {
      let [_v1, {
          data: _v2
        }] = _v37(),
        _v3 = (0, _v9.useViewer)(),
        _v4 = _v3?.teamUser,
        _v5 = _v3?.user;
      return [(0, _v2.useCallback)(() => {
        _v1({
          select: ["status"],
          where: {
            userId: _v4?.ownerId || _v5?.id || 0,
            liveEventId: _v0
          }
        });
      }, [_v0, _v1, _v4?.ownerId, _v5?.id]), _v2];
    }(parseInt(_v2));
    return (0, _v2.useEffect)(() => {
      _v3 && _v5?.status && window.location.reload();
    }, [_v3, _v5?.status]), (0, _v1.jsxs)(_v30.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v32.ModalOverlay, {}), (0, _v1.jsxs)(_v31.ModalContent, {
        maxW: (0, _v34.rem)(550),
        color: "text-primary",
        p: "lg",
        children: [(0, _v1.jsx)(_v29.Header, {
          size: "lg",
          mb: "md",
          children: _v35.default.CompleteEvent
        }), (0, _v1.jsx)(_v33.Paragraph, {
          size: "md",
          children: _v35.default.CompleteEventDesc
        }), (0, _v1.jsxs)(_v28.Flex, {
          mt: "lg",
          placeContent: "flex-end",
          children: [(0, _v1.jsx)(_v27.Button, {
            variant: "secondary",
            onClick: _v1,
            minW: (0, _v34.rem)(105),
            children: _v35.default.Cancel
          }), (0, _v1.jsx)(_v27.Button, {
            variant: "primary",
            onClick: () => {
              _v4(), _v1();
            },
            minW: (0, _v34.rem)(105),
            ml: (0, _v34.rem)(12),
            children: _v35.default.Complete
          })]
        })]
      })]
    });
  };
  _v0.s(["EndEventModal", 0, _v38], 0);
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = ({
    hasRegistration: _v0,
    onClickUndo: _v1
  }) => (0, _v1.jsxs)(_v28.Flex, {
    color: "white",
    bgColor: "black",
    py: "sm",
    px: "md",
    fontSize: "body-md",
    children: [(0, _v1.jsx)(_v40.Registration, {
      mr: "xs"
    }), `${_v0 ? _v35.default.RegistrationTurnedOn : _v35.default.RegistrationTurnedOff}`, (0, _v1.jsx)(_v28.Flex, {
      cursor: "pointer",
      textDecoration: "underline",
      pl: "xs",
      onClick: _v1,
      children: _v35.default.Undo
    })]
  });
  _v0.s(["RegistrationToast", 0, _v41], 0);
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = ({
    isRegistrationOn: _v0,
    setIsRegistrationOn: _v1,
    children: _v2,
    isOpen: _v3 = !1,
    onClose: _v4,
    schedule: _v5,
    onScheduleChange: _v6,
    isLoadingRegistration: _v7,
    isDisabled: _v8
  }) => {
    let [_v9, _v10] = (0, _v2.useState)(_v3),
      _v11 = (0, _v2.useRef)(_v5?.startTime && _v5?.endTime),
      [_v12, _v13] = (0, _v2.useState)(!1),
      _v14 = !(_v5?.startTime && _v5?.endTime),
      _v15 = (0, _v45.usePrevious)(_v0);
    (0, _v2.useEffect)(() => {
      _v10(_v3), _v13(!1);
    }, [_v3]);
    let _v16 = () => {
      _v10(!1), _v13(!1), _v4?.(), setTimeout(() => {
        _v11.current = _v5?.startTime && _v5?.endTime;
      }, 100);
    };
    return (0, _v2.useEffect)(() => {
      _v15 !== _v0 && _v9 && _v16();
    }, [_v0, _v15]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v30.Modal, {
        isOpen: _v9,
        onClose: _v16,
        size: "lg",
        children: [(0, _v1.jsx)(_v32.ModalOverlay, {}), (0, _v1.jsx)(_v31.ModalContent, {
          color: "text-primary",
          width: (0, _v34.rem)(480),
          children: (0, _v1.jsxs)(_v43.Box, {
            py: "md",
            px: "lg",
            borderRadius: "xs",
            children: [(0, _v1.jsx)(_v29.Header, {
              variant: "heading-md",
              mb: "md",
              size: "xl",
              children: _v11.current ? _v0 ? _v35.default.TurnOffRegistrationModalTitle : _v35.default.TurnOnRegistrationModalTitle : _v35.default.TurnOnRegistrationModalTitleNonSchedule
            }), (0, _v1.jsx)(_v33.Paragraph, {
              mt: "sm",
              variant: "body-md",
              children: _v11.current ? _v0 ? _v35.default.TurnOffRegistrationModalDescription : _v35.default.TurnOnRegistrationModalDescription : _v35.default.TurnOnRegistrationModalDescriptionNonSchedule
            }), _v5?.rrule && (0, _v1.jsx)(_v42.Alert, {
              children: (0, _v1.jsx)(_v33.Paragraph, {
                mb: "sm",
                size: "md",
                children: _v35.default.RRuleNotice
              })
            }), !_v11.current && (0, _v1.jsxs)(_v43.Box, {
              mb: "lg",
              children: [(0, _v1.jsx)(_v29.Header, {
                size: "sm",
                mb: (0, _v34.rem)(10),
                children: _v35.default.Schedule
              }), (0, _v1.jsx)(_v44.EventSchedule, {
                isVertical: !0,
                hideRecurring: !0,
                isVerticalDate: !1,
                onChange: _v6,
                schedule: _v5
              })]
            }), (0, _v1.jsxs)(_v28.Flex, {
              placeContent: "flex-end",
              pt: "md",
              children: [(0, _v1.jsx)(_v27.Button, {
                minW: (0, _v34.rem)(105),
                variant: "secondary",
                onClick: _v16,
                isDisabled: _v12,
                children: _v35.default.Cancel
              }), (0, _v1.jsx)(_v27.Button, {
                variant: "primary",
                minW: (0, _v34.rem)(105),
                ml: (0, _v34.rem)(12),
                onClick: () => {
                  _v1(!_v0), _v13(!0);
                },
                isDisabled: _v7 || _v14,
                isLoading: _v7 || _v12,
                children: _v0 ? _v35.default.TurnOff : _v35.default.TurnOn
              })]
            })]
          })
        })]
      }), _v2 ? (0, _v1.jsx)(_v43.Box, {
        pointerEvents: _v8 ? "none" : "auto",
        opacity: _v8 ? .5 : 1,
        w: "100%",
        onClick: () => {
          _v8 || _v10(!0);
        },
        children: _v2
      }) : (0, _v1.jsx)("div", {})]
    });
  };
  _v0.s(["ToggleRegistrationModal", 0, _v46], 0), _v0.s(["LiveLeadCapture", 0, ({
    sessionType: _v0,
    sessionId: _v1,
    section: _v2
  }) => {
    let _v3 = (0, _v9.useViewer)(),
      _v4 = (0, _v4.useToast)(),
      {
        trackLiveStreamRegistrationToggled: _v5
      } = (0, _v8.useLiveStreamBroadcasterTracking)(),
      {
        isOpen: _v6,
        onClose: _v7,
        onToggle: _v8
      } = (0, _v3.useDisclosure)(),
      {
        isOpen: _v9,
        onOpen: _v10,
        onClose: _v11
      } = (0, _v3.useDisclosure)(),
      [_v12, {
        loading: _v13,
        data: _v14
      }] = (0, _v6.usePatchUserLiveEvent)(),
      [_v15, {
        data: _v16
      }] = (0, _v6.useGetUserLiveEventLazy)(),
      _v17 = _v16?.user?.uri && _v3?.user?.id ? _v16?.user?.uri.includes(`${_v3?.user?.id}`) : null,
      [_v18, _v19] = _v19(_v1),
      {
        hasRegistration: _v20,
        status: _v21,
        schedule: _v22
      } = _v25(parseInt(_v1)),
      _v23 = !!(_v20 || _v14?.hasRegistration || _v16?.hasRegistration),
      _v24 = _v14?.schedule || _v16?.schedule,
      {
        capabilities: _v25,
        ready: _v26
      } = (0, _v5.useCapability)(["hasEnterprise", "hasLiveSubscription", "hasLiveEventLeadUpsell"], _v16?.user?.uri),
      _v27 = _v25?.hasLiveSubscription,
      _v28 = _v25?.hasLiveEventLeadUpsell,
      _v29 = _v24?.startTime ? _v24 : _v22 || null,
      _v30 = _v26 && void 0 !== _v27 && void 0 !== _v28 && (!_v27 || _v28);
    (0, _v26.useLeadCaptureDetails)(_v0, _v1), (0, _v2.useEffect)(() => {
      _v18();
    }, [_v18]), (0, _v2.useEffect)(() => {
      _v15({
        where: {
          userId: Number(_v3?.user?.id || 0),
          liveEventId: Number(_v1)
        },
        headers: _v21,
        select: _v22
      });
    }, [_v15, _v1, _v3?.user?.id]);
    let _v31 = (0, _v2.useCallback)(_v0 => {
        _v5({
          liveStreamNewStatus: _v0
        }), _v12({
          where: {
            userId: Number(_v3?.user?.id || 0),
            liveEventId: Number(_v1)
          },
          headers: _v21,
          select: _v22,
          variables: {
            hasRegistration: _v0,
            schedule: {
              ..._v29,
              rrule: void 0
            }
          }
        }).then(() => {
          _v4({
            status: "neutral",
            duration: 0,
            title: "",
            render: () => (0, _v1.jsx)(_v41, {
              hasRegistration: _v0,
              onClickUndo: () => {
                _v4.closeAll(), _v31(!_v0);
              }
            })
          }), _v7();
        });
      }, [_v12, _v1, _v5, _v29, _v3?.user?.id]),
      _v32 = (0, _v2.useCallback)(() => {
        new BroadcastChannel(_v39.LC_BROADCAST_CHANNEL).postMessage({
          code: _v39.LC_BROADCAST_CODES.SCHEDULE_CHANGED.code,
          message: "The event schedule has changed"
        });
      }, []),
      _v33 = (0, _v2.useCallback)(_v0 => {
        _v12({
          where: {
            userId: Number(_v3?.user?.id || 0),
            liveEventId: Number(_v1)
          },
          headers: _v21,
          select: _v22,
          variables: {
            schedule: _v0
          }
        }).then(_v32);
      }, [_v12, _v32, _v1, _v3?.user?.id]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v46, {
        isRegistrationOn: _v23,
        isOpen: _v6,
        onClose: _v7,
        setIsRegistrationOn: _v31,
        schedule: _v29,
        onScheduleChange: _v33,
        isLoadingRegistration: _v13
      }), (0, _v1.jsx)(_v38, {
        showModal: _v9,
        onClose: _v11,
        sessionId: _v1
      }), (0, _v1.jsx)(_v7.LeadCaptureAdmin, {
        type: _v0,
        entityId: _v1,
        showUpgradeNotice: !1 === _v17 && _v30,
        section: _v2,
        isRegistrationOn: _v23,
        eventSchedule: _v29,
        canCompleteEvent: _v19 && _v21 !== _v23.ENDED,
        onClickRegistration: _v8,
        hasUpsell: _v30,
        onClickEndEvent: _v10
      })]
    });
  }], 0);
}