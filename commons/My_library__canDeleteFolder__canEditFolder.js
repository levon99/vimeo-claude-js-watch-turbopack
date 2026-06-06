{
  "use strict";

  let _v1 = _v0 => !!_v0?.metadata?.interactions?.delete,
    _v2 = _v0 => !!_v0?.metadata?.interactions?.edit,
    _v3 = _v0 => !!_v0?.metadata?.interactions?.editSettings,
    _v4 = _v0 => !!_v0?.metadata?.interactions?.invite,
    _v5 = _v0 => !!_v0?.metadata?.interactions?.delete,
    _v6 = _v0 => _v0?.name !== "My library";
  _v0.s(["canDeleteFolder", 0, _v1, "canEditFolder", 0, _v2, "canEditFolderSettings", 0, _v3, "canInviteToFolder", 0, _v4, "canMoveFolder", 0, _v5, "canTranslateFolder", 0, _v6, "getFolderPermissions", 0, _v0 => {
    let _v1 = _v1(_v0),
      _v2 = _v2(_v0),
      _v3 = _v3(_v0),
      _v4 = _v4(_v0);
    return {
      canDelete: _v1,
      canEdit: _v2,
      canEditSettings: _v3,
      canInvite: _v4,
      canMove: _v5(_v0),
      canTranslate: _v6(_v0)
    };
  }]);
}