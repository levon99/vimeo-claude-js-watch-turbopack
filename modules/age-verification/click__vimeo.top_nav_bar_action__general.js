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
    _v10 = _v0.i(0);
  let _v11 = ({
      actionType: _v0 = "click",
      additionalFields: _v1,
      copy: _v2 = null,
      element: _v3,
      entityType: _v4,
      eventName: _v5 = "vimeo.top_nav_bar_action",
      feature: _v6 = "general",
      flow: _v7 = null,
      product: _v8 = "general",
      target: _v9 = null,
      targetPath: _v10 = null,
      version: _v11,
      viewer: _v12,
      viewType: _v13
    }) => {
      let _v14 = _v12?.user,
        _v15 = _v12?.teamUser,
        _v16 = (0, _v1.getPageNameFromPath)(window.location.pathname, _v14),
        _v17 = document.referrer ? (0, _v1.getPageNameFromPath)(`/${document.referrer}`, _v14) : null,
        _v18 = {
          ...(_v13 ? (0, _v7.buildViewBpContext)({
            view_type: _v13,
            feature: null
          }) : (0, _v3.buildActionBpContext)({
            action_type: _v0,
            feature: null
          })),
          ...(0, _v8.buildWebBpContext)({
            page_name: _v16,
            location: null,
            referrer_page_name: _v17,
            referrer: document.referrer,
            path: window.location.pathname,
            target: _v9,
            target_path: _v10,
            copy: _v2
          }),
          ...(0, _v4.buildProductAnalyticsBpContext)({
            product: _v8,
            feature: _v6,
            location: "top_navigation_bar",
            modal_name: null,
            flow: _v7,
            element: _v3,
            entity_type: _v4 ?? null,
            device_type: (0, _v2.default)(),
            is_user_facing_data: null,
            copy: _v2
          }),
          ..._v12(_v15),
          ...(0, _v6.buildThirdPartyIntegrationBpContext)({
            is_partner: !1,
            integration_id: null,
            integration_name: null
          })
        },
        _v19 = ["vimeo.upsell_trigger_impression", "vimeo.trigger_upsell"].includes(_v5);
      (0, _v9.sendBpEventWithContexts)(_v5, _v18, _v11, {
        ..._v1,
        ...(_v19 ? _v14 : {})
      });
    },
    _v12 = (_v0, _v1) => (0, _v5.buildTeamBpContext)({
      is_team_member: !!_v0,
      team_owner_id: _v0?.ownerId || null,
      team_subscription_type: _v0?.accountType || null,
      team_role: _v13(_v0?.plainTextPermissionLevel?.toLowerCase()) || null,
      team_size: _v0?.currentTeamSize || null,
      team_id: _v0?.teamId || null,
      resource_permission_level: _v1 || null,
      joined_team_at: _v0?.joinedOn ? new Date(_v0?.joinedOn).getTime() : null
    }),
    _v13 = _v0 => {
      if (_v0) return _v0.replace(/\d+/g, " ").split(/ |\B(?=[A-Z])/).map(_v0 => _v0.toLowerCase()).join("_");
    },
    _v14 = {
      plan_selected: null,
      purchase_type: null,
      duration: null,
      usd_price: null,
      price: null,
      currency: null,
      is_discount: null,
      discount_offer: null,
      promo_code_id: null,
      interface_type: null,
      selected_plan: null,
      add_on_feature: null
    };
  _v0.s(["trackNavigationActionEvent", 0, _v0 => _v11({
    ..._v0,
    actionType: "click"
  }), "trackNavigationViewEvent", 0, _v0 => _v11({
    ..._v0,
    viewType: "impression"
  }), "useTrackNavigationEvent", 0, () => {
    let _v0 = (0, _v10.useViewer)();
    return _v0 => _v11({
      ..._v0,
      viewer: _v0
    });
  }]);
}