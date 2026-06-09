{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["getDeviceType", 0, () => {
    let _v0 = navigator.userAgent;
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(_v0) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(_v0) ? "mobile" : "desktop";
  }], 0), (_v1 = {}).DELETE_VIDEO = "workflow.delete_video", _v1.OPEN_DELETE_MODAL = "workflow.open_delete_modal", _v1.DELETE_VIDEO_CANCELLED = "workflow.delete_video_cancelled", _v1.ADD_VIDEO_TO_FOLDER = "add_video_to_folder", _v1.CLICK_VIDEO_CARD_MENU = "vimeo.click_video_card_menu", _v1.OPEN_DOWNLOAD_MODAL = "workflow.open_download_modal", _v1.DOWNLOAD_VIDEO_FILE = "workflow.download_video_file", _v1.COPY_VIDEO_SHARE_LINK = "workflow.copy_video_share_link", _v1.SEARCH_IN_MOVE_VIDEO_MODAL = "vimeo.search_in_move_video_modal", _v1.SEARCH_IN_MOVE_FOLDER_MODAL = "vimeo.search_in_move_folder_modal", _v1.DELETE_FOLDER = "delete_folder", _v1.CREATE_FOLDER = "create_folder", _v1.CLICK_VIDEO_MANAGER_LINK = "vimeo.click_video_manager_link", _v1.ADD_ITEMS_TO_FOLDER = "vimeo.add_items_to_folder", _v1.CLICK = "vimeo.click", _v1.OPEN_FOLDER_OVERFLOW = "open_folder_overflow", _v1.CLICK_FOLDER_CARD = "vimeo.click_folder_card", _v1.UPDATE_FOLDER_SETTINGS = "update_folder_settings", _v1.CONFIRM_MOVE_FOLDER = "vimeo.confirm_move_folder", _v1.CLICK_LOGO = "vimeo.click_logo", _v1.CLICK_NEW_CONTENT = "vimeo.click_new_content", _v1.BULK_CHANGE_COMMENT_PRIVACY = "vimeo.bulk_change_comment_privacy", _v1.BULK_CHANGE_DOWNLOAD_PRIVACY = "vimeo.bulk_change_download_privacy", _v1.BULK_CHANGE_EMBED_PRIVACY = "vimeo.bulk_change_embed_privacy", _v1.BULK_CHANGE_LINK_PRIVACY = "vimeo.bulk_change_link_privacy", _v1.OPEN_VIDEO_SHARE = "vimeo.open_video_share", _v1.BULK_DELETE_ITEMS = "vimeo.bulk_delete_items";
  let _v9 = {
    VIDEO_LIBRARY: "video_library",
    EVENTS: "events",
    ANALYTICS: "analytics"
  };
  var _v10 = ((_v2 = {}).VIDEO_LIBRARY = "Video Library", _v2.WORKFLOW = "Workflow", _v2),
    _v11 = ((_v3 = {}).HORIZONTAL_LIST = "horizontal list", _v3.MVV_HEADER = "mvv header", _v3.MVV_HEADER_LOCATION = "mvv_header", _v3.MVV_SUBHEADER = "mvv subheader", _v3.SIDE_NAV = "side_nav", _v3.VIDEO_LIST = "video list", _v3.ENTERPRISE_LIHP = "enterprise lihp", _v3.EMPTY_STATE = "empty state", _v3.HEADER = "header", _v3.CENTER = "center", _v3.HERO = "hero", _v3.VIDEO_SELECTION_MODAL = "video selection modal", _v3.VIDEO_CARD = "video card", _v3.VIDEO_LIBRARY_HEADER = "video library header", _v3.FOLDER_SUBHEADER = "folder_subheader", _v3.ELIHP_CAROUSEL = "elihp_carousel", _v3.FOLDER_CARD = "folder_card", _v3.FOLDER_LIST = "folder_list", _v3.RESULT_LIST = "result_list", _v3.BULK_ACTIONS_BAR = "bulk_actions_bar", _v3.SVV_FILE_ACTIONS_MENU = "svv_file_actions_menu", _v3.LIVE_EVENT_CARD_MENU = "live_event_card_menu", _v3.EVENT_GRID = "event_grid", _v3.EVENT_LIST = "event_list", _v3),
    _v12 = ((_v4 = {}).ACTIONS_MENU = "actions menu", _v4),
    _v13 = ((_v5 = {}).MVV = "mvv", _v5),
    _v14 = ((_v6 = {}).color = "color", _v6.name = "name", _v6);
  let _v15 = _v0 => ({
      eventName: "vimeo.click_video_card_menu",
      version: 3,
      fields: _v0,
      defaultEventFields: {
        ..._v8.nullTeamContext,
        ..._v8.nullVideoContextData,
        position_row: null,
        position_column: null,
        location: null
      }
    }),
    _v16 = _v0 => ({
      eventName: "workflow.delete_video",
      version: 4,
      fields: _v0,
      defaultEventFields: {
        ..._v8.nullTeamContext,
        ..._v8.nullVideoContextData,
        ..._v8.nullUploadContextData,
        location: null
      }
    }),
    _v17 = _v0 => ({
      eventName: "workflow.open_download_modal",
      version: 4,
      fields: _v0,
      defaultEventFields: {
        ..._v8.nullTeamContext,
        ..._v8.nullVideoContextData,
        ..._v8.nullUploadContextData,
        location: null
      }
    });
  _v0.s(["AnalyticsFeatures", 0, _v9, "AnalyticsFolderSettingsCustomizations", () => _v14, "AnalyticsLocations", () => _v11, "AnalyticsPage", () => _v13, "AnalyticsProducts", () => _v10, "AnalyticsTargets", () => _v12, "EventActionAnalytics", 0, {
    clickEventMenu: (_v0, _v1, _v2) => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 144, {
      target: _v1,
      copy: null,
      name: "events_menu",
      feature: _v9.EVENTS,
      type: "general",
      page: _v0,
      location: _v2,
      target_path: null,
      click_type: null,
      device_type: null,
      path: window.location.href,
      third_party_integration: null
    })),
    clickCopyEventLink: (_v0, _v1, _v2) => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 144, {
      target: _v1,
      copy: "Copy event link",
      name: "copy_event_link",
      feature: _v9.EVENTS,
      type: "general",
      page: _v0,
      location: _v2,
      target_path: null,
      click_type: null,
      device_type: null,
      path: window.location.href,
      third_party_integration: null
    })),
    clickCopyEventEmbedCode: (_v0, _v1, _v2) => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 144, {
      target: _v1,
      copy: "Copy event embed code",
      name: "copy_event_embed_code",
      feature: _v9.EVENTS,
      type: "general",
      page: _v0,
      location: _v2,
      target_path: null,
      click_type: null,
      device_type: null,
      path: window.location.href,
      third_party_integration: null
    })),
    clickViewEventPage: (_v0, _v1, _v2) => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 144, {
      target: _v1,
      copy: "View event page",
      name: "click_view_event_page",
      feature: _v9.EVENTS,
      type: "general",
      page: _v0,
      location: _v2,
      target_path: null,
      click_type: null,
      device_type: null,
      path: window.location.href,
      third_party_integration: null
    })),
    clickMoveEvent: (_v0, _v1, _v2) => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 144, {
      target: _v1,
      copy: "Move event",
      name: "move_event",
      feature: _v9.EVENTS,
      type: "general",
      page: _v0,
      location: _v2,
      target_path: null,
      click_type: null,
      device_type: null,
      path: window.location.href,
      third_party_integration: null
    })),
    clickDeleteEvent: (_v0, _v1, _v2) => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 144, {
      target: _v1,
      copy: "Delete event",
      name: "delete_event",
      feature: _v9.EVENTS,
      type: "general",
      page: _v0,
      location: _v2,
      target_path: null,
      click_type: null,
      device_type: null,
      path: window.location.href,
      third_party_integration: null
    }))
  }, "SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT", 0, "VL_folder_card_hover", "VideoActionAnalytics", 0, {
    clickActionCopyReviewPageLink: _v0 => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 144, {
      copy: "Copy review link",
      feature: "review",
      location: "video_list",
      name: "click_action_copy_review_page_link",
      page: _v0,
      target: null,
      type: "general",
      click_type: null,
      device_type: null,
      path: null,
      target_path: null,
      third_party_integration: null
    })),
    clickActionReplace: (_v0, _v1) => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 144, {
      copy: "replace",
      feature: "replace_video",
      location: _v1,
      name: "click_action_replace",
      page: _v0,
      path: window.location.href,
      target: "svv_replace",
      target_path: "https://vimeo.com/manage/videos/[video_id]/replace",
      type: "general",
      click_type: null,
      device_type: null,
      third_party_integration: null
    })),
    clickCopyVideoEmbedCode: (_v0, _v1, _v2, _v3) => _v7.BigPictureClient.sendEvent(new _v7.Event("workflow.copy_video_embed_code", 5, {
      path: window.location.href,
      entry_page: null,
      page: _v0,
      actor_resource_role: null,
      actor_team_role: null,
      hash: null,
      height: null,
      is_preset_applied: null,
      is_video_password_protected: null,
      location: _v3,
      product: "null",
      team_owner_id: _v1,
      team_size: null,
      team_subscription_type: null,
      sizing: "",
      upload_id: null,
      video_app_id: null,
      video_embed_privacy: null,
      video_id: _v2,
      video_privacy: null,
      video_status: null,
      video_type: null,
      width: null
    })),
    clickDeleteVideo: _v16,
    clickMoveVideo: (_v0, _v1, _v2) => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 120, {
      copy: "move",
      feature: "mvv",
      location: _v1,
      name: "move_video",
      page: _v2,
      path: window.location.href,
      target: null,
      target_path: null,
      type: "general",
      click_type: null,
      device_type: null,
      third_party_integration: null
    })),
    clickVideoCardMenu: _v15,
    openDownloadModal: _v17,
    openVideoShare: (_v0, _v1, _v2) => _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.open_video_share", 2, {
      product: "collaboration",
      path: window.location.href,
      location: _v0,
      clip_id: _v1,
      is_upsell: _v2
    })),
    copyVideoShareLink: _v0 => ({
      eventName: "workflow.copy_video_share_link",
      version: 4,
      fields: _v0,
      defaultEventFields: {
        ..._v8.nullTeamContext,
        ..._v8.nullVideoContextData,
        ..._v8.nullUploadContextData,
        location: null
      }
    })
  }, "addItemsToFolder", 0, _v0 => ({
    eventName: "vimeo.add_items_to_folder",
    version: 2,
    fields: _v0,
    defaultEventFields: {
      ..._v8.nullTeamContext
    },
    globalAnalyticsToInclude: ["path", "product"]
  }), "addVideoToFolder", 0, _v0 => ({
    eventName: "add_video_to_folder",
    version: 9,
    fields: _v0,
    defaultEventFields: {
      ..._v8.nullTeamContext
    },
    globalAnalyticsToInclude: []
  }), "bulkChangeCommentPrivacy", 0, _v0 => ({
    eventName: "vimeo.bulk_change_comment_privacy",
    version: 1,
    fields: _v0,
    globalAnalyticsToInclude: ["path"]
  }), "bulkChangeDownloadPrivacy", 0, _v0 => ({
    eventName: "vimeo.bulk_change_download_privacy",
    version: 1,
    fields: _v0,
    globalAnalyticsToInclude: ["path"]
  }), "bulkChangeEmbedPrivacy", 0, _v0 => ({
    eventName: "vimeo.bulk_change_embed_privacy",
    version: 1,
    fields: _v0,
    globalAnalyticsToInclude: ["path"]
  }), "bulkChangeLinkPrivacy", 0, _v0 => ({
    eventName: "vimeo.bulk_change_link_privacy",
    version: 1,
    fields: _v0,
    globalAnalyticsToInclude: ["path"]
  }), "clickDeleteVideo", 0, _v16, "clickFolderCard", 0, _v0 => {
    let {
      is_pinned: _v1,
      ..._v2
    } = _v8.nullFolderContextData;
    return {
      eventName: "vimeo.click_folder_card",
      version: 2,
      fields: _v0,
      defaultEventFields: {
        ..._v2,
        ..._v8.nullTeamContext,
        ..._v8.nullUploadContextData,
        location: null,
        position_row: null,
        position_column: null
      }
    };
  }, "clickVideoCardMenu", 0, _v15, "confirmMoveFolder", 0, _v0 => ({
    eventName: "vimeo.confirm_move_folder",
    version: 1,
    fields: _v0,
    globalAnalyticsToInclude: []
  }), "createFolderViaFolderSettings", 0, _v0 => ({
    eventName: "create_folder",
    version: 5,
    fields: _v0,
    defaultEventFields: {
      ..._v8.nullTeamContext,
      location: null
    },
    globalAnalyticsToInclude: ["product", "path", "page", "entry_page"]
  }), "deleteFolder", 0, _v0 => ({
    eventName: "delete_folder",
    version: 5,
    fields: _v0,
    globalAnalyticsToInclude: ["product", "path"]
  }), "deleteVideoCancelled", 0, () => ({
    eventName: "workflow.delete_video_cancelled",
    version: 2,
    defaultEventFields: {
      ..._v8.nullTeamContext,
      ..._v8.nullVideoContextData,
      ..._v8.nullUploadContextData,
      location: null
    }
  }), "downloadVideoFile", 0, _v0 => ({
    eventName: "workflow.download_video_file",
    version: 3,
    fields: _v0,
    defaultEventFields: {
      ..._v8.nullTeamContext,
      ..._v8.nullVideoContextData,
      ..._v8.nullUploadContextData,
      location: null
    }
  }), "genericClick", 0, (_v0, _v1 = 122) => ({
    eventName: "vimeo.click",
    version: _v1,
    fields: _v0,
    defaultEventFields: {
      click_type: null,
      device_type: null,
      third_party_integration: null
    },
    globalAnalyticsToInclude: ["page", "path"]
  }), "openDeleteModal", 0, () => ({
    eventName: "workflow.open_delete_modal",
    version: 2,
    defaultEventFields: {
      ..._v8.nullTeamContext,
      ..._v8.nullVideoContextData,
      ..._v8.nullUploadContextData,
      location: null
    }
  }), "openDownloadModal", 0, _v17, "openFolderOverflow", 0, _v0 => ({
    eventName: "open_folder_overflow",
    version: 7,
    fields: _v0,
    globalAnalyticsToInclude: ["product", "path", "page", "entry_page"]
  }), "searchInMoveFolderModal", 0, _v0 => ({
    eventName: "vimeo.search_in_move_folder_modal",
    version: 1,
    fields: _v0,
    defaultEventFields: {
      team_owner_id: null,
      team_size: null,
      team_subscription_type: null,
      actor_team_role: null
    },
    globalAnalyticsToInclude: ["entry_page", "product"]
  }), "searchInMoveModal", 0, _v0 => ({
    eventName: "vimeo.search_in_move_video_modal",
    version: 1,
    fields: _v0,
    defaultEventFields: {
      ..._v8.nullTeamContext,
      location: null
    },
    globalAnalyticsToInclude: ["path", "entry_page"]
  }), "sendClickAnalyticsLinkEvent", 0, ({
    location: _v0,
    page: _v1,
    target_path: _v2
  }) => {
    let _v3 = new _v7.Event("vimeo.click", 151, {
      click_type: null,
      copy: "Analytics",
      device_type: null,
      feature: "video_library",
      location: _v0,
      name: "click_video_analytics",
      page: _v1,
      path: window.location.href,
      target: null,
      target_path: _v2,
      third_party_integration: null,
      type: "general"
    });
    _v7.BigPictureClient.sendEvent(_v3);
  }, "sendClickReviewLinkEvent", 0, ({
    location: _v0,
    page: _v1,
    target_path: _v2
  }) => {
    let _v3 = new _v7.Event("vimeo.click", 151, {
      click_type: null,
      copy: "Review",
      device_type: null,
      feature: "video_library",
      location: _v0,
      name: "click_video_review",
      page: _v1,
      path: window.location.href,
      target: null,
      target_path: _v2,
      third_party_integration: null,
      type: "general"
    });
    _v7.BigPictureClient.sendEvent(_v3);
  }, "sendOpenSidePanelEvent", 0, ({
    location: _v0,
    page: _v1
  }) => {
    let _v2 = new _v7.Event("vimeo.click", 151, {
      click_type: null,
      copy: "Video info",
      device_type: null,
      feature: "video_library",
      location: _v0,
      name: "open_side_panel",
      page: _v1,
      path: window.location.href,
      target: "sidepanel",
      target_path: null,
      third_party_integration: null,
      type: "general"
    });
    _v7.BigPictureClient.sendEvent(_v2);
  }, "updateFolderSettings", 0, _v0 => ({
    eventName: "update_folder_settings",
    version: 8,
    fields: _v0,
    defaultEventFields: {
      location: null
    },
    globalAnalyticsToInclude: ["path"]
  })], 0);
}