{
  "use strict";

  var _v1,
    _v2,
    _v3,
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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = ((_v1 = {}).STEP_FORWARD = "step_forward", _v1.STEP_BACK = "step_back", _v1.SET_TEAM_BRANDING = "set_team_branding", _v1.SET_TEAM_BRANDING_SUGGESTION = "set_team_branding_suggestion", _v1.SKIP_STEP = "skip_step", _v1);
  let _v23 = (_v0, _v1) => {
      _v0({
        type: "set_team_branding",
        payload: _v1
      });
    },
    _v24 = (_v0, _v1) => {
      _v0({
        type: "set_team_branding_suggestion",
        payload: _v1
      });
    };
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = {
      [_v22.STEP_BACK]: _v0 => {
        let {
            stepIndex: _v1,
            flow: _v2,
            sectionIndex: _v3
          } = _v0,
          _v4 = 0 === _v1 ? {
            ..._v0,
            sectionIndex: _v3 - 1,
            stepIndex: _v2[_v3 - 1].length - 1
          } : {
            ..._v0,
            stepIndex: _v1 - 1
          };
        return (0, _v26.sendBigPictureBackEvent)(_v0, _v4), _v4;
      },
      [_v22.STEP_FORWARD]: _v0 => {
        let {
          sectionIndex: _v1,
          stepIndex: _v2,
          flow: _v3
        } = _v0;
        return _v2 === _v3[_v1].length - 1 ? {
          ..._v0,
          sectionIndex: _v1 + 1,
          stepIndex: 0
        } : {
          ..._v0,
          stepIndex: _v2 + 1
        };
      },
      [_v22.SET_TEAM_BRANDING]: (_v0, _v1) => ({
        ..._v0,
        team: {
          ..._v0.team,
          ..._v1
        }
      }),
      [_v22.SET_TEAM_BRANDING_SUGGESTION]: (_v0, _v1) => ({
        ..._v0,
        team: {
          ..._v0.team,
          brandingSuggestion: {
            ..._v0.team.brandingSuggestion,
            ..._v1
          }
        }
      }),
      [_v22.SKIP_STEP]: _v0 => {
        let {
            sectionIndex: _v1,
            stepIndex: _v2,
            flow: _v3
          } = _v0,
          _v4 = _v2 === _v3[_v1].length - 1,
          _v5 = _v4 ? {
            ..._v0,
            sectionIndex: _v1 + 1,
            stepIndex: 0
          } : {
            ..._v0,
            stepIndex: _v2 + 1
          };
        return (0, _v26.sendBigPictureSkipEvent)(_v0, _v5, _v4), _v5;
      }
    },
    _v28 = (_v0, _v1) => {
      let _v2 = _v27[_v1.type];
      return _v2 ? _v2(_v0, _v1.payload) : _v0;
    };
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = (0, _v12.default)(_v30.Spinner).attrs({
    size: "xl"
  }).withConfig({
    displayName: "PageLoader",
    componentId: "sc-92649c32-0"
  })`
  margin-left: calc(50vw - 1.5rem);
  margin-top: calc(50vh - 1.5rem);
`;
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = ({
    accentColor: _v0,
    isLarge: _v1 = !1,
    setAccentColor: _v2,
    sourceImageUrl: _v3,
    shouldAutoSetAccentColor: _v4 = !1
  }) => {
    let [_v5, _v6] = (0, _v6.useState)(["#909CDC", "#7BD8DB", "#78DD89", "#CCE190"]);
    return (0, _v6.useEffect)(() => {
      if (_v3) {
        let _v0 = document.createElement("img");
        _v0.setAttribute("crossOrigin", ""), _v0.onload = () => {
          let _v0 = (0, _v15.extractColors)(_v0);
          _v4 && _v0.length > 0 && _v2(_v0[0]), _v6(_v0);
        }, _v0.src = _v3;
      }
    }, [_v3, _v6]), (0, _v4.jsx)(_v35.ColorSelect, {
      attach: "top",
      width: 237,
      height: 172,
      label: (0, _v4.jsx)(_v35.ColorSelect.Presets, {
        palette: _v5,
        label: (0, _v34.translate)({
          singular: "Accent color",
          dictionary: {
            es: {
              singular: "Color de contraste"
            },
            "de-DE": {
              singular: "Farbakzent"
            },
            "fr-FR": {
              singular: "Accentuer la couleur"
            },
            "ja-JP": {
              singular: "アクセントカラー"
            },
            "ko-KR": {
              singular: "강조색"
            },
            "pt-BR": {
              singular: "Tom de cor"
            },
            "zh-CN": {
              singular: "强调色"
            }
          }
        }),
        onColorClick: _v0 => {
          _v0 !== _v0 && (_v2(_v0), (0, _v15.trackTeamSettingsModal)(_v15.TeamEvents.SetTeamAccentColor, {
            color: _v0,
            method: _v15.ColorChangeMethods.Preset
          }));
        }
      }),
      onChange: _v0 => {
        _v0.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/) && _v0 !== _v0 && (_v2(_v0), (0, _v15.trackTeamSettingsModal)(_v15.TeamEvents.SetTeamAccentColor, {
          color: _v0,
          method: _v15.ColorChangeMethods.Picker
        }));
      },
      initialColor: (0, _v17.blue)(500),
      resetLabel: (0, _v34.translate)({
        singular: "Reset",
        dictionary: {
          es: {
            singular: "Restablecer"
          },
          "de-DE": {
            singular: "Zurücksetzen"
          },
          "fr-FR": {
            singular: "Réinitialiser"
          },
          "ja-JP": {
            singular: "リセット"
          },
          "ko-KR": {
            singular: "재설정"
          },
          "pt-BR": {
            singular: "Redefinir"
          },
          "zh-CN": {
            singular: "重置"
          }
        }
      }),
      resetColor: (0, _v17.blue)(500),
      size: _v1 ? "xl" : "md",
      value: _v0 || (0, _v17.blue)(500)
    }, "color-select");
  };
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = ({
      description: _v0,
      title: _v1
    }) => {
      let {
        team: _v2
      } = (0, _v6.useContext)(_v25.StateContext);
      return (0, _v4.jsxs)(_v41, {
        children: [_v2.logoUrl ? (0, _v4.jsx)(_v44, {
          src: _v2.logoUrl,
          alt: "team-logo"
        }) : (0, _v4.jsx)(_v43, {}), (0, _v4.jsx)(_v38.Header, {
          size: "1",
          children: _v1
        }), (0, _v4.jsx)(_v39.Paragraph, {
          size: "1",
          children: _v0
        })]
      });
    },
    _v41 = _v12.default.div.withConfig({
      displayName: "InstructionPanel__InstructionPanelContainer",
      componentId: "sc-7ddcdbd0-0"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35vh;

  p {
    max-width: ${(0, _v33.rem)(450)};
    text-align: center;
  }
`,
    _v42 = _v12.css`
  margin-bottom: ${(0, _v33.rem)(40)};
`,
    _v43 = (0, _v12.default)(_v37.VimeoLogo).withConfig({
      displayName: "InstructionPanel__VimeoLogoStyled",
      componentId: "sc-7ddcdbd0-1"
    })`
  width: ${(0, _v33.rem)(150)};
  ${_v42}
`,
    _v44 = _v12.default.img.withConfig({
      displayName: "InstructionPanel__TeamLogo",
      componentId: "sc-7ddcdbd0-2"
    })`
  max-height: ${(0, _v33.rem)(100)};
  max-width: ${(0, _v33.rem)(150)};
  ${_v42}
`;
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = ({
      onBack: _v0,
      onSkip: _v1,
      nextButton: _v2
    }) => {
      let _v3 = (0, _v6.useContext)(_v25.DispatchContext),
        _v4 = (0, _v6.useCallback)(() => {
          _v0?.(), _v3({
            type: _v22.STEP_BACK
          });
        }, [_v3, _v0]),
        _v5 = (0, _v6.useCallback)(() => {
          _v1?.(), _v3({
            type: _v22.SKIP_STEP
          });
        }, [_v3, _v1]);
      return (0, _v4.jsxs)(_v49, {
        children: [(0, _v4.jsx)(_v48, {
          children: (0, _v34.translate)({
            singular: "Back",
            dictionary: {
              es: {
                singular: "Atrás"
              },
              "de-DE": {
                singular: "Zurück"
              },
              "fr-FR": {
                singular: "Retour"
              },
              "ja-JP": {
                singular: "戻る"
              },
              "ko-KR": {
                singular: "뒤로"
              },
              "pt-BR": {
                singular: "Voltar"
              },
              "zh-CN": {
                singular: "返回"
              }
            }
          }),
          format: "alternative",
          icon: (0, _v4.jsx)(_v46.ArrowLeft, {}),
          onClick: _v4,
          variant: "hyperminimal"
        }), (0, _v4.jsxs)(_v50, {
          children: [(0, _v4.jsx)(_v45.Button, {
            children: (0, _v34.translate)({
              singular: "Skip",
              dictionary: {
                es: {
                  singular: "Omitir"
                },
                "de-DE": {
                  singular: "Überspringen"
                },
                "fr-FR": {
                  singular: "Sauter"
                },
                "ja-JP": {
                  singular: "スキップ"
                },
                "ko-KR": {
                  singular: "건너뛰기"
                },
                "pt-BR": {
                  singular: "PULAR"
                },
                "zh-CN": {
                  singular: "跳过"
                }
              }
            }),
            format: "alternative",
            onClick: _v5,
            variant: "hyperminimal"
          }), _v2]
        })]
      });
    },
    _v48 = (0, _v12.default)(_v45.Button).withConfig({
      displayName: "Navigation__BackButton",
      componentId: "sc-789010b1-0"
    })`
  span {
    margin-left: ${(0, _v33.rem)(8)};
  }
`,
    _v49 = _v12.default.div.withConfig({
      displayName: "Navigation__Container",
      componentId: "sc-789010b1-1"
    })`
  border-top: ${(0, _v33.rem)(1)} solid ${(0, _v17.slate)(200)};
  display: flex;
  height: ${(0, _v33.rem)(80)};
  margin-top: auto;
  padding: 0 ${(0, _v33.rem)(20)};
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
  background: white;
`,
    _v50 = _v12.default.div.withConfig({
      displayName: "Navigation__ForwardButtons",
      componentId: "sc-789010b1-2"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,
    _v51 = ({
      children: _v0,
      description: _v1,
      title: _v2,
      onBack: _v3,
      onSkip: _v4,
      nextButton: _v5
    }) => (0, _v4.jsxs)(_v52, {
      children: [(0, _v4.jsx)(_v40, {
        description: _v1,
        title: _v2
      }), (0, _v4.jsx)(_v53, {
        children: _v0
      }), (0, _v4.jsx)(_v47, {
        onBack: _v3,
        onSkip: _v4,
        nextButton: _v5
      })]
    }),
    _v52 = _v12.default.div.withConfig({
      displayName: "StepTemplate__Container",
      componentId: "sc-daa760e-0"
    })`
  display: flex;
  flex: 1;
  flex-direction: column;
`,
    _v53 = _v12.default.div.withConfig({
      displayName: "StepTemplate__Content",
      componentId: "sc-daa760e-1"
    })`
  display: flex;
  width: 100%;
  min-height: 65vh;
  justify-content: center;
  align-items: flex-start;
  padding: ${(0, _v33.rem)(4)} ${(0, _v33.rem)(40)} ${(0, _v33.rem)(80)};
`;
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = _v0 => {
      try {
        _v13.BigPictureClient.sendEvent(new _v13.Event("vimeo.qualifies_for_logo_lookup", 1, {
          product: "Onboarding",
          path: window.parent.location.pathname,
          location: "branding",
          qualifies: _v0
        }));
      } catch (_v0) {
        console.error(_v0);
      }
    },
    _v63 = async _v0 => {
      let _v1 = await fetch(_v0);
      return new File([await _v1.blob()], "logo", {
        type: _v1.headers.get("content-type") || "image/png"
      });
    },
    _v64 = [],
    _v65 = async _v0 => {
      if (!_v64.length) try {
        let _v0 = _v6.default.lazy(() => _v0.A(0));
        _v64 = Object.values(_v0);
      } catch (_v0) {
        return console.error(_v0), console.error("failed to load free email domains"), !0;
      }
      return _v64.includes(_v0);
    },
    _v66 = async (_v0, _v1) => {
      try {
        let _v0 = await _v63(_v0);
        if (_v0) return await (0, _v15.uploadLogo)(_v1, _v0);
      } catch (_v0) {
        return console.error("failed to upload Brandfetch logo to vimeo", _v0), "";
      }
    },
    _v67 = async (_v0, _v1) => {
      try {
        let _v0 = await fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/team/brand_suggestion`, {
          method: "GET",
          headers: {
            Authorization: `jwt ${_v0.jwt}`,
            "Content-Type": "application/json"
          }
        });
        if (_v0.ok) {
          let _v0 = await _v0.json();
          _v24(_v1, {
            teamName: _v0.team_name ?? "",
            logoUrl: _v0.logo_url ?? "",
            logoSource: _v0.logo_url && _v0.logo_source ? _v0.logo_source : ""
          });
        } else throw Error("error fetching branding suggestion");
      } catch (_v0) {
        console.error(_v0);
      }
    },
    _v68 = async (_v0, _v1) => {
      try {
        let _v0 = await (0, _v15.fetchPlayerLogoUrl)(_v0);
        _v24(_v1, {
          logoUrl: _v0,
          logoSource: "player"
        });
      } catch (_v0) {
        console.error(_v0);
      }
    },
    _v69 = !1,
    _v70 = !1,
    _v71 = () => {
      _v69 || (_v62(!1), _v69 = !0);
    },
    _v72 = async (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = !_v0.logoUrl && !_v69;
      if (await _v65(_v1)) _v5 && (await _v68(_v2, _v3)), _v71(), _v70 = !0;else {
        let _v0 = !_v0.teamName && !_v70;
        _v5 ? _v62(!0) : _v71(), (_v5 || _v0) && (await _v67(_v2, _v3), _v69 = !0, _v70 = !0);
      }
      _v4(!1);
    };
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = (0, _v6.forwardRef)(function (_v0, _v1) {
      return _v6.default.createElement("svg", (0, _v77.c)({
        viewBox: "0 0 44 47",
        ref: _v1
      }, _v0), _v6.default.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _v6.default.createElement("g", {
        transform: "translate(-1078 -407)"
      }, _v6.default.createElement("g", {
        transform: "translate(1042 381)"
      }, _v6.default.createElement("g", {
        transform: "translate(36 26)"
      }, _v6.default.createElement("polygon", {
        points: "7.6667 46 41 11.833 34.333 5 1 39.167"
      }), _v6.default.createElement("line", {
        x1: "31",
        x2: "36",
        y1: "11",
        y2: "16",
        fill: "#FFFFFF"
      }), _v6.default.createElement("polygon", {
        points: "7.0219 34.471 12.373 40.029 8.4815 43.755 3.0936 38.518",
        fill: "#FFFFFF"
      }), _v6.default.createElement("polygon", {
        points: "36.022 6.4708 41.373 12.029 37.482 15.755 32.094 10.518",
        fill: "#FFFFFF"
      }), _v6.default.createElement("path", {
        d: "m0 38.403 8.5968 8.5968 35.403-35.403-8.5968-8.5968-35.403 35.403zm32.607-28.817 2.7959-2.7946 4.8064 4.805-2.7959 2.7959-4.8064-4.8064zm-24.126 24.126 22.231-22.229 4.8064 4.805-22.231 22.231-4.8064-4.8064zm-4.6911 4.6911 2.7959-2.7946 4.8064 4.805-2.7959 2.7972-4.8064-4.8077z",
        fill: "#23313b"
      }), _v6.default.createElement("polygon", {
        points: "35.501 28 36.875 32.124 41 33.5 36.875 34.876 35.501 39 34.125 34.876 30 33.5 34.125 32.124",
        fill: "#23313b"
      }), _v6.default.createElement("polygon", {
        points: "19.501 0 18.126 4.1248 14 5.4993 18.126 6.8738 19.501 11 20.874 6.8738 25 5.4993 20.874 4.1248 19.502 0",
        fill: "#23313b"
      }), _v6.default.createElement("path", {
        d: "m8 12.002 1.993 0.56904c0.39749 0.11118 0.7099 0.38255 0.8424 0.72206l0.66388 1.7071 0.66527-1.7071c0.1311-0.33951 0.44491-0.61088 0.841-0.72206l1.9944-0.56904-1.9944-0.57262c-0.39609-0.11118-0.7099-0.38016-0.841-0.72206l-0.66527-1.7071-0.66388 1.7071c-0.1325 0.3419-0.44491 0.61088-0.8424 0.72206l-1.993 0.57262z",
        fill: "#23313b"
      }))))));
    }),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = ({
    active: _v0,
    attach: _v1,
    content: _v2,
    children: _v3,
    className: _v4,
    color: _v5 = "#392D86",
    onClick: _v6,
    pointerSize: _v7 = 10
  }) => (0, _v4.jsx)(_v82, {
    active: _v0,
    attach: _v1,
    className: _v4,
    color: _v5,
    content: _v2,
    pointerSize: _v7,
    popoverPosition: _v1,
    onClick: _v6,
    children: _v3
  });
  _v12.keyframes`
  0% {
    transform: translateY(${(0, _v79.rem)(50)});
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
  let _v82 = (0, _v12.default)(_v80.PopOver).withConfig({
      displayName: "BubblePopOver__StyledPopOver",
      componentId: "sc-8cfa3c51-0"
    })`
  background: ${({
      color: _v0
    }) => _v0};
  border-radius: ${(0, _v79.rem)(10)};
  position: relative;
  ${function ({
      pointerSize: _v0,
      popoverPosition: _v1
    }) {
      switch (_v1) {
        case "top":
          return _v12.css`
        bottom: ${(0, _v79.rem)(_v0)};
      `;
        case "bottom":
          return _v12.css`
        top: ${(0, _v79.rem)(_v0)};
      `;
        case "left":
          return _v12.css`
        right: ${(0, _v79.rem)(_v0)};
      `;
        case "right":
          return _v12.css`
        left: ${(0, _v79.rem)(_v0)};
      `;
      }
    }};

  &:after {
    border: ${({
      pointerSize: _v0
    }) => `${(0, _v79.rem)(_v0)} solid transparent`};
    content: '';
    height: 0;
    position: absolute;
    width: 0;
    ${function ({
      color: _v0,
      pointerSize: _v1,
      popoverPosition: _v2
    }) {
      switch (_v2) {
        case "top":
          return _v12.css`
        bottom: ${(0, _v79.rem)(-_v1)};
        border-bottom: 0;
        border-top-color: ${_v0};

        ${_v83(_v1)}
      `;
        case "bottom":
          return _v12.css`
        top: ${(0, _v79.rem)(-_v1)};
        border-bottom-color: ${_v0};
        border-top: 0;

        ${_v83(_v1)}
      `;
        case "left":
          return _v12.css`
        right: ${(0, _v79.rem)(-_v1)};
        border-right: 0;
        border-left-color: ${_v0};

        ${_v84(_v1)}
      `;
        case "right":
          return _v12.css`
        left: ${(0, _v79.rem)(-_v1)};
        border-left: 0;
        border-right-color: ${_v0};

        ${_v84(_v1)}
      `;
      }
    }};
  }
