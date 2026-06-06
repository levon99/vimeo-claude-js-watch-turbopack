{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  async function _v18({
    baseUrl: _v0,
    select: _v1,
    ..._v2
  }) {
    return (0, _v16.measureLatency)("getMeExpert", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/expert?fields=${_v1.map(_v17.intoSnakeCase).join(",")}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  async function _v19({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v16.measureLatency)("postMeExpert", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/expert?fields=${_v1.map(_v17.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v17.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23() {
    let {
        mutate: _v0
      } = (0, _v21.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v22.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/expert${(0, _v15.serializeQuery)(_v0)}`, _v18({
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
  function _v24() {
    let {
        mutate: _v0
      } = (0, _v21.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v22.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/expert${(0, _v15.serializeQuery)(_v0)}`, _v19({
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
  "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v22.useGctlConfig)();
    return (0, _v20.default)(_v2 ? `/me/expert${(0, _v15.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v18({
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
    endpoint: "/me/expert",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v23, {
    endpoint: "/me/expert",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v24, {
    endpoint: "/me/expert",
    method: "POST"
  });
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v29.default.div(_v1 || (_v1 = (0, _v31.a)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: ", ") {\n    > * {\n      display: none;\n    }\n\n    > :last-child {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: ", ") {\n    > * {\n      display: none;\n    }\n\n    > :last-child {\n      display: block;\n    }\n  }\n"])), (0, _v32.em)(768)),
    _v37 = (0, _v29.css)(_v2 || (_v2 = (0, _v31.a)(["\n  position: relative;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  line-height: 1.5rem;\n\n  &:last-child {\n    padding-right: 1.334rem;\n  }\n"], ["\n  position: relative;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  line-height: 1.5rem;\n\n  &:last-child {\n    padding-right: 1.334rem;\n  }\n"]))),
    _v38 = (0, _v29.default)(_v33.Link)(_v37),
    _v39 = (0, _v29.default)(_v34.Text)(_v37),
    _v40 = _v29.default.span(_v3 || (_v3 = (0, _v31.a)(["\n  position: absolute;\n  top: 0.125rem;\n  right: 0;\n\n  svg {\n    width: 1rem;\n    height: 1rem;\n  }\n"], ["\n  position: absolute;\n  top: 0.125rem;\n  right: 0;\n\n  svg {\n    width: 1rem;\n    height: 1rem;\n  }\n"]))),
    _v41 = _v29.default.a(_v4 || (_v4 = (0, _v31.a)(["\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 0.25rem;\n  display: inline-block !important;\n\n  svg {\n    width: 1.5rem;\n    height: 1.5rem;\n\n    * {\n      fill: ", ";\n    }\n  }\n\n  @media screen and (min-width: ", ") {\n    display: none !important;\n  }\n"], ["\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 0.25rem;\n  display: inline-block !important;\n\n  svg {\n    width: 1.5rem;\n    height: 1.5rem;\n\n    * {\n      fill: ", ";\n    }\n  }\n\n  @media screen and (min-width: ", ") {\n    display: none !important;\n  }\n"])), function (_v0) {
      return _v0.theme.formats.primary;
    }, (0, _v32.em)(768)),
    _v42 = (0, _v29.default)(_v35.ChevronRight)(_v5 || (_v5 = (0, _v31.a)(["\n  width: 1.5rem;\n  height: 1.5rem;\n  display: none;\n  right: 0;\n\n  * {\n    fill: ", ";\n  }\n\n  @media screen and (min-width: ", ") {\n    display: inline-block;\n  }\n"], ["\n  width: 1.5rem;\n  height: 1.5rem;\n  display: none;\n  right: 0;\n\n  * {\n    fill: ", ";\n  }\n\n  @media screen and (min-width: ", ") {\n    display: inline-block;\n  }\n"])), function (_v0) {
      return _v0.theme.formats.soft;
    }, (0, _v32.em)(768)),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = (0, _v43.withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.forwardRef,
        _v3 = (0, _v31.b)(_v0, ["children", "forwardRef"]),
        _v4 = _v1[_v1.length - 2].props.href;
      return _v8.default.createElement(_v36, (0, _v31.c)({
        ref: _v2
      }, _v3), _v8.default.createElement(_v41, {
        href: _v4
      }, _v8.default.createElement(_v44.ArrowLeft, null)), _v1);
    });
  _v45.Link = function (_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.href,
      _v3 = (0, _v31.b)(_v0, ["children", "href"]);
    return _v8.default.createElement(_v8.default.Fragment, null, _v8.default.createElement(_v38, (0, _v31.c)({
      href: _v2,
      variant: "minimal",
      format: "primary"
    }, _v3), _v1), _v8.default.createElement(_v42, null));
  }, _v45.Current = function (_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.icon,
      _v3 = (0, _v31.b)(_v0, ["children", "icon"]);
    return _v8.default.createElement(_v39, (0, _v31.c)({}, _v3), _v1, _v8.default.createElement(_v40, null, _v2));
  };
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = (0, _v29.default)(_v48.Checkbox).withConfig({
    displayName: "styles__StyledCheckbox",
    componentId: "sc-46600ff3-0"
  })`
  div[type='checkbox'] {
    border: ${_v0 => _v0.isError ? "1px solid red" : "1px solid black"};
  }
`;
  _v29.default.div.withConfig({
    displayName: "styles__PageContentWrapper",
    componentId: "sc-46600ff3-1"
  })`
  padding: ${(0, _v47.rem)(24)} ${(0, _v47.rem)(40)};
`, _v29.default.div.withConfig({
    displayName: "styles__BodyContentWrapper",
    componentId: "sc-46600ff3-2"
  })`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;
  let _v52 = _v29.default.div.withConfig({
      displayName: "styles__LoaderContainer",
      componentId: "sc-46600ff3-3"
    })`
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,
    _v53 = _v29.default.div.withConfig({
      displayName: "styles__TopImageWrapper",
      componentId: "sc-46600ff3-4"
    })`
  position: relative;
`,
    _v54 = _v29.default.div.withConfig({
      displayName: "styles__TopImage",
      componentId: "sc-46600ff3-5"
    })`
  img {
    border-radius: ${(0, _v47.rem)(8)};
  }
  height: auto;
  width: 35%;
  margin-left: 50%;
  max-width: ${(0, _v47.rem)(179)};
  display: none;
  @media (min-width: ${_v50.DESKTOP}) {
    display: block;
  }
`,
    _v55 = _v29.default.div.withConfig({
      displayName: "styles__BottomImageLeft",
      componentId: "sc-46600ff3-6"
    })`
  img {
    border-radius: ${(0, _v47.rem)(8)};
  }
  height: auto;
  width: 40%;
  margin-top: ${(0, _v47.rem)(32)};
  border-radius: ${(0, _v47.rem)(8)};
  position: absolute;
  left: 13%;
  bottom: 10%;
  z-index: 1;
  max-width: ${(0, _v47.rem)(212)};
  display: none;
  @media (min-width: ${_v50.DESKTOP}) {
    display: inline;
  }
`,
    _v56 = _v29.default.div.withConfig({
      displayName: "styles__BottomImageRight",
      componentId: "sc-46600ff3-7"
    })`
  img {
    border-radius: ${(0, _v47.rem)(8)};
  }
  height: auto;
  width: 50%;
  margin-top: ${(0, _v47.rem)(48)};
  border-radius: ${(0, _v47.rem)(8)};
  margin-left: 40%;
  max-width: ${(0, _v47.rem)(257)};
  display: none;
  @media (min-width: ${_v50.DESKTOP}) {
    display: block;
  }
`,
    _v57 = _v29.default.section.withConfig({
      displayName: "styles__Wrapper",
      componentId: "sc-46600ff3-8"
    })`
  width: 100%;
  padding: 0;
`,
    _v58 = _v29.default.div.withConfig({
      displayName: "styles__FormHeading",
      componentId: "sc-46600ff3-9"
    })`
  font-size: ${(0, _v47.rem)(36)};
  font-weight: 700;
  font-style: normal;
  margin: 0 auto;
  max-width: ${(0, _v47.rem)(520)};
  @media (min-width: ${_v50.DESKTOP}) {
    font-size: ${(0, _v47.rem)(47)};
    text-align: start;
    margin: 0 0;
    max-width: ${(0, _v47.rem)(490)};
  }
  @media (min-width: ${_v50.HD}) {
    max-width: ${(0, _v47.rem)(550)};
  }
`,
    _v59 = _v29.default.div.withConfig({
      displayName: "styles__FormInputWrapper",
      componentId: "sc-46600ff3-10"
    })`
  align-items: flex-start;
  display: flex;
  margin-top: ${(0, _v47.rem)(32)};
  justify-content: center;
  @media (min-width: ${_v50.DESKTOP}) {
    justify-content: flex-start;
  }
`,
    _v60 = _v29.default.p.withConfig({
      displayName: "styles__CheckboxText",
      componentId: "sc-46600ff3-11"
    })`
  cursor: pointer;
  font-size: ${(0, _v47.rem)(14)};
  letter-spacing: 0;
  line-height: ${(0, _v47.rem)(21.6)};
  margin-left: ${(0, _v47.rem)(16)};
  min-height: ${(0, _v47.rem)(87)};

  @media (min-width: ${_v50.DESKTOP}) {
    max-width: ${(0, _v47.rem)(460)};
  }
  @media (min-width: ${_v50.HD}) {
    max-width: ${(0, _v47.rem)(514)};
  }
`,
    _v61 = _v29.default.div.withConfig({
      displayName: "styles__FormButtonsWrapper",
      componentId: "sc-46600ff3-12"
    })`
  top: ${(0, _v47.rem)(633)};
  left: ${(0, _v47.rem)(191)};
  margin-top: ${(0, _v47.rem)(24)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: ${_v50.DESKTOP}) {
    justify-content: flex-start;
  }
`,
    _v62 = (0, _v29.default)(_v25.Button).withConfig({
      displayName: "styles__LearnMoreButton",
      componentId: "sc-46600ff3-13"
    })`
  margin-left: ${(0, _v47.rem)(24)};
`,
    _v63 = _v29.default.div.withConfig({
      displayName: "styles__PathWrapper",
      componentId: "sc-46600ff3-14"
    })`
  z-index: 1;
  margin-left: ${(0, _v47.rem)(24)};
  margin-top: ${(0, _v47.rem)(16)};
  position: absolute;
  font-weight: 700;
  @media (min-width: ${_v50.DESKTOP}) {
    margin-left: ${(0, _v47.rem)(40)};
    margin-top: ${(0, _v47.rem)(24)};
  }
`,
    _v64 = _v29.default.a.withConfig({
      displayName: "styles__FeaturePageLink",
      componentId: "sc-46600ff3-15"
    })`
  svg {
    position: relative;
    top: ${(0, _v47.rem)(2)};
    margin-left: ${(0, _v47.rem)(6)};
    width: ${(0, _v47.rem)(14)};
  }

  &:hover {
    svg {
      path {
        fill: ${(0, _v30.blue)(400)};
      }
    }
    text-decoration: underline;
  }
  cursor: pointer;
  color: #00adef;
  text-decoration: none;
`;
  (0, _v29.default)(_v49.Paragraph).attrs({
    size: "2"
  }).withConfig({
    displayName: "styles__StyledParagraph",
    componentId: "sc-46600ff3-16"
  })`
  color: slate(400);
  top: ${(0, _v47.rem)(-8)};
  position: relative;

  a {
    color: inherit;
  }
`;
  let _v65 = _v29.default.div.withConfig({
      displayName: "styles__FlexContainer",
      componentId: "sc-46600ff3-17"
    })`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: ${(0, _v47.rem)(54)} 0;
  @media (min-width: ${_v50.DESKTOP}) {
    margin: ${(0, _v47.rem)(54)} ${(0, _v47.rem)(40)};
  }
`,
    _v66 = _v29.default.div.withConfig({
      displayName: "styles__ErrorMessage",
      componentId: "sc-46600ff3-18"
    })`
  font-size: ${(0, _v47.rem)(12)};
  color: #ff4d4d;
  margin-top: ${(0, _v47.rem)(16)};
`,
    _v67 = _v29.default.div.withConfig({
      displayName: "styles__VisualWrapper",
      componentId: "sc-46600ff3-19"
    })`
  width: 40%;
  margin: 0 ${(0, _v47.rem)(20)};
  max-width: ${(0, _v47.rem)(514)};
  position: absolute;
  display: none;
  @media (min-width: ${_v50.DESKTOP}) {
    position: relative;
    display: block;
    padding-top: ${(0, _v47.rem)(100)};
    margin-left: ${(0, _v47.rem)(30)};
  }
  @media (min-width: ${_v50.HD}) {
    padding-top: 0;
    margin-left: ${(0, _v47.rem)(34)};
  }
`,
    _v68 = _v29.default.div.withConfig({
      displayName: "styles__EnrollmentWrapper",
      componentId: "sc-46600ff3-20"
    })`
  width: 85%;
  margin: 0 0;
  padding-top: ${(0, _v47.rem)(25)};
  max-width: ${(0, _v47.rem)(400)};
  @media (min-width: ${_v50.DESKTOP}) {
    max-width: none;
    padding-top: ${(0, _v47.rem)(100)};
    min-width: ${(0, _v47.rem)(490)};
    width: 40%;
    margin-right: ${(0, _v47.rem)(30)};
  }
  @media (min-width: ${_v50.HD}) {
    margin-right: ${(0, _v47.rem)(34)};
  }
`,
    _v69 = _v29.default.div.withConfig({
      displayName: "styles__HomePageWrapper",
      componentId: "sc-46600ff3-21"
    })`
  background: white;
  overflow: hidden;
  top: ${(0, _v47.rem)(40)};
  width: 100%;
  z-index: 12;
`,
    _v70 = _v29.default.div.withConfig({
      displayName: "styles__Video",
      componentId: "sc-46600ff3-22"
    })`
  img {
    border-radius: ${(0, _v47.rem)(8)};
  }
  width: ${(0, _v47.rem)(327)};
  min-width: ${(0, _v47.rem)(327)};
  position: relative;
  @media (min-width: ${_v50.DESKTOP}) {
    width: 100%;
  }
`,
    _v71 = _v29.default.div.withConfig({
      displayName: "styles__VideoWrapper",
      componentId: "sc-46600ff3-23"
    })`
  cursor: pointer;
  height: auto;
  margin: auto;
  margin-top: ${(0, _v47.rem)(32)};
  border-radius: ${(0, _v47.rem)(8)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  @media (min-width: ${_v50.DESKTOP}) {
    display: ${({
      isMobile: _v0
    }) => _v0 ? "none" : "block"};
    margin-top: ${(0, _v47.rem)(16)};
  }
`,
    _v72 = _v29.default.div.withConfig({
      displayName: "styles__BasicUserWarningHeading",
      componentId: "sc-46600ff3-24"
    })`
  color: #313f48;
  font-size: ${(0, _v47.rem)(16)};
  letter-spacing: 0;
  line-height: ${(0, _v47.rem)(20)};
  margin: ${(0, _v47.rem)(14)} auto;
  max-width: ${(0, _v47.rem)(520)};
  font-weight: 700;
  @media (min-width: ${_v50.DESKTOP}) {
    font-size: ${(0, _v47.rem)(16)};
    margin: ${(0, _v47.rem)(25)} 0;
    text-align: start;
  }
`;
  function _v73(_v0) {
    let _v1 = (0, _v8.useMemo)(_v46.getTranslatedStrings, []);
    return (0, _v6.jsx)(_v63, {
      children: (0, _v6.jsxs)(_v74, {
        color: _v0.pathColor,
        children: [(0, _v6.jsxs)(_v45.Link, {
          href: "/",
          children: [_v1.Home, "  "]
        }), (0, _v6.jsxs)(_v75, {
          color: _v0.currentPathColor,
          children: ["  ", _v1.Experts]
        })]
      })
    });
  }
  _v29.default.hr.withConfig({
    displayName: "styles__HorizontalRule",
    componentId: "sc-46600ff3-25"
  })`
  margin: ${(0, _v47.rem)(32)} 0;
  max-width: ${(0, _v47.rem)(520)};
  @media (min-width: ${_v50.DESKTOP}) {
    max-width: ${(0, _v47.rem)(490)};
  }
  @media (min-width: ${_v50.HD}) {
    max-width: ${(0, _v47.rem)(550)};
  }
`;
  let _v74 = (0, _v29.default)(_v45).withConfig({
      displayName: "Breadcrumbs__StyledPath",
      componentId: "sc-12f3401b-0"
    })`
  a {
    color: ${_v0 => _v0.color ? _v0.color : "rgba(132, 132, 132, 1)"};
  }
  svg > path {
    fill: ${_v0 => _v0.color ? _v0.color : "rgba(132, 132, 132, 1)"};
  }
`,
    _v75 = (0, _v29.default)(_v45.Current).withConfig({
      displayName: "Breadcrumbs__StyledPathCurrent",
      componentId: "sc-12f3401b-1"
    })`
  color: ${_v0 => _v0.color ? _v0.color : (0, _v30.slate)(800)};
`;
  function _v76() {
    let _v0 = (0, _v8.useMemo)(_v46.getTranslatedStrings, []);
    return (0, _v6.jsx)(_v77, {
      children: (0, _v6.jsx)("div", {
        children: _v0.NonExpertsSubHeadingText
      })
    });
  }
  let _v77 = _v29.default.div.withConfig({
    displayName: "EnrollmentFormText__Container",
    componentId: "sc-a96f0d25-0"
  })`
  color: var(--ebony-clay);
  font-size: ${(0, _v47.rem)(14)};
  letter-spacing: 0;
  line-height: ${(0, _v47.rem)(26)};
  margin: ${(0, _v47.rem)(14)} auto;
  max-width: ${(0, _v47.rem)(520)};
  @media (min-width: ${_v50.DESKTOP}) {
    margin: ${(0, _v47.rem)(25)} 0;
    text-align: start;
    max-width: ${(0, _v47.rem)(490)};
  }
  @media (min-width: ${_v50.HD}) {
    max-width: ${(0, _v47.rem)(550)};
  }
`;
  var _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = (0, _v8.forwardRef)(function (_v0, _v1) {
      return _v8.default.createElement("svg", (0, _v31.c)({
        viewBox: "0 0 24 24",
        ref: _v1
      }, _v0), _v8.default.createElement("polygon", {
        points: "18,12 6,19 6,5 ",
        fill: "#1A2E3B",
        stroke: "#1A2E3B",
        strokeLinejoin: "round",
        strokeWidth: 2
      }));
    }),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0);
  function _v84({
    isShowing: _v0,
    setIsShowing: _v1,
    assetUrls: _v2
  }) {
    let [_v3, _v4] = (0, _v8.useState)(!0),
      [_v5, _v6] = (0, _v8.useState)(!0),
      _v7 = (0, _v8.useRef)(0),
      _v8 = (0, _v8.useRef)(0),
      _v9 = (0, _v8.useRef)(null),
      _v10 = (0, _v8.useRef)(null),
      _v11 = `//${_v2.player_url}/video/${_v50.INTRO_CLIP_ID}/config?on_site=1&v=1.0`,
      {
        player: _v12
      } = (0, _v83.usePlayer)(_v10, _v50.INTRO_CLIP_ID, !0, _v11);
    (0, _v8.useLayoutEffect)(() => {
      let _v0 = _v0 => {
        let _v1 = _v0.target;
        _v9.current?.contains(_v1) || _v1(!1);
      };
      return document.addEventListener("click", _v0, !0), () => {
        document.removeEventListener("click", _v0, !0);
      };
    }, [_v0]), (0, _v8.useEffect)(() => {
      _v12 && (_v12.play && _v0 ? _v12.play() : _v12.pause && !_v12.paused && _v12.pause());
    }, [_v0, _v12]), (0, _v8.useEffect)(() => {
      _v6(_v0), _v12 && (_v12.muted = !_v0);
    }, [_v0]);
    let _v13 = (0, _v78.default)(() => {
        _v4(!0), clearTimeout(_v7.current), _v7.current = window.setTimeout(() => {
          _v4(!1);
        }, 0);
      }, 100),
      _v14 = () => {
        _v12 && (_v12.paused ? (_v12.play(), _v6(!0)) : (_v12.pause(), _v6(!1)));
      };
    return (0, _v8.useEffect)(() => () => {
      _v7 && _v7.current && clearTimeout(_v7.current), _v8 && _v8.current && clearTimeout(_v8.current);
    }, []), (0, _v6.jsx)(_v85, {
      show: _v0,
      children: (0, _v6.jsx)(_v86, {
        children: (0, _v6.jsxs)(_v87, {
          ref: _v9,
          children: [(0, _v6.jsx)(_v88, {
            onClick: () => _v1(!1),
            children: (0, _v6.jsx)(_v80.DismissX, {})
          }), (0, _v6.jsxs)(_v90, {
            onMouseMove: _v13,
            onMouseLeave: () => {
              _v8.current = window.setTimeout(() => {
                _v4(!1);
              }, 300);
            },
            children: [(0, _v6.jsx)("div", {
              className: "player",
              ref: _v10
            }), _v3 ? (0, _v6.jsx)(_v89, {
              children: _v5 ? (0, _v6.jsx)(_v82.Pause, {
                onClick: _v14
              }) : (0, _v6.jsx)(_v81, {
                onClick: _v14
              })
            }) : null]
          })]
        })
      })
    });
  }
  let _v85 = _v29.default.div.withConfig({
      displayName: "IntroVideoPlayer__ModalOverlay",
      componentId: "sc-8b1b4def-0"
    })`
  display: none;
  background: ${(0, _v79.rgba)(_v30.black, .8)};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  ${({
      show: _v0
    }) => _v0 && _v29.css`
      display: flex;
    `}
`,
    _v86 = _v29.default.div.withConfig({
      displayName: "IntroVideoPlayer__ModalContent",
      componentId: "sc-8b1b4def-1"
    })`
  display: flex;
  align-items: center;
  height: 100%;
  margin: auto;
`,
    _v87 = _v29.default.div.withConfig({
      displayName: "IntroVideoPlayer__ModalInner",
      componentId: "sc-8b1b4def-2"
    })`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  width: ${(0, _v79.rem)(960)};
  background-color: ${_v30.white};
`,
    _v88 = _v29.default.div.withConfig({
      displayName: "IntroVideoPlayer__DismissXWrapper",
      componentId: "sc-8b1b4def-3"
    })`
  position: absolute;
  top: ${(0, _v79.rem)(16)};
  right: ${(0, _v79.rem)(16)};
  width: ${(0, _v79.rem)(40)};
  height: ${(0, _v79.rem)(40)};
  z-index: 10;
  cursor: pointer;
  background: #0000004d;
  border-radius: ${(0, _v79.rem)(8)};
  svg {
    width: ${(0, _v79.rem)(16)};
    height: ${(0, _v79.rem)(16)};
    margin: ${(0, _v79.rem)(12)};
  }
  svg > path {
    fill: white;
    stroke-width: ${(0, _v79.rem)(2)};
    stroke: white;
  }
`,
    _v89 = _v29.default.div.withConfig({
      displayName: "IntroVideoPlayer__Background",
      componentId: "sc-8b1b4def-4"
    })`
  width: ${(0, _v79.rem)(65)};
  height: ${(0, _v79.rem)(40)};
  background: rgba(23, 35, 34, 0.75);
  border-radius: ${(0, _v79.rem)(5)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`,
    _v90 = _v29.default.div.withConfig({
      displayName: "IntroVideoPlayer__Container",
      componentId: "sc-8b1b4def-5"
    })`
  .player {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  }
  svg {
    width: ${(0, _v79.rem)(36)};
    height: ${(0, _v79.rem)(28)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    polygon {
      fill: white;
      stroke: none;
    }
    path {
      fill: white;
      stroke: none;
    }
  }
`,
    _v91 = ["mobile", "desktop", "hd"],
    _v92 = {
      mobile: `${(0, _v79.em)(375)}`,
      desktop: `${(0, _v79.em)(0)}`,
      hd: `${(0, _v79.em)(0)}`
    },
    _v93 = {
      mobile: "375px",
      desktop: "1024px",
      hd: "1440px"
    },
    _v94 = _v0 => (0, _v6.jsx)(_v6.Fragment, {
      children: _v91.slice().reverse().map(_v0 => _v0.breakPoints[_v0] ? (0, _v6.jsx)("source", {
        srcSet: `${_v0.breakPoints[_v0]} 1x, ${_v95(_v0.breakPoints[_v0])} 2x`,
        media: `(min-width: ${_v93[_v0]})`,
        type: _v0.type ? `image/${_v0.type}` : void 0
      }, _v0) : null)
    }),
    _v95 = _v0 => {
      if (!_v0) return _v0;
      let _v1 = /w=(\d+)/,
        _v2 = _v0.match(_v1);
      if (!_v2 || _v2.length < 2) return _v0;
      let _v3 = Number(_v2[1]);
      return _v0.replace(_v1, `w=${2 * _v3}`);
    },
    _v96 = _v29.default.picture.withConfig({
      displayName: "Picture__Container",
      componentId: "sc-8f9302fa-0"
    })`
  display: block;
  ${_v0 => _v0.height && `height: ${_v0.height}`};
  ${_v0 => _v0.width && `width: ${_v0.width}`};
  margin: ${_v0 => _v0.margin && _v0.margin};

  ${_v0 => {
      if (!_v0.dimensions) return "";
      let _v1 = _v0.dimensions,
        _v2 = _v91.find(_v0 => _v1[_v0]);
      return `${_v2 && `
        height: ${_v1[_v2]?.h} !important;
        ${_v1[_v2]?.w ? `width: ${_v1[_v2]?.w} !important;` : ""}
      `}` + Object.keys(_v1).map(_v0 => _v0 === _v2 ? "" : `
          @media (min-width: ${_v92[_v0]}) {
            height: ${_v1[_v0]?.h} !important;
            ${_v1[_v0]?.w ? `width: ${_v1[_v0]?.w} !important;` : ""}
          }
        `).join("");
    }}
`,
    _v97 = _v29.default.img.withConfig({
      displayName: "Picture__StyledImage",
      componentId: "sc-8f9302fa-1"
    })`
  object-fit: ${_v0 => _v0.objectFit ? _v0.objectFit : "contain"};
  ${_v0 => _v0.objectPosition && `object-position: ${_v0.objectPosition};`}
  ${_v0 => _v0.borderRadius && `border-radius: ${_v0.borderRadius};`}
  ${_v0 => _v0.alwaysOnTop && "z-index: 2;"}
  ${_v0 => _v0.isAbsolute ? _v29.css`
          position: absolute;
          left: 0;
          top: 0;
        ` : "position: relative"};
  ${_v0 => _v0.align && `object-position: ${_v0.align};`}
  width: 100%;
  height: 100%;
`,
    _v98 = (_v0, _v1) => {
      let _v2 = {};
      return Object.keys(_v1).forEach(_v0 => {
        let _v1;
        _v2[_v0] = (_v1 = _v1[_v0], `https://i.vimeocdn.com/custom_asset/${_v1.imageId || _v0}?w=${_v1.w}${_v1.q ? `&q=${_v1.q}` : ""}${_v1.crop ? "&crop" : ""}`);
      }), _v2;
    },
    _v99 = ({
      defaultImageId: _v0,
      thresholds: _v1,
      height: _v2,
      width: _v3,
      dimensions: _v4,
      margin: _v5,
      isAbsolute: _v6,
      objectFit: _v7,
      objectPosition: _v8,
      imgAlt: _v9,
      imgTitle: _v10,
      loading: _v11,
      align: _v12,
      alwaysOnTop: _v13,
      borderRadius: _v14
    }) => {
      let _v15 = _v98(_v0, _v1);
      return (0, _v6.jsxs)(_v96, {
        height: _v2,
        width: _v3,
        dimensions: _v4,
        margin: _v5,
        children: [(0, _v6.jsx)(_v94, {
          breakPoints: _v98(_v0, _v1)
        }), (0, _v6.jsx)(_v97, {
          isAbsolute: _v6,
          objectFit: _v7,
          objectPosition: _v8,
          srcSet: _v91.map(_v0 => _v15[_v0] && `${_v15[_v0]} ${parseInt(_v93[_v0])}w`).filter(_v0 => _v0).join(", "),
          src: _v15.hd || _v15.desktop || _v15.mobile,
          alt: _v9,
          title: _v10,
          "aria-hidden": "true",
          loading: _v11 || "lazy",
          align: _v12,
          height: _v2,
          width: _v3,
          alwaysOnTop: _v13,
          borderRadius: _v14
        })]
      });
    };
  function _v100({
    showText: _v0
  }) {
    let _v1 = (0, _v8.useMemo)(_v46.getTranslatedStrings, []);
    return (0, _v6.jsxs)(_v102, {
      children: [(0, _v6.jsx)(_v103, {
        children: (0, _v6.jsx)(_v81, {})
      }), _v0 && (0, _v6.jsx)(_v101, {
        children: _v1.WatchVideo
      })]
    });
  }
  let _v101 = _v29.default.div.withConfig({
      displayName: "PlayIcon__Text",
      componentId: "sc-e2a9a4ef-0"
    })`
  color: #ffffff;
  margin-top: ${(0, _v47.rem)(10)};
  font-size: ${(0, _v47.rem)(14)};
  cursor: default;
`,
    _v102 = _v29.default.div.withConfig({
      displayName: "PlayIcon__Container",
      componentId: "sc-e2a9a4ef-1"
    })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,
    _v103 = _v29.default.div.withConfig({
      displayName: "PlayIcon__Background",
      componentId: "sc-e2a9a4ef-2"
    })`
  margin: auto;
  border-radius: ${(0, _v47.rem)(5)};
  background: rgba(23, 35, 34, 0.75);
  width: ${(0, _v47.rem)(65)};
  height: ${(0, _v47.rem)(40)};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: ${(0, _v47.rem)(36)};
    height: ${(0, _v47.rem)(28)};
    polygon {
      fill: white;
      stroke: none;
    }
  }
`;
  function _v104(_v0) {
    return (0, _v6.jsx)(_v60, {
      onClick: _v0.onClick,
      children: (0, _v11.translate)({
        singular: "I agree to the {TERMS_LINK}Terms and Conditions of the Vimeo Experts{/TERMS_LINK} program and {PRIVACY_LINK}Vimeo Privacy Policy{/PRIVACY_LINK}, including receiving emails from Vimeo Experts about training sessions, program benefits, or tips for getting started.",
        replacements: {
          TERMS_LINK: _v0 => (0, _v6.jsx)(_v64, {
            href: "/experts/legal",
            target: "_blank",
            onClick: _v0 => _v0.stopPropagation(),
            children: _v0
          }, "terms"),
          PRIVACY_LINK: _v0 => (0, _v6.jsx)(_v64, {
            href: "/privacy",
            target: "_blank",
            onClick: _v0 => _v0.stopPropagation(),
            children: _v0
          }, "privacy")
        },
        dictionary: {
          es: {
            singular: "Acepto los {TERMS_LINK}Términos y condiciones del programa Vimeo Experts{/TERMS_LINK} y la {PRIVACY_LINK}Política de privacidad de Vimeo{/PRIVACY_LINK}, lo que incluye recibir correos electrónicos de Vimeo Experts acerca de capacitaciones, beneficios del programa o consejos sobre cómo empezar."
          },
          "de-DE": {
            singular: "Ich erkläre mich mit den {TERMS_LINK}Allgemeinen Geschäftsbedingungen des Vimeo Experts-Programms{/TERMS_LINK} sowie der {PRIVACY_LINK}Datenschutzerklärung von Vimeo{/PRIVACY_LINK} einverstanden, einschließlich des Erhalts von E-Mail-Nachrichten von Vimeo Experts zu Schulungen, Programmvorteilen oder Tipps für den Einstieg."
          },
          "fr-FR": {
            singular: "J'accepte les {TERMS_LINK}conditions générales du programme Vimeo Experts{/TERMS_LINK} et la {PRIVACY_LINK}politique de confidentialité Vimeo{/PRIVACY_LINK}, y compris de recevoir des e-mails de la part de Vimeo Experts concernant les sessions de formation, les avantages du programme ou les conseils pour bien commencer."
          },
          "ja-JP": {
            singular: "{TERMS_LINK}Vimeo エキスパートプログラムの利用規約{/TERMS_LINK}と{PRIVACY_LINK}Vimeoプライバシーポリシー{/PRIVACY_LINK}に同意します。これには、トレーニングセッション、プログラムの特典、または開始にあたるアドバイスなど、Vimeoエキスパートからのメールの受信が含まれます。"
          },
          "ko-KR": {
            singular: "{TERMS_LINK}Vimeo 엑스퍼트 프로그램 이용 약관{/TERMS_LINK}, {PRIVACY_LINK}Vimeo 개인정보보호 정책{/PRIVACY_LINK} 및 Vimeo 엑스퍼트의 교육 세션, 프로그램 혜택 또는 시작 팁에 대한 이메일 수신에 동의합니다."
          },
          "pt-BR": {
            singular: "Concordo com os {TERMS_LINK}Termos e Condições do programa Vimeo Experts{/TERMS_LINK} e com a {PRIVACY_LINK}Política de Privacidade do Vimeo{/PRIVACY_LINK}, incluindo o recebimento de e-mails do Vimeo Experts sobre sessões de treinamento, benefícios do programa ou dicas de como começar."
          },
          "zh-CN": {
            singular: "我同意 {TERMS_LINK}Vimeo Experts 计划的条款和条件{/TERMS_LINK}以及 {PRIVACY_LINK}Vimeo 隐私政策{/PRIVACY_LINK}，包括接收来自 Vimeo Experts 的有关培训课程、计划权益或入门提示的电子邮件。"
          }
        }
      })
    });
  }
  var _v105 = _v0.i(0);
  function _v106({
    playerAssetUrls: _v0,
    setExpertData: _v1
  }) {
    let _v2 = (0, _v8.useMemo)(_v46.getTranslatedStrings, []),
      _v3 = (0, _v8.useContext)(_v13.ViewerContext),
      [_v4, _v5] = (0, _v8.useState)(!1),
      [_v6, _v7] = (0, _v8.useState)(!1),
      [_v8, _v9] = (0, _v8.useState)(!1),
      [_v10, _v11] = (0, _v8.useState)(!1),
      [_v12, _v13] = _v24(),
      [_v14, _v15] = (0, _v8.useState)(!1),
      [_v16, _v17] = (0, _v8.useState)(!1),
      _v18 = (_v0 = !1) => {
        (_v0 || (0, _v105.trackEvent)({
          eventKey: _v105.Events.CLICK_ENROLL_BUTTON
        }), _v4) ? (_v8 && _v9(!1), _v7(!0), _v12({
          select: ["status", "website", "company", "courses"],
          variables: {
            hasAgreedToTermsAndConditions: _v4
          }
        })) : _v9(!0);
      },
      _v19 = () => {
        _v4 || (_v9(!1), (0, _v105.trackEvent)({
          eventKey: _v105.Events.CLICK_TERMS_CHECKBOX
        })), _v5(!_v4);
      };
    (0, _v8.useEffect)(() => {
      _v3 && _v17(_v3?.user?.account === _v28.AccountType.Basic || _v3?.user?.account === _v28.AccountType.Free);
    }, [_v3]), (0, _v8.useEffect)(() => {
      _v13?.error ? _v7(!1) : _v13?.data && ((0, _v105.trackEvent)({
        eventKey: _v105.Events.ENROLL_SUCCESS
      }), _v1(_v13.data));
    }, [_v13]), (0, _v8.useEffect)(() => {
      (0, _v105.trackEvent)({
        eventKey: _v105.Events.ENROLLMENT_PAGE_LOAD
      });
    }, []);
    let _v20 = () => {
        _v11(!0), (0, _v105.trackEvent)({
          eventKey: _v105.Events.CLICK_VIDEO_PLAYER
        });
      },
      _v21 = ({
        isMobile: _v0
      }) => (0, _v6.jsxs)(_v71, {
        isMobile: _v0,
        onClick: _v20,
        children: [(0, _v6.jsx)(_v70, {
          children: (0, _v6.jsx)(_v99, {
            defaultImageId: 0,
            thresholds: {
              mobile: {
                w: 327
              },
              desktop: {
                w: 514
              }
            },
            defaultType: "png"
          })
        }), (0, _v6.jsx)(_v100, {
          showText: !0
        })]
      });
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v73, {}), (0, _v6.jsxs)(_v26.PlayerContextProvider, {
        type: _v27.PlayerType.BarebonePlayer,
        assetUrls: _v0,
        children: [(0, _v6.jsx)(_v84, {
          assetUrls: _v0,
          isShowing: _v10,
          setIsShowing: _v11
        }), (0, _v6.jsxs)(_v65, {
          children: [(0, _v6.jsx)(_v68, {
            children: (0, _v6.jsxs)(_v57, {
              children: [(0, _v6.jsx)(_v58, {
                children: _v2.NonExpertsHeading
              }), (0, _v6.jsx)(_v76, {}), (0, _v6.jsx)(_v21, {
                isMobile: !0
              }), (0, _v6.jsxs)(_v59, {
                children: [(0, _v6.jsx)(_v51, {
                  type: "checkbox",
                  isError: _v8,
                  checked: _v4,
                  onChange: _v19
                }), (0, _v6.jsx)(_v104, {
                  onClick: _v19
                })]
              }), _v8 && (0, _v6.jsxs)(_v66, {
                children: [" ", _v2.ConfirmToContinue]
              }), (0, _v6.jsxs)(_v61, {
                children: [(0, _v6.jsx)(_v25.Button, {
                  format: "primary",
                  onClick: _v16 ? () => {
                    if ((0, _v105.trackEvent)({
                      eventKey: _v105.Events.CLICK_UPGRADE_BUTTON
                    }), !_v4) return void _v9(!0);
                    _v8 && _v9(!1);
                    let _v0 = null;
                    (_v0 = window.open("/upgrade?ref=vimeo_experts", "_blank", `height=${window.innerHeight},width=${window.innerWidth / 1.5},centerscreen=yes,scrolling=yes,scrollbars=yes,resizable=yes`)) && (_v15(!0), setInterval(() => {
                      _v0 && _v0.closed && (_v0 = null, _v15(!1));
                    }, 0)), window.successfulUpgradeCallback = () => {
                      _v17(!1), _v15(!1), (0, _v105.trackEvent)({
                        eventKey: _v105.Events.UPGRADE_SUCCESS
                      }), _v18(!0);
                    };
                  } : () => _v18(),
                  loading: _v6 || _v14,
                  children: _v16 ? _v2.UpgradeToEnroll : _v2.JoinVimeoExperts
                }), (0, _v6.jsx)(_v62, {
                  variant: "minimalTransparent",
                  color: "black",
                  element: "a",
                  href: "/experts",
                  target: "_blank",
                  onClick: () => (0, _v105.trackEvent)({
                    eventKey: _v105.Events.CLICK_LEARN_MORE
                  }),
                  children: _v2.LearnMore
                })]
              }), _v16 && (0, _v6.jsx)(_v72, {
                children: _v2.BasicUserWarningMessage
              })]
            })
          }), (0, _v6.jsx)(_v67, {
            children: (0, _v6.jsxs)(_v53, {
              children: [(0, _v6.jsx)(_v54, {
                children: (0, _v6.jsx)(_v99, {
                  defaultImageId: 0,
                  thresholds: {
                    desktop: {
                      w: 179
                    }
                  },
                  defaultType: "png"
                })
              }), (0, _v6.jsx)(_v21, {}), (0, _v6.jsx)(_v55, {
                children: (0, _v6.jsx)(_v99, {
                  defaultImageId: 0,
                  thresholds: {
                    desktop: {
                      w: 212
                    }
                  },
                  defaultType: "png"
                })
              }), (0, _v6.jsx)(_v56, {
                children: (0, _v6.jsx)(_v99, {
                  defaultImageId: 0,
                  thresholds: {
                    desktop: {
                      w: 257
                    }
                  },
                  defaultType: "png"
                })
              })]
            })
          })]
        })]
      })]
    });
  }
  var _v107 = (0, _v8.forwardRef)(function (_v0, _v1) {
    return _v8.default.createElement("svg", (0, _v31.c)({
      "data-name": "Layer 1",
      viewBox: "0 0 20 20",
      ref: _v1
    }, _v0), _v8.default.createElement("path", {
      d: "M10 20a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z",
      fill: "#1a2e3b"
    }), _v8.default.createElement("path", {
      d: "M9 14a1 1 0 0 1-.71-.29l-3-3 1.42-1.42L9 11.59l5.29-5.3 1.42 1.42-6 6A1 1 0 0 1 9 14z",
      fill: "#1a2e3b"
    }));
  });
  let _v108 = function ({
      isChecked: _v0
    }) {
      return _v0 ? (0, _v6.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, _v6.jsx)("path", {
          d: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z",
          fill: "#00ADEF"
        }), (0, _v6.jsx)("path", {
          d: "M8 12L11 15L17 9",
          stroke: "white",
          strokeWidth: "2"
        }), (0, _v6.jsx)("path", {
          d: "M12 20C7.58172 20 4 16.4183 4 12H0C0 18.6274 5.37258 24 12 24V20ZM20 12C20 16.4183 16.4183 20 12 20V24C18.6274 24 24 18.6274 24 12H20ZM12 4C16.4183 4 20 7.58172 20 12H24C24 5.37258 18.6274 0 12 0V4ZM12 0C5.37258 0 0 5.37258 0 12H4C4 7.58172 7.58172 4 12 4V0Z",
          fill: "#F5F5F5"
        })]
      }) : (0, _v6.jsx)(_v109, {});
    },
    _v109 = (0, _v29.default)(_v107).withConfig({
      displayName: "CheckMarkIcon__StyledCircleCheck",
      componentId: "sc-312169bb-0"
    })`
  width: ${(0, _v47.rem)(20)};
  height: ${(0, _v47.rem)(20)};
  path {
    fill: #848484;
  }
`,
    _v110 = function () {
      let _v0 = (0, _v8.useMemo)(_v46.getTranslatedStrings, []);
      return (0, _v6.jsxs)(_v117, {
        children: [(0, _v6.jsxs)(_v116, {
          children: [(0, _v6.jsx)(_v114, {
            children: _v0.CompleteYourExpertTraining
          }), (0, _v6.jsxs)(_v111, {
            children: [(0, _v6.jsx)(_v115, {
              children: _v0.CertificationCourses
            }), _v50.CERTIFICATION_COURSES.map((_v0, _v1) => (0, _v6.jsxs)(_v113, {
              children: [(0, _v6.jsx)(_v108, {
                isChecked: !1
              }), (0, _v6.jsx)(_v118, {
                href: _v0.url,
                format: "soft",
                variant: "minimal",
                children: (0, _v6.jsx)(_v112, {
                  children: _v0.title
                })
              })]
            }, `course-${_v1}`))]
          })]
        }), (0, _v6.jsx)(_v99, {
          defaultImageId: 0,
          thresholds: {
            mobile: {
              w: 680
            },
            desktop: {
              w: 600
            },
            hd: {
              w: 700
            }
          },
          defaultType: "png",
          margin: "0 0 0 auto"
        })]
      });
    },
    _v111 = _v29.default.div.withConfig({
      displayName: "CertificationSection__CourseGroupContainer",
      componentId: "sc-7f645c0a-0"
    })`
  margin-bottom: ${(0, _v47.rem)(40)};
`,
    _v112 = _v29.default.div.withConfig({
      displayName: "CertificationSection__CourseTitleText",
      componentId: "sc-7f645c0a-1"
    })`
  margin-left: ${(0, _v47.rem)(8)};
`,
    _v113 = _v29.default.div.withConfig({
      displayName: "CertificationSection__CourseContainer",
      componentId: "sc-7f645c0a-2"
    })`
  display: flex;
  align-items: center;
  margin-bottom: ${(0, _v47.rem)(8)};
`,
    _v114 = _v29.default.div.withConfig({
      displayName: "CertificationSection__HeaderText",
      componentId: "sc-7f645c0a-3"
    })`
  color: #000000;
  font-weight: normal;
  font-size: ${(0, _v47.rem)(24)};
  margin-bottom: ${(0, _v47.rem)(24)};
  @media (min-width: ${_v50.DESKTOP}) {
    font-size: ${(0, _v47.rem)(36)};
    margin-bottom: ${(0, _v47.rem)(40)};
  }
`,
    _v115 = _v29.default.div.withConfig({
      displayName: "CertificationSection__StatusHeaderText",
      componentId: "sc-7f645c0a-4"
    })`
  font-weight: bold;
  font-size: ${(0, _v47.rem)(16)};
  margin-bottom: ${(0, _v47.rem)(10)};
`,
    _v116 = _v29.default.div.withConfig({
      displayName: "CertificationSection__TrainingContainer",
      componentId: "sc-7f645c0a-5"
    })`
  margin-top: ${(0, _v47.rem)(32)};
  @media (min-width: ${_v50.TABLET}) {
    max-width: 47%;
    margin-right: ${(0, _v47.rem)(32)};
    margin-top: 0;
  }
  @media (min-width: ${_v50.DESKTOP}) {
    margin-right: ${(0, _v47.rem)(80)};
  }
`,
    _v117 = _v29.default.div.withConfig({
      displayName: "CertificationSection__Container",
      componentId: "sc-7f645c0a-6"
    })`
  background: #f5f5f5;
  display: flex;
  flex-direction: column-reverse;
  padding: ${(0, _v47.rem)(40)} ${(0, _v47.rem)(15)};
  align-items: normal;
  @media (min-width: ${_v50.TABLET}) {
    padding: ${(0, _v47.rem)(64)} ${(0, _v47.rem)(32)};
    flex-direction: row;
    align-items: flex-start;
  }
  @media (min-width: ${_v50.DESKTOP}) {
    padding: ${(0, _v47.rem)(64)} ${(0, _v47.rem)(80)};
    flex-direction: row;
    align-items: flex-start;
  }
`,
    _v118 = (0, _v29.default)(_v33.Link).withConfig({
      displayName: "CertificationSection__StyledLink",
      componentId: "sc-7f645c0a-7"
    })`
  &:hover {
    color: ${(0, _v30.blue)(500)};
  }
`;
  var _v119 = _v0.i(0);
  let _v120 = function () {
      return (0, _v6.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, _v6.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 2C6.47758 2 2 6.5048 2 12.0608C2 17.082 5.65634 21.2444 10.4377 22V14.9697H7.8979V12.0608H10.4377V9.84376C10.4377 7.32252 11.9311 5.92892 14.2149 5.92892C15.3089 5.92892 16.4537 6.12557 16.4537 6.12557V8.60155H15.1922C13.9505 8.60155 13.5623 9.37688 13.5623 10.1734V12.0607H16.3355L15.8925 14.9696H13.5623V21.9999C18.3436 21.2457 21.9999 17.0833 21.9999 12.0607C22 6.5048 17.5224 2 12 2Z",
          fill: "white"
        })
      });
    },
    _v121 = function () {
      let _v0 = (0, _v8.useMemo)(_v46.getTranslatedStrings, []);
      return (0, _v6.jsxs)(_v122, {
        children: [(0, _v6.jsx)(_v125, {
          children: _v0.JoinCommunity
        }), (0, _v6.jsx)(_v126, {
          children: _v0.JoinSubheader
        }), (0, _v6.jsx)(_v124, {
          size: "lg",
          icon: (0, _v6.jsx)(_v120, {}),
          element: "a",
          href: "https://www.facebook.com/groups/vimeoexperts",
          onClick: () => {},
          target: "_blank",
          children: _v0.JoinFacebook
        }), (0, _v6.jsx)(_v123, {
          size: "lg",
          icon: (0, _v6.jsx)(_v119.SlackMark, {}),
          format: "basic",
          element: "a",
          href: "https://join.slack.com/t/vimeo-experts/shared_invite/zt-sdc4xk9s-5JUVNiX1ejIm5ny27zBifg",
          onClick: () => {
            (0, _v105.trackEvent)({
              eventKey: _v105.Events.GOTO_COMMUNITY
            });
          },
          target: "_blank",
          children: _v0.OpenSlack
        }), (0, _v6.jsx)(_v99, {
          defaultImageId: 0,
          thresholds: {
            mobile: {
              w: 652
            },
            desktop: {
              w: 700
            },
            hd: {
              w: 774
            }
          },
          defaultType: "png"
        })]
      });
    },
    _v122 = _v29.default.div.withConfig({
      displayName: "CommunitySection__Container",
      componentId: "sc-59d4e367-0"
    })`
  padding: ${(0, _v47.rem)(48)} ${(0, _v47.rem)(24)};
  background: black;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v123 = (0, _v29.default)(_v25.Button).withConfig({
      displayName: "CommunitySection__SlackButton",
      componentId: "sc-59d4e367-1"
    })`
  width: fit-content;
  font-weight: 700;
  margin-bottom: ${(0, _v47.rem)(32)};
`,
    _v124 = (0, _v29.default)(_v25.Button).withConfig({
      displayName: "CommunitySection__FacebookButton",
      componentId: "sc-59d4e367-2"
    })`
  width: fit-content;
  font-weight: 700;
  margin-bottom: ${(0, _v47.rem)(12)};
  svg {
    margin-right: ${(0, _v47.rem)(8)};
    width: ${(0, _v47.rem)(24)};
  }
`,
    _v125 = _v29.default.div.withConfig({
      displayName: "CommunitySection__JoinHeader",
      componentId: "sc-59d4e367-3"
    })`
  font-size: ${(0, _v47.rem)(40)};
  line-height: ${(0, _v47.rem)(48)};
  text-align: center;
  letter-spacing: ${(0, _v47.rem)(-1)};
  margin-bottom: ${(0, _v47.rem)(40)};
  color: #ffffff;
`,
    _v126 = _v29.default.div.withConfig({
      displayName: "CommunitySection__JoinSubheader",
      componentId: "sc-59d4e367-4"
    })`
  font-size: ${(0, _v47.rem)(16)};
  line-height: ${(0, _v47.rem)(24)};
  color: #ffffff;
  margin-bottom: ${(0, _v47.rem)(40)};
  max-width: ${(0, _v47.rem)(640)};
  text-align: center;
`,
    _v127 = function () {
      let _v0 = (0, _v8.useMemo)(_v46.getTranslatedStrings, []);
      return (0, _v6.jsxs)(_v129, {
        children: [(0, _v6.jsx)(_v131, {
          children: _v0.HereToHelp
        }), (0, _v6.jsx)(_v132, {
          children: _v0.ContactSubheader
        }), (0, _v6.jsx)(_v130, {
          element: "a",
          href: "mailto:experts@vimeo.com",
          onClick: () => {
            (0, _v105.trackEvent)({
              eventKey: _v105.Events.CONTACT_PARTNER_SUCCESS
            });
          },
          target: "_blank",
          children: _v0.ContactPartner
        }), (0, _v6.jsx)(_v128, {
          children: (0, _v6.jsx)(_v99, {
            defaultImageId: 0,
            thresholds: {
              mobile: {
                w: 600
              },
              desktop: {
                w: 990
              },
              hd: {
                w: 0
              }
            },
            defaultType: "png"
          })
        })]
      });
    },
    _v128 = _v29.default.div.withConfig({
      displayName: "ContactSection__ContactImages",
      componentId: "sc-3e132506-0"
    })`
  position: relative;
  width: 80%;
`,
    _v129 = _v29.default.div.withConfig({
      displayName: "ContactSection__Container",
      componentId: "sc-3e132506-1"
    })`
  padding: ${(0, _v47.rem)(48)} ${(0, _v47.rem)(24)};
  background: linear-gradient(107.96deg, #bcd9ff 14.43%, #edd0ff 96.02%);
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v130 = (0, _v29.default)(_v25.Button).withConfig({
      displayName: "ContactSection__ContactButton",
      componentId: "sc-3e132506-2"
    })`
  margin-bottom: ${(0, _v47.rem)(32)};
`,
    _v131 = _v29.default.div.withConfig({
      displayName: "ContactSection__ContactHeader",
      componentId: "sc-3e132506-3"
    })`
  font-size: ${(0, _v47.rem)(40)};
  line-height: ${(0, _v47.rem)(48)};
  text-align: center;
  letter-spacing: ${(0, _v47.rem)(-1)};
  margin-bottom: ${(0, _v47.rem)(40)};
  color: black;
`,
    _v132 = _v29.default.div.withConfig({
      displayName: "ContactSection__ContactSubHeader",
      componentId: "sc-3e132506-4"
    })`
  font-size: ${(0, _v47.rem)(16)};
  line-height: ${(0, _v47.rem)(24)};
  color: black;
  margin-bottom: ${(0, _v47.rem)(40)};
  max-width: ${(0, _v47.rem)(640)};
  text-align: center;
`,
    _v133 = function () {
      let _v0 = (0, _v8.useMemo)(_v46.getTranslatedStrings, []);
      return (0, _v6.jsxs)(_v134, {
        children: [(0, _v6.jsx)(_v135, {
          children: _v0.Questions
        }), (0, _v6.jsx)(_v25.Button, {
          element: "a",
          href: "https://vimeo.com/experts/legal",
          target: "_blank",
          onClick: () => {
            (0, _v105.trackEvent)({
              eventKey: _v105.Events.VIMEO_REFERRAL_AGREEMENT
            });
          },
          children: _v0.ExpertTerms
        }, "privacy")]
      });
    },
    _v134 = _v29.default.div.withConfig({
      displayName: "QuestionsSection__Container",
      componentId: "sc-1dfd2db-0"
    })`
  padding: ${(0, _v47.rem)(48)} ${(0, _v47.rem)(24)};
  @media (min-width: ${_v50.DESKTOP}) {
    padding: ${(0, _v47.rem)(64)} ${(0, _v47.rem)(80)};
  }
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v135 = _v29.default.div.withConfig({
      displayName: "QuestionsSection__QuestionsTitle",
      componentId: "sc-1dfd2db-1"
    })`
  font-size: ${(0, _v47.rem)(28)};
  line-height: ${(0, _v47.rem)(43)};
  margin-bottom: ${(0, _v47.rem)(32)};
  @media (min-width: ${_v50.DESKTOP}) {
    font-size: ${(0, _v47.rem)(36)};
  }
`;
  var _v136 = _v0.i(0);
  let _v137 = function () {
      return (0, _v6.jsxs)("svg", {
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, _v6.jsx)("circle", {
          cx: "32",
          cy: "32",
          r: "32",
          fill: "black"
        }), (0, _v6.jsxs)("mask", {
          id: "path-2-outside-1_2_17300",
          maskUnits: "userSpaceOnUse",
          x: "11",
          y: "19.4999",
          width: "42",
          height: "31",
          fill: "black",
          children: [(0, _v6.jsx)("rect", {
            fill: "white",
            x: "11",
            y: "19.4999",
            width: "42",
            height: "31"
          }), (0, _v6.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M42.6341 43.7377C44.5091 42.3227 50.0341 37.7527 50.0791 37.7077C50.2244 37.5945 50.3457 37.4535 50.4358 37.293C50.526 37.1324 50.5832 36.9554 50.6042 36.7724C50.6251 36.5894 50.6094 36.4041 50.5579 36.2273C50.5063 36.0505 50.42 35.8857 50.3041 35.7427C49.7141 34.9177 48.6141 35.2377 48.0241 35.4677C46.9241 35.9227 43.7741 37.1577 43.6391 37.2027C43.5061 37.2476 43.362 37.2476 43.2291 37.2027C40.8362 36.209 39.6899 37.1413 38.4754 38.129L38.4341 38.1627C38.3178 38.2276 38.1821 38.2486 38.0517 38.2219C37.9213 38.1951 37.8048 38.1223 37.7236 38.0168C37.6423 37.9113 37.6017 37.7802 37.6092 37.6472C37.6166 37.5143 37.6716 37.3885 37.7641 37.2927C37.7854 37.2759 37.8068 37.2591 37.8283 37.2422C39.0961 36.2458 40.642 35.0309 43.4691 36.1077C43.5083 36.0923 43.5542 36.0742 43.6058 36.0538C43.8571 35.9547 44.2443 35.802 44.6591 35.6527L47.6591 27.4727C47.7805 27.1296 47.7625 26.7526 47.6091 26.4227C47.4331 26.1153 47.1607 25.8746 46.8341 25.7377C46.5062 25.6484 46.1574 25.677 45.8485 25.8187C45.5396 25.9603 45.2903 26.2059 45.1441 26.5127L42.9991 32.4727C42.9545 32.5806 42.879 32.6729 42.782 32.7379C42.6849 32.8029 42.5708 32.8376 42.4541 32.8377C42.4284 32.8377 42.3922 32.8258 42.357 32.8143C42.3235 32.8033 42.291 32.7927 42.2691 32.7927C42.1377 32.7288 42.0334 32.6203 41.9748 32.4865C41.9162 32.3528 41.907 32.2025 41.9491 32.0627L44.0091 26.3577C44.0232 26.3577 44.0285 26.3582 44.0304 26.3559C44.0346 26.3509 44.0232 26.3327 44.0541 26.2677C44.0759 26.2215 44.0872 26.1871 44.0981 26.1537C44.1097 26.1183 44.1209 26.0839 44.1441 26.0377L45.1441 23.2977C45.206 23.1283 45.234 22.9484 45.2262 22.7682C45.2185 22.588 45.1753 22.4111 45.0991 22.2477C44.9246 21.9391 44.6517 21.6979 44.3241 21.5627C43.9766 21.4548 43.6007 21.4869 43.2765 21.6523C42.9524 21.8176 42.7057 22.103 42.5891 22.4477L41.9041 24.3677L39.5291 31.1277C39.4842 31.2364 39.4079 31.3293 39.3099 31.3943C39.2119 31.4593 39.0967 31.4936 38.9791 31.4927C38.9566 31.4927 38.9228 31.4814 38.8891 31.4702C38.8553 31.4589 38.8216 31.4477 38.7991 31.4477C38.6566 31.3955 38.5395 31.2908 38.4717 31.1551C38.4038 31.0194 38.3904 30.863 38.4341 30.7177L40.7341 24.0927L40.7791 23.9577C40.9027 23.6001 40.8866 23.2089 40.7341 22.8627C40.5493 22.5597 40.2699 22.326 39.9391 22.1977C39.5941 22.0888 39.2204 22.1182 38.8967 22.2795C38.5731 22.4409 38.3247 22.7217 38.2041 23.0627L37.0641 26.2227C37.0191 26.2677 37.0191 26.2677 37.0191 26.3127L35.3741 30.9727C35.3281 31.0806 35.2515 31.1727 35.1538 31.2376C35.056 31.3025 34.9414 31.3373 34.8241 31.3377C34.8016 31.3377 34.7678 31.3264 34.7341 31.3152C34.7003 31.3039 34.6666 31.2927 34.6441 31.2927C34.5134 31.228 34.4097 31.1194 34.3512 30.9859C34.2927 30.8524 34.2831 30.7026 34.3241 30.5627L35.9691 25.8777C36.0894 25.5349 36.0733 25.1589 35.9241 24.8277C35.7465 24.5197 35.4724 24.279 35.1441 24.1427C34.7991 24.0338 34.4254 24.0632 34.1017 24.2245C33.7781 24.3859 33.5297 24.6667 33.4091 25.0077L31.5391 30.3527L33.9591 36.5627C34.7742 38.8678 34.6921 41.3953 33.7291 43.6427C33.6913 43.7523 33.6462 43.8592 33.5941 43.9627C34.0953 44.2826 34.6323 44.5427 35.1941 44.7377C36.4207 45.1963 37.7416 45.3449 39.0394 45.1705C40.3373 44.996 41.5721 44.5039 42.6341 43.7377ZM24.4887 48.0934C25.7649 48.2209 27.0526 48.0264 28.2342 47.5276C30.2313 46.707 31.8324 45.1438 32.7005 43.1669C33.5687 41.1899 33.6363 38.9534 32.8892 36.9276L29.2342 27.4276C29.1664 27.2522 29.063 27.0928 28.9304 26.9594C28.7979 26.826 28.6392 26.7215 28.4642 26.6526C28.3058 26.5866 28.1358 26.5526 27.9642 26.5526C27.7926 26.5526 27.6226 26.5866 27.4642 26.6526C27.2994 26.7215 27.1497 26.8222 27.0238 26.949C26.8979 27.0757 26.7982 27.226 26.7304 27.3913C26.6626 27.5566 26.6281 27.7337 26.6287 27.9123C26.6294 28.091 26.6652 28.2678 26.7342 28.4326L28.4392 32.7726C28.4701 32.8422 28.4866 32.9173 28.4877 32.9935C28.4888 33.0697 28.4745 33.1452 28.4457 33.2157C28.4169 33.2862 28.3741 33.3502 28.3199 33.4037C28.2657 33.4572 28.2013 33.4992 28.1305 33.5272C28.0596 33.5552 27.9839 33.5686 27.9077 33.5666C27.8316 33.5646 27.7567 33.5472 27.6874 33.5154C27.6182 33.4837 27.5561 33.4383 27.5048 33.382C27.4536 33.3256 27.4143 33.2595 27.3892 33.1876L25.7442 28.8476C25.6992 28.8026 25.6992 28.8026 25.6992 28.7526L24.4692 25.6476C24.4048 25.4758 24.3066 25.3186 24.1803 25.1855C24.0541 25.0524 23.9024 24.946 23.7342 24.8726C23.5766 24.8035 23.4063 24.7678 23.2342 24.7678C23.0621 24.7678 22.8918 24.8035 22.7342 24.8726C22.408 25.0138 22.1497 25.2767 22.0143 25.6054C21.8789 25.9341 21.8771 26.3026 22.0092 26.6326L22.0542 26.7726L24.3392 32.7726C24.3847 32.9131 24.3774 33.0653 24.3184 33.2007C24.2595 33.3361 24.1531 33.4452 24.0192 33.5076C23.9664 33.5434 23.9026 33.5593 23.8392 33.5526C23.7301 33.5446 23.6254 33.5062 23.537 33.4417C23.4486 33.3771 23.3801 33.2891 23.3392 33.1876L20.9642 27.0176L20.2342 25.1026C20.1673 24.9261 20.0642 24.7656 19.9316 24.6313C19.799 24.4969 19.6398 24.3918 19.4642 24.3226C19.3058 24.2566 19.1358 24.2226 18.9642 24.2226C18.7926 24.2226 18.6226 24.2566 18.4642 24.3226C18.2994 24.3915 18.1497 24.4922 18.0238 24.619C17.8979 24.7457 17.7982 24.896 17.7304 25.0613C17.6626 25.2266 17.6281 25.4037 17.6287 25.5823C17.6294 25.761 17.6652 25.9378 17.7342 26.1026L18.8492 28.9276C18.8492 28.9501 18.8605 28.9726 18.8717 28.9951C18.883 29.0176 18.8942 29.0401 18.8942 29.0626V29.1076L20.8942 34.2276C20.9395 34.3674 20.9319 34.5189 20.8729 34.6534C20.814 34.788 20.7077 34.8962 20.5742 34.9576C20.5214 34.9934 20.4576 35.0093 20.3942 35.0026C20.2851 34.9946 20.1804 34.9562 20.092 34.8917C20.0036 34.8271 19.9351 34.7391 19.8942 34.6376L17.8392 29.3376C17.6668 29.0167 17.3949 28.7605 17.0642 28.6076C16.776 28.4768 16.4488 28.4608 16.1492 28.5626C15.9831 28.6314 15.8324 28.7325 15.7056 28.86C15.5789 28.9875 15.4787 29.1389 15.4108 29.3053C15.3429 29.4718 15.3087 29.65 15.3102 29.8298C15.3116 30.0096 15.3487 30.1873 15.4192 30.3526L19.3092 40.1276C19.3593 40.2336 19.3735 40.353 19.3496 40.4678C19.3258 40.5826 19.2653 40.6865 19.1772 40.7639C19.0891 40.8413 18.9783 40.8879 18.8614 40.8966C18.7445 40.9054 18.6279 40.8759 18.5292 40.8126L15.1042 38.7576C15.1042 38.7457 15.0995 38.7342 15.091 38.7258C15.0826 38.7173 15.0711 38.7126 15.0592 38.7126C14.7787 38.5197 14.4366 38.4378 14.0992 38.4826C13.9243 38.5079 13.7568 38.57 13.6077 38.6649C13.4586 38.7597 13.3313 38.885 13.2342 39.0326C13.0375 39.342 12.9609 39.7128 13.0189 40.0749C13.077 40.4369 13.2656 40.7652 13.5492 40.9976C13.5942 41.0626 19.0742 45.4276 20.9292 46.7976C21.9887 47.5203 23.2125 47.9658 24.4887 48.0934Z"
          })]
        }), (0, _v6.jsx)("path", {
          d: "M50.0791 37.7077L49.1575 36.5241L49.0841 36.5813L49.0184 36.647L50.0791 37.7077ZM42.6341 43.7377L43.5117 44.9541L43.5248 44.9447L43.5376 44.935L42.6341 43.7377ZM50.4358 37.293L51.7438 38.0273L51.7438 38.0273L50.4358 37.293ZM50.5579 36.2273L49.1178 36.6471V36.6471L50.5579 36.2273ZM50.3041 35.7427L49.084 36.6152L49.1103 36.6521L49.1389 36.6873L50.3041 35.7427ZM48.0241 35.4677L47.4793 34.0701L47.4649 34.0757L47.4507 34.0816L48.0241 35.4677ZM43.6391 37.2027L43.1647 35.7796L43.1586 35.7817L43.6391 37.2027ZM43.2291 37.2027L42.6538 38.588L42.7006 38.6074L42.7486 38.6236L43.2291 37.2027ZM38.4754 38.129L39.4218 39.2928L39.4219 39.2927L38.4754 38.129ZM38.4341 38.1627L39.1658 39.4721L39.2794 39.4086L39.3804 39.3265L38.4341 38.1627ZM38.0517 38.2219L38.3533 36.7525L38.3533 36.7525L38.0517 38.2219ZM37.7236 38.0168L38.912 37.1016L38.912 37.1016L37.7236 38.0168ZM37.6092 37.6472L36.1115 37.5635V37.5635L37.6092 37.6472ZM37.7641 37.2927L36.8377 36.1129L36.7566 36.1766L36.685 36.2507L37.7641 37.2927ZM37.8283 37.2422L36.9014 36.0629L36.9014 36.0629L37.8283 37.2422ZM43.4691 36.1077L42.9352 37.5094L43.4764 37.7156L44.0157 37.5045L43.4691 36.1077ZM43.6058 36.0538L44.1563 37.4492L44.1563 37.4492L43.6058 36.0538ZM44.6591 35.6527L45.1671 37.064L45.8262 36.8268L46.0673 36.1692L44.6591 35.6527ZM47.6591 27.4727L49.0673 27.9892L49.0703 27.9812L49.0731 27.9732L47.6591 27.4727ZM47.6091 26.4227L48.9691 25.7901L48.9424 25.7325L48.9108 25.6774L47.6091 26.4227ZM46.8341 25.7377L47.4138 24.3542L47.3232 24.3163L47.2283 24.2904L46.8341 25.7377ZM45.8485 25.8187L46.4738 27.1821V27.1821L45.8485 25.8187ZM45.1441 26.5127L43.7901 25.8672L43.758 25.9345L43.7327 26.0047L45.1441 26.5127ZM42.9991 32.4727L44.3857 33.0447L44.3988 33.013L44.4104 32.9806L42.9991 32.4727ZM42.4541 32.8377V34.3377L42.4551 34.3377L42.4541 32.8377ZM42.357 32.8143L41.8902 34.2398L41.8902 34.2398L42.357 32.8143ZM42.2691 32.7927L41.613 34.1416L41.9236 34.2927H42.2691V32.7927ZM41.9491 32.0627L40.5382 31.5532L40.5243 31.5918L40.5125 31.6311L41.9491 32.0627ZM44.0091 26.3577V24.8577H42.9559L42.5982 25.8482L44.0091 26.3577ZM44.0304 26.3559L45.1764 27.3237L45.1765 27.3237L44.0304 26.3559ZM44.0541 26.2677L45.4097 26.9098L45.4097 26.9098L44.0541 26.2677ZM44.0981 26.1537L45.5238 26.62L45.5238 26.62L44.0981 26.1537ZM44.1441 26.0377L45.4857 26.7085L45.5239 26.6321L45.5532 26.5519L44.1441 26.0377ZM45.1441 23.2977L43.7354 22.7822L43.735 22.7834L45.1441 23.2977ZM45.2262 22.7682L46.7249 22.704V22.704L45.2262 22.7682ZM45.0991 22.2477L46.4584 21.6135L46.4337 21.5604L46.4048 21.5094L45.0991 22.2477ZM44.3241 21.5627L44.8964 20.1761L44.8336 20.1503L44.7688 20.1301L44.3241 21.5627ZM43.2765 21.6523L42.595 20.3161L43.2765 21.6523ZM42.5891 22.4477L44.0018 22.9517L44.006 22.9402L44.0099 22.9286L42.5891 22.4477ZM41.9041 24.3677L40.4913 23.8636L40.4889 23.8705L41.9041 24.3677ZM39.5291 31.1277L40.9157 31.6997L40.931 31.6627L40.9443 31.6249L39.5291 31.1277ZM38.9791 31.4927L38.9907 29.9927H38.9791V31.4927ZM38.7991 31.4477L38.2828 32.856L38.5328 32.9477H38.7991V31.4477ZM38.4341 30.7177L37.017 30.2257L37.0067 30.2555L36.9976 30.2857L38.4341 30.7177ZM40.7341 24.0927L42.1511 24.5846L42.1541 24.5758L42.1571 24.567L40.7341 24.0927ZM40.7791 23.9577L39.3614 23.4675L39.3587 23.4754L39.356 23.4833L40.7791 23.9577ZM40.7341 22.8627L42.1067 22.2578L42.0666 22.1668L42.0148 22.0818L40.7341 22.8627ZM39.9391 22.1977L40.4814 20.7991L40.4365 20.7817L40.3906 20.7672L39.9391 22.1977ZM38.2041 23.0627L39.6151 23.5717L39.6182 23.563L38.2041 23.0627ZM37.0641 26.2227L38.1247 27.2833L38.3614 27.0466L38.4751 26.7317L37.0641 26.2227ZM37.0191 26.3127L38.4335 26.812L38.5191 26.5697V26.3127H37.0191ZM35.3741 30.9727L36.7542 31.5602L36.7728 31.5166L36.7885 31.472L35.3741 30.9727ZM35.1538 31.2376L35.9832 32.4874L35.9832 32.4874L35.1538 31.2376ZM34.8241 31.3377V32.8377L34.8292 32.8377L34.8241 31.3377ZM34.6441 31.2927L33.9788 32.6371L34.2932 32.7927H34.6441V31.2927ZM34.3512 30.9859L32.9774 31.5881L32.9774 31.5881L34.3512 30.9859ZM34.3241 30.5627L32.9088 30.0657L32.8957 30.103L32.8846 30.1409L34.3241 30.5627ZM35.9691 25.8777L37.3844 26.3746L37.3844 26.3746L35.9691 25.8777ZM35.9241 24.8277L37.2917 24.2115L37.2609 24.1433L37.2236 24.0785L35.9241 24.8277ZM35.1441 24.1427L35.7191 22.7573L35.6583 22.7321L35.5956 22.7122L35.1441 24.1427ZM34.1017 24.2245L33.4325 22.8821L33.4325 22.8821L34.1017 24.2245ZM33.4091 25.0077L31.995 24.5073L31.9932 24.5123L33.4091 25.0077ZM31.5391 30.3527L30.1232 29.8573L29.9401 30.3807L30.1414 30.8973L31.5391 30.3527ZM33.9591 36.5627L35.3732 36.0626L35.3653 36.0402L35.3567 36.018L33.9591 36.5627ZM33.7291 43.6427L32.3503 43.0519L32.3287 43.1023L32.3108 43.1542L33.7291 43.6427ZM33.5941 43.9627L32.2545 43.2877L31.6447 44.498L32.7871 45.2271L33.5941 43.9627ZM35.1941 44.7377L35.7193 43.3327L35.7027 43.3264L35.6859 43.3206L35.1941 44.7377ZM39.0394 45.1705L38.8396 43.6838L38.8396 43.6838L39.0394 45.1705ZM28.2342 47.5276L27.6641 46.1402L27.6575 46.1429L27.6509 46.1457L28.2342 47.5276ZM24.4887 48.0934L24.6379 46.6008H24.6378L24.4887 48.0934ZM32.7005 43.1669L34.0739 43.77L32.7005 43.1669ZM32.8892 36.9276L34.2965 36.4086L34.2929 36.3987L34.2892 36.389L32.8892 36.9276ZM29.2342 27.4276L30.6342 26.889L30.6333 26.8868L29.2342 27.4276ZM28.9304 26.9594L27.8664 28.0166L27.8664 28.0166L28.9304 26.9594ZM28.4642 26.6526L27.8873 28.0372L27.9008 28.0428L27.9144 28.0482L28.4642 26.6526ZM27.4642 26.6526L26.8873 25.268L26.8857 25.2686L27.4642 26.6526ZM27.0238 26.949L28.088 28.0061L28.088 28.006L27.0238 26.949ZM26.7304 27.3913L28.1182 27.9605L28.1182 27.9605L26.7304 27.3913ZM26.6287 27.9123L25.1287 27.9178V27.9178L26.6287 27.9123ZM26.7342 28.4326L28.1303 27.8841L28.1243 27.8686L28.1178 27.8533L26.7342 28.4326ZM28.4392 32.7726L27.0431 33.3211L27.055 33.3513L27.0682 33.3811L28.4392 32.7726ZM28.4877 32.9935L26.9879 33.0155V33.0155L28.4877 32.9935ZM28.4457 33.2157L27.0574 32.6477L27.0574 32.6477L28.4457 33.2157ZM28.3199 33.4037L29.3742 34.4707L29.3742 34.4707L28.3199 33.4037ZM27.6874 33.5154L27.0626 34.8791L27.0626 34.8791L27.6874 33.5154ZM27.5048 33.382L26.3952 34.3913L26.3952 34.3913L27.5048 33.382ZM27.3892 33.1876L28.8058 32.6943L28.7991 32.675L28.7918 32.656L27.3892 33.1876ZM25.7442 28.8476L27.1468 28.316L27.0327 28.0147L26.8049 27.7869L25.7442 28.8476ZM25.6992 28.7526H27.1992V28.4663L27.0938 28.2002L25.6992 28.7526ZM24.4692 25.6476L23.0646 26.1739L23.0695 26.187L23.0746 26.2L24.4692 25.6476ZM23.7342 24.8726L23.1318 26.2463L23.1343 26.2474L23.7342 24.8726ZM22.7342 24.8726L23.3301 26.2492L23.3366 26.2463L22.7342 24.8726ZM22.0143 25.6054L23.4013 26.1767V26.1767L22.0143 25.6054ZM22.0092 26.6326L23.4372 26.1736L23.4212 26.1237L23.4018 26.0751L22.0092 26.6326ZM22.0542 26.7726L20.6262 27.2316L20.6383 27.2694L20.6524 27.3064L22.0542 26.7726ZM24.3392 32.7726L25.7661 32.3099L25.7544 32.274L25.741 32.2387L24.3392 32.7726ZM24.0192 33.5076L23.3857 32.1479L23.2769 32.1986L23.1776 32.266L24.0192 33.5076ZM23.8392 33.5526L23.9976 32.061L23.9731 32.0584L23.9487 32.0566L23.8392 33.5526ZM23.3392 33.1876L21.9393 33.7264L21.9434 33.7371L21.9477 33.7477L23.3392 33.1876ZM20.9642 27.0176L19.5626 27.5519L19.5643 27.5564L20.9642 27.0176ZM20.2342 25.1026L18.8317 25.6346L18.8326 25.6369L20.2342 25.1026ZM19.4642 24.3226L18.8873 25.7072L18.9007 25.7128L18.9141 25.7181L19.4642 24.3226ZM18.4642 24.3226L17.8873 22.938L17.8857 22.9386L18.4642 24.3226ZM17.7304 25.0613L16.3426 24.4922L16.3426 24.4922L17.7304 25.0613ZM17.6287 25.5823L16.1287 25.5878V25.5878L17.6287 25.5823ZM17.7342 26.1026L19.1295 25.5519L19.1238 25.5376L19.1178 25.5233L17.7342 26.1026ZM18.8492 28.9276H20.3492V28.6423L20.2445 28.3769L18.8492 28.9276ZM18.8942 29.1076H17.3942V29.3902L17.497 29.6534L18.8942 29.1076ZM20.8942 34.2276L22.3212 33.7653L22.3075 33.7231L22.2914 33.6818L20.8942 34.2276ZM20.8729 34.6534L19.4991 34.0512V34.0512L20.8729 34.6534ZM20.5742 34.9576L19.9472 33.5949L19.8349 33.6466L19.7326 33.716L20.5742 34.9576ZM20.3942 35.0026L20.5526 33.511L20.5281 33.5084L20.5037 33.5066L20.3942 35.0026ZM20.092 34.8917L19.2076 36.1032L19.2076 36.1032L20.092 34.8917ZM19.8942 34.6376L18.4957 35.1799L18.4991 35.1888L18.5027 35.1977L19.8942 34.6376ZM17.8392 29.3376L19.2378 28.7953L19.2044 28.7092L19.1607 28.6279L17.8392 29.3376ZM17.0642 28.6076L17.6937 27.246L17.6839 27.2416L17.0642 28.6076ZM16.1492 28.5626L15.6665 27.1424L15.62 27.1582L15.5747 27.177L16.1492 28.5626ZM15.7056 28.86L16.7694 29.9176L16.7694 29.9176L15.7056 28.86ZM15.4108 29.3053L16.7997 29.8718L16.7997 29.8718L15.4108 29.3053ZM15.3102 29.8298L16.8101 29.8178V29.8178L15.3102 29.8298ZM15.4192 30.3526L16.8129 29.798L16.8061 29.7809L16.7989 29.7639L15.4192 30.3526ZM19.3092 40.1276L17.9155 40.6822L17.9328 40.7257L17.9528 40.768L19.3092 40.1276ZM19.3496 40.4678L17.8809 40.1632L17.8809 40.1632L19.3496 40.4678ZM19.1772 40.7639L18.1874 39.6368L18.1874 39.6368L19.1772 40.7639ZM18.8614 40.8966L18.749 39.4009L18.749 39.4009L18.8614 40.8966ZM18.5292 40.8126L19.3395 39.5503L19.3204 39.538L19.301 39.5264L18.5292 40.8126ZM15.1042 38.7576H13.6042V39.6069L14.3325 40.0438L15.1042 38.7576ZM15.091 38.7258L16.1517 37.6652L16.1516 37.665L15.091 38.7258ZM15.0592 38.7126L14.2094 39.9486L14.5933 40.2126H15.0592V38.7126ZM14.0992 38.4826L13.9018 36.9956L13.8929 36.9968L13.8841 36.9981L14.0992 38.4826ZM13.6077 38.6649L12.8029 37.3991L12.8029 37.3991L13.6077 38.6649ZM13.2342 39.0326L11.9811 38.2081L11.9747 38.2179L11.9684 38.2278L13.2342 39.0326ZM13.0189 40.0749L11.5378 40.3123L13.0189 40.0749ZM13.5492 40.9976L14.7825 40.1438L14.6627 39.9708L14.5 39.8374L13.5492 40.9976ZM20.9292 46.7976L20.0381 48.0042L20.0607 48.0209L20.0839 48.0368L20.9292 46.7976ZM49.0184 36.647C49.0744 36.5911 49.1387 36.5388 49.0902 36.5798C49.0817 36.587 49.0674 36.5991 49.0464 36.6166C49.005 36.6512 48.944 36.702 48.865 36.7675C48.7074 36.8984 48.4817 37.0851 48.2057 37.313C47.6537 37.7685 46.9021 38.3867 46.0936 39.0475C44.4663 40.3774 42.6402 41.8538 41.7305 42.5404L43.5376 44.935C44.5029 44.2065 46.3769 42.6904 47.992 41.3704C48.8048 40.7062 49.5601 40.0849 50.1152 39.6268C50.3928 39.3977 50.6208 39.209 50.7813 39.0758C50.8613 39.0093 50.9255 38.9559 50.9709 38.918C50.9933 38.8992 51.0128 38.8828 51.0279 38.87C51.0352 38.8639 51.0439 38.8565 51.0525 38.8491C51.0565 38.8456 51.0635 38.8396 51.0717 38.8323C51.0758 38.8287 51.0826 38.8226 51.091 38.815C51.0962 38.8102 51.1158 38.7922 51.1397 38.7683L49.0184 36.647ZM49.1279 36.5586C49.1354 36.5452 49.1455 36.5335 49.1575 36.5241L51.0006 38.8912C51.3033 38.6555 51.5559 38.3619 51.7438 38.0273L49.1279 36.5586ZM49.1139 36.6018C49.1157 36.5866 49.1204 36.5719 49.1279 36.5586L51.7438 38.0273C51.9316 37.6928 52.0508 37.3242 52.0945 36.9431L49.1139 36.6018ZM49.1178 36.6471C49.1135 36.6324 49.1122 36.617 49.1139 36.6018L52.0945 36.9431C52.1381 36.5619 52.1053 36.1759 51.9979 35.8076L49.1178 36.6471ZM49.1389 36.6873C49.1292 36.6754 49.1221 36.6617 49.1178 36.6471L51.9979 35.8076C51.8906 35.4393 51.7109 35.0961 51.4693 34.7981L49.1389 36.6873ZM48.5689 36.8652C48.6812 36.8214 48.7987 36.781 48.9144 36.7517C49.0328 36.7217 49.1231 36.7102 49.184 36.7094C49.2442 36.7086 49.2397 36.7186 49.1987 36.7013C49.1439 36.6782 49.1009 36.6389 49.084 36.6152L51.5242 34.8701C50.8589 33.9399 49.8919 33.6997 49.1441 33.7097C48.4465 33.719 47.8206 33.9371 47.4793 34.0701L48.5689 36.8652ZM44.1134 38.6257C44.3077 38.5609 47.508 37.3044 48.5974 36.8538L47.4507 34.0816C46.9141 34.3035 45.8631 34.7216 44.9196 35.0934C44.4501 35.2785 44.0111 35.4506 43.6817 35.579C43.3185 35.7206 43.1517 35.784 43.1647 35.7797L44.1134 38.6257ZM42.7486 38.6236C43.1932 38.774 43.6749 38.774 44.1195 38.6236L43.1586 35.7817C43.3373 35.7213 43.5309 35.7213 43.7095 35.7817L42.7486 38.6236ZM39.4219 39.2927C40.0688 38.7666 40.4424 38.4854 40.8611 38.3535C41.1936 38.2487 41.7105 38.1963 42.6538 38.588L43.8044 35.8174C42.3548 35.2154 41.1021 35.1322 39.9597 35.4921C38.9034 35.8249 38.0965 36.5037 37.529 36.9653L39.4219 39.2927ZM39.3804 39.3265L39.4218 39.2928L37.5291 36.9652L37.4877 36.9989L39.3804 39.3265ZM37.7501 39.6912C38.233 39.7904 38.7355 39.7126 39.1658 39.4721L37.7023 36.8533C37.9002 36.7427 38.1313 36.7069 38.3533 36.7525L37.7501 39.6912ZM36.5352 38.9321C36.836 39.3227 37.2672 39.5921 37.7501 39.6912L38.3533 36.7525C38.5754 36.7981 38.7737 36.922 38.912 37.1016L36.5352 38.9321ZM36.1115 37.5635C36.084 38.0558 36.2344 38.5415 36.5352 38.9321L38.912 37.1016C39.0503 37.2812 39.1195 37.5046 39.1068 37.7309L36.1115 37.5635ZM36.685 36.2507C36.3426 36.6054 36.139 37.0713 36.1115 37.5635L39.1068 37.7309C39.0942 37.9573 39.0006 38.1716 38.8431 38.3346L36.685 36.2507ZM36.9014 36.0629C36.8799 36.0798 36.8587 36.0964 36.8377 36.1129L38.6904 38.4725C38.7121 38.4555 38.7337 38.4384 38.7552 38.4216L36.9014 36.0629ZM44.003 34.7059C42.2991 34.057 40.8521 34.0617 39.5978 34.4718C38.411 34.8598 37.5116 35.5833 36.9014 36.0629L38.7551 38.4216C39.4128 37.9047 39.9202 37.5226 40.53 37.3233C41.0724 37.146 41.8119 37.0816 42.9352 37.5094L44.003 34.7059ZM43.0554 34.6585C43.0032 34.6791 42.9594 34.6964 42.9225 34.7108L44.0157 37.5045C44.0572 37.4883 44.1052 37.4694 44.1563 37.4492L43.0554 34.6585ZM44.151 34.2413C43.7125 34.3992 43.3061 34.5596 43.0554 34.6585L44.1563 37.4492C44.4081 37.3499 44.7762 37.2048 45.1671 37.064L44.151 34.2413ZM46.2508 26.9562L43.2508 35.1362L46.0673 36.1692L49.0673 27.9892L46.2508 26.9562ZM46.249 27.0553C46.2368 27.0292 46.2354 26.9993 46.245 26.9722L49.0731 27.9732C49.3256 27.2599 49.2882 26.4761 48.9691 25.7901L46.249 27.0553ZM46.2543 27.1211C46.2767 27.1305 46.2953 27.1469 46.3073 27.1679L48.9108 25.6774C48.5709 25.0837 48.0448 24.6186 47.4138 24.3542L46.2543 27.1211ZM46.4738 27.1821C46.4631 27.187 46.4511 27.188 46.4398 27.1849L47.2283 24.2904C46.5613 24.1087 45.8517 24.167 45.2232 24.4552L46.4738 27.1821ZM46.4981 27.1582C46.493 27.1688 46.4844 27.1773 46.4738 27.1821L45.2232 24.4552C44.5948 24.7434 44.0876 25.2431 43.7901 25.8672L46.4981 27.1582ZM44.4104 32.9806L46.5554 27.0206L43.7327 26.0047L41.5877 31.9647L44.4104 32.9806ZM43.6166 33.9842C43.9603 33.754 44.228 33.4271 44.3857 33.0447L41.6124 31.9006C41.6811 31.7342 41.7976 31.5918 41.9473 31.4916L43.6166 33.9842ZM42.4551 34.3377C42.8687 34.3374 43.273 34.2144 43.6166 33.9842L41.9473 31.4916C42.0969 31.3914 42.2729 31.3378 42.453 31.3377L42.4551 34.3377ZM41.8902 34.2398C41.8984 34.2425 41.9592 34.2629 42.0257 34.2805C42.0772 34.2941 42.2434 34.3377 42.4541 34.3377V31.3377C42.5575 31.3377 42.639 31.3491 42.6858 31.3571C42.7351 31.3655 42.7726 31.3749 42.7925 31.3801C42.8257 31.3889 42.8508 31.3976 42.8237 31.3888L41.8902 34.2398ZM42.2691 34.2927C42.1597 34.2927 42.0741 34.28 42.0275 34.2718C41.9776 34.2631 41.9399 34.2535 41.9205 34.2483C41.8883 34.2397 41.8638 34.2312 41.8902 34.2398L42.8237 31.3888C42.8168 31.3865 42.7592 31.3672 42.6969 31.3505C42.6533 31.3388 42.484 31.2927 42.2691 31.2927V34.2927ZM40.601 33.0888C40.8026 33.5487 41.1614 33.9219 41.613 34.1416L42.9251 31.4438C43.1141 31.5357 43.2642 31.6918 43.3486 31.8843L40.601 33.0888ZM40.5125 31.6311C40.368 32.1121 40.3994 32.6288 40.601 33.0888L43.3486 31.8843C43.433 32.0768 43.4461 32.293 43.3856 32.4943L40.5125 31.6311ZM42.5982 25.8482L40.5382 31.5532L43.3599 32.5721L45.4199 26.8671L42.5982 25.8482ZM42.8844 25.388C43.1368 25.0893 43.4381 24.9647 43.6237 24.9127C43.7871 24.8669 43.9201 24.8609 43.9511 24.8594C43.9759 24.8582 43.9954 24.8579 44.0053 24.8578C44.0155 24.8577 44.0231 24.8577 44.0245 24.8577C44.0349 24.8578 44.0154 24.8577 44.0091 24.8577V27.8577C44.0065 27.8577 44.0048 27.8577 44.0049 27.8577C44.0053 27.8577 44.005 27.8577 44.0065 27.8577C44.0075 27.8577 44.0094 27.8577 44.0117 27.8577C44.013 27.8577 44.0515 27.8581 44.0976 27.8559C44.1319 27.8542 44.2674 27.8479 44.4328 27.8015C44.6204 27.749 44.9231 27.6236 45.1764 27.3237L42.8844 25.388ZM42.6985 25.6255C42.6286 25.773 42.5662 25.9531 42.5421 26.1628C42.5303 26.265 42.5316 26.3496 42.5316 26.3468C42.5316 26.3457 42.5315 26.325 42.5325 26.2987C42.5334 26.2731 42.5359 26.2181 42.5454 26.1487C42.5628 26.0223 42.6221 25.6987 42.8844 25.3881L45.1765 27.3237C45.4398 27.0118 45.4997 26.6866 45.5174 26.5579C45.5271 26.4875 45.5297 26.4312 45.5306 26.4042C45.5316 26.3766 45.5316 26.3543 45.5316 26.3515C45.5316 26.3418 45.5327 26.4169 45.5224 26.5058C45.5014 26.6889 45.4487 26.8274 45.4097 26.9098L42.6985 25.6255ZM42.6725 25.6873C42.6662 25.7065 42.6695 25.696 42.6747 25.682C42.6813 25.6641 42.6895 25.6445 42.6985 25.6256L45.4097 26.9098C45.4744 26.7731 45.5097 26.6631 45.5238 26.62L42.6725 25.6873ZM42.8024 25.3669C42.7268 25.5181 42.6875 25.6413 42.6724 25.6874L45.5238 26.62C45.5307 26.5989 45.5261 26.6138 45.5188 26.6329C45.5095 26.6573 45.4983 26.6834 45.4857 26.7085L42.8024 25.3669ZM43.735 22.7834L42.735 25.5234L45.5532 26.5519L46.5532 23.8119L43.735 22.7834ZM43.7276 22.8324C43.7269 22.8153 43.7295 22.7983 43.7354 22.7822L46.5527 23.8132C46.6825 23.4584 46.741 23.0814 46.7249 22.704L43.7276 22.8324ZM43.7397 22.8818C43.7325 22.8663 43.7284 22.8495 43.7276 22.8324L46.7249 22.704C46.7087 22.3265 46.6182 21.9559 46.4584 21.6135L43.7397 22.8818ZM43.7518 22.9492C43.7693 22.9565 43.784 22.9694 43.7933 22.9859L46.4048 21.5094C46.0652 20.9088 45.5341 20.4394 44.8964 20.1761L43.7518 22.9492ZM43.9581 22.9885C43.9337 23.0009 43.9054 23.0033 43.8793 22.9952L44.7688 20.1301C44.0477 19.9062 43.2676 19.973 42.595 20.3161L43.9581 22.9885ZM44.0099 22.9286C44.0011 22.9545 43.9825 22.976 43.9581 22.9885L42.595 20.3161C41.9223 20.6592 41.4103 21.2515 41.1682 21.9668L44.0099 22.9286ZM43.3168 24.8717L44.0018 22.9517L41.1763 21.9436L40.4913 23.8636L43.3168 24.8717ZM40.9443 31.6249L43.3193 24.8649L40.4889 23.8705L38.1139 30.6305L40.9443 31.6249ZM40.1393 32.6441C40.4865 32.4137 40.7568 32.0848 40.9157 31.6997L38.1424 30.5557C38.2116 30.388 38.3293 30.2448 38.4805 30.1445L40.1393 32.6441ZM38.9674 32.9926C39.3841 32.9959 39.7922 32.8745 40.1393 32.6441L38.4805 30.1445C38.6316 30.0442 38.8093 29.9913 38.9907 29.9927L38.9674 32.9926ZM38.4147 32.8932C38.422 32.8956 38.4803 32.9155 38.5436 32.9328C38.5868 32.9446 38.7597 32.9927 38.9791 32.9927V29.9927C39.0911 29.9927 39.1784 30.0059 39.2252 30.0143C39.2756 30.0234 39.3136 30.0332 39.333 30.0385C39.3653 30.0473 39.3899 30.056 39.3634 30.0472L38.4147 32.8932ZM38.7991 32.9477C38.6871 32.9477 38.5997 32.9344 38.5529 32.926C38.5026 32.917 38.4645 32.9071 38.4452 32.9019C38.4128 32.893 38.3882 32.8844 38.4147 32.8932L39.3634 30.0472C39.3562 30.0447 39.2978 30.0248 39.2345 30.0076C39.1913 29.9958 39.0184 29.9477 38.7991 29.9477V32.9477ZM37.13 31.8259C37.3689 32.3037 37.7813 32.6722 38.2828 32.856L39.3154 30.0393C39.532 30.1187 39.7101 30.2779 39.8133 30.4843L37.13 31.8259ZM36.9976 30.2857C36.8438 30.7972 36.8911 31.3482 37.13 31.8259L39.8133 30.4843C39.9165 30.6907 39.937 30.9287 39.8705 31.1497L36.9976 30.2857ZM39.317 23.6007L37.017 30.2257L39.8511 31.2096L42.1511 24.5846L39.317 23.6007ZM39.356 23.4833L39.311 23.6183L42.1571 24.567L42.2021 24.432L39.356 23.4833ZM39.3614 23.4675L39.3614 23.4675L42.1967 24.4478C42.444 23.7326 42.4119 22.9504 42.1067 22.2578L39.3614 23.4675ZM39.3967 23.5962C39.4203 23.6053 39.4402 23.622 39.4534 23.6436L42.0148 22.0818C41.6584 21.4974 41.1196 21.0466 40.4814 20.7991L39.3967 23.5962ZM39.566 23.622C39.5417 23.6341 39.5135 23.6363 39.4876 23.6281L40.3906 20.7672C39.6748 20.5413 38.8992 20.6022 38.2275 20.9371L39.566 23.622ZM39.6182 23.563C39.6091 23.5887 39.5904 23.6098 39.566 23.622L38.2275 20.9371C37.5557 21.272 37.0403 21.8547 36.79 22.5623L39.6182 23.563ZM38.4751 26.7317L39.6151 23.5717L36.7931 22.5537L35.6531 25.7137L38.4751 26.7317ZM38.5191 26.3127C38.5191 26.2737 38.5207 26.351 38.5123 26.4352C38.4998 26.5606 38.4646 26.7419 38.3663 26.9385C38.2808 27.1095 38.1821 27.2205 38.153 27.2528C38.1267 27.282 38.1021 27.306 38.1247 27.2833L36.0034 25.162C35.9993 25.1661 35.9886 25.1768 35.9779 25.1877C35.9673 25.1986 35.9468 25.2196 35.9231 25.2459C35.8813 25.2924 35.7742 25.4146 35.683 25.5969C35.5791 25.8047 35.5412 25.9973 35.5272 26.1367C35.5213 26.1962 35.5199 26.2443 35.5195 26.2677C35.519 26.2902 35.5191 26.3113 35.5191 26.3127H38.5191ZM36.7885 31.472L38.4335 26.812L35.6046 25.8134L33.9596 30.4734L36.7885 31.472ZM35.9832 32.4874C36.3253 32.2604 36.5934 31.938 36.7542 31.5602L33.9939 30.3852C34.0628 30.2233 34.1777 30.0851 34.3243 29.9878L35.9832 32.4874ZM34.8292 32.8377C35.2398 32.8363 35.641 32.7145 35.9832 32.4874L34.3243 29.9878C34.471 29.8905 34.6429 29.8383 34.8189 29.8377L34.8292 32.8377ZM34.2597 32.7382C34.267 32.7406 34.3253 32.7605 34.3886 32.7778C34.4318 32.7896 34.6047 32.8377 34.8241 32.8377V29.8377C34.9361 29.8377 35.0234 29.8509 35.0702 29.8593C35.1206 29.8684 35.1586 29.8782 35.178 29.8835C35.2103 29.8923 35.2349 29.901 35.2084 29.8922L34.2597 32.7382ZM34.6441 32.7927C34.5321 32.7927 34.4447 32.7794 34.3979 32.771C34.3476 32.762 34.3095 32.7521 34.2902 32.7469C34.2578 32.738 34.2332 32.7294 34.2597 32.7382L35.2084 29.8922C35.2012 29.8897 35.1428 29.8698 35.0795 29.8526C35.0363 29.8408 34.8634 29.7927 34.6441 29.7927V32.7927ZM32.9774 31.5881C33.1775 32.0446 33.532 32.416 33.9788 32.6371L35.3094 29.9483C35.4948 30.0401 35.642 30.1942 35.725 30.3837L32.9774 31.5881ZM32.8846 30.1409C32.7444 30.6193 32.7773 31.1316 32.9774 31.5881L35.725 30.3837C35.8081 30.5732 35.8217 30.7859 35.7636 30.9844L32.8846 30.1409ZM34.5538 25.3807L32.9088 30.0657L35.7394 31.0596L37.3844 26.3746L34.5538 25.3807ZM34.5565 25.4439C34.5475 25.4239 34.5465 25.4014 34.5538 25.3808L37.3844 26.3746C37.6323 25.6684 37.5991 24.8939 37.2917 24.2115L34.5565 25.4439ZM34.569 25.5281C34.5924 25.5378 34.6119 25.5549 34.6245 25.5768L37.2236 24.0785C36.8812 23.4845 36.3523 23.0201 35.7191 22.7573L34.569 25.5281ZM34.771 25.567C34.7467 25.5791 34.7185 25.5813 34.6926 25.5731L35.5956 22.7122C34.8798 22.4863 34.1042 22.5472 33.4325 22.8821L34.771 25.567ZM34.8232 25.508C34.8141 25.5337 34.7954 25.5548 34.771 25.567L33.4325 22.8821C32.7607 23.217 32.2453 23.7997 31.995 24.5073L34.8232 25.508ZM32.9549 30.848L34.8249 25.503L31.9932 24.5123L30.1232 29.8573L32.9549 30.848ZM35.3567 36.018L32.9367 29.808L30.1414 30.8973L32.5614 37.1073L35.3567 36.018ZM35.1078 44.2335C36.2192 41.6398 36.314 38.7229 35.3732 36.0626L32.5449 37.0628C33.2344 39.0127 33.165 41.1508 32.3503 43.0519L35.1078 44.2335ZM34.9336 44.6376C35.0162 44.4738 35.0875 44.3046 35.1473 44.1312L32.3108 43.1542C32.2951 43.1999 32.2763 43.2445 32.2545 43.2877L34.9336 44.6376ZM35.6859 43.3206C35.2348 43.164 34.8036 42.9552 34.4011 42.6983L32.7871 45.2271C33.387 45.61 34.0298 45.9214 34.7022 46.1547L35.6859 43.3206ZM38.8396 43.6838C37.7865 43.8254 36.7147 43.7048 35.7193 43.3327L34.6688 46.1427C36.1267 46.6877 37.6966 46.8644 39.2393 46.6571L38.8396 43.6838ZM41.7564 42.5212C40.8947 43.1429 39.8928 43.5423 38.8396 43.6838L39.2393 46.6571C40.7819 46.4498 42.2494 45.8648 43.5117 44.9541L41.7564 42.5212ZM27.6509 46.1457C26.7004 46.5469 25.6644 46.7034 24.6379 46.6008L24.3395 49.5859C25.8653 49.7384 27.4049 49.5058 28.8176 48.9095L27.6509 46.1457ZM31.3271 42.5637C30.6151 44.1851 29.302 45.4671 27.6641 46.1402L28.8043 48.915C31.1606 47.9468 33.0496 46.1025 34.0739 43.77L31.3271 42.5637ZM31.4819 37.4466C32.0946 39.1081 32.0391 40.9424 31.3271 42.5637L34.0739 43.77C35.0982 41.4375 35.178 38.7987 34.2965 36.4086L31.4819 37.4466ZM27.8342 27.9662L31.4892 37.4662L34.2892 36.389L30.6342 26.889L27.8342 27.9662ZM27.8664 28.0166C27.8527 28.0029 27.8421 27.9865 27.8351 27.9684L30.6333 26.8868C30.4908 26.5179 30.2732 26.1827 29.9945 25.9022L27.8664 28.0166ZM27.9144 28.0482C27.8963 28.0411 27.88 28.0303 27.8664 28.0166L29.9945 25.9022C29.7158 25.6216 29.382 25.402 29.0141 25.257L27.9144 28.0482ZM27.9642 28.0526C27.9378 28.0526 27.9117 28.0474 27.8873 28.0372L29.0411 25.268C28.6999 25.1258 28.3339 25.0526 27.9642 25.0526V28.0526ZM28.0411 28.0372C28.0168 28.0474 27.9906 28.0526 27.9642 28.0526V25.0526C27.5945 25.0526 27.2285 25.1258 26.8873 25.268L28.0411 28.0372ZM28.088 28.006C28.0751 28.0191 28.0597 28.0295 28.0427 28.0366L26.8857 25.2686C26.5391 25.4135 26.2244 25.6253 25.9596 25.8919L28.088 28.006ZM28.1182 27.9605C28.1113 27.9775 28.101 27.993 28.088 28.0061L25.9596 25.8919C25.6948 26.1584 25.4851 26.4746 25.3426 26.8222L28.1182 27.9605ZM28.1287 27.9069C28.1288 27.9253 28.1252 27.9435 28.1182 27.9605L25.3426 26.8222C25.2 27.1698 25.1274 27.5421 25.1287 27.9178L28.1287 27.9069ZM28.1178 27.8533C28.1249 27.8703 28.1286 27.8885 28.1287 27.9069L25.1287 27.9178C25.1301 28.2935 25.2055 28.6653 25.3506 29.0119L28.1178 27.8533ZM29.8353 32.2241L28.1303 27.8841L25.3381 28.9811L27.0431 33.3211L29.8353 32.2241ZM29.9876 32.9715C29.9835 32.6932 29.9232 32.4186 29.8103 32.1641L27.0682 33.3811C27.017 33.2658 26.9897 33.1415 26.9879 33.0155L29.9876 32.9715ZM29.834 33.7837C29.9394 33.5261 29.9916 33.2498 29.9876 32.9715L26.9879 33.0155C26.986 32.8895 27.0097 32.7644 27.0574 32.6477L29.834 33.7837ZM29.3742 34.4707C29.5722 34.275 29.7286 34.0414 29.834 33.7837L27.0574 32.6477C27.1051 32.5311 27.1759 32.4253 27.2656 32.3367L29.3742 34.4707ZM28.6818 34.9222C28.9407 34.8199 29.1762 34.6663 29.3742 34.4707L27.2656 32.3367C27.3553 32.2481 27.4619 32.1786 27.5791 32.1322L28.6818 34.9222ZM27.8678 35.0661C28.1461 35.0735 28.4229 35.0245 28.6818 34.9222L27.5791 32.1322C27.6963 32.0859 27.8217 32.0638 27.9477 32.0671L27.8678 35.0661ZM27.0626 34.8791C27.3156 34.995 27.5895 35.0586 27.8678 35.0661L27.9477 32.0671C28.0737 32.0705 28.1977 32.0993 28.3122 32.1518L27.0626 34.8791ZM26.3952 34.3913C26.5826 34.5972 26.8096 34.7632 27.0626 34.8791L28.3123 32.1518C28.4268 32.2043 28.5296 32.2794 28.6144 32.3726L26.3952 34.3913ZM25.9726 33.6809C26.0642 33.9438 26.2079 34.1854 26.3952 34.3913L28.6144 32.3726C28.6992 32.4658 28.7643 32.5753 28.8058 32.6943L25.9726 33.6809ZM24.3416 29.3792L25.9866 33.7192L28.7918 32.656L27.1468 28.316L24.3416 29.3792ZM24.1992 28.7526C24.1992 28.755 24.1992 28.7751 24.1995 28.7962C24.1999 28.8181 24.2011 28.8628 24.2061 28.918C24.2175 29.0437 24.2496 29.2338 24.3492 29.4441C24.44 29.6357 24.5499 29.7644 24.5978 29.8181C24.6234 29.8469 24.6455 29.8697 24.6569 29.8813C24.6683 29.893 24.6796 29.9044 24.6835 29.9083L26.8049 27.7869C26.7812 27.7633 26.8092 27.7904 26.8386 27.8235C26.8738 27.863 26.9753 27.9802 27.0604 28.1598C27.1544 28.3583 27.1837 28.5362 27.1938 28.6464C27.2006 28.7219 27.1992 28.7908 27.1992 28.7526H24.1992ZM23.0746 26.2L24.3046 29.305L27.0938 28.2002L25.8638 25.0952L23.0746 26.2ZM23.092 26.2177C23.08 26.2051 23.0707 26.1902 23.0646 26.1739L25.8739 25.1213C25.739 24.7614 25.5332 24.4322 25.2687 24.1533L23.092 26.2177ZM23.1343 26.2474C23.1183 26.2404 23.104 26.2304 23.092 26.2177L25.2687 24.1533C25.0042 23.8744 24.6864 23.6515 24.3341 23.4978L23.1343 26.2474ZM23.2342 26.2678C23.199 26.2678 23.1641 26.2605 23.1318 26.2463L24.3366 23.4989C23.9891 23.3465 23.6137 23.2678 23.2342 23.2678V26.2678ZM23.3366 26.2463C23.3043 26.2605 23.2695 26.2678 23.2342 26.2678V23.2678C22.8547 23.2678 22.4793 23.3465 22.1318 23.4989L23.3366 26.2463ZM23.4013 26.1767C23.3879 26.2092 23.3623 26.2352 23.3301 26.2492L22.1384 23.496C21.4536 23.7924 20.9116 24.3442 20.6274 25.0341L23.4013 26.1767ZM23.4018 26.0751C23.4148 26.1077 23.4146 26.1442 23.4013 26.1767L20.6274 25.0341C20.3432 25.7239 20.3394 26.4974 20.6167 27.1901L23.4018 26.0751ZM23.4822 26.3136L23.4372 26.1736L20.5812 27.0916L20.6262 27.2316L23.4822 26.3136ZM25.741 32.2387L23.456 26.2387L20.6524 27.3064L22.9374 33.3064L25.741 32.2387ZM25.6937 33.7995C25.8988 33.3284 25.9245 32.7986 25.7661 32.3099L22.9123 33.2352C22.845 33.0275 22.8559 32.8022 22.9431 32.6019L25.6937 33.7995ZM24.6527 34.8673C25.1184 34.6503 25.4886 34.2705 25.6937 33.7995L22.9431 32.6019C23.0303 32.4016 23.1877 32.2402 23.3857 32.1479L24.6527 34.8673ZM23.6809 35.0442C24.0967 35.0884 24.5147 34.9838 24.8609 34.7492L23.1776 32.266C23.4181 32.1029 23.7086 32.0303 23.9976 32.061L23.6809 35.0442ZM22.6526 34.6532C22.9676 34.8832 23.3408 35.0201 23.7298 35.0486L23.9487 32.0566C24.1194 32.0691 24.2831 32.1292 24.4214 32.2301L22.6526 34.6532ZM21.9477 33.7477C22.0933 34.1095 22.3375 34.4232 22.6526 34.6532L24.4214 32.2301C24.5596 32.331 24.6668 32.4687 24.7307 32.6275L21.9477 33.7477ZM19.5643 27.5564L21.9393 33.7264L24.7391 32.6487L22.3641 26.4787L19.5643 27.5564ZM18.8326 25.6369L19.5626 27.5519L22.3658 26.4833L21.6358 24.5683L18.8326 25.6369ZM18.8641 25.6851C18.8499 25.6707 18.8389 25.6535 18.8317 25.6346L21.6367 24.5706C21.4956 24.1987 21.2785 23.8605 20.9991 23.5775L18.8641 25.6851ZM18.9141 25.7181C18.8953 25.7107 18.8783 25.6994 18.8641 25.6851L20.9991 23.5775C20.7197 23.2945 20.3843 23.0729 20.0143 22.9271L18.9141 25.7181ZM18.9642 25.7226C18.9378 25.7226 18.9117 25.7174 18.8873 25.7072L20.0411 22.938C19.6999 22.7958 19.3339 22.7226 18.9642 22.7226V25.7226ZM19.0411 25.7072C19.0168 25.7174 18.9906 25.7226 18.9642 25.7226V22.7226C18.5945 22.7226 18.2285 22.7958 17.8873 22.938L19.0411 25.7072ZM19.088 25.676C19.0751 25.6891 19.0597 25.6995 19.0427 25.7066L17.8857 22.9386C17.5391 23.0835 17.2244 23.2953 16.9596 23.5619L19.088 25.676ZM19.1182 25.6305C19.1113 25.6475 19.101 25.663 19.088 25.676L16.9596 23.5619C16.6948 23.8284 16.4851 24.1446 16.3426 24.4922L19.1182 25.6305ZM19.1287 25.5769C19.1288 25.5953 19.1252 25.6135 19.1182 25.6305L16.3426 24.4922C16.2 24.8398 16.1274 25.2121 16.1287 25.5878L19.1287 25.5769ZM19.1178 25.5233C19.1249 25.5403 19.1286 25.5585 19.1287 25.5769L16.1287 25.5878C16.1301 25.9635 16.2055 26.3353 16.3506 26.6819L19.1178 25.5233ZM20.2445 28.3769L19.1295 25.5519L16.339 26.6533L17.454 29.4783L20.2445 28.3769ZM20.2133 28.3243C20.2006 28.2988 20.2324 28.3591 20.2607 28.4347C20.2915 28.5166 20.3492 28.6931 20.3492 28.9276H17.3492C17.3492 29.1846 17.4126 29.3836 17.4517 29.488C17.4725 29.5433 17.4925 29.5876 17.5053 29.6149C17.5173 29.6406 17.5287 29.6633 17.5301 29.6659L20.2133 28.3243ZM20.3942 29.0626C20.3942 28.8056 20.3308 28.6066 20.2917 28.5022C20.2709 28.4469 20.2509 28.4026 20.2382 28.3753C20.2261 28.3496 20.2147 28.3269 20.2133 28.3243L17.5301 29.6659C17.5428 29.6914 17.511 29.6311 17.4827 29.5555C17.452 29.4736 17.3942 29.2971 17.3942 29.0626H20.3942ZM20.3942 29.1076V29.0626H17.3942V29.1076H20.3942ZM22.2914 33.6818L20.2914 28.5618L17.497 29.6534L19.497 34.7734L22.2914 33.6818ZM22.2467 35.2556C22.4532 34.7847 22.4797 34.2544 22.3212 33.7653L19.4672 34.6899C19.3993 34.4803 19.4107 34.253 19.4991 34.0512L22.2467 35.2556ZM21.2012 36.3203C21.6683 36.1054 22.0403 35.7265 22.2467 35.2556L19.4991 34.0512C19.5876 33.8494 19.747 33.687 19.9472 33.5949L21.2012 36.3203ZM20.2359 36.4942C20.6517 36.5384 21.0697 36.4338 21.4159 36.1992L19.7326 33.716C19.9731 33.5529 20.2636 33.4803 20.5526 33.511L20.2359 36.4942ZM19.2076 36.1032C19.5226 36.3331 19.8958 36.4701 20.2848 36.4986L20.5037 33.5066C20.6744 33.5191 20.8382 33.5792 20.9764 33.6801L19.2076 36.1032ZM18.5027 35.1977C18.6483 35.5595 18.8925 35.8732 19.2076 36.1032L20.9764 33.6801C21.1146 33.781 21.2218 33.9187 21.2857 34.0775L18.5027 35.1977ZM16.4407 29.8799L18.4957 35.1799L21.2928 34.0953L19.2378 28.7953L16.4407 29.8799ZM16.4347 29.9691C16.4701 29.9855 16.4993 30.0129 16.5177 30.0473L19.1607 28.6279C18.8344 28.0204 18.3196 27.5355 17.6937 27.2461L16.4347 29.9691ZM16.6319 29.9828C16.5705 30.0037 16.5035 30.0004 16.4445 29.9736L17.6839 27.2416C17.0485 26.9533 16.3272 26.9178 15.6665 27.1424L16.6319 29.9828ZM16.7694 29.9176C16.7563 29.9307 16.7408 29.9411 16.7237 29.9482L15.5747 27.177C15.2255 27.3218 14.9084 27.5344 14.6419 27.8025L16.7694 29.9176ZM16.7997 29.8718C16.7928 29.8889 16.7824 29.9045 16.7694 29.9176L14.6419 27.8025C14.3754 28.0706 14.1646 28.3888 14.0219 28.7389L16.7997 29.8718ZM16.8101 29.8178C16.8103 29.8363 16.8067 29.8546 16.7997 29.8718L14.0219 28.7389C13.8791 29.0889 13.8072 29.4638 13.8102 29.8418L16.8101 29.8178ZM16.7989 29.7639C16.8061 29.781 16.81 29.7993 16.8101 29.8178L13.8102 29.8418C13.8132 30.2199 13.8912 30.5935 14.0395 30.9412L16.7989 29.7639ZM20.7029 39.573L16.8129 29.798L14.0255 30.9072L17.9155 40.6822L20.7029 39.573ZM20.8184 40.7725C20.9083 40.3388 20.8547 39.8876 20.6656 39.4872L17.9528 40.768C17.8638 40.5796 17.8386 40.3673 17.8809 40.1632L20.8184 40.7725ZM20.167 41.891C20.4998 41.5987 20.7284 41.2061 20.8184 40.7725L17.8809 40.1632C17.9232 39.9591 18.0308 39.7744 18.1874 39.6368L20.167 41.891ZM18.9737 42.3924C19.4154 42.3592 19.8342 42.1832 20.167 41.891L18.1874 39.6368C18.344 39.4993 18.5411 39.4165 18.749 39.4009L18.9737 42.3924ZM17.7189 42.0749C18.0917 42.3142 18.5321 42.4256 18.9738 42.3924L18.749 39.4009C18.9568 39.3852 19.1641 39.4377 19.3395 39.5503L17.7189 42.0749ZM14.3325 40.0438L17.7575 42.0988L19.301 39.5264L15.876 37.4714L14.3325 40.0438ZM14.0303 39.7864C13.7575 39.5135 13.6042 39.1435 13.6042 38.7576H16.6042C16.6042 38.3478 16.4414 37.9549 16.1517 37.6652L14.0303 39.7864ZM15.0592 40.2126C14.6733 40.2126 14.3032 40.0593 14.0304 39.7865L16.1516 37.665C15.8619 37.3754 15.469 37.2126 15.0592 37.2126V40.2126ZM14.2966 39.9695C14.266 39.9736 14.2349 39.9662 14.2094 39.9486L15.909 37.4766C15.3225 37.0733 14.6073 36.902 13.9018 36.9956L14.2966 39.9695ZM14.4126 39.9307C14.3828 39.9496 14.3493 39.962 14.3143 39.9671L13.8841 36.9981C13.4994 37.0538 13.1309 37.1905 12.8029 37.3991L14.4126 39.9307ZM14.4873 39.8571C14.4679 39.8866 14.4424 39.9117 14.4126 39.9306L12.8029 37.3991C12.4749 37.6076 12.1948 37.8834 11.9811 38.2081L14.4873 39.8571ZM14.5 39.8374L14.5 39.8374L11.9684 38.2278C11.5749 38.8466 11.4217 39.5882 11.5378 40.3123L14.5 39.8374ZM14.5 39.8374L14.5 39.8374L11.5378 40.3123C11.6539 41.0364 12.0312 41.6929 12.5984 42.1578L14.5 39.8374ZM21.8203 45.591C20.9161 44.9232 19.1019 43.5051 17.4906 42.2314C16.6889 41.5978 15.9443 41.0053 15.3982 40.5678C15.1247 40.3489 14.903 40.1702 14.7493 40.0453C14.6718 39.9824 14.6153 39.936 14.5793 39.9059C14.5603 39.8901 14.5529 39.8838 14.553 39.8839C14.5535 39.8843 14.5556 39.8861 14.5589 39.889C14.5618 39.8916 14.5681 39.8973 14.5764 39.905C14.583 39.9112 14.6001 39.9271 14.6215 39.9489C14.6221 39.9495 14.7028 40.0286 14.7825 40.1438L12.3159 41.8514C12.3964 41.9676 12.4784 42.0482 12.481 42.0509C12.5044 42.0747 12.5242 42.0933 12.5342 42.1026C12.5554 42.1223 12.5744 42.1389 12.5851 42.1483C12.6087 42.1687 12.6349 42.1908 12.659 42.2108C12.7091 42.2526 12.7767 42.308 12.857 42.3732C13.0189 42.5048 13.2471 42.6886 13.5227 42.9094C14.0747 43.3515 14.8245 43.948 15.6303 44.585C17.234 45.8526 19.0873 47.302 20.0381 48.0042L21.8203 45.591ZM24.6378 46.6008C23.6113 46.4982 22.6268 46.1398 21.7745 45.5584L20.0839 48.0368C21.3506 48.9008 22.8138 49.4334 24.3395 49.5859L24.6378 46.6008Z",
          fill: "white",
          mask: "url(#path-2-outside-1_2_17300)"
        }), (0, _v6.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M38.0348 31.2741L41.0348 21.7741L42.4652 22.2258L39.4652 31.7258L38.0348 31.2741ZM36.2885 23.5128L33.7885 31.0128L35.2115 31.4871L37.7115 23.9871L36.2885 23.5128ZM23.5495 33.7678L20.2995 25.2678L21.7006 24.7321L24.9506 33.2321L23.5495 33.7678ZM16.5552 27.2822L19.8052 35.2822L21.1949 34.7177L17.9449 26.7177L16.5552 27.2822ZM34.7398 39.3767C34.4787 37.81 33.7724 35.5078 33.0854 33.4783C32.3938 31.4348 31.7017 29.6096 31.4464 28.9714L30.0537 29.5285C30.2984 30.1403 30.9812 31.9401 31.6646 33.9592C32.3527 35.9921 33.0213 38.1899 33.2602 39.6233C33.4064 40.5005 33.2671 41.5252 33.0021 42.4371C32.7309 43.3705 32.3704 44.0448 32.1856 44.2561L33.3145 45.2438C33.7129 44.7884 34.1489 43.8664 34.4426 42.8557C34.7425 41.8236 34.9365 40.5567 34.7398 39.3767ZM24.2995 25.2678L27.5495 33.7678L28.9506 33.2321L25.7006 24.7321L24.2995 25.2678ZM45.0596 24.207L41.5596 32.457L42.9405 33.0429L46.4405 24.7929L45.0596 24.207ZM45.4715 34.8036L43.2565 35.6896C42.5778 35.4453 41.5605 35.3129 40.3767 35.5102C38.7898 35.7746 37.6683 36.9751 37.146 37.5342C37.0765 37.6086 37.0177 37.6717 36.9697 37.7196L38.0304 38.7803C38.1102 38.7005 38.1938 38.6132 38.2816 38.5216L38.2818 38.5214C38.8451 37.9336 39.5837 37.163 40.6233 36.9898C41.6019 36.8267 42.371 36.9578 42.7788 37.1121C43.0514 37.2153 43.397 37.249 43.737 37.1129L46.0286 36.1963L45.4715 34.8036Z",
          fill: "white"
        }), (0, _v6.jsx)("path", {
          d: "M29.1601 19.4584L28.2674 12.7677",
          stroke: "white",
          strokeWidth: "1.5"
        }), (0, _v6.jsx)("line", {
          y1: "-0.75",
          x2: "6",
          y2: "-0.75",
          transform: "matrix(-0.610147 -0.792288 -0.792288 0.610147 24.0483 20.8427)",
          stroke: "white",
          strokeWidth: "1.5"
        }), (0, _v6.jsx)("path", {
          d: "M33.7628 19.1682L36.0492 13.6209",
          stroke: "white",
          strokeWidth: "1.5"
        })]
      });
    },
    _v138 = function () {
      return (0, _v6.jsxs)("svg", {
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, _v6.jsx)("circle", {
          cx: "32",
          cy: "32",
          r: "32",
          fill: "black"
        }), (0, _v6.jsx)("path", {
          d: "M16.597 23.5L18.5948 16.0441C18.8807 14.9772 19.9774 14.344 21.0443 14.6299L51.954 22.9121C53.0209 23.198 53.6541 24.2947 53.3682 25.3616L48.0624 45.1631C47.9623 45.5367 47.7628 45.8571 47.4999 46.1035",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinejoin: "round"
        }), (0, _v6.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.5 46C11.5 47.1046 12.3954 48 13.5 48H45.5C46.6046 48 47.5 47.1046 47.5 46V25.5C47.5 24.3954 46.6046 23.5 45.5 23.5H13.5C12.3954 23.5 11.5 24.3954 11.5 25.5V46Z",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinejoin: "round"
        }), (0, _v6.jsx)("path", {
          d: "M32 35.75C32 35.8945 31.9258 36.0281 31.8051 36.1009L27.0908 38.9447C26.9693 39.018 26.8192 39.0185 26.6972 38.946C26.5752 38.8736 26.5 38.7392 26.5 38.5938V32.9062C26.5 32.7608 26.5752 32.6264 26.6972 32.554C26.8192 32.4815 26.9693 32.482 27.0908 32.5553L31.8051 35.3991C31.9258 35.4719 32 35.6055 32 35.75Z",
          fill: "white",
          stroke: "white",
          strokeLinejoin: "round"
        })]
      });
    },
    _v139 = function ({
      isExpert: _v0
    }) {
      let _v1 = (0, _v8.useMemo)(_v46.getTranslatedStrings, []),
        _v2 = (0, _v8.useContext)(_v13.ViewerContext),
        _v3 = _v2?.user && _v50.ALLOWED_PLANS_FOR_REWARD_SECTION.includes(_v2.user.account),
        [_v4, _v5] = (0, _v8.useState)(!1);
      return (0, _v6.jsxs)(_v6.Fragment, {
        children: [(0, _v6.jsxs)(_v150, {
          children: [(0, _v6.jsx)(_v152, {
            children: _v1.EarnRewards
          }), (0, _v6.jsxs)(_v151, {
            children: [(0, _v6.jsxs)(_v148, {
              children: [(0, _v6.jsx)(_v137, {}), (0, _v6.jsx)(_v144, {
                children: _v1.ReferClientsHeader
              }), (0, _v6.jsx)(_v145, {
                children: _v1.ReferClientsSubheader
              }), (0, _v6.jsx)(_v146, {
                format: "basic",
                variant: "outline",
                size: "lg",
                element: "a",
                href: "/experts/create-account",
                target: "_blank",
                children: _v1.ReferClientsCTA
              })]
            }), _v3 && (0, _v6.jsxs)(_v149, {
              children: [(0, _v6.jsx)(_v138, {}), (0, _v6.jsx)(_v144, {
                children: _v1.VideoUploadHeader
              }), (0, _v6.jsx)(_v145, {
                children: _v1.VideoUploadSubheader
              }), (0, _v6.jsx)(_v146, {
                size: "lg",
                format: "basic",
                variant: "outline",
                onClick: () => {
                  _v0 ? window.location.href = "/help/contact" : _v5(!0);
                },
                target: "_blank",
                children: _v1.VideoUploadCTA
              })]
            })]
          })]
        }), (0, _v6.jsx)(_v136.Modal, {
          active: _v4,
          content: (0, _v6.jsxs)(_v143, {
            children: [(0, _v6.jsx)(_v140, {
              format: "soft",
              variant: "minimalTransparent",
              icon: (0, _v6.jsx)(_v80.DismissX, {}),
              size: "sm",
              onClick: () => {
                _v5(!1);
              }
            }), (0, _v6.jsx)(_v142, {
              children: _v1.CompleteTraining
            }), (0, _v6.jsx)(_v141, {
              children: _v1.VideoUploadSubheader
            })]
          })
        })]
      });
    },
    _v140 = (0, _v29.default)(_v25.Button).withConfig({
      displayName: "RewardsSection__DismissButton",
      componentId: "sc-62635d03-0"
    })`
  position: absolute;
  top: ${(0, _v47.rem)(10)};
  right: ${(0, _v47.rem)(10)};
`,
    _v141 = _v29.default.div.withConfig({
      displayName: "RewardsSection__ModalSubHeader",
      componentId: "sc-62635d03-1"
    })`
  font-weight: normal;
  font-size: ${(0, _v47.rem)(14)};
  line-height: ${(0, _v47.rem)(22)};
  margin-bottom: ${(0, _v47.rem)(24)};
`,
    _v142 = _v29.default.div.withConfig({
      displayName: "RewardsSection__ModalHeader",
      componentId: "sc-62635d03-2"
    })`
  font-style: normal;
  font-weight: bold;
  font-size: ${(0, _v47.rem)(18)};
  line-height: ${(0, _v47.rem)(22)};
  margin-bottom: ${(0, _v47.rem)(12)};
  color: #23313b;
`,
    _v143 = _v29.default.div.withConfig({
      displayName: "RewardsSection__Content",
      componentId: "sc-62635d03-3"
    })`
  padding: ${(0, _v47.rem)(16)};
  background-color: ${_v30.white};

  border-radius: ${(0, _v47.rem)(8)};
  position: relative;
  @media (min-width: ${_v50.TABLET}) {
    min-width: ${(0, _v47.rem)(480)};
  }
`,
    _v144 = _v29.default.div.withConfig({
      displayName: "RewardsSection__CardTitle",
      componentId: "sc-62635d03-4"
    })`
  margin: ${(0, _v47.rem)(22)} 0 ${(0, _v47.rem)(16)};
  font-weight: bold;
  font-size: ${(0, _v47.rem)(28)};
  line-height: ${(0, _v47.rem)(33)};
`,
    _v145 = _v29.default.div.withConfig({
      displayName: "RewardsSection__CardSubTitle",
      componentId: "sc-62635d03-5"
    })`
  margin-bottom: ${(0, _v47.rem)(16)};
  font-style: normal;
  font-weight: normal;
  font-size: ${(0, _v47.rem)(16)};
  line-height: ${(0, _v47.rem)(24)};
  @media (min-width: ${_v50.DESKTOP}) {
    margin-bottom: ${(0, _v47.rem)(24)};
  }
`,
    _v146 = (0, _v29.default)(_v25.Button).withConfig({
      displayName: "RewardsSection__CardButton",
      componentId: "sc-62635d03-6"
    })`
  width: fit-content;
  font-weight: 700;
`,
    _v147 = _v29.default.div.withConfig({
      displayName: "RewardsSection__ContentCard",
      componentId: "sc-62635d03-7"
    })`
  padding: ${(0, _v47.rem)(32)};
  border: ${(0, _v47.rem)(1)} solid rgba(0, 0, 0, 0.025);
  box-shadow:
    ${(0, _v47.rem)(0)} ${(0, _v47.rem)(10)} ${(0, _v47.rem)(6.8)} ${(0, _v47.rem)(-4.8)} rgba(0, 0, 0, 0.09),
    ${(0, _v47.rem)(0)} ${(0, _v47.rem)(0)} ${(0, _v47.rem)(10.8)} ${(0, _v47.rem)(.7)} rgba(0, 0, 0, 0.06);
  border-radius: ${(0, _v47.rem)(16)};
  margin-bottom: ${(0, _v47.rem)(20)};
  @media (min-width: ${_v50.TABLET}) {
    max-width: 48%;
    margin: 0;
  }
`,
    _v148 = (0, _v29.default)(_v147).withConfig({
      displayName: "RewardsSection__ReferClientsContentCard",
      componentId: "sc-62635d03-8"
    })`
  background-color: #bcd9ff;
`,
    _v149 = (0, _v29.default)(_v147).withConfig({
      displayName: "RewardsSection__VideoUploadsContentCard",
      componentId: "sc-62635d03-9"
    })`
  background-color: #edd0ff;
`,
    _v150 = _v29.default.div.withConfig({
      displayName: "RewardsSection__Container",
      componentId: "sc-62635d03-10"
    })`
  padding: ${(0, _v47.rem)(40)} ${(0, _v47.rem)(15)};
  @media (min-width: ${_v50.TABLET}) {
    padding: ${(0, _v47.rem)(64)} ${(0, _v47.rem)(32)};
  }
  @media (min-width: ${_v50.DESKTOP}) {
    padding: ${(0, _v47.rem)(64)} ${(0, _v47.rem)(80)};
  }
`,
    _v151 = _v29.default.div.withConfig({
      displayName: "RewardsSection__ContentWrapper",
      componentId: "sc-62635d03-11"
    })`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${_v50.TABLET}) {
    flex-direction: row;
  }
`,
    _v152 = _v29.default.div.withConfig({
      displayName: "RewardsSection__HeaderText",
      componentId: "sc-62635d03-12"
    })`
  color: #000000;
  text-align: center;
  font-weight: normal;
  font-size: ${(0, _v47.rem)(24)};
  margin-bottom: ${(0, _v47.rem)(24)};
  @media (min-width: ${_v50.DESKTOP}) {
    font-size: ${(0, _v47.rem)(40)};
    margin-bottom: ${(0, _v47.rem)(40)};
  }
`;
  var _v153 = _v0.i(0),
    _v154 = _v0.i(0);
  let _v155 = _v29.default.div.withConfig({
      displayName: "VimeoTextLogo__LogoContainer",
      componentId: "sc-55f9cfce-0"
    })`
  margin-left: ${(0, _v47.rem)(6)};
  margin-right: ${(0, _v47.rem)(6)};
  display: inline;
  position: relative;
  top: ${(0, _v47.rem)(2)};
`,
    _v156 = function () {
      return (0, _v6.jsx)(_v155, {
        children: (0, _v6.jsx)("svg", {
          width: "109",
          height: "31",
          viewBox: "0 0 109 31",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, _v6.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M34.6513 2.68254C34.6147 3.57769 34.1587 4.4368 33.282 5.25939C32.2966 6.18937 31.1287 6.65448 29.7787 6.65448C27.6991 6.65448 26.6943 5.76078 26.768 3.97169C26.8031 3.04196 27.3597 2.14681 28.4363 1.2877C29.5132 0.430287 30.708 0 32.023 0C32.7892 0 33.4276 0.296355 33.9395 0.8859C34.4499 1.47691 34.6867 2.0757 34.6513 2.68254ZM35.8292 26.4676C35.6246 26.6592 35.4143 26.8482 35.1985 27.0346C32.7523 29.118 30.3081 30.16 27.8639 30.16C26.7311 30.16 25.8641 29.8006 25.2627 29.0818C24.6611 28.3632 24.3781 27.4303 24.415 26.2794C24.4501 25.0945 24.8243 23.2616 25.5361 20.7821C26.2482 18.3029 26.6048 16.9728 26.6048 16.7931C26.6048 15.86 26.2751 15.392 25.6194 15.392C25.4128 15.392 24.85 15.7279 23.9307 16.3968C23.2365 18.4394 21.7246 20.938 19.3948 23.892C16.0803 28.1376 13.276 30.2608 10.9821 30.2608C9.56135 30.2608 8.3584 28.9683 7.37616 26.3819C6.72043 24.0116 6.06445 21.6412 5.40848 19.2709C4.67909 16.686 3.89681 15.3919 3.06016 15.3919C2.87775 15.3919 2.23957 15.7704 1.14685 16.5238L0 15.0673C1.20295 14.0256 2.38984 12.9838 3.5577 11.9404C5.16205 10.574 6.36674 9.85543 7.16978 9.78286C9.06702 9.60315 10.2349 10.8813 10.6733 13.6175C11.1467 16.5693 11.4747 18.4054 11.6586 19.1243C12.2058 21.5733 12.8071 22.7967 13.4648 22.7967C13.975 22.7967 14.7412 22.0021 15.7635 20.4137C16.784 18.8247 17.3312 17.6159 17.4049 16.7853C17.5505 15.4141 17.0033 14.7269 15.7635 14.7269C15.1797 14.7269 14.5781 14.8594 13.9592 15.1209C15.1572 11.2532 17.4464 9.37473 20.8249 9.48164C23.081 9.54698 24.2629 10.8521 24.3705 13.397C24.9142 12.9117 25.458 12.4263 26.0018 11.9404C27.571 10.5741 28.7389 9.85521 29.5068 9.78289C30.7098 9.67574 31.5944 10.024 32.1606 10.831C32.7254 11.6377 32.935 12.6843 32.7909 13.9737C32.3159 16.1598 31.8037 18.9351 31.2568 22.3014C31.2199 23.8428 31.7862 24.6121 32.954 24.6121C33.4644 24.6121 34.3762 24.081 35.6911 23.0156L35.7394 22.9765C35.8233 22.2255 35.9581 21.3333 36.1445 20.2999C36.4453 18.6323 36.6131 17.3337 36.6485 16.4008C36.7204 15.7562 36.5555 15.433 36.1556 15.433C35.9364 15.433 35.3158 15.7971 34.2937 16.5237L32.9803 15.0675C33.1627 14.9256 34.3113 13.8821 36.4292 11.9403C37.9617 10.5394 39.0015 9.82056 39.5487 9.78427C40.4973 9.71195 41.2635 10.0979 41.8476 10.9429C42.4314 11.7877 42.724 12.7678 42.724 13.8821C42.724 14.2415 42.6875 14.5834 42.6155 14.9068C43.1625 14.0808 43.8007 13.3605 44.5318 12.749C46.2098 11.3116 48.0898 10.5014 50.1694 10.3217C51.9579 10.1783 53.2345 10.5913 54.0025 11.5622C54.6214 12.3533 54.9125 13.4866 54.8774 14.9601C55.1335 14.7458 55.4069 14.5111 55.6997 14.2588C56.5381 13.2882 57.3587 12.5158 58.1618 11.9403C59.5118 10.9694 60.9179 10.4306 62.3769 10.3217C64.1286 10.1783 65.3874 10.5898 66.1539 11.5575C66.8096 12.3455 67.1025 13.474 67.0305 14.9414C66.9935 15.9451 66.7473 17.4048 66.2915 19.3212C65.8338 21.2377 65.6066 22.3378 65.6066 22.6247C65.5701 23.3781 65.6437 23.8966 65.8259 24.1834C66.0083 24.4703 66.445 24.612 67.1393 24.612C67.4511 24.612 67.9126 24.4138 68.5243 24.0167C68.4667 23.5638 68.4428 23.093 68.4526 22.6041C68.4879 19.6932 69.8029 16.9256 72.3944 14.2998C75.2403 11.4252 78.598 9.986 82.4664 9.986C86.0431 9.986 87.9404 11.4218 88.1596 14.2903C88.3052 16.1186 87.2829 18.002 85.0945 19.9391C82.7573 22.0557 79.8187 23.4001 76.2801 23.9736C76.9361 24.8705 77.9213 25.3183 79.2362 25.3183C81.8631 25.3183 84.7282 24.6611 87.8316 23.3434C87.9697 23.286 88.1059 23.2285 88.2403 23.1708C88.2159 22.9515 88.1977 22.728 88.1856 22.5002C88.0017 19.4127 89.1325 16.5756 91.5799 13.9909C94.2068 11.1192 97.5087 9.68365 101.487 9.68365C104.04 9.68365 105.975 10.5284 107.289 12.2147C108.531 13.7593 109.096 15.7513 108.987 18.1913C108.84 21.4945 107.6 24.349 105.264 26.7539C102.929 29.1591 100.027 30.3618 96.56 30.3618C93.6773 30.3618 91.4872 29.4459 89.9916 27.6145C89.6546 27.1946 89.3642 26.7423 89.1205 26.2577C88.7287 26.4971 88.3172 26.7366 87.886 26.9761C84.0178 29.167 80.0938 30.2609 76.117 30.2609C73.1606 30.2609 71.0426 29.2897 69.766 27.3499C69.6725 27.2135 69.584 27.0745 69.5004 26.9328C69.4617 26.9668 69.4227 27.0007 69.3836 27.0345C66.9379 29.1182 64.4931 30.16 62.0492 30.16C59.6749 30.16 58.5266 28.8676 58.5997 26.2796C58.6351 25.129 58.864 23.7468 59.2829 22.1299C59.7021 20.5127 59.931 19.255 59.9678 18.3567C60.0046 16.9918 59.5837 16.3077 58.7038 16.3077C57.7522 16.3077 56.618 17.4235 55.2998 19.6521C53.908 21.9894 53.1562 24.2543 53.0474 26.4466C52.9738 27.9944 53.1272 29.1813 53.5081 30.007C50.9613 30.0796 49.1773 29.6651 48.16 28.7666C47.2482 27.9754 46.8307 26.6643 46.9044 24.8297C46.9395 23.6791 47.1186 22.5285 47.4417 21.3782C47.7633 20.2276 47.9425 19.2031 47.9793 18.3031C48.0529 16.973 47.5586 16.3077 46.4995 16.3077C45.5845 16.3077 44.5973 17.3337 43.5385 19.3826C42.4794 21.4315 41.8941 23.572 41.7851 25.8006C41.7114 27.8147 41.8427 29.2159 42.1771 30.007C39.6718 30.0796 37.8929 29.5592 36.8403 28.4466C36.3594 27.9338 36.0225 27.2742 35.8292 26.4676ZM81.6999 16.1754C81.7353 15.2108 81.3351 14.727 80.497 14.727C79.4028 14.727 78.2925 15.4694 77.1632 16.9539C76.0337 18.4386 75.4499 19.8602 75.4145 21.2188C75.3937 21.2188 75.3937 21.452 75.4145 21.9169C77.1998 21.2738 78.7485 20.2905 80.0602 18.9665C81.1161 17.8225 81.6631 16.8908 81.6999 16.1754ZM102.389 15.3132C102.7 16.1234 102.837 17.0156 102.8 17.9879C102.727 19.7169 102.199 21.3732 101.214 22.9588C100.046 24.8691 98.6397 25.8225 96.9983 25.8225C96.2671 25.8225 95.7009 25.427 95.301 24.6341C94.9364 23.9501 94.7718 23.1575 94.8084 22.2557C94.8803 20.4196 95.4275 18.691 96.4515 17.0692C97.6542 15.0879 99.1869 14.0966 101.049 14.0966C101.631 14.0966 102.079 14.503 102.389 15.3132Z",
            fill: "#F5F5F5"
          })
        })
      });
    },
    _v157 = function ({
      isExpert: _v0
    }) {
      let _v1 = (0, _v8.useContext)(_v13.ViewerContext);
      return (0, _v6.jsx)(_v161, {
        children: (0, _v6.jsxs)(_v158, {
          children: [(0, _v6.jsxs)(_v162, {
            children: ["It’s good to be a", (0, _v6.jsx)(_v156, {}), "expert"]
          }), (0, _v6.jsxs)(_v160, {
            children: [(0, _v6.jsx)(_v164, {
              alt: "",
              src: _v1?.user?.pictures?.sizes[0].link || "",
              srcSet: _v1?.user?.pictures?.sizes[1].link,
              size: "sm",
              nameProps: {
                name: _v1?.user?.name ?? ""
              }
            }), (0, _v6.jsx)(_v163, {
              children: _v1?.user?.name
            }), _v0 && (0, _v6.jsx)(_v159, {
              children: "EXPERT"
            })]
          })]
        })
      });
    },
    _v158 = _v29.default.div.withConfig({
      displayName: "WelcomeSection__UserTextContainer",
      componentId: "sc-d3a9542c-0"
    })`
  position: relative;
  top: ${(0, _v47.rem)(20)};
  margin-top: ${(0, _v47.rem)(68)};
`,
    _v159 = (0, _v29.default)(_v154.Badge).withConfig({
      displayName: "WelcomeSection__StyledBadge",
      componentId: "sc-d3a9542c-1"
    })`
  color: #ffffff;
  background: rgba(0, 0, 0, 0.2);
`,
    _v160 = _v29.default.div.withConfig({
      displayName: "WelcomeSection__UserContainer",
      componentId: "sc-d3a9542c-2"
    })`
  display: flex;
  align-items: center;
  margin-top: ${(0, _v47.rem)(16)};
  margin-bottom: ${(0, _v47.rem)(40)};
  justify-content: center;
  @media (min-width: ${_v50.TABLET}) {
    justify-content: flex-start;
  }
`,
    _v161 = _v29.default.div.withConfig({
      displayName: "WelcomeSection__Container",
      componentId: "sc-d3a9542c-3"
    })`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(107.96deg, #1b4070 14.43%, #2b103c 96.02%);
  flex-direction: column;
  align-items: center;
  @media (min-width: ${_v50.TABLET}) {
    justify-content: space-between;
    flex-direction: row;
  }
`,
    _v162 = _v29.default.div.withConfig({
      displayName: "WelcomeSection__WelcomeText",
      componentId: "sc-d3a9542c-4"
    })`
  font-weight: 400;
  font-size: ${(0, _v47.rem)(36)};
  line-height: ${(0, _v47.rem)(42)};
  letter-spacing: -1 ${(0, _v47.rem)(2)};
  color: #ffffff;
  margin-left: ${(0, _v47.rem)(28)};
  max-width: ${(0, _v47.rem)(353)};
  padding-left: ${(0, _v47.rem)(52)};

  @media (min-width: ${_v50.TABLET}) {
    margin-left: ${(0, _v47.rem)(32)};
    padding-left: 0;
  }
  @media (min-width: ${_v50.DESKTOP}) {
    margin-left: ${(0, _v47.rem)(81)};
    max-width: none;
  }
`,
    _v163 = _v29.default.div.withConfig({
      displayName: "WelcomeSection__UserName",
      componentId: "sc-d3a9542c-5"
    })`
  color: white;
  margin-left: ${(0, _v47.rem)(16)};
  margin-right: ${(0, _v47.rem)(10)};
  font-size: ${(0, _v47.rem)(16)};
  text-transform: capitalize;
  @media (min-width: ${_v50.DESKTOP}) {
    font-size: ${(0, _v47.rem)(18)};
  }
`,
    _v164 = (0, _v29.default)(_v153.Avatar).withConfig({
      displayName: "WelcomeSection__UserAvatar",
      componentId: "sc-d3a9542c-6"
    })`
  width: ${(0, _v47.rem)(48)};
  height: ${(0, _v47.rem)(48)};
  margin-left: ${(0, _v47.rem)(28)};
  @media (min-width: ${_v50.TABLET}) {
    margin-left: ${(0, _v47.rem)(32)};
  }
  @media (min-width: ${_v50.DESKTOP}) {
    margin-left: ${(0, _v47.rem)(81)};
  }
`;
  function _v165({
    status: _v0
  }) {
    return (0, _v8.useEffect)(() => {
      (0, _v105.trackEvent)({
        eventKey: _v105.Events.DASHBOARD_PAGE_LOAD
      });
    }, []), (0, _v6.jsxs)("div", {
      children: [(0, _v6.jsx)(_v73, {
        pathColor: "rgba(255, 255, 255, 0.8)",
        currentPathColor: _v30.white
      }), (0, _v6.jsx)(_v157, {
        isExpert: "expert" === _v0
      }), (0, _v6.jsx)(_v110, {}), (0, _v6.jsx)(_v139, {
        isExpert: "expert" === _v0
      }), (0, _v6.jsx)(_v121, {}), (0, _v6.jsx)(_v127, {}), (0, _v6.jsx)(_v133, {})]
    });
  }
  var _v166 = _v0.i(0);
  function _v167() {
    return (0, _v6.jsx)(_v52, {
      children: (0, _v6.jsx)(_v166.Spinner, {})
    });
  }
  function _v168({
    playerAssetUrls: _v0
  }) {
    let [_v1, _v2] = (0, _v8.useState)(),
      [_v3, _v4] = _v23();
    return ((0, _v8.useEffect)(() => {
      _v3({
        select: ["company", "status", "website"]
      });
    }, []), (0, _v8.useEffect)(() => {
      _v4?.data && _v2(_v4.data);
    }, [_v4]), _v1) ? (0, _v6.jsx)(_v165, {
      status: _v1.status
    }) : _v4?.error ? (0, _v6.jsx)(_v106, {
      playerAssetUrls: _v0,
      setExpertData: _v2
    }) : (0, _v6.jsx)(_v167, {});
  }
  function _v169(_v0) {
    let _v1 = (0, _v8.useContext)(_v13.ViewerContext),
      _v2 = (0, _v8.useMemo)(() => _v1 ? (0, _v6.jsx)(_v168, {
        playerAssetUrls: _v0.playerAssetUrls
      }) : (0, _v6.jsx)(_v167, {}), [_v1, _v0.playerAssetUrls]);
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v7.default, {
        children: (0, _v6.jsx)("title", {
          children: (0, _v11.translate)({
            singular: "Vimeo Experts",
            dictionary: {
              "ja-JP": {
                singular: "Vimeo エキスパート"
              },
              "ko-KR": {
                singular: "Vimeo 엑스퍼트"
              }
            }
          })
        })
      }), (0, _v6.jsx)(_v69, {
        children: _v2
      })]
    });
  }
  (0, _v9.withPageSetup)({
    requireLogin: !0
  }), _v169.getLayout = (_v0, _v1) => (0, _v6.jsxs)(_v6.Fragment, {
    children: [(0, _v6.jsx)(_v10.DefaultNavigation, {
      hasThemeSupport: !1
    }), _v0, (0, _v6.jsx)(_v12.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v169], 0);
}