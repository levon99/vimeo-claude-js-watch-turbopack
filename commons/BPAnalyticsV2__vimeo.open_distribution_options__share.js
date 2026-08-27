{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ({
    eventName: _v0,
    teamUser: _v1,
    webCtx: _v2,
    productAnalyticsCtx: _v3,
    folder: _v4,
    video: _v5,
    distAnalyticsProps: _v6
  }) => {
    let _v7 = _v3.BPEventService.init(_v1);
    _v7.withTeamCtx().withActionCtx().withThirdPartyIntegrationCtx().withProductAnalyticsCtx(_v3).withWebCtx(_v2 ?? {}).withFolderCtx((0, _v5.getFolderCtxFromFolder)(_v4)), _v5 && _v7.withVideoCtx((0, _v5.getVideoCtxFromVideo)(_v5)).withVideoViewCtx((0, _v5.getVideoViewCtxFromVideo)(_v5)), _v7.send({
      eventName: _v0,
      version: _v4.VIMEO_DISTRIBUTION_ACTIONS_VERSION,
      additionalFields: {
        ..._v4.DistributionActionDefaults,
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
      _v6({
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
      _v6({
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
      _v6({
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
      _v6({
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
      _v6({
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
      _v6({
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
  }]);
}