`,
    _v83 = _v0 => `
  left: 50%;
  margin-left: ${(0, _v79.rem)(-_v0)};
`,
    _v84 = _v0 => `
  margin-top: ${(0, _v79.rem)(-_v0)};
  top: 50%;
`,
    _v85 = () => {
      let {
          team: _v0
        } = (0, _v6.useContext)(_v25.StateContext),
        [_v1, _v2] = (0, _v6.useState)(!1),
        _v3 = (0, _v6.useContext)(_v25.DispatchContext);
      return (0, _v6.useEffect)(() => {
        _v0.logoUrl || "brandfetch" !== _v0.brandingSuggestion.logoSource || (_v2(!0), _v93());
      }, [_v0.brandingSuggestion.logoSource]), (0, _v4.jsx)(_v81, {
        active: _v1,
        attach: "right",
        content: (0, _v4.jsxs)(_v86, {
          children: [(0, _v4.jsx)(_v78, {
            width: "40",
            height: "40"
          }), (0, _v4.jsx)(_v87, {
            children: (0, _v34.translate)({
              singular: "We recognize this logo based on your email. Do you want to apply the logo to your account?",
              dictionary: {
                es: {
                  singular: "Reconocemos este logo en función de tu correo electrónico. ¿Quieres aplicarlo a tu cuenta?"
                },
                "de-DE": {
                  singular: "Wir erkennen dieses Logo auf Grundlage deiner E-Mail. Möchtest du das Logo für dein Konto anwenden?"
                },
                "fr-FR": {
                  singular: "Nous avons remarqué ce logo, qui apparaît dans votre e-mail. Voulez-vous l'associer à votre compte ?"
                },
                "ja-JP": {
                  singular: "このロゴはあなたのEメールから識別されました。アカウントにロゴを適用しますか？"
                },
                "ko-KR": {
                  singular: "회원님의 이메일에서 해당 로고를 인식했습니다. 계정에 이 로고를 적용할까요?"
                },
                "pt-BR": {
                  singular: "Reconhecemos este logo com base no seu e-mail. Você quer aplicar o logo à sua conta?"
                },
                "zh-CN": {
                  singular: "我们根据您的电子邮件识别此徽标。您想将徽标应用于您的账户吗？"
                }
              }
            })
          }), (0, _v4.jsx)(_v88, {
            children: (0, _v4.jsx)(_v89, {
              url: _v0.brandingSuggestion.logoUrl
            })
          }), (0, _v4.jsxs)(_v90, {
            children: [(0, _v4.jsx)(_v91, {
              size: "sm",
              format: "basic",
              variant: "hyperminimal",
              onClick: () => {
                _v2(!1), _v94(!1);
              },
              children: (0, _v34.translate)({
                singular: "No thanks",
                dictionary: {
                  es: {
                    singular: "No, gracias"
                  },
                  "de-DE": {
                    singular: "Nein, danke"
                  },
                  "fr-FR": {
                    singular: "Non merci"
                  },
                  "ja-JP": {
                    singular: "いいえ、結構です"
                  },
                  "ko-KR": {
                    singular: "괜찮습니다"
                  },
                  "pt-BR": {
                    singular: "Não, obrigado"
                  },
                  "zh-CN": {
                    singular: "不用，谢谢"
                  }
                }
              })
            }), (0, _v4.jsx)(_v91, {
              size: "sm",
              onClick: () => {
                _v23(_v3, {
                  logoUrl: _v0.brandingSuggestion.logoUrl
                }), _v2(!1), _v94(!0);
              },
              children: (0, _v34.translate)({
                singular: "Yes",
                dictionary: {
                  es: {
                    singular: "Sí"
                  },
                  "de-DE": {
                    singular: "Ja"
                  },
                  "fr-FR": {
                    singular: "Oui"
                  },
                  "ja-JP": {
                    singular: "はい"
                  },
                  "ko-KR": {
                    singular: "예"
                  },
                  "pt-BR": {
                    singular: "Sim"
                  },
                  "zh-CN": {
                    singular: "是"
                  }
                }
              })
            })]
          })]
        }),
        color: "#DAF2FB",
        children: (0, _v4.jsx)(_v92, {})
      });
    },
    _v86 = _v12.default.div.withConfig({
      displayName: "BrandSuggestion__BodyWrapper",
      componentId: "sc-6269d9cb-0"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${(0, _v33.rem)(350)};
  max-width: 18rem;
  padding: ${(0, _v33.rem)(20)};
`,
    _v87 = (0, _v12.default)(_v76.Text).withConfig({
      displayName: "BrandSuggestion__Message",
      componentId: "sc-6269d9cb-1"
    })`
  font-size: ${(0, _v33.rem)(16)};
  text-align: center;
`,
    _v88 = _v12.default.div.withConfig({
      displayName: "BrandSuggestion__BrandLogoContainer",
      componentId: "sc-6269d9cb-2"
    })`
  padding: ${(0, _v33.rem)(8)};
  background: white;
  border-radius: ${(0, _v33.rem)(3)};
`,
    _v89 = _v12.default.div.withConfig({
      displayName: "BrandSuggestion__BrandLogo",
      componentId: "sc-6269d9cb-3"
    })`
  height: ${(0, _v33.rem)(60)};
  width: ${(0, _v33.rem)(240)};
  background: url(${_v0 => _v0.url}) center/contain no-repeat content-box;
  padding: ${(0, _v33.rem)(4)};
`,
    _v90 = _v12.default.div.withConfig({
      displayName: "BrandSuggestion__ButtonContainer",
      componentId: "sc-6269d9cb-4"
    })`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,
    _v91 = (0, _v12.default)(_v45.Button).withConfig({
      displayName: "BrandSuggestion__CtaButton",
      componentId: "sc-6269d9cb-5"
    })`
  min-width: ${(0, _v33.rem)(100)};
  height: ${(0, _v33.rem)(40)};
  border-color: transparent;
  margin-left: ${(0, _v33.rem)(4)};
  font-weight: 400;
`,
    _v92 = _v12.default.div.withConfig({
      displayName: "BrandSuggestion__PopOverChildren",
      componentId: "sc-6269d9cb-6"
    })`
  position: absolute;
  top: 50%;
  right: 0;
`,
    _v93 = () => {
      try {
        _v13.BigPictureClient.sendEvent(new _v13.Event("vimeo.render_email_domain_logo", 1, {
          product: "Onboarding",
          path: window.parent.location.pathname,
          location: "branding"
        }));
      } catch (_v0) {
        console.error(_v0);
      }
    },
    _v94 = _v0 => {
      try {
        _v13.BigPictureClient.sendEvent(new _v13.Event("vimeo.apply_suggested_logo", 1, {
          product: "Onboarding",
          path: window.parent.location.pathname,
          location: "branding",
          accept_logo: _v0
        }));
      } catch (_v0) {
        console.error(_v0);
      }
    },
    _v95 = _v12.default.div.withConfig({
      displayName: "SingleLogoSection__Wrapper",
      componentId: "sc-4d3a4d7c-0"
    })`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(0, _v33.rem)(30)};
`,
    _v96 = _v12.default.div.withConfig({
      displayName: "SingleLogoSection__InteractionWrapper",
      componentId: "sc-4d3a4d7c-1"
    })`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: ${(0, _v33.rem)(8)};
`,
    _v97 = _v12.default.div.withConfig({
      displayName: "SingleLogoSection__LogoContainer",
      componentId: "sc-4d3a4d7c-2"
    })`
  margin-bottom: ${(0, _v33.rem)(12)};
  height: ${(0, _v33.rem)(160)};
  width: 100%;
  padding: ${(0, _v33.rem)(30)};
  border: ${_v0 => _v0.isDragging ? `${(0, _v33.rem)(2)} solid ${(0, _v17.blue)(400)}` : `${(0, _v33.rem)(1)} solid ${(0, _v17.slate)(200)}`};
  border-radius: ${(0, _v33.rem)(10)};
  position: relative;
  ${_v0 => _v0.url && !_v0.isDragging && `background: url(${_v0.url}) center/contain no-repeat content-box;`}
  ${_v0 => _v0.isDragging && `background: ${(0, _v17.blue)(400) + "0D"};`}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${_v0 => _v0.hasError && !_v0.isDragging && `
    border-color: ${(0, _v17.red)(500)};
    white-space: normal;
    text-align: center;
  
    svg path {
      fill: ${(0, _v17.red)(500)};
    }
  `}
`,
    _v98 = _v12.default.div.withConfig({
      displayName: "SingleLogoSection__DropMask",
      componentId: "sc-4d3a4d7c-3"
    })`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${_v0 => _v0.isDragging ? 100 : -1};
`,
    _v99 = (0, _v12.default)(_v45.Button).withConfig({
      displayName: "SingleLogoSection__UploadButton",
      componentId: "sc-4d3a4d7c-4"
    })`
  padding: 0;
`,
    _v100 = ["image/png", "image/x-png", "image/jpeg", ".jpg", ".jpeg", ".png"],
    _v101 = ({
      errorMessage: _v0,
      logoUrl: _v1,
      setErrorMessage: _v2,
      setLogoUrl: _v3
    }) => {
      let [_v4, _v5] = (0, _v6.useState)(!1),
        [_v6, _v7] = (0, _v6.useState)(!1),
        _v8 = (0, _v6.useContext)(_v25.ConfigContext),
        _v9 = {
          apiUrl: _v8.apiUrl,
          jwt: _v8.jwt,
          ownerId: _v8.user.id
        },
        _v10 = (0, _v6.useCallback)(async _v0 => {
          if (_v2(""), _v0 && 0 !== _v0.length) {
            if (_v0[0].size > _v15.logoUploadLimit || 0 > _v100.indexOf(_v0[0].type)) return void _v2((0, _v34.translate)({
              singular: "Please use a JPEG or PNG file (limit 5MB).",
              dictionary: {
                es: {
                  singular: "Utiliza un archivo JPEG o PNG (límite de 5 MB)."
                },
                "de-DE": {
                  singular: "Bitte eine JPEG- oder PNG-Datei verwenden (Begrenzung: 5 MB)."
                },
                "fr-FR": {
                  singular: "Veuillez utiliser un fichier JPEG ou PNG (5 Mo max)."
                },
                "ja-JP": {
                  singular: "JPEG または PNG ファイルを使用してください（上限5MB）。"
                },
                "ko-KR": {
                  singular: "JPEG 또는 PNG 파일을 사용해주세요. (5MB 이하)"
                },
                "pt-BR": {
                  singular: "Por favor, use um arquivo JPEG ou PNG (limite de 5MB)."
                },
                "zh-CN": {
                  singular: "请使用 JPEG 或 PNG 文件（不超过 5MB）。"
                }
              }
            }));
            _v7(!0);
            try {
              let _v0 = await (0, _v15.uploadLogo)(_v9, _v0[0]);
              _v3(_v0);
            } catch (_v0) {
              _v2(_v15.defaultError);
            }
            _v7(!1);
          }
        }, [_v9, _v2, _v3]),
        _v11 = (0, _v6.useCallback)(_v0 => {
          _v0.preventDefault(), _v5(_v0.dataTransfer.types.includes("Files"));
        }, []),
        _v12 = (0, _v6.useCallback)(_v0 => {
          _v0.preventDefault(), _v5(!1);
        }, []),
        _v13 = (0, _v6.useCallback)(_v0 => {
          _v0.preventDefault();
          try {
            _v13.BigPictureClient.sendEvent(new _v13.Event("collaboration.team_branding_logo_drop", 1, {
              product: "Collaboration",
              path: window.parent.location.pathname,
              location: "onboarding"
            }));
          } catch (_v0) {
            console.error(_v0);
          }
          _v10(_v0.dataTransfer.files || new FileList()), _v5(!1);
        }, [_v10]),
        _v14 = (0, _v6.useCallback)(_v0 => {
          _v0.preventDefault();
        }, []),
        _v15 = (0, _v6.useCallback)(_v0 => {
          _v0.preventDefault(), _v5(!1);
        }, []),
        _v16 = !_v1 && !_v6 || _v4;
      return (0, _v4.jsxs)(_v95, {
        children: [(0, _v4.jsx)(_v38.Header, {
          size: "4",
          children: (0, _v34.translate)({
            singular: "Logo",
            dictionary: {
              "ja-JP": {
                singular: "ロゴ"
              },
              "ko-KR": {
                singular: "로고"
              },
              "zh-CN": {
                singular: "徽标"
              }
            }
          })
        }), (0, _v4.jsxs)(_v96, {
          children: [(0, _v4.jsxs)(_v97, {
            hasError: !!_v0,
            url: _v6 || _v0 ? "" : _v1,
            onDragEnter: _v11,
            onDragEnd: _v15,
            onDragOver: _v14,
            isDragging: _v4,
            children: [(0, _v4.jsx)(_v85, {}), (0, _v4.jsx)(_v98, {
              isDragging: _v4,
              onDragLeave: _v12,
              onDrop: _v13
            }), _v16 && [(0, _v4.jsx)(_v38.Header, {
              size: "6",
              children: (0, _v34.translate)({
                singular: "Drag and drop or {UPLOAD}select an image{/UPLOAD}",
                replacements: {
                  UPLOAD: _v0 => (0, _v4.jsx)(_v74.FileUpload, {
                    accept: "image/png,image/x-png,image/jpeg,.jpg,.jpeg,.png",
                    onChange: _v0 => {
                      _v10(_v0.target.files);
                    },
                    disabled: _v6,
                    children: (0, _v4.jsx)(_v99, {
                      onClick: () => {
                        (0, _v15.trackTeamSettingsModal)(_v15.TeamEvents.ClickUploadButton);
                      },
                      variant: "hyperminimal",
                      children: _v0
                    })
                  })
                },
                dictionary: {
                  es: {
                    singular: "{UPLOAD}Selecciona una imagen{/UPLOAD}, o bien arrástrala y suéltala"
                  },
                  "de-DE": {
                    singular: "Datei per Drag-and-Drop hier ablegen oder {UPLOAD}Bild auswählen{/UPLOAD}"
                  },
                  "fr-FR": {
                    singular: "Glissez-déposez ou {UPLOAD}sélectionnez une image{/UPLOAD}"
                  },
                  "ja-JP": {
                    singular: "画像をドラッグアンドドロップ、または{UPLOAD}画像を選択 {/UPLOAD}"
                  },
                  "ko-KR": {
                    singular: "이미지를 끌어서 놓거나 {UPLOAD}선택하세요{/UPLOAD}"
                  },
                  "pt-BR": {
                    singular: "Arraste e solte ou {UPLOAD}selecione uma imagem{/UPLOAD}"
                  },
                  "zh-CN": {
                    singular: "拖放或{UPLOAD}选择一张图片{/UPLOAD}"
                  }
                }
              })
            }, "placeholder-header"), (0, _v4.jsx)(_v39.Paragraph, {
              children: (0, _v34.translate)({
                singular: "Please use a JPEG or PNG file (limit 5MB).",
                dictionary: {
                  es: {
                    singular: "Utiliza un archivo JPEG o PNG (límite de 5 MB)."
                  },
                  "de-DE": {
                    singular: "Bitte eine JPEG- oder PNG-Datei verwenden (Begrenzung: 5 MB)."
                  },
                  "fr-FR": {
                    singular: "Veuillez utiliser un fichier JPEG ou PNG (5 Mo max)."
                  },
                  "ja-JP": {
                    singular: "JPEG または PNG ファイルを使用してください（上限5MB）。"
                  },
                  "ko-KR": {
                    singular: "JPEG 또는 PNG 파일을 사용해주세요. (5MB 이하)"
                  },
                  "pt-BR": {
                    singular: "Por favor, use um arquivo JPEG ou PNG (limite de 5MB)."
                  },
                  "zh-CN": {
                    singular: "请使用 JPEG 或 PNG 文件（不超过 5MB）。"
                  }
                }
              })
            }, "placeholder-paragraph")], _v6 && (0, _v4.jsx)(_v30.Spinner, {}), _v0 && !_v4 && [(0, _v4.jsx)(_v75.CircleWarning, {
              height: (0, _v33.rem)(24),
              width: (0, _v33.rem)(24)
            }, "error-message-icon"), (0, _v4.jsx)(_v76.Text, {
              status: "negative",
              children: _v0
            }, "error-message-text")]]
          }), _v1 && (0, _v4.jsx)(_v39.Paragraph, {
            size: "3",
            children: (0, _v4.jsx)(_v74.FileUpload, {
              accept: _v100.join(","),
              onChange: _v0 => {
                _v10(_v0.target.files);
              },
              disabled: _v6,
              children: (0, _v4.jsx)(_v99, {
                onClick: () => {
                  (0, _v15.trackTeamSettingsModal)(_v15.TeamEvents.ClickUploadButton);
                },
                format: "alternative",
                variant: "hyperminimal",
                children: (0, _v34.translate)({
                  singular: "Replace logo",
                  dictionary: {
                    es: {
                      singular: "Reemplazar logotipo"
                    },
                    "de-DE": {
                      singular: "Logo ersetzen"
                    },
                    "fr-FR": {
                      singular: "Remplacer le logo"
                    },
                    "ja-JP": {
                      singular: "ロゴを差し替え"
                    },
                    "ko-KR": {
                      singular: "로고 교체"
                    },
                    "pt-BR": {
                      singular: "Substituir logotipo"
                    },
                    "zh-CN": {
                      singular: "替换徽标"
                    }
                  }
                })
              })
            })
          })]
        })]
      });
    },
    _v102 = ({
      isDisabled: _v0,
      isSubmitting: _v1,
      onClick: _v2,
      label: _v3
    }) => (0, _v4.jsx)(_v103, {
      disabled: _v0,
      loading: _v1,
      onClick: _v2,
      children: _v3 ?? (0, _v34.translate)({
        singular: "Next",
        dictionary: {
          es: {
            singular: "Siguiente"
          },
          "de-DE": {
            singular: "Weiter"
          },
          "fr-FR": {
            singular: "Suivant"
          },
          "ja-JP": {
            singular: "次へ"
          },
          "ko-KR": {
            singular: "다음"
          },
          "pt-BR": {
            singular: "Próxima"
          },
          "zh-CN": {
            singular: "下一步"
          }
        }
      })
    }),
    _v103 = (0, _v12.default)(_v45.Button).withConfig({
      displayName: "NextButton__CustomButton",
      componentId: "sc-77cf8e4b-0"
    })`
  border-radius: ${(0, _v33.rem)(6)};
  text-decoration: none;
  height: ${(0, _v33.rem)(40)};
  box-sizing: border-box;
  transition:
    background-color 0.2s,
    border-color 0.2s,
    color 0.2s;
  margin-left: auto;
