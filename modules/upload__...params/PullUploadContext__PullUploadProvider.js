{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v2.default.createContext({});
  _v0.s(["PullUploadContext", 0, _v4, "PullUploadProvider", 0, function ({
    children: _v0,
    pickerTokens: _v1
  }) {
    let _v2 = (0, _v2.useMemo)(() => ({
      gdClientId: _v1[_v3.API_APPS.GOOGLE_DRIVE_APP].clientId,
      gdDeveloperKey: _v1[_v3.API_APPS.GOOGLE_DRIVE_APP].developerKey,
      dbClientId: _v1[_v3.API_APPS.DROPBOX_APP],
      odClientId: _v1[_v3.API_APPS.ONE_DRIVE_APP],
      boxClientId: _v1[_v3.API_APPS.BOX_APP]
    }), [_v1]);
    return (0, _v1.jsx)(_v4.Provider, {
      value: {
        ..._v2
      },
      children: _v0
    });
  }]);
}