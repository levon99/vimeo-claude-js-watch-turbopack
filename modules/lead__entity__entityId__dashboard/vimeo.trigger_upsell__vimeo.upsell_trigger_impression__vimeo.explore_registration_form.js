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
    _v12 = _v0.i(0);
  let _v13 = "vimeo.trigger_upsell",
    _v14 = "vimeo.upsell_trigger_impression",
    _v15 = "vimeo.explore_registration_form",
    _v16 = {
      [_v13]: 30,
      [_v14]: 29,
      [_v15]: 12
    };
  var _v17 = _v0.i(0);
  _v0.s(["useUpsellAnalytics", 0, () => {
    let _v0 = (0, _v12.useViewer)()?.teamUser,
      _v1 = (0, _v1.useCallback)(_v0 => _v0 === _v17.ENTITY_TYPE.EVENT ? window.location.pathname.includes("rtmp") ? "live_event_rtmp_page" : "live_browser_studio" : "single_video_view_manage", []),
      _v2 = (0, _v1.useCallback)(({
        upsellName: _v0,
        eventName: _v1 = _v13,
        product: _v2,
        copy: _v3 = null,
        pageName: _v4,
        location: _v5,
        interfaceType: _v6,
        target: _v7 = null,
        targetPath: _v8 = null,
        element: _v9 = "button",
        flow: _v10 = null,
        modalName: _v11 = null,
        entityType: _v12 = _v17.ENTITY_TYPE.VIDEO,
        selectedPlan: _v13 = null,
        purchaseType: _v14 = null,
        feature: _v15 = "registration",
        formId: _v16,
        entityId: _v17,
        numberOfVideos: _v18,
        resourcePrivacy: _v19,
        isSeoOn: _v20
      }) => {
        let _v21 = _v16[_v1],
          _v22 = {
            ...(_v1 !== _v14 && (0, _v3.buildActionBpContext)({
              action_type: "click",
              feature: null
            })),
            ...(0, _v10.buildWebBpContext)({
              page_name: _v4,
              referrer_page_name: null,
              referrer: null,
              path: window.location.pathname,
              target: _v7,
              copy: null,
              location: null,
              target_path: _v8
            }),
            ...(0, _v6.buildTeamBpContextFromTeamUser)(_v0 ?? void 0),
            ...(0, _v5.buildProductAnalyticsBpContext)({
              feature: _v15,
              product: _v2,
              element: _v9,
              location: _v5,
              copy: _v3,
              modal_name: _v11,
              device_type: (0, _v2.default)(),
              flow: _v10,
              entity_type: (_v0 => {
                switch (_v0) {
                  case "event":
                    return "events";
                  case "album":
                    return "showcase";
                  default:
                    return _v0;
                }
              })(_v12)
            }),
            ...(0, _v7.buildThirdPartyIntegrationBpContext)({
              integration_id: null,
              integration_name: null,
              partner_bucket: null,
              is_partner: null
            }),
            ...(_v1 === _v15 && (0, _v8.buildVideoBpContext)({
              video_id: Number(_v17)
            })),
            ...(_v1 === _v14 && (0, _v9.buildViewBpContext)({
              view_type: "impression",
              feature: null
            })),
            ...(_v12 === _v17.ENTITY_TYPE.SHOWCASE && (0, _v4.buildCollectionBpContext)({
              collection_privacy: null,
              entity_id: Number(_v17),
              number_of_videos: _v18 ?? null,
              collection_embed_privacy: _v19 ?? null,
              is_seo_on: _v20 ?? null
            }))
          },
          _v23 = _v1 !== _v15 ? {
            upsell_name: _v0,
            interface_type: _v6,
            selected_plan: _v13,
            purchase_type: _v14,
            add_on_feature: null,
            usd_price: null,
            price: null,
            currency: null,
            is_discount: null,
            discount_offer: null,
            promo_code_id: null,
            duration: null,
            is_dismissible: _v12 !== _v17.ENTITY_TYPE.SHOWCASE && null
          } : {
            action_name: "explore_form",
            provider_name: null,
            provider_list_id: null,
            form_id: _v16
          };
        (0, _v11.sendBpEventWithContexts)(_v1, _v22, _v21, _v23);
      }, [_v0]);
    return (0, _v1.useMemo)(() => ({
      sendUpsellEvent: _v2,
      getPageName: _v1
    }), [_v2, _v1]);
  }], 0);
}