`,
    _v104 = ({
      setErrorMessage: _v0,
      storedTeamInfo: _v1
    }) => {
      let _v2 = (0, _v6.useContext)(_v25.DispatchContext),
        _v3 = (0, _v6.useContext)(_v25.ConfigContext),
        {
          team: _v4
        } = (0, _v6.useContext)(_v25.StateContext),
        {
          accentColor: _v5,
          id: _v6,
          logoUrl: _v7,
          teamName: _v8
        } = _v4,
        [_v9, _v10] = (0, _v6.useState)(!1),
        _v11 = (0, _v6.useCallback)(async () => {
          let _v0 = {
              apiUrl: _v3.apiUrl,
              jwt: _v3.jwt,
              ownerId: _v3.user.id
            },
            _v1 = _v7;
          _v7.includes("assets.brandfetch.io") && (_v1 = await _v66(_v7, _v0));
          let _v2 = (0, _v15.teamLogoUrlToUri)(_v1),
            _v3 = JSON.stringify({
              team_name: _v8.trim(),
              accent_color: _v5,
              logo_uri: _v2
            });
          _v10(!0);
          try {
            await (0, _v15.updateTeamInfo)(_v0, _v6, _v3), _v10(!1), _v2({
              type: _v22.STEP_FORWARD
            });
          } catch (_v0) {
            _v10(!1), _v0(_v15.defaultError);
          }
        }, [_v7, _v8, _v5, _v3.apiUrl, _v3.jwt, _v3.user.id, _v6, _v2, _v0]);
      return (0, _v4.jsx)(_v102, {
        isDisabled: !1,
        isSubmitting: _v9,
        onClick: () => {
          let _v0 = {
            logo_changed: _v7 !== _v1.logoUrl,
            name_changed: _v8.trim() !== _v1.teamName,
            accent_color_changed: _v5 !== _v1.accentColor
          };
          if (Object.values(_v0).some(_v0 => _v0)) _v11(), (0, _v15.trackTeamSettingsModal)(_v15.TeamEvents.TeamSettingsUpdated, _v0);else {
            _v2({
              type: _v22.STEP_FORWARD
            });
            try {
              _v13.BigPictureClient.sendEvent(new _v13.Event("onboarding.click_confirm_branding", 1, {
                product: "Onboarding",
                path: window.parent.location.pathname,
                location: "onboarding"
              }));
            } catch (_v0) {
              console.error(_v0);
            }
          }
        }
      });
    };
  var _v105 = _v0.i(0);
  function _v106(_v0, _v1) {
    var _v2 = _v1.type,
      _v3 = _v1.payload,
      _v4 = void 0 === _v3 ? null : _v3;
    switch (_v2) {
      case "SET_ERROR":
        return (0, _v77.c)((0, _v77.c)({}, _v0), {
          error: _v4,
          warning: !1
        });
      case "SET_WARNING":
        return (0, _v77.c)((0, _v77.c)({}, _v0), {
          warning: _v4,
          error: !1
        });
      case "SET_REMAINING_CHARACTERS":
        return (0, _v77.c)((0, _v77.c)({}, _v0), {
          remainingCharacters: _v4
        });
    }
  }
  var _v107 = (0, _v12.default)(_v39.Paragraph).attrs(function (_v0) {
    return {
      size: 3,
      format: "dark" === _v0.theme.name ? "soft" : "alternative"
    };
  })(_v3 || (_v3 = (0, _v77.a)(["\n  margin-top: 0.25rem;\n  margin-bottom: 0;\n\n  ", ";\n  ", ";\n"], ["\n  margin-top: 0.25rem;\n  margin-bottom: 0;\n\n  ", ";\n  ", ";\n"])), function (_v0) {
    return _v0.warning && {
      fontWeight: 800,
      color: (0, _v17.yellow)(600)
    };
  }, function (_v0) {
    return _v0.error && {
      fontWeight: 600,
      color: (0, _v17.red)(500)
    };
  });
  let _v108 = _v12.css`
  input {
    padding: 0;
    height: ${(0, _v33.rem)(40)};
    font-size: ${(0, _v33.rem)(20)};
    font-weight: bold;

    &:focus {
      border-bottom-color: ${_v0 => _v0.theme.formats.primary};
    }
  }
`,
    _v109 = _v12.default.div.withConfig({
      displayName: "TeamNameInput__InputWrapper",
      componentId: "sc-38b37bf1-0"
    })`
  margin-top: ${(0, _v33.rem)(4)};
  position: relative;

  span {
    margin-bottom: ${(0, _v33.rem)(8)};
  }

  p {
    visibility: hidden;
    margin-bottom: 0;
  }

  &:focus-within p {
    visibility: visible;
  }

  ${_v108}
`,
    _v110 = (_v2 = _v105.Input, function (_v0) {
      var _v1 = _v0.defaultValue,
        _v2 = _v0.maxCharacters,
        _v3 = void 0 === _v2 ? 30 : _v2,
        _v4 = _v0.onChange,
        _v5 = _v0.onError,
        _v6 = _v0.onWarn,
        _v7 = _v0.plural,
        _v8 = _v0.singular,
        _v9 = _v0.warningThreshold,
        _v10 = void 0 === _v9 ? 5 : _v9,
        _v11 = _v0.messages,
        _v12 = (0, _v77.b)(_v0, ["defaultValue", "maxCharacters", "onChange", "onError", "onWarn", "plural", "singular", "warningThreshold", "messages"]),
        _v13 = {
          remainingCharacters: _v1 ? _v3 - _v1.length : _v3
        },
        _v14 = (0, _v77._)((0, _v6.useReducer)(_v106, _v13), 2),
        _v15 = _v14[0],
        _v16 = _v14[1],
        _v17 = _v15.error,
        _v18 = _v15.warning,
        _v19 = _v15.remainingCharacters,
        _v20 = 1 === Math.abs(_v19) ? void 0 === _v8 ? "character" : _v8 : void 0 === _v7 ? "characters" : _v7;
      function _v21(_v0, _v1) {
        void 0 === _v1 && (_v1 = !0), _v16({
          type: "SET_WARNING",
          payload: _v1
        }), _v6 && _v6(_v0);
      }
      function _v22(_v0, _v1) {
        void 0 === _v1 && (_v1 = !0), _v16({
          type: "SET_ERROR",
          payload: _v1
        }), _v5 && _v5(_v0);
      }
      var _v23 = _v6.default.createElement(_v107, {
        error: _v17,
        warning: _v18
      }, _v19, " ", _v20);
      return _v6.default.createElement(_v2, (0, _v77.c)({}, _v12, {
        defaultValue: _v1,
        onChange: function (_v0) {
          var _v1 = _v3 - _v0.target.value.length;
          _v1 < 0 ? _v22(_v0) : _v1 <= _v10 ? _v21(_v0) : (_v22(_v0, !1), _v21(_v0, !1)), _v16({
            type: "SET_REMAINING_CHARACTERS",
            payload: _v1
          }), _v4 && _v4(_v0);
        },
        messages: _v11 || {
          post: _v23
        }
      }));
    }),
    _v111 = _v0 => (0, _v4.jsx)(_v109, {
      children: (0, _v4.jsx)(_v110, {
        autoFocus: _v0.autoFocus,
        maxCharacters: 32,
        placeholder: (0, _v34.translate)({
          singular: "Enter a team name",
          dictionary: {
            es: {
              singular: "Ingresa un nombre para el equipo"
            },
            "de-DE": {
              singular: "Teamnamen eingeben"
            },
            "fr-FR": {
              singular: "Saisissez un nom d'équipe"
            },
            "ja-JP": {
              singular: "チーム名を入力してください"
            },
            "ko-KR": {
              singular: "팀 이름 입력"
            },
            "pt-BR": {
              singular: "Digite o nome da equipe"
            },
            "zh-CN": {
              singular: "输入团队名称"
            }
          }
        }),
        maxLength: 32,
        onChange: _v0 => {
          _v0.setTeamName(_v0.target.value);
        },
        singular: (0, _v34.translate)({
          singular: "character",
          dictionary: {
            es: {
              singular: "Personaje"
            },
            "de-DE": {
              singular: "Charakter"
            },
            "fr-FR": {
              singular: "Personnage"
            },
            "ja-JP": {
              singular: "キャラクター"
            },
            "ko-KR": {
              singular: "캐릭터"
            },
            "pt-BR": {
              singular: "Personagem"
            },
            "zh-CN": {
              singular: "字符"
            }
          }
        }),
        plural: (0, _v34.translate)({
          singular: "characters",
          dictionary: {
            es: {
              singular: "caracteres"
            },
            "de-DE": {
              singular: "Zeichen"
            },
            "fr-FR": {
              singular: "caractères"
            },
            "ja-JP": {
              singular: "文字"
            },
            "ko-KR": {
              singular: "자"
            },
            "pt-BR": {
              singular: "caracteres"
            },
            "zh-CN": {
              singular: "字符"
            }
          }
        }),
        value: _v0.teamName,
        variant: "underline"
      })
    }, "input-wrapper"),
    _v112 = _v12.default.div.withConfig({
      displayName: "TeamBranding__Wrapper",
      componentId: "sc-1e713bce-0"
    })`
  width: 100%;
  max-width: ${(0, _v33.rem)(700)};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 ${(0, _v33.rem)(20)} 0 ${(0, _v33.rem)(20)};
  position: relative;
  justify-content: center;

  h6 {
    font-size: ${(0, _v33.rem)(18)};
  }
`,
    _v113 = () => {
      let {
          team: _v0
        } = (0, _v6.useContext)(_v25.StateContext),
        {
          accentColor: _v1,
          logoUrl: _v2,
          teamName: _v3
        } = _v0,
        _v4 = (0, _v6.useContext)(_v25.DispatchContext),
        _v5 = (0, _v6.useRef)(_v0),
        [_v6, _v7] = (0, _v6.useState)(""),
        _v8 = (0, _v6.useContext)(_v25.ConfigContext),
        _v9 = {
          apiUrl: _v8.apiUrl,
          jwt: _v8.jwt,
          ownerId: _v8.user.id
        },
        _v10 = () => {
          _v23(_v4, {
            ..._v5.current,
            brandingSuggestion: _v0.brandingSuggestion
          });
        },
        _v11 = (0, _v73.getReceiptValue)(_v73.RECEIPT_ONBOARDING_USER_EMAIL),
        _v12 = ((_v0, _v1, _v2, _v3) => {
          let [_v4, _v5] = (0, _v6.useState)(!_v70 || !_v69);
          return (0, _v6.useEffect)(() => {
            _v1 ? _v72(_v0, _v1.split("@")[1], _v2, _v3, _v5) : _v5(!1);
          }, [_v1]), _v4;
        })(_v5.current, _v11, _v9, _v4);
      return ((0, _v6.useEffect)(() => {
        _v0.logoUrl || "player" !== _v0.brandingSuggestion.logoSource || _v23(_v4, {
          logoUrl: _v0.brandingSuggestion.logoUrl
        });
      }, [_v0.logoUrl, _v0.brandingSuggestion.logoSource]), (0, _v6.useEffect)(() => {
        !_v0.teamName && _v0.brandingSuggestion.teamName && _v23(_v4, {
          teamName: _v0.brandingSuggestion.teamName
        });
      }, [_v0.brandingSuggestion.teamName]), _v12) ? (0, _v4.jsx)(_v31, {}) : (0, _v4.jsx)(_v51, {
        description: (0, _v34.translate)({
          singular: "Select a name, logo, and brand color before you invite your team admins.",
          dictionary: {
            es: {
              singular: "Antes de invitar a los administradores de tu equipo, selecciona un nombre, un logo y un color de marca."
            },
            "de-DE": {
              singular: "Wähle einen Namen, ein Logo und eine Markenfarbe aus und lade anschließend deine Team-Administratoren ein."
            },
            "fr-FR": {
              singular: "Sélectionnez un nom, un logo et une couleur de marque avant d'inviter les administrateurs de votre équipe."
            },
            "ja-JP": {
              singular: "チーム管理者を招待する前に、名前、ロゴ、ブランドの色を選択してください。"
            },
            "ko-KR": {
              singular: "팀 관리자를 초대하기 전에 이름, 로고, 브랜드 색상을 선택하세요."
            },
            "pt-BR": {
              singular: "Selecione um nome, logo e cor da marca antes de convidar os administradores da sua equipe."
            },
            "zh-CN": {
              singular: "在邀请团队管理员之前选择名称、徽标和品牌颜色。"
            }
          }
        }),
        title: (0, _v34.translate)({
          singular: "Build your team",
          dictionary: {
            es: {
              singular: "Forma tu equipo"
            },
            "de-DE": {
              singular: "Erstelle dein Team"
            },
            "fr-FR": {
              singular: "Créez votre équipe"
            },
            "ja-JP": {
              singular: "チームを構築"
            },
            "ko-KR": {
              singular: "팀을 꾸리세요"
            },
            "pt-BR": {
              singular: "Crie sua equipe"
            },
            "zh-CN": {
              singular: "组建团队"
            }
          }
        }),
        onBack: _v10,
        onSkip: _v10,
        nextButton: (0, _v4.jsx)(_v104, {
          setErrorMessage: _v7,
          storedTeamInfo: _v5.current
        }),
        children: (0, _v4.jsxs)(_v112, {
          children: [(0, _v4.jsx)(_v111, {
            autoFocus: !0,
            teamName: _v3,
            setTeamName: _v0 => {
              _v23(_v4, {
                teamName: _v0
              });
            }
          }), (0, _v4.jsx)(_v101, {
            errorMessage: _v6,
            logoUrl: _v2,
            setErrorMessage: _v7,
            setLogoUrl: _v0 => {
              _v23(_v4, {
                logoUrl: _v0
              });
            }
          }), (0, _v4.jsx)(_v36, {
            accentColor: _v1,
            isLarge: !0,
            setAccentColor: _v0 => {
              _v23(_v4, {
                accentColor: _v0
              });
            },
            shouldAutoSetAccentColor: _v2 !== _v5.current.logoUrl,
            sourceImageUrl: _v2
          })]
        })
      });
    };
  var _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = (0, _v6.forwardRef)(function (_v0, _v1) {
      return _v6.default.createElement("svg", (0, _v77.c)({
        id: "circle-plus_svg__Layer_1",
        x: 0,
        y: 0,
        viewBox: "0 0 20 20",
        xmlSpace: "preserve",
        ref: _v1
      }, _v0), _v6.default.createElement("path", {
        className: "circle-plus_svg__st0",
        d: "M10 20C4.5 20 0 15.5 0 10S4.5 0 10 0s10 4.5 10 10-4.5 10-10 10zm0-18c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
      }), _v6.default.createElement("path", {
        className: "circle-plus_svg__st0",
        d: "M14 9h-3V6H9v3H6v2h3v3h2v-3h3z"
      }));
    }),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v120 = _v120,
    _v121 = _v0.i(0),
    _v122 = (0, _v6.forwardRef)(function (_v0, _v1) {
      return _v6.default.createElement("svg", (0, _v77.c)({
        "data-name": "Layer 1",
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v6.default.createElement("path", {
        d: "M10 10a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm8 18H2v-4a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zM4 18h12v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3z",
        fill: "#1a2e3b"
      }));
    }),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0);
  let _v125 = _v12.default.div.withConfig({
      displayName: "InviteCount__Wrapper",
      componentId: "sc-5e5ca15f-0"
    })`
  align-items: center;
  display: flex;

  span {
    padding-top: ${(0, _v33.rem)(1)};
  }

  * {
    color: ${_v124.core.color.text(600)};
    fill: ${_v124.core.color.text(600)};
  }
