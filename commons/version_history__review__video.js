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
  let _v12 = "version_history",
    _v13 = "review",
    _v14 = "video",
    _v15 = "top_action_bar",
    _v16 = (_v0, _v1) => {
      let _v2 = (0, _v2.buildActionBpContext)({
          action_type: "click",
          feature: null
        }),
        _v3 = (0, _v9.buildWebBpContext)({
          page_name: _v0?.page_name,
          path: window.location.pathname,
          ...(document.referrer && {
            referrer: document.referrer
          }),
          ..._v0
        }),
        _v4 = _v1?.teamUser ? (0, _v5.buildTeamBpContextFromTeamUser)(_v1?.teamUser) : (0, _v5.buildTeamBpContextFromTeam)(_v1?.team),
        _v5 = ((_v0 = {}) => (0, _v6.buildThirdPartyIntegrationBpContext)({
          is_integration: !1,
          integration_id: null,
          integration_name: null,
          managed_user_id: null,
          app_id: null,
          integration_type: null,
          partner_bucket: null,
          is_partner: null,
          ..._v0
        }))();
      return {
        ..._v2,
        ..._v3,
        ..._v4,
        ..._v5
      };
    },
    _v17 = {
      product: "collaboration",
      feature: _v12,
      location: "modal",
      modal_name: "quota_upsell_modal",
      flow: null,
      element: "button",
      copy: "Create",
      device_type: (0, _v1.default)(),
      is_user_facing_data: !1,
      entity_type: _v14
    };
  _v0.s(["FEATURE_VERSION_HISTORY", 0, _v12, "UPGRADE_ACTION_GROUP_EVENT_VERSION", 0, 40, "UPGRADE_VIEW_GROUP_EVENT_VERSION", 0, 39, "VIDEO_VERSION_PAGE_NAME", 0, "video_version_page", "bpCreateVersion", 0, ({
    videoId: _v0,
    viewer: _v1,
    currentVersion: _v2,
    analyticsProps: _v3
  }) => {
    let _v4 = _v16(_v3.webContextFields, _v1),
      _v5 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        ..._v3.videoContextFields
      }),
      _v6 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: _v12,
        location: "modal",
        modal_name: null,
        flow: null,
        element: "button",
        copy: "Create",
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14
      }),
      _v7 = (0, _v3.buildFolderBpContext)({
        folder_id: _v3?.folderContextFields?.folder_id ?? 0,
        ..._v3?.folderContextFields
      }),
      _v8 = {
        ..._v4,
        ..._v5,
        ..._v6,
        ..._v7
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.create_version", _v8, 1, {
      old_value: _v2,
      value: null
    });
  }, "bpDeleteVersion", 0, ({
    videoId: _v0,
    viewer: _v1,
    currentVersion: _v2,
    chosenVersion: _v3,
    analyticsProps: _v4
  }) => {
    let _v5 = _v16(_v4.webContextFields, _v1),
      _v6 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        ..._v4.videoContextFields
      }),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: _v12,
        location: "notification",
        modal_name: null,
        flow: null,
        element: "button",
        copy: "delete",
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14
      }),
      _v8 = (0, _v3.buildFolderBpContext)({
        folder_id: _v4?.folderContextFields?.folder_id ?? 0,
        ..._v4?.folderContextFields
      }),
      _v9 = {
        ..._v5,
        ..._v6,
        ..._v7,
        ..._v8
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.delete_version", _v9, 1, {
      old_value: _v2,
      value: _v3
    });
  }, "bpOpenVersionList", 0, ({
    videoId: _v0,
    viewer: _v1,
    currentVersion: _v2,
    analyticsProps: _v3
  }) => {
    let _v4 = _v16(_v3.webContextFields, _v1),
      _v5 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        ..._v3.videoContextFields
      }),
      _v6 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: _v12,
        location: _v15,
        modal_name: null,
        flow: null,
        element: "dropdown",
        copy: _v2,
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14
      }),
      _v7 = (0, _v3.buildFolderBpContext)({
        folder_id: _v3?.folderContextFields?.folder_id ?? 0,
        ..._v3?.folderContextFields
      }),
      _v8 = {
        ..._v4,
        ..._v5,
        ..._v6,
        ..._v7
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.open_version_list", _v8, 1, {
      old_value: null,
      value: null
    });
  }, "bpOpenVersionMenu", 0, ({
    videoId: _v0,
    viewer: _v1,
    analyticsProps: _v2
  }) => {
    let _v3 = _v16(_v2.webContextFields, _v1),
      _v4 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        ..._v2.videoContextFields
      }),
      _v5 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: _v12,
        location: _v15,
        modal_name: null,
        flow: null,
        element: "ellipses",
        copy: null,
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14
      }),
      _v6 = (0, _v3.buildFolderBpContext)({
        folder_id: _v2?.folderContextFields?.folder_id ?? 0,
        ..._v2?.folderContextFields
      }),
      _v7 = {
        ..._v3,
        ..._v4,
        ..._v5,
        ..._v6
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.open_version_menu", _v7, 1, {
      old_value: null,
      value: null
    });
  }, "bpOpenVideoReviewStatus", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = _v16(_v3?.webContextFields, _v2),
      _v5 = (0, _v7.buildVideoBpContext)({
        video_id: _v1,
        ..._v3?.videoContextFields
      }),
      _v6 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: "review_status",
        location: _v15,
        element: "dropdown",
        copy: _v0,
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14,
        ..._v3?.productContextFields
      }),
      _v7 = (0, _v3.buildFolderBpContext)({
        folder_id: _v3?.folderContextFields?.folder_id ?? 0,
        ..._v3?.folderContextFields
      }),
      _v8 = {
        ..._v4,
        ..._v5,
        ..._v6,
        ..._v7
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.open_review_status", _v8, 1, {
      value: null,
      old_value: null
    });
  }, "bpRestoreVersion", 0, ({
    videoId: _v0,
    viewer: _v1,
    currentVersion: _v2,
    chosenVersion: _v3,
    analyticsProps: _v4
  }) => {
    let _v5 = _v16(_v4.webContextFields, _v1),
      _v6 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        ..._v4.videoContextFields
      }),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: _v12,
        location: "modal",
        modal_name: null,
        flow: null,
        element: "button",
        copy: "restore",
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14
      }),
      _v8 = (0, _v3.buildFolderBpContext)({
        folder_id: _v4?.folderContextFields?.folder_id ?? 0,
        ..._v4?.folderContextFields
      }),
      _v9 = {
        ..._v5,
        ..._v6,
        ..._v7,
        ..._v8
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.restore_version", _v9, 1, {
      old_value: _v2,
      value: _v3
    });
  }, "bpReviewLinkActions", 0, ({
    eventName: _v0,
    reviewLinkConfig: _v1,
    analyticsProps: _v2,
    viewer: _v3
  }) => {
    let _v4 = _v16(_v2?.webContextFields, _v3),
      _v5 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "Review",
        location: "Create_Review_Link",
        modal_name: null,
        flow: null,
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        ..._v2?.productContextFields
      }),
      _v6 = {
        ..._v4,
        ..._v5
      };
    if (_v2?.videoContextFields?.video_id) {
      let _v0 = (0, _v7.buildVideoBpContext)({
        video_id: _v2?.videoContextFields?.video_id ?? 0,
        ..._v2?.videoContextFields
      });
      _v6 = {
        ..._v6,
        ..._v0
      };
    }
    if (_v2?.folderContextFields?.folder_id) {
      let _v0 = (0, _v3.buildFolderBpContext)({
        folder_id: _v2?.folderContextFields?.folder_id ?? 0,
        ..._v2?.folderContextFields
      });
      _v6 = {
        ..._v6,
        ..._v0
      };
    }
    (0, _v10.sendBpEventWithContexts)(_v0, _v6, 1, {
      link_id: _v1?.uri ? (0, _v11.reviewIdFromUri)(_v1?.uri) : null,
      link_config_expiration: _v1 ? !!_v1.expiresOn : null,
      link_config_password: _v1 ? !!_v1.password : null,
      link_config_comments: _v1?.allowComments ?? null,
      link_config_download: _v1?.allowDownloads ?? null,
      link_config_status: _v1?.allowStatusChange ?? null,
      link_config_resolved_comments: _v1?.showResolvedComments ?? null,
      link_config_versions: _v1?.showAllVersions ?? null,
      link_config_logo: _v1?.showMyLogo ?? null,
      link_config_dark_mode: _v1?.isDark ?? null
    });
  }, "bpSetVideoReviewStatus", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = _v16(_v4?.webContextFields, _v3),
      _v6 = (0, _v3.buildFolderBpContext)({
        folder_id: _v4?.folderContextFields?.folder_id ?? 0,
        ..._v4?.folderContextFields
      }),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: "review_status",
        location: _v15,
        element: "dropdown",
        copy: _v1,
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14,
        ..._v4?.productContextFields
      }),
      _v8 = (0, _v7.buildVideoBpContext)({
        video_id: _v2,
        ..._v4?.videoContextFields
      }),
      _v9 = {
        ..._v5,
        ..._v7,
        ..._v6,
        ..._v8
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.set_review_status", _v9, 1, {
      value: _v1,
      old_value: _v0
    });
  }, "bpStartDeleteVersion", 0, ({
    videoId: _v0,
    viewer: _v1,
    currentVersion: _v2,
    chosenVersion: _v3,
    analyticsProps: _v4
  }) => {
    let _v5 = _v16(_v4.webContextFields, _v1),
      _v6 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        ..._v4.videoContextFields
      }),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: _v12,
        location: _v15,
        modal_name: null,
        flow: null,
        element: "dropdown",
        copy: "delete",
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14
      }),
      _v8 = (0, _v3.buildFolderBpContext)({
        folder_id: _v4?.folderContextFields?.folder_id ?? 0,
        ..._v4?.folderContextFields
      }),
      _v9 = {
        ..._v5,
        ..._v6,
        ..._v7,
        ..._v8
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.start_delete_version", _v9, 1, {
      old_value: _v2,
      value: _v3
    });
  }, "bpStartRestoreVersion", 0, ({
    videoId: _v0,
    viewer: _v1,
    currentVersion: _v2,
    chosenVersion: _v3,
    analyticsProps: _v4
  }) => {
    let _v5 = _v16(_v4.webContextFields, _v1),
      _v6 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        ..._v4.videoContextFields
      }),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: _v12,
        location: "top_action_bar",
        modal_name: null,
        flow: null,
        element: "dropdown",
        copy: "restore",
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14
      }),
      _v8 = (0, _v3.buildFolderBpContext)({
        folder_id: _v4?.folderContextFields?.folder_id ?? 0,
        ..._v4?.folderContextFields
      }),
      _v9 = {
        ..._v5,
        ..._v6,
        ..._v7,
        ..._v8
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.start_restore_version", _v9, 1, {
      old_value: _v2,
      value: _v3
    });
  }, "bpStartUploadVersion", 0, ({
    videoId: _v0,
    viewer: _v1,
    currentVersion: _v2,
    analyticsProps: _v3
  }) => {
    let _v4 = _v16(_v3.webContextFields, _v1),
      _v5 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        ..._v3.videoContextFields
      }),
      _v6 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: _v12,
        location: _v15,
        modal_name: null,
        flow: null,
        element: "dropdown",
        copy: "New version",
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14
      }),
      _v7 = (0, _v3.buildFolderBpContext)({
        folder_id: _v3?.folderContextFields?.folder_id ?? 0,
        ..._v3?.folderContextFields
      }),
      _v8 = {
        ..._v4,
        ..._v5,
        ..._v6,
        ..._v7
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.start_upload_version", _v8, 1, {
      old_value: _v2,
      value: null
    });
  }, "bpViewVersion", 0, ({
    videoId: _v0,
    viewer: _v1,
    currentVersion: _v2,
    chosenVersion: _v3,
    analyticsProps: _v4
  }) => {
    let _v5 = _v16(_v4.webContextFields, _v1),
      _v6 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        ..._v4.videoContextFields
      }),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: _v13,
        feature: _v12,
        location: "top_action_bar",
        modal_name: null,
        flow: null,
        element: "dropdown",
        copy: "view",
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        entity_type: _v14
      }),
      _v8 = (0, _v3.buildFolderBpContext)({
        folder_id: _v4?.folderContextFields?.folder_id ?? 0,
        ..._v4?.folderContextFields
      }),
      _v9 = {
        ..._v5,
        ..._v6,
        ..._v7,
        ..._v8
      };
    (0, _v10.sendBpEventWithContexts)("vimeo.view_version", _v9, 1, {
      old_value: _v2,
      value: _v3
    });
  }, "sendBpUpsellEvent", 0, ({
    viewer: _v0,
    analyticsProps: _v1,
    eventName: _v2,
    eventVersion: _v3,
    includeViewContext: _v4,
    upsellName: _v5
  }) => {
    let _v6 = _v16(_v1.webContextFields, _v0),
      _v7 = _v1.productContextFields ?? _v17,
      _v8 = (0, _v4.buildProductAnalyticsBpContext)(_v7),
      _v9 = _v4 ? (0, _v8.buildViewBpContext)({
        view_type: "impression",
        feature: null
      }) : {},
      _v10 = {
        ..._v6,
        ..._v8,
        ..._v9
      };
    (0, _v10.sendBpEventWithContexts)(_v2, _v10, _v3, {
      add_on_feature: null,
      add_on_value: null,
      currency: null,
      discount_offer: null,
      duration: null,
      interface_type: "modal",
      is_discount: null,
      is_dismissible: !0,
      promo_code_id: null,
      purchase_type: null,
      selected_plan: null,
      upsell_name: _v5 ?? "at_limit_quota",
      usd_price: null
    });
  }]);
}