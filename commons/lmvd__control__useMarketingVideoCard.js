{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "lmvd",
    _v6 = "control";
  _v0.s(["useMarketingVideoCard", 0, function () {
    let {
        settings: _v0
      } = (0, _v3.useOrionSettings)(),
      _v1 = (0, _v4.useViewer)(),
      _v2 = _v1?.user?.id,
      _v3 = _v0.library_marketing_video_id,
      {
        data: _v4,
        mutate: _v5
      } = (0, _v2.useGetUserPreferences)(() => _v2 ? {
        where: {
          userId: _v2
        },
        select: [_v5]
      } : null),
      [_v6] = (0, _v2.usePatchUserPreferences)(),
      [_v7, _v8] = (0, _v1.useState)(null),
      _v9 = _v4?.[_v5] ?? "",
      _v10 = "" !== _v3 && _v3 !== _v6 && _v9 !== _v3 && _v7 !== _v3,
      _v11 = (0, _v1.useCallback)(() => (_v8(_v3), _v2 && "" !== _v3 && _v3 !== _v6) ? _v6({
        where: {
          userId: _v2
        },
        select: [_v5],
        variables: {
          [_v5]: _v3
        }
      }).then(() => {
        _v5();
      }) : Promise.resolve(), [_v2, _v3, _v6, _v5]);
    return {
      shouldShow: _v10,
      videoId: _v3,
      dismiss: _v11
    };
  }]);
}