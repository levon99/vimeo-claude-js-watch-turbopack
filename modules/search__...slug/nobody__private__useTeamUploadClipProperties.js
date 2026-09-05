{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
    view: "nobody",
    embed: "private",
    comments: "nobody",
    add: !1,
    download: !1
  };
  _v0.s(["useTeamUploadClipProperties", 0, function (_v0) {
    let _v1 = (0, _v1.useContext)(_v4.ViewerContext),
      _v2 = _v1?.user?.teamUserPermissionLevel === "Uploader",
      {
        data: _v3
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
        capabilities: _v4
      } = (0, _v2.useCapability)(["canAllowDownloads"], _v0 ?? void 0),
      _v5 = _v3?.preferences?.videos?.privacy;
    return (0, _v1.useMemo)(() => {
      if (_v0) return _v2 ? {
        privacy: _v5,
        spatial: {}
      } : {
        content_rating: _v3?.preferences?.videos?.rating,
        password: _v3?.preferences?.videos?.password,
        privacy: _v5 ? {
          ..._v5,
          download: _v4.canAllowDownloads ? _v5.download : void 0
        } : {},
        spatial: {}
      };
    }, [_v0, _v2, _v3, _v5, _v4.canAllowDownloads]);
  }]);
}