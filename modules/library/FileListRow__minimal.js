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
    menuContext: _v1,
    onDeleted: _v2,
    title: _v3,
    copyLinkOverride: _v4,
    showActionsMenu: _v5 = !0,
    ..._v6
  }) => {
    let [_v7, _v8] = (0, _v2.useState)(!1),
      [_v9, _v10] = (0, _v2.useState)(_v3),
      {
        canEdit: _v11,
        canDelete: _v12,
        canMove: _v13,
        canCopy: _v14,
        copyLink: _v15,
        onCopyLink: _v16,
        copyLinkOnClick: _v17,
        downloadHref: _v18,
        onMove: _v19,
        onCopy: _v20,
        onDelete: _v21,
        deleteModal: _v22,
        copyModal: _v23
      } = (0, _v4.useFileActions)({
        file: _v0,
        copyLinkOverride: _v4,
        onDeleted: _v2
      }),
      _v24 = () => {
        _v8(!0);
      },
      _v25 = _v7 ? (0, _v1.jsx)(_v7.FileEditableTitle, {
        ownerId: Number(_v0.uri.split("/")[2]),
        publicId: _v0.publicId,
        fileUri: _v0.uri,
        isEditing: _v7,
        setCurrentTitle: _v10,
        setIsEditingContentTitle: _v8,
        value: _v9
      }) : void 0;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v3.ListRow, {
        ..._v6,
        title: _v9,
        isEditingContentTitle: _v7,
        editableTitle: _v25,
        menuButton: _v5 ? (0, _v1.jsx)(_v6.FileActionsMenu, {
          fileId: _v0.publicId,
          context: _v1,
          copyLink: _v15,
          onCopyLink: _v16,
          canEdit: _v11,
          onRename: _v24,
          onCopy: _v14 ? _v20 : void 0,
          onMove: _v13 ? _v19 : void 0,
          downloadHref: _v18,
          canDelete: _v12,
          onDelete: _v21,
          title: _v0.name,
          zIndex: _v5.ACTIONS_MENU_Z_INDEX
        }) : null,
        hoverActions: (0, _v1.jsx)(_v9.ListViewHoverActionsContainer, {
          children: (0, _v1.jsx)(_v8.FileTopRightDecoration, {
            onCopyLink: _v17,
            onRename: _v11 ? _v24 : void 0,
            downloadHref: _v18,
            onDelete: _v12 ? _v21 : void 0,
            buttonVariant: "minimal",
            flexDirection: "row"
          })
        })
      }), _v22, _v23]
    });
  }]);
}