`,
    _v126 = _v12.default.div.withConfig({
      displayName: "InviteCount__TipIconWrapper",
      componentId: "sc-5e5ca15f-1"
    })`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-left: ${(0, _v33.rem)(11)};
  margin-top: ${(0, _v33.rem)(-1)};

  svg {
    height: ${(0, _v33.rem)(20)};
    width: auto;
  }
`,
    _v127 = (0, _v12.default)(_v122).withConfig({
      displayName: "InviteCount__Person",
      componentId: "sc-5e5ca15f-2"
    })`
  height: ${(0, _v33.rem)(20)};
  margin-right: ${(0, _v33.rem)(8)};
  padding: ${(0, _v33.rem)(3)};
  width: auto;
`,
    _v128 = ({
      invitationsOutstanding: _v0,
      tip: _v1,
      isSingleSeatOnboarding: _v2
    }) => (0, _v4.jsxs)(_v125, {
      children: [(0, _v4.jsx)(_v127, {}), (0, _v4.jsx)(_v76.Text, {
        size: 100,
        children: _v2 ? (0, _v34.translate)({
          singular: "{REMAINING_SEATS} invitation remaining",
          plural: "{REMAINING_SEATS} invitations remaining",
          count: _v0,
          replacements: {
            REMAINING_SEATS: _v0
          },
          dictionary: {
            es: {
              singular: "{REMAINING_SEATS} invitación restante",
              plural: "{REMAINING_SEATS} invitaciones restantes"
            },
            "de-DE": {
              singular: "{REMAINING_SEATS} Einladung übrig",
              plural: "{REMAINING_SEATS} Einladungen übrig"
            },
            "fr-FR": {
              singular: "{REMAINING_SEATS} invitation restante",
              plural: "{REMAINING_SEATS} invitations restantes"
            },
            "ja-JP": {
              singular: "{REMAINING_SEATS}件の招待枠が残っています",
              plural: "{REMAINING_SEATS}件の招待枠が残っています"
            },
            "ko-KR": {
              singular: "초대장 {REMAINING_SEATS}개 남음",
              plural: "초대장 {REMAINING_SEATS}개 남음"
            },
            "pt-BR": {
              singular: "{REMAINING_SEATS} convite restante",
              plural: "{REMAINING_SEATS} convites restantes"
            },
            "zh-CN": {
              singular: "剩余 {REMAINING_SEATS} 个邀请",
              plural: "剩余 {REMAINING_SEATS} 个邀请"
            }
          }
        }) : (0, _v34.translate)({
          singular: "{REMAINING_SEATS} seat remaining",
          plural: "{REMAINING_SEATS} seats remaining",
          count: _v0,
          replacements: {
            REMAINING_SEATS: _v0
          },
          dictionary: {
            es: {
              singular: "{REMAINING_SEATS} puesto restante",
              plural: "{REMAINING_SEATS} puestos restantes"
            },
            "de-DE": {
              singular: "Noch {REMAINING_SEATS} Einzellizenzen",
              plural: "{REMAINING_SEATS} verbleibende Einzellizenzen"
            },
            "fr-FR": {
              singular: "{REMAINING_SEATS} licence restante",
              plural: "{REMAINING_SEATS} licences restantes"
            },
            "ja-JP": {
              singular: "残りのシートライセンス：{REMAINING_SEATS}個",
              plural: "残りのシートライセンス：{REMAINING_SEATS}個"
            },
            "ko-KR": {
              singular: "남은 사용자 라이선스 {REMAINING_SEATS}개",
              plural: "남은 사용자 라이선스 {REMAINING_SEATS}개"
            },
            "pt-BR": {
              singular: "{REMAINING_SEATS} licenças restantes",
              plural: "{REMAINING_SEATS} licenças restantes"
            },
            "zh-CN": {
              singular: "剩余 {REMAINING_SEATS} 个席位",
              plural: "剩余 {REMAINING_SEATS} 个席位"
            }
          }
        })
      }), (0, _v4.jsx)(_v121.Tip, {
        attach: "top",
        content: _v1,
        children: (0, _v4.jsx)(_v126, {
          children: (0, _v4.jsx)(_v123.CircleInfoSmall, {})
        })
      })]
    });
  var _v129 = _v0.i(0);
  let _v130 = _v12.default.div.withConfig({
      displayName: "MaxInvitesSentNotification__Wrapper",
      componentId: "sc-9f43f8a0-0"
    })`
  align-items: center;
  background-color: ${_v0 => (0, _v33.transparentize)(.85, _v0.accentColor || (0, _v17.blue)(500))};
  display: flex;
  padding: ${(0, _v33.rem)(5)};

  svg {
    width: ${(0, _v33.rem)(32)};
    height: ${(0, _v33.rem)(32)};
    g {
      fill: ${_v0 => _v0.accentColor || (0, _v17.blue)(500)};
    }
  }
