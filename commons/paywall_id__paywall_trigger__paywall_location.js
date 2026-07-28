{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = "paywall_id",
    _v5 = "paywall_trigger",
    _v6 = "paywall_location",
    _v7 = "paywall_type",
    _v8 = "paywall_feature",
    _v9 = "paywall_style",
    _v10 = "paywall_plans_displayed",
    _v11 = "paywall_periodicities_displayed",
    _v12 = _v0 => ({
      ...(_v0.paywallStyle ? {
        paywall_style: _v0.paywallStyle
      } : {}),
      ...(null != _v0.paywallPlansDisplayed ? {
        paywall_plans_displayed: _v0.paywallPlansDisplayed
      } : {}),
      ...(null != _v0.paywallPeriodicitiesDisplayed ? {
        paywall_periodicities_displayed: _v0.paywallPeriodicitiesDisplayed
      } : {})
    }),
    _v13 = () => {
      sessionStorage.removeItem(_v9), sessionStorage.removeItem(_v10), sessionStorage.removeItem(_v11);
    },
    _v14 = (_v0, _v1) => {
      sessionStorage.setItem(_v4, _v0), sessionStorage.setItem(_v5, _v1.paywallTrigger), sessionStorage.setItem(_v6, _v1.paywallLocation), sessionStorage.setItem(_v7, _v1.paywallType), sessionStorage.setItem(_v8, _v1.paywallFeature), _v13(), _v1.paywallStyle && sessionStorage.setItem(_v9, _v1.paywallStyle), null != _v1.paywallPlansDisplayed && sessionStorage.setItem(_v10, JSON.stringify(_v1.paywallPlansDisplayed)), null != _v1.paywallPeriodicitiesDisplayed && sessionStorage.setItem(_v11, JSON.stringify(_v1.paywallPeriodicitiesDisplayed));
    };
  _v0.s(["PAYWALL_FEATURE_STORAGE_KEY", 0, _v8, "PAYWALL_ID_STORAGE_KEY", 0, _v4, "PAYWALL_LOCATION_STORAGE_KEY", 0, _v6, "PAYWALL_TRIGGER_STORAGE_KEY", 0, _v5, "PAYWALL_TYPE_STORAGE_KEY", 0, _v7, "clearStoredPaywallDimensions", 0, _v13, "readStoredPaywallContext", 0, () => {
    let _v0 = new URLSearchParams(window.location.search),
      _v1 = _v0 => sessionStorage.getItem(_v0) ?? null,
      _v2 = _v0 => _v0?.get(_v0) || null,
      _v3 = _v0 => {
        if (!_v0) return null;
        try {
          return JSON.parse(_v0);
        } catch {
          return null;
        }
      };
    return {
      paywall_id: _v1(_v4),
      paywall_trigger: _v1(_v5) ?? _v2("paywall_trigger"),
      paywall_feature: _v1(_v8) ?? _v2("paywall_feature"),
      paywall_location: _v1(_v6) ?? _v2("paywall_location"),
      ..._v12({
        paywallStyle: _v1(_v9),
        paywallPlansDisplayed: _v3(_v1(_v10)),
        paywallPeriodicitiesDisplayed: _v3(_v1(_v11))
      })
    };
  }, "usePaywallTracking", 0, _v0 => {
    let {
        paywallTrigger: _v1,
        paywallLocation: _v2,
        paywallType: _v3,
        paywallFeature: _v4,
        paywallStyle: _v5,
        paywallPlansDisplayed: _v6,
        paywallPeriodicitiesDisplayed: _v7,
        isVisible: _v8,
        displayKey: _v9
      } = _v0,
      _v10 = (0, _v3.usePico)(),
      _v11 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => {
      if (!_v8) {
        _v11.current = null;
        return;
      }
      let _v0 = _v9 ?? "";
      if (null === _v10 || _v11.current === _v0) return;
      _v11.current = _v0;
      let _v1 = (0, _v2.v4)();
      _v14(_v1, {
        paywallTrigger: _v1,
        paywallLocation: _v2,
        paywallType: _v3,
        paywallFeature: _v4,
        paywallStyle: _v5,
        paywallPlansDisplayed: _v6,
        paywallPeriodicitiesDisplayed: _v7
      }), _v10.track("paywall_displayed", {
        paywall_id: _v1,
        paywall_trigger: _v1,
        paywall_location: _v2,
        paywall_type: _v3,
        paywall_feature: _v4,
        ..._v12({
          paywallStyle: _v5,
          paywallPlansDisplayed: _v6,
          paywallPeriodicitiesDisplayed: _v7
        })
      });
    }, [_v10, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9]), {
      trackPaywallDismissed: () => {
        let _v0 = sessionStorage.getItem(_v4) ?? "unknown";
        sessionStorage.setItem(_v4, ""), _v13(), null !== _v10 && _v10.track("paywall_dismissed", {
          paywall_id: _v0,
          paywall_trigger: _v1,
          paywall_location: _v2,
          paywall_type: _v3,
          paywall_feature: _v4,
          ..._v12({
            paywallStyle: _v5,
            paywallPlansDisplayed: _v6,
            paywallPeriodicitiesDisplayed: _v7
          })
        });
      },
      trackPaywallCtaClicked: (_v0 = "primary") => {
        let _v1 = sessionStorage.getItem(_v4) ?? "unknown";
        null !== _v10 && _v10.track("paywall_cta_clicked", {
          paywall_id: _v1,
          paywall_trigger: _v1,
          paywall_location: _v2,
          paywall_type: _v3,
          paywall_feature: _v4,
          paywall_cta: _v0,
          ..._v12({
            paywallStyle: _v5,
            paywallPlansDisplayed: _v6,
            paywallPeriodicitiesDisplayed: _v7
          })
        });
      }
    };
  }, "writeStoredPaywallContext", 0, _v14]);
}