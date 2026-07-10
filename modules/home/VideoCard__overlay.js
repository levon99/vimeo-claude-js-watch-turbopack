{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["VideoCard", 0, ({
    clipId: _v0,
    actionsMenu: _v1,
    title: _v2,
    lockedTooltipLabel: _v3,
    isManagedStorage: _v4,
    onLockedClick: _v5,
    ..._v6
  }) => {
    let [_v7, _v8] = (0, _v2.useState)(!1),
      [_v9, _v10] = (0, _v2.useState)(_v2),
      {
        settings: _v11
      } = (0, _v4.useOrionSettings)(),
      _v12 = _v6.isColdStorage ?? !1,
      _v13 = _v1 && _v11.enable_rename_video ? _v2.default.cloneElement(_v1, {
        onRename: () => {
          _v8(!0);
        }
      }) : _v1,
      _v14 = _v11.enable_rename_video && _v7 ? (0, _v1.jsx)(_v6.VideoEditableTitle, {
        videoId: _v0 ?? 0,
        isEditing: _v7,
        setCurrentTitle: _v10,
        setIsEditingContentTitle: _v8,
        value: _v9
      }) : void 0;
    return (0, _v1.jsx)(_v3.VideoCard, {
      ..._v6,
      clipId: _v0,
      title: _v9,
      hasPlayOnHover: !_v12,
      lockedTooltipLabel: _v12 ? _v3 : void 0,
      managedStorageIndicator: _v4 ? (0, _v1.jsx)(_v5.ManagedStorageIndicator, {
        isDimmed: _v12,
        layout: "overlay"
      }) : void 0,
      onClick: _v0 => {
        _v6.onClick?.(_v0), _v12 && _v5 && (_v0.preventDefault(), _v0.stopPropagation(), _v5());
      },
      actionsMenu: _v13,
      editableTitle: _v14,
      isEditingContentTitle: _v7
    });
  }]);
}