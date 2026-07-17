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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  async function _v17({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v16.measureLatency)("postMeExpertTrialAccount", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/expert/trial_account?fields=${_v1.map(_v12.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v12.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v12.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v12.deepCamelCase)(_v1);
    });
  }
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  function _v20() {
    let {
        mutate: _v0
      } = (0, _v18.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v19.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/expert/trial_account${(0, _v15.serializeQuery)(_v0)}`, _v17({
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
  "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v20, {
    endpoint: "/me/expert/trial_account",
    method: "POST"
  });
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = function ({
    isExpanded: _v0
  }) {
    let _v1 = (0, _v8.useMemo)(_v30.getTranslatedStrings, []);
    return (0, _v1.jsxs)(_v34, {
      isExpanded: _v0,
      children: [(0, _v1.jsx)(_v33, {
        children: _v1.TrialBenefitsHeader
      }), (0, _v1.jsxs)(_v36, {
        children: [(0, _v1.jsxs)(_v35, {
          children: [(0, _v1.jsx)(_v37, {
            children: (0, _v5.translate)({
              singular: "Plus or Pro",
              dictionary: {
                "zh-CN": {
                  singular: "Plus 或 Pro"
                }
              }
            })
          }), (0, _v1.jsx)(_v38, {
            children: "$50"
          })]
        }), (0, _v1.jsxs)(_v35, {
          children: [(0, _v1.jsx)(_v37, {
            children: (0, _v5.translate)({
              singular: "Premium",
              dictionary: {
                "ja-JP": {
                  singular: "プレミアム"
                },
                "ko-KR": {
                  singular: "프리미엄"
                }
              }
            })
          }), (0, _v1.jsx)(_v38, {
            children: "$200"
          })]
        }), (0, _v1.jsxs)(_v35, {
          children: [(0, _v1.jsx)(_v37, {
            children: (0, _v5.translate)({
              singular: "Enterprise",
              dictionary: {
                "fr-FR": {
                  singular: "Entreprise"
                },
                "zh-CN": {
                  singular: "企业"
                }
              }
            })
          }), (0, _v1.jsx)(_v38, {
            children: "$1,000+"
          })]
        })]
      }), (0, _v1.jsxs)(_v40, {
        children: [(0, _v1.jsx)(_v39, {
          children: _v1.ReferralPaymentsParagraph
        }), (0, _v1.jsx)("br", {}), (0, _v1.jsx)(_v39, {
          children: _v1.TrialBenefitsSeeDetails
        })]
      }), (0, _v1.jsx)(_v41, {
        src: "https://i.vimeocdn.com/custom_asset/2390d7b3b942d53b2ee02e937fe2a575"
      })]
    });
  };
  _v9.default.p.withConfig({
    displayName: "TrialBenefits__List",
    componentId: "sc-7cfedd3a-0"
  })`
  padding-left: ${(0, _v11.rem)(5)};
  line-height: ${(0, _v11.rem)(20)};
`, _v9.default.li.withConfig({
    displayName: "TrialBenefits__StyledList",
    componentId: "sc-7cfedd3a-1"
  })`
  ::marker {
    padding-bottom: ${(0, _v11.rem)(20)};
  }
`;
  let _v33 = _v9.default.div.withConfig({
    displayName: "TrialBenefits__Header",
    componentId: "sc-7cfedd3a-2"
  })`
  font-weight: bold;
  font-size: ${(0, _v11.rem)(24)};
  line-height: ${(0, _v11.rem)(33)};
  margin-bottom: ${(0, _v11.rem)(24)};
`;
  _v9.default.div.withConfig({
    displayName: "TrialBenefits__Subheader",
    componentId: "sc-7cfedd3a-3"
  })`
  font-weight: 700;
  font-size: ${(0, _v11.rem)(16)};
  line-height: ${(0, _v11.rem)(24)};
  margin-bottom: ${(0, _v11.rem)(20)};
`;
  let _v34 = _v9.default.div.withConfig({
      displayName: "TrialBenefits__Container",
      componentId: "sc-7cfedd3a-4"
    })`
  background: linear-gradient(180deg, #1b4070 0%, #2b103c 100%);
  color: white;
  padding: ${(0, _v11.rem)(72)} ${(0, _v11.rem)(56)};
  min-height: calc(100vh - ${(0, _v11.rem)(130)});
  overflow: hidden;
  z-index: 1;
  position: fixed;
  visibility: hidden;
  bottom: 0;
  top: calc(100vh - ${(0, _v11.rem)(48)});
  transition: all 0.3s ease-in-out;
  ${({
      isExpanded: _v0
    }) => _v0 && _v9.css`
      position: fixed;
      visibility: visible;
      width: 100%;
      bottom: 0;
      top: ${(0, _v11.rem)(38)};
    `};
  @media (min-width: ${_v31.DESKTOP}) {
    display: block;
    bottom: unset;
    top: unset;
    width: auto;
    position: relative;
    visibility: visible;
  }
`,
    _v35 = _v9.default.div.withConfig({
      displayName: "TrialBenefits__ReferralPayment",
      componentId: "sc-7cfedd3a-5"
    })`
  min-width: 25%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${(0, _v11.rem)(8)};
  flex: none;
  order: 0;
  flex-grow: 1;
  margin-right: ${(0, _v11.rem)(16)};
  padding: ${(0, _v11.rem)(0)} ${(0, _v11.rem)(16)};
`;
  _v9.default.div.withConfig({
    displayName: "TrialBenefits__ListContainer",
    componentId: "sc-7cfedd3a-6"
  })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(0, _v11.rem)(12)} ${(0, _v11.rem)(16)};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${(0, _v11.rem)(16)};
`, _v9.default.div.withConfig({
    displayName: "TrialBenefits__ListHeader",
    componentId: "sc-7cfedd3a-7"
  })`
  font-weight: 700;
  font-size: ${(0, _v11.rem)(16)};
  line-height: ${(0, _v11.rem)(22)};
`, _v9.default.li.withConfig({
    displayName: "TrialBenefits__ListItem",
    componentId: "sc-7cfedd3a-8"
  })`
  font-size: ${(0, _v11.rem)(14)};
  line-height: ${(0, _v11.rem)(24)};
  padding: ${(0, _v11.rem)(10)};
`;
  let _v36 = _v9.default.div.withConfig({
      displayName: "TrialBenefits__ReferralPaymentContainer",
      componentId: "sc-7cfedd3a-9"
    })`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,
    _v37 = _v9.default.div.withConfig({
      displayName: "TrialBenefits__PlanName",
      componentId: "sc-7cfedd3a-10"
    })`
  width: ${(0, _v11.rem)(64)};
  left: ${(0, _v11.rem)(16)};
  top: ${(0, _v11.rem)(12)};
  font-style: normal;
  font-weight: 400;
  font-size: ${(0, _v11.rem)(12)};
  line-height: ${(0, _v11.rem)(24)};
  color: #ffffff;
`,
    _v38 = _v9.default.div.withConfig({
      displayName: "TrialBenefits__Amount",
      componentId: "sc-7cfedd3a-11"
    })`
  left: ${(0, _v11.rem)(16)};
  top: ${(0, _v11.rem)(36)};
  font-weight: 700;
  font-size: ${(0, _v11.rem)(20)};
  line-height: ${(0, _v11.rem)(33)};
`,
    _v39 = (0, _v9.default)(_v28.Paragraph).withConfig({
      displayName: "TrialBenefits__StyledParagraph",
      componentId: "sc-7cfedd3a-12"
    })`
  color: #ffffff;
  font-weight: 400;
  font-style: normal;
  font-size: ${(0, _v11.rem)(11)};
`,
    _v40 = _v9.default.div.withConfig({
      displayName: "TrialBenefits__ParagraphContainer",
      componentId: "sc-7cfedd3a-13"
    })`
  margin-top: ${(0, _v11.rem)(12)};
  margin-bottom: ${(0, _v11.rem)(26)};
`,
    _v41 = _v9.default.img.withConfig({
      displayName: "TrialBenefits__CustomImage",
      componentId: "sc-7cfedd3a-14"
    })`
  border-radius: ${(0, _v11.rem)(16)};
  width: ${(0, _v11.rem)(375)};
`;
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = (0, _v10.createTypedForm)(),
    _v45 = function () {
      let _v0 = (0, _v8.useMemo)(_v30.getTranslatedStrings, []);
      (0, _v8.useContext)(_v29.ViewerContext);
      let [_v1, _v2] = (0, _v8.useState)(!1),
        [_v3, _v4] = (0, _v8.useState)(!1),
        [_v5, _v6] = (0, _v8.useState)(!1),
        [_v7, _v8] = (0, _v8.useState)(""),
        [_v9, _v10] = _v20(),
        [_v11, _v12] = (0, _v13.useGetMeLazy)(),
        [_v13, _v14] = (0, _v8.useState)([]);
      (0, _v8.useEffect)(() => {
        _v10?.error ? (_v10.error.res.json().then(_v0 => {
          _v0 = (0, _v12.deepCamelCase)(_v0), _v0?.invalidParameters && _v14(_v0.invalidParameters.map(_v0 => _v0.field));
        }), _v4(!1)) : _v10?.data && (_v2(!0), _v4(!1), (0, _v43.trackEvent)({
          eventKey: _v43.Events.TRIAL_REQUEST_SUCCESS
        }));
      }, [_v10]);
      let _v15 = (0, _v8.useMemo)(() => ({
        forClient: "true",
        product: "help_me_choose",
        useCase: "exploring",
        message: "",
        checkbox: !1,
        name: "",
        email: ""
      }), [_v7]);
      return (0, _v8.useCallback)((_v0, _v1, _v2, _v3) => {
        _v0 !== _v1 && (0, _v43.trackEvent)({
          eventKey: _v2,
          copy: _v3.find(_v0 => _v0.value === _v1)?.untranslatedLabel
        });
      }, []), _v1 ? (0, _v1.jsxs)("div", {
        children: [(0, _v1.jsx)(_v7.default, {
          href: "/experts/dashboard",
          children: (0, _v1.jsxs)(_v46, {
            children: [(0, _v1.jsx)(_v57, {
              width: "20"
            }), (0, _v1.jsx)(_v48, {
              children: _v0.BackToVimeoExperts
            })]
          })
        }), (0, _v1.jsx)(_v42.default, {
          header: (0, _v5.translate)({
            singular: "Thanks for submitting your referral. We’ll verify details and follow up with {EMAIL} within one business day.",
            replacements: {
              EMAIL: _v7
            },
            dictionary: {
              "zh-CN": {
                singular: "感谢您提交推荐。我们将在一个工作日内验证详细信息并与 {EMAIL} 进行跟进。"
              }
            }
          }),
          subheader: "",
          eventKey: _v43.Events.CLICK_BACK_DASHBOARD
        })]
      }) : (0, _v1.jsxs)(_v61, {
        children: [(0, _v1.jsx)(_v7.default, {
          href: "/experts/dashboard",
          children: (0, _v1.jsxs)(_v46, {
            children: [(0, _v1.jsx)(_v57, {
              width: "20"
            }), (0, _v1.jsx)(_v48, {
              children: _v0.BackText
            })]
          })
        }), (0, _v1.jsxs)(_v58, {
          children: [(0, _v1.jsx)(_v55, {
            children: _v0.CreateTrialHeader
          }), (0, _v1.jsx)(_v56, {
            children: _v0.CreateTrialSubheader
          }), (0, _v1.jsx)(_v63, {
            children: _v0.TrialFormHeading
          }), (0, _v1.jsx)(_v44, {
            initialValues: _v15,
            onSubmit: _v0 => {
              let {
                product: _v1,
                useCase: _v2,
                message: _v3,
                forClient: _v4,
                email: _v5,
                name: _v6
              } = _v0;
              _v14([]), _v9({
                select: ["message", "product", "useCase", "forClient", "email", "name"],
                variables: {
                  email: _v5,
                  name: _v6,
                  forClient: _v4,
                  message: _v3,
                  product: _v1,
                  useCase: _v2
                }
              });
            },
            validate: _v0 => {
              let _v1 = {};
              return "" === _v0.name && (_v1.name = "no name"), "" === _v0.email && (_v1.email = "no email"), (2 !== _v0.email.split("@").length || 0 > _v0.email.indexOf(".")) && (_v1.email = "invalid email"), _v1;
            },
            children: ({
              actions: _v0,
              onSubmit: _v1,
              isValid: _v2,
              fields: _v3
            }) => (0, _v1.jsxs)("form", {
              onSubmit: _v1,
              children: [(0, _v1.jsx)(_v52, {
                children: _v0.TrialClientNameLabel
              }), (0, _v1.jsx)(_v53, {
                placeholder: _v0.TrialClientNamePlaceHolder,
                onChange: _v0 => {
                  _v0.name.setValue(_v0.currentTarget.value);
                }
              }), (0, _v1.jsx)(_v52, {
                children: _v0.TrialClientEmailLabel
              }), (0, _v1.jsx)(_v62, {
                children: _v0.TrialClientEmailHelpText
              }), (0, _v1.jsx)(_v53, {
                placeholder: _v0.TrialClientEmailPlaceHolder,
                type: "email",
                onChange: _v0 => {
                  _v0.email.setValue(_v0.currentTarget.value);
                },
                status: _v13.includes("email") ? "negative" : "neutral",
                messages: {
                  error: _v0.InvalidEmail
                }
              }), (0, _v1.jsx)(_v52, {
                children: _v0.TrialMessageLabel
              }), (0, _v1.jsx)(_v60, {
                placeholder: _v0.TrialMessagePlaceholder,
                onChange: _v0 => {
                  _v0.message.setValue(_v0.currentTarget.value);
                },
                format: _v13.includes("message") ? "negative" : "neutral",
                messages: {
                  error: _v0.InvalidMessage
                }
              }), (0, _v1.jsx)(_v51, {
                size: "lg",
                onClick: () => {
                  _v4(!0), (0, _v43.trackEvent)({
                    eventKey: _v43.Events.CLICK_SUBMIT_TRIAL_REQUEST
                  });
                },
                disabled: !_v2,
                loading: _v3,
                children: _v0.Submit
              })]
            })
          }), (0, _v1.jsx)(_v54, {
            children: _v0.TrialFooterNotice
          })]
        }), (0, _v1.jsx)(_v32, {
          isExpanded: _v5
        }), (0, _v1.jsxs)(_v49, {
          isExpanded: _v5,
          onClick: () => {
            _v6(!_v5);
          },
          children: [(0, _v1.jsx)(_v50, {
            children: _v5 ? _v0.TrialHideBenefits : _v0.TrialShowBenefits
          }), _v5 ? (0, _v1.jsx)(_v26.ChevronDown, {
            width: "24"
          }) : (0, _v1.jsx)(_v59, {
            width: "24"
          })]
        })]
      });
    },
    _v46 = _v9.default.div.withConfig({
      displayName: "TrialPage__BackContainer",
      componentId: "sc-ff3316d6-0"
    })`
  display: flex;
  position: absolute;
  height: ${(0, _v11.rem)(32)};
  align-items: center;
  margin-top: ${(0, _v11.rem)(16)};
  margin-left: ${(0, _v11.rem)(16)};
  cursor: pointer;
`,
    _v47 = _v9.default.div.withConfig({
      displayName: "TrialPage__BackText",
      componentId: "sc-ff3316d6-1"
    })`
  font-size: ${(0, _v11.rem)(14)};
  line-height: ${(0, _v11.rem)(32)};
  margin-left: ${(0, _v11.rem)(4)};
`,
    _v48 = (0, _v9.default)(_v47).withConfig({
      displayName: "TrialPage__BoldBackText",
      componentId: "sc-ff3316d6-2"
    })`
  font-weight: 700;
`,
    _v49 = _v9.default.div.withConfig({
      displayName: "TrialPage__BenefitsFooter",
      componentId: "sc-ff3316d6-3"
    })`
  position: fixed;
  top: calc(100vh - ${(0, _v11.rem)(48)});
  background: linear-gradient(180deg, #1b4070 0%, #2b103c 500%);
  height: ${(0, _v11.rem)(48)};
  width: 100%;
  z-index: 999;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: top 0.3s ease-in-out;
  ${({
      isExpanded: _v0
    }) => _v0 && _v9.css`
      top: 0;
    `};

  svg > path {
    fill: white;
  }
  @media (min-width: ${_v31.DESKTOP}) {
    display: none;
  }
`,
    _v50 = _v9.default.div.withConfig({
      displayName: "TrialPage__BenefitsText",
      componentId: "sc-ff3316d6-4"
    })`
  margin-right: ${(0, _v11.rem)(10)};
`,
    _v51 = (0, _v9.default)(_v21.Button).withConfig({
      displayName: "TrialPage__StyledButton",
      componentId: "sc-ff3316d6-5"
    })`
  margin: auto;
  margin-top: ${(0, _v11.rem)(40)};
`;
  (0, _v9.default)(_v22.Checkbox).withConfig({
    displayName: "TrialPage__StyledCheckbox",
    componentId: "sc-ff3316d6-6"
  })`
  color: #00adef;
  label {
    padding-left: ${(0, _v11.rem)(26)};
    font-size: ${(0, _v11.rem)(16)};
    color: #657987;
    font-size: ${(0, _v11.rem)(14)};
    line-height: ${(0, _v11.rem)(22)};
    display: block;
  }
  margin-top: ${(0, _v11.rem)(2)};
  margin-bottom: ${(0, _v11.rem)(32)};
`;
  let _v52 = _v9.default.div.withConfig({
    displayName: "TrialPage__MessageLabel",
    componentId: "sc-ff3316d6-7"
  })`
  font-size: ${(0, _v11.rem)(14)};
  line-height: ${(0, _v11.rem)(18)};
  letter-spacing: ${(0, _v11.rem)(-.2)};
  color: #23313b;
  font-style: normal;
  font-weight: bold;
  margin-bottom: ${(0, _v11.rem)(8)};
`;
  (0, _v9.default)(_v24.Select).withConfig({
    displayName: "TrialPage__StyledSelect",
    componentId: "sc-ff3316d6-8"
  })`
  margin-bottom: ${(0, _v11.rem)(32)};
`, _v9.default.div.withConfig({
    displayName: "TrialPage__InputNotice",
    componentId: "sc-ff3316d6-9"
  })`
  font-size: ${(0, _v11.rem)(14)};
  line-height: ${(0, _v11.rem)(22)};
  color: #657987;
  margin-bottom: ${(0, _v11.rem)(32)};
`;
  let _v53 = (0, _v9.default)(_v23.Input).withConfig({
      displayName: "TrialPage__StyledInput",
      componentId: "sc-ff3316d6-10"
    })`
  input::placeholder {
    color: #11191d;
  }
  margin-bottom: ${(0, _v11.rem)(24)};
`,
    _v54 = _v9.default.div.withConfig({
      displayName: "TrialPage__Notice",
      componentId: "sc-ff3316d6-11"
    })`
  font-size: ${(0, _v11.rem)(14)};
  line-height: ${(0, _v11.rem)(22)};
  text-align: center;
  color: #657987;
  margin-top: ${(0, _v11.rem)(40)};
`,
    _v55 = _v9.default.div.withConfig({
      displayName: "TrialPage__Header",
      componentId: "sc-ff3316d6-12"
    })`
  font-weight: 700;
  font-size: ${(0, _v11.rem)(36)};
  line-height: ${(0, _v11.rem)(44)};
  margin-bottom: ${(0, _v11.rem)(40)};
  text-align: center;
`,
    _v56 = _v9.default.div.withConfig({
      displayName: "TrialPage__Subheader",
      componentId: "sc-ff3316d6-13"
    })`
  font-size: ${(0, _v11.rem)(16)};
  line-height: ${(0, _v11.rem)(24)};
  margin-bottom: ${(0, _v11.rem)(40)};
  text-align: justify;
  text-justify: inter-word;
`,
    _v57 = (0, _v9.default)(_v27.ChevronRight).withConfig({
      displayName: "TrialPage__ChevronLeft",
      componentId: "sc-ff3316d6-14"
    })`
  transform: rotate(180deg);
`,
    _v58 = _v9.default.div.withConfig({
      displayName: "TrialPage__CreateTrialSection",
      componentId: "sc-ff3316d6-15"
    })`
  min-width: 63%;
  padding-top: ${(0, _v11.rem)(72)};
  padding-bottom: ${(0, _v11.rem)(72)};
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-direction: column;
`,
    _v59 = (0, _v9.default)(_v26.ChevronDown).withConfig({
      displayName: "TrialPage__ChevronUp",
      componentId: "sc-ff3316d6-16"
    })`
  transform: rotate(180deg);
`,
    _v60 = (0, _v9.default)(_v25.TextArea).withConfig({
      displayName: "TrialPage__CustomTextArea",
      componentId: "sc-ff3316d6-17"
    })`
  &::placeholder {
    color: #11191d;
  }
`,
    _v61 = _v9.default.div.withConfig({
      displayName: "TrialPage__Container",
      componentId: "sc-ff3316d6-18"
    })`
  display: flex;
  @media (min-width: ${_v31.DESKTOP}) {
    flex-direction: row;
  }
`,
    _v62 = (0, _v9.default)(_v28.Paragraph).withConfig({
      displayName: "TrialPage__StyledParagraph",
      componentId: "sc-ff3316d6-19"
    })`
  font-weight: 400;
  font-size: ${(0, _v11.rem)(12)};
  line-height: ${(0, _v11.rem)(21.56)};
  margin-bottom: ${(0, _v11.rem)(4)};
  margin-top: ${(0, _v11.rem)(4)};
`,
    _v63 = _v9.default.div.withConfig({
      displayName: "TrialPage__TrialFormHeading",
      componentId: "sc-ff3316d6-20"
    })`
  font-weight: 700;
  text-align: left;
  font-size: ${(0, _v11.rem)(28)};
  line-height: ${(0, _v11.rem)(33.04)};
  margin-bottom: ${(0, _v11.rem)(24)};
`;
  function _v64() {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.default, {
        children: (0, _v1.jsx)("title", {
          children: (0, _v5.translate)({
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
      }), (0, _v1.jsx)(_v45, {})]
    });
  }
  _v64.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v4.DefaultNavigation, {
      hasThemeSupport: !1
    }), _v0, (0, _v1.jsx)(_v6.MinimalFooterLayout, {})]
  }), (0, _v3.withPageSetup)({
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v64], 0);
}