`,
    _v131 = ({
      accentColor: _v0,
      invitationsOutstanding: _v1,
      isSingleSeatOnboarding: _v2,
      isTrialPlan: _v3
    }) => (0, _v4.jsxs)(_v130, {
      accentColor: _v0,
      children: [(0, _v4.jsx)(_v123.CircleInfoSmall, {}), (0, _v4.jsx)(_v76.Text, {
        size: 200,
        children: _v2 ? _v3 ? (0, _v34.translate)({
          singular: "You have {REMAINING_INVITATIONS} invitation remaining. {A}To invite more people, upgrade to a paid plan.{/A}",
          plural: "You have {REMAINING_INVITATIONS} invitations remaining. {A}To invite more people, upgrade to a paid plan.{/A}",
          count: _v1,
          replacements: {
            REMAINING_INVITATIONS: _v1,
            A: _v0 => (0, _v4.jsx)(_v117.Link, {
              href: (0, _v129.buildUpgradePlanUrl)({
                paywallTrigger: "onboarding_team_settings_invite_upgrade_link",
                paywallLocation: "onboarding_team_settings",
                paywallFeature: "team_seats"
              }),
              target: "_blank",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Te queda {REMAINING_INVITATIONS} invitación. {A}Para invitar a más personas, actualiza a un plan de pago.{/A}",
              plural: "Te quedan {REMAINING_INVITATIONS} invitaciones. {A}Para invitar a más personas, actualiza a un plan de pago.{/A}"
            },
            "de-DE": {
              singular: "Du hast noch {REMAINING_INVITATIONS} Einladung übrig. {A}Mit einem Upgrade auf einen kostenpflichtigen Tarif kannst du weitere Personen einladen.{/A}",
              plural: "Du hast noch {REMAINING_INVITATIONS} Einladungen übrig. {A}Mit einem Upgrade auf einen kostenpflichtigen Tarif kannst du weitere Personen einladen.{/A}"
            },
            "fr-FR": {
              singular: "Il vous reste {REMAINING_INVITATIONS} invitation. {A}Pour inviter plus de personnes, passez à un abonnement payant.{/A}",
              plural: "Il vous reste {REMAINING_INVITATIONS} invitations. {A}Pour inviter plus de personnes, passez à un abonnement payant.{/A}"
            },
            "ja-JP": {
              singular: "{REMAINING_INVITATIONS}個の招待枠が残っています。{A}さらに多くのユーザーを招待するには、有料プランにアップグレードしてください。{/A}",
              plural: "{REMAINING_INVITATIONS}個の招待枠が残っています。{A}さらに多くのユーザーを招待するには、有料プランにアップグレードしてください。{/A}"
            },
            "ko-KR": {
              singular: "초대장이 {REMAINING_INVITATIONS}개 남아 있습니다. {A}더 많은 사람을 초대하려면 유료 요금제로 업그레이드하세요.{/A}",
              plural: "초대장이 {REMAINING_INVITATIONS}개 남아 있습니다. {A}더 많은 사람을 초대하려면 유료 요금제로 업그레이드하세요.{/A}"
            },
            "pt-BR": {
              singular: "Você tem {REMAINING_INVITATIONS} convite restante. {A}Para convidar mais pessoas, faça upgrade para um plano pago.{/A}",
              plural: "Você tem {REMAINING_INVITATIONS} convites restantes. {A}Para convidar mais pessoas, faça upgrade para um plano pago.{/A}"
            },
            "zh-CN": {
              singular: "您还剩下 {REMAINING_INVITATIONS} 份邀请函。{A}要邀请更多人，请升级到付费套餐。{/A}",
              plural: "您还可以邀请 {REMAINING_INVITATIONS} 人。{A}要邀请更多人，请升级到付费套餐。{/A}"
            }
          }
        }) : (0, _v34.translate)({
          singular: "You have {REMAINING_INVITATIONS} invitation remaining. {A}To invite more people, visit the team management page.{/A}",
          plural: "You have {REMAINING_INVITATIONS} invitations remaining. {A}To invite more people, visit the team management page.{/A}",
          count: _v1,
          replacements: {
            REMAINING_INVITATIONS: _v1,
            A: _v0 => (0, _v4.jsx)(_v117.Link, {
              href: "/settings/account/team_members",
              target: "_blank",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Te queda {REMAINING_INVITATIONS} invitación. {A}Para invitar a más personas, visita la página de gestión de equipos.{/A}",
              plural: "Te quedan {REMAINING_INVITATIONS} invitaciones. {A}Para invitar a más personas, visita la página de gestión de equipos.{/A}"
            },
            "de-DE": {
              singular: "Du hast noch {REMAINING_INVITATIONS} Einladung übrig. {A}Besuche die Seite für die Teamverwaltung, um weitere Personen einzuladen.{/A}",
              plural: "Du hast noch {REMAINING_INVITATIONS} Einladungen übrig. {A}Besuche die Seite für die Teamverwaltung, um weitere Personen einzuladen.{/A}"
            },
            "fr-FR": {
              singular: "Il vous reste {REMAINING_INVITATIONS} invitation. {A}Pour inviter plus de personnes, rendez-vous sur la page de gestion de l'équipe.{/A}",
              plural: "Il vous reste {REMAINING_INVITATIONS} invitations. {A}Pour inviter plus de personnes, rendez-vous sur la page de gestion de l'équipe.{/A}"
            },
            "ja-JP": {
              singular: "{REMAINING_INVITATIONS}個の招待枠が残っています。{A}さらに多くのユーザーを招待するには、チーム管理ページにアクセスしてください。{/A}",
              plural: "{REMAINING_INVITATIONS}個の招待枠が残っています。{A}さらに多くのユーザーを招待するには、チーム管理ページにアクセスしてください。{/A}"
            },
            "ko-KR": {
              singular: "초대장이 {REMAINING_INVITATIONS}개 남아 있습니다. {A}초대 인원을 늘리려면 팀 관리 페이지로 이동하세요.{/A}",
              plural: "초대장이 {REMAINING_INVITATIONS}개 남아 있습니다. {A}초대 인원을 늘리려면 팀 관리 페이지로 이동하세요.{/A}"
            },
            "pt-BR": {
              singular: "Você tem {REMAINING_INVITATIONS} convite restante. {A}Para convidar mais pessoas, visite a página de gerenciamento de equipe.{/A}",
              plural: "Você tem {REMAINING_INVITATIONS} convites restantes. {A}Para convidar mais pessoas, visite a página de gerenciamento de equipe.{/A}"
            },
            "zh-CN": {
              singular: "您还可以邀请 {REMAINING_INVITATIONS} 人。{A}要邀请更多人，请访问团队管理页面。{/A}",
              plural: "您还剩下 {REMAINING_INVITATIONS} 份邀请函。{A}要邀请更多人，请访问团队管理页面。{/A}"
            }
          }
        }) : (0, _v34.translate)({
          singular: "You have {REMAINING_SEATS} paid seat remaining. {A}To invite more people, visit the team management page.{/A}",
          plural: "You have {REMAINING_SEATS} paid seats remaining. {A}To invite more people, visit the team management page.{/A}",
          count: _v1,
          replacements: {
            REMAINING_SEATS: _v1,
            A: _v0 => (0, _v4.jsx)(_v117.Link, {
              href: "/settings/account/team_members",
              target: "_blank",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Te queda {REMAINING_SEATS} puesto pagado. {A}Para invitar a más personas, visita la página de gestión de equipos.{/A}",
              plural: "Te quedan {REMAINING_SEATS} puestos pagados. {A}Para invitar a más personas, visita la página de gestión de equipos.{/A}"
            },
            "de-DE": {
              singular: "Du hast noch {REMAINING_SEATS} kostenpflichtige Einzellizenzen übrig. {A}Besuche die Seite für die Teamverwaltung, um weitere Personen einzuladen.{/A}",
              plural: "Du hast {REMAINING_SEATS} verbleibende bezahlte Einzellizenzen. {A}Besuche die Seite für die Teamverwaltung, um weitere Personen einzuladen.{/A}"
            },
            "fr-FR": {
              singular: "Il vous reste {REMAINING_SEATS} licence payante. {A}Pour inviter plus de personnes, rendez-vous sur la page de gestion de l'équipe.{/A}",
              plural: "Il vous reste {REMAINING_SEATS} licences payantes. {A}Pour inviter plus de personnes, rendez-vous sur la page de gestion de l'équipe.{/A}"
            },
            "ja-JP": {
              singular: "有料シートライセンスは{REMAINING_SEATS}個残っています。{A}さらに多くのユーザーを招待するには、チーム管理ページにアクセスしてください。{/A}",
              plural: "残りの有料シートライセンス：{REMAINING_SEATS}個{A}さらに多くのユーザーを招待するには、チーム管理ページにアクセスしてください。{/A}"
            },
            "ko-KR": {
              singular: "구매한 사용자 라이선스가 {REMAINING_SEATS}개 남아 있습니다. {A}초대 인원을 늘리려면 팀 관리 페이지로 이동하세요.{/A}",
              plural: "구매한 사용자 라이선스가 {REMAINING_SEATS}개 남아 있습니다. {A}초대 인원을 늘리려면 팀 관리 페이지로 이동하세요.{/A}"
            },
            "pt-BR": {
              singular: "Você tem {REMAINING_SEATS} licença paga restante. {A}Para convidar mais pessoas, visite a página de gerenciamento de equipe.{/A}",
              plural: "Você tem {REMAINING_SEATS} licenças pagas restantes. {A}Para convidar mais pessoas, visite a página de gerenciamento de equipe.{/A}"
            },
            "zh-CN": {
              singular: "您还剩余 {REMAINING_SEATS} 个付费席位。{A}要邀请更多人，请访问团队管理页面。{/A}",
              plural: "您还剩余 {REMAINING_SEATS} 个付费席位。{A}要邀请更多人，请访问团队管理页面。{/A}"
            }
          }
        })
      })]
    }),
    _v132 = {
      Viewer: (0, _v34.translate)({
        singular: "Viewer",
        dictionary: {
          es: {
            singular: "Espectador(a)"
          },
          "de-DE": {
            singular: "Zuschauende"
          },
          "fr-FR": {
            singular: "Spectateur"
          },
          "ja-JP": {
            singular: "閲覧者"
          },
          "ko-KR": {
            singular: "뷰어"
          },
          "pt-BR": {
            singular: "Espectador"
          },
          "zh-CN": {
            singular: "观众"
          }
        }
      }),
      Contributor: (0, _v34.translate)({
        singular: "Contributor",
        dictionary: {
          es: {
            singular: "Colaborador(a)"
          },
          "de-DE": {
            singular: "Beitragender"
          },
          "fr-FR": {
            singular: "Contributeur"
          },
          "ja-JP": {
            singular: "投稿者"
          },
          "ko-KR": {
            singular: "기여자"
          },
          "pt-BR": {
            singular: "Colaborador"
          },
          "zh-CN": {
            singular: "贡献者"
          }
        }
      }),
      Admin: (0, _v34.translate)({
        singular: "Admin",
        dictionary: {
          es: {
            singular: "Administrador(a)"
          },
          "fr-FR": {
            singular: "Administrateur"
          },
          "ja-JP": {
            singular: "管理者"
          },
          "ko-KR": {
            singular: "관리자"
          },
          "pt-BR": {
            singular: "Administrador"
          },
          "zh-CN": {
            singular: "管理员"
          }
        }
      }),
      SelectRole: (0, _v34.translate)({
        singular: "Select role",
        dictionary: {
          es: {
            singular: "Seleccionar rol"
          },
          "de-DE": {
            singular: "Rolle auswählen"
          },
          "fr-FR": {
            singular: "Sélectionner un rôle"
          },
          "ja-JP": {
            singular: "役割を選択"
          },
          "ko-KR": {
            singular: "역할 선택"
          },
          "pt-BR": {
            singular: "Selecionar função"
          },
          "zh-CN": {
            singular: "选择角色"
          }
        }
      })
    },
    _v133 = _v0 => (0, _v4.jsx)(_v117.Link, {
      href: "/settings/account/team_members",
      target: "_blank",
      onClick: () => {
        _v13.BigPictureClient.sendEvent(new _v13.Event("onboarding.click_account_settings_error", 2, {
          product: "Onboarding",
          path: window.parent.location.pathname,
          location: "onboarding"
        }));
      },
      children: _v0
    }),
    _v134 = () => {
      var _v0, _v1, _v2, _v3, _v4, _v5;
      let {
          team: _v6
        } = (0, _v6.useContext)(_v25.StateContext),
        {
          apiUrl: _v7,
          jwt: _v8,
          remainingInviteCount: _v9,
          user: _v10,
          isSingleSeatOnboarding: _v11
        } = (0, _v6.useContext)(_v25.ConfigContext),
        _v12 = (0, _v6.useContext)(_v25.DispatchContext),
        [_v13, _v14] = (0, _v6.useState)((0, _v32.getInitialPendingInvites)(_v9, _v11)),
        [_v15, _v16] = (0, _v6.useState)(!1),
        [_v17, _v18] = (0, _v6.useState)(""),
        [_v19, _v20] = (0, _v6.useState)(""),
        [_v21, _v22] = (0, _v6.useState)(""),
        [_v23, _v24] = (0, _v6.useState)(!1),
        _v25 = (0, _v32.filterInvitesWithEmails)(_v13).length,
        [_v26, _v27, _v28] = (0, _v32.teamMemberRoleCount)(_v13),
        _v29 = _v13.length,
        _v30 = _v29 < Math.min(_v32.MAX_INVITE_COUNT, _v9),
        _v31 = _v9 > _v32.MAX_INVITE_COUNT,
        {
          capabilities: {
            canUsePaymentsService: _v32
          }
        } = (0, _v7.useCapability)(["canUsePaymentsService"]),
        {
          apiLoading: _v33,
          additionalRoleMenuData: _v34,
          isFreeTrial: _v35,
          shouldShowNewOnboardingFlow: _v36,
          membershipData: _v37,
          getRoleMenuType: _v38,
          canTriggerPurchaseSeats: _v39,
          getMinimumPurchaseForInvite: _v40,
          getMaximumPurchaseSeatsForInvite: _v41
        } = ((_v0, _v1, _v2, _v3) => {
          let _v4 = (0, _v6.useContext)(_v10.ViewerContext),
            {
              capabilities: {
                hasPerSeatPricingModelTeamMember: _v5
              }
            } = (0, _v7.useCapability)(["hasPerSeatPricingModelTeamMember"]),
            [_v6, _v7] = (0, _v54.useGetUserSettingsBillingMembershipLazy)(),
            [_v8, _v9] = (0, _v55.useGetUserSettingsBillingPaymentMethodsLazy)(),
            {
              data: _v10,
              loading: _v11
            } = _v7,
            {
              data: _v12,
              loading: _v13
            } = _v9,
            _v14 = (0, _v32.isTestUser)(_v4?.user?.email || "");
          (0, _v6.useEffect)(() => {
            _v5 && _v14 && (_v6({
              select: [],
              where: {
                userId: _v0
              }
            }), _v8({
              select: ["type"],
              where: {
                userId: _v0
              }
            }));
          }, [_v5, _v14]);
          let _v15 = (0, _v57.useGetSubscriptionPlansData)(),
            _v16 = _v10?.isFreeTrial ?? !1,
            _v17 = _v10?.tier === _v60.Tier.Creator,
            {
              isBlocked: _v18
            } = (0, _v56.useIsSeatChangeBlocked)({
              tier: _v10?.tier
            }),
            _v19 = _v14 && !_v17 && _v12?.data[0]?.type !== "paypal" && _v1;
          return {
            apiLoading: _v11 || _v13,
            additionalRoleMenuData: {
              pricePerSeat: (() => {
                if (_v15 && _v10) {
                  let _v0 = _v15.find(_v0 => _v0.tier === _v10.tier);
                  if (_v0) return "month" === _v10.billingPeriod ? `${_v0.currency.symbol}${_v0.price.monthly}` : `${_v0.currency.symbol}${_v0.price.annualMonthly}`;
                }
                return "";
              })(),
              isTrialPlan: _v10?.isFreeTrial,
              paidSeatCount: _v2,
              viewerCount: _v3
            },
            isFreeTrial: _v16,
            shouldShowNewOnboardingFlow: _v19,
            membershipData: _v10,
            getRoleMenuType: () => _v19 ? _v10?.isFreeTrial ? _v59.RoleMenuType.TrialSingleSeatOnBoarfingFlow : _v59.RoleMenuType.PaidSingleSeatOnBoardingFlow : _v59.RoleMenuType.MultipleSeatOnBoardingFlow,
            canTriggerPurchaseSeats: _v0 => !_v17 && !_v18 && _v19 && _v0.some(_v0 => _v0.email && _v0.isEmailValid && (_v0.role === _v61.TeamUserPermissionLevel.Admin || _v0.role === _v61.TeamUserPermissionLevel.Contributor)),
            getMinimumPurchaseForInvite: _v0 => _v0.filter(_v0 => _v0.email && _v0.isEmailValid && (_v0.role === _v61.TeamUserPermissionLevel.Admin || _v0.role === _v61.TeamUserPermissionLevel.Contributor)).length,
            getMaximumPurchaseSeatsForInvite: () => _v16 ? _v58.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS : _v58.MAX_PURCHASE_SEATS_DEFAULT
          };
        })(_v10.id, _v11, _v26 + _v27, _v28),
        {
          teamInfo: _v42
        } = (_v0 => {
          let [_v1, _v2] = (0, _v6.useState)(),
            {
              data: _v3,
              error: _v4
            } = (0, _v16.useGetUserTeams)(() => _v0 ? {
              where: {
                userId: _v0
              },
              select: []
            } : null, {
              revalidateOnFocus: !1,
              revalidateOnReconnect: !1
            });
          return (0, _v6.useEffect)(() => {
            _v3?.data && _v2((_v3?.data)[0]);
          }, [_v3]), {
            teamInfo: _v1,
            teamsError: _v4
          };
        })(_v10.id),
        {
          sendInviteMembersToTeamEvent: _v43
        } = (0, _v29.useOnBoardingBPEvents)();
      (0, _v6.useEffect)(() => {
        _v21 && _v44();
      }, [_v21]), (0, _v6.useEffect)(() => {
        _v36 && _v14(_v0 => _v0.map(_v0 => ({
          ..._v0,
          role: _v32.SelectRole
        })));
      }, [_v36]);
      let _v44 = (0, _v6.useCallback)(async () => {
          try {
            await _v13.BigPictureClient.sendEvent(new _v13.Event("onboarding.click_invite", 1, {
              product: "Onboarding",
              path: window.parent.location.pathname,
              location: "onboarding"
            }));
          } catch (_v0) {
            console.error(_v0);
          }
          let _v0 = (0, _v32.getValidatedEmails)(_v13);
          if (_v14(_v0), _v0.length > 0 && _v0.every(_v0 => _v0.isEmailValid)) {
            _v16(!0);
            let _v0 = (0, _v32.filterInvitesWithEmails)(_v0);
            try {
              let _v0 = await (0, _v32.inviteTeamMembers)(_v0, _v10.id, _v7, _v8, _v43);
              (0, _v32.setInviteCountInStorage)(_v0.length);
              try {
                await _v13.BigPictureClient.sendEvent(new _v13.Event("onboarding.invite_sent", 1, {
                  product: "Onboarding",
                  path: window.parent.location.pathname,
                  location: "onboarding",
                  invite_count: _v0.length
                }));
              } catch (_v0) {
                console.error(_v0);
              }
              _v16(!1), _v12({
                type: _v22.STEP_FORWARD
              });
            } catch (_v0) {
              if ((0, _v32.isTeamInviteError)(_v0)) {
                let {
                  email: _v0,
                  errorCode: _v1
                } = _v0;
                _v20(((_v0, _v1) => {
                  switch (_v1) {
                    case _v32.InviteErrorCode.AlreadyJoined:
                      return (0, _v34.translate)({
                        singular: "{BOLD}'{EMAIL}'{/BOLD} is already part of your team.",
                        replacements: {
                          EMAIL: _v0,
                          BOLD: _v0 => (0, _v4.jsx)("b", {
                            children: _v0
                          })
                        },
                        dictionary: {
                          es: {
                            singular: "{BOLD}'{EMAIL}'{/BOLD} ya es parte de tu equipo."
                          },
                          "de-DE": {
                            singular: "{BOLD}„{EMAIL}“{/BOLD} gehört deinem Team bereits an."
                          },
                          "fr-FR": {
                            singular: "{BOLD}« {EMAIL} »{/BOLD} fait déjà partie de votre équipe."
                          },
                          "ja-JP": {
                            singular: "{BOLD}「{EMAIL}」{/BOLD}はすでにチームメンバーです。"
                          },
                          "ko-KR": {
                            singular: "{BOLD}'{EMAIL}'{/BOLD}은(는) 이미 팀에 속해 있습니다."
                          },
                          "pt-BR": {
                            singular: "{BOLD}'{EMAIL}'{/BOLD} já faz parte da sua equipe."
                          },
                          "zh-CN": {
                            singular: "{BOLD}“{EMAIL}”{/BOLD}已是您的团队成员。"
                          }
                        }
                      });
                    case _v32.InviteErrorCode.AlreadyInvited:
                      return (0, _v34.translate)({
                        singular: "{BOLD}'{EMAIL}'{/BOLD} is already invited and is yet to respond.",
                        replacements: {
                          EMAIL: _v0,
                          BOLD: _v0 => (0, _v4.jsx)("b", {
                            children: _v0
                          })
                        },
                        dictionary: {
                          es: {
                            singular: "Ya se invitó a {BOLD}'{EMAIL}'{/BOLD} y aún no respondió."
                          },
                          "de-DE": {
                            singular: "{BOLD}„{EMAIL}“{/BOLD} wurde bereits eingeladen und hat noch nicht geantwortet."
                          },
                          "fr-FR": {
                            singular: "{BOLD}« {EMAIL} »{/BOLD} a déjà reçu une invitation et n'a pas encore répondu."
                          },
                          "ja-JP": {
                            singular: "{BOLD}「{EMAIL}」{/BOLD}はすでに招待済み・返答待ちです。"
                          },
                          "ko-KR": {
                            singular: "{BOLD}'{EMAIL}'{/BOLD}은(는) 이미 초대되었으며 아직 응답하지 않았습니다."
                          },
                          "pt-BR": {
                            singular: "{BOLD}'{EMAIL}'{/BOLD} já recebeu o convite e ainda não respondeu."
                          },
                          "zh-CN": {
                            singular: "{BOLD}“{EMAIL}”{/BOLD}已被邀请，但尚未回复。"
                          }
                        }
                      });
                    case _v32.InviteErrorCode.MemberLimitReached:
                    case _v32.InviteErrorCode.SeatLimitReached:
                      return (0, _v34.translate)({
                        singular: "You hit your maximum number of invites.",
                        dictionary: {
                          es: {
                            singular: "Has alcanzado el número máximo de invitaciones."
                          },
                          "de-DE": {
                            singular: "Du hast deine Maximalzahl an Einladungen erreicht."
                          },
                          "fr-FR": {
                            singular: "Vous avez atteint votre nombre maximum d'invitations."
                          },
                          "ja-JP": {
                            singular: "追加できるメンバー数の上限に達しました。"
                          },
                          "ko-KR": {
                            singular: "보낸 초대장 수가 최대 한도에 도달했습니다."
                          },
                          "pt-BR": {
                            singular: "Você atingiu o número máximo de convites."
                          },
                          "zh-CN": {
                            singular: "您已达到最大邀请数。"
                          }
                        }
                      });
                    default:
                      return (0, _v34.translate)({
                        singular: "There was a problem inviting {EMAIL}. Make sure they aren't already on your team. If the problem persists, you can invite them from your {A}account settings{/A}.",
                        replacements: {
                          EMAIL: _v0,
                          A: _v133
                        },
                        dictionary: {
                          es: {
                            singular: "Hubo un problema al invitar a {EMAIL}. Asegúrate de que no estén ya en tu equipo. Si el problema persiste, puedes invitarlos desde tus {A}ajustes de la cuenta{/A}."
                          },
                          "de-DE": {
                            singular: "Beim Einladen von {EMAIL} ist ein Problem aufgetreten. Stellen Sie sicher, dass diese Person nicht bereits in Ihrem Team ist. Wenn das Problem weiterhin besteht, können Sie sie über Ihre {A}Kontoeinstellungen{/A} einladen."
                          },
                          "fr-FR": {
                            singular: "Un problème est survenu lors de l’invitation de {EMAIL}. Assurez-vous qu’ils ne font pas déjà partie de votre équipe. Si le problème persiste, vous pouvez les inviter depuis vos {A}paramètres du compte{/A}."
                          },
                          "ja-JP": {
                            singular: "{EMAIL}を招待する際に問題が発生しました。既にチームに所属していないか確認してください。問題が解決しない場合は、{A}アカウント設定{/A}から招待できます。"
                          },
                          "ko-KR": {
                            singular: "{EMAIL}을 초대하는 데 문제가 발생했습니다. 해당 사용자가 이미 팀에 속해 있지 않은지 확인하세요. 문제가 계속되면 {A}계정 설정{/A}에서 초대할 수 있습니다."
                          },
                          "pt-BR": {
                            singular: "Ocorreu um problema ao convidar {EMAIL}. Verifique se essa pessoa ainda não faz parte da sua equipe. Se o problema persistir, você pode convidar essa pessoa nas {A}configurações da conta{/A}."
                          },
                          "zh-CN": {
                            singular: "邀请 {EMAIL} 时出现问题。请确保他们尚未加入您的团队。如果问题仍然存在，您可以从您的{A}帐户设置{/A}邀请他们。"
                          }
                        }
                      });
                  }
                })(_v0, _v1)), (_v1 === _v32.InviteErrorCode.AlreadyInvited || _v1 === _v32.InviteErrorCode.AlreadyJoined) && _v14(_v0 => _v0.map(_v0 => _v0.email === _v0 ? {
                  ..._v0,
                  isEmailValid: !1
                } : _v0));
              } else _v18(_v32.TOAST_OOPS);
              _v16(!1);
            }
          }
        }, [_v13, _v21]),
        _v45 = !_v15 && _v13.every(_v0 => _v0.isEmailValid) && _v25 > 0 && (() => {
          if (!_v11) return !0;
          let _v0 = !0;
          return _v13.map(_v0 => {
            "" != _v0.email && _v0.role == _v32.SelectRole && (_v0 = !1);
          }), _v0;
        })();
      return _v33 ? (0, _v4.jsx)(_v31, {}) : (0, _v4.jsx)(_v51, {
        description: _v36 ? (0, _v4.jsxs)(_v4.Fragment, {
          children: [`${_v35 ? (0, _v34.translate)({
            singular: "Your Free Trial plan allows you to invite up to 5 Admins and Contributors and up to 5 Viewers.",
            dictionary: {
              es: {
                singular: "El plan de tu prueba gratuita te permite invitar hasta 5 administradores y colaboradores y hasta 5 espectadores."
              },
              "de-DE": {
                singular: "Im Rahmen deines kostenlosen Probeabos kannst du bis zu 5 Admins und Mitwirkende sowie bis zu 5 Betrachter einladen."
              },
              "fr-FR": {
                singular: "Votre essai gratuit vous permet d'ajouter jusqu'à 5 Administrateurs et Contributeurs, de même qu'un maximum de 5 Spectateurs."
              },
              "ja-JP": {
                singular: "無料トライアルプランでは、管理者および投稿者を最大5人まで、および視聴者を最大5人まで招待できます。"
              },
              "ko-KR": {
                singular: "무료 평가판 요금제를 사용하면 최대 5명의 관리자 및 기여자와 최대 5명의 시청자를 초대할 수 있습니다."
              },
              "pt-BR": {
                singular: "Seu teste gratuito permite que você convide até 5 administradores e colaboradores e até 5 espectadores."
              },
              "zh-CN": {
                singular: "Free Trial 套餐允许您邀请最多 5 名管理员和贡献者，以及最多 5 名观众。"
              }
            }
          }) : (0, _v34.translate)({
            singular: "Purchase additional seats to invite Admins and Contributors. Or invite Viewers for free.",
            dictionary: {
              es: {
                singular: "Compra puestos adicionales para invitar a administradores y colaboradores. O invita a espectadores sin cargo."
              },
              "de-DE": {
                singular: "Kaufe zusätzliche Lizenzen, um Admins oder Mitwirkende einzuladen. Oder lade Betrachter kostenlos ein."
              },
              "fr-FR": {
                singular: "Achetez d'autres licences pour inviter des Administrateurs ou des Contributeurs. Sinon, invitez gratuitement des Spectateurs."
              },
              "ja-JP": {
                singular: "管理者および投稿者を招待するには、シートライセンスを追加で購入してください。または、視聴者を無料で招待してください。"
              },
              "ko-KR": {
                singular: "관리자와 기여자를 초대하려면 추가 시트를 구매하세요. 또는 무료로 뷰어를 초대하세요."
              },
              "pt-BR": {
                singular: "Compre mais licenças para convidar administradores e colaboradores. Ou convide espectadores gratuitamente."
              },
              "zh-CN": {
                singular: "购买额外席位以邀请管理员和贡献者。或免费邀请观众。"
              }
            }
          })} `, (0, _v4.jsx)(_v144, {
            format: "soft",
            href: "https://vimeo.zendesk.com/hc/en-us/articles/8550140484877-Manage-the-number-of-seats-on-your-Vimeo-account",
            target: "_blank",
            children: (0, _v34.translate)({
              singular: "Learn more about seats.",
              dictionary: {
                es: {
                  singular: "Obtén más información sobre los puestos."
                },
                "de-DE": {
                  singular: "Erfahre mehr über Plätze."
                },
                "fr-FR": {
                  singular: "En savoir plus sur les licences"
                },
                "ja-JP": {
                  singular: "シートライセンスについての詳細を見る。"
                },
                "ko-KR": {
                  singular: "사용자 라이선스에 관해 자세히 알아보세요."
                },
                "pt-BR": {
                  singular: "Saiba mais sobre as licenças."
                },
                "zh-CN": {
                  singular: "了解有关席位的更多信息。"
                }
              }
            })
          })]
        }) : _v11 ? (0, _v34.translate)({
          singular: "Team members can view and comment on videos you share",
          dictionary: {
            es: {
              singular: "Los miembros de equipo pueden ver y comentar los videos que compartes"
            },
            "de-DE": {
              singular: "Teammitglieder können Videos, die du teilst, anzeigen und kommentieren"
            },
            "fr-FR": {
              singular: "Les collaborateurs peuvent voir et commenter les vidéos que vous partagez"
            },
            "ja-JP": {
              singular: "チームメンバーはあなたが共有した動画を視聴してコメントできます。"
            },
            "ko-KR": {
              singular: "팀원은 내가 공유한 동영상을 시청하고 댓글을 남길 수 있습니다."
            },
            "pt-BR": {
              singular: "Os integrantes da equipe podem ver e comentar os vídeos que você compartilha"
            },
            "zh-CN": {
              singular: "团队成员可以观看和评论您分享的视频"
            }
          }
        }) : (0, _v34.translate)({
          singular: "Add your collaborators to unlock the power of video",
          dictionary: {
            es: {
              singular: "Agrega colaboradores para acceder al poder del video"
            },
            "de-DE": {
              singular: "Füge deine Mitbearbeiter hinzu, um das Potenzial von Video zu erschließen"
            },
            "fr-FR": {
              singular: "Ajoutez vos collaborateurs pour qu'ils puissent eux aussi exploiter la puissance de la vidéo"
            },
            "ja-JP": {
              singular: "コラボレーターを追加して動画のパワーを解禁しましょう"
            },
            "ko-KR": {
              singular: "공동 작업자를 추가하여 동영상의 힘을 강화하세요."
            },
            "pt-BR": {
              singular: "Adicione seus colaboradores para conhecerem o poder do vídeo"
            },
            "zh-CN": {
              singular: "添加合作者，释放视频的力量"
            }
          }
        }),
        title: _v36 ? (0, _v34.translate)({
          singular: "Invite your team members",
          dictionary: {
            es: {
              singular: "Invita a los miembros de tu equipo"
            },
            "de-DE": {
              singular: "Lade deine Teammitglieder ein"
            },
            "fr-FR": {
              singular: "Invitez les membres de votre équipe"
            },
            "ja-JP": {
              singular: "チームメンバーを招待"
            },
            "ko-KR": {
              singular: "팀원을 초대하세요."
            },
            "pt-BR": {
              singular: "Convide os integrantes da sua equipe"
            },
            "zh-CN": {
              singular: "邀请团队成员"
            }
          }
        }) : (0, _v34.translate)({
          singular: "Add team members for free",
          dictionary: {
            es: {
              singular: "Agrega miembros de equipo gratis"
            },
            "de-DE": {
              singular: "Kostenlos Teammitglieder hinzufügen"
            },
            "fr-FR": {
              singular: "Ajoutez gratuitement des collaborateurs"
            },
            "ja-JP": {
              singular: "チームメンバーを無料で追加"
            },
            "ko-KR": {
              singular: "무료로 팀원을 추가하세요."
            },
            "pt-BR": {
              singular: "Adicionar integrantes da equipe gratuitamente"
            },
            "zh-CN": {
              singular: "免费添加团队成员"
            }
          }
        }),
        nextButton: (0, _v4.jsx)(_v102, {
          isDisabled: !_v45,
          isSubmitting: _v15,
          onClick: () => {
            _v39(_v13) ? _v24(!0) : _v44();
          },
          label: (0, _v34.translate)({
            singular: "Invite",
            dictionary: {
              es: {
                singular: "Invitar"
              },
              "de-DE": {
                singular: "Einladen"
              },
              "fr-FR": {
                singular: "Inviter"
              },
              "ja-JP": {
                singular: "招待"
              },
              "ko-KR": {
                singular: "초대"
              },
              "pt-BR": {
                singular: "Convidar"
              },
              "zh-CN": {
                singular: "邀请"
              }
            }
          })
        }),
        children: (0, _v4.jsxs)(_v135, {
          children: [_v19 && (0, _v4.jsx)(_v114.Notice, {
            format: "negative",
            onClose: () => {
              _v20("");
            },
            children: (0, _v4.jsx)(_v39.Paragraph, {
              size: "2",
              children: _v19
            })
          }), (0, _v4.jsx)(_v136, {
            children: (0, _v4.jsxs)(_v137, {
              children: [_v13.map((_v0, _v1) => {
                let _v2, _v3;
                return (0, _v4.jsxs)(_v140, {
                  children: [(0, _v4.jsx)(_v105.Input, {
                    autoComplete: "off",
                    autoFocus: 0 === _v1,
                    defaultValue: _v0.email,
                    id: `emailInput_${_v1}`,
                    label: null,
                    messages: {
                      error: (0, _v32.isOwnerEmail)(_v0.email) ? (0, _v34.translate)({
                        singular: "You're already part of the team. Try a different email.",
                        dictionary: {
                          es: {
                            singular: "Ya formas parte del equipo. Prueba con otro correo electrónico."
                          },
                          "de-DE": {
                            singular: "Du bist bereits Mitglied dieses Teams. Versuche es mit einer anderen E-Mail-Adresse."
                          },
                          "fr-FR": {
                            singular: "Vous faites déjà partie de l'équipe. Essayez avec une autre adresse e-mail."
                          },
                          "ja-JP": {
                            singular: "すでにチームメンバーになっています。違うメールアドレスでお試しください。"
                          },
                          "ko-KR": {
                            singular: "이미 팀원으로 속해 있습니다. 다른 이메일로 시도하세요."
                          },
                          "pt-BR": {
                            singular: "Você já faz parte da equipe. Tente um e-mail diferente."
                          },
                          "zh-CN": {
                            singular: "您已经是团队的一员了。尝试其他电子邮件。"
                          }
                        }
                      }) : (0, _v34.translate)({
                        singular: "Please enter a valid email address.",
                        dictionary: {
                          es: {
                            singular: "Introduce una dirección de correo electrónico válida."
                          },
                          "de-DE": {
                            singular: "Bitte gib eine gültige E-Mail-Adresse an."
                          },
                          "fr-FR": {
                            singular: "Veuillez saisir une adresse e-mail valide."
                          },
                          "ja-JP": {
                            singular: "有効な E メールアドレスを入力してください。"
                          },
                          "ko-KR": {
                            singular: "올바른 이메일 주소를 입력하세요."
                          },
                          "pt-BR": {
                            singular: "Digite um endereço de e-mail válido."
                          },
                          "zh-CN": {
                            singular: "请输入有效的电子邮件地址。"
                          }
                        }
                      })
                    },
                    name: `EmailInput_${_v1}`,
                    onChange: _v0 => {
                      _v14([..._v13.slice(0, _v1), {
                        ..._v13[_v1],
                        email: _v0.target.value,
                        isEmailValid: !(0, _v32.isOwnerEmail)(_v0.target.value)
                      }, ..._v13.slice(_v1 + 1)]);
                    },
                    placeholder: (0, _v34.translate)({
                      singular: "Email address",
                      dictionary: {
                        es: {
                          singular: "Correo electrónico"
                        },
                        "de-DE": {
                          singular: "E-Mail-Adresse"
                        },
                        "fr-FR": {
                          singular: "Adresse e-mail"
                        },
                        "ja-JP": {
                          singular: "メールアドレス"
                        },
                        "ko-KR": {
                          singular: "이메일 주소"
                        },
                        "pt-BR": {
                          singular: "Endereço de e-mail"
                        },
                        "zh-CN": {
                          singular: "电子邮件地址"
                        }
                      }
                    }),
                    size: "xl",
                    status: _v0.isEmailValid ? "neutral" : "negative",
                    type: "email",
                    variant: "underline"
                  }), (0, _v4.jsx)(_v141, {
                    children: (0, _v4.jsx)(_v120.default, {
                      format: "alternative",
                      variant: "minimalTransparent",
                      selectedRole: {
                        label: _v132[_v0.role],
                        value: _v0.role === _v32.SelectRole ? "" : _v0.role
                      },
                      permissionLevels: (_v2 = [{
                        label: (0, _v34.translate)({
                          singular: "Viewer",
                          dictionary: {
                            es: {
                              singular: "Espectador(a)"
                            },
                            "de-DE": {
                              singular: "Zuschauende"
                            },
                            "fr-FR": {
                              singular: "Spectateur"
                            },
                            "ja-JP": {
                              singular: "閲覧者"
                            },
                            "ko-KR": {
                              singular: "뷰어"
                            },
                            "pt-BR": {
                              singular: "Espectador"
                            },
                            "zh-CN": {
                              singular: "观众"
                            }
                          }
                        }),
                        value: "Viewer"
                      }, {
                        label: (0, _v34.translate)({
                          singular: "Contributor",
                          dictionary: {
                            es: {
                              singular: "Colaborador(a)"
                            },
                            "de-DE": {
                              singular: "Beitragender"
                            },
                            "fr-FR": {
                              singular: "Contributeur"
                            },
                            "ja-JP": {
                              singular: "投稿者"
                            },
                            "ko-KR": {
                              singular: "기여자"
                            },
                            "pt-BR": {
                              singular: "Colaborador"
                            },
                            "zh-CN": {
                              singular: "贡献者"
                            }
                          }
                        }),
                        value: "Contributor"
                      }, {
                        label: (0, _v34.translate)({
                          singular: "Admin",
                          dictionary: {
                            es: {
                              singular: "Administrador(a)"
                            },
                            "fr-FR": {
                              singular: "Administrateur"
                            },
                            "ja-JP": {
                              singular: "管理者"
                            },
                            "ko-KR": {
                              singular: "관리자"
                            },
                            "pt-BR": {
                              singular: "Administrador"
                            },
                            "zh-CN": {
                              singular: "管理员"
                            }
                          }
                        }),
                        value: "Admin"
                      }], _v36 || !_v11 ? _v2 : [_v2[0]]),
                      permissionLevelDescriptions: (_v3 = [{
                        label: (0, _v34.translate)({
                          singular: "Viewer",
                          dictionary: {
                            es: {
                              singular: "Espectador(a)"
                            },
                            "de-DE": {
                              singular: "Zuschauende"
                            },
                            "fr-FR": {
                              singular: "Spectateur"
                            },
                            "ja-JP": {
                              singular: "閲覧者"
                            },
                            "ko-KR": {
                              singular: "뷰어"
                            },
                            "pt-BR": {
                              singular: "Espectador"
                            },
                            "zh-CN": {
                              singular: "观众"
                            }
                          }
                        }),
                        description: (0, _v34.translate)({
                          singular: "Can view and comment on videos inside folders they’re invited to join.",
                          dictionary: {
                            es: {
                              singular: "Puede ver y comentar videos dentro de las carpetas a las que se lo invitó a unirse."
                            },
                            "de-DE": {
                              singular: "Können Videos in Ordnern, zu denen sie eingeladen wurden, ansehen und kommentieren."
                            },
                            "fr-FR": {
                              singular: "Peuvent voir et commenter les vidéos dans les dossiers auxquels ils ont été invités à accéder."
                            },
                            "ja-JP": {
                              singular: "招待されたフォルダー内の動画を視聴し、コメントすることができます。"
                            },
                            "ko-KR": {
                              singular: "초대받은 폴더 내 동영상 시청 및 댓글 달기에 참여할 수 있습니다."
                            },
                            "pt-BR": {
                              singular: "Pode ver e comentar vídeos nas pastas para as quais recebeu convite."
                            },
                            "zh-CN": {
                              singular: "可以在受邀加入的文件夹内观看和评论视频。"
                            }
                          }
                        })
                      }, {
                        label: (0, _v34.translate)({
                          singular: "Contributor",
                          dictionary: {
                            es: {
                              singular: "Colaborador(a)"
                            },
                            "de-DE": {
                              singular: "Beitragender"
                            },
                            "fr-FR": {
                              singular: "Contributeur"
                            },
                            "ja-JP": {
                              singular: "投稿者"
                            },
                            "ko-KR": {
                              singular: "기여자"
                            },
                            "pt-BR": {
                              singular: "Colaborador"
                            },
                            "zh-CN": {
                              singular: "贡献者"
                            }
                          }
                        }),
                        description: (0, _v34.translate)({
                          singular: "Can view, comment, upload, edit, share videos, and view clip analytics inside folders they’re invited to join.",
                          dictionary: {
                            es: {
                              singular: "Puede ver, comentar, subir, editar, compartir videos y ver los análisis de los clips dentro de las carpetas a las que se lo invitó a unirse."
                            },
                            "de-DE": {
                              singular: "Können Clip-Analysen in Ordnern, zu denen sie eingeladen wurden, ansehen, kommentieren, hochladen, bearbeiten sowie Videos teilen."
                            },
                            "fr-FR": {
                              singular: "Peuvent voir, commenter, mettre en ligne, modifier et partager des vidéos, ainsi que consulter les analyses de clips dans les dossiers auxquels ils ont été invités à accéder."
                            },
                            "ja-JP": {
                              singular: "招待されたフォルダー内の動画を視聴、コメント、アップロード、編集、共有でき、クリップ分析を表示できます。"
                            },
                            "ko-KR": {
                              singular: "초대받은 폴더 내 동영상 시청, 댓글 달기, 업로드, 편집, 동영상 공유, 클립 분석 보기에 참여할 수 있습니다."
                            },
                            "pt-BR": {
                              singular: "Pode ver, comentar, carregar, editar, compartilhar vídeos e ver análises de clipe nas pastas para as quais recebeu convite."
                            },
                            "zh-CN": {
                              singular: "可以在受邀加入的文件夹内观看、评论、上传、编辑和分享视频，查看剪辑分析。"
                            }
                          }
                        })
                      }, {
                        label: (0, _v34.translate)({
                          singular: "Contributor Plus",
                          dictionary: {
                            es: {
                              singular: "Colaborador Plus"
                            },
                            "de-DE": {
                              singular: "Beitragender Plus"
                            },
                            "fr-FR": {
                              singular: "Contributeur Plus"
                            },
                            "ja-JP": {
                              singular: "投稿者プラス"
                            },
                            "ko-KR": {
                              singular: "기여자 플러스"
                            },
                            "pt-BR": {
                              singular: "Colaborador Plus"
                            }
                          }
                        }),
                        description: (0, _v34.translate)({
                          singular: "Can view, comment, upload, edit, share videos, view clip analytics, and more, inside folders they’re invited to join.",
                          dictionary: {
                            es: {
                              singular: "Puede ver, comentar, subir, editar, compartir videos, ver los análisis de los clips y más dentro de las carpetas a las que se lo invitó a unirse."
                            },
                            "de-DE": {
                              singular: "Können in Ordnern, zu denen sie eingeladen wurden, Clip-Analysen aufrufen sowie Videos ansehen, kommentieren, hochladen, bearbeiten und teilen."
                            },
                            "fr-FR": {
                              singular: "Peuvent voir, commenter, mettre en ligne, modifier, partager des vidéos, consulter les analyses de clips, et bien plus encore, dans les dossiers auxquels ils ont été invités à accéder."
                            },
                            "ja-JP": {
                              singular: "招待されたフォルダー内で、動画を視聴、コメント、アップロード、編集、共有したり、クリップ分析を表示したりすることができます。"
                            },
                            "ko-KR": {
                              singular: "참석 초대를 받은 폴더 내 동영상에 대한 시청, 댓글 달기, 업로드, 편집, 공유, 클립 분석 보기 등이 가능합니다."
                            },
                            "pt-BR": {
                              singular: "Pode ver, comentar, carregar, editar, compartilhar vídeos, ver análises de clipe e muito mais nas pastas para as quais recebeu convite."
                            },
                            "zh-CN": {
                              singular: "可在受邀加入的文件夹内查看、评论、上传、编辑、分享视频，查看剪辑分析等。"
                            }
                          }
                        })
                      }, {
                        label: (0, _v34.translate)({
                          singular: "Admin",
                          dictionary: {
                            es: {
                              singular: "Administrador(a)"
                            },
                            "fr-FR": {
                              singular: "Administrateur"
                            },
                            "ja-JP": {
                              singular: "管理者"
                            },
                            "ko-KR": {
                              singular: "관리자"
                            },
                            "pt-BR": {
                              singular: "Administrador"
                            },
                            "zh-CN": {
                              singular: "管理员"
                            }
                          }
                        }),
                        description: (0, _v34.translate)({
                          singular: "Can view and manage all videos, folders, people, and analytics on the account.",
                          dictionary: {
                            es: {
                              singular: "Puede ver y gestionar todos los videos, carpetas, gente y análisis de la cuenta."
                            },
                            "de-DE": {
                              singular: "Kann alle Videos, Ordner, Personen und Analysen des Kontos anzeigen und verwalten."
                            },
                            "fr-FR": {
                              singular: "Peuvent voir et gérer toutes les vidéos, tous les dossiers, tous les utilisateurs et toutes les analyses sur le compte."
                            },
                            "ja-JP": {
                              singular: "アカウント上のすべての動画、フォルダー、ユーザー、分析を表示および管理できます。"
                            },
                            "ko-KR": {
                              singular: "계정의 모든 동영상, 폴더, 사람, 분석을 보고 관리할 수 있습니다."
                            },
                            "pt-BR": {
                              singular: "Pode ver e gerenciar todos os vídeos, pastas, pessoas e análises da conta."
                            },
                            "zh-CN": {
                              singular: "可以查看和管理帐户上的所有视频、文件夹、人员和分析。"
                            }
                          }
                        })
                      }], _v36 || !_v11 ? _v3 : [_v3[0]]),
                      onSelect: _v0 => {
                        _v14([..._v13.slice(0, _v1), {
                          ..._v13[_v1],
                          role: _v61.TeamUserPermissionLevel[_v0.value]
                        }, ..._v13.slice(_v1 + 1)]), (0, _v26.trackTeamRoleChange)(_v0.role, _v0.value, _v10.id);
                      },
                      onDelete: void 0,
                      isMobile: !1,
                      deleteButtonText: "",
                      isPending: !1,
                      positionAbove: !1,
                      roleMenuType: _v38(),
                      additionalRoleMenuData: _v34
                    })
                  })]
                });
              }), !_v30 && _v31 && (0, _v4.jsx)(_v143, {
                children: (0, _v4.jsx)(_v131, {
                  accentColor: _v6.accentColor,
                  invitationsOutstanding: (_v35 ? _v32.MAX_INVITE_COUNT : _v9) - _v25,
                  isSingleSeatOnboarding: _v11,
                  isTrialPlan: _v35
                })
              }), (0, _v4.jsxs)(_v138, {
                children: [_v30 && (0, _v4.jsx)(_v139, {
                  icon: (0, _v4.jsx)(_v116, {}),
                  format: "basic",
                  onClick: () => {
                    try {
                      _v13.BigPictureClient.sendEvent(new _v13.Event("onboarding.click_add_more_members", 1, {
                        product: "Onboarding",
                        path: window.parent.location.pathname,
                        location: "onboarding"
                      }));
                    } catch (_v0) {
                      console.error(_v0);
                    }
                    _v14(_v0 => [..._v0, (0, _v32.emptyInvite)(_v11, _v36)]);
                  },
                  variant: "minimalTransparent",
                  children: _v36 ? (0, _v34.translate)({
                    singular: "Add more members",
                    dictionary: {
                      es: {
                        singular: "Agregar más colaboradores"
                      },
                      "de-DE": {
                        singular: "Weitere Teammitglieder hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter d'autres membres"
                      },
                      "ja-JP": {
                        singular: "メンバーをさらに追加"
                      },
                      "ko-KR": {
                        singular: "팀원 더 추가하기"
                      },
                      "pt-BR": {
                        singular: "Adicionar mais colaboradores"
                      },
                      "zh-CN": {
                        singular: "增加更多成员"
                      }
                    }
                  }) : (0, _v34.translate)({
                    singular: "Invite more members",
                    dictionary: {
                      es: {
                        singular: "Invita a más miembros"
                      },
                      "de-DE": {
                        singular: "Mehr Mitglieder einladen"
                      },
                      "fr-FR": {
                        singular: "Inviter plus de membres"
                      },
                      "ja-JP": {
                        singular: "メンバーをさらに招待する"
                      },
                      "ko-KR": {
                        singular: "더 많은 인원 초대"
                      },
                      "pt-BR": {
                        singular: "Convide mais assinantes"
                      },
                      "zh-CN": {
                        singular: "邀请更多成员"
                      }
                    }
                  })
                }), !(_v29 >= _v32.MAX_INVITE_COUNT && _v31) && (0, _v4.jsx)(_v142, {
                  children: (0, _v4.jsx)(_v128, {
                    isSingleSeatOnboarding: _v11,
                    invitationsOutstanding: _v11 && _v35 ? _v32.MAX_INVITE_COUNT - _v25 : _v9 - _v25,
                    tip: (_v0 = _v9 - _v25, _v1 = _v25, _v2 = _v9, _v3 = _v11, _v4 = _v35, _v5 = _v36, 0 === _v0 ? _v3 ? (0, _v34.translate)({
                      singular: "To invite more people or purchase Admin and Contributor seats, visit the team management page.",
                      dictionary: {
                        es: {
                          singular: "Para invitar a más gente o comprar puestos de administrador y colaborador, visita la página de gestión de equipos."
                        },
                        "de-DE": {
                          singular: "Wenn du mehr Personen einladen oder Administrator- und Mitwirkendenlizenzen erwerben möchtest, gehe zur Teamverwaltungsseite."
                        },
                        "fr-FR": {
                          singular: "Pour inviter plus de personnes ou acheter des licences Administrateur et Contributeur, rendez-vous sur la page de gestion de l'équipe."
                        },
                        "ja-JP": {
                          singular: "招待枠を増やす、あるいは管理者および投稿者のシートライセンスを購入するには、チーム管理ページにアクセスしてください。"
                        },
                        "ko-KR": {
                          singular: "초대 인원을 늘리거나 관리자, 기여자 라이선스를 구매하려면 팀 관리 페이지를 방문하세요."
                        },
                        "pt-BR": {
                          singular: "Para convidar mais pessoas ou comprar licenças de administrador e colaborador, acesse a página de gerenciamento de equipe."
                        },
                        "zh-CN": {
                          singular: "要邀请更多人或购买管理员和贡献者席位，请访问团队管理页面。"
                        }
                      }
                    }) : (0, _v34.translate)({
                      singular: "To invite more people visit the team management page to purchase additional seats or invite viewers for free.",
                      dictionary: {
                        es: {
                          singular: "Para invitar a más personas, visita la página de gestión de equipos y adquiere puestos adicionales o invita a espectadores sin cargo."
                        },
                        "de-DE": {
                          singular: "Wenn du weitere Personen einladen möchtest, kannst du auf der Seite für die Teamverwaltung zusätzliche Einzellizenzen erwerben oder Betrachter kostenlos einladen."
                        },
                        "fr-FR": {
                          singular: "Pour inviter plus de personnes, rendez-vous sur la page de gestion de l'équipe pour acheter des licences supplémentaires ou inviter des spectateurs gratuitement."
                        },
                        "ja-JP": {
                          singular: "さらに多くのユーザーを招待するには、チーム管理ページにアクセスして追加のシートライセンスを購入するか、閲覧者として無料で招待してください。"
                        },
                        "ko-KR": {
                          singular: "초대 인원을 늘리려면 팀 관리 페이지로 이동하여 사용자 라이선스를 추가 구매하거나 무료로 뷰어를 초대하세요."
                        },
                        "pt-BR": {
                          singular: "Para convidar mais pessoas, visite a página de gerenciamento de equipes para comprar assentos adicionais ou convidar espectadores gratuitamente."
                        },
                        "zh-CN": {
                          singular: "要邀请更多人，请访问团队管理页面购买额外席位或免费邀请观众。"
                        }
                      }
                    }) : _v5 ? _v4 ? (0, _v34.translate)({
                      singular: "You can invite up to {COUNT} people on your free trial. To invite more people, upgrade to a paid plan.",
                      replacements: {
                        COUNT: _v32.MAX_INVITE_COUNT
                      },
                      dictionary: {
                        es: {
                          singular: "Puedes invitar hasta {COUNT} personas a tu prueba gratuita. Para invitar a más personas, actualiza a un plan de pago."
                        },
                        "de-DE": {
                          singular: "Du kannst bis zu {COUNT} Personen im Rahmen deines kostenlosen Probeabos einladen. Mit einem Upgrade auf einen kostenpflichtigen Tarif kannst du weitere Personen einladen."
                        },
                        "fr-FR": {
                          singular: "Vous pouvez inviter jusqu'à {COUNT} personnes avec votre essai gratuit. Pour inviter plus de personnes, passez à un abonnement payant."
                        },
                        "ja-JP": {
                          singular: "無料トライアルでは最大{COUNT}人まで招待できます。さらに多くのユーザーを招待するには、有料プランにアップグレードしてください。"
                        },
                        "ko-KR": {
                          singular: "무료 평가판에서 최대 {COUNT}명을 초대할 수 있습니다. 더 많은 사람을 초대하려면 유료 요금제로 업그레이드하세요."
                        },
                        "pt-BR": {
                          singular: "Você pode convidar até {COUNT} pessoas com seu teste gratuito. Para convidar mais pessoas, faça upgrade para um plano pago."
                        },
                        "zh-CN": {
                          singular: "您最多可以邀请 {COUNT} 人免费试用。要邀请更多人，请升级到付费套餐。"
                        }
                      }
                    }) : (0, _v34.translate)({
                      singular: "You can invite up to {COUNT} people on this page. To invite more people, visit the team management page.",
                      replacements: {
                        COUNT: _v32.MAX_INVITE_COUNT
                      },
                      dictionary: {
                        es: {
                          singular: "Puedes invitar hasta {COUNT} personas en esta página. Para invitar a más personas, visita la página de gestión de equipos."
                        },
                        "de-DE": {
                          singular: "Du kannst bis zu {COUNT} Personen auf dieser Seite einladen. Besuche die Seite für die Teamverwaltung, um weitere Personen einzuladen."
                        },
                        "fr-FR": {
                          singular: "Vous pouvez inviter jusqu'à {COUNT} personnes sur cette page. Pour inviter plus de personnes, rendez-vous sur la page de gestion de l'équipe."
                        },
                        "ja-JP": {
                          singular: "このページでは最大{COUNT}人まで招待できます。さらに多くのユーザーを招待するには、チーム管理ページにアクセスしてください。"
                        },
                        "ko-KR": {
                          singular: "이 페이지에서 최대 {COUNT}명을 초대할 수 있습니다. 더 많은 사람을 초대하려면 팀 관리 페이지로 이동하세요."
                        },
                        "pt-BR": {
                          singular: "Você pode convidar até {COUNT} pessoas nesta página. Para convidar mais pessoas, visite a página de gerenciamento de equipe."
                        },
                        "zh-CN": {
                          singular: "您在此页面最多可以邀请 {COUNT} 人。要邀请更多人，请访问团队管理页面。"
                        }
                      }
                    }) : _v2 >= _v32.MAX_INVITE_COUNT ? _v3 ? (0, _v34.translate)({
                      singular: "You can invite up to {REMAINING_INVITES} other person now. To invite more or purchase Admin and Contributor seats, visit the team management page.",
                      plural: "You can invite up to {REMAINING_INVITES} people. To invite more or purchase Admin and Contributor seats, visit the team management page.",
                      count: _v32.MAX_INVITE_COUNT - _v1,
                      replacements: {
                        REMAINING_INVITES: _v32.MAX_INVITE_COUNT - _v1
                      },
                      dictionary: {
                        es: {
                          singular: "Ahora puedes invitar hasta {REMAINING_INVITES} personas más. Para invitar a más personas o comprar puestos de administrador o colaborador, visita la página de gestión de equipos.",
                          plural: "Puedes invitar hasta {REMAINING_INVITES} personas. Para invitar a más personas o comprar puestos de administrador o colaborador, visita la página de gestión de equipos."
                        },
                        "de-DE": {
                          singular: "Du kannst nun bis zu {REMAINING_INVITES} weitere Person einladen. Wenn du mehr Personen einladen oder Administrator- und Mitwirkendenlizenzen erwerben möchtest, gehe zur Teamverwaltungsseite.",
                          plural: "Du kannst bis zu {REMAINING_INVITES} Personen einladen. Wenn du mehr Personen einladen oder Administrator- und Mitwirkendenlizenzen erwerben möchtest, gehe zur Teamverwaltungsseite."
                        },
                        "fr-FR": {
                          singular: "Vous pouvez inviter jusqu'à {REMAINING_INVITES} personnes supplémentaires. Pour en inviter plus ou acheter des licences Administrateur et Contributeur, rendez-vous sur la page de gestion de l'équipe.",
                          plural: "Vous pouvez inviter jusqu'à {REMAINING_INVITES} personnes. Pour en inviter plus ou acheter des licences Administrateur et Contributeur, rendez-vous sur la page de gestion de l'équipe."
                        },
                        "ja-JP": {
                          singular: "現在、最大 {REMAINING_INVITES}人まで招待できます。招待枠を増やす、あるいは管理者および投稿者のシートライセンスを購入するには、チーム管理ページにアクセスしてください。",
                          plural: "最大 {REMAINING_INVITES}人まで招待できます。招待枠を増やす、あるいは管理者および投稿者のシートライセンスを購入するには、チーム管理ページにアクセスしてください。"
                        },
                        "ko-KR": {
                          singular: "이제 {REMAINING_INVITES}명 더 초대할 수 있습니다. 초대 인원을 늘리거나 관리자, 기여자 라이선스를 구매하려면 팀 관리 페이지를 방문하세요.",
                          plural: "이제 {REMAINING_INVITES}명 더 초대할 수 있습니다. 초대 인원을 늘리거나 관리자, 기여자 라이선스를 구매하려면 팀 관리 페이지를 방문하세요."
                        },
                        "pt-BR": {
                          singular: "Agora você pode convidar até mais {REMAINING_INVITES} pessoa. Para convidar mais pessoas ou comprar licenças de administrador e colaborador, acesse a página de gerenciamento de equipe.",
                          plural: "Você pode convidar até {REMAINING_INVITES} pessoas. Para convidar mais pessoas ou comprar licenças de administrador e colaborador, acesse a página de gerenciamento de equipe."
                        },
                        "zh-CN": {
                          singular: "现在您最多可以邀请其他 {REMAINING_INVITES} 人。要邀请更多人或购买管理员和贡献者席位，请访问团队管理页面。",
                          plural: "您最多可以邀请 {REMAINING_INVITES} 人。要邀请更多人或购买管理员和贡献者席位，请访问团队管理页面。"
                        }
                      }
                    }) : (0, _v34.translate)({
                      singular: "You can invite up to {REMAINING_INVITES} other person. To invite more, visit the team management page to purchase additional seats or invite viewers for free.",
                      plural: "You can invite up to {REMAINING_INVITES} people. To invite more, visit the team management page to purchase additional seats or invite viewers for free.",
                      count: _v32.MAX_INVITE_COUNT - _v1,
                      replacements: {
                        REMAINING_INVITES: _v32.MAX_INVITE_COUNT - _v1
                      },
                      dictionary: {
                        es: {
                          singular: "Puedes invitar a {REMAINING_INVITES} personas más. Para invitar a más personas, visita la página de gestión de equipos y adquiere puestos adicionales o invita a espectadores sin cargo.",
                          plural: "Puedes invitar hasta {REMAINING_INVITES} personas. Para invitar a más personas, visita la página de gestión de equipos para adquirir puestos adicionales o invitar a espectadores sin cargo."
                        },
                        "de-DE": {
                          singular: "Du kannst bis zu {REMAINING_INVITES} weitere(n) Person(en) einladen. Wenn du weitere Personen einladen möchtest, kannst du auf der Seite für die Teamverwaltung zusätzliche Einzellizenzen erwerben oder Betrachter kostenlos einladen.",
                          plural: "Du kannst bis zu {REMAINING_INVITES} Personen einladen. Wenn du weitere Personen einladen möchtest, kannst du auf der Seite für die Teamverwaltung zusätzliche Einzellizenzen erwerben oder Betrachter kostenlos einladen."
                        },
                        "fr-FR": {
                          singular: "Vous pouvez inviter jusqu'à {REMAINING_INVITES} autres personnes. Pour en inviter davantage, rendez-vous sur la page de gestion de l'équipe pour acheter des licences supplémentaires ou inviter des spectateurs gratuitement.",
                          plural: "Vous pouvez inviter jusqu'à {REMAINING_INVITES} personnes. Pour en inviter davantage, rendez-vous sur la page de gestion de l'équipe pour acheter des licences supplémentaires ou inviter des spectateurs gratuitement."
                        },
                        "ja-JP": {
                          singular: "最大{REMAINING_INVITES}人まで招待できます。さらに招待するには、チーム管理ページにアクセスして追加のシートライセンスを購入するか、閲覧者として無料で招待してください。",
                          plural: "最大{REMAINING_INVITES}人を招待できます。さらに招待するには、チーム管理ページにアクセスして追加のシートライセンスを購入するか、閲覧者として無料で招待してください。"
                        },
                        "ko-KR": {
                          singular: "최대 {REMAINING_INVITES}명을 초대할 수 있습니다. 초대 인원을 늘리려면 팀 관리 페이지로 이동하여 사용자 라이선스를 추가 구매하거나 무료로 뷰어를 초대하세요.",
                          plural: "최대 {REMAINING_INVITES}명을 초대할 수 있습니다. 초대 인원을 늘리려면 팀 관리 페이지로 이동하여 사용자 라이선스를 추가 구매하거나 무료로 뷰어를 초대하세요."
                        },
                        "pt-BR": {
                          singular: "Você pode convidar até mais {REMAINING_INVITES} pessoa. Visite a página de gerenciamento de equipe para comprar mais licenças ou convidar espectadores gratuitamente.",
                          plural: "Você pode convidar até {REMAINING_INVITES} pessoas. Visite a página de gerenciamento de equipe para comprar mais licenças ou convide espectadores gratuitamente."
                        },
                        "zh-CN": {
                          singular: "您最多可以邀请其他 {REMAINING_INVITES} 人。要邀请更多人，请访问团队管理页面购买额外席位或免费邀请观众。",
                          plural: "您最多可以邀请 {REMAINING_INVITES} 人。要邀请更多人，请访问团队管理页面购买额外席位或免费邀请观众。"
                        }
                      }
                    }) : _v3 ? (0, _v34.translate)({
                      singular: "You can invite up to {REMAINING_INVITES} other person now. To invite more or purchase Admin and Contributor seats, visit the team management page.",
                      plural: "You can invite up to {REMAINING_INVITES} people. To invite more or purchase Admin and Contributor seats, visit the team management page.",
                      count: _v2 - _v1,
                      replacements: {
                        REMAINING_INVITES: _v2 - _v1
                      },
                      dictionary: {
                        es: {
                          singular: "Ahora puedes invitar hasta {REMAINING_INVITES} personas más. Para invitar a más personas o comprar puestos de administrador o colaborador, visita la página de gestión de equipos.",
                          plural: "Puedes invitar hasta {REMAINING_INVITES} personas. Para invitar a más personas o comprar puestos de administrador o colaborador, visita la página de gestión de equipos."
                        },
                        "de-DE": {
                          singular: "Du kannst nun bis zu {REMAINING_INVITES} weitere Person einladen. Wenn du mehr Personen einladen oder Administrator- und Mitwirkendenlizenzen erwerben möchtest, gehe zur Teamverwaltungsseite.",
                          plural: "Du kannst bis zu {REMAINING_INVITES} Personen einladen. Wenn du mehr Personen einladen oder Administrator- und Mitwirkendenlizenzen erwerben möchtest, gehe zur Teamverwaltungsseite."
                        },
                        "fr-FR": {
                          singular: "Vous pouvez inviter jusqu'à {REMAINING_INVITES} personnes supplémentaires. Pour en inviter plus ou acheter des licences Administrateur et Contributeur, rendez-vous sur la page de gestion de l'équipe.",
                          plural: "Vous pouvez inviter jusqu'à {REMAINING_INVITES} personnes. Pour en inviter plus ou acheter des licences Administrateur et Contributeur, rendez-vous sur la page de gestion de l'équipe."
                        },
                        "ja-JP": {
                          singular: "現在、最大 {REMAINING_INVITES}人まで招待できます。招待枠を増やす、あるいは管理者および投稿者のシートライセンスを購入するには、チーム管理ページにアクセスしてください。",
                          plural: "最大 {REMAINING_INVITES}人まで招待できます。招待枠を増やす、あるいは管理者および投稿者のシートライセンスを購入するには、チーム管理ページにアクセスしてください。"
                        },
                        "ko-KR": {
                          singular: "이제 {REMAINING_INVITES}명 더 초대할 수 있습니다. 초대 인원을 늘리거나 관리자, 기여자 라이선스를 구매하려면 팀 관리 페이지를 방문하세요.",
                          plural: "이제 {REMAINING_INVITES}명 더 초대할 수 있습니다. 초대 인원을 늘리거나 관리자, 기여자 라이선스를 구매하려면 팀 관리 페이지를 방문하세요."
                        },
                        "pt-BR": {
                          singular: "Agora você pode convidar até mais {REMAINING_INVITES} pessoa. Para convidar mais pessoas ou comprar licenças de administrador e colaborador, acesse a página de gerenciamento de equipe.",
                          plural: "Você pode convidar até {REMAINING_INVITES} pessoas. Para convidar mais pessoas ou comprar licenças de administrador e colaborador, acesse a página de gerenciamento de equipe."
                        },
                        "zh-CN": {
                          singular: "现在您最多可以邀请其他 {REMAINING_INVITES} 人。要邀请更多人或购买管理员和贡献者席位，请访问团队管理页面。",
                          plural: "您最多可以邀请 {REMAINING_INVITES} 人。要邀请更多人或购买管理员和贡献者席位，请访问团队管理页面。"
                        }
                      }
                    }) : (0, _v34.translate)({
                      singular: "You can invite up to {REMAINING_INVITES} other person. To invite more, visit the team management page to purchase additional seats or invite viewers for free.",
                      plural: "You can invite up to {REMAINING_INVITES} people. To invite more, visit the team management page to purchase additional seats or invite viewers for free.",
                      count: _v2 - _v1,
                      replacements: {
                        REMAINING_INVITES: _v2 - _v1
                      },
                      dictionary: {
                        es: {
                          singular: "Puedes invitar a {REMAINING_INVITES} personas más. Para invitar a más personas, visita la página de gestión de equipos y adquiere puestos adicionales o invita a espectadores sin cargo.",
                          plural: "Puedes invitar hasta {REMAINING_INVITES} personas. Para invitar a más personas, visita la página de gestión de equipos para adquirir puestos adicionales o invitar a espectadores sin cargo."
                        },
                        "de-DE": {
                          singular: "Du kannst bis zu {REMAINING_INVITES} weitere(n) Person(en) einladen. Wenn du weitere Personen einladen möchtest, kannst du auf der Seite für die Teamverwaltung zusätzliche Einzellizenzen erwerben oder Betrachter kostenlos einladen.",
                          plural: "Du kannst bis zu {REMAINING_INVITES} Personen einladen. Wenn du weitere Personen einladen möchtest, kannst du auf der Seite für die Teamverwaltung zusätzliche Einzellizenzen erwerben oder Betrachter kostenlos einladen."
                        },
                        "fr-FR": {
                          singular: "Vous pouvez inviter jusqu'à {REMAINING_INVITES} autres personnes. Pour en inviter davantage, rendez-vous sur la page de gestion de l'équipe pour acheter des licences supplémentaires ou inviter des spectateurs gratuitement.",
                          plural: "Vous pouvez inviter jusqu'à {REMAINING_INVITES} personnes. Pour en inviter davantage, rendez-vous sur la page de gestion de l'équipe pour acheter des licences supplémentaires ou inviter des spectateurs gratuitement."
                        },
                        "ja-JP": {
                          singular: "最大{REMAINING_INVITES}人まで招待できます。さらに招待するには、チーム管理ページにアクセスして追加のシートライセンスを購入するか、閲覧者として無料で招待してください。",
                          plural: "最大{REMAINING_INVITES}人を招待できます。さらに招待するには、チーム管理ページにアクセスして追加のシートライセンスを購入するか、閲覧者として無料で招待してください。"
                        },
                        "ko-KR": {
                          singular: "최대 {REMAINING_INVITES}명을 초대할 수 있습니다. 초대 인원을 늘리려면 팀 관리 페이지로 이동하여 사용자 라이선스를 추가 구매하거나 무료로 뷰어를 초대하세요.",
                          plural: "최대 {REMAINING_INVITES}명을 초대할 수 있습니다. 초대 인원을 늘리려면 팀 관리 페이지로 이동하여 사용자 라이선스를 추가 구매하거나 무료로 뷰어를 초대하세요."
                        },
                        "pt-BR": {
                          singular: "Você pode convidar até mais {REMAINING_INVITES} pessoa. Visite a página de gerenciamento de equipe para comprar mais licenças ou convidar espectadores gratuitamente.",
                          plural: "Você pode convidar até {REMAINING_INVITES} pessoas. Visite a página de gerenciamento de equipe para comprar mais licenças ou convide espectadores gratuitamente."
                        },
                        "zh-CN": {
                          singular: "您最多可以邀请其他 {REMAINING_INVITES} 人。要邀请更多人，请访问团队管理页面购买额外席位或免费邀请观众。",
                          plural: "您最多可以邀请 {REMAINING_INVITES} 人。要邀请更多人，请访问团队管理页面购买额外席位或免费邀请观众。"
                        }
                      }
                    }))
                  })
                })]
              }), (0, _v4.jsx)(_v115.Notification, {
                content: _v17 === _v32.TOAST_OOPS && (0, _v34.translate)({
                  singular: "Oops! Something went wrong. Please try again.",
                  dictionary: {
                    es: {
                      singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
                    },
                    "de-DE": {
                      singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
                    },
                    "fr-FR": {
                      singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
                    },
                    "ja-JP": {
                      singular: "エラーが発生しました。再度お試しください。"
                    },
                    "ko-KR": {
                      singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
                    },
                    "pt-BR": {
                      singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "哎呀，出错了。请重试。"
                    }
                  }
                }),
                showing: !!_v17,
                onComplete: () => {
                  _v18("");
                }
              }), _v23 && _v37 && _v42 && (0, _v4.jsx)(_v118.PurchaseSeatsModal, {
                canUsePaymentsService: !!_v32,
                userId: _v10.id,
                isActive: _v23,
                isTrial: _v35,
                productId: String(_v37.productId),
                ownerId: _v10.id,
                minSeatsPurchase: _v40(_v13),
                maxSeatsPurchase: _v41(),
                initSeatsPurchase: _v40(_v13),
                onPurchaseSuccess: () => {
                  _v44();
                },
                onPurchaseFailure: () => null,
                onClose: () => _v24(!1),
                onCancel: () => {
                  _v24(!1), (0, _v26.trackCheckoutWithViewers)(`${_v37?.tier}, ${_v37?.billingPeriod}`, _v10.id, _v37?.isFreeTrial ?? !1, (0, _v32.filterInvitesWithEmails)(_v13).length), _v14(_v13.map(_v0 => ({
                    ..._v0,
                    role: _v61.TeamUserPermissionLevel.Viewer
                  }))), _v22((0, _v32.generateRandomHash)());
                },
                analyticsData: {
                  teamInfo: _v42,
                  folderId: null,
                  clipId: null,
                  priorSeats: _v37.nextCycle?.seatCount || 0,
                  subscriptionType: `${_v37.tier}, ${_v37.billingPeriod}`,
                  planType: _v37.status,
                  planTier: _v37.tier,
                  isTrial: _v37.isFreeTrial
                },
                triggeredFrom: _v119.PURCHASE_TRIGGERED_FROM.ONBOARDING_INVITES
              })]
            })
          })]
        })
      });
    },
    _v135 = _v12.default.div.withConfig({
      displayName: "TeamInvites__OuterWrapper",
      componentId: "sc-4c1c7007-0"
    })`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${(0, _v33.rem)(700)};
  padding: 0 ${(0, _v33.rem)(2)};
  width: 100%;
