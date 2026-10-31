{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = {
    view: "nobody",
    embed: "private",
    comments: "nobody",
    add: !1,
    download: !1
  };
  _v0.s(["useTeamUploadClipProperties", 0, function (_v0) {
    let _v1 = (0, _v1.useContext)(_v5.ViewerContext),
      _v2 = _v1?.user?.teamUserPermissionLevel === "Uploader",
      {
        isDefault: _v3,
        isEligible: _v4,
        expiryDays: _v5
      } = (0, _v4.useFreeTierUnlistedSettings)(),
      _v6 = (0, _v4.useFreeTierUnlistedGrantIntervalDays)(),
      _v7 = null != _v0 && _v0 === _v1?.user?.id,
      {
        data: _v8
      } = (0, _v3.useGetUser)(() => _v0 ? {
        select: ["preferences.videos"],
        where: {
          userId: _v0
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      {
        capabilities: _v9
      } = (0, _v2.useCapability)(["canAllowDownloads"], _v0 ?? void 0),
      _v10 = _v8?.preferences?.videos?.privacy;
    return (0, _v1.useMemo)(() => {
      if (!_v0) return;
      if (_v2) return {
        privacy: _v6,
        spatial: {}
      };
      let _v0 = _v7 && _v4 && _v3 && _v5 > 0 && _v10?.isDefault === !0;
      return {
        content_rating: _v8?.preferences?.videos?.rating,
        password: _v8?.preferences?.videos?.password,
        privacy: _v10 ? {
          ..._v10,
          ...(_v0 ? {
            view: "unlisted"
          } : {}),
          ...(_v0 && null !== _v6 ? {
            sharing_link_interval_days: _v6
          } : {}),
          download: _v9.canAllowDownloads ? _v10.download : void 0
        } : {},
        spatial: {}
      };
    }, [_v0, _v2, _v7, _v4, _v3, _v6, _v5, _v8, _v10, _v9.canAllowDownloads]);
  }]);
}