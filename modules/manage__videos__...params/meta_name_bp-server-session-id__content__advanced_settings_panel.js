{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = new class {
    videoId = 0;
    video;
    teamUser;
    init({
      videoId: _v0,
      video: _v1,
      teamUser: _v2
    }) {
      this.videoId = _v0, this.video = _v1, this.teamUser = _v2;
    }
    initTeamUser(_v0) {
      this.teamUser = _v0;
    }
    send({
      eventName: _v0,
      fields: _v1,
      contexts: _v2,
      version: _v3 = -1
    }) {
      let _v4 = new _v1.Event(_v0, _v3, _v1);
      _v2 ? _v1.BigPictureClient.sendEventWithContexts(_v4, _v2) : _v1.BigPictureClient.sendEvent(_v4);
    }
    buildVideoContext() {
      return (0, _v10.buildVideoBpContext)({
        video_id: this.videoId,
        title: this.video?.name ?? "",
        video_owner_id: parseInt(this.video?.user?.uri.split("/")[2] ?? ""),
        is_demo: !1,
        video_privacy: this.video?.privacy?.view || null,
        video_embed_privacy: this.video?.privacy?.embed || null,
        upload_method_api: null,
        upload_method_api_id: null,
        duration: this.video?.duration ?? 0,
        resolution: null,
        video_height: this.video?.height ?? 0,
        video_width: this.video?.width ?? 0,
        orientation: null
      });
    }
    buildVideoViewContext() {
      let _v0 = this.video?.metadata?.aiContent,
        _v1 = _v0 ? _v0.audio || _v0.audioAuto || _v0.visual || _v0.visualAuto : null;
      return (0, _v14.buildVideoViewBpContext)({
        viewer_home_session_id: document.querySelector('meta[name="bp-server-session-id"]')?.getAttribute("content") ?? "",
        has_like_available: !!this.video?.metadata?.connections?.likes?.uri,
        has_watch_later_available: !!this.video?.metadata?.interactions?.watchlater?.added,
        has_share_available: this.video?.privacy?.allowShareLink ?? !1,
        has_ai: _v1,
        existing_like_counts: this.video?.metadata?.connections?.likes?.total ?? null,
        existing_view_counts: this.video?.stats?.plays ?? null,
        listed_categories_counts: 0
      });
    }
    buildTeamContext() {
      return (0, _v7.buildTeamBpContextFromTeamUser)(this.teamUser);
    }
    buildWebContext(_v0) {
      return (0, _v9.buildWebBpContext)({
        referrer: (0, _v4.getEntryPage)(document.referrer || ""),
        path: window.location.pathname,
        target_path: null,
        ..._v0
      });
    }
    buildProductAnalyticsContext(_v0) {
      return (0, _v11.buildProductAnalyticsBpContext)({
        ..._v0,
        device_type: (0, _v3.default)(),
        entity_type: _v0.entity_type ?? null,
        is_user_facing_data: _v0.is_user_facing_data ?? null
      });
    }
    buildActionContext(_v0) {
      return (0, _v8.buildActionBpContext)(_v0);
    }
    buildViewContext(_v0) {
      return (0, _v15.buildViewBpContext)(_v0);
    }
    buildThirdPartyIntegrationContext(_v0 = {}) {
      return (0, _v13.buildThirdPartyIntegrationBpContext)({
        integration_id: null,
        integration_name: null,
        is_partner: null,
        ..._v0
      });
    }
    buildEditorContext(_v0) {
      return (0, _v12.buildEditorBpContext)(_v0);
    }
  }();
  _v0.s(["default", 0, _v16], 0);
  let _v17 = "advanced_settings_panel",
    _v18 = (_v0, _v1, _v2 = {}, _v3 = _v19) => ({
      eventName: _v0,
      version: _v1,
      fields: _v2,
      defaultEventFields: _v3
    }),
    _v19 = {
      ..._v5.nullVideoContextData,
      ..._v5.nullTeamContext,
      ..._v5.nullUploadContextData
    },
    _v20 = {
      ..._v19,
      location: null
    },
    _v21 = (_v0, _v1 = 1) => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", _v1 ?? 1, _v0)),
    _v22 = {
      target: null,
      target_path: null,
      path: null,
      click_type: null,
      device_type: null,
      third_party_integration: null
    },
    _v23 = _v0 => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click", 122, {
      ..._v0
    })),
    _v24 = (_v0, _v1) => {
      let _v2 = {
        location: "svv",
        ..._v0
      };
      return _v1 && Object.assign(_v2, {
        client_ver: null,
        clients_session_start_ts: null,
        debug_mode: null,
        in_background: null,
        is_guest: null
      }), _v2;
    };
  _v0.s(["AnalyticsFlow", 0, {
    SVV_PAGE: "svv",
    EDIT_MODAL: "edit_modal",
    TRIM_FROM_SVV: "trim_from_svv"
  }, "addCategoryEvent", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", 1, {
    name: "action",
    location: "advanced_settings_panel",
    component: "add_category",
    page: "manage"
  })), "addCreditCollaboratorEvent", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", 1, {
    name: "action",
    location: "advanced_settings_panel",
    component: "add_credit_collaborator",
    page: "manage"
  })), "addTagEvent", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", 1, {
    name: "action",
    location: "advanced_settings_panel",
    component: "add_tag",
    page: "manage"
  })), "cancelChanges", 0, (_v0, _v1) => _v18("vimeo.svv_cancel_changes", 1, {
    location: _v1,
    trigger: _v0
  }), "changeContainsAdsCheckbox", 0, _v0 => _v18("vimeo.change_content_notice", 2, {
    location: "privacy drawer",
    ..._v0
  }), "changeEmbedSettingsEvent", 0, _v0 => _v18("workflow.change_video_embed_settings", 3, _v0), "changeGeneralContentRating", 0, _v0 => _v18("vimeo.change_content_rating", 2, {
    location: "privacy drawer",
    ..._v0
  }), "changeThumbnailEvent", 0, _v0 => _v18("workflow.change_thumbnail", 3, _v0), "changeVideoDescriptionEvent", 0, (_v0, _v1) => _v18("workflow.change_video_description", 2, {
    location: _v1,
    description_length: _v0
  }), "changeVideoTitleEvent", 0, (_v0, _v1) => _v18("workflow.change_video_title", 2, {
    location: _v1,
    title_length: _v0
  }), "clickAdvancedAnalytics", 0, (_v0, _v1) => {
    let _v2 = {
        page: "svv_analytics",
        location: "svv_analytics_drawer",
        target: "Advanced Analytics Video Report",
        name: "advanced_report_button",
        copy: "Advanced Report",
        feature: "advanced_analytics",
        type: "general",
        target_path: _v0,
        path: window.location.pathname,
        click_type: null,
        device_type: null,
        third_party_integration: null
      },
      _v3 = {
        ...(0, _v7.buildTeamBpContextFromTeamUser)(_v1)
      };
    (0, _v6.sendBpEventWithContexts)("vimeo.click", _v3, 102, _v2);
  }, "clickAnalyticsForGeneralPlayerCustomizationEvent", 0, (_v0, _v1) => {
    let _v2 = (0, _v4.getEntryPage)(document.referrer || "");
    _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.player_customization_click", 4, {
      name: _v0,
      path: window.location.pathname,
      entry_page: _v2,
      page: "player_customization",
      location: "settings_screen",
      type: "general",
      feature: "interactive",
      video_id: Number(_v1),
      status: null,
      product: "interactive",
      player_feature: null,
      feature_dependency: [""]
    }));
  }, "clickAnalyticsForPlayerCustomizationArea", 0, (_v0, _v1, _v2 = "") => {
    let _v3 = (0, _v4.getEntryPage)(document.referrer || "");
    _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.player_customization_click", 4, {
      name: "choose_customization_area",
      path: window.location.pathname,
      entry_page: _v3,
      page: "player_customization",
      location: "settings_screen",
      type: "general",
      feature: "interactive",
      video_id: _v0,
      status: null,
      product: "interactive",
      player_feature: _v1 || null,
      feature_dependency: [_v2]
    }));
  }, "clickAnalyticsForPlayerCustomizationToggle", 0, (_v0, _v1, _v2, _v3 = "") => {
    let _v4 = (0, _v4.getEntryPage)(document.referrer || "");
    _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.player_customization_click", 4, {
      name: "change_feature_toggle",
      path: window.location.pathname,
      entry_page: _v4,
      page: "player_customization",
      location: "settings_screen",
      type: "general",
      feature: "interactive",
      video_id: _v0,
      status: _v1 ? "on" : "off",
      product: "interactive",
      player_feature: _v2,
      feature_dependency: [_v3]
    }));
  }, "clickInteractionAnalytics", 0, _v0 => _v18("vimeo.click_interaction_analytics", 1, {
    location: "analytics drawer",
    product: "analytics",
    target: _v0
  }), "clickSVVUpsell", 0, _v0 => _v18("workflow.click_svv_upsell", 2, _v0, _v20), "clickToCloseRateUsModal", 0, ({
    trackingParams: _v0,
    addNonWebFields: _v1
  }) => _v18("vimeo.click_to_close_rate_us_modal", 1, _v24(_v0, _v1), {}), "clickToMakeACopy", 0, _v0 => {
    _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click_to_make_a_copy", 1, _v0));
  }, "clickToRateUsOnThirdParty", 0, ({
    trackingParams: _v0,
    addNonWebFields: _v1
  }) => _v18("vimeo.click_to_rate_us_on_third_party", 1, _v24(_v0, _v1), {}), "deleteVideo", 0, _v0 => _v18("workflow.delete_video", 2, {
    location: _v0,
    product: "video settings"
  }, _v19), "deleteVideoCancelled", 0, () => _v18("workflow.delete_video_cancelled", 2, {
    product: "video settings"
  }, _v20), "downloadVideoFile", 0, (_v0, _v1, _v2) => {
    let {
      height: _v3,
      width: _v4
    } = _v0;
    return _v18("workflow.download_video_file", 3, {
      location: _v2 ?? "svv main field",
      is_owner: _v1,
      height: _v0.height,
      width: _v0.width,
      resolution: `${_v0.width} x ${_v0.height}`,
      aspect_ratio: (0, _v2.getAspectRatio)({
        height: _v3,
        width: _v4
      }),
      quality: _v0.publicName,
      quality_type: _v0.quality,
      type: _v0.type,
      file_size: (0, _v2.formatFileSize)(_v0.sizeShort),
      third_party_integration: null
    });
  }, "openDeleteModal", 0, _v0 => _v18("workflow.open_delete_modal", 2, {
    product: "video settings",
    ..._v0
  }, _v20), "openPlayerCustomizationExperienceEvent", 0, () => _v18("vimeo.open_player_customization_experience", 1, {
    product: "embed settings",
    location: "sidebar"
  }), "openSVVModal", 0, (_v0, _v1) => _v18("vimeo.svv_modal_opened", 1, {
    location: _v1,
    ..._v0
  }), "removeCategoryEvent", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", 1, {
    name: "action",
    location: "advanced_settings_panel",
    component: "remove_category",
    page: "manage"
  })), "removeCreditCollaboratorEvent", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", 1, {
    name: "action",
    location: "advanced_settings_panel",
    component: "remove_credit_collaborator",
    page: "manage"
  })), "removeTagEvent", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", 1, {
    name: "action",
    location: "advanced_settings_panel",
    component: "remove_tag",
    page: "manage"
  })), "renderingErrorViewed", 0, ({
    trackingParams: _v0,
    addNonWebFields: _v1
  }) => _v18("view_notification", 1, _v24(_v0, _v1), {}), "sendAnalyticsClick", 0, ({
    name: _v0,
    copy: _v1,
    videoId: _v2,
    teamUser: _v3
  }) => _v21({
    location: "manage_footer",
    component: "demo_banner",
    page: "manage",
    feature: "demo_video",
    team_owner_id: _v3?.ownerId || null,
    video_id: _v2,
    team_subscription_type: _v3?.accountType || null,
    role: _v3?.plainTextPermissionLevel ?? "owner",
    name: _v0,
    copy: _v1
  }, 6), "sendAnalyticsDrawerEvent", 0, _v0 => {
    let _v1 = {
        page: "svv_analytics",
        location: "svv_analytics_drawer",
        target: null,
        name: "svv_analytics_drawer_toggle",
        copy: null,
        feature: "analytics",
        type: "general",
        target_path: null,
        path: window.location.pathname,
        click_type: null,
        device_type: null,
        third_party_integration: null
      },
      _v2 = {
        ...(0, _v7.buildTeamBpContextFromTeamUser)(_v0)
      };
    (0, _v6.sendBpEventWithContexts)("vimeo.click", _v2, 102, _v1);
  }, "sendBannerImpression", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_impression", 2, {
    name: "banner",
    component: "demo_banner",
    location: "manage_footer",
    page: "manage"
  })), "sendBreadcrumbsClickEvent", 0, _v0 => {
    _v21({
      name: "action",
      location: "breadcrumb",
      component: "folder_nav_item",
      page: _v0
    });
  }, "sendCancelDeleteVersionEvent", 0, () => {
    _v21({
      name: "action",
      location: "delete_version_warning",
      component: "cancel_delete_version",
      page: "manage"
    });
  }, "sendCancelRestoreVersionEvent", 0, () => {
    _v21({
      name: "action",
      location: "delete_version_warning",
      component: "cancel_restore_version",
      page: "manage"
    });
  }, "sendChaptersImpression", 0, () => {
    var _v0;
    return _v0 = {
      name: "auto_chapter_notification",
      location: "chapters_drawer",
      page: "svv",
      feature: "chapters",
      type: "general"
    }, void _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.impression", 21, _v0));
  }, "sendClickReviewVideo", 0, _v0 => {
    _v21({
      name: "action",
      location: _v0,
      component: "review_video",
      page: "manage"
    });
  }, "sendCloseVersionHistoryEvent", 0, () => {
    _v21({
      name: "action",
      location: "version_history",
      component: "close_version_history",
      page: "manage"
    });
  }, "sendConfirmDeleteVersionEvent", 0, () => {
    _v21({
      name: "action",
      location: "delete_version_warning",
      component: "confirm_delete_version",
      page: "manage"
    });
  }, "sendConfirmRestoreVersionEvent", 0, () => {
    _v21({
      name: "action",
      location: "restore_version_warning",
      component: "confirm_restore_version",
      page: "manage"
    });
  }, "sendCopyGifLinkEvent", 0, (_v0, _v1) => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click_to_copy_gif_link", 1, {
    location: "svv main",
    path: window.location.pathname,
    product: "workflow",
    clip_id: _v0,
    resolution: _v1
  })), "sendDeleteGifEvent", 0, _v0 => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.delete_embeddable_gif", 1, {
    location: "svv main",
    path: window.location.pathname,
    product: "workflow",
    clip_id: _v0
  })), "sendDeleteVersionEvent", 0, () => {
    _v21({
      name: "action",
      location: "version_history",
      component: "delete_version",
      page: "manage"
    });
  }, "sendDismissVersionsUpsellEvent", 0, () => {
    _v21({
      name: "dismiss",
      location: "version_history",
      component: "dismiss_version_history_upsell",
      page: "manage"
    });
  }, "sendDownloadGifEvent", 0, (_v0, _v1) => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.download_embeddable_gif", 1, {
    location: "svv main",
    path: window.location.pathname,
    product: "workflow",
    clip_id: _v0,
    resolution: _v1
  })), "sendDownloadVersionEvent", 0, () => {
    _v21({
      name: "action",
      location: "version_history",
      component: "download_version",
      page: "manage"
    });
  }, "sendGifUpsellEvent", 0, _v0 => _v23({
    ..._v22,
    copy: "upgrade",
    feature: "upgrade_cta",
    name: "svv_gif_upsell",
    type: "upsell",
    target: "/upgrade",
    location: _v0,
    page: "svv_manage"
  }), "sendInteractiveEntryClickEvent", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", 1, {
    component: "interactive_entry_button",
    location: "right_nav",
    name: "action",
    page: "svv_manage"
  })), "sendOpenAddToCollection", 0, _v0 => {
    _v23({
      ..._v22,
      copy: _v0,
      feature: `${_v0}s`,
      location: "svv_publish_menu",
      name: "open_add_to_collection",
      page: "svv",
      target: `add to ${_v0} modal`,
      type: "general"
    });
  }, "sendOpenEmbedEmailModalEvent", 0, (_v0, _v1) => {
    _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.open_embed_email_modal", 2, {
      product: "Distribution",
      location: _v1,
      path: window.location.pathname,
      clip_id: _v0,
      is_my_videos: null
    }));
  }, "sendOpenGifCreateModalEvent", 0, _v0 => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.open_embeddable_gif_create_modal", 1, {
    location: "svv main",
    path: window.location.pathname,
    product: "workflow",
    clip_id: _v0
  })), "sendOpenMoveModalEvent", 0, _v0 => {
    _v23({
      ..._v22,
      copy: "move",
      feature: "svv",
      location: _v0,
      name: "move_item",
      page: "svv",
      target: "move modal",
      type: "general"
    });
  }, "sendPreviewBannerClick", 0, _v0 => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", 1, {
    name: _v0,
    location: "recipient_footer",
    component: "owner_banner",
    page: "recipient"
  })), "sendPreviewBannerImpression", 0, () => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_impression", 1, {
    name: "banner",
    location: "recipient_footer",
    component: "owner_banner",
    page: "recipient"
  })), "sendReplaceVideoClickEvent", 0, _v0 => {
    _v21({
      name: "action",
      location: _v0,
      component: "replace_video",
      page: "manage"
    });
  }, "sendReplaceVideoModalClickEvent", 0, (_v0, _v1) => {
    _v21({
      name: _v0,
      location: "replace_warning",
      component: _v1,
      page: "manage"
    });
  }, "sendReplaceVideoUpsellModalDimissClickEvent", 0, () => {
    _v21({
      name: "dismiss",
      location: "replace_video_upsell_modal",
      component: "dismiss_replace_video_upsell_modal",
      page: "manage"
    });
  }, "sendRestoreVersionEvent", 0, () => {
    _v21({
      name: "action",
      location: "version_history",
      component: "restore_version",
      page: "manage"
    });
  }, "sendSelectAVersionEvent", 0, () => {
    _v21({
      name: "action",
      location: "version_history",
      component: "select_version",
      page: "manage"
    });
  }, "sendShareButtonClickEvent", 0, (_v0, _v1) => {
    _v16.send({
      eventName: "vimeo.open_distribution_options",
      version: 3,
      fields: {
        distribution_type: "share",
        embed_config: null,
        embed_custom_dimensions: null,
        number_of_items: null,
        target_file_details: null,
        target_quality: null,
        target_resolution: null,
        is_internal: !1,
        is_send_email_notification: !1,
        sharee_entity_permission: null,
        sharee_id: null,
        sharee_team_permission: null
      },
      contexts: {
        ..._v16.buildProductAnalyticsContext({
          product: "distribution",
          feature: "share_video",
          location: "top_action_bar",
          modal_name: null,
          flow: "share_video",
          element: "button",
          copy: "Share",
          is_user_facing_data: !1,
          entity_type: "video"
        }),
        ..._v16.buildWebContext({
          page_name: "single_video_view",
          referrer_page_name: "single_video_view_manage",
          target: "share_entity_modal",
          copy: null,
          location: null
        }),
        ..._v16.buildTeamContext(),
        ..._v16.buildActionContext({
          action_type: "click",
          feature: null
        }),
        ..._v16.buildVideoContext(),
        ..._v16.buildVideoViewContext(),
        ..._v16.buildThirdPartyIntegrationContext()
      }
    });
  }, "sendSvvClickEvent", 0, _v21, "sendVersionHistoryClickEvent", 0, _v0 => {
    _v21({
      name: "action",
      location: _v0,
      component: "manage_version_history",
      page: "manage"
    });
  }, "sendVersionsUpsellClickEvent", 0, () => {
    _v23({
      ..._v22,
      type: "upsell",
      page: "svv_manage",
      feature: "version_history",
      location: "version_history",
      target: "/upgrade",
      name: "svv_version_history_upsell",
      copy: null
    });
  }, "sendVersionsUpsellImpressionEvent", 0, () => {
    _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_impression", 1, {
      name: "upsell",
      location: "version_histor_upsell",
      component: "version_history_upsell",
      page: "manage"
    }));
  }, "toggleGraph", 0, ({
    state: _v0,
    graph: _v1
  }) => _v18("vimeo.toggle_graph", 1, {
    location: "analytics drawer",
    product: "analytics",
    state: _v0,
    graph: _v1
  }), "trackTranscriptNotificationView", 0, () => {
    let _v0 = "Text-based trimming is now available in the Video editor.",
      _v1 = {
        ...(0, _v11.buildProductAnalyticsBpContext)({
          product: "single_video_view",
          feature: "transcript",
          location: "drawer",
          element: "button",
          copy: _v0,
          entity_type: "video"
        }),
        ...(0, _v9.buildWebBpContext)({
          page_name: "single_video_view_manage",
          location: null,
          referrer_page_name: "single_video_view_manage",
          referrer: (0, _v4.getEntryPage)(document.referrer || ""),
          path: window.location.pathname,
          target: null,
          copy: _v0
        }),
        ..._v16.buildTeamContext(),
        ..._v16.buildVideoContext(),
        ..._v16.buildVideoViewContext(),
        ..._v16.buildThirdPartyIntegrationContext(),
        ..._v16.buildViewContext({
          view_type: "impression",
          feature: "editor"
        })
      };
    (0, _v6.sendBpEventWithContexts)("vimeo.notification_view", _v1, 1, {
      notification_name: "try TVE in Editor comms launch",
      checkbox_copy: _v0,
      error_id: null,
      error_name: null,
      is_marked_checkbox: null
    });
  }, "updateCreativeCommonsLicenseEvent", 0, (_v0 = _v17) => _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.svv_click", 1, {
    name: "action",
    location: _v0,
    component: "update_cc_license",
    page: "manage"
  })), "videoDuplicated", 0, _v0 => {
    _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.video_duplicated", 1, _v0));
  }, "viewRateUsModalForThirdParty", 0, ({
    trackingParams: _v0,
    addNonWebFields: _v1
  }) => _v18("vimeo.view_rate_us_modal_for_third_party", 1, _v24(_v0, _v1), {}), "visitSvvManageEvent", 0, _v0 => _v18("workflow.visit_svv_manage", 6, _v0)], 0);
}