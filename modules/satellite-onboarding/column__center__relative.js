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
    _v14 = _v0.i(0);
  function _v15({
    tier: _v0,
    paywallTracking: _v1,
    defaultPeriodicity: _v2,
    monthlyFreeTrial: _v3,
    isFreeTrialEligible: _v4,
    postCheckoutUrl: _v5,
    onSkip: _v6
  }) {
    return (0, _v1.jsxs)(_v11.Flex, {
      direction: "column",
      alignItems: "center",
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      bg: "surface",
      paddingTop: "2rem",
      paddingX: {
        base: "1rem",
        md: "2rem"
      },
      children: [(0, _v1.jsx)(_v14.default, {
        color: "text-primary",
        width: "74px"
      }), (0, _v1.jsx)(_v13.PlansComparisonPaywallNavigation, {
        dismissButtonPosition: "top_right",
        onDismiss: _v6
      }), (0, _v1.jsx)(_v11.Flex, {
        flex: "1",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "2rem",
        children: (0, _v1.jsx)(_v12.PlansComparisonPaywall, {
          tier: _v0,
          paywallTracking: _v1,
          defaultPeriodicity: _v2,
          monthlyFreeTrial: _v3,
          isFreeTrialEligible: _v4,
          postCheckoutUrl: _v5
        })
      })]
    });
  }
  function _v16({
    tier: _v0,
    isFreeTrialEligible: _v1,
    postCheckoutUrl: _v2,
    paywallTracking: _v3,
    alreadyOnHigherOrEqualPlan: _v4,
    onLeave: _v5
  }) {
    let {
        settings: _v6
      } = (0, _v9.useOrionSettings)(),
      _v7 = (0, _v3.useMemo)(() => [_v0], [_v0]),
      {
        trackPaywallDismissed: _v8
      } = (0, _v10.usePaywallTracking)({
        ..._v3,
        paywallStyle: "plans_comparison",
        paywallPlansDisplayed: _v7,
        paywallPeriodicitiesDisplayed: ["monthly", "yearly"],
        isVisible: !_v4
      }),
      _v9 = (0, _v3.useRef)(!1);
    return ((0, _v3.useEffect)(() => {
      _v4 && !_v9.current && (_v9.current = !0, _v8(), _v5());
    }, [_v4, _v8, _v5]), _v4) ? null : (0, _v1.jsx)(_v15, {
      tier: _v0,
      paywallTracking: _v3,
      isFreeTrialEligible: _v1,
      monthlyFreeTrial: _v6.onboarding_paywall_monthly_free_trial,
      postCheckoutUrl: _v2,
      onSkip: () => {
        _v8(), _v5();
      }
    });
  }
  (0, _v4.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = (0, _v7.useViewer)(),
      [_v2, _v3] = (0, _v3.useState)(!1),
      _v4 = (0, _v3.useMemo)(() => _v0.isReady ? (0, _v8.parseSatelliteOnboardingQuery)(_v0.query) : null, [_v0.isReady, _v0.query]);
    if (!_v1 || !_v4 || _v2) return (0, _v1.jsx)("div", {
      "data-testid": "satellite-onboarding-shell"
    });
    if ("page" === _v4.paywall) {
      let _v0 = _v1.teamUser?.accountType ?? _v1.user?.account;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)("div", {
          "data-testid": "satellite-onboarding-shell"
        }), (0, _v1.jsx)(_v16, {
          tier: _v4.tier,
          isFreeTrialEligible: _v1.user?.capabilities?.hasFreeTrialEligibility ?? !1,
          postCheckoutUrl: _v4.next,
          paywallTracking: {
            ..._v4.tracking.paywallTracking,
            paywallType: "page"
          },
          alreadyOnHigherOrEqualPlan: (0, _v6.isUserPlanHigherOrEqualThan)(_v0, _v4.tier),
          onLeave: () => {
            _v3(!0), _v0.replace(_v4.next);
          }
        })]
      });
    }
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)("div", {
        "data-testid": "satellite-onboarding-shell"
      }), (0, _v1.jsx)(_v5.default, {
        apiUrl: _v1.apiUrl,
        userConfig: {
          jwt: _v1.jwt,
          userId: _v1.user?.id,
          accountType: _v1.teamUser?.accountType?.toString() ?? _v1.user?.account?.toString()
        },
        templateType: "default",
        modalConfig: _v4.modalConfig,
        tracking: _v4.tracking,
        onClose: () => {
          _v3(!0), _v0.replace(_v4.next);
        }
      })]
    });
  }], 0);
}