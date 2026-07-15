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
  let _v12 = new class {
    teamUser;
    referrerPageName;
    contexts = {};
    init(_v0) {
      if (this.teamUser = _v0, document.referrer) {
        let _v0 = new URL(document.referrer).pathname;
        this.parsePageName(_v0).then(_v0 => {
          this.referrerPageName = _v0;
        });
      }
      return this.referrerPageName || (this.referrerPageName = null), this;
    }
    withTeamCtx() {
      return this.addContext((0, _v4.buildTeamBpContextFromTeamUser)(this.teamUser)), this;
    }
    withViewCtx(_v0) {
      return this.addContext((0, _v8.buildViewBpContext)(_v0 ?? {
        view_type: "impression",
        feature: null
      })), this;
    }
    withActionCtx(_v0) {
      return this.addContext((0, _v1.buildActionBpContext)(_v0 ?? {
        action_type: "click",
        feature: null
      })), this;
    }
    withWebCtx(_v0) {
      let _v1 = {
        page_name: "video_library",
        referrer_page_name: this.referrerPageName,
        referrer: document.referrer,
        path: window.location.pathname,
        copy: null,
        location: null,
        target: null,
        target_path: null,
        ..._v0
      };
      return this.addContext((0, _v9.buildWebBpContext)(_v1)), this;
    }
    withProductAnalyticsCtx(_v0) {
      let _v1 = {
        device_type: (0, _v11.getDeviceType)(),
        is_user_facing_data: !1,
        entity_type: null,
        element: null,
        flow: null,
        modal_name: null,
        copy: null,
        scrolling_percentage: null,
        cta_location_id: null,
        ..._v0
      };
      return this.addContext((0, _v3.buildProductAnalyticsBpContext)(_v1)), this;
    }
    withThirdPartyIntegrationCtx(_v0) {
      return this.addContext((0, _v5.buildThirdPartyIntegrationBpContext)(_v0 ?? {
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        managed_user_id: null,
        is_partner: null
      })), this;
    }
    withFolderCtx(_v0) {
      let _v1 = {
        folder_id: 0,
        access_permission_to_folder: null,
        folder_share_status: null,
        is_my_videos: null,
        is_private_to_me: null,
        is_pinned: null,
        is_subfolder: null,
        parent_folder_id: null,
        position_row: null,
        ..._v0
      };
      return this.addContext((0, _v2.buildFolderBpContext)(_v1)), this;
    }
    withVideoCtx(_v0) {
      let _v1 = {
        video_id: 0,
        content_rating: null,
        existing_comment_counts: null,
        existing_like_counts: null,
        existing_view_counts: null,
        is_auto_cc_enabled: null,
        is_demo: null,
        duration: null,
        has_embed_available: null,
        has_like_available: null,
        has_share_available: null,
        has_watch_later_available: null,
        listed_categories_counts: null,
        resolution: null,
        orientation: null,
        title: null,
        upload_method_api: null,
        upload_method_api_id: null,
        video_categories: null,
        video_embed_privacy: null,
        video_height: null,
        video_owner_id: null,
        video_privacy: null,
        video_version_id: null,
        video_width: null,
        viewer_home_session_id: null,
        ..._v0
      };
      return this.addContext((0, _v6.buildVideoBpContext)(_v1)), this;
    }
    withVideoViewCtx(_v0) {
      let _v1 = {
        existing_comment_counts: null,
        existing_like_counts: null,
        existing_view_counts: null,
        has_ai: null,
        has_comment_available: null,
        has_like_available: null,
        has_share_available: null,
        has_watch_later_available: null,
        listed_categories_counts: null,
        viewer_home_session_id: "",
        viewer_home_view_mode: null,
        ..._v0
      };
      return this.addContext((0, _v7.buildVideoViewBpContext)(_v1)), this;
    }
    send({
      eventName: _v0,
      version: _v1,
      additionalFields: _v2
    }) {
      (0, _v10.sendBpEventWithContexts)(_v0, this.contexts, _v1, _v2), this.contexts = {};
    }
    async parsePageName(_v0) {
      return new Promise((_v0, _v1) => {
        _v0 ? _v0(this.pageNameFromPathname(_v0)) : _v1(null);
      });
    }
    pageNameFromPathname(_v0) {
      let _v1 = "other";
      _v0.match(/\/live\/broadcaster(\/event)?\/[0-9]+.*/) ? _v1 = "live_browser_studio" : _v0.match(/\/live\/rtmp\/event\/[0-9]+.*/) ? _v1 = "live_event_rtmp_page" : _v0.match(/\/events?\/[0-9]+.*/) || _v0.match(/\/live\/(guest\/)?([0-9a-zA-Z])?(\/)?.*/) ? _v1 = "live_event_view_page" : _v0.match(/^\/upload(\/.*)?$/) ? _v1 = "upload_page" : _v0.match(/\/manage\/folders/) ? _v1 = "video_library" : _v0.match(/^\/(home)?/) && (_v1 = "self_serve_logged_in_homepage");
      let _v2 = _v0.match(/\/manage\/(videos|events|showcases|webinars)/);
      if (_v2) switch (_v2[1]) {
        case "videos":
          _v1 = "video_library";
          break;
        case "showcases":
          _v1 = "showcases_library";
          break;
        case "events":
          _v1 = "event_library";
          break;
        case "webinars":
          _v1 = "webinars_library";
          break;
        default:
          _v1 = "other";
      }
      return _v1;
    }
    addContext(_v0) {
      _v0 && (this.contexts = {
        ...this.contexts,
        ..._v0
      });
    }
  }();
  _v0.s(["BPEventService", 0, _v12], 0), _v0.s(["DistributionActionDefaults", 0, {
    is_internal: !0,
    distribution_type: null,
    sharee_id: null,
    sharee_email: null,
    is_send_email_notification: null,
    sharee_entity_permission: null,
    sharee_team_permission: null,
    embed_config: null,
    embed_custom_dimensions: null,
    number_of_items: null,
    target_file_details: null,
    target_quality: null,
    target_resolution: null,
    collection_type: null
  }, "VIMEO_DISTRIBUTION_ACTIONS_VERSION", 0, 9], 0);
  var _v13 = _v0.i(0);
  _v0.s(["getFolderCtxFromFolder", 0, _v0 => {
    var _v1;
    return {
      folder_id: _v0?.uri ? (0, _v13.getResourceIdFromUri)(_v0?.uri) : 0,
      is_private_to_me: !!_v0?.isPrivateToUser,
      access_permission_to_folder: _v0 ? (_v1 = _v0.metadata?.interactions ?? null) ? _v1.delete ? "can_manage" : _v1.edit ? "can_edit" : "can_view" : "can_view" : null,
      is_subfolder: _v0?.metadata?.connections ? !!_v0.metadata?.connections.parentFolder : null
    };
  }, "getVideoCtxFromVideo", 0, _v0 => _v0 ? {
    video_id: (0, _v13.idFromUri)(_v0.uri),
    video_owner_id: (0, _v13.idFromUri)(_v0.user?.uri),
    video_privacy: _v0.privacy?.view,
    video_embed_privacy: _v0.privacy?.embed,
    content_rating: _v0.contentRating ?? null,
    duration: _v0.duration ?? null
  } : {
    video_id: 0,
    video_owner_id: 0,
    video_privacy: null,
    video_embed_privacy: null,
    content_rating: null,
    duration: null
  }, "getVideoViewCtxFromVideo", 0, _v0 => {
    let _v1 = _v0.metadata;
    return {
      existing_like_counts: _v1?.connections?.likes?.total ?? null,
      existing_view_counts: _v0?.stats?.plays ?? null,
      existing_comment_counts: _v1?.connections?.comments?.total ?? null,
      listed_categories_counts: _v0?.categories?.length ?? null,
      has_like_available: !!_v1?.connections?.likes?.uri,
      has_share_available: _v0.privacy?.allowShareLink ?? !1,
      has_watch_later_available: !!_v1?.interactions?.watchlater?.added,
      has_ai: !_v1?.interactions?.askAiViewer?.disabled,
      viewer_home_session_id: document.querySelector('meta[name="bp-server-session-id"]')?.getAttribute("content") ?? ""
    };
  }], 0);
}