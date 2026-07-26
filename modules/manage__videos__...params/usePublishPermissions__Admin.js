{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["usePublishPermissions", 0, function () {
    let _v0 = (0, _v2.useViewer)(),
      {
        videoOwnerCapabilities: {
          canCreateLiveEvents: _v1,
          canLmsExport: _v2
        }
      } = (0, _v3.useGetVideoOwnerCapabilities)(),
      {
        data: _v3
      } = (0, _v4.useGetVideoSharingData)();
    return (0, _v1.useMemo)(() => {
      let _v0 = _v3?.user?.uri,
        _v1 = (0, _v5.idFromUri)(_v0),
        _v2 = _v0?.user?.uri === _v0,
        _v3 = !!(_v1 && _v2 && _v3 && !_v3?.vod?.id && !_v3?.disabledProperties),
        _v4 = _v2 || _v0?.teamUser?.plainTextPermissionLevel === "Admin";
      return {
        ownerId: _v1,
        showExportToLMS: _v2,
        showStreamLive: _v3 && _v4,
        showPublishToSocial: !_v0?.teamUser?.publishToSocialRestricted
      };
    }, [_v3, _v0, _v1, _v2]);
  }]);
}