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
    _v9 = _v0.i(0);
  class _v10 {
    actionContext;
    teamContext;
    videoContext;
    webContext;
    thirdPartyIntegrationContext;
    constructor(_v0, _v1, _v2) {
      this.actionContext = (0, _v5.buildActionBpContext)({
        action_type: "click",
        feature: null
      }), this.teamContext = _v1?.teamUser ? (0, _v6.buildTeamBpContextFromTeamUser)(_v1?.teamUser) : (0, _v6.buildTeamBpContextFromTeam)(_v1?.team), this.webContext = (0, _v9.buildWebBpContext)({
        page_name: _v0.pageName,
        referrer: document.referrer,
        path: window.location.pathname
      }), this.videoContext = (0, _v8.buildVideoBpContext)(_v2), this.thirdPartyIntegrationContext = (0, _v7.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        is_partner: null
      });
    }
  }
  _v0.s(["VideoShareViewBPBaseClass", 0, _v10], 0);
  let _v11 = {
      is_preset_applied: null,
      is_video_password_protected: null,
      privacy_field_name: null,
      privacy_field_value: null
    },
    _v12 = {
      is_internal: !0,
      distribution_type: "share",
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
      collection_type: null,
      embed_layout: null,
      target_transcript_language: null,
      embed_playback_toggles_off: null,
      embed_playback_toggles_on: null,
      audio_language_selected_for_download: null,
      distribution_tab: null,
      is_ai_translated: null,
      is_original_language_downloaded: null,
      lms_completion_threshold: null,
      lms_scoring_method: null,
      lms_technical_standard: null
    };
  _v0.s(["CopyLinkPanelBP", 0, class extends _v10 {
    folderContext;
    productAnalyticsDefaults;
    constructor(_v0, _v1, {
      videoData: _v2,
      folderData: _v3
    }) {
      super(_v0, _v1, _v2), this.productAnalyticsDefaults = {
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: null,
        modal_name: "share_entity_modal",
        scrolling_percentage: null,
        cta_location_id: null
      }, this.folderContext = (0, _v2.buildFolderBpContext)(_v3);
    }
    bpTrackChangeVideoPrivacyLink = _v0 => {
      let _v1 = {
        ...this.actionContext,
        ...this.teamContext,
        ...this.thirdPartyIntegrationContext,
        ...this.videoContext,
        ...this.webContext,
        ...(0, _v3.buildProductAnalyticsBpContext)({
          ...this.productAnalyticsDefaults,
          product: "distribution",
          feature: "share_link",
          flow: "share_video_link",
          element: "dropdown",
          copy: "old_video_privacy",
          location: "panel"
        })
      };
      (0, _v4.sendBpEventWithContexts)("vimeo.change_link_privacy", _v1, 10, {
        ..._v11,
        ..._v0
      });
    };
    bpTrackCopyShareLink = ({
      location: _v0,
      modal_name: _v1,
      distribution_tab: _v2 = null
    }) => {
      let _v3 = (0, _v3.buildProductAnalyticsBpContext)({
          ...this.productAnalyticsDefaults,
          product: "collaboration",
          feature: "share",
          copy: "Copy link",
          element: "button",
          entity_type: "video",
          flow: "share_video_link",
          location: _v0,
          modal_name: _v1
        }),
        _v4 = {
          ...this.actionContext,
          ...this.folderContext,
          ...this.teamContext,
          ...this.thirdPartyIntegrationContext,
          ...this.videoContext,
          ...this.webContext,
          ..._v3
        };
      (0, _v4.sendBpEventWithContexts)("vimeo.distribute_content", _v4, 18, {
        ..._v12,
        distribution_tab: _v2,
        is_internal: !1
      });
    };
    bpTrackCustomizeLinkClick = () => {
      let _v0 = {
        ...this.actionContext,
        ...this.teamContext,
        ...this.videoContext,
        ...this.webContext,
        ...this.thirdPartyIntegrationContext,
        ...(0, _v3.buildProductAnalyticsBpContext)({
          ...this.productAnalyticsDefaults,
          copy: "Customize",
          element: "button",
          entity_type: "video",
          feature: "share_link",
          flow: "share_video_link",
          location: "panel",
          modal_name: "customize_link_modal",
          product: "distribution"
        })
      };
      (0, _v4.sendBpEventWithContexts)("vimeo.open_customize_link", _v0);
    };
  }], 0);
}