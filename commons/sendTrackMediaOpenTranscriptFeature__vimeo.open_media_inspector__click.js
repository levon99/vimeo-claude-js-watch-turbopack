{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["sendTrackMediaOpenTranscriptFeature", 0, _v0 => {
    _v1.default.send({
      eventName: "vimeo.open_media_inspector",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "drawer" === _v0 ? "transcript_drawer" : "media_sidebar",
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "drawer" === _v0 ? "transcript" : "media",
          element: "drawer" === _v0 ? "button" : "icon",
          location: _v0,
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        action_cta: null,
        number_of_elements: null,
        selection_id: null,
        action: null,
        action_state: null,
        selection_format: null,
        selection_name: null,
        selection_value: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackRecordOpenTranscriptFeature", 0, _v0 => {
    _v1.default.send({
      eventName: "vimeo.open_record_studio",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "drawer" === _v0 ? "transcript_drawer" : "media_sidebar",
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "drawer" === _v0 ? "transcript" : "media",
          element: "icon",
          location: _v0,
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        action_cta: null,
        number_of_elements: null,
        selection_id: null,
        action: null,
        action_state: null,
        selection_format: null,
        selection_name: null,
        selection_value: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackTranscriptActions", 0, (_v0, _v1, _v2, _v3 = null) => {
    _v1.default.send({
      eventName: "vimeo.click_on_transcript_actions",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext(_v0),
        ..._v1.default.buildEditorContext({
          via: _v2,
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          element: "drawer" === _v2 ? "icon" : "button",
          location: "drawer",
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        action_cta: _v1,
        selection_id: _v3,
        number_of_elements: null,
        action: null,
        action_state: null,
        selection_format: null,
        selection_name: null,
        selection_value: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackTranscriptBulkRemoveToggle", 0, () => {
    _v1.default.send({
      eventName: "vimeo.transcript_click_on_bulk_remove",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          element: "icon",
          location: "drawer",
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        action_cta: null,
        selection_id: null,
        number_of_elements: null,
        action: null,
        action_state: null,
        selection_format: null,
        selection_name: null,
        selection_value: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackTranscriptDrawerView", 0, (_v0, _v1) => {
    _v1.default.send({
      eventName: "vimeo.view_transcript_drawer",
      version: 1,
      contexts: {
        ..._v1.default.buildViewContext("impression", _v1),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "transcript"
        }),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          location: "drawer"
        }),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        })
      },
      additionalFields: {
        ..._v0
      }
    });
  }, "sendTrackTranscriptMoreClick", 0, () => {
    _v1.default.send({
      eventName: "vimeo.trascript_more_action",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "transcript_section",
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          element: "icon",
          location: "drawer",
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        selection_id: null,
        action_state: null,
        action_cta: null,
        number_of_elements: null,
        action: null,
        selection_format: null,
        selection_name: null,
        selection_value: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackTranscriptProcessStep", 0, (_v0, _v1) => {
    _v1.default.send({
      eventName: "vimeo.transcript_process_step",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("client_process"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          element: null,
          location: "drawer"
        }),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        })
      },
      additionalFields: {
        video_source_id: _v0,
        transcript_status: _v1
      }
    });
  }, "sendTrackTranscriptRemoveFillerWords", 0, () => {
    _v1.default.send({
      eventName: "vimeo.remove_filler_words_from_transcript",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "transcript_action_menu",
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          element: "button",
          location: "drawer",
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        action_cta: "remove_filler_words",
        selection_id: null,
        number_of_elements: null,
        action: null,
        action_state: null,
        selection_format: null,
        selection_name: null,
        selection_value: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackTranscriptRemoveSource", 0, (_v0, _v1) => {
    _v1.default.send({
      eventName: "vimeo.remove_source_from_transcript_drawer",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          element: "button",
          location: "drawer",
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        selection_id: _v0,
        action_state: _v1,
        action_cta: "remove",
        number_of_elements: null,
        action: null,
        selection_format: null,
        selection_name: null,
        selection_value: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackTranscriptRemoveWordGaps", 0, _v0 => {
    _v1.default.send({
      eventName: "vimeo.remove_words_gap_from_transcript",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "transcript_action_menu",
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          element: "button",
          location: "drawer",
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        action_cta: "remove_word_gaps",
        selection_id: null,
        number_of_elements: null,
        action: null,
        action_state: null,
        selection_format: null,
        selection_name: null,
        selection_value: _v0,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackTranscriptSearchClick", 0, () => {
    _v1.default.send({
      eventName: "vimeo.transcript_click_on_search_box",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("type"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          element: "icon",
          location: "drawer",
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        selection_id: null,
        action_state: null,
        action_cta: null,
        number_of_elements: null,
        action: null,
        selection_format: null,
        selection_name: null,
        selection_value: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackTranscriptSelectionMenuView", 0, (_v0, _v1) => {
    _v1.default.send({
      eventName: "vimeo.view_transcript_action_menu",
      version: 1,
      contexts: {
        ..._v1.default.buildViewContext("impression"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "transcript"
        }),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          location: "drawer",
          element: "sub_menu",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          is_partner: null,
          integration_name: null
        })
      },
      additionalFields: {
        has_keep_only_this: !1,
        has_remove_text: _v1,
        has_restore: _v0
      }
    });
  }, "sendTrackTranscriptToggle", 0, () => {
    _v1.default.send({
      eventName: "vimeo.transcript_timeline_element",
      version: 2,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "transcript"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          location: "timeline"
        })
      },
      additionalFields: {
        action: "transcript",
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        action_direction: null,
        element_duration: null,
        element_duration_destination: null,
        element_num: null,
        layer_num: null,
        number_of_elements_in_layerr: null,
        number_of_selected_elements: null,
        selection_id: null,
        total_number_of_layers: null
      }
    });
  }, "sendTrackTranscriptTranscribe", 0, (_v0, _v1, _v2, _v3) => {
    _v1.default.send({
      eventName: "vimeo.click_on_transcribe",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "drawer" === _v0 ? "transcript_drawer" : _v0,
          editorFeature: "transcript",
          element: "media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "transcript",
          element: "button",
          location: _v0,
          is_user_facing_data: !1,
          entity_type: "video"
        })
      },
      additionalFields: {
        action_cta: _v1,
        number_of_elements: _v2,
        selection_id: _v3,
        action: null,
        action_state: null,
        selection_format: null,
        selection_name: null,
        selection_value: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }]);
}