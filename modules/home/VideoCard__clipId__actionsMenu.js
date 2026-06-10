{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["VideoCard", 0, ({
    clipId: _v0,
    actionsMenu: _v1,
    title: _v2,
    lockedTooltipLabel: _v3,
    onLockedClick: _v4,
    ..._v5
  }) => {
    let [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)(_v2),
      {
        settings: _v10
      } = (0, _v4.useOrionSettings)(),
      _v11 = _v5.isColdStorage ?? !1,
      _v12 = _v1 && _v10.enable_rename_video ? _v2.default.cloneElement(_v1, {
        onRename: () => {
          _v7(!0);
        }
      }) : _v1,
      _v13 = _v10.enable_rename_video && _v6 ? (0, _v1.jsx)(_v5.VideoEditableTitle, {
        videoId: _v0 ?? 0,
        isEditing: _v6,
        setCurrentTitle: _v9,
        setIsEditingContentTitle: _v7,
        value: _v8
      }) : void 0;
    return (0, _v1.jsx)(_v3.VideoCard, {
      ..._v5,
      clipId: _v0,
      title: _v8,
      hasPlayOnHover: !_v11,
      lockedTooltipLabel: _v11 ? _v3 : void 0,
      onClick: _v0 => {
        _v5.onClick?.(_v0), _v11 && _v4 && (_v0.preventDefault(), _v0.stopPropagation(), _v4());
      },
      actionsMenu: _v12,
      editableTitle: _v13,
      isEditingContentTitle: _v6
    });
  }]);
}