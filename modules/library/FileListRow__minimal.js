{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["FileListRow", 0, ({
    file: _v0,
    onDeleted: _v1,
    title: _v2,
    ..._v3
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(_v2),
      {
        canEdit: _v8,
        canDelete: _v9,
        copyLink: _v10,
        onCopyLink: _v11,
        copyLinkOnClick: _v12,
        downloadHref: _v13,
        onDelete: _v14,
        deleteModal: _v15
      } = (0, _v5.useFileActions)({
        file: _v0,
        onDeleted: _v1
      }),
      _v16 = () => {
        _v5(!0);
      },
      _v17 = _v4 ? (0, _v1.jsx)(_v7.FileEditableTitle, {
        ownerId: Number(_v0.uri.split("/")[2]),
        publicId: _v0.publicId,
        fileUri: _v0.uri,
        isEditing: _v4,
        setCurrentTitle: _v7,
        setIsEditingContentTitle: _v5,
        value: _v6
      }) : void 0;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v4.ListRow, {
        ..._v3,
        title: _v6,
        isEditingContentTitle: _v4,
        editableTitle: _v17,
        menuButton: (0, _v1.jsx)(_v3.FileMenu, {
          copyLink: _v10,
          onCopyLink: _v11,
          canEdit: _v8,
          onRename: _v16,
          downloadHref: _v13,
          canDelete: _v9,
          onDelete: _v14,
          title: _v0.name,
          zIndex: _v6.ACTIONS_MENU_Z_INDEX
        }),
        hoverActions: (0, _v1.jsx)(_v9.ListViewHoverActionsContainer, {
          children: (0, _v1.jsx)(_v8.FileTopRightDecoration, {
            onCopyLink: _v12,
            onRename: _v8 ? _v16 : void 0,
            downloadHref: _v13,
            onDelete: _v9 ? _v14 : void 0,
            buttonVariant: "minimal",
            flexDirection: "row"
          })
        })
      }), _v15]
    });
  }]);
}