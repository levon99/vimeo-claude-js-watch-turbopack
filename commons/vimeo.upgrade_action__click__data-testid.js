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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = 41,
    _v23 = (_v0, _v1 = _v22) => _v18.BigPictureClient.sendEvent(new _v18.Event("vimeo.upgrade_action", _v1, (0, _v19.deepSnakeCase)({
      ..._v20.defaultBpEventParams,
      ..._v0
    }))),
    _v24 = (_v0, _v1 = _v22) => {
      _v23({
        action_type: "click",
        ..._v0
      }, _v1);
    };
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = _v0 => (0, _v1.jsx)(_v26.Button, {
    "data-testid": "upsell-cta",
    onClick: _v0.onClick,
    as: "a",
    target: "_blank",
    w: "100%",
    href: _v0.link,
    size: "md",
    variant: _v0.variant,
    children: _v0.text
  });
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = _v0 => {
      let _v1 = (0, _v2.useContext)(_v17.default);
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsx)(_v6.ModalCloseButton, {
          "data-testid": "close-upsell-button",
          margin: _v0?.margin,
          zIndex: 0,
          onClick: () => {
            ((_v0, _v1 = _v22) => {
              _v23({
                action_type: "dismiss",
                ..._v0
              }, _v1);
            })({
              ..._v1.params,
              device_type: _v1.device_type
            }, _v1.bpEventVersion), _v1.onClose && _v1.onClose(), _v0.onClose();
          }
        })
      });
    },
    _v36 = _v0 => {
      let {
          headerText: _v1,
          subHeaderText: _v2,
          body: _v3,
          footer: _v4,
          imgSrc: _v5,
          dataTestId: _v6,
          onClose: _v7
        } = _v0,
        _v8 = (0, _v34.useIsMobile)();
      return (0, _v1.jsxs)(_v4.Modal, {
        isOpen: !0,
        onClose: _v7,
        children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
          "data-testid": _v6,
          maxW: "fit-content",
          height: (0, _v28.rem)(625),
          children: [(0, _v1.jsx)(_v35, {
            onClose: _v7
          }), (0, _v1.jsx)(_v5.ModalBody, {
            padding: 0,
            children: (0, _v1.jsxs)(_v29.Grid, {
              templateColumns: `${(0, _v28.rem)(320)} 1fr`,
              height: "100%",
              overflow: "hidden",
              children: [(0, _v1.jsxs)(_v3.Flex, {
                padding: "6",
                flexDirection: "column",
                justifyContent: "space-between",
                children: [(0, _v1.jsxs)(_v3.Flex, {
                  gap: (0, _v28.rem)("24"),
                  flexDirection: "column",
                  children: [(0, _v1.jsx)(_v31.Header, {
                    size: "lg",
                    children: void 0 !== _v1 ? _v1 : _v25.default.defaultHeader
                  }), !!_v2 && (0, _v1.jsx)(_v32.Text, {
                    variant: "body-md",
                    children: void 0 !== _v2 ? _v2 : _v25.default.defaultSubHeader
                  }), _v3]
                }), (0, _v1.jsx)(_v30.Box, {
                  children: _v4
                })]
              }), _v5 && !_v8 && (0, _v1.jsx)(_v33.Image, {
                src: _v5,
                alt: "",
                onLoad: () => {
                  window.dispatchEvent(new Event("resize"));
                },
                aspectRatio: "9 / 16",
                maxWidth: (0, _v28.rem)(384),
                height: (0, _v28.rem)(625),
                borderRadius: `0 ${(0, _v28.rem)(20)} ${(0, _v28.rem)(20)} 0`
              })]
            })
          })]
        })]
      });
    },
    _v37 = _v0 => {
      let _v1 = (0, _v2.useContext)(_v17.default);
      return (0, _v1.jsx)(_v26.Button, {
        "data-testid": "upsell-secondary-cta",
        size: "md",
        variant: "tertiary",
        href: (0, _v21.appendPaywallParams)((0, _v21.appendTrackingQueryParams)(_v0.link, _v1.params), _v1.paywallTracking),
        target: "_blank",
        as: "a",
        onClick: () => {
          _v24({
            ..._v1.params,
            copy: _v0.text,
            device_type: _v1.device_type,
            path: window.location.href,
            target: window.location.pathname,
            target_path: _v0.link
          }, _v1.bpEventVersion), _v1.onButtonClick && _v1.onButtonClick({
            copy: _v0.text,
            target_path: (0, _v21.appendTrackingQueryParams)(_v0.link, _v1.params)
          });
        },
        width: "100%",
        children: _v0.text
      });
    },
    _v38 = _v25.default.upgrade,
    _v39 = _v0 => {
      let _v1 = (0, _v2.useContext)(_v17.default),
        _v2 = _v0.modalConfig?.primaryCTAText ? _v0.modalConfig.primaryCTAText : _v38,
        _v3 = _v0.modalConfig?.primaryCTALink ? _v0.modalConfig.primaryCTALink : "/upgrade";
      return (0, _v1.jsx)(_v36, {
        dataTestId: "feature-upsell-container",
        headerText: _v0.modalConfig?.headerText,
        subHeaderText: _v0.modalConfig?.subHeaderText,
        imgSrc: _v0.modalConfig?.imgSrc,
        onClose: _v0.onClose,
        body: _v0.modalConfig?.body,
        footer: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v27, {
            text: _v2,
            link: _v3,
            variant: "upsell",
            onClick: () => {
              _v24({
                ..._v1.params,
                copy: _v2,
                path: window.location.href,
                target_path: _v3,
                target: window.location.pathname,
                device_type: _v1.device_type
              }, _v1.bpEventVersion), _v1.onButtonClick && _v1.onButtonClick({
                copy: _v2,
                target_path: _v3
              });
            }
          }), _v0.modalConfig?.secondaryCTAText && _v0.modalConfig?.secondaryCTALink && (0, _v1.jsx)(_v37, {
            text: _v0.modalConfig.secondaryCTAText,
            link: _v0.modalConfig.secondaryCTALink
          })]
        })
      });
    };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = _v0 => (0, _v1.jsx)(_v41.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.049 4c.72 0 1.398.345 1.822.93l2.698 3.72a2.261 2.261 0 0 1-.229 2.923l-7.746 7.766a2.25 2.25 0 0 1-3.188 0L2.66 11.573a2.261 2.261 0 0 1-.23-2.924l2.7-3.72A2.252 2.252 0 0 1 6.95 4H17.05Zm.4 2.295a.563.563 0 0 0-.9 0L14.083 9.59a.564.564 0 0 0 .45.903h4.928c.465 0 .73-.531.451-.903L17.45 6.295Z",
      fill: "currentColor"
    })
  });
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  (0, _v45.default)(_v46.Modal).withConfig({
    displayName: "styles__UpsellModal",
    componentId: "sc-9bccf073-0"
  })`
  ${_v0 => _v0.isBokeh && "font-family: 'ABCRepro-Regular', sans-serif !important;"}
  ${_v0 => _v0.hasFreeFeaturedBanner && "margin-top: 40px;"}
  background: var(--vimeo-colors-fill-surface);
  min-width: 62.5rem;
  width: 100%;
  height: auto;
  max-width: ${(0, _v28.rem)(0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.25rem;
  max-height: 95vh !important;
  padding: 0;
  overflow: scroll;

  > div {
    max-height: 95vh !important;
    overflow: scroll;
  }
`, _v45.default.div.withConfig({
    displayName: "styles__ModalWrapper",
    componentId: "sc-9bccf073-1"
  })`
  padding: ${(0, _v28.rem)(32)} ${(0, _v28.rem)(32)} ${(0, _v28.rem)(16)};
`;
  let _v47 = _v45.default.div.withConfig({
    displayName: "styles__HeaderContainer",
    componentId: "sc-9bccf073-2"
  })`
  display: flex;
  flex-direction: column;
  padding: 0 ${(0, _v28.rem)(24)} ${(0, _v28.rem)(24)};
  align-items: center;
  align-self: stretch;
`;
  _v45.default.div.withConfig({
    displayName: "styles__HeaderWrapper",
    componentId: "sc-9bccf073-3"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v28.rem)(28)};
  font-weight: 700;
  line-height: 118%;
  letter-spacing: ${(0, _v28.rem)(-1)};
  text-align: center;
  margin-bottom: ${(0, _v28.rem)(4)};
`;
  let _v48 = _v45.default.p.withConfig({
    displayName: "styles__SubHeader",
    componentId: "sc-9bccf073-4"
  })`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: var(--vimeo-colors-text-primary);
`;
  _v45.default.div.withConfig({
    displayName: "styles__PlansContainer",
    componentId: "sc-9bccf073-5"
  })`
  padding: 1rem 0 ${(0, _v28.rem)(20)} 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  z-index: 1;
  position: relative;
