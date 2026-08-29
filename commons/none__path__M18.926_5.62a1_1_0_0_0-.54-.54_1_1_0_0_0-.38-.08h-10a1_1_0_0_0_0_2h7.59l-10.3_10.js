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
  let _v13 = _v0 => (0, _v1.jsx)(_v12.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M18.926 5.62a1 1 0 0 0-.54-.54 1 1 0 0 0-.38-.08h-10a1 1 0 0 0 0 2h7.59l-10.3 10.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l10.29-10.3V16a1 1 0 0 0 2 0V6a1.001 1.001 0 0 0-.08-.38Z",
      fill: "currentColor"
    })
  });
  var _v14 = _v0.i(0);
  let _v15 = {
      svg: {
        width: "16px",
        height: "16px"
      }
    },
    _v16 = ({
      options: _v0,
      selectedId: _v1,
      onSelect: _v2,
      firstOptionRef: _v3
    }) => (0, _v1.jsx)(_v11.RadioGroup, {
      value: _v1 ?? "",
      onChange: _v0 => {
        let _v1 = _v0.find(_v0 => _v0.id === _v0);
        _v1 && _v2(_v1);
      },
      children: (0, _v1.jsx)(_v4.Stack, {
        spacing: 100,
        children: _v0.map((_v0, _v1) => {
          let _v2 = _v0.id === _v1,
            _v3 = "menu" === _v0.kind;
          return (0, _v1.jsxs)(_v10.Radio, {
            ref: 0 === _v1 ? _v3 : void 0,
            value: _v0.id,
            alignItems: "flex-start",
            width: "100%",
            px: "200",
            py: "200",
            borderRadius: "md",
            position: "relative",
            sx: _v15,
            children: [(0, _v1.jsxs)(_v9.Box, {
              pr: _v3 ? "600" : void 0,
              children: [(0, _v1.jsx)(_v5.Text, {
                variant: "body-md",
                fontWeight: "medium",
                children: _v0.name
              }), (0, _v1.jsx)(_v5.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v0.description
              }), _v2 && "external" === _v0.kind ? (0, _v1.jsxs)(_v2.Flex, {
                align: "center",
                gap: "100",
                mt: "200",
                color: "yellow.600",
                children: [(0, _v1.jsx)(_v13, {}), (0, _v1.jsx)(_v5.Text, {
                  variant: "body-sm",
                  children: (0, _v8.externalFormNote)()
                })]
              }) : null]
            }), _v3 ? (0, _v1.jsx)(_v9.Box, {
              position: "absolute",
              right: "200",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              color: "text-tertiary",
              children: (0, _v1.jsx)(_v14.ChevronRight, {})
            }) : null]
          }, _v0.id);
        })
      })
    });
  _v0.s(["ReportBody", 0, ({
    isLoading: _v0,
    hasData: _v1,
    error: _v2,
    step: _v3,
    currentOptions: _v4,
    selected: _v5,
    onSelectNode: _v6,
    onDone: _v7,
    firstOptionRef: _v8,
    commsOptOut: _v9
  }) => _v0 && !_v1 ? (0, _v1.jsx)(_v2.Flex, {
    justify: "center",
    py: "400",
    children: (0, _v1.jsx)(_v3.Spinner, {})
  }) : _v2 ? (0, _v1.jsx)(_v5.Text, {
    variant: "body-md",
    color: "text-secondary",
    children: (0, _v8.loadErrorMessage)()
  }) : "confirmation" === _v3 ? (0, _v1.jsx)(_v7.ConfirmationStep, {
    onDone: _v7
  }) : (0, _v1.jsxs)(_v4.Stack, {
    spacing: 200,
    children: [(0, _v1.jsx)(_v16, {
      options: _v4,
      selectedId: _v5?.id ?? null,
      onSelect: _v6,
      firstOptionRef: _v8
    }), _v9 ? (0, _v1.jsx)(_v6.CommsOptOutCheckbox, {
      ..._v9
    }) : null]
  })], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = ({
    help: _v0
  }) => null == _v0.url ? (0, _v1.jsxs)(_v2.Flex, {
    align: "center",
    gap: "1",
    color: "text-secondary",
    children: [(0, _v1.jsx)(_v20.QuestionCircle, {
      "aria-hidden": "true",
      boxSize: (0, _v19.rem)(14)
    }), (0, _v1.jsx)(_v5.Text, {
      variant: "body-md",
      children: _v0.text
    })]
  }) : (0, _v1.jsxs)(_v18.Link, {
    href: _v0.url,
    isExternal: !0,
    variant: "inline-primary",
    fontSize: "body-md",
    display: "inline-flex",
    alignItems: "center",
    gap: "1",
    children: [(0, _v1.jsx)(_v20.QuestionCircle, {
      "aria-hidden": "true",
      boxSize: (0, _v19.rem)(14)
    }), _v0.text]
  });
  _v0.s(["ReportFooter", 0, ({
    submitLabel: _v0,
    submitDisabled: _v1,
    onSubmit: _v2,
    help: _v3,
    action: _v4
  }) => {
    let _v5 = (0, _v1.jsx)(_v17.Button, {
      variant: "primary",
      size: "md",
      width: _v4 ? void 0 : "100%",
      onClick: _v2,
      isDisabled: _v1,
      children: _v0
    });
    return (0, _v1.jsxs)(_v2.Flex, {
      direction: "column",
      align: "center",
      width: "100%",
      gap: "100",
      children: [_v3 && (0, _v1.jsx)(_v21, {
        help: _v3
      }), (0, _v1.jsxs)(_v2.Flex, {
        align: "center",
        justify: "space-between",
        width: "100%",
        gap: "200",
        children: [_v4 && (0, _v1.jsx)(_v2.Flex, {
          flex: "1",
          minW: "0",
          align: "center",
          children: _v4
        }), _v5]
      })]
    });
  }], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  _v0.s(["ReportHelpLink", 0, _v0 => (0, _v1.jsx)(_v23.Tooltip, {
    label: (0, _v8.helpLabel)(),
    children: (0, _v1.jsx)(_v22.IconButton, {
      as: "a",
      href: "/help/violations",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": (0, _v8.helpLabel)(),
      variant: "tertiary",
      size: "sm",
      icon: (0, _v1.jsx)(_v20.QuestionCircle, {}),
      ..._v0
    })
  })], 0);
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  _v0.s(["useReport", 0, function ({
    onClose: _v0,
    discovery: _v1,
    submitAdapter: _v2,
    onSubmitted: _v3,
    submitFailureMessage: _v4,
    resolveExternalUrl: _v5,
    offerCommsOptOut: _v6 = !1
  }) {
    let _v7,
      [_v8, _v9] = (0, _v24.useState)(null),
      [_v10, _v11] = (0, _v24.useState)("navigate"),
      [_v12, _v13] = (0, _v24.useState)(!1),
      {
        root: _v14,
        error: _v15,
        isLoading: _v16
      } = _v1,
      _v17 = function (_v0) {
        let [_v1, _v2] = (0, _v24.useState)([]),
          _v3 = (0, _v24.useMemo)(() => {
            let _v0 = _v0;
            for (let _v0 of _v1) {
              let _v0 = _v0.children.find(_v0 => _v0.id === _v0);
              if (_v0?.kind !== "menu") break;
              _v0 = _v0;
            }
            return _v0;
          }, [_v0, _v1]),
          _v4 = (0, _v24.useCallback)(_v0 => _v2(_v0 => [..._v0, _v0]), []),
          _v5 = (0, _v24.useCallback)(() => _v2(_v0 => _v0.slice(0, -1)), []),
          _v6 = (0, _v24.useCallback)(() => _v2([]), []);
        return {
          current: _v3,
          depth: _v1.length,
          enter: _v4,
          back: _v5,
          reset: _v6
        };
      }(_v14),
      {
        status: _v18,
        postReport: _v19
      } = _v2,
      _v20 = (0, _v25.useToast)(),
      _v21 = "posting" === _v18.state,
      _v22 = (0, _v24.useEffectEvent)(_v0 => {
        "failed" === _v0 ? _v20({
          title: _v4,
          status: "error",
          icon: (0, _v1.jsx)(_v26.CircleExclamationFilled, {})
        }) : (_v11("confirmation"), _v3?.());
      });
    (0, _v24.useEffect)(() => {
      ("succeeded" === _v18.state || "failed" === _v18.state) && _v22(_v18.state);
    }, [_v18.state]);
    let _v23 = (0, _v24.useCallback)(() => {
        _v17.reset(), _v9(null), _v11("navigate"), _v13(!1);
      }, [_v17]),
      _v24 = (0, _v24.useCallback)(() => {
        _v23(), _v0();
      }, [_v23, _v0]),
      _v25 = _v8?.kind === "external" ? _v5?.(_v8.url) ?? _v8.url : "",
      _v26 = _v25.length > 0 ? _v25 : null,
      _v27 = "navigate" === _v10 && _v17.depth > 0,
      _v28 = _v17.current.name,
      _v29 = _v17.current.question,
      _v30 = _v17.current.children.length > 0 && _v17.current.children.every(_v0 => "submit" === _v0.kind) ? (0, _v8.submitReportLabel)() : (0, _v8.continueLabel)(),
      _v31 = !0;
    _v8 && (_v31 = !1, _v30 = "submit" === _v8.kind ? (0, _v8.submitReportLabel)() : "external" === _v8.kind ? (0, _v8.openFormLabel)() : (0, _v8.continueLabel)());
    let _v32 = _v8?.kind === "external" && null === _v26;
    _v31 = _v31 || _v21 || _v32, _v7 = _v8?.kind === "submit" ? 100 : Math.min(15 + (_v17.depth + +!!_v8) * 30, 85);
    let _v33 = "confirmation" !== _v10 && !_v15 && !(_v16 && 0 === _v17.current.children.length),
      _v34 = _v6 && _v8?.kind === "submit" ? {
        isChecked: _v12,
        onChange: _v13
      } : null;
    return {
      step: _v10,
      isLoading: _v16,
      hasData: _v14.children.length > 0,
      error: _v15,
      isPosting: _v21,
      currentOptions: _v17.current.children,
      selected: _v8,
      onSelectNode: _v0 => _v9(_v0),
      commsOptOut: _v34,
      title: _v28,
      subtitle: _v29,
      help: _v17.current.help,
      progress: _v7,
      canGoBack: _v27,
      showFooter: _v33,
      submitLabel: _v30,
      submitDisabled: _v31,
      onSubmit: () => {
        if (_v8) switch (_v8.kind) {
          case "menu":
            _v17.enter(_v8.id), _v9(null);
            return;
          case "external":
            return;
          case "submit":
            _v19(_v8.reasonUuid, {
              optOutOfCommunications: _v12
            });
            return;
        }
      },
      externalHandoffUrl: _v26,
      onBack: () => {
        _v9(null), _v17.back();
      },
      handleClose: _v24
    };
  }], 0);
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  async function _v30({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v28.measureLatency)("getReportReasons", "GET", async () => {
      let _v0 = await fetch(`${_v0}/report/reasons?${(0, _v29.searchQueryString)(_v2)}&fields=${_v1.map(_v29.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v29.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v29.deepCamelCase)(_v1);
    });
  }
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  function _v35(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v34.useGctlConfig)();
    return (0, _v31.default)(_v2 ? `/report/reasons${(0, _v33.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v30({
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
  "true" === _v27.default.env.STORYBOOK && (0, _v33.assignMswData)(_v35, {
    endpoint: "/report/reasons",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v33.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v32.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v34.useGctlConfig)(),
      [_v5, _v6] = (0, _v33.useInternalState)();
    return [(0, _v24.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/report/reasons${(0, _v33.serializeQuery)(_v0)}`, _v30({
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
    endpoint: "/report/reasons",
    method: "GET"
  });
  let _v36 = {
      "incorrect-rating": () => ({
        text: (0, _v8.contentRatingsHelpLabel)(),
        url: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426157083537-About-content-ratings"
      })
    },
    _v37 = ["reasons.id", "reasons.parentId", "reasons.kind", "reasons.name", "reasons.description", "reasons.externalUrl", "reasons.gendered.name", "reasons.gendered.description", "reasons.gendered.uuid"];
  _v0.s(["useReportReasonsDiscovery", 0, function ({
    contentType: _v0,
    headerTitle: _v1
  }) {
    let {
        data: _v2,
        error: _v3,
        isLoading: _v4
      } = _v35(() => ({
        select: _v37,
        query: {
          contentType: _v0
        }
      })),
      _v5 = _v2?.reasons;
    return {
      root: (0, _v24.useMemo)(() => function (_v0, _v1) {
        let _v2 = new Map();
        for (let _v0 of _v0) _v2.set(_v0.id, function (_v0) {
          let _v1 = {
            id: _v0.id,
            name: _v0.name,
            description: _v0.description
          };
          return "category" === _v0.kind ? {
            ..._v1,
            kind: "menu",
            question: (0, _v8.subtitleNested)(),
            help: _v36[_v0.id]?.(),
            children: []
          } : "external" === _v0.kind ? {
            ..._v1,
            kind: "external",
            url: _v0.externalUrl ?? ""
          } : _v0.gendered ? {
            id: `${_v0.id}:fork`,
            name: _v0.name,
            description: _v0.description,
            kind: "menu",
            question: (0, _v8.genderForkPrompt)(),
            children: [{
              id: _v0.gendered.uuid,
              name: (0, _v8.genderForkYesLabel)(),
              description: (0, _v8.genderForkYesDesc)(),
              kind: "submit",
              reasonUuid: _v0.gendered.uuid
            }, {
              id: _v0.id,
              name: (0, _v8.genderForkNoLabel)(),
              description: (0, _v8.genderForkNoDesc)(),
              kind: "submit",
              reasonUuid: _v0.id
            }]
          } : {
            ..._v1,
            kind: "submit",
            reasonUuid: _v0.id
          };
        }(_v0));
        let _v3 = {
          id: "root",
          name: _v1,
          kind: "menu",
          question: (0, _v8.subtitleTopLevel)(),
          children: []
        };
        for (let _v0 of _v0) {
          let _v0 = _v2.get(_v0.id);
          if (!_v0) continue;
          let _v1 = null == _v0.parentId ? _v3 : _v2.get(_v0.parentId);
          _v1?.kind === "menu" && _v1.children.push(_v0);
        }
        return _v3;
      }(_v5 ?? [], _v1), [_v5, _v1]),
      isLoading: _v4,
      error: _v3
    };
  }], 0), _v0.s(["withReportedContentUrl", 0, function (_v0, _v1) {
    let _v2,
      _v3 = window.location.origin;
    try {
      _v2 = new URL(_v0, _v3);
    } catch {
      return _v0;
    }
    return "/report-illegal-content" !== _v2.pathname ? _v0 : (_v2.searchParams.set("url", `${_v2.origin}/${_v1}`), _v2.toString());
  }], 0);
  let _v38 = ["iphone", "android"],
    _v39 = /\/report\/?$/;
  _v0.s(["reportSourceHint", 0, function () {
    if (!_v39.test(window.location.pathname)) return;
    let _v0 = new URLSearchParams(window.location.search).get("source");
    return _v38.find(_v0 => _v0 === _v0);
  }], 0);
}