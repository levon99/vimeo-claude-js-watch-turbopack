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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = new Set();
  _v0.s(["FileListRow", 0, ({
    file: _v0,
    menuContext: _v1,
    onDeleted: _v2,
    title: _v3,
    copyLinkOverride: _v4,
    showActionsMenu: _v5 = !0,
    type: _v6 = _v6.ITEM_TYPES.FILE,
    canDrag: _v7 = !1,
    parentFolderUri: _v8 = "",
    selectedItemURIs: _v9 = _v12,
    onDrop: _v10,
    isPrivateToUser: _v11 = !1,
    setIsUploadDropzoneEnabled: _v12,
    isSelected: _v13 = !1,
    ..._v14
  }) => {
    let [_v15, _v16] = (0, _v2.useState)(!1),
      [_v17, _v18] = (0, _v2.useState)(_v3),
      {
        canEdit: _v19,
        canDelete: _v20,
        canMove: _v21,
        canCopy: _v22,
        copyLink: _v23,
        onCopyLink: _v24,
        copyLinkOnClick: _v25,
        downloadHref: _v26,
        onMove: _v27,
        onCopy: _v28,
        onDelete: _v29,
        deleteModal: _v30,
        copyModal: _v31
      } = (0, _v4.useFileActions)({
        file: _v0,
        copyLinkOverride: _v4,
        onDeleted: _v2
      }),
      {
        isDragging: _v32,
        dragRef: _v33,
        preview: _v34,
        getEmptyImage: _v35
      } = (0, _v7.useDragFolderItem)(_v6, _v0.uri, _v8, _v0.thumbnail?.url ?? "", _v13, _v9, _v10, _v11, _v12);
    (0, _v2.useEffect)(() => {
      _v34(_v35());
    }, [_v35, _v34]), (0, _v2.useEffect)(() => {
      _v32 && _v12?.(!1);
    }, [_v32, _v12]);
    let _v36 = () => {
        _v16(!0);
      },
      _v37 = _v15 ? (0, _v1.jsx)(_v9.FileEditableTitle, {
        ownerId: Number(_v0.uri.split("/")[2]),
        publicId: _v0.publicId,
        fileUri: _v0.uri,
        isEditing: _v15,
        setCurrentTitle: _v18,
        setIsEditingContentTitle: _v16,
        value: _v17
      }) : void 0;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v3.ListRow, {
        ..._v14,
        title: _v17,
        isDragging: _v32,
        dragDropRef: _v7 ? _v33 : void 0,
        isSelected: _v13,
        isEditingContentTitle: _v15,
        editableTitle: _v37,
        menuButton: _v5 ? (0, _v1.jsx)(_v8.FileActionsMenu, {
          fileId: _v0.publicId,
          context: _v1,
          copyLink: _v23,
          onCopyLink: _v24,
          canEdit: _v19,
          onRename: _v36,
          onCopy: _v22 ? _v28 : void 0,
          onMove: _v21 ? _v27 : void 0,
          downloadHref: _v26,
          canDelete: _v20,
          onDelete: _v29,
          title: _v0.name,
          zIndex: _v5.ACTIONS_MENU_Z_INDEX
        }) : null,
        hoverActions: (0, _v1.jsx)(_v11.ListViewHoverActionsContainer, {
          children: (0, _v1.jsx)(_v10.FileTopRightDecoration, {
            onCopyLink: _v25,
            onRename: _v19 ? _v36 : void 0,
            downloadHref: _v26,
            onDelete: _v20 ? _v29 : void 0,
            buttonVariant: "minimal",
            flexDirection: "row"
          })
        })
      }), _v30, _v31]
    });
  }]);
}