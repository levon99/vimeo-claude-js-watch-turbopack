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
  async function _v16({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v14.measureLatency)("postMeExpertTransferVideos", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/expert/transfer_videos?fields=${_v1.map(_v15.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v15.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v15.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v15.deepCamelCase)(_v1);
    });
  }
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  function _v19() {
    let {
        mutate: _v0
      } = (0, _v17.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v18.useGctlConfig)(),
      [_v5, _v6] = (0, _v13.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/expert/transfer_videos${(0, _v13.serializeQuery)(_v0)}`, _v16({
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
  "true" === _v12.default.env.STORYBOOK && (0, _v13.assignMswData)(_v19, {
    endpoint: "/me/expert/transfer_videos",
    method: "POST"
  });
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = function ({
      isExpanded: _v0
    }) {
      let _v1 = (0, _v8.useMemo)(_v27.getTranslatedStrings, []);
      return (0, _v1.jsxs)(_v34, {
        isExpanded: _v0,
        children: [(0, _v1.jsx)(_v32, {
          children: _v1.TransferBenefitsHeader
        }), (0, _v1.jsx)(_v33, {}), (0, _v1.jsxs)(_v30, {
          children: [(0, _v1.jsx)(_v31, {
            children: _v1.TransferBenefit1
          }), (0, _v1.jsx)(_v31, {
            children: _v1.TransferBenefit2
          }), (0, _v1.jsx)(_v31, {
            children: _v1.TransferBenefit3
          })]
        })]
      });
    },
    _v30 = _v9.default.p.withConfig({
      displayName: "TransferBenefits__List",
      componentId: "sc-736a547e-0"
    })`
  padding-left: ${(0, _v11.rem)(5)};
  line-height: ${(0, _v11.rem)(20)};
`,
    _v31 = _v9.default.li.withConfig({
      displayName: "TransferBenefits__StyledList",
      componentId: "sc-736a547e-1"
    })`
  ::marker {
    padding-bottom: ${(0, _v11.rem)(20)};
  }
  margin-top: ${(0, _v11.rem)(30)};
`,
    _v32 = _v9.default.div.withConfig({
      displayName: "TransferBenefits__Header",
      componentId: "sc-736a547e-2"
    })`
  font-weight: bold;
  font-size: ${(0, _v11.rem)(24)};
  line-height: ${(0, _v11.rem)(33)};
  margin-bottom: ${(0, _v11.rem)(24)};
`,
    _v33 = _v9.default.div.withConfig({
      displayName: "TransferBenefits__Subheader",
      componentId: "sc-736a547e-3"
    })`
  font-weight: normal;
  font-size: ${(0, _v11.rem)(16)};
  line-height: ${(0, _v11.rem)(24)};
  margin-bottom: ${(0, _v11.rem)(20)};
`,
    _v34 = _v9.default.div.withConfig({
      displayName: "TransferBenefits__Container",
      componentId: "sc-736a547e-4"
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
  @media (min-width: ${_v28.DESKTOP}) {
    display: block;
    bottom: unset;
    top: unset;
    width: auto;
    position: relative;
    visibility: visible;
  }
`;
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = _v0 => {
      let {
        owner: _v1,
        teamData: _v2
      } = _v0;
      return _v2 && _v2.teamName ? _v2.teamName : _v1.name;
    },
    _v38 = (0, _v10.createTypedForm)(),
    _v39 = function () {
      let _v0 = (0, _v8.useMemo)(_v27.getTranslatedStrings, []),
        _v1 = (0, _v8.useContext)(_v26.ViewerContext),
        [_v2, _v3] = (0, _v8.useState)(!1),
        [_v4, _v5] = (0, _v8.useState)(!1),
        [_v6, _v7] = (0, _v8.useState)(!1),
        [_v8, _v9] = (0, _v8.useState)([]),
        [_v10, _v11] = _v19(),
        [_v12, _v13] = (0, _v20.useGetUserTeamsLazy)();
      (0, _v8.useEffect)(() => {
        if (_v1) {
          let _v0 = _v1?.user?.id;
          _v0 && _v12({
            where: {
              userId: _v0
            },
            select: []
          });
        }
      }, [_v1]), (0, _v8.useEffect)(() => {
        _v13?.data && _v9(_v13.data.data.filter(_v0 => "Admin" === _v0.untranslatedUserRole || "Owner" === _v0.untranslatedUserRole));
      }, [_v13]), (0, _v8.useEffect)(() => {
        _v11?.error ? _v5(!1) : _v11?.data && (_v3(!0), _v5(!1), (0, _v36.trackEvent)({
          eventKey: _v36.Events.VIDEO_TRANSFER_REQUEST_SUCCESS
        }));
      }, [_v11]);
      let _v14 = (0, _v8.useMemo)(() => ({
        sourceUserId: "",
        destinationUserId: ""
      }), []);
      return _v2 ? (0, _v1.jsx)("div", {
        children: (0, _v1.jsx)(_v35.default, {
          header: _v0.TransferSuccessHeader,
          subheader: _v0.TransferSuccessSubheader
        })
      }) : (0, _v1.jsxs)(_v52, {
        children: [(0, _v1.jsx)(_v7.default, {
          href: "/experts/dashboard",
          children: (0, _v1.jsxs)(_v40, {
            children: [(0, _v1.jsx)(_v49, {
              width: "20"
            }), (0, _v1.jsx)(_v41, {
              children: _v0.BackText
            })]
          })
        }), (0, _v1.jsxs)(_v50, {
          children: [(0, _v1.jsx)(_v47, {
            children: _v0.TranferRequestHeader
          }), (0, _v1.jsxs)(_v48, {
            children: [_v0.TransferRequestSubheaderText, " ", (0, _v1.jsx)(_v25.Link, {
              variant: "minimal",
              href: "https://vimeo.zendesk.com/hc/en-us/articles/224818687-Add-and-remove-team-members-on-your-account",
              target: "_blank",
              onClick: () => {
                (0, _v36.trackEvent)({
                  eventKey: _v36.Events.CLICK_HOWTO_ROLE_UPGRADE_LINK
                });
              },
              children: _v0.TransferRequestSubheaderLinkText
            })]
          }), (0, _v1.jsx)(_v38, {
            initialValues: _v14,
            onSubmit: _v0 => {
              let _v1 = Number(_v0.sourceUserId);
              _v10({
                select: ["destinationUserId", "sourceUserId"],
                variables: {
                  destinationUserId: Number(_v0.destinationUserId),
                  sourceUserId: _v1
                }
              });
            },
            validate: _v0 => {
              let _v1 = {};
              return _v0.sourceUserId || (_v1.sourceUserId = "no source user"), _v0.destinationUserId || (_v1.destinationUserId = "no destination user"), _v0.sourceUserId === _v0.destinationUserId && (_v1.sourceUserId = "duplicate"), _v1;
            },
            children: ({
              actions: _v0,
              onSubmit: _v1,
              isValid: _v2
            }) => (0, _v1.jsxs)("form", {
              onSubmit: _v1,
              children: [(0, _v1.jsx)(_v45, {
                label: !1,
                id: "transferSource",
                onChange: _v0 => {
                  _v0.sourceUserId.setValue(_v0.currentTarget.value);
                },
                placeholder: _v0.TransferSourceAccountPlaceholder,
                faux: !0,
                children: _v8.map((_v0, _v1) => (0, _v1.jsx)(_v46, {
                  value: _v0?.teamData?.ownerId,
                  children: _v37(_v0)
                }, `transfer-source-${_v1}`))
              }), (0, _v1.jsx)(_v45, {
                label: !1,
                id: "transferDestination",
                onChange: _v0 => {
                  _v0.destinationUserId.setValue(_v0.currentTarget.value);
                },
                placeholder: _v0.TransferDestinationAccountPlaceholder,
                faux: !0,
                children: _v8.map((_v0, _v1) => (0, _v1.jsx)(_v46, {
                  value: _v0?.teamData?.ownerId,
                  children: _v37(_v0)
                }, `transfer-destination-${_v1}`))
              }), (0, _v1.jsx)(_v44, {
                size: "lg",
                onClick: () => {
                  _v5(!0), (0, _v36.trackEvent)({
                    eventKey: _v36.Events.CLICK_SUBMIT_VIDEO_TRANSFER_REQUEST
                  });
                },
                disabled: !_v2,
                loading: _v4,
                children: _v0.ConfirmAccounts
              })]
            })
          })]
        }), (0, _v1.jsx)(_v29, {
          isExpanded: _v6
        }), (0, _v1.jsxs)(_v42, {
          isExpanded: _v6,
          onClick: () => {
            _v7(!_v6);
          },
          children: [(0, _v1.jsx)(_v43, {
            children: _v6 ? _v0.TransferHideDetails : _v0.TransferShowDetails
          }), _v6 ? (0, _v1.jsx)(_v23.ChevronDown, {
            width: "24"
          }) : (0, _v1.jsx)(_v51, {
            width: "24"
          })]
        })]
      });
    },
    _v40 = _v9.default.div.withConfig({
      displayName: "TransferPage__BackContainer",
      componentId: "sc-740870f4-0"
    })`
  display: flex;
  position: absolute;
  height: ${(0, _v11.rem)(32)};
  align-items: center;
  margin-top: ${(0, _v11.rem)(16)};
  margin-left: ${(0, _v11.rem)(16)};
  cursor: pointer;
`,
    _v41 = _v9.default.div.withConfig({
      displayName: "TransferPage__BackText",
      componentId: "sc-740870f4-1"
    })`
  font-size: ${(0, _v11.rem)(14)};
  line-height: ${(0, _v11.rem)(32)};
  margin-left: ${(0, _v11.rem)(4)};
`,
    _v42 = _v9.default.div.withConfig({
      displayName: "TransferPage__BenefitsFooter",
      componentId: "sc-740870f4-2"
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
  @media (min-width: ${_v28.DESKTOP}) {
    display: none;
  }
`,
    _v43 = _v9.default.div.withConfig({
      displayName: "TransferPage__BenefitsText",
      componentId: "sc-740870f4-3"
    })`
  margin-right: ${(0, _v11.rem)(10)};
`,
    _v44 = (0, _v9.default)(_v21.Button).withConfig({
      displayName: "TransferPage__StyledButton",
      componentId: "sc-740870f4-4"
    })`
  margin: auto;
`,
    _v45 = (0, _v9.default)(_v22.Select).withConfig({
      displayName: "TransferPage__StyledSelect",
      componentId: "sc-740870f4-5"
    })`
  margin-bottom: ${(0, _v11.rem)(32)};
  min-width: 400px;
`,
    _v46 = (0, _v9.default)(_v22.Select.Option).withConfig({
      displayName: "TransferPage__StyledOption",
      componentId: "sc-740870f4-6"
    })`
  min-height: 50px;
`,
    _v47 = _v9.default.div.withConfig({
      displayName: "TransferPage__Header",
      componentId: "sc-740870f4-7"
    })`
  font-weight: 500;
  font-size: ${(0, _v11.rem)(36)};
  line-height: ${(0, _v11.rem)(44)};
  margin-bottom: ${(0, _v11.rem)(40)};
  text-align: center;
`,
    _v48 = _v9.default.div.withConfig({
      displayName: "TransferPage__Subheader",
      componentId: "sc-740870f4-8"
    })`
  font-size: ${(0, _v11.rem)(16)};
  line-height: ${(0, _v11.rem)(24)};
  margin-bottom: ${(0, _v11.rem)(40)};
  text-align: center;
`,
    _v49 = (0, _v9.default)(_v24.ChevronRight).withConfig({
      displayName: "TransferPage__ChevronLeft",
      componentId: "sc-740870f4-9"
    })`
  transform: rotate(180deg);
`,
    _v50 = _v9.default.div.withConfig({
      displayName: "TransferPage__CreateTrialSection",
      componentId: "sc-740870f4-10"
    })`
  min-width: 63%;
  padding-top: ${(0, _v11.rem)(72)};
  padding-bottom: ${(0, _v11.rem)(72)};
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,
    _v51 = (0, _v9.default)(_v23.ChevronDown).withConfig({
      displayName: "TransferPage__ChevronUp",
      componentId: "sc-740870f4-11"
    })`
  transform: rotate(180deg);
`,
    _v52 = _v9.default.div.withConfig({
      displayName: "TransferPage__Container",
      componentId: "sc-740870f4-12"
    })`
  display: flex;
  @media (min-width: ${_v28.DESKTOP}) {
    flex-direction: row;
  }
`;
  function _v53() {
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
      }), (0, _v1.jsx)(_v39, {})]
    });
  }
  (0, _v3.withPageSetup)({
    requireLogin: !0,
    omitEsi: !0,
    inlineViewer: !0
  }), _v53.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v4.DefaultNavigation, {}), _v0, (0, _v1.jsx)(_v6.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v53], 0);
}