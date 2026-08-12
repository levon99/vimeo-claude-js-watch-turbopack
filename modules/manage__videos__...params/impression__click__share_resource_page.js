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
  let _v13 = new class {
    contexts = {};
    init() {
      return this;
    }
    withTeamCtx(_v0) {
      let _v1 = _v0?.teamUser ? (0, _v6.buildTeamBpContextFromTeamUser)(_v0?.teamUser) : (0, _v6.buildTeamBpContextFromTeam)(_v0?.team);
      return this.addContext(_v1), this;
    }
    withTargetTeamCtx(_v0) {
      let _v1 = {
        is_team_member: !0,
        team_owner_id: null,
        team_subscription_type: null,
        team_role: null,
        team_id: null,
        resource_permission_level: null,
        joined_team_at: null,
        team_size: null,
        ..._v0
      };
      return this.addContext((0, _v5.buildTargetTeamBpContext)(_v1)), this;
    }
    withViewCtx(_v0) {
      return this.addContext((0, _v10.buildViewBpContext)(_v0 ?? {
        view_type: "impression",
        feature: null
      })), this;
    }
    withActionCtx(_v0) {
      return this.addContext((0, _v2.buildActionBpContext)(_v0 ?? {
        action_type: "click",
        feature: null
      })), this;
    }
    withWebCtx(_v0) {
      let _v1 = {
        page_name: "share_resource_page",
        referrer_page_name: null,
        referrer: document.referrer,
        path: window.location.pathname,
        copy: null,
        location: null,
        target: null,
        target_path: null,
        ..._v0
      };
      return this.addContext((0, _v11.buildWebBpContext)(_v1)), this;
    }
    withProductAnalyticsCtx(_v0) {
      let _v1 = {
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: null,
        element: null,
        flow: null,
        modal_name: "share_entity_modal",
        copy: null,
        scrolling_percentage: null,
        product: "collaboration",
        feature: "share",
        location: "modal",
        cta_location_id: null,
        ..._v0
      };
      return this.addContext((0, _v4.buildProductAnalyticsBpContext)(_v1)), this;
    }
    withThirdPartyIntegrationCtx(_v0) {
      return this.addContext((0, _v7.buildThirdPartyIntegrationBpContext)(_v0 ?? {
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
      return this.addContext((0, _v3.buildFolderBpContext)(_v1)), this;
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
      return this.addContext((0, _v8.buildVideoBpContext)(_v1)), this;
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
      return this.addContext((0, _v9.buildVideoViewBpContext)(_v1)), this;
    }
    send({
      eventName: _v0,
      version: _v1,
      additionalFields: _v2
    }) {
      (0, _v12.sendBpEventWithContexts)(_v0, this.contexts, _v1, _v2), this.contexts = {};
    }
    addResourceContext(_v0) {
      this.addContext(_v0);
    }
    addContext(_v0) {
      this.contexts = {
        ...this.contexts,
        ..._v0
      };
    }
  }();
  _v0.s(["BPEventService", 0, _v13]);
}