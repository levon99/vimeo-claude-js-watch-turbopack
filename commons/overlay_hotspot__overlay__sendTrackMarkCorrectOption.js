{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = () => {
      let _v0 = (() => {
        let {
          linkedElementId: _v0,
          editorBackup: _v1
        } = _v4.default.getState().interactiveOverlay;
        return (0, _v7.getElementByIdFromLayers)(_v0, _v1.storyboardLayers)?.element;
      })();
      return _v0 && (0, _v6.isInteractiveHotspot)(_v0) ? _v0.interactiveHotspot : null;
    },
    _v9 = () => _v8() ? "overlay_hotspot" : "overlay",
    _v10 = () => {
      let _v0 = _v4.default.getState(),
        _v1 = _v0.storyboard.layers,
        _v2 = {
          overlay_id: _v0.interactiveOverlay.activeOverlayId,
          has_text: !1,
          has_image: !1,
          has_iframe: !1,
          has_poll: !1,
          n_text_elements: 0,
          n_media_elements: 0,
          n_graphic_elements: 0,
          n_embed_elements: 0,
          n_polls: 0,
          n_quizzes: 0,
          n_hotspots: 0
        };
      return _v1.forEach(_v0 => {
        for (let _v0 of _v0.composition) (0, _v6.isTextElement)(_v0) ? (_v2.has_text = !0, _v2.n_text_elements++) : (0, _v6.isMediaElement)(_v0) ? ((0, _v6.isImageElement)(_v0) && (_v2.has_image = !0), _v2.n_media_elements++) : (0, _v6.isGraphicElement)(_v0) ? _v2.n_graphic_elements++ : (0, _v6.isIframeElement)(_v0) ? (_v2.has_iframe = !0, _v2.n_embed_elements++) : (0, _v6.isInteractiveHotspot)(_v0) ? _v2.n_hotspots++ : (0, _v6.isPollElement)(_v0) && (_v2.has_poll = !0, _v0.correctAnswerId ? _v2.n_quizzes++ : _v2.n_polls++);
      }), _v2;
    };
  _v0.s(["sendTrackMarkCorrectOption", 0, () => {
    let _v0 = {
      eventName: "vimeo.mark_correct_option",
      version: 1,
      contexts: {
        ..._v3.default.buildActionContext("click"),
        ..._v3.default.buildProductAnalyticsContext({
          feature: "polls_and_quizzes",
          location: "drawer",
          element: "icon",
          copy: "mark as correct option",
          is_user_facing_data: !1,
          entity_type: "video",
          flow: _v9()
        }),
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildTeamContext(),
        ..._v3.default.buildVideoContext()
      }
    };
    _v3.default.send(_v0);
  }, "sendTrackOpenSaveOverlayDropdown", 0, () => {
    let _v0 = {
      eventName: "vimeo.open_save_dropdown",
      version: 1,
      contexts: {
        ..._v3.default.buildProductAnalyticsContext({
          product: "simplified_interactive",
          feature: "overlays",
          flow: _v9(),
          element: "dropdown",
          location: "header"
        }),
        ..._v3.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        ..._v3.default.buildTeamContext(),
        ..._v3.default.buildActionContext("click"),
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildEditorContext({
          via: null,
          editorFeature: "overlays"
        })
      },
      additionalFields: {
        third_party_integration: _v3.default.getThirdPartyIntegration()
      }
    };
    _v3.default.send(_v0);
  }, "sendTrackOverlaySaveAsAction", 0, _v0 => {
    let _v1 = {
      eventName: "vimeo.save_as_action",
      version: 1,
      contexts: {
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildTeamContext(),
        ..._v3.default.buildEditorContext({
          via: null,
          editorFeature: "overlays"
        }),
        ..._v3.default.buildActionContext("click"),
        ..._v3.default.buildProductAnalyticsContext({
          product: "simplified_interactive",
          feature: "save",
          flow: _v9(),
          location: _v0,
          copy: _v5.SAVE_COPY.SAVE_AS_NEW_TEMPLATE
        }),
        ..._v3.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        })
      }
    };
    _v3.default.send(_v1);
  }, "sendTrackOverlaySelectSaveModal", 0, _v0 => {
    let _v1 = {
      eventName: "vimeo.select_save_modal",
      version: 1,
      contexts: {
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildActionContext("click"),
        ..._v3.default.buildProductAnalyticsContext({
          product: "simplified_interactive",
          feature: "save",
          flow: _v9(),
          location: "modal",
          modal_name: "save_overlay_template",
          copy: _v0
        }),
        ..._v3.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        ..._v3.default.buildTeamContext(),
        ..._v3.default.buildEditorContext({
          via: null,
          editorFeature: "overlays"
        })
      }
    };
    _v3.default.send(_v1);
  }, "sendTrackOverlayViewSaveModal", 0, () => {
    let _v0 = {
      eventName: "vimeo.view_save_modal",
      version: -1,
      contexts: {
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildViewContext("pageview"),
        ..._v3.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        ..._v3.default.buildEditorContext({
          via: null,
          editorFeature: "overlays"
        }),
        ..._v3.default.buildTeamContext(),
        ..._v3.default.buildProductAnalyticsContext({
          product: "simplified_interactive",
          feature: "save",
          flow: _v9(),
          location: "modal",
          modal_name: "save_overlay_template",
          copy: _v5.SAVE_COPY.SAVE_AS_NEW_TEMPLATE
        })
      }
    };
    _v3.default.send(_v0);
  }, "sendTrackSaveOverlayAsTemplate", 0, _v0 => {
    let _v1 = {
      eventName: "vimeo.save_overlay_as_template",
      version: 1,
      contexts: {
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildProductAnalyticsContext({
          product: "simplified_interactive",
          feature: "overlays",
          flow: _v9(),
          element: "icon",
          location: "modal",
          modal_name: "save_overlay_template",
          copy: _v0
        }),
        ..._v3.default.buildActionContext("click"),
        ..._v3.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        ..._v3.default.buildTeamContext()
      },
      additionalFields: _v10()
    };
    _v3.default.send(_v1);
  }, "sendTrackSaveOverlayElement", 0, () => {
    let _v0 = {
      eventName: "vimeo.save_overlay_element",
      version: 1,
      contexts: {
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildProductAnalyticsContext({
          product: "simplified_interactive",
          feature: "overlays",
          flow: _v9(),
          element: "icon",
          location: "header",
          copy: "done"
        }),
        ..._v3.default.buildActionContext("click"),
        ..._v3.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        ..._v3.default.buildTeamContext()
      },
      additionalFields: _v10()
    };
    _v3.default.send(_v0);
  }, "sendTrackSelectEditOverlay", 0, () => {
    let _v0 = {
      eventName: "vimeo.select_edit_overlay",
      version: 1,
      contexts: {
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildActionContext("click"),
        ..._v3.default.buildTeamContext(),
        ..._v3.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        ..._v3.default.buildProductAnalyticsContext({
          product: "simplified_interactive",
          feature: "overlays",
          flow: _v9(),
          element: "icon",
          location: "top_toolbar",
          copy: "edit_overlay"
        })
      },
      additionalFields: _v10()
    };
    _v3.default.send(_v0);
  }, "sendTrackSelectOverlayMoreOptions", 0, () => {
    let _v0 = {
      eventName: "vimeo.select_overlay_more_options",
      version: 1,
      contexts: {
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildActionContext("click"),
        ..._v3.default.buildTeamContext(),
        ..._v3.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        ..._v3.default.buildProductAnalyticsContext({
          product: "simplified_interactive",
          feature: "overlays",
          flow: _v9(),
          element: "icon",
          location: "top_toolbar",
          copy: "more_options"
        })
      },
      additionalFields: _v10()
    };
    _v3.default.send(_v0);
  }, "sendTrackUnmarkCorrectOption", 0, () => {
    let _v0 = {
      eventName: "vimeo.unmark_correct_option",
      version: 1,
      contexts: {
        ..._v3.default.buildActionContext("click"),
        ..._v3.default.buildProductAnalyticsContext({
          feature: "polls_and_quizzes",
          location: "drawer",
          element: "icon",
          copy: "unmark as correct option",
          is_user_facing_data: !1,
          entity_type: "video",
          flow: _v9()
        }),
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildTeamContext(),
        ..._v3.default.buildVideoContext()
      }
    };
    _v3.default.send(_v0);
  }, "sendTrackViewOverlayEditor", 0, () => {
    let _v0 = {
      eventName: "vimeo.view_overlay_editor",
      version: -1,
      contexts: {
        ..._v3.default.buildWebContext(),
        ..._v3.default.buildProductAnalyticsContext({
          feature: "overlays",
          location: "workspace",
          flow: _v9(),
          element: "icon",
          copy: (() => {
            let _v0 = _v8(),
              {
                storyboard: _v1
              } = _v4.default.getState();
            return _v0?.action?.type === _v1.HotspotActionType.SHOW_OVERLAY && 0 === _v1.layers.filter(_v0 => _v0.type !== _v2.LayerType.HIDDEN && _v0.type !== _v2.LayerType.INTERACTIVE_BACKGROUND_VIDEO).length ? "Create a new overlay" : "Edit overlay";
          })()
        }),
        ..._v3.default.buildEditorContext({
          via: null,
          editorFeature: "overlays"
        }),
        ..._v3.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        ..._v3.default.buildViewContext("pageview"),
        ..._v3.default.buildTeamContext()
      },
      additionalFields: {
        third_party_integration: _v3.default.getThirdPartyIntegration()
      }
    };
    _v3.default.send(_v0);
  }]);
}