`,
    _v136 = _v12.default.div.withConfig({
      displayName: "TeamInvites__InnerWrapper",
      componentId: "sc-4c1c7007-1"
    })`
  height: 100%;
  display: flex;
  justify-content: center;
`,
    _v137 = _v12.default.div.withConfig({
      displayName: "TeamInvites__ContentWrapper",
      componentId: "sc-4c1c7007-2"
    })`
  max-height: 100%;
  width: 100%;
`,
    _v138 = _v12.default.div.withConfig({
      displayName: "TeamInvites__ControlsWrapper",
      componentId: "sc-4c1c7007-3"
    })`
  display: flex;
  justify-content: space-between;
  padding: ${(0, _v33.rem)(30)} 0 ${(0, _v33.rem)(20)} 0;
`,
    _v139 = (0, _v12.default)(_v45.Button).withConfig({
      displayName: "TeamInvites__AddMoreButton",
      componentId: "sc-4c1c7007-4"
    })`
  left: -${(0, _v33.rem)(8)};
  svg {
    height: ${(0, _v33.rem)(20)};
    width: ${(0, _v33.rem)(20)};
    margin-right: ${(0, _v33.rem)(8)};
  }
`,
    _v140 = _v12.default.div.withConfig({
      displayName: "TeamInvites__EmailInputWrapperStyled",
      componentId: "sc-4c1c7007-5"
    })`
  position: relative;
  ${_v108};
  height: ${(0, _v33.rem)(80)};
