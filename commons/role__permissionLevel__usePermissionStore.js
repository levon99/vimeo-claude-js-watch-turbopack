{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = {
      isAdmin: !1,
      isOwner: !1,
      isOwnerOrAdmin: !1,
      hasLogoPermission: !1,
      hasBackgroundPermission: !1
    },
    _v8 = (0, _v2.createContext)(_v7);
  _v0.s(["default", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v6.useGlobalStore)(_v0 => _v0.entityOwnerId),
      [_v2, _v3] = (0, _v2.useState)(_v7),
      _v4 = (0, _v4.useViewer)(),
      _v5 = _v4?.user,
      _v6 = _v5?.id || 0,
      [_v7, {
        data: _v8,
        loading: _v9
      }] = (0, _v3.useGetUserTeamRoleLazy)();
    return (0, _v2.useEffect)(() => {
      (_v6 || _v1) && _v7({
        where: {
          userId: _v1 || _v6
        },
        select: ["role", "permissionLevel", "uri"]
      });
    }, [_v1, _v6]), (0, _v2.useEffect)(() => {
      if (!_v9 && _v8) {
        let _v0 = _v8.role === _v5.TeamUserPermissionLevel.Owner,
          _v1 = _v8.permissionLevel === _v5.TeamUserPermissionLevel.Admin,
          _v2 = _v0 || _v1;
        _v3(() => ({
          isOwner: _v0,
          isLoading: !1,
          isAdmin: _v1,
          isOwnerOrAdmin: _v2,
          hasLogoPermission: _v2,
          hasBackgroundPermission: _v2
        }));
      }
    }, [_v9, _v8]), (0, _v1.jsx)(_v8.Provider, {
      value: _v2,
      children: _v0
    });
  }, "usePermissionStore", 0, () => {
    let _v0 = (0, _v2.useContext)(_v8);
    if (!_v0) throw Error("usePermissionStore must be used within a PermissionContextProvider");
    return _v0;
  }]);
}