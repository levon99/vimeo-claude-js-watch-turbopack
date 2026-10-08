{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
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
  };
  _v0.s(["DistributionActionDefaults", 0, _v4, "VIMEO_DISTRIBUTION_ACTIONS_VERSION", 0, 9], 0);
  var _v5 = _v0.i(0);
  let _v6 = _v0 => {
      var _v1;
      return {
        folder_id: _v0?.uri ? (0, _v5.getResourceIdFromUri)(_v0?.uri) : 0,
        is_private_to_me: !!_v0?.isPrivateToUser,
        access_permission_to_folder: _v0 ? (_v1 = _v0.metadata?.interactions ?? null) ? _v1.delete ? "can_manage" : _v1.edit ? "can_edit" : "can_view" : "can_view" : null,
        is_subfolder: _v0?.metadata?.connections ? !!_v0.metadata?.connections.parentFolder : null
      };
    },
    _v7 = _v0 => _v0 ? {
      video_id: (0, _v5.idFromUri)(_v0.uri),
      video_owner_id: (0, _v5.idFromUri)(_v0.user?.uri),
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
    },
    _v8 = _v0 => {
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
    };
  _v0.s(["getFolderCtxFromFolder", 0, _v6, "getVideoCtxFromVideo", 0, _v7, "getVideoViewCtxFromVideo", 0, _v8], 0);
  let _v9 = ({
    eventName: _v0,
    teamUser: _v1,
    webCtx: _v2,
    productAnalyticsCtx: _v3,
    folder: _v4,
    video: _v5,
    distAnalyticsProps: _v6
  }) => {
    let _v7 = _v3.BPEventService.init(_v1);
    _v7.withTeamCtx().withActionCtx().withThirdPartyIntegrationCtx().withProductAnalyticsCtx(_v3).withWebCtx(_v2 ?? {}).withFolderCtx(_v6(_v4)), _v5 && _v7.withVideoCtx(_v7(_v5)).withVideoViewCtx(_v8(_v5)), _v7.send({
      eventName: _v0,
      version: 9,
      additionalFields: {
        ..._v4,
        ...(_v6 ?? {})
      }
    });
  };
  _v0.s(["BPAnalyticsV2", 0, {
    openVideoShare: ({
      location: _v0,
      element: _v1,
      teamUser: _v2,
      folder: _v3,
      video: _v4,
      webCtx: _v5
    }) => {
      _v9({
        eventName: "vimeo.open_distribution_options",
        teamUser: _v2,
        folder: _v3,
        video: _v4,
        distAnalyticsProps: {
          distribution_type: "share"
        },
        productAnalyticsCtx: {
          product: "distribution",
          feature: "share_video",
          location: _v0,
          flow: "share_video",
          element: _v1,
          copy: "Share",
          entity_type: "video"
        },
        webCtx: {
          ...(_v5 ?? {}),
          target: "share_entity_modal"
        }
      });
    },
    openFolderShare: ({
      location: _v0,
      element: _v1,
      teamUser: _v2,
      folder: _v3,
      webCtx: _v4
    }) => {
      _v9({
        eventName: "vimeo.open_distribution_options",
        teamUser: _v2,
        folder: _v3,
        distAnalyticsProps: {
          distribution_type: "share"
        },
        productAnalyticsCtx: {
          product: "collaboration",
          feature: "share",
          location: _v0,
          flow: "share_folder",
          element: _v1,
          copy: "Share",
          entity_type: "folder"
        },
        webCtx: {
          ...(_v4 ?? {}),
          target: "share_entity_modal"
        }
      });
    },
    copyFolderLink: ({
      location: _v0,
      element: _v1,
      teamUser: _v2,
      folder: _v3,
      webCtx: _v4
    }) => {
      _v9({
        eventName: "vimeo.distribute_content",
        teamUser: _v2,
        folder: _v3,
        distAnalyticsProps: {
          distribution_type: "share"
        },
        productAnalyticsCtx: {
          product: "collaboration",
          feature: "share_link",
          location: _v0,
          flow: "share_folder_link",
          element: _v1,
          copy: "Copy link",
          entity_type: "folder"
        },
        webCtx: _v4
      });
    },
    copyVideoShareLink: ({
      location: _v0,
      element: _v1,
      teamUser: _v2,
      folder: _v3,
      video: _v4,
      webCtx: _v5
    }) => {
      _v9({
        eventName: "vimeo.distribute_content",
        teamUser: _v2,
        folder: _v3,
        video: _v4,
        distAnalyticsProps: {
          distribution_type: "share"
        },
        productAnalyticsCtx: {
          product: "distribution",
          feature: "share_video",
          location: _v0,
          flow: "share_video_link",
          element: _v1,
          copy: "Copy link",
          entity_type: "video"
        },
        webCtx: _v5
      });
    },
    clickActionCopyReviewPageLink: ({
      location: _v0,
      element: _v1,
      teamUser: _v2,
      folder: _v3,
      video: _v4,
      webCtx: _v5
    }) => {
      _v9({
        eventName: "vimeo.distribute_content",
        teamUser: _v2,
        folder: _v3,
        video: _v4,
        distAnalyticsProps: {
          distribution_type: "share",
          is_internal: !0
        },
        productAnalyticsCtx: {
          product: "collaboration",
          feature: "video_review",
          location: _v0,
          flow: "share_review_link",
          element: _v1,
          copy: "Copy review link",
          entity_type: "video"
        },
        webCtx: _v5
      });
    },
    clickCopyVideoEmbedCode: ({
      location: _v0,
      element: _v1,
      teamUser: _v2,
      folder: _v3,
      video: _v4,
      webCtx: _v5
    }) => {
      _v9({
        eventName: "vimeo.distribute_content",
        teamUser: _v2,
        folder: _v3,
        video: _v4,
        distAnalyticsProps: {
          distribution_type: "embed"
        },
        productAnalyticsCtx: {
          product: "distribution",
          feature: "embed",
          location: _v0,
          flow: "copy_embed_code",
          element: _v1,
          copy: "Copy embed",
          entity_type: "video"
        },
        webCtx: _v5
      });
    },
    sendShowcasesLibraryOpenEvent: _v0 => {
      let _v1 = _v3.BPEventService.init(_v0);
      _v1.withTeamCtx().withActionCtx().withThirdPartyIntegrationCtx().withProductAnalyticsCtx({
        feature: "showcases",
        location: "side_nav",
        product: "collections",
        copy: "showcases",
        element: "button"
      }).withWebCtx({
        target: "showcase_library"
      }), _v1.send({
        eventName: "vimeo.showcases_library_open",
        version: 2
      });
    },
    useContentManagamentHoverEvent: () => {
      let _v0 = (0, _v2.useViewer)();
      return (0, _v1.useCallback)(({
        entityType: _v0,
        pageName: _v1
      }) => {
        let _v2 = _v3.BPEventService.init(_v0?.teamUser);
        _v2.withTeamCtx().withActionCtx({
          action_type: "hover",
          feature: null
        }).withThirdPartyIntegrationCtx().withProductAnalyticsCtx({
          feature: "library",
          location: "content_area",
          product: "video_library",
          element: "card",
          entity_type: _v0
        }).withWebCtx({
          page_name: _v1
        }), _v2.send({
          eventName: "vimeo.content_management_hover",
          version: -1
        });
      }, [_v0?.teamUser]);
    }
  }], 0);
}