`,
    _v141 = _v12.default.div.withConfig({
      displayName: "TeamInvites__RoleMenuWrapper",
      componentId: "sc-4c1c7007-6"
    })`
  position: absolute;
  right: 0;
  top: ${(0, _v33.rem)(-5)};
`,
    _v142 = _v12.default.div.withConfig({
      displayName: "TeamInvites__InviteCountWrapper",
      componentId: "sc-4c1c7007-7"
    })`
  display: flex;
  margin-left: auto;
`,
    _v143 = _v12.default.div.withConfig({
      displayName: "TeamInvites__MaxInvitesSentNotificationWrapper",
      componentId: "sc-4c1c7007-8"
    })`
  padding-bottom: ${(0, _v33.rem)(20)};
`,
    _v144 = (0, _v12.default)(_v117.Link).withConfig({
      displayName: "TeamInvites__CustomLink",
      componentId: "sc-4c1c7007-9"
    })`
  color: ${(0, _v17.slate)(540)};
  &:hover {
    color: ${(0, _v17.slate)(540)};
  }
`;
  var _v145 = _v0.i(0);
  let _v146 = _v0 => {
      let {
          data: _v1,
          error: _v2
        } = (0, _v16.useGetUserTeams)({
          select: ["teamMembersCount"],
          where: {
            userId: _v0.user.id
          }
        }),
        _v3 = 0;
      return _v2 ? console.error(_v2) : _v3 = _v32.MAX_SINGLE_SEAT_INVITE_COUNT - (_v1?.data?.[0]?.teamMembersCount?.viewer || 0), (0, _v4.jsx)(_v147, {
        ..._v0,
        remainingInviteCount: _v3
      });
    },
    _v147 = _v0 => {
      let _v1,
        _v2,
        _v3,
        _v4 = (0, _v11.useSearchParams)(),
        {
          sendConfirmationPageViewEvent: _v5
        } = (0, _v29.useOnBoardingBPEvents)(),
        {
          trackUserConverted: _v6
        } = (0, _v20.useCheckoutTracking)(),
        _v7 = (0, _v21.usePico)(),
        _v8 = (0, _v6.useRef)(!1),
        {
          user: _v9,
          remainingInviteCount: _v10
        } = _v0,
        [_v11, _v12] = (0, _v6.useReducer)(_v28, (_v1 = [_v145.WelcomePage], _v3 = [_v1, _v2 = [_v113]], _v10 > 0 && _v2.push(_v134), {
          ..._v25.defaultState,
          flow: _v3
        })),
        [_v13, _v14] = (0, _v6.useState)(_v19.themes.light),
        {
          data: _v15
        } = (0, _v14.useQuery)(`/users/${_v9.id}/team`, _v15.logoFetchOptions);
      if ((0, _v6.useEffect)(() => {
        _v15?.id && _v23(_v12, {
          accentColor: _v15.accentColor || (0, _v17.blue)(500),
          id: _v15.id,
          logoUrl: _v15.pictures?.sizes[0]?.link || "",
          teamName: _v15.teamName || ""
        });
      }, [_v15?.id]), (0, _v6.useEffect)(() => {
        if (_v15?.ownerId) {
          try {
            _v13.BigPictureClient.sendEvent(new _v13.Event("onboarding.render_variant1", 1, {
              product: "Onboarding",
              path: window.parent.location.pathname,
              location: "onboarding"
            }));
          } catch (_v0) {
            console.error(_v0);
          }
          _v5({
            upsell_name: _v4?.get("upsell") ?? null,
            feature: _v4?.get("feature") ?? null
          });
        }
      }, [_v15?.ownerId]), (0, _v6.useEffect)(() => {
        let _v0 = JSON.parse(JSON.stringify(_v19.themes.light));
        _v0.content.focus = _v11.team.accentColor, _v0.formats.primary = _v11.team.accentColor, _v14(_v0);
      }, [_v11.team.accentColor]), (0, _v6.useEffect)(() => {
        if (_v8.current || null === _v7) return;
        let [_v0, _v1, _v2] = (_v4?.get("product_id") ?? "").split("-");
        _v0 && _v1 && (_v8.current = !0, _v6({
          tier: _v0,
          periodicity: _v1,
          isFreeTrial: "free" === _v2
        }));
      }, [_v7, _v6, _v4]), _v11.sectionIndex === _v11.flow.length) return window.parent.location.href = _v73.REDIRECT_LOCATION_AFTER_ONBOARDING, null;
      let _v16 = _v15 ? _v11.flow[_v11.sectionIndex][_v11.stepIndex] : _v31;
      return (0, _v4.jsx)(_v12.ThemeProvider, {
        theme: _v13,
        children: (0, _v4.jsx)(_v25.ConfigContext.Provider, {
          value: _v0,
          children: (0, _v4.jsx)(_v25.StateContext.Provider, {
            value: _v11,
            children: (0, _v4.jsxs)(_v25.DispatchContext.Provider, {
              value: _v12,
              children: [(0, _v4.jsx)(_v148, {
                animate: !1,
                size: "xs",
                background: _v11.team.accentColor
              }), (0, _v4.jsx)(_v16, {})]
            })
          })
        })
      });
    },
    _v148 = (0, _v12.default)(_v18.Ribbon).withConfig({
      displayName: "_components__StyledRibbon",
      componentId: "sc-2dc44614-0"
    })`
  position: absolute;
  top: 0;
  left: 0;
  ${_v0 => _v0.background !== (0, _v17.blue)(500) && `background: ${_v0.background};`}
