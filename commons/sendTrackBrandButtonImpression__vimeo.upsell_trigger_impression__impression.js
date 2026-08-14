{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["sendTrackBrandButtonImpression", 0, () => {
    _v1.default.send({
      eventName: "vimeo.upsell_trigger_impression",
      version: 24,
      contexts: {
        ..._v1.default.buildViewContext("impression"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "brand",
          location: "drawer",
          element: "button",
          entity_type: "video",
          copy: "brand"
        })
      },
      additionalFields: {
        upsell_name: "editor_brand",
        is_dismissible: !1,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackBrandButtonTrigger", 0, () => {
    _v1.default.send({
      eventName: "vimeo.trigger_upsell",
      version: 24,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "brand",
          location: "drawer",
          element: "button",
          entity_type: "video",
          copy: "brand"
        })
      },
      additionalFields: {
        upsell_name: "editor_brand",
        is_dismissible: !1,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackBrandColorsImpression", 0, () => {
    _v1.default.send({
      eventName: "vimeo.upsell_trigger_impression",
      version: 24,
      contexts: {
        ..._v1.default.buildViewContext("impression"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "color_palette",
          location: "drawer",
          element: "button",
          entity_type: "video",
          copy: "brand"
        })
      },
      additionalFields: {
        upsell_name: "brand_colors",
        is_dismissible: !1,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackBrandColorsTrigger", 0, () => {
    _v1.default.send({
      eventName: "vimeo.trigger_upsell",
      version: 24,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "color_palette",
          location: "drawer",
          element: "button",
          entity_type: "video",
          copy: "brand"
        })
      },
      additionalFields: {
        upsell_name: "brand_colors",
        is_dismissible: !1,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackLogoPlaceholderImpression", 0, () => {
    _v1.default.send({
      eventName: "vimeo.upsell_trigger_impression",
      version: 24,
      contexts: {
        ..._v1.default.buildViewContext("impression"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "custom_logo",
          location: "bottom_banner",
          element: "button",
          entity_type: "video",
          copy: "brand"
        })
      },
      additionalFields: {
        upsell_name: "editor_brand",
        is_dismissible: !1,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackLogoPlaceholderTrigger", 0, () => {
    _v1.default.send({
      eventName: "vimeo.trigger_upsell",
      version: 24,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "custom_logo",
          location: "bottom_banner",
          element: "button",
          entity_type: "video",
          copy: "brand"
        })
      },
      additionalFields: {
        upsell_name: "editor_brand",
        is_dismissible: !1,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackStockImpression", 0, () => {
    _v1.default.send({
      eventName: "vimeo.upsell_trigger_impression",
      version: 24,
      contexts: {
        ..._v1.default.buildViewContext("impression"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "stock",
          location: "drawer",
          element: "button",
          entity_type: "video",
          copy: "brand"
        })
      },
      additionalFields: {
        upsell_name: "editor_stock_footage",
        is_dismissible: !1,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackStockTrigger", 0, () => {
    _v1.default.send({
      eventName: "vimeo.trigger_upsell",
      version: 24,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "stock",
          location: "drawer",
          element: "button",
          entity_type: "video",
          copy: "brand"
        })
      },
      additionalFields: {
        upsell_name: "editor_stock_footage",
        is_dismissible: !1,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackTVEImpression", 0, _v0 => {
    _v1.default.send({
      eventName: "vimeo.upsell_trigger_impression",
      version: 24,
      contexts: {
        ..._v1.default.buildViewContext("impression"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          location: _v0 ? "timeline" : "timeline_object_menu",
          element: "button",
          entity_type: "video"
        })
      },
      additionalFields: {
        upsell_name: "tve_transcript",
        is_dismissible: !0,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackTVETrigger", 0, _v0 => {
    _v1.default.send({
      eventName: "vimeo.trigger_upsell",
      version: 24,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          location: _v0 ? "timeline" : "timeline_object_menu",
          element: "button",
          entity_type: "video"
        })
      },
      additionalFields: {
        upsell_name: "tve_transcript",
        is_dismissible: !0,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackTriggerQuotaUpsell", 0, _v0 => {
    _v1.default.send({
      eventName: "vimeo.trigger_upsell",
      version: 24,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "quota",
          location: "header",
          element: "button",
          entity_type: "video",
          copy: _v0 ? "create" : "save"
        })
      },
      additionalFields: {
        upsell_name: "at_limit_quota",
        is_dismissible: !1,
        interface_type: "modal",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackWatermarkBannerImpression", 0, () => {
    _v1.default.send({
      eventName: "vimeo.upsell_trigger_impression",
      version: 24,
      contexts: {
        ..._v1.default.buildViewContext("impression"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "watermark",
          location: "bottom_banner",
          element: "button",
          entity_type: "video",
          copy: "upgrade"
        })
      },
      additionalFields: {
        upsell_name: "editor_general",
        is_dismissible: !0,
        interface_type: "modal",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }, "sendTrackWatermarkBannerTrigger", 0, () => {
    _v1.default.send({
      eventName: "vimeo.trigger_upsell",
      version: 24,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "watermark",
          location: "bottom_banner",
          element: "button",
          entity_type: "video",
          copy: "upgrade"
        })
      },
      additionalFields: {
        upsell_name: "editor_general",
        is_dismissible: !1,
        interface_type: "page",
        add_on_feature: null,
        currency: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        promo_code_id: null,
        purchase_type: null,
        selected_plan: null,
        usd_price: null
      }
    });
  }]);
}