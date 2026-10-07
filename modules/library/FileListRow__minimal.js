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
        canMove: _v10,
        canCopy: _v11,
        copyLink: _v12,
        onCopyLink: _v13,
        copyLinkOnClick: _v14,
        downloadHref: _v15,
        onMove: _v16,
        onCopy: _v17,
        onDelete: _v18,
        deleteModal: _v19,
        copyModal: _v20
      } = (0, _v5.useFileActions)({
        file: _v0,
        onDeleted: _v1
      }),
      _v21 = () => {
        _v5(!0);
      },
      _v22 = _v4 ? (0, _v1.jsx)(_v7.FileEditableTitle, {
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
        editableTitle: _v22,
        menuButton: (0, _v1.jsx)(_v3.FileMenu, {
          copyLink: _v12,
          onCopyLink: _v13,
          canEdit: _v8,
          onRename: _v21,
          onCopy: _v11 ? _v17 : void 0,
          onMove: _v10 ? _v16 : void 0,
          downloadHref: _v15,
          canDelete: _v9,
          onDelete: _v18,
          title: _v0.name,
          zIndex: _v6.ACTIONS_MENU_Z_INDEX
        }),
        hoverActions: (0, _v1.jsx)(_v9.ListViewHoverActionsContainer, {
          children: (0, _v1.jsx)(_v8.FileTopRightDecoration, {
            onCopyLink: _v14,
            onRename: _v8 ? _v21 : void 0,
            downloadHref: _v15,
            onDelete: _v9 ? _v18 : void 0,
            buttonVariant: "minimal",
            flexDirection: "row"
          })
        })
      }), _v19, _v20]
    });
  }]);
}