`;
  var _v149 = _v0.i(0),
    _v150 = _v0.i(0);
  (0, _v8.withPageSetup)(() => ({
    props: {
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v5.useRouter)(),
      _v1 = (0, _v6.useContext)(_v10.ViewerContext),
      _v2 = "string" == typeof _v0.query[_v149.SATELLITE_ONBOARDING_NEXT_PARAM] ? _v0.query[_v149.SATELLITE_ONBOARDING_NEXT_PARAM] : void 0,
      _v3 = _v2 && _v2.startsWith("/") && (0, _v9.isVimeoRedirectableUrl)(_v2) ? _v2 : void 0;
    (0, _v6.useEffect)(() => {
      _v0.isReady && _v3 && _v0.replace(_v3);
    }, [_v0, _v3]);
    let {
        capabilities: {
          hasAddATeamMemberPage: _v4
        },
        loading: _v5
      } = (0, _v7.useCapability)(["hasAddATeamMemberPage"]),
      _v6 = _v1?.user?.account && ["plus", "producer"].includes(_v1?.user?.account);
    return !_v3 && _v1?.user && (_v1?.team || _v6) && !_v5 && void 0 !== _v4 ? _v4 || _v6 ? (0, _v4.jsxs)(_v4.Fragment, {
      children: [(0, _v4.jsx)(_v150.ExtoleConversionTracker, {}), (0, _v4.jsx)(_v146, {
        user: _v1.user,
        jwt: _v1.jwt,
        apiUrl: _v1.apiUrl,
        isSingleSeatOnboarding: !0
      })]
    }) : (0, _v4.jsxs)(_v4.Fragment, {
      children: [(0, _v4.jsx)(_v150.ExtoleConversionTracker, {}), (0, _v4.jsx)(_v147, {
        user: _v1.user,
        jwt: _v1.jwt,
        apiUrl: _v1.apiUrl,
        remainingInviteCount: _v1?.team?.remainingInviteCount || 0,
        isSingleSeatOnboarding: !1
      })]
    }) : null;
  }], 0);
}