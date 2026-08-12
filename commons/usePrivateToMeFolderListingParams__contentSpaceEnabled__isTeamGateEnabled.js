{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["usePrivateToMeFolderListingParams", 0, function (_v0) {
    let {
      contentSpaceEnabled: _v1,
      isTeamGateEnabled: _v2,
      loading: _v3
    } = (0, _v1.useContentSpaceEnabled)(_v0);
    return {
      loading: _v3,
      listingParams: _v2 ? {
        excludePrivateToMeFolder: _v1,
        flattenPrivateToMe: !_v1
      } : {
        excludePrivateToMeFolder: !0
      }
    };
  }]);
}