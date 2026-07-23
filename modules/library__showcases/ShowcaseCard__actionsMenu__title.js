{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["ShowcaseCard", 0, ({
    actionsMenu: _v0,
    title: _v1,
    uri: _v2,
    ..._v3
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(_v1),
      {
        settings: _v8
      } = (0, _v4.useOrionSettings)(),
      _v9 = _v0 && _v8.enable_rename_showcase_and_events ? _v2.default.cloneElement(_v0, {
        onRename: () => {
          _v5(!0);
        }
      }) : _v0,
      _v10 = _v2 ? (0, _v5.getResourceIdFromUri)(_v2) : 0,
      _v11 = _v8.enable_rename_showcase_and_events && _v4 ? (0, _v1.jsx)(_v6.ShowcaseEditableTitle, {
        albumId: _v10,
        isEditing: _v4,
        setCurrentTitle: _v7,
        setIsEditingContentTitle: _v5,
        value: _v6
      }) : void 0;
    return (0, _v1.jsx)(_v3.ShowcaseCard, {
      ..._v3,
      title: _v6,
      actionsMenu: _v9,
      editableTitle: _v11,
      isEditingContentTitle: _v4
    });
  }]);
}