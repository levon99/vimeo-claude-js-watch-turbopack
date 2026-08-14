{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["trackAddTransitionOption", 0, () => {
    _v1.default.send({
      eventName: "vimeo.add_transition",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "timeline",
          editorFeature: "transition"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: "timeline",
          element: "button",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      }
    });
  }, "trackDeleteTimelineElement", 0, _v0 => {
    _v1.default.send({
      eventName: "vimeo.delete_timeline_element",
      version: 2,
      contexts: {
        ..._v1.default.buildActionContext("keyboard_shortcut"),
        ..._v1.default.buildEditorContext({
          via: "keyboard_shortcut",
          editorFeature: "transition",
          element: _v0
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: "timeline",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action: "keyboard_shortcut",
        action_direction: "none",
        element_duration: null,
        element_duration_destination: null,
        element_num: null,
        layer_num: null,
        number_of_elements_in_layerr: null,
        number_of_selected_elements: null,
        selection_id: _v0,
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        total_number_of_layers: 1
      }
    });
  }, "trackEditTimelineElement", 0, ({
    transitionId: _v0,
    elementDuration: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.edit_timeline_element",
      version: 2,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "timeline",
          editorFeature: "transition",
          element: _v0
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: "timeline",
          copy: "edit_transition",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        action: null,
        action_direction: null,
        element_duration: _v1,
        element_duration_destination: _v1,
        element_num: null,
        layer_num: null,
        number_of_elements_in_layerr: null,
        number_of_selected_elements: 1,
        total_number_of_layers: null,
        selection_id: _v0
      }
    });
  }, "trackHoverTransitionOption", 0, (_v0 = !1) => {
    _v1.default.send({
      eventName: "vimeo.hover_transition_option",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("hover"),
        ..._v1.default.buildEditorContext({
          via: "timeline",
          editorFeature: "transition"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: "timeline",
          element: "button",
          copy: _v0 ? "edit_transition" : "add_transition",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      }
    });
  }, "trackNotificationView", 0, _v0 => {
    _v1.default.send({
      eventName: "vimeo.notification_view",
      version: 1,
      contexts: {
        ..._v1.default.buildViewContext("impression"),
        ..._v1.default.buildEditorContext({
          via: null,
          element: "notification",
          editorFeature: "notification_view"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: "modal"
        })
      },
      additionalFields: {
        notification_name: _v0,
        checkbox_copy: null,
        error_id: null,
        error_name: null
      }
    });
  }, "trackSelectTransition", 0, (_v0, _v1 = "click") => {
    _v1.default.send({
      eventName: "vimeo.select_transition",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext(_v1),
        ..._v1.default.buildEditorContext({
          via: "drawer",
          editorFeature: "transition"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: "drawer",
          element: "drag" === _v1 ? "drag_and_drop" : "button",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        selection_id: _v0,
        selection_name: null,
        action_state: null,
        selection_format: null,
        action_cta: null,
        number_of_elements: 1,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "trackSelectTransitionDirection", 0, _v0 => {
    _v1.default.send({
      eventName: "vimeo.select_transition_direction",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "drawer",
          editorFeature: "transition"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: "drawer",
          element: "button",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action: "click",
        selection_value: null,
        selection_id: _v0,
        selection_name: _v0,
        action_state: null,
        selection_format: null,
        action_cta: null,
        number_of_elements: 1,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "trackSelectTransitionOverlayColor", 0, () => {
    _v1.default.send({
      eventName: "vimeo.select_transition_overlay_colors",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "drawer",
          editorFeature: "transition"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: "drawer",
          element: "button",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action: "click",
        selection_value: null,
        selection_id: null,
        selection_name: null,
        action_state: null,
        selection_format: null,
        action_cta: null,
        number_of_elements: 1,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "trackTransitionDurationAdjustment", 0, (_v0, _v1, _v2 = "drawer") => {
    _v1.default.send({
      eventName: "vimeo.transition_duration_adjustment",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("scroll"),
        ..._v1.default.buildEditorContext({
          via: _v2,
          editorFeature: "transition"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: _v2,
          element: "scroll",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        selection_id: null,
        selection_name: null,
        selection_format: null,
        action_cta: null,
        number_of_elements: 1,
        action_state: _v0.toString(),
        action: "scroll",
        selection_value: _v1,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "trackViewTransitionDrawer", 0, () => {
    _v1.default.send({
      eventName: "vimeo.view_transition_drawer",
      version: -1,
      contexts: {
        ..._v1.default.buildViewContext("impression"),
        ..._v1.default.buildEditorContext({
          via: "drawer",
          editorFeature: "transition"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transition",
          location: "drawer",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      }
    });
  }]);
}