`;
  let _v49 = _v45.default.div.withConfig({
      displayName: "styles__FooterContainer",
      componentId: "sc-9bccf073-6"
    })`
  margin: 0 -1rem;
  padding: 0 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`,
    _v50 = () => {
      let _v0 = (0, _v2.useContext)(_v17.default),
        _v1 = _v25.default.compareAllPlanFeatures;
      return (0, _v1.jsx)(_v49, {
        children: (0, _v1.jsx)(_v26.Button, {
          "data-testid": "upsell-cta",
          size: "md",
          href: (0, _v44.buildUpgradePlanUrl)(_v0.paywallTracking, {
            upsell: _v0.params.upsell_name || "none",
            integration: _v0.params.integration || "none",
            feature: _v0.params.feature || "none"
          }),
          target: "_blank",
          as: "a",
          variant: "minmal",
          onClick: () => {
            _v24({
              ..._v0.params,
              copy: _v1,
              device_type: _v0.device_type,
              path: window.location.href,
              target: "upgrade",
              target_path: "/upgrade"
            }, _v0.bpEventVersion), _v0.onButtonClick && _v0.onButtonClick({
              copy: _v1,
              target_path: "/upgrade"
            });
          },
          _hover: {},
          children: _v1
        })
      });
    },
    _v51 = _v0 => {
      let _v1 = (0, _v21.getModalSubheader)(_v0.modalConfig?.subHeaderText),
        _v2 = _v0.modalConfig?.headerText;
      return (0, _v1.jsxs)(_v47, {
        children: [(0, _v1.jsxs)(_v30.Box, {
          w: "100%",
          px: {
            base: (0, _v28.rem)(16),
            md: 0
          },
          children: ["" !== _v2 && null !== _v2 && (0, _v1.jsx)(_v31.Header, {
            size: "lg",
            "data-testid": "upsell-header-text",
            textAlign: "center",
            children: (0, _v21.getModalHeader)(_v0.modalConfig?.headerText)
          }), _v1 ? (0, _v1.jsx)(_v48, {
            "data-testid": "upsell-subheader-text",
            children: _v1
          }) : null]
        }), (0, _v1.jsx)(_v35, {
          margin: (0, _v28.rem)(8),
          onClose: _v0.onClose
        })]
      });
    };
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  _v45.default.div.withConfig({
    displayName: "styles__PlanCardContainer",
    componentId: "sc-34df3cd4-0"
  })`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: ${(0, _v28.rem)(20)};
  border: ${(0, _v28.rem)(2)} solid
    ${({
    theme: _v0
  }) => _v0?.modal?.planCard?.border || "var(--vimeo-colors-stroke)"};
  background: var(--vimeo-colors-fill-surface);
  max-width: 19.5rem;
  position: relative;

  &.recommended {
    border: 4px solid #8a5ee8;
    border-top: none;
  }
`;
  let _v59 = _v45.default.div.withConfig({
      displayName: "styles__PlanHeader",
      componentId: "sc-34df3cd4-1"
    })`
  max-height: 4rem;
`,
    _v60 = _v45.default.div.withConfig({
      displayName: "styles__PlanTitle",
      componentId: "sc-34df3cd4-2"
    })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v28.rem)(22)};
  line-height: 120%;
  letter-spacing: ${(0, _v28.rem)(-.8)};
  font-weight: 700;
`,
    _v61 = _v45.default.p.withConfig({
      displayName: "styles__PlanSubTitle",
      componentId: "sc-34df3cd4-3"
    })`
  margin-top: 0.125rem;
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v28.rem)(14)};
  font-weight: 400;
  letter-spacing: 0.03rem;
  line-height: 120%;
`;
  _v45.default.div.withConfig({
    displayName: "styles__PlanPriceContainer",
    componentId: "sc-34df3cd4-4"
  })`
  padding: 0.25rem 0rem 0rem 0rem;
  height: ${(0, _v28.rem)(94)};
`, _v45.default.div.withConfig({
    displayName: "styles__PlanPrice",
    componentId: "sc-34df3cd4-5"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v28.rem)(36)};
  font-weight: 700;
  line-height: 120%;
  letter-spacing: ${(0, _v28.rem)(-1.2)};
`, _v45.default.p.withConfig({
    displayName: "styles__PlanBillingInfo",
    componentId: "sc-34df3cd4-6"
  })`
  color: ${({
    theme: _v0
  }) => _v0?.modal?.secondaryText || "var(--vimeo-colors-text-secondary)"};
  font-size: ${(0, _v28.rem)(12)};
  font-weight: 400;
  line-height: 120%;
`;
  let _v62 = _v45.default.div.withConfig({
    displayName: "styles__PlansFeaturesContainer",
    componentId: "sc-34df3cd4-7"
  })`
  padding-top: 4px;
`;
  _v45.default.div.withConfig({
    displayName: "styles__FeaturesText",
    componentId: "sc-34df3cd4-8"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 128.5%;
  letter-spacing: -0.00875rem;
`;
  let _v63 = _v45.default.ul.withConfig({
      displayName: "styles__FeaturesWrapper",
      componentId: "sc-34df3cd4-9"
    })`
  list-style-type: disc;
  list-style-position: outside;
  padding: 0;
`,
    _v64 = _v45.default.li.withConfig({
      displayName: "styles__FeatureList",
      componentId: "sc-34df3cd4-10"
    })`
  color: var(--vimeo-colors-text-primary);
  display: flex;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  list-style-type: none;
  padding: 0.25rem 0;
  letter-spacing: ${(0, _v28.rem)(.1)};
  column-gap: ${(0, _v28.rem)(4)};
`;
  _v45.default.div.withConfig({
    displayName: "styles__EnterprisePricingInfo",
    componentId: "sc-34df3cd4-11"
  })`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
  height: 3rem;
  padding-top: 0.25rem;
  color: ${(0, _v57.slate)(900)};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
  let _v65 = _v45.default.div.withConfig({
    displayName: "styles__RecommendedBadge",
    componentId: "sc-34df3cd4-12"
  })`
  position: absolute;
  top: -1.5rem;
  left: ${(0, _v28.rem)(-4)};
  padding: 0.125rem 0.25rem 0.5rem;
  border-radius: ${(0, _v28.rem)(20)};
  background: #8a5ee8;
  color: #fff;
  font-size: ${(0, _v28.rem)(12)};
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: ${(0, _v28.rem)(.24)};
  z-index: -1;
  height: ${(0, _v28.rem)(75)};
  width: 100%;
  text-align: center;
  box-sizing: content-box;
`;
  _v45.default.div.withConfig({
    displayName: "styles__TalkToOurTeam",
    componentId: "sc-34df3cd4-13"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v28.rem)(16)};
  line-height: ${(0, _v28.rem)(18)};
  font-weight: 500;
  margin-bottom: ${(0, _v28.rem)(19)};
  margin-left: ${(0, _v28.rem)(6)};
`;
  let _v66 = _v45.default.div.withConfig({
      displayName: "styles__PlanQuotaContainer",
      componentId: "sc-34df3cd4-14"
    })`
  font-size: ${(0, _v28.rem)(14)};
  font-style: normal;
  font-weight: 500;
  line-height: ${(0, _v28.rem)(20)};
  color: var(--vimeo-colors-text-primary);
`,
    _v67 = _v45.default.div.withConfig({
      displayName: "styles__StorageQuotaContainer",
      componentId: "sc-34df3cd4-15"
    })`
  display: flex;
  row-gap: ${(0, _v28.rem)(4)};
  flex-direction: column;
`,
    _v68 = _v45.default.div.withConfig({
      displayName: "styles__StyledRow",
      componentId: "sc-34df3cd4-16"
    })`
  display: flex;
  column-gap: ${(0, _v28.rem)(4)};
  > div {
    display: flex;
    align-items: flex-start;
  }
`;
  _v45.default.div.withConfig({
    displayName: "styles__ToolTipWrapper",
    componentId: "sc-34df3cd4-17"
  })`
  height: ${(0, _v28.rem)(16)} !important;
  margin: auto 0;
  padding: 0 !important;
`, (0, _v45.default)(_v58.Tip).withConfig({
    displayName: "styles__StyledTip",
    componentId: "sc-34df3cd4-18"
  })`
  font-size: ${(0, _v28.rem)(14)};
  fontweight: 400;
  line-height: ${(0, _v28.rem)(16)};
  letter-spacing: ${(0, _v28.rem)(.1)};
`;
  let _v69 = _v0 => {
      let _v1 = _v0.previousCardPlan ? _v25.default.everythingInPlan(_v20.PLANS_DISPLAY_NAMES[_v0.previousCardPlan]) : _v25.default.keyFeatures,
        _v2 = (0, _v21.getPlanFeaturesList)(_v0.modalConfig, _v0.planData),
        _v3 = _v0.planData.tier,
        _v4 = (0, _v21.isRepackagingTier)(_v3) ? _v2?.length ?? 0 : _v3 === _v20.PLANS.ENTERPRISE ? 5 : [_v20.PLANS.STARTER, _v20.PLANS.PLUS].includes(_v3) ? 3 : 4;
      return _v2 && _v2.length > 0 ? (0, _v1.jsxs)(_v62, {
        children: [(0, _v1.jsx)(_v32.Text, {
          variant: {
            base: "heading-xs",
            md: "heading-sm",
            xl: "heading-xs"
          },
          fontWeight: "600",
          children: _v1
        }), (0, _v1.jsx)(_v63, {
          children: _v2.slice(0, _v4).map((_v0, _v1) => (0, _v1.jsxs)(_v64, {
            children: [(0, _v1.jsx)("div", {
              children: (0, _v1.jsx)(_v56.Checkmark, {
                height: (0, _v28.rem)(16),
                width: (0, _v28.rem)(16)
              })
            }), (0, _v1.jsx)(_v32.Text, {
              variant: {
                base: "body-md",
                md: "body-lg",
                xl: "body-md"
              },
              children: _v0
            })]
          }, `${_v3}-feature-${_v1}`))
        })]
      }) : null;
    },
    _v70 = ({
      planData: _v0,
      modalConfig: _v1,
      hideSubheading: _v2
    }) => {
      let _v3 = (0, _v21.getPlanSubHeading)(_v1, _v0),
        _v4 = (0, _v21.getBandwidthSubHeader)(_v0);
      return (0, _v1.jsxs)(_v59, {
        style: {
          height: _v2 ? "" : "4rem"
        },
        children: [(0, _v1.jsx)(_v60, {
          children: _v0.name
        }), (0, _v1.jsx)(_v31.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v4
        }), (!_v2 && !_v0.metadata.isBandwidthProduct && _v3 && _v3.length) > 0 ? (0, _v1.jsx)(_v61, {
          children: _v3
        }) : null]
      });
    };
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = ({
    planData: _v0,
    displayMonthlyPlan: _v1
  }) => {
    let {
        entitlements: _v2
      } = _v0.metadata,
      _v3 = _v0.metadata.isBandwidthProduct,
      _v4 = (0, _v72.useViewer)(),
      _v5 = (0, _v21.isUkLocation)(_v4?.location),
      _v6 = (_v5 ? (0, _v21.getUkVatDisplayPrice)(_v0, _v1, _v3) : null) ?? (0, _v21.getPlanDisplayPrice)(_v0, _v1, _v3);
    return (0, _v1.jsx)(_v3.Flex, {
      flexDirection: "column",
      gap: {
        base: "xs",
        md: "sm",
        xl: "xs"
      },
      minHeight: {
        base: "initial",
        xl: (0, _v28.rem)(80)
      },
      maxHeight: {
        base: "initial",
        xl: (0, _v28.rem)(80)
      },
      children: _v0.tier === _v20.PLANS.ENTERPRISE ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v32.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: (0, _v1.jsx)(_v71.Building, {
            h: (0, _v28.rem)(40),
            w: (0, _v28.rem)(40)
          })
        }), (0, _v1.jsx)(_v32.Text, {
          variant: {
            base: "body-sm",
            md: "body-md",
            xl: "body-sm"
          },
          textColor: "text-secondary",
          marginBottom: {
            base: "md",
            md: "sm",
            xl: "md"
          },
          children: _v25.default.talkToTeam
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v32.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl",
            xl: "heading-xl"
          },
          children: _v6
        }), (0, _v1.jsxs)(_v32.Text, {
          variant: {
            base: "body-sm",
            md: "body-md",
            xl: "body-sm"
          },
          textColor: "text-secondary",
          marginBottom: {
            base: "md",
            md: "sm",
            xl: "md"
          },
          children: [_v3 ? null : (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v20.SEAT_TIER_PLANS.includes(_v0.tier) ? _v2?.params?.videoStorageQuotaUnit === "video_size" ? _v25.default.perMonthBilledAnually : _v25.default.perSeatPerMonth : _v25.default.perMonth, (0, _v1.jsx)("br", {})]
          }), (0, _v21.getPlanBillingFrequencyCopy)(_v1, _v0, _v3), (0, _v1.jsx)("br", {}), _v5 ? _v25.default.inclVat20 : _v25.default.plusApplicableTax]
        })]
      })
    });
  };
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = _v0 => {
    let {
        planData: _v1,
        modalConfig: _v2
      } = _v0,
      _v3 = (0, _v21.getPlanQuota)(_v1),
      {
        entitlements: _v4
      } = _v1.metadata,
      _v5 = _v2?.planOverrides?.[_v1.tier]?.seatCopy,
      _v6 = _v0 => (0, _v1.jsx)(_v32.Text, {
        variant: {
          base: "body-md",
          md: "body-lg",
          xl: "body-md"
        },
        children: _v0
      });
    if ((0, _v21.isRepackagingTier)(_v1.tier)) {
      let _v0 = _v4?.params?.teamSeats,
        _v1 = _v4?.params?.restrictedVideoStorageLimit ?? _v4?.params?.videoStoragePeriodicQuota ?? "",
        _v2 = _v4?.params?.videoStoragePeriodicQuota ?? "",
        _v3 = _v4?.params?.bandwidth?.periodicQuota ?? "",
        _v4 = _v4?.params?.bandwidth?.quotaPeriod === "year",
        _v5 = _v5 ? `${_v0} ${_v5}` : (() => {
          switch (_v1.tier) {
            case _v20.PLANS.PROFESSIONAL:
              return (0, _v43.translate)({
                singular: "{AMOUNT} users (up to {ADD_USERS})",
                replacements: {
                  AMOUNT: _v0,
                  ADD_USERS: 20
                },
                dictionary: {
                  es: {
                    singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                  },
                  "de-DE": {
                    singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                  },
                  "fr-FR": {
                    singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                  },
                  "ja-JP": {
                    singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                  },
                  "ko-KR": {
                    singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                  },
                  "pt-BR": {
                    singular: "{AMOUNT} usuários (até {ADD_USERS})"
                  },
                  "zh-CN": {
                    singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                  }
                }
              });
            case _v20.PLANS.STUDIO:
              return (0, _v43.translate)({
                singular: "{AMOUNT} users (up to {ADD_USERS})",
                replacements: {
                  AMOUNT: _v0,
                  ADD_USERS: 200
                },
                dictionary: {
                  es: {
                    singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                  },
                  "de-DE": {
                    singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                  },
                  "fr-FR": {
                    singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                  },
                  "ja-JP": {
                    singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                  },
                  "ko-KR": {
                    singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                  },
                  "pt-BR": {
                    singular: "{AMOUNT} usuários (até {ADD_USERS})"
                  },
                  "zh-CN": {
                    singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                  }
                }
              });
            case _v20.PLANS.PRODUCTION:
              return (0, _v43.translate)({
                singular: "{AMOUNT} users (up to {ADD_USERS})",
                replacements: {
                  AMOUNT: _v0,
                  ADD_USERS: (0, _v43.translate)({
                    singular: "Unlimited",
                    dictionary: {
                      es: {
                        singular: "Ilimitado"
                      },
                      "de-DE": {
                        singular: "Unbegrenzt"
                      },
                      "fr-FR": {
                        singular: "Illimité"
                      },
                      "ja-JP": {
                        singular: "無制限"
                      },
                      "ko-KR": {
                        singular: "무제한"
                      },
                      "pt-BR": {
                        singular: "Ilimitado"
                      },
                      "zh-CN": {
                        singular: "无限"
                      }
                    }
                  })
                },
                dictionary: {
                  es: {
                    singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                  },
                  "de-DE": {
                    singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                  },
                  "fr-FR": {
                    singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                  },
                  "ja-JP": {
                    singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                  },
                  "ko-KR": {
                    singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                  },
                  "pt-BR": {
                    singular: "{AMOUNT} usuários (até {ADD_USERS})"
                  },
                  "zh-CN": {
                    singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                  }
                }
              });
            default:
              return (0, _v43.translate)({
                singular: "{AMOUNT} user",
                plural: "{AMOUNT} users",
                count: _v0 ?? 0,
                replacements: {
                  AMOUNT: _v0
                },
                dictionary: {
                  es: {
                    singular: "{AMOUNT} usuario",
                    plural: "{AMOUNT} usuarios"
                  },
                  "de-DE": {
                    singular: "{AMOUNT} Nutzer",
                    plural: "{AMOUNT} Nutzer"
                  },
                  "fr-FR": {
                    singular: "{AMOUNT} utilisateur",
                    plural: "{AMOUNT} utilisateurs"
                  },
                  "ja-JP": {
                    singular: "{AMOUNT}ユーザー",
                    plural: "{AMOUNT}ユーザー"
                  },
                  "ko-KR": {
                    singular: "{AMOUNT} 사용자",
                    plural: "{AMOUNT} 사용자"
                  },
                  "pt-BR": {
                    singular: "{AMOUNT} usuário",
                    plural: "{AMOUNT} usuários"
                  },
                  "zh-CN": {
                    singular: "{AMOUNT} 用户",
                    plural: "{AMOUNT} 用户"
                  }
                }
              });
          }
        })(),
        _v6 = [{
          icon: (0, _v1.jsx)(_v76.Users, {
            h: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            },
            w: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            }
          }),
          value: _v5
        }, {
          icon: (0, _v1.jsx)(_v75.Database, {
            h: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            },
            w: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            }
          }),
          value: (0, _v43.translate)({
            singular: "{AMOUNT} managed storage for embeddable and non-Public videos",
            replacements: {
              AMOUNT: _v1
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de almacenamiento gestionado para vídeos incrustables y no públicos"
              },
              "de-DE": {
                singular: "{AMOUNT} verwalteter Speicher für einbettbare und nicht-öffentliche Videos"
              },
              "fr-FR": {
                singular: "{AMOUNT} de stockage géré pour les vidéos intégrables et non publiques"
              },
              "ja-JP": {
                singular: "{AMOUNT}の埋め込み可能および非公開動画向け管理ストレージ"
              },
              "ko-KR": {
                singular: "{AMOUNT} 임베드 가능 및 비공개 동영상용 관리형 저장공간"
              },
              "pt-BR": {
                singular: "{AMOUNT} de armazenamento gerenciado para vídeos incorporáveis e não públicos"
              },
              "zh-CN": {
                singular: "{AMOUNT} 托管存储，用于可嵌入和非公开视频"
              }
            }
          })
        }, ...(_v1.tier === _v20.PLANS.CREATOR ? [{
          icon: (0, _v1.jsx)(_v75.Database, {
            h: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            },
            w: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            }
          }),
          value: (0, _v43.translate)({
            singular: "{AMOUNT} total storage (including public, non-embedded videos)",
            replacements: {
              AMOUNT: _v2
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de almacenamiento total (incluye vídeos públicos no incrustados)"
              },
              "de-DE": {
                singular: "{AMOUNT} Gesamtspeicher (einschließlich öffentlicher, nicht eingebetteter Videos)"
              },
              "fr-FR": {
                singular: "{AMOUNT} de stockage total (y compris les vidéos publiques, non intégrées)"
              },
              "ja-JP": {
                singular: "{AMOUNT}の合計ストレージ（公開、埋め込みされていない動画を含む）"
              },
              "ko-KR": {
                singular: "{AMOUNT} 총 저장 공간(공개 및 비임베드 동영상 포함)"
              },
              "pt-BR": {
                singular: "{AMOUNT} de armazenamento total (inclui vídeos públicos, não incorporados)"
              },
              "zh-CN": {
                singular: "{AMOUNT} 总存储 (包括公开、非嵌入视频)"
              }
            }
          })
        }] : []), {
          icon: (0, _v1.jsx)(_v74.Speedometer, {
            h: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            },
            w: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            }
          }),
          value: _v4 ? (0, _v43.translate)({
            singular: "{AMOUNT} yearly bandwidth",
            replacements: {
              AMOUNT: _v3
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de ancho de banda anual"
              },
              "de-DE": {
                singular: "{AMOUNT} Bandbreite pro Jahr"
              },
              "fr-FR": {
                singular: "{AMOUNT} de bande passante annuelle"
              },
              "ja-JP": {
                singular: "{AMOUNT} の年間帯域幅"
              },
              "ko-KR": {
                singular: "{AMOUNT} 연간 대역폭"
              },
              "pt-BR": {
                singular: "{AMOUNT} de largura de banda anual"
              },
              "zh-CN": {
                singular: "{AMOUNT} 年带宽"
              }
            }
          }) : (0, _v43.translate)({
            singular: "{AMOUNT} monthly bandwidth",
            replacements: {
              AMOUNT: _v3
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de ancho de banda mensual"
              },
              "de-DE": {
                singular: "{AMOUNT} monatliche Bandbreite"
              },
              "fr-FR": {
                singular: "{AMOUNT} de bande passante mensuelle"
              },
              "ja-JP": {
                singular: "{AMOUNT}の月間帯域幅"
              },
              "ko-KR": {
                singular: "{AMOUNT} 월간 대역폭"
              },
              "pt-BR": {
                singular: "{AMOUNT} de largura de banda mensal"
              },
              "zh-CN": {
                singular: "{AMOUNT} 每月带宽"
              }
            }
          })
        }];
      return (0, _v1.jsx)(_v66, {
        children: (0, _v1.jsx)(_v67, {
          children: _v6.map((_v0, _v1) => (0, _v1.jsxs)(_v68, {
            children: [(0, _v1.jsx)("div", {
              children: _v0.icon
            }), _v6(_v0.value)]
          }, `${_v1.tier}-quota-${_v1}`))
        })
      });
    }
    if (!_v3) return null;
    let {
        getSeatCount: _v7,
        getVideoCount: _v8,
        getStorageQuota: _v9,
        getBandwidth: _v10
      } = _v3,
      _v11 = _v4?.params?.videoStorageQuotaUnit === "video_size";
    return (0, _v1.jsx)(_v66, {
      children: (0, _v1.jsxs)(_v67, {
        children: [(0, _v1.jsxs)(_v68, {
          children: [(0, _v1.jsx)("div", {
            children: (0, _v1.jsx)(_v76.Users, {
              h: {
                base: (0, _v28.rem)(16),
                md: (0, _v28.rem)(20),
                xl: (0, _v28.rem)(16)
              },
              w: {
                base: (0, _v28.rem)(16),
                md: (0, _v28.rem)(20),
                xl: (0, _v28.rem)(16)
              }
            })
          }), (0, _v1.jsx)(_v32.Text, {
            variant: {
              base: "body-md",
              md: "body-lg",
              xl: "body-md"
            },
            children: _v5 ? `${_v4?.params?.teamSeats} ${_v5}` : _v7(_v4?.params?.teamSeats, !0)
          })]
        }), (0, _v1.jsxs)(_v68, {
          children: [_v11 ? (0, _v1.jsx)(_v75.Database, {
            h: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            },
            w: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            }
          }) : (0, _v1.jsx)(_v77.VideosStack, {
            h: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            },
            w: {
              base: (0, _v28.rem)(16),
              md: (0, _v28.rem)(20),
              xl: (0, _v28.rem)(16)
            }
          }), _v6(_v11 ? _v9(_v4?.params?.videoStoragePeriodicQuota) : _v8(_v4?.params?.videoStoragePeriodicQuota))]
        }), _v10 && _v1.metadata.isBandwidthProduct && (0, _v1.jsxs)(_v68, {
          children: [(0, _v1.jsx)("div", {
            children: (0, _v1.jsx)(_v74.Speedometer, {
              h: {
                base: (0, _v28.rem)(16),
                md: (0, _v28.rem)(20),
                xl: (0, _v28.rem)(16)
              },
              w: {
                base: (0, _v28.rem)(16),
                md: (0, _v28.rem)(20),
                xl: (0, _v28.rem)(16)
              }
            })
          }), _v6(_v10(_v4?.params?.bandwidth?.periodicQuota))]
        })]
      })
    });
  };
  var _v79 = _v0.i(0);
  let _v80 = _v45.default.div.withConfig({
      displayName: "styles__LinkContainer",
      componentId: "sc-3c30b0dd-0"
    })`
  font-size: ${(0, _v28.rem)(14)};
  margin-top: ${(0, _v28.rem)(8)};
  padding: ${(0, _v28.rem)(11)} ${(0, _v28.rem)(16)};
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: ${(0, _v28.rem)(17.64)};
  width: 100%;

  a:after {
    content: none;
  }

  a {
    text-decoration: underline !important;
  }
`,
    _v81 = ({
      allowFreeTrial: _v0,
      ctaTreatment: _v1 = "purchase_secondary",
      planData: _v2,
      displayMonthlyPlan: _v3
    }) => {
      let _v4 = (0, _v2.useRef)(void 0),
        _v5 = (0, _v2.useRef)(void 0),
        [_v6, _v7] = (0, _v2.useState)(void 0),
        _v8 = (0, _v2.useContext)(_v17.default),
        _v9 = _v2.tier === _v20.PLANS.ENTERPRISE,
        _v10 = "free_trial_secondary" === _v1 && _v0,
        _v11 = "purchase_secondary" === _v1,
        _v12 = (0, _v2.useCallback)(() => {
          let {
              tier: _v0,
              price: _v1,
              currency: _v2
            } = _v2,
            _v3 = _v4?.current?.replace(/{\/?A}/g, "").trim();
          _v24({
            ..._v8.params,
            copy: _v3,
            currency: _v2.currencyCode,
            device_type: _v8.device_type,
            duration: _v3 ? "monthly" : "annual",
            is_new_pricing: (0, _v21.isSeatTierPlan)(_v0),
            path: window.location.href,
            plan_selected: _v0,
            price: _v3 ? _v1.monthly : _v1.annualMonthly,
            purchase_type: _v10 ? "trial" : "direct",
            target: "checkout",
            target_path: _v5.current
          }, _v8.bpEventVersion), _v8.onButtonClick && _v8.onButtonClick({
            copy: _v3,
            duration: _v3 ? "monthly" : "annual",
            price: _v3 ? _v1.monthly : _v1.annualMonthly,
            currency: _v2.currencyCode,
            plan_selected: _v0,
            target_path: _v5.current,
            free_trial: _v10
          });
        }, [_v3, _v10, _v2, _v8]),
        _v13 = (0, _v2.useMemo)(() => (0, _v43.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: (0, _v21.appendPaywallParams)((0, _v21.appendExtraQueryParams)((0, _v21.appendTrackingQueryParams)(_v2.metadata.interactions.purchase.uri.freeTrial, _v8.params), (0, _v79.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking),
              onClick: _v12,
              rel: "noreferrer",
              children: _v0
            }, "start-fee-trial-link")
          },
          dictionary: {
            es: {
              singular: "o {A}iniciar una prueba gratis{/A}"
            },
            "de-DE": {
              singular: "oder {A}mache ein Probeabo{/A}"
            },
            "fr-FR": {
              singular: "ou bien {A}commencez l'essai gratuit{/A}"
            },
            "ja-JP": {
              singular: "または{A}無料トライアルを始める{/A}"
            },
            "ko-KR": {
              singular: "또는 {A}무료로 체험해보세요{/A}"
            },
            "pt-BR": {
              singular: "ou {A}faça um teste gratuito{/A}"
            },
            "zh-CN": {
              singular: "或{A}开始免费试用{/A}"
            }
          }
        }), [_v12, _v2.metadata.interactions.purchase.uri.freeTrial, _v8.params, _v8.paywallTracking]),
        _v14 = (0, _v2.useMemo)(() => (0, _v43.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)("a", {
              target: "_blank",
              href: (0, _v21.appendPaywallParams)((0, _v21.appendExtraQueryParams)((0, _v21.appendTrackingQueryParams)((0, _v21.getPlanCTALink)(_v2, _v3, _v8.campaignOverride), _v8.params), (0, _v79.getSatelliteCheckoutParamsFromCurrentLocation)()), _v8.paywallTracking),
              onClick: _v12,
              rel: "noreferrer",
              children: _v0
            }, "purchase-now-link")
          },
          dictionary: {
            es: {
              singular: "o {A}comprar ahora{/A}"
            },
            "de-DE": {
              singular: "oder {A}jetzt kaufen{/A}"
            },
            "fr-FR": {
              singular: "ou bien {A}achetez maintenant{/A}"
            },
            "ja-JP": {
              singular: "または{A}今すぐ購入{/A}"
            },
            "ko-KR": {
              singular: "또는 {A}지금 바로 구매하세요.{/A}"
            },
            "pt-BR": {
              singular: "ou {A}compre agora{/A}"
            },
            "zh-CN": {
              singular: "或者{A}立即购买{/A}"
            }
          }
        }), [_v12, _v2, _v3, _v8.params, _v8.campaignOverride, _v8.paywallTracking]);
      return (0, _v2.useEffect)(() => {
        let _v0,
          _v1 = "",
          _v2 = "";
        _v10 ? (_v0 = _v13, _v1 = "or start free trial", _v2 = _v2.metadata.interactions.purchase.uri.freeTrial) : _v11 && (_v0 = _v14, _v1 = "or {A}purchase now{/A}", _v2 = (0, _v21.getPlanCTALink)(_v2, _v3, _v8.campaignOverride)), _v4.current = _v1, _v5.current = _v2, _v7(_v0);
      }, [_v10, _v11, _v3, _v2, _v13, _v14]), _v6 && !_v9 ? (0, _v1.jsx)(_v80, {
        "data-testid": "upsell-cta",
        children: _v6
      }) : (0, _v1.jsx)(_v80, {
        children: " "
      });
    },
    _v82 = ({
      ctaTreatment: _v0,
      planData: _v1,
      displayMonthlyPlan: _v2,
      submitButtonText: _v3,
      buttonRadius: _v4,
      buttonXPadding: _v5,
      buttonYPadding: _v6,
      buttonBottomSpacing: _v7,
      border: _v8,
      color: _v9,
      backgroundColor: _v10,
      whiteSpace: _v11,
      allowFreeTrial: _v12
    }) => {
      let _v13,
        _v14,
        _v15,
        _v16 = (0, _v2.useContext)(_v17.default),
        _v17 = _v1.tier === _v20.PLANS.ENTERPRISE;
      _v0 || (_v0 = _v12 ? "purchase_secondary" : "free_trial_secondary"), _v17 ? (_v13 = _v25.default.contactSales, _v14 = "/enterprise/contact?mkc=ent-upgrade-plan-modal", _v15 = "direct") : _v12 && ("free_trial_only" === _v0 || "purchase_secondary" === _v0) ? (_v13 = _v25.default.startFreeTrial, _v14 = _v1.metadata.interactions.purchase.uri.freeTrial, _v15 = "trial") : (_v13 = _v25.default.upgrade, _v14 = (0, _v21.getPlanCTALink)(_v1, _v2, _v16.campaignOverride), _v15 = "direct"), _v3 && (_v13 = _v3);
      let _v18 = "purchase_secondary" === _v0 || "free_trial_secondary" === _v0 && _v12;
      return (0, _v1.jsxs)(_v30.Box, {
        w: "100%",
        marginBottom: (0, _v28.rem)(8),
        children: [(0, _v1.jsx)(_v26.Button, {
          "data-testid": "upsell-cta",
          onClick: () => {
            _v24({
              ..._v16.params,
              copy: _v13,
              currency: _v1.currency.currencyCode,
              device_type: _v16.device_type,
              duration: _v2 ? "monthly" : "annual",
              is_new_pricing: (0, _v21.isSeatTierPlan)(_v1.tier),
              path: window.location ? window.location.href : "",
              plan_selected: _v1.tier,
              price: _v2 ? _v1.price.monthly : _v1.price.annualMonthly,
              purchase_type: _v15,
              target: _v17 ? "enterprise_contact_page" : "checkout",
              target_path: _v14
            }, _v16.bpEventVersion), _v16.onButtonClick && _v16.onButtonClick({
              copy: _v13,
              duration: _v2 ? "monthly" : "annual",
              price: _v2 ? _v1.price.monthly : _v1.price.annualMonthly,
              currency: _v1.currency.currencyCode,
              plan_selected: _v1.tier,
              target_path: _v14,
              free_trial: _v12 && !_v17
            });
          },
          as: "a",
          target: "_blank",
          w: "100%",
          href: (0, _v21.appendExtraQueryParams)((0, _v21.appendPaywallParams)((0, _v21.appendTrackingQueryParams)(_v14, _v16.params), _v16.paywallTracking), _v17 ? void 0 : (0, _v79.getSatelliteCheckoutParamsFromCurrentLocation)()),
          size: "md",
          ...(!_v17 && {
            _hover: {
              backgroundColor: "vimeoBlue.300"
            }
          }),
          backgroundColor: _v10 || (_v17 ? "text-primary" : "fill-brand"),
          marginBottom: _v7,
          paddingY: _v6,
          paddingX: _v5,
          borderRadius: _v4,
          border: _v8,
          color: _v9,
          whiteSpace: _v11,
          children: _v13
        }), _v18 && (0, _v1.jsx)(_v81, {
          "data-testid": "upsell-secondary-cta",
          allowFreeTrial: _v12,
          ctaTreatment: _v0,
          displayMonthlyPlan: _v2,
          planData: _v1
        })]
      });
    },
    _v83 = _v0 => {
      let _v1 = _v0.planData.tier === _v20.PLANS.ENTERPRISE,
        _v2 = (0, _v55.useTheme)(),
        {
          showRecommendedBadge: _v3
        } = _v0,
        {
          colorMode: _v4
        } = (0, _v54.useColorMode)(),
        {
          semanticTokens: {
            colors: _v5
          }
        } = _v2,
        _v6 = "dark" === _v4 ? _v5["text-primary"].default : "white";
      return "dark" === _v4 ? _v5.grayscale["200"] : _v5.grayscale["700"], (0, _v1.jsxs)(_v30.Box, {
        display: "flex",
        maxW: {
          base: "100%",
          xl: "19.5rem"
        },
        padding: {
          base: "lg",
          md: "xl",
          xl: "lg"
        },
        flexDir: "column",
        alignItems: "flex-start",
        gap: {
          base: "md",
          md: "lg",
          xl: "md"
        },
        flex: "1 0 0",
        alignSelf: "stretch",
        background: _v6,
        borderRadius: (0, _v28.rem)(20),
        border: _v3 ? "4px solid #8a5ee8" : `${(0, _v28.rem)(1)} solid ${_v5.slate["200"]}`,
        borderTop: _v3 ? "none" : void 0,
        marginTop: {
          base: _v3 ? (0, _v28.rem)(20) : void 0,
          xl: 0
        },
        position: "relative",
        width: {
          base: "100%",
          md: (0, _v28.rem)(618),
          xl: "100%"
        },
        flexDirection: {
          base: "column",
          md: "row",
          xl: "column"
        },
        children: [_v0.showRecommendedBadge ? (0, _v1.jsx)(_v65, {
          children: _v25.default.recommended
        }) : null, (0, _v1.jsxs)(_v3.Flex, {
          gap: "1rem",
          flexDirection: "column",
          width: {
            base: "100%",
            md: (0, _v28.rem)(220),
            xl: "100%"
          },
          children: [(0, _v1.jsx)(_v70, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            hideSubheading: _v0.hideSubheading
          }), (0, _v1.jsx)(_v73, {
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan
          }), (0, _v1.jsx)(_v82, {
            planData: _v0.planData,
            ctaTreatment: _v0.modalConfig?.ctaTreatment,
            allowFreeTrial: _v0?.allowFreeTrial,
            displayMonthlyPlan: _v0.displayMonthlyPlan,
            color: _v1 ? _v6 : "#0a0e12",
            backgroundColor: _v1 ? _v2?.modal?.planCard?.background ?? _v5["text-primary"].default : _v5["fill-brand"].default,
            border: _v1 ? `1px solid ${_v2?.modal?.enterprise?.border ?? "#000"}` : "none",
            buttonBottomSpacing: "0",
            whiteSpace: "break-spaces"
          })]
        }), (0, _v1.jsxs)(_v3.Flex, {
          gap: "lg",
          flexDirection: "column",
          children: [(0, _v1.jsx)(_v78, {
            modalConfig: _v0.modalConfig,
            planData: _v0.planData,
            displayMonthlyPlan: _v0.displayMonthlyPlan
          }), (0, _v1.jsx)(_v69, {
            planData: _v0.planData,
            modalConfig: _v0.modalConfig,
            previousCardPlan: _v0.previousCardPlan
          })]
        })]
      });
    },
    _v84 = _v0 => {
      let {
          showIndividualPlans: _v1
        } = (0, _v52.useB2BRepackagingContext)(),
        _v2 = _v1 ? _v0.modalConfig?.excludePlans : [...(_v0.modalConfig?.excludePlans ?? []), _v20.PLANS.CREATOR, _v20.PLANS.PROFESSIONAL],
        _v3 = (0, _v21.filterPlansData)(_v0.plansData, _v0.userData, _v2),
        _v4 = _v0.modalConfig?.hidePlansSummary || _v3.length > 0 && (0, _v21.isSolutionTier)(_v3[0].tier),
        _v5 = (0, _v21.isEligibleForFreeTrial)(_v0.userData) && _v3 && !!_v3[0].metadata.interactions.purchase.uri.freeTrial;
      return (0, _v1.jsx)(_v53.Stack, {
        position: "relative",
        zIndex: 1,
        padding: `1rem 0 ${(0, _v28.rem)(20)} 0`,
        direction: {
          base: "column",
          xl: "row"
        },
        gap: "md",
        justifyContent: "center",
        children: _v3.map((_v0, _v1) => {
          let _v2 = (0, _v21.getPreviousPlanTierCopy)(_v3, _v0, _v1),
            _v3 = _v1 > 0 ? _v3[_v1 - 1].tier : null;
          return _v1 < 4 && (0, _v1.jsx)(_v83, {
            planData: _v0,
            userData: _v0.userData,
            previousCardPlan: _v2,
            modalConfig: _v0.modalConfig,
            showRecommendedBadge: _v0.modalConfig?.recommendedPlan ? _v0.tier === _v0.modalConfig?.recommendedPlan : (0, _v21.showRecommendedBadge)(_v0, _v1, _v3),
            displayMonthlyPlan: (0, _v21.showMonthlyPlans)(_v0.plansData),
            hideSubheading: _v4,
            allowFreeTrial: _v5
          }, `plan-card-${_v0.tier}`);
        })
      });
    },
    _v85 = _v0 => {
      let {
          modalConfig: _v1,
          plansData: _v2
        } = _v0,
        _v3 = _v1?.featuredBannerText,
        _v4 = _v2?.length && (0, _v21.isSeatTierPlan)(_v2[0].tier) ? _v3 ?? (0, _v43.translate)({
          singular: "This feature is included in all paid plans",
          dictionary: {
            es: {
              singular: "Esta característica está incluida en todos los planes de pago."
            },
            "de-DE": {
              singular: "Diese Funktion ist in allen kostenpflichtigen Tarifen enthalten."
            },
            "fr-FR": {
              singular: "Cette fonctionnalité est incluse dans tous les abonnements payants"
            },
            "ja-JP": {
              singular: "この機能はすべての有料プランに含まれています"
            },
            "ko-KR": {
              singular: "이 기능은 모든 유료 요금제에 포함되어 있습니다."
            },
            "pt-BR": {
              singular: "O recurso está incluído em todos os planos pagos"
            },
            "zh-CN": {
              singular: "所有付费套餐均包含此功能"
            }
          }
        }) : (0, _v43.translate)({
          singular: "Upgrade to unlock more features",
          dictionary: {
            es: {
              singular: "Actualice su plan para desbloquear más funciones"
            },
            "de-DE": {
              singular: "Upgrade vornehmen, um weitere Funktionen freizuschalten"
            },
            "fr-FR": {
              singular: "Mettez votre abonnement à niveau pour débloquer plus de fonctionnalités"
            },
            "ja-JP": {
              singular: "アップグレードでさらに多くの機能にアクセス"
            },
            "ko-KR": {
              singular: "업그레이드하여 더 많은 기능을 이용해 보세요."
            },
            "pt-BR": {
              singular: "Faça upgrade para ter acesso a mais recursos"
            },
            "zh-CN": {
              singular: "升级以解锁更多功能"
            }
          }
        });
      _v1 && (_v1.hasFreeFeaturedBanner = _v1?.hasFreeFeaturedBanner || void 0 !== _v3);
      let _v5 = _v1?.hasFreeFeaturedBanner;
      return (0, _v1.jsxs)(_v4.Modal, {
        "data-testid": "default-upsell-container",
        isOpen: !0,
        onClose: _v0.onClose,
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsx)(_v7.ModalContent, {
          top: {
            base: "initial",
            sm: "sm",
            md: "lg",
            xl: "initial"
          },
          marginTop: _v5 ? (0, _v28.rem)(40) : void 0,
          alignSelf: {
            base: "flex-start",
            xl: "center"
          },
          maxWidth: {
            sm: (0, _v28.rem)(375),
            md: (0, _v28.rem)(618),
            lg: (0, _v28.rem)(618),
            xl: (0, _v28.rem)(0)
          },
          children: (0, _v1.jsxs)(_v5.ModalBody, {
            padding: {
              base: "md",
              xl: "lg"
            },
            children: [_v5 && (0, _v1.jsx)(_v30.Box, {
              borderRadius: "xl",
              position: "absolute",
              width: "100%",
              top: (0, _v28.rem)(-40),
              left: 0,
              verticalAlign: "middle",
              justifyItems: "center",
              pt: "sm",
              pb: "sm",
              pr: "md",
              pl: "md",
              backgroundColor: "upsell-secondary",
              height: (0, _v28.rem)(80),
              zIndex: -1,
              children: (0, _v1.jsxs)(_v40.HStack, {
                children: [(0, _v1.jsx)(_v42, {
                  h: "xs",
                  w: "xs",
                  color: "white",
                  backgroundColor: "upsell-primary",
                  borderRadius: (0, _v28.rem)(6),
                  padding: (0, _v28.rem)(4)
                }), (0, _v1.jsx)(_v32.Text, {
                  variant: "body-lg",
                  color: "text-primary",
                  children: _v4
                })]
              })
            }), (0, _v1.jsx)(_v51, {
              modalConfig: _v1,
              onClose: _v0.onClose,
              userName: _v0.userData?.name
            }), _v0.userData && _v2 && (0, _v1.jsx)(_v84, {
              modalConfig: _v1,
              userData: _v0.userData,
              plansData: _v2
            }), (0, _v1.jsx)(_v50, {})]
          })
        })]
      });
    };
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  let _v88 = _v0 => (0, _v1.jsx)(_v41.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M19.99 12.382a1 1 0 0 0 0-.764 1 1 0 0 0-.212-.325L14.124 5.64a1 1 0 0 0-1.414 1.414l3.951 3.95-11.725-.007a1.001 1.001 0 0 0-.928 1.389 1 1 0 0 0 .928.619l11.725-.007-3.95 3.95a1 1 0 1 0 1.413 1.414l5.654-5.654a1 1 0 0 0 .212-.325Z",
        fill: "currentColor"
      })
    }),
    _v89 = ({
      text: _v0
    }) => (0, _v1.jsx)(_v3.Flex, {
      margin: `${(0, _v28.rem)(8)} 0`,
      color: "white",
      fontWeight: 500,
      listStyleType: "none",
      children: (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)(_v56.Checkmark, {
          position: "relative",
          top: (0, _v28.rem)(4),
          width: (0, _v28.rem)(20),
          height: (0, _v28.rem)(20),
          marginRight: (0, _v28.rem)(8),
          color: "white"
        }), _v0]
      })
    }),
    _v90 = () => {
      let _v0 = _v20.enterpriseDefaultFeatures.featuresList || [];
      return (0, _v1.jsx)(_v3.Flex, {
        direction: "column",
        children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v89, {
          text: _v0
        }, String(_v1)))
      });
    },
    _v91 = ({
      src: _v0,
      title: _v1,
      onLoad: _v2
    }) => {
      let _v3 = (0, _v34.useIsMobile)();
      return (0, _v1.jsx)(_v30.Box, {
        position: "relative",
        overflow: "hidden",
        maxHeight: _v3 ? `calc(100vh - ${(0, _v28.rem)(172)})` : (0, _v28.rem)(687),
        maxWidth: _v3 ? "100%" : (0, _v28.rem)(600),
        minWidth: (0, _v28.rem)(375),
        height: (0, _v28.rem)(687),
        borderRadius: _v3 ? `0 0 ${(0, _v28.rem)(20)} ${(0, _v28.rem)(20)}` : `0 ${(0, _v28.rem)(20)} ${(0, _v28.rem)(20)} 0`,
        sx: {
          "& > iframe": {
            position: "absolute",
            left: "0",
            top: "0",
            height: "100%",
            width: "100%",
            border: "0",
            overflow: "hidden"
          }
        },
        children: (0, _v1.jsx)("iframe", {
          id: "marktoFromIframe",
          src: _v0,
          title: _v1,
          onLoad: _v2
        })
      });
    },
    _v92 = ({
      modalConfig: _v0
    }) => {
      let {
          enterpriseTitle: _v1,
          enterpriseSubtitle: _v2
        } = _v0 || {},
        _v3 = (0, _v21.getEnterpriseModalTitle)(_v1),
        _v4 = (0, _v21.getEnterpriseSubtitle)(_v2);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v3 && (0, _v1.jsx)(_v31.Header, {
          as: "h1",
          size: "lg",
          marginBottom: (0, _v28.rem)(8),
          children: _v3
        }), _v4 && (0, _v1.jsx)(_v31.Header, {
          as: "h3",
          size: "xs",
          marginBottom: (0, _v28.rem)(24),
          children: _v4
        })]
      });
    },
    _v93 = ({
      userData: _v0,
      onClose: _v1,
      tracking: _v2,
      modalConfig: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(!0),
        {
          colors: _v6
        } = (0, _v55.useTheme)(),
        {
          colorMode: _v7
        } = (0, _v54.useColorMode)(),
        _v8 = (0, _v34.useIsMobile)(),
        _v9 = (0, _v2.useContext)(_v17.default);
      (0, _v2.useEffect)(() => {
        let _v0 = _v0 => {
          _v0.data === _v20.CLOSE_EVENT_DATA && _v1();
        };
        return window.addEventListener("message", _v0), () => window.removeEventListener("message", _v0);
      }, [_v1]);
      let _v10 = {
          ..._v20.defaultBpEventParams,
          ..._v2.params,
          is_new_pricing: _v0 ? (0, _v21.isSeatTierPlan)(_v0?.membership?.type) : null,
          device_type: (0, _v21.getDeviceType)(),
          action_type: "click"
        },
        _v11 = _v3?.mkcCode ? "&mkc=" + _v3?.mkcCode : "",
        _v12 = _v20.ADVANCED_ENTERPRISE_UPSELL_FORM_URL + _v11 + "&tracking_param=" + encodeURIComponent(JSON.stringify(_v10)),
        _v13 = (0, _v21.getEnterpriseFooterLinkText)(_v3?.customFooterLinkText);
      return (0, _v1.jsxs)(_v4.Modal, {
        "data-testid": "enterprise-upsell-container",
        isOpen: !0,
        onClose: _v1,
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v8.ModalOverlay, {
          zIndex: 0
        }), _v4 && (0, _v1.jsx)(_v3.Flex, {
          position: "absolute",
          top: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          visibility: "visible",
          zIndex: 0,
          children: (0, _v1.jsx)(_v86.Spinner, {
            size: "md",
            color: _v6.vimeoBlue["600"]
          })
        }), (0, _v1.jsxs)(_v7.ModalContent, {
          maxW: _v8 ? (0, _v28.rem)(375) : (0, _v28.rem)(940),
          maxH: _v8 ? "100vh" : (0, _v28.rem)(820),
          padding: 0,
          visibility: _v4 ? "hidden" : "visible",
          zIndex: 0,
          children: [(0, _v1.jsx)(_v35, {
            onClose: _v1
          }), (0, _v1.jsx)(_v5.ModalBody, {
            padding: 0,
            maxH: _v8 ? "100vh" : (0, _v28.rem)(820),
            overflow: "hidden",
            borderRadius: (0, _v28.rem)(20),
            children: (0, _v1.jsxs)(_v29.Grid, {
              templateColumns: `${!_v8 ? `minmax(${(0, _v28.rem)(268)}, ${(0, _v28.rem)(340)}) minmax(${(0, _v28.rem)(350)}, ${(0, _v28.rem)(600)})` : "1fr"}`,
              height: "100%",
              maxH: _v8 ? "100vh" : (0, _v28.rem)(820),
              sx: {
                "::-webkit-scrollbar": {
                  display: "none"
                }
              },
              children: [(0, _v1.jsxs)(_v3.Flex, {
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "dark" === _v7 ? _v6.gray["900"] : _v6.blackAlpha["900"],
                height: _v8 ? (0, _v28.rem)(172) : "100%",
                maxWidth: _v8 ? "100%" : (0, _v28.rem)(400),
                minWidth: "md",
                padding: _v8 ? 6 : `${(0, _v28.rem)(32)} ${(0, _v28.rem)(40)}`,
                borderRadius: _v8 ? `${(0, _v28.rem)(20)} ${(0, _v28.rem)(20)} 0 0` : `${(0, _v28.rem)(20)} 0 0 ${(0, _v28.rem)(20)}`,
                children: [(0, _v1.jsx)(_v3.Flex, {
                  flex: "1",
                  flexDirection: "column",
                  color: _v6.white,
                  paddingRight: 6,
                  children: (0, _v1.jsxs)(_v30.Box, {
                    children: [(0, _v1.jsx)(_v92, {
                      modalConfig: _v3
                    }), !_v8 && (0, _v1.jsx)(_v3.Flex, {
                      direction: "column",
                      fontSize: {
                        xs: "body-md",
                        sm: "body-md",
                        lg: "body-lg"
                      },
                      children: _v3?.customFeaturesList || (0, _v1.jsx)(_v90, {})
                    })]
                  })
                }), !_v8 && (0, _v1.jsxs)(_v87.Link, {
                  href: "/enterprise",
                  variant: "primary",
                  textDecoration: "underline",
                  color: _v6.white,
                  onClick: () => {
                    _v24({
                      ..._v9.params,
                      copy: _v13,
                      device_type: _v9.device_type,
                      path: window.location.href,
                      page: window.parent.location.pathname,
                      location: "upsell_modal",
                      target: "/enterprise",
                      target_path: "/upgrade",
                      feature: "upgrade_cta"
                    }, _v9.bpEventVersion), _v9.onButtonClick && _v9.onButtonClick({
                      copy: _v13,
                      target_path: "/enterprise"
                    });
                  },
                  children: [_v13, (0, _v1.jsx)(_v88, {
                    marginLeft: (0, _v28.rem)(6)
                  })]
                })]
              }), (0, _v1.jsx)(_v91, {
                title: _v25.default.contactUs,
                src: _v12,
                onLoad: () => {
                  _v5(!1);
                  let _v0 = document.getElementById("marktoFromIframe"),
                    _v1 = _v0?.contentDocument || _v0?.contentWindow?.document,
                    _v2 = () => {
                      let _v0 = _v1?.querySelector("div#__next > div:nth-child(3) > div > div");
                      if (!_v0) return void setTimeout(_v2, 100);
                      let _v1 = _v1?.createElement("style");
                      _v1 && (_v1.textContent = `

        div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow > span > button:hover {
          color: ${_v6.blackAlpha[900]} !important;
        }

        @media screen and (max-width: ${(0, _v28.rem)(375)}) {
          div#__next > div:nth-child(3) > div > div {
            overflow: auto;
            padding: ${(0, _v28.rem)(24)} ${(0, _v28.rem)(24)} 0 ${(0, _v28.rem)(24)};
            border-bottom: ${(0, _v28.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
          }

          div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow {
            border-top: ${(0, _v28.rem)(24)} solid ${"dark" === _v7 ? _v6.gray[800] : _v6.white};
            z-index: 1;
            position: sticky;
            bottom: 0;
          }

          div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow::before {
            content: "";
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
            background-image: radial-gradient(circle at 100% 100%, transparent ${(0, _v28.rem)(25)}, ${"dark" === _v7 ? _v6.gray[800] : _v6.white} ${(0, _v28.rem)(8)});
          }

          div#__next > div:nth-child(3) > div > div > div > form > div.mktoButtonRow > span > button {
            margin: 0 !important;
          }

          div#__next > div:nth-child(3) {
            min-height: 100%;
            height: 100%;
          }

          div#__next > div:nth-child(3) > div {
            min-height: 100%;
            height: 100%;
          }

          html, body, div#__next {
            min-height: 100%;
            height: 100%;
          }
        }
      `, _v1?.head.appendChild(_v1)), _v0.style.minWidth = "100%";
                    };
                  _v2();
                }
              })]
            })
          })]
        })]
      });
    };
  var _v94 = _v0.i(0);
  let _v95 = "https://",
    _v96 = _v0 => ({
      Accept: "application/vnd.vimeo.*+json;version=3.4.7",
      Authorization: `jwt ${_v0}`
    }),
    _v97 = async (_v0, _v1) => {
      let _v2 = `${_v95}${_v0}/me?fields=name,uri,membership`,
        _v3 = await fetch(_v2, {
          method: "GET",
          headers: _v96(_v1)
        });
      if (_v3.ok) {
        var _v4;
        let _v0;
        return _v4 = await _v3.json(), (_v0 = (0, _v94.default)(_v4)).membership.type = (0, _v94.default)(_v0.membership.type), _v0;
      }
      throw _v3;
    },
    _v98 = async (_v0, _v1, _v2) => {
      let _v3 = `${_v95}${_v0}/me/subscription_plans?vuid=${(0, _v21.getVuid)()}`;
      _v2 && (_v3 += `&campaign_id=${_v2}`);
      let _v4 = await fetch(_v3, {
        method: "GET",
        headers: _v96(_v1.jwt)
      });
      if (_v4.ok) {
        let _v0 = await _v4.json();
        return (0, _v94.default)(_v0.data);
      }
      throw _v4;
    },
    _v99 = ["01KGPR56B56Z9H89TBK6NENWDQ", "01KGPR56B56Z9H89TBK87BF9BS"],
    _v100 = new Set([..._v20.DEFAULT_SEAT_PLANS.filter(_v0 => _v0 !== _v20.PLANS.ENTERPRISE), ..._v20.LEGACY_PLANS.filter(_v0 => _v0 !== _v20.PLANS.ENTERPRISE), _v20.PLANS.FREE, ..._v20.NEW_PLANS.filter(_v0 => _v0 !== _v20.PLANS.PRODUCTION)]),
    _v101 = {
      standard: {
        default: _v20.PLANS.STANDARD,
        legacy: _v20.PLANS.PRO,
        repackaging: _v20.PLANS.PROFESSIONAL
      },
      advanced: {
        default: _v20.PLANS.ADVANCED,
        legacy: _v20.PLANS.BUSINESS,
        repackaging: _v20.PLANS.PROFESSIONAL
      },
      creator: {
        default: _v20.PLANS.STARTER,
        legacy: _v20.PLANS.PLUS,
        repackaging: _v20.PLANS.CREATOR
      },
      professional: {
        default: _v20.PLANS.ADVANCED,
        legacy: _v20.PLANS.BUSINESS,
        repackaging: _v20.PLANS.PROFESSIONAL
      }
    },
    _v102 = new Set(["limit_based_bsp", "limits_only_bsp", "bsp_cards_generic_and_bsp_limits", "bsp_table_generic_and_bsp_limits"]),
    _v103 = _v0 => _v102.has(_v0),
    _v104 = _v0 => "storage_limit" === _v0 ? "storage" : "privacy" === _v0 || "showcase_privacy" === _v0 ? "privacy" : "generic",
    _v105 = _v0 => {
      let _v1 = _v0?.toLowerCase();
      return _v1 ? _v1.includes("unlisted_privacy") ? "unlisted" : _v1.includes("disable_privacy") ? "hide_from_vimeo" : _v1.includes("password_privacy") ? "password" : _v1.includes("cold_privacy") ? "generic" : null : null;
    },
    _v106 = (_v0, _v1) => (_v20.PLANS_ORDER[_v0] ?? -1) > (_v20.PLANS_ORDER[_v1] ?? -1),
    _v107 = ({
      currentTier: _v0,
      tierSetting: _v1,
      plansData: _v2,
      excludePlans: _v3 = [],
      variant: _v4
    }) => {
      let _v5,
        _v6,
        _v7 = "privacy" === _v4 && void 0 !== (_v5 = _v2.find(_v0 => _v0.tier === _v20.PLANS.CREATOR)) && (_v99.includes(_v5.id?.monthly ?? "") || _v99.includes(_v5.id?.annual ?? "")) ? [..._v3, _v20.PLANS.CREATOR] : _v3,
        _v8 = _v2.filter(_v0 => !_v7.includes(_v0.tier)),
        _v9 = _v8.filter(_v0 => _v106(_v0.tier, _v0)).sort((_v0, _v1) => (_v20.PLANS_ORDER[_v0.tier] ?? 0) - (_v20.PLANS_ORDER[_v1.tier] ?? 0))[0]?.tier ?? null,
        _v10 = null !== _v9 && _v100.has(_v9) ? _v9 : null;
      if ("one_up" === _v1) return _v10;
      let _v11 = (_v6 = new Set(_v2.map(_v0 => _v0.tier))).has(_v20.PLANS.PRODUCTION) || _v6.has(_v20.PLANS.PROFESSIONAL) ? "repackaging" : _v6.has(_v20.PLANS.PREMIUM) ? "legacy" : "default",
        _v12 = _v101[_v1][_v11];
      return (_v20.PLANS_ORDER[_v0] ?? -1) >= (_v20.PLANS_ORDER[_v12] ?? -1) ? _v10 : _v8.some(_v0 => _v0.tier === _v12 && _v106(_v0.tier, _v0)) ? _v12 : _v10;
    };
  _v0.s(["isBspLateStagePaywallKind", 0, _v103, "resolvePrivacyOptionFromTrigger", 0, _v105, "resolveTier", 0, _v107, "resolveVariant", 0, _v104], 0);
  let _v108 = ["feature"],
    _v109 = function (_v0) {
      let _v1,
        {
          apiUrl: _v2,
          userConfig: _v3
        } = _v0,
        {
          settings: _v4
        } = (0, _v10.useOrionSettings)(),
        [_v5, _v6] = (0, _v2.useState)({
          isShowing: !1,
          userData: null,
          plansData: null,
          hasTrackedImpression: !1
        }),
        {
          trackPaywallDismissed: _v7
        } = (0, _v16.usePaywallTracking)({
          ..._v0.tracking.paywallTracking,
          isVisible: _v5.isShowing
        }),
        _v8 = (0, _v9.useCampaignIdOverride)(),
        _v9 = _v0.onClose,
        _v10 = (0, _v2.useCallback)(() => {
          _v7(), _v9();
        }, [_v7, _v9]);
      (0, _v2.useEffect)(() => {
        let _v0 = async () => await _v97(_v2, _v3.jwt),
          _v1 = async () => await _v98(_v2, _v3, _v8);
        (async () => {
          var _v0, _v1;
          let _v2,
            _v3,
            _v4,
            [_v5, _v6] = await Promise.all([_v0(), _v1()]);
          _v6(_v0 => ({
            ..._v0,
            isShowing: !0,
            userData: _v5,
            plansData: _v6
          })), _v0 = _v5, _v1 = _v3.userId, _v2 = /\.ci\.vimeows.com$/.test(window.location.host) ? "staging" : "vimeo.dev" === window.location.host ? "development" : "production", _v3 = new _v18.Event("vimeo.web_global", 5, {
            user: {
              subscription_type: _v0.membership?.type,
              is_mod: _v0.membership?.badge?.type === "staff",
              session_id: null,
              teams: null,
              user_id: _v1 || null,
              vuid: (0, _v21.getVuid)(),
              flags: null,
              is_free_trial: _v0.membership?.subscription?.trial?.status === "free_trial"
            },
            application: {
              application: "vimeo",
              vimeo_language: (0, _v21.getLanguage)() || "en",
              product: "upsell_modal",
              build_environment: _v2,
              version: {
                full: "1.0.0",
                major: "1",
                minor: "0",
                patch: "0"
              }
            },
            platform: {
              device_language: window.navigator.language ? window.navigator.language : "",
              screen: {
                dpi: screen.pixelDepth,
                height: screen.height,
                width: screen.width,
                size: `${screen.width} x ${screen.height}`
              },
              network: null,
              platform: "web"
            }
          }), _v4 = new _v18.Configuration("production" === _v2 ? _v18.Service.FRESNEL_PROD : _v18.Service.FRESNEL_DEV, _v3), _v18.BigPictureClient.configure(_v4), _v0.tracking.onOpen && _v0.tracking.onOpen();
        })();
      }, [_v0.tracking, _v2, _v3, _v8]), (0, _v2.useEffect)(() => {
        let _v0 = Date.now();
        !_v5.hasTrackedImpression && _v5.userData?.membership?.type && (((_v0, _v1 = _v22) => {
          _v23({
            action_type: "impression",
            ..._v0
          }, _v1);
        })({
          ..._v0.tracking.params,
          loading_time: (Date.now() - _v0) / 0,
          is_new_pricing: (0, _v21.isSeatTierPlan)(_v5.userData?.membership?.type),
          device_type: (0, _v21.getDeviceType)()
        }, _v0.tracking.bpEventVersion), _v6(_v0 => ({
          ..._v0,
          hasTrackedImpression: !0
        })));
      }, [_v0.tracking, _v5.userData?.membership?.type, _v5.hasTrackedImpression]);
      let _v11 = _v5.userData?.membership?.type,
        _v12 = _v0.templateType;
      _v108.includes(_v0.templateType) || _v11 !== _v20.PLANS.ADVANCED && _v11 !== _v20.PLANS.PREMIUM && _v11 !== _v20.PLANS.TEAM_LIVE && _v11 !== _v20.PLANS.CUSTOM_SELF_SERVE && _v11 !== _v20.PLANS.STUDIO && _v11 !== _v20.PLANS.PRODUCTION || (0, _v21.hasDisplayPlan)(_v0.modalConfig) && _v0.modalConfig?.displayPlan || (_v12 = "enterprise");
      let _v13 = _v0.tracking.paywallTracking.paywallFeature,
        _v14 = _v0.tracking.paywallTracking.paywallTrigger,
        _v15 = _v103(_v4.late_stage_paywall_kind),
        _v16 = _v105(_v14),
        _v17 = _v104(_v13),
        _v18 = "privacy" !== _v17 || _v16 ? _v17 : "generic",
        _v19 = "limits_only_bsp" === _v4.late_stage_paywall_kind && "generic" === _v18,
        _v20 = _v14?.toLowerCase() ?? "",
        _v21 = _v20.includes("cold_storage") || _v20.includes("cold_privacy") ? _v4.cold_storage_trigger_paywall_tier : _v4.limit_based_paywall_tier,
        _v22 = _v5.userData?.membership?.type && _v5.plansData ? _v107({
          currentTier: _v5.userData?.membership?.type,
          tierSetting: _v21,
          plansData: _v5.plansData,
          excludePlans: _v0.modalConfig?.excludePlans,
          variant: _v18
        }) : null,
        _v23 = "bsp_cards_generic_and_bsp_limits" === _v4.late_stage_paywall_kind || "bsp_table_generic_and_bsp_limits" === _v4.late_stage_paywall_kind,
        _v24 = "generic" === _v18 && _v23 && ![_v20.PLANS.STARTER, _v20.PLANS.STANDARD, _v20.PLANS.ADVANCED].includes(_v22),
        _v25 = "generic" === _v18 && _v23 ? "760px" : "560px",
        _v26 = _v15 && "default" === _v0.templateType && "enterprise" !== _v12 && !!_v22 && !_v19 && !_v24,
        _v27 = _v0.tracking.paywallTracking,
        _v28 = !!_v5.userData && (0, _v21.isEligibleForFreeTrial)(_v5.userData);
      switch (_v12) {
        case "default":
          _v1 = _v26 && _v22 ? (0, _v1.jsxs)(_v4.Modal, {
            isOpen: !0,
            onClose: _v10,
            size: ["full", "md"],
            scrollBehavior: "inside",
            children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
              containerProps: {
                padding: {
                  base: "0 !important"
                }
              },
              maxWidth: {
                base: "100vw",
                md: _v25
              },
              width: {
                base: "100vw",
                md: _v25
              },
              height: {
                base: "100dvh",
                md: "auto"
              },
              minH: {
                base: "100dvh",
                md: "auto"
              },
              maxH: {
                base: "100dvh",
                md: "90vh"
              },
              borderRadius: {
                base: "0",
                md: "16px"
              },
              margin: {
                base: "0",
                md: "auto"
              },
              overflow: "hidden",
              position: "relative",
              children: [(0, _v1.jsx)(_v6.ModalCloseButton, {
                onClick: _v10,
                zIndex: 1
              }), (0, _v1.jsx)(_v5.ModalBody, {
                p: "24px",
                display: "flex",
                flex: "1",
                children: (0, _v1.jsx)(_v3.Flex, {
                  width: "100%",
                  children: (({
                    kind: _v0,
                    paywallTracking: _v1,
                    variant: _v2,
                    tier: _v3,
                    currentTier: _v4,
                    privacyOption: _v5,
                    isUserEligibleForFreeTrial: _v6
                  }) => {
                    switch (_v2) {
                      case "storage":
                        return (0, _v1.jsx)(_v14.StorageLimitPaywall, {
                          tier: _v3,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                      case "privacy":
                        return _v5 ? (0, _v1.jsx)(_v13.PrivacyLimitPaywall, {
                          tier: _v3,
                          privacyOption: _v5,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        }) : (0, _v1.jsx)(_v12.GenericLimitPaywall, {
                          tier: _v3,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                      default:
                        if ("bsp_cards_generic_and_bsp_limits" === _v0) return (0, _v1.jsx)(_v11.CardComparisonPaywall, {
                          tier: _v3,
                          currentTier: _v4,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                        if ("bsp_table_generic_and_bsp_limits" === _v0) return (0, _v1.jsx)(_v15.TableComparisonPaywall, {
                          tier: _v3,
                          currentTier: _v4,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                        return (0, _v1.jsx)(_v12.GenericLimitPaywall, {
                          tier: _v3,
                          paywallTracking: _v1,
                          isUserEligibleForFreeTrial: _v6
                        });
                    }
                  })({
                    kind: _v4.late_stage_paywall_kind,
                    paywallTracking: _v27,
                    variant: _v18,
                    tier: _v22,
                    currentTier: _v5.userData?.membership?.type ?? null,
                    privacyOption: _v16,
                    isUserEligibleForFreeTrial: _v28
                  })
                })
              })]
            })]
          }) : "enterprise" === _v11 ? (0, _v1.jsx)(_v93, {
            userData: _v5.userData,
            onClose: _v10,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          }) : (0, _v1.jsx)(_v85, {
            userData: _v5.userData,
            plansData: _v5.plansData,
            modalConfig: {
              hidePlansSummary: !0,
              ..._v0.modalConfig
            },
            onClose: _v10,
            tracking: _v0.tracking
          });
          break;
        case "feature":
          _v1 = (0, _v1.jsx)(_v39, {
            modalConfig: _v0.modalConfig,
            onClose: _v10
          });
          break;
        case "enterprise":
          _v1 = (0, _v1.jsx)(_v93, {
            userData: _v5.userData,
            onClose: _v10,
            tracking: _v0.tracking,
            modalConfig: _v0.modalConfig
          });
          break;
        default:
          _v1 = null;
      }
      return _v5.isShowing ? (0, _v1.jsx)(_v17.default.Provider, {
        value: {
          ..._v0.tracking,
          device_type: (0, _v21.getDeviceType)(),
          campaignOverride: _v8
        },
        children: _v1
      }) : null;
    };
  _v0.s(["default", 0, _v109], 0), _v0.s(["default", 0, _v109], 0);
}