{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useUpgradeAnalytics", 0, () => {
    let {
        fetchProductAnalyticsBpContext: _v0,
        webContext: _v1,
        teamContext: _v2,
        actionContext: _v3,
        thirdPartyIntegrationContext: _v4,
        viewContext: _v5
      } = (0, _v3.useGetContexts)(),
      _v6 = (0, _v4.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      _v7 = {
        interface_type: "modal",
        selected_plan: null,
        purchase_type: null,
        duration: null,
        usd_price: null,
        currency: null,
        is_discount: null,
        add_on_feature: null,
        discount_offer: null,
        is_dismissible: !0,
        promo_code_id: null,
        upsell_name: null
      },
      _v8 = {
        "vimeo.trigger_upsell": {
          pAProps: {
            product: "distribution",
            feature: _v2.ResourceTypeEntityMap[_v6]?.feature,
            flow: _v2.ResourceTypeEntityMap[_v6]?.flow ?? null,
            element: "button",
            copy: "Upgrade"
          },
          eventName: "vimeo.trigger_upsell"
        }
      },
      _v9 = {
        interface_type: "modal",
        selected_plan: null,
        purchase_type: null,
        duration: null,
        usd_price: null,
        currency: null,
        is_discount: null,
        add_on_feature: null,
        discount_offer: null,
        is_dismissible: !0,
        promo_code_id: null,
        upsell_name: null
      },
      _v10 = {
        "vimeo.upsell_trigger_impression": {
          pAProps: {
            product: "distribution",
            feature: _v2.ResourceTypeEntityMap[_v6]?.feature,
            flow: _v2.ResourceTypeEntityMap[_v6]?.flow ?? null,
            element: null,
            copy: null
          },
          eventName: "vimeo.upsell_trigger_impression"
        }
      };
    return {
      sendUpgradeActionsEvent: ({
        eventName: _v0,
        upgradeActionFields: _v1,
        overridePAProps: _v2,
        overrideFlag: _v3
      }) => {
        if (!_v2.ANALYTICS_EVENT_V2 && !_v3) return !1;
        let _v4 = {
          ..._v0({
            ..._v8[_v0]?.pAProps,
            ..._v2
          }),
          ..._v1,
          ..._v2,
          ..._v3,
          ..._v4
        };
        return (0, _v1.sendBpEventWithContexts)(_v8[_v0]?.eventName ?? "vimeo.trigger_upsell", _v4, 21, {
          ..._v7,
          ..._v1
        }), !0;
      },
      sendUpgradeViewEvent: ({
        eventName: _v0,
        upgradeViewFields: _v1,
        overrideFlag: _v2,
        overridePAProps: _v3
      }) => {
        if (!_v2.ANALYTICS_EVENT_V2 && !_v2) return !1;
        let _v4 = {
          ..._v0({
            ..._v10[_v0]?.pAProps,
            ..._v3
          }),
          ..._v1,
          ..._v5,
          ..._v2,
          ..._v4
        };
        return (0, _v1.sendBpEventWithContexts)(_v10[_v0]?.eventName ?? "vimeo.upsell_trigger_impression", _v4, 20, {
          ..._v9,
          ..._v1
        }), !0;
      }
    };
  }]);
}