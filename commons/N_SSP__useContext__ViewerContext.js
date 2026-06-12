{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8() {
    let _v0 = (0, _v3.useContext)(_v7.ViewerContext),
      _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        member_id: _v2,
        folder_id: _v3
      } = (0, _v2.useRouter)().query;
    return (0, _v1.jsx)(_v5.FolderPermissionsList, {
      teamUserId: Number(_v2),
      ownerId: _v1,
      folderId: Number(_v3)
    });
  }
  _v8.getLayout = _v6.getSharedContentLayoutWithTabs, (0, _v4.withPageSetup)({
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}