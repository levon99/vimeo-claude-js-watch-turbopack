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
  _v0.s(["useOnBoardingBPEvents", 0, () => {
    let _v0 = (0, _v11.useViewer)(),
      _v1 = (0, _v1.useCallback)(({
        product: _v0,
        copy: _v1,
        location: _v2,
        feature: _v3,
        ..._v4
      }) => (0, _v6.buildProductAnalyticsBpContext)({
        product: _v0 ?? "general",
        feature: _v3 ?? "general",
        location: _v2,
        is_user_facing_data: !0,
        entity_type: null,
        copy: _v1 ?? null,
        device_type: (0, _v3.default)(),
        ..._v4
      }), []),
      _v2 = (0, _v1.useCallback)(({
        page_name: _v0,
        ..._v1
      }) => (0, _v8.buildWebBpContext)({
        page_name: _v0 ?? (0, _v2.getPageNameFromPath)(window.location.pathname, _v0?.user),
        referrer_page_name: _v0 ?? (0, _v2.getPageNameFromPath)(document.referrer, _v0?.user),
        referrer: document.referrer || window.location.href,
        path: document.location.pathname,
        ..._v1
      }), [_v0?.user]),
      _v3 = (0, _v1.useCallback)(_v0 => (0, _v5.buildActionBpContext)({
        action_type: "click",
        feature: null,
        ..._v0
      }), []),
      _v4 = (0, _v1.useCallback)(() => _v0?.teamUser ? (0, _v7.buildTeamBpContextFromTeamUser)(_v0?.teamUser) : (0, _v7.buildTeamBpContextFromTeam)(_v0?.team), [_v0?.teamUser, _v0?.team]),
      _v5 = (0, _v1.useCallback)(({
        copy: _v0,
        eventName: _v1,
        location: _v2,
        pageName: _v3
      }) => {
        (0, _v9.sendBpEventWithContexts)(_v1, {
          ...(0, _v5.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ..._v1({
            copy: _v0,
            location: _v2
          }),
          ..._v2({
            page_name: _v3
          }),
          ..._v4(),
          ...(0, _v10.buildThirdPartyIntegrationBpContext)({
            integration_id: null,
            integration_name: null,
            is_partner: null
          })
        }, {
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
          upsell_name: null,
          usd_price: null
        });
      }, [_v1, _v4, _v2]),
      _v6 = (0, _v1.useCallback)(() => {
        _v5({
          copy: "Open Vimeo",
          eventName: "vimeo.upgrade_redirect_to_mobile_app",
          location: "page_area",
          pageName: "checkout_form_page_receipt"
        });
      }, [_v5]),
      _v7 = (0, _v1.useCallback)(({
        copy: _v0,
        eventName: _v1,
        location: _v2,
        pageName: _v3,
        feature: _v4,
        upsell_name: _v5
      }) => {
        (0, _v9.sendBpEventWithContexts)(_v1, {
          ...(0, _v4.buildViewBpContext)({
            view_type: "pageview",
            feature: null
          }),
          ..._v1({
            copy: _v0,
            location: _v2,
            feature: _v4
          }),
          ..._v2({
            page_name: _v3
          }),
          ..._v4()
        }, 38, {
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
          upsell_name: _v5 ?? null,
          usd_price: null
        });
      }, [_v1, _v4, _v2]);
    return {
      sendClickOpenMobileLinkEvent: _v6,
      sendConfirmationPageViewEvent: (0, _v1.useCallback)(({
        feature: _v0,
        upsell_name: _v1
      }) => {
        _v7({
          eventName: "vimeo.confirmation_page_view",
          location: "page_area",
          pageName: "checkout_form_page_receipt",
          feature: _v0,
          upsell_name: _v1
        });
      }, [_v7]),
      sendInviteMembersToTeamEvent: (0, _v1.useCallback)(_v0 => {
        (0, _v9.sendBpEventWithContexts)("vimeo.invite_members_to_team", {
          ..._v4(),
          ..._v3(),
          ..._v2({
            copy: "invite_members"
          }),
          ..._v1({
            product: "web_onboarding",
            location: "onboarding_page"
          })
        }, 4, {
          action_name: "manage_members",
          ..._v0
        });
      }, [_v4, _v3, _v2, _v1])
    };
  }], 0);
}