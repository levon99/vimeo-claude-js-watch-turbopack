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
    _v19 = _v0.i(0);
  let _v20 = {
      action_type: "click",
      copy: null,
      currency: null,
      device_type: null,
      discount_offer: null,
      duration: null,
      feature: null,
      is_discount: null,
      is_new_pricing: null,
      location: null,
      loading_time: null,
      page: "upgrade-plan",
      plan_selected: null,
      purchase_type: null,
      price: null,
      path: null,
      target_path: null,
      target: null,
      upgrade_flags: null,
      upsell_name: null
    },
    _v21 = _v0 => {
      let _v1 = (0, _v12.default)();
      return _v11.BigPictureClient.sendEvent(new _v11.Event("vimeo.upgrade_action", 7, {
        ..._v20,
        device_type: "mobile" === _v1 ? "phone" : _v1,
        page: "mobile" === _v1 ? "upgrade_plan_mw" : "upgrade-plan",
        ..._v0
      }));
    };
  _v0.s(["emitBPEvent", 0, _v21, "logViewUpsell", 0, (_v0, _v1) => {
    var _v2;
    let _v3,
      _v4,
      _v5,
      _v6 = (_v2 = _v1?.teamUser, _v3 = (0, _v17.buildActionBpContext)({
        action_type: "click",
        feature: null
      }), _v4 = (0, _v18.buildWebBpContext)({
        page_name: "review_page",
        location: null,
        path: window.location.href,
        ...void 0
      }), _v5 = (0, _v19.buildTeamBpContextFromTeamUser)(_v2), {
        ..._v3,
        ..._v4,
        ..._v5
      }),
      _v7 = (0, _v13.buildViewBpContext)({
        view_type: "impression",
        feature: null
      }),
      _v8 = (0, _v14.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "video_review",
        location: "page_area",
        modal_name: null,
        flow: null,
        element: null,
        copy: "Upgrade",
        device_type: (0, _v12.default)(),
        is_user_facing_data: !1,
        entity_type: "video"
      }),
      _v9 = (0, _v15.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        is_partner: null
      }),
      _v10 = {
        ..._v6,
        ..._v7,
        ..._v8,
        ..._v9
      };
    (0, _v16.sendBpEventWithContexts)("vimeo.view_upsell", _v10, 26, {
      add_on_feature: null,
      currency: null,
      discount_offer: null,
      duration: null,
      interface_type: null,
      is_discount: null,
      is_dismissible: !1,
      promo_code_id: null,
      purchase_type: null,
      selected_plan: null,
      upsell_name: _v0,
      usd_price: null
    });
  }], 0);
  let _v22 = _v0 => (0, _v1.jsxs)(_v9.Box, {
    minHeight: "100vh",
    width: "100vw",
    children: [(0, _v1.jsx)(_v9.Box, {
      display: "flex",
      justifyContent: {
        base: "center",
        lg: "space-between"
      },
      alignItems: "center",
      padding: `${(0, _v8.rem)(20)} ${(0, _v8.rem)(24)}`,
      children: (0, _v1.jsx)(_v10.default, {
        href: "/",
        width: (0, _v8.rem)(74),
        height: (0, _v8.rem)(32),
        onClick: () => {
          _v21({
            copy: "Vimeo",
            location: "upgrade_header",
            target: "homepage",
            path: window.location.href,
            target_path: "/"
          });
        },
        "aria-label": "vimeo icon button"
      })
    }), (0, _v1.jsx)(_v9.Box, {
      width: "100%",
      ..._v0,
      children: _v0.children
    })]
  });
  _v0.s(["default", 0, _v22], 0);
  let _v23 = _v3.default.div.withConfig({
      displayName: "PageSkeleton__TitleWrapper",
      componentId: "sc-e29e52e5-0"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(0, _v5.rem)(50)};
  padding: 0 ${(0, _v7.space)(250)};
`,
    _v24 = ({
      isMobileBreakpoint: _v0
    }) => (0, _v1.jsx)(_v4.Skeleton, {
      width: !0 === _v0 ? "100%" : (0, _v5.rem)(500),
      height: (0, _v5.rem)(80)
    }),
    _v25 = () => (0, _v1.jsx)(_v4.Skeleton, {
      width: (0, _v5.rem)(300),
      height: (0, _v5.rem)(40)
    }),
    _v26 = _v3.default.div.withConfig({
      displayName: "PageSkeleton__Cards",
      componentId: "sc-e29e52e5-1"
    })`
  width: 100%;
  display: flex;
  flex-direction: ${_v0 => !0 === _v0.isMobileBreakpoint ? "column" : "row"};
  gap: ${(0, _v5.rem)(16)};
  padding: ${(0, _v7.space)(50)} ${(0, _v7.space)(250)} ${(0, _v7.space)(100)};
  margin: ${(0, _v5.rem)(50)} auto ${(0, _v5.rem)(38)};
  max-width: ${(0, _v5.rem)(0)};
`,
    _v27 = () => (0, _v1.jsx)(_v4.Skeleton, {
      height: (0, _v5.rem)(700)
    }),
    _v28 = () => {
      let {
          width: _v0
        } = (0, _v6.useWindowSize)(),
        _v1 = _v0 <= 0;
      return (0, _v1.jsxs)(_v22, {
        isMobileBreakpoint: _v1,
        children: [(0, _v1.jsxs)(_v23, {
          children: [!_v1 && (0, _v1.jsx)(_v24, {
            isMobileBreakpoint: _v1
          }), (0, _v1.jsx)(_v25, {})]
        }), (0, _v1.jsxs)(_v26, {
          isMobileBreakpoint: _v1,
          children: [(0, _v1.jsx)(_v27, {}), (0, _v1.jsx)(_v27, {}), (0, _v1.jsx)(_v27, {}), (0, _v1.jsx)(_v27, {})]
        })]
      });
    };
  _v0.s(["default", 0, _v28], 0);
  var _v29 = _v0.i(0);
  let _v30 = ["plus", "pro", "business", "livePremium"],
    _v31 = ["proSolution", "team", "teamLive"],
    _v32 = _v2.default.createContext({});
  _v0.s(["PlansDataContext", 0, _v32, "PlansDataProvider", 0, function ({
    plansData: _v0,
    overrides: _v1,
    isLoggedIn: _v2,
    capabilitiesReady: _v3,
    isPricingRedesign: _v4,
    effectiveTier: _v5,
    upcomingTier: _v6,
    usageCheckData: _v7,
    hideIndividualPlans: _v8,
    children: _v9
  }) {
    if (!_v0 || _v2 && !_v3) return (0, _v1.jsx)(_v28, {});
    _v2 || _v1.plans || (_v0 = [...(_v0 || [])].filter(_v0 => "free" !== _v0.tier));
    let _v10 = void 0 !== _v5 && _v29.REPACKAGING_PAID_PLANS.includes(_v5),
      _v11 = {
        plansData: _v0,
        isFlatRateData: (_v0 => {
          let _v1 = !1;
          for (let _v0 = 0; _v0 < _v0.length; _v0++) {
            let _v0 = _v0[_v0];
            if (_v30.includes(_v0.tier)) {
              _v1 = !0;
              break;
            }
          }
          return _v1;
        })(_v0),
        isSolutionData: (_v0 => {
          let _v1 = !1;
          for (let _v0 = 0; _v0 < _v0.length; _v0++) {
            let _v0 = _v0[_v0];
            if (_v31.includes(_v0.tier)) {
              _v1 = !0;
              break;
            }
          }
          return _v1;
        })(_v0),
        isRepackagingData: _v4,
        effectiveTier: _v5,
        upcomingTier: _v6,
        hideFreePlan: _v10,
        hideIndividualPlans: _v8,
        usageCheckData: _v7
      };
    return (0, _v1.jsx)(_v32.Provider, {
      value: _v11,
      children: _v9
    });
  }], 0);
}