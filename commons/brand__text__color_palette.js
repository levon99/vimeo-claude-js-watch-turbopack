{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    [_v2.InspectorType.ADD_BRAND_FONT]: "brand",
    [_v2.InspectorType.BRAND_COLORS]: "brand",
    [_v2.InspectorType.BRAND_FONTS]: "brand",
    [_v2.InspectorType.BRAND_INTRO]: "brand",
    [_v2.InspectorType.BRAND_KIT]: "brand",
    [_v2.InspectorType.BRAND_LOGOS]: "brand",
    [_v2.InspectorType.BRAND_OUTRO]: "brand",
    [_v2.InspectorType.BUTTON_FONT_EDIT]: "text",
    [_v2.InspectorType.BUTTON_TEXT_ADD]: "text",
    [_v2.InspectorType.BUTTON_TEXT_EDIT]: "text",
    [_v2.InspectorType.COLOR_PALETTE]: "color_palette",
    [_v2.InspectorType.FONT_EDIT]: "text",
    [_v2.InspectorType.GRAPHICS]: "graphics",
    [_v2.InspectorType.HOTSPOTS]: "hotspot",
    [_v2.InspectorType.HOTSPOTS_SETTINGS]: "hotspot",
    [_v2.InspectorType.IFRAMES]: "embed",
    [_v2.InspectorType.MEDIA]: "media",
    [_v2.InspectorType.MEDIA_ANIMATIONS]: "media",
    [_v2.InspectorType.MEDIA_TRANSITIONS]: "transition",
    [_v2.InspectorType.MUSIC]: "music",
    [_v2.InspectorType.OVERLAYS]: "overlays",
    [_v2.InspectorType.POLL_EDIT]: "polls_and_quizzes",
    [_v2.InspectorType.POLL_FONT_EDIT]: "polls_and_quizzes",
    [_v2.InspectorType.POLLS]: "polls_and_quizzes",
    [_v2.InspectorType.SHAPES]: "graphics",
    [_v2.InspectorType.TEMPLATES]: "templates",
    [_v2.InspectorType.TEXT_ADD]: "text",
    [_v2.InspectorType.TEXT_ANIMATIONS]: "text",
    [_v2.InspectorType.TEXT_EDIT]: "text",
    [_v2.InspectorType.TRANSCRIPT]: "transcript",
    [_v2.InspectorType.SCORECARD]: "hotspot"
  };
  _v0.s(["inspectorTypeToFeature", 0, _v3, "sendTrackAddMedia", 0, ({
    mediaSelectionAction: _v0,
    mediaSource: _v1,
    mediaType: _v2
  }) => {
    _v1.default.send({
      eventName: "vimeo.add_media",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "header",
          element: "video",
          editorFeature: "add_media"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer"
        })
      },
      additionalFields: {
        media_crop_type: "none (not implemented)",
        media_type: _v2,
        media_type_source: _v1,
        media_selection_action: _v0,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackAddSolidBackgroundElement", 0, ({
    selectionId: _v0
  }) => {
    _v1.default.send({
      eventName: "vimeo.add_solid_background_element",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "inspector",
          element: "solid",
          editorFeature: "solid_background"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action_cta: "add_solid_background_element",
        action_state: null,
        number_of_elements: null,
        selection_format: null,
        selection_id: _v0,
        selection_name: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackAutoSaveNotificationAction", 0, ({
    notificationName: _v0,
    cta: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.notification_action",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          element: "notification",
          editorFeature: "notification_select"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "auto_save",
          location: "modal",
          copy: _v1
        })
      },
      additionalFields: {
        notification_name: _v0,
        checkbox_copy: null,
        error_id: null,
        error_name: null,
        is_marked_checkbox: !1
      }
    });
  }, "sendTrackClickOnUploadMedia", 0, ({
    copy: _v0,
    element: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.click_on_upload_madia",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("client_process"),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer",
          element: _v1,
          copy: _v0
        })
      },
      additionalFields: {
        action: null,
        action_cta: null,
        action_state: null,
        number_of_elements: null,
        selection_format: null,
        selection_id: null,
        third_party_integration: null,
        selection_name: null,
        selection_value: null
      }
    });
  }, "sendTrackEditText", 0, ({
    productAnalyticsFeature: _v0,
    editorFeature: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.edit_text",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: _v1
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: _v0,
          location: "drawer"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        action_cta: null,
        action_state: null,
        number_of_elements: null,
        selection_format: null,
        selection_id: null,
        selection_name: null
      }
    });
  }, "sendTrackFindInTimeline", 0, () => {
    _v1.default.send({
      eventName: "vimeo.select_local_upload_find_in_timeline",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "header",
          element: "button",
          copy: "find in timeline"
        })
      }
    });
  }, "sendTrackLoadStoryboard", 0, ({
    isAutoSavedVersion: _v0,
    loadedStoryboardId: _v1,
    previousStoryboardId: _v2
  }) => {
    _v1.default.send({
      eventName: "vimeo.load_storyboard",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("client_process"),
        ..._v1.default.buildEditorContext({
          via: null,
          element: "notification",
          editorFeature: "notification_select"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "auto_save",
          location: "modal"
        })
      },
      additionalFields: {
        is_auto_saved_version: _v0,
        loaded_storyboard_id: _v1,
        previous_storyboard_id: _v2
      }
    });
  }, "sendTrackLocalFilesAnalysis", 0, ({
    stepName: _v0,
    canRenderLocally: _v1,
    duration: _v2
  }) => {
    _v1.default.send({
      eventName: "vimeo.process_step",
      version: 3,
      contexts: {
        ..._v1.default.buildActionContext("client_process"),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer"
        })
      },
      additionalFields: {
        process_name: "is_original_editable",
        step_name: _v0,
        status: _v1 ? "success" : "fail",
        error: null,
        error_code: null,
        process_duration: _v2 ?? null
      }
    });
  }, "sendTrackOpenOrientationDropdown", 0, ({
    location: _v0,
    copy: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.open_resize_canvas",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("client_process"),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "resize_canvas",
          location: _v0,
          element: "dropdown",
          copy: _v1
        })
      },
      additionalFields: {
        action: null,
        action_cta: null,
        action_state: null,
        number_of_elements: null,
        selection_format: null,
        selection_id: null,
        third_party_integration: null,
        selection_name: null,
        selection_value: null
      }
    });
  }, "sendTrackPlayPauseVideo", 0, ({
    totalDuration: _v0,
    action: _v1,
    via: _v2,
    feature: _v3 = "playback_segment",
    editorFeature: _v4,
    copy: _v5,
    product: _v6 = "editor"
  }) => {
    _v1.default.send({
      eventName: "vimeo.play_editor_video",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildProductAnalyticsContext({
          location: "header",
          product: _v6,
          is_user_facing_data: !1,
          feature: _v3,
          copy: _v5
        }),
        ..._v1.default.buildEditorContext({
          via: _v2,
          editorFeature: _v4 || "play_video"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action: `${_v1}`,
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        total_duration: _v0
      }
    });
  }, "sendTrackPreviewEditor", 0, () => {
    _v1.default.send({
      eventName: "vimeo.preview_editor",
      version: -1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: "header",
          element: "button",
          editorFeature: "preview"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          product: "simplified_interactive",
          feature: "preview",
          location: "header",
          copy: "preview",
          is_user_facing_data: !1
        }),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildThirdPartyIntegrationContext({
          integration_id: null,
          integration_name: null,
          is_partner: null
        })
      }
    });
  }, "sendTrackSelectCanvasSize", 0, ({
    location: _v0,
    copy: _v1,
    prevSize: _v2,
    newSize: _v3
  }) => {
    _v1.default.send({
      eventName: "vimeo.select_canvas_size",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("client_process"),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "resize_canvas",
          location: _v0,
          element: "icon",
          copy: _v1
        })
      },
      additionalFields: {
        action: null,
        action_cta: null,
        action_state: _v2,
        number_of_elements: null,
        selection_format: _v3,
        selection_id: null,
        third_party_integration: null,
        selection_name: null,
        selection_value: null
      }
    });
  }, "sendTrackSelectEditorNotificationOption", 0, ({
    notificationName: _v0,
    mainCta: _v1,
    errorCode: _v2,
    errorName: _v3,
    cta: _v4,
    via: _v5,
    isCheckbox: _v6,
    isMarkedCheckbox: _v7,
    checkboxName: _v8
  }) => {
    _v1.default.send({
      eventName: "vimeo.select_editor_notification_option",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: _v5,
          element: "notification",
          editorFeature: "notification_select"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        notification_name: _v0,
        main_cta: _v1,
        error_code: _v2,
        error_name: _v3,
        cta: _v4,
        is_checkbox: _v6,
        is_marked_checkbox: _v7,
        checkbox_name: _v8
      }
    });
  }, "sendTrackSidebarAction", 0, ({
    via: _v0,
    element: _v1,
    feature: _v2,
    editorFeature: _v3
  }) => {
    _v1.default.send({
      eventName: "vimeo.sidebar_action",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: _v0,
          element: `${_v1}_icon`,
          editorFeature: _v3
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: _v2,
          location: "sidebar",
          is_user_facing_data: !1
        })
      },
      additionalFields: {
        action_cta: null,
        action_state: null,
        selection_id: null,
        selection_name: null,
        selection_format: null,
        number_of_elements: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackStartWithTemplate", 0, () => {
    _v1.default.send({
      eventName: "vimeo.start_with_template",
      version: 4,
      contexts: {
        ..._v1.default.buildActionContext("client_process"),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "templates",
          location: "timeline",
          element: "button",
          copy: "start with a template"
        })
      },
      additionalFields: {
        action: null,
        action_cta: null,
        action_state: null,
        number_of_elements: null,
        selection_format: null,
        selection_id: null,
        third_party_integration: null,
        selection_name: null,
        selection_value: null
      }
    });
  }, "sendTrackTimelineResize", 0, ({
    isResizeUp: _v0
  }) => {
    _v1.default.send({
      eventName: "vimeo.resize_timeline",
      version: 3,
      contexts: {
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildActionContext("drag"),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: ""
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "timeline",
          location: "timeline"
        })
      },
      additionalFields: {
        action: null,
        action_cta: "timeline",
        action_state: null,
        number_of_elements: null,
        selection_format: null,
        selection_id: null,
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        selection_name: _v0 ? "resize_up" : "resize_down"
      }
    });
  }, "sendTrackViewAutoSaveNotification", 0, ({
    notificationName: _v0
  }) => {
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
          feature: "auto_save",
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
  }, "sendTrackViewEditor", 0, ({
    viewStatus: _v0,
    viewStatusReason: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.view_editor",
      version: 1,
      contexts: {
        ..._v1.default.buildViewContext("pageview"),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildEditorContext({
          element: "page",
          via: _v1.default.getReferrerPageName()
        }),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "view",
          location: "page_area",
          is_user_facing_data: !1
        })
      },
      additionalFields: {
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        view_status: _v0,
        view_status_reason: _v1 || null
      }
    });
  }, "sendTrackViewEditorNotification", 0, ({
    notificationName: _v0,
    mainCta: _v1,
    errorCode: _v2,
    errorName: _v3,
    via: _v4,
    isCheckbox: _v5
  }) => {
    _v1.default.send({
      eventName: "vimeo.view_editor_notification",
      version: 1,
      contexts: {
        ..._v1.default.buildViewContext("pageview"),
        ..._v1.default.buildEditorContext({
          via: _v4,
          element: "notification",
          editorFeature: "notification_view"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        notification_name: _v0,
        main_cta: _v1,
        error_code: _v2,
        error_name: _v3,
        is_checkbox: _v5
      }
    });
  }, "trackOpenAnimationsInspector", 0, ({
    type: _v0
  }) => {
    _v1.default.send({
      eventName: "vimeo.click_on_animation",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          element: "icon",
          editorFeature: _v0
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: _v0,
          location: "top_toolbar"
        })
      },
      additionalFields: {
        action_cta: null,
        action_state: null,
        number_of_elements: null,
        selection_format: null,
        third_party_integration: null,
        selection_id: null,
        selection_name: null
      }
    });
  }, "trackSelectAnimation", 0, ({
    type: _v0,
    animationId: _v1,
    animationName: _v2
  }) => {
    _v1.default.send({
      eventName: "vimeo.select_animation_type",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          element: "button",
          editorFeature: _v0
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext(),
        ..._v1.default.buildProductAnalyticsContext({
          feature: _v0,
          location: "drawer"
        })
      },
      additionalFields: {
        action_cta: null,
        action_state: null,
        number_of_elements: null,
        selection_format: null,
        third_party_integration: null,
        selection_id: _v1,
        selection_name: _v2
      }
    });
  }], 0);
}