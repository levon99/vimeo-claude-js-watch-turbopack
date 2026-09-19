{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ["upload_complete", "unknown", "starting", "finishing", "active", "pending", "standby"];
  var _v5 = _v0.i(0);
  _v0.s(["useReplace", 0, (_v0, _v1) => {
    let _v2 = (0, _v3.useViewer)(),
      {
        data: _v3,
        isLoading: _v4
      } = (0, _v1.useGetVideo)(() => !_v2 || _v1 ? null : {
        where: {
          videoId: _v0
        },
        select: ["metadata.canBeReplaced", "metadata.interactions.edit.uri", "user.uploadQuota.lifetime", "user.uploadQuota.periodic"],
        headers: {
          Accept: _v5.API_ACCEPT_HEADER
        }
      }),
      {
        data: _v5,
        isLoading: _v6
      } = (0, _v2.useGetVideoStatus)(() => !_v2 || _v1 ? null : {
        where: {
          videoId: _v0
        },
        select: ["state"]
      }),
      _v7 = !!_v3?.metadata?.interactions?.edit?.uri;
    return {
      replaceEnabled: _v3 && _v3.metadata.canBeReplaced && _v5 && !(_v5?.state && _v4.includes(_v5?.state)) && _v7,
      userQuota: _v3?.user?.uploadQuota,
      isLoading: _v4 || _v6,
      canEditVideo: _v7
    };
  }], 0);
}