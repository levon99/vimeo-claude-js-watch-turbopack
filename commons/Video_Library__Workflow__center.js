{
  "use strict";

  _v0.i(0);
  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = ((_v1 = {}).VIDEO_LIBRARY = "Video Library", _v1.WORKFLOW = "Workflow", _v1),
    _v7 = ((_v2 = {}).CENTER = "center", _v2.HEADER = "header", _v2.MVV_HEADER = "mvv header", _v2.SUBHEADER = "mvv subheader", _v2.VIDEO_CARD = "video card", _v2.VIDEO_LIST = "video list", _v2.VIDEO_LIBRARY_HEADER = "video library header", _v2.FOLDER_SUBHEADER = "folder_subheader", _v2);
  _v0.s(["AnalyticsLocations", () => _v7, "AnalyticsProducts", () => _v6, "openFolderOverflow", 0, _v0 => ({
    eventName: "open_folder_overflow",
    version: 4,
    fields: _v0,
    globalAnalyticsToInclude: ["product", "path", "page"]
  }), "openFolderShare", 0, ({
    location: _v0,
    element: _v1,
    teamUser: _v2,
    folder: _v3,
    page: _v4
  }) => {
    let _v5 = _v3.BPEventService.init(_v2),
      _v6 = {
        path: window.location.pathname,
        page_name: _v4 ?? "video_library",
        target: "share_entity_modal"
      };
    _v5.withTeamCtx().withViewCtx().withActionCtx().withThirdPartyIntegrationCtx().withProductAnalyticsCtx({
      product: "collaboration",
      feature: "share",
      location: _v0,
      flow: "share_folder",
      element: _v1,
      copy: "Share",
      entity_type: "folder"
    }).withWebCtx(_v6).withFolderCtx((0, _v5.getFolderCtxFromFolder)(_v3)), _v5.send({
      eventName: "vimeo.open_distribution_options",
      version: _v4.VIMEO_DISTRIBUTION_ACTIONS_VERSION,
      additionalFields: {
        ..._v4.DistributionActionDefaults,
        distribution_type: "share"
      }
    });
  }]);
}