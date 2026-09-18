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
  let _v13 = _v0 => (0, _v9.buildWebBpContext)({
      page_name: _v0?.page_name,
      path: window.location.pathname,
      ...(document.referrer && {
        referrer: document.referrer
      }),
      ..._v0
    }),
    _v14 = () => (0, _v6.buildThirdPartyIntegrationBpContext)({
      is_integration: !1,
      integration_id: null,
      integration_name: null,
      managed_user_id: null,
      app_id: null,
      integration_type: null,
      partner_bucket: null,
      is_partner: null
    }),
    _v15 = (_v0 = {}) => (0, _v6.buildThirdPartyIntegrationBpContext)({
      is_integration: !1,
      integration_id: null,
      integration_name: null,
      managed_user_id: null,
      app_id: null,
      integration_type: null,
      partner_bucket: null,
      is_partner: null,
      ..._v0
    }),
    _v16 = _v0 => (0, _v3.buildCommentBpContext)({
      comment_length: null,
      comment_owner_id: 0,
      existing_reply_counts: null,
      allow_comment_toggle: null,
      is_mention: null,
      mentionee_email: null,
      mentionee_permission: null,
      mentionee_id: null,
      is_pending: null,
      ..._v0
    }),
    _v17 = (_v0, _v1) => {
      let _v2 = (0, _v2.buildActionBpContext)({
          action_type: "click",
          feature: null
        }),
        _v3 = _v13(_v0),
        _v4 = _v1?.teamUser ? (0, _v5.buildTeamBpContextFromTeamUser)(_v1?.teamUser) : (0, _v5.buildTeamBpContextFromTeam)(_v1?.team);
      return {
        ..._v2,
        ..._v3,
        ..._v4
      };
    };
  _v0.s(["bpAddMentionee", 0, (_v0, _v1 = "nobody", _v2, _v3, _v4, _v5) => {
    let _v6 = _v5?.user?.id || 0,
      _v7 = Number((_v2 || "").match(/user(\d+)/)?.[1] || 0),
      _v8 = _v17(_v4.webContextFields, _v5),
      _v9 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        video_privacy: _v1
      }),
      _v10 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "text",
        copy: null,
        entity_type: "video",
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        ..._v4?.productContextFields
      }),
      _v11 = _v14(),
      _v12 = _v16({
        comment_id: 0,
        comment_owner_id: _v6,
        allow_comment_toggle: !0,
        is_mention: !0,
        ..._v4?.commentContextFields
      }),
      _v13 = {
        ..._v8,
        ..._v9,
        ..._v10,
        ..._v12,
        ..._v11
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.add_mentionee_to_comment", _v13, 13, {
      posted_by_uploader: _v6 === _v7,
      posted_by_guest: !_v6,
      is_timecoded: null,
      is_internal: !_v3,
      value: null,
      option: null,
      comments_format: null
    });
  }, "bpAllowViewerComments", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
    let _v8 = _v17(_v5.webContextFields, _v7),
      _v9 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v2),
        video_privacy: _v4,
        video_owner_id: (0, _v12.getUserIdFromUri)(_v6 ?? "")
      }),
      _v10 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "dropdown",
        copy: _v1,
        device_type: (0, _v1.default)(),
        entity_type: "video",
        is_user_facing_data: !1,
        ..._v5?.productContextFields
      }),
      _v11 = _v15(_v5?.thirdPartyContextFields),
      _v12 = _v5?.commentContextFields ? _v16(_v5?.commentContextFields) : {},
      _v13 = {
        ..._v8,
        ..._v9,
        ..._v10,
        ..._v12,
        ..._v11
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.allow_viewer_comments", _v13, 13, {
      posted_by_uploader: null,
      posted_by_guest: null,
      is_timecoded: null,
      is_internal: !1,
      value: _v0,
      option: null,
      comments_format: null
    });
  }, "bpCopyCommentLink", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
    let _v7 = _v5?.user?.id || 0,
      _v8 = Number((_v2 || "").match(/user(\d+)/)?.[1] || 0),
      _v9 = _v17(_v4.webContextFields, _v5),
      _v10 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v0),
        video_privacy: _v1
      }),
      _v11 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "ellipses",
        copy: "Copy link to comment",
        entity_type: "video",
        is_user_facing_data: !1,
        device_type: (0, _v1.default)()
      }),
      _v12 = _v14(),
      _v13 = _v4?.commentContextFields ? _v16(_v4?.commentContextFields) : {},
      _v14 = {
        ..._v9,
        ..._v10,
        ..._v11,
        ..._v13,
        ..._v12
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.copy_comment_link", _v14, 13, {
      posted_by_uploader: _v7 === _v8,
      posted_by_guest: !_v7,
      is_timecoded: _v6,
      is_internal: !_v3,
      value: null,
      option: null,
      comments_format: null
    });
  }, "bpDeleteComment", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
    let _v7 = _v4?.user?.id || -1,
      _v8 = (0, _v12.getUserIdFromUserLink)(_v6 || ""),
      _v9 = _v17(_v3.webContextFields, _v4),
      _v10 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v0),
        video_privacy: _v1
      }),
      _v11 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "ellipses",
        copy: "Delete",
        entity_type: "video",
        device_type: (0, _v1.default)(),
        is_user_facing_data: !1,
        ..._v3?.productContextFields
      }),
      _v12 = _v15(_v3?.thirdPartyContextFields),
      _v13 = _v3?.commentContextFields ? _v16(_v3?.commentContextFields) : {},
      _v14 = {
        ..._v9,
        ..._v10,
        ..._v11,
        ..._v13,
        ..._v12
      },
      _v15 = !_v4?.user?.uri;
    (0, _v11.sendBpEventWithContexts)("vimeo.delete_comment", _v14, 13, {
      posted_by_uploader: _v7 === _v8,
      posted_by_guest: _v15,
      is_timecoded: _v5,
      is_internal: !_v2,
      value: null,
      option: null,
      comments_format: null
    });
  }, "bpEditComment", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6 = !1) => {
    let _v7 = _v4?.user?.id || 0,
      _v8 = (0, _v12.getUserIdFromUserLink)(_v5 || ""),
      _v9 = _v17(_v3.webContextFields, _v4),
      _v10 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v0),
        video_privacy: _v1
      }),
      _v11 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "ellipses",
        copy: "Edit",
        device_type: (0, _v1.default)(),
        ..._v3?.productContextFields
      }),
      _v12 = _v15(_v3?.thirdPartyContextFields),
      _v13 = _v3?.commentContextFields ? _v16(_v3?.commentContextFields) : {},
      _v14 = {
        ..._v9,
        ..._v10,
        ..._v11,
        ..._v13,
        ..._v12
      },
      _v15 = !_v4?.user?.uri;
    (0, _v11.sendBpEventWithContexts)("vimeo.edit_comment", _v14, 13, {
      posted_by_uploader: _v7 === _v8,
      posted_by_guest: _v15,
      is_timecoded: _v6,
      is_internal: !_v2,
      value: null,
      option: null,
      comments_format: null
    });
  }, "bpFilterComments", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
    let _v7 = _v17(_v5.webContextFields, _v6),
      _v8 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v2),
        video_privacy: _v4
      }),
      _v9 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "button",
        copy: _v1,
        device_type: (0, _v1.default)(),
        entity_type: "video",
        is_user_facing_data: !1,
        ..._v5?.productContextFields
      }),
      _v10 = _v15(_v5?.thirdPartyContextFields),
      _v11 = _v5?.commentContextFields ? _v16(_v5?.commentContextFields) : {},
      _v12 = {
        ..._v7,
        ..._v8,
        ..._v9,
        ..._v11,
        ..._v10
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.filter_comments", _v12, 13, {
      posted_by_uploader: null,
      posted_by_guest: null,
      is_timecoded: null,
      is_internal: !_v3,
      value: null,
      option: _v0,
      comments_format: null
    });
  }, "bpMentionImpression", 0, (_v0, _v1 = "nobody", _v2, _v3, _v4) => {
    let _v5 = _v4?.user?.id || 0,
      _v6 = _v13(_v2.webContextFields),
      _v7 = _v4?.teamUser ? (0, _v5.buildTeamBpContextFromTeamUser)(_v4?.teamUser) : (0, _v5.buildTeamBpContextFromTeam)(_v4?.team),
      _v8 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        video_privacy: _v1
      }),
      _v9 = (0, _v2.buildActionBpContext)({
        action_type: "type",
        feature: null
      }),
      _v10 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "button",
        copy: null,
        device_type: (0, _v1.default)(),
        ..._v2?.productContextFields
      }),
      _v11 = _v14(),
      _v12 = _v16({
        comment_owner_id: _v5,
        allow_comment_toggle: !0,
        is_mention: !0,
        ..._v2?.commentContextFields
      }),
      _v13 = {
        ..._v9,
        ..._v10,
        ..._v11,
        ..._v8,
        ..._v12,
        ..._v7,
        ..._v6
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.mention_box_impression", _v13, 13, {
      posted_by_uploader: null,
      posted_by_guest: null,
      is_timecoded: null,
      is_internal: !_v3,
      value: null,
      option: null,
      comments_format: null
    });
  }, "bpOpenCommentOptions", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
    let _v7 = _v5?.user?.id || 0,
      _v8 = Number((_v2 || "").match(/user(\d+)/)?.[1] || 0),
      _v9 = _v17(_v4.webContextFields, _v5),
      _v10 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v0),
        video_privacy: _v1
      }),
      _v11 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "ellipses",
        copy: null,
        entity_type: "video",
        is_user_facing_data: !1,
        device_type: (0, _v1.default)()
      }),
      _v12 = _v14(),
      _v13 = _v4?.commentContextFields ? _v16(_v4?.commentContextFields) : {},
      _v14 = {
        ..._v9,
        ..._v10,
        ..._v11,
        ..._v13,
        ..._v12
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.open_comment_options", _v14, 13, {
      posted_by_uploader: _v7 === _v8,
      posted_by_guest: !_v7,
      is_timecoded: _v6,
      is_internal: !_v3,
      value: null,
      option: null,
      comments_format: null
    });
  }, "bpOpenComments", 0, ({
    videoId: _v0,
    isOpen: _v1,
    isPublic: _v2,
    viewer: _v3,
    analyticsProps: _v4
  }) => {
    let _v5 = _v17(_v4.webContextFields, _v3),
      _v6 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v0),
        ..._v4?.videoContextFields
      }),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "top_action_bar",
        element: "icon",
        is_user_facing_data: !1,
        entity_type: "video",
        device_type: (0, _v1.default)(),
        ..._v4?.productContextFields
      }),
      _v8 = _v4?.folderContextFields ? (0, _v10.buildFolderBpContext)({
        folder_id: _v4?.folderContextFields?.folder_id ?? 0,
        ..._v4?.folderContextFields
      }) : {},
      _v9 = {
        ..._v5,
        ..._v6,
        ..._v7,
        ..._v8
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.open_comments", _v9, 13, {
      posted_by_uploader: null,
      posted_by_guest: null,
      is_timecoded: null,
      is_internal: !_v2,
      value: _v1,
      option: null,
      comments_format: null
    });
  }, "bpOpenCommentsTab", 0, (_v0, _v1, _v2, _v3, _v4, _v5) => {
    let _v6 = _v17(_v4.webContextFields, _v5),
      _v7 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v2),
        video_privacy: _v3
      }),
      _v8 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "sub_menu",
        copy: _v0,
        device_type: (0, _v1.default)(),
        entity_type: "video",
        is_user_facing_data: !1,
        ..._v4?.productContextFields
      }),
      _v9 = _v15(_v4?.thirdPartyContextFields),
      _v10 = _v4?.commentContextFields ? _v16(_v4?.commentContextFields) : {},
      _v11 = {
        ..._v6,
        ..._v7,
        ..._v8,
        ..._v10,
        ..._v9
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.open_comments_tab", _v11, 13, {
      posted_by_uploader: null,
      posted_by_guest: null,
      is_timecoded: null,
      is_internal: !_v1,
      value: null,
      option: null,
      comments_format: null
    });
  }, "bpOpenReportComment", 0, ({
    viewer: _v0,
    videoId: _v1,
    commentId: _v2,
    isReply: _v3,
    videoPrivacy: _v4 = "nobody",
    analyticsProps: _v5
  }) => {
    let _v6 = _v17(_v5.webContextFields, _v0),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        element: "button",
        entity_type: "video"
      }),
      _v8 = (0, _v7.buildVideoBpContext)({
        video_id: parseInt(_v1),
        video_privacy: _v4
      }),
      _v9 = _v16({
        comment_id: parseInt(_v2 ?? ""),
        is_reply: _v3 ?? !1,
        ..._v5?.commentContextFields
      }),
      _v10 = _v15(_v5?.thirdPartyContextFields),
      _v11 = {
        ..._v6,
        ..._v7,
        ..._v8,
        ..._v9,
        ..._v10
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.open_report_comment_modal", _v11);
  }, "bpPostComment", 0, (_v0, _v1, _v2, _v3, _v4, _v5 = !1, _v6 = !0) => {
    let _v7 = _v4?.user?.id || 0;
    _v1 && (0, _v12.isInternalFacingPrivacy)(_v1);
    let _v8 = _v17(_v3.webContextFields, _v4),
      _v9 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v0),
        video_privacy: _v1
      }),
      _v10 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "button",
        copy: "Comment",
        entity_type: "video",
        device_type: (0, _v1.default)(),
        ..._v3?.productContextFields
      }),
      _v11 = _v15(_v3?.thirdPartyContextFields),
      _v12 = _v3?.commentContextFields ? _v16(_v3?.commentContextFields) : {},
      _v13 = {
        ..._v8,
        ..._v9,
        ..._v10,
        ..._v12,
        ..._v11
      },
      _v14 = !_v4?.user?.uri;
    (0, _v11.sendBpEventWithContexts)("vimeo.post_comment", _v13, 6, {
      posted_by_uploader: _v7 === _v2,
      posted_by_guest: _v14,
      is_timecoded: _v5,
      is_internal: !_v6,
      value: null
    });
  }, "bpProfileLink", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = _v17(_v2.webContextFields, _v3),
      _v5 = _v2?.commentContextFields ? _v16(_v2?.commentContextFields) : {},
      _v6 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v0)
      }),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "viewer_home",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "button",
        copy: null,
        device_type: (0, _v1.default)(),
        ..._v2?.productContextFields
      }),
      _v8 = (0, _v8.buildVideoViewBpContext)({
        viewer_home_session_id: _v1
      }),
      _v9 = {
        ..._v4,
        ..._v6,
        ..._v7,
        ..._v8,
        ..._v5
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.select_user_profile_button", _v9);
  }, "bpResolveComment", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
    let _v7 = _v4?.user?.id || 0,
      _v8 = Number((_v6 || "").match(/user(\d+)/)?.[1] || 0),
      _v9 = _v17(_v3.webContextFields, _v4),
      _v10 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v1),
        video_privacy: _v2
      }),
      _v11 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "check_box",
        copy: null,
        device_type: (0, _v1.default)(),
        entity_type: "video",
        is_user_facing_data: !1,
        ..._v3?.productContextFields
      }),
      _v12 = _v15(_v3?.thirdPartyContextFields),
      _v13 = _v3?.commentContextFields ? _v16(_v3?.commentContextFields) : {},
      _v14 = {
        ..._v9,
        ..._v10,
        ..._v11,
        ..._v13,
        ..._v12
      },
      _v15 = !_v4?.user?.uri;
    (0, _v11.sendBpEventWithContexts)("vimeo.resolve_comment", _v14, 13, {
      posted_by_uploader: _v7 === _v8,
      posted_by_guest: _v15,
      is_timecoded: !!_v5,
      is_internal: !0,
      value: _v0,
      option: null,
      comments_format: null
    });
  }, "bpSaveEditComment", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7 = "text") => {
    let _v8 = _v4?.user?.id || 0,
      _v9 = Number((_v6 || "").match(/user(\d+)/)?.[1] || 0),
      _v10 = _v17(_v3.webContextFields, _v4),
      _v11 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v0),
        video_privacy: _v1
      }),
      _v12 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "button",
        copy: "Save",
        device_type: (0, _v1.default)(),
        entity_type: "video",
        is_user_facing_data: !1,
        ..._v3?.productContextFields
      }),
      _v13 = _v15(_v3?.thirdPartyContextFields),
      _v14 = _v3?.commentContextFields ? _v16(_v3?.commentContextFields) : {},
      _v15 = {
        ..._v10,
        ..._v11,
        ..._v12,
        ..._v14,
        ..._v13
      },
      _v16 = !_v4?.user?.uri;
    (0, _v11.sendBpEventWithContexts)("vimeo.post_edited_comment", _v15, 13, {
      posted_by_uploader: _v8 === _v9,
      posted_by_guest: _v16,
      is_timecoded: !!_v5,
      is_internal: !_v2,
      value: null,
      option: _v7,
      comments_format: null
    });
  }, "bpSortComment", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
    let _v7 = _v6?.user?.id || 0,
      _v8 = Number((_v3 || "").match(/user(\d+)/)?.[1] || 0),
      _v9 = _v17(_v5.webContextFields, _v6),
      _v10 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v1),
        video_privacy: _v2
      }),
      _v11 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "dropdown",
        copy: _v0,
        device_type: (0, _v1.default)(),
        entity_type: "video",
        is_user_facing_data: !1,
        ..._v5?.productContextFields
      }),
      _v12 = _v15(_v5?.thirdPartyContextFields),
      _v13 = _v5?.commentContextFields ? _v16(_v5?.commentContextFields) : {},
      _v14 = {
        ..._v9,
        ..._v10,
        ..._v11,
        ..._v13,
        ..._v12
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.sort_comment", _v14, 13, {
      posted_by_uploader: _v7 === _v8,
      posted_by_guest: !_v7,
      is_timecoded: !1,
      is_internal: !_v4,
      value: null,
      option: _v0,
      comments_format: null
    });
  }, "bpStartComment", 0, (_v0, _v1, _v2, _v3, _v4, _v5 = "text", _v6, _v7) => {
    let _v8 = _v7?.user?.id || 0,
      _v9 = Number((_v4 || "").match(/user(\d+)/)?.[1] || 0),
      _v10 = _v17(_v3.webContextFields, _v7),
      _v11 = (0, _v7.buildVideoBpContext)({
        video_id: _v0,
        video_privacy: _v1
      }),
      _v12 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: _v5,
        copy: null,
        device_type: (0, _v1.default)(),
        entity_type: "video",
        ..._v3?.productContextFields
      }),
      _v13 = _v15(_v3?.thirdPartyContextFields),
      _v14 = _v3?.commentContextFields ? _v16(_v3?.commentContextFields) : {},
      _v15 = {
        ..._v10,
        ..._v11,
        ..._v12,
        ..._v14,
        ..._v13
      },
      _v16 = !_v7?.user?.uri;
    (0, _v11.sendBpEventWithContexts)("vimeo.start_comment", _v15, 13, {
      posted_by_uploader: _v8 === _v9,
      posted_by_guest: _v16,
      is_timecoded: _v6,
      is_internal: !_v2,
      value: null,
      option: null,
      comments_format: null
    });
  }, "bpStartSearchComment", 0, ({
    isInternal: _v0,
    videoId: _v1,
    videoPrivacy: _v2,
    viewer: _v3,
    analyticsProps: _v4
  }) => {
    let _v5 = _v17(_v4?.webContextFields, _v3),
      _v6 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        element: "icon",
        entity_type: "video",
        ..._v4?.productContextFields
      }),
      _v7 = (0, _v7.buildVideoBpContext)({
        video_id: _v1,
        video_privacy: _v2,
        ..._v4?.videoContextFields
      }),
      _v8 = _v4?.folderContextFields ? (0, _v10.buildFolderBpContext)({
        folder_id: _v4?.folderContextFields?.folder_id ?? 0,
        ..._v4?.folderContextFields
      }) : {},
      _v9 = {
        ..._v5,
        ..._v6,
        ..._v7,
        ..._v8
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.start_search_comment", _v9, 13, {
      posted_by_uploader: null,
      posted_by_guest: null,
      is_timecoded: null,
      is_internal: _v0,
      value: null,
      option: null,
      comments_format: null
    });
  }, "bpToggleShowResolvedComments", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = _v17(_v3.webContextFields, _v4),
      _v6 = (0, _v7.buildVideoBpContext)({
        video_id: parseFloat(_v1),
        video_privacy: _v2
      }),
      _v7 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: "comments_panel",
        modal_name: null,
        flow: null,
        element: "button",
        copy: "Resolved",
        device_type: (0, _v1.default)(),
        entity_type: "video",
        is_user_facing_data: !1,
        ..._v3?.productContextFields
      }),
      _v8 = _v15(_v3?.thirdPartyContextFields),
      _v9 = _v3?.commentContextFields ? _v16(_v3?.commentContextFields) : {},
      _v10 = {
        ..._v5,
        ..._v6,
        ..._v7,
        ..._v9,
        ..._v8
      };
    (0, _v11.sendBpEventWithContexts)("vimeo.toggle_show_resolved_comments", _v10, 13, {
      posted_by_uploader: null,
      posted_by_guest: null,
      is_timecoded: null,
      is_internal: !0,
      value: _v0,
      option: null,
      comments_format: null
    });
  }, "sendCommentBPEvent", 0, ({
    eventName: _v0,
    copy: _v1,
    settingValue: _v2,
    settingOption: _v3,
    element: _v4,
    viewer: _v5,
    videoId: _v6,
    videoOwnerUri: _v7,
    videoPrivacy: _v8 = "nobody",
    modalName: _v9,
    location: _v10 = "comments_panel",
    comments_format: _v11,
    analyticsProps: _v12
  }) => {
    let _v13 = _v17({
        page_name: "single_video_view_manage",
        referrer_page_name: "single_video_view_manage",
        referrer: document.referrer,
        path: window.location.pathname,
        ..._v12?.webContextFields
      }, _v5),
      _v14 = (0, _v4.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "comments",
        location: _v10,
        element: _v4 ?? "dropdown",
        copy: _v1,
        entity_type: "video",
        modal_name: _v9 ?? null,
        ..._v12?.productContextFields
      }),
      _v15 = "number" == typeof _v6 ? (0, _v7.buildVideoBpContext)({
        video_id: _v6,
        video_privacy: _v8,
        video_owner_id: (0, _v12.idFromUri)(_v7 ?? ""),
        ..._v12?.videoContextFields
      }) : {},
      _v16 = _v12?.folderContextFields ? (0, _v10.buildFolderBpContext)({
        folder_id: _v12?.folderContextFields?.folder_id ?? 0,
        ..._v12?.folderContextFields
      }) : {},
      _v17 = {
        ..._v13,
        ..._v14,
        ..._v15,
        ..._v16
      };
    (0, _v11.sendBpEventWithContexts)(_v0, _v17, 13, {
      posted_by_uploader: null,
      posted_by_guest: null,
      is_timecoded: null,
      is_internal: null,
      value: _v2,
      option: _v3,
      comments_format: _v11 ?? null
    });
  }]);
}