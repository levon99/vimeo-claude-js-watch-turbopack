{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      permissionLevel: null,
      userId: null,
      email: null,
      personalTeamFolderUri: null,
      isLoaded: !1
    },
    _v4 = (0, _v2.createContext)(_v3),
    _v5 = (0, _v2.createContext)(() => null);
  _v0.s(["TeamUserInfoDispatcher", 0, _v5, "TeamUserInfoProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(_v3);
    return (0, _v1.jsx)(_v5.Provider, {
      value: _v2,
      children: (0, _v1.jsx)(_v4.Provider, {
        value: _v1,
        children: _v0
      })
    });
  }, "TeamUserInfoState", 0, _v4]);
}