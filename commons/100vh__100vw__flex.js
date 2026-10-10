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
    _v11 = _v0.i(0);
  let _v12 = ({
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
          _v3 ? _v0.preventDefault() : _v1?.() === !0 && _v0.preventDefault();
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
  _v0.s(["default", 0, _v12], 0);
  let _v13 = _v4.default.div.withConfig({
      displayName: "PageSkeleton__TitleWrapper",
      componentId: "sc-e29e52e5-0"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(0, _v6.rem)(50)};
  padding: 0 ${(0, _v8.space)(250)};
`,
    _v14 = ({
      isMobileBreakpoint: _v0
    }) => (0, _v1.jsx)(_v5.Skeleton, {
      width: !0 === _v0 ? "100%" : (0, _v6.rem)(500),
      height: (0, _v6.rem)(80)
    }),
    _v15 = () => (0, _v1.jsx)(_v5.Skeleton, {
      width: (0, _v6.rem)(300),
      height: (0, _v6.rem)(40)
    }),
    _v16 = _v4.default.div.withConfig({
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
    _v17 = () => (0, _v1.jsx)(_v5.Skeleton, {
      height: (0, _v6.rem)(700)
    }),
    _v18 = () => {
      let {
          width: _v0
        } = (0, _v7.useWindowSize)(),
        _v1 = _v0 <= 0;
      return (0, _v1.jsxs)(_v12, {
        isMobileBreakpoint: _v1,
        children: [(0, _v1.jsxs)(_v13, {
          children: [!_v1 && (0, _v1.jsx)(_v14, {
            isMobileBreakpoint: _v1
          }), (0, _v1.jsx)(_v15, {})]
        }), (0, _v1.jsxs)(_v16, {
          isMobileBreakpoint: _v1,
          children: [(0, _v1.jsx)(_v17, {}), (0, _v1.jsx)(_v17, {}), (0, _v1.jsx)(_v17, {}), (0, _v1.jsx)(_v17, {})]
        })]
      });
    };
  _v0.s(["default", 0, _v18], 0);
  let _v19 = ["plus", "pro", "business", "livePremium"],
    _v20 = _v0 => _v0.some(_v0 => _v19.includes(_v0.tier));
  _v0.s(["areFlatRatePlans", 0, _v20], 0);
  let _v21 = ["proSolution", "team", "teamLive"],
    _v22 = _v2.default.createContext({});
  _v0.s(["PlansDataContext", 0, _v22, "PlansDataProvider", 0, function ({
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
    if (!_v0 || _v2 && !_v3) return (0, _v1.jsx)(_v18, {});
    _v2 || _v1.plans || (_v0 = [...(_v0 || [])].filter(_v0 => "free" !== _v0.tier));
    let _v11 = void 0 !== _v6 && (0, _v3.isPaidRepackagingTier)(_v6),
      _v12 = {
        plansData: _v0,
        isFlatRateData: _v20(_v0),
        isSolutionData: _v0.some(_v0 => _v21.includes(_v0.tier)),
        isRepackagingData: _v4,
        downgradeEnabled: _v5,
        effectiveTier: _v6,
        upcomingTier: _v7,
        hideFreePlan: _v11,
        hideIndividualPlans: _v9,
        usageCheckData: _v8
      };
    return (0, _v1.jsx)(_v22.Provider, {
      value: _v12,
      children: _v10
    });
  }], 0);
}