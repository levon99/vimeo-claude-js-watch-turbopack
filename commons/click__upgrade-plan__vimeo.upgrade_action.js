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
    _v20 = _v0.i(0);
  let _v21 = {
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
    _v22 = _v0 => {
      let _v1 = (0, _v13.default)();
      return _v12.BigPictureClient.sendEvent(new _v12.Event("vimeo.upgrade_action", 7, {
        ..._v21,
        device_type: "mobile" === _v1 ? "phone" : _v1,
        page: "mobile" === _v1 ? "upgrade_plan_mw" : "upgrade-plan",
        ..._v0
      }));
    };
  _v0.s(["emitBPEvent", 0, _v22, "logViewUpsell", 0, (_v0, _v1) => {
    var _v2;
    let _v3,
      _v4,
      _v5,
      _v6 = (_v2 = _v1?.teamUser, _v3 = (0, _v18.buildActionBpContext)({
        action_type: "click",
        feature: null
      }), _v4 = (0, _v19.buildWebBpContext)({
        page_name: "review_page",
        location: null,
        path: window.location.href,
        ...void 0
      }), _v5 = (0, _v20.buildTeamBpContextFromTeamUser)(_v2), {
        ..._v3,
        ..._v4,
        ..._v5
      }),
      _v7 = (0, _v14.buildViewBpContext)({
        view_type: "impression",
        feature: null
      }),
      _v8 = (0, _v15.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "video_review",
        location: "page_area",
        modal_name: null,
        flow: null,
        element: null,
        copy: "Upgrade",
        device_type: (0, _v13.default)(),
        is_user_facing_data: !1,
        entity_type: "video"
      }),
      _v9 = (0, _v16.buildThirdPartyIntegrationBpContext)({
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
    (0, _v17.sendBpEventWithContexts)("vimeo.view_upsell", _v10, 26, {
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
  let _v23 = ({
    children: _v0,
    onLogoClick: _v1,
    topRightAction: _v2,
    disableLogoLink: _v3 = !1,
    ..._v4
  }) => (0, _v1.jsxs)(_v10.Box, {
    minHeight: "100vh",
    width: "100vw",
    children: [(0, _v1.jsxs)(_v10.Box, {
      display: "flex",
      justifyContent: {
        base: "center",
        lg: "space-between"
      },
      alignItems: "center",
      padding: `${(0, _v9.rem)(20)} ${(0, _v9.rem)(24)}`,
      position: "relative",
      children: [(0, _v1.jsx)(_v11.default, {
        href: "/",
        width: (0, _v9.rem)(74),
        height: (0, _v9.rem)(32),
        "aria-disabled": _v3 || void 0,
        tabIndex: _v3 ? -1 : void 0,
        onClick: _v0 => {
          _v3 ? _v0.preventDefault() : (_v22({
            copy: "Vimeo",
            location: "upgrade_header",
            target: "homepage",
            path: window.location.href,
            target_path: "/"
          }), _v1?.() === !0 && _v0.preventDefault());
        },
        "aria-label": "vimeo icon button"
      }), null != _v2 && (0, _v1.jsx)(_v10.Box, {
        position: "absolute",
        top: (0, _v9.rem)(20),
        right: (0, _v9.rem)(24),
        children: _v2
      })]
    }), (0, _v1.jsx)(_v10.Box, {
      width: "100%",
      ..._v4,
      children: _v0
    })]
  });
  _v0.s(["default", 0, _v23], 0);
  let _v24 = _v4.default.div.withConfig({
      displayName: "PageSkeleton__TitleWrapper",
      componentId: "sc-e29e52e5-0"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(0, _v6.rem)(50)};
  padding: 0 ${(0, _v8.space)(250)};
`,
    _v25 = ({
      isMobileBreakpoint: _v0
    }) => (0, _v1.jsx)(_v5.Skeleton, {
      width: !0 === _v0 ? "100%" : (0, _v6.rem)(500),
      height: (0, _v6.rem)(80)
    }),
    _v26 = () => (0, _v1.jsx)(_v5.Skeleton, {
      width: (0, _v6.rem)(300),
      height: (0, _v6.rem)(40)
    }),
    _v27 = _v4.default.div.withConfig({
      displayName: "PageSkeleton__Cards",
      componentId: "sc-e29e52e5-1"
    })`
  width: 100%;
  display: flex;
  flex-direction: ${_v0 => !0 === _v0.isMobileBreakpoint ? "column" : "row"};
  gap: ${(0, _v6.rem)(16)};
  padding: ${(0, _v8.space)(50)} ${(0, _v8.space)(250)} ${(0, _v8.space)(100)};
  margin: ${(0, _v6.rem)(50)} auto ${(0, _v6.rem)(38)};
  max-width: ${(0, _v6.rem)(0)};
`,
    _v28 = () => (0, _v1.jsx)(_v5.Skeleton, {
      height: (0, _v6.rem)(700)
    }),
    _v29 = () => {
      let {
          width: _v0
        } = (0, _v7.useWindowSize)(),
        _v1 = _v0 <= 0;
      return (0, _v1.jsxs)(_v23, {
        isMobileBreakpoint: _v1,
        children: [(0, _v1.jsxs)(_v24, {
          children: [!_v1 && (0, _v1.jsx)(_v25, {
            isMobileBreakpoint: _v1
          }), (0, _v1.jsx)(_v26, {})]
        }), (0, _v1.jsxs)(_v27, {
          isMobileBreakpoint: _v1,
          children: [(0, _v1.jsx)(_v28, {}), (0, _v1.jsx)(_v28, {}), (0, _v1.jsx)(_v28, {}), (0, _v1.jsx)(_v28, {})]
        })]
      });
    };
  _v0.s(["default", 0, _v29], 0);
  let _v30 = ["plus", "pro", "business", "livePremium"],
    _v31 = _v0 => _v0.some(_v0 => _v30.includes(_v0.tier));
  _v0.s(["areFlatRatePlans", 0, _v31], 0);
  let _v32 = ["proSolution", "team", "teamLive"],
    _v33 = _v2.default.createContext({});
  _v0.s(["PlansDataContext", 0, _v33, "PlansDataProvider", 0, function ({
    plansData: _v0,
    overrides: _v1,
    isLoggedIn: _v2,
    capabilitiesReady: _v3,
    isPricingRedesign: _v4,
    downgradeEnabled: _v5,
    effectiveTier: _v6,
    upcomingTier: _v7,
    usageCheckData: _v8,
    hideIndividualPlans: _v9,
    children: _v10
  }) {
    if (!_v0 || _v2 && !_v3) return (0, _v1.jsx)(_v29, {});
    _v2 || _v1.plans || (_v0 = [...(_v0 || [])].filter(_v0 => "free" !== _v0.tier));
    let _v11 = void 0 !== _v6 && (0, _v3.isPaidRepackagingTier)(_v6),
      _v12 = {
        plansData: _v0,
        isFlatRateData: _v31(_v0),
        isSolutionData: _v0.some(_v0 => _v32.includes(_v0.tier)),
        isRepackagingData: _v4,
        downgradeEnabled: _v5,
        effectiveTier: _v6,
        upcomingTier: _v7,
        hideFreePlan: _v11,
        hideIndividualPlans: _v9,
        usageCheckData: _v8
      };
    return (0, _v1.jsx)(_v33.Provider, {
      value: _v12,
      children: _v10
    });
  }], 0);
}