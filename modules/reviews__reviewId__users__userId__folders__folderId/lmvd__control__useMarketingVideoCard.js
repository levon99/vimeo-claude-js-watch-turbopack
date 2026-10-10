{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "lmvd",
    _v6 = "control";
  _v0.s(["useMarketingVideoCard", 0, function () {
    let _v0 = (0, _v3.useOrionSetting)("library_marketing_video_id"),
      _v1 = (0, _v4.useViewer)(),
      _v2 = _v1?.user?.id,
      {
        data: _v3,
        mutate: _v4
      } = (0, _v2.useGetUserPreferences)(() => _v2 ? {
        where: {
          userId: _v2
        },
        select: [_v5]
      } : null),
      [_v5] = (0, _v2.usePatchUserPreferences)(),
      [_v6, _v7] = (0, _v1.useState)(null),
      _v8 = _v3?.[_v5] ?? "",
      _v9 = "" !== _v0 && _v0 !== _v6 && _v8 !== _v0 && _v6 !== _v0,
      _v10 = (0, _v1.useCallback)(() => (_v7(_v0), _v2 && "" !== _v0 && _v0 !== _v6) ? _v5({
        where: {
          userId: _v2
        },
        select: [_v5],
        variables: {
          [_v5]: _v0
        }
      }).then(() => {
        _v4();
      }) : Promise.resolve(), [_v2, _v0, _v5, _v4]);
    return {
      shouldShow: _v9,
      videoId: _v0,
      dismiss: _v10
    };
  }]);
}