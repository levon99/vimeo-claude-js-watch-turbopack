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
    href: _v14,
    onClick: _v15,
    ..._v16
  }) => {
    let [_v17, _v18] = (0, _v2.useState)(!1),
      [_v19, _v20] = (0, _v2.useState)(_v3),
      _v21 = _v0.isColdStorage,
      {
        canEdit: _v22,
        canDelete: _v23,
        canMove: _v24,
        canCopy: _v25,
        copyLink: _v26,
        onCopyLink: _v27,
        copyLinkOnClick: _v28,
        downloadHref: _v29,
        onMove: _v30,
        onCopy: _v31,
        onDelete: _v32,
        deleteModal: _v33,
        copyModal: _v34
      } = (0, _v4.useFileActions)({
        file: _v0,
        copyLinkOverride: _v4,
        onDeleted: _v2
      }),
      {
        isDragging: _v35,
        dragRef: _v36,
        preview: _v37,
        getEmptyImage: _v38
      } = (0, _v7.useDragFolderItem)(_v6, _v0.uri, _v8, _v0.thumbnail?.url ?? "", _v13, _v9, _v10, _v11, _v12);
    (0, _v2.useEffect)(() => {
      _v37(_v38());
    }, [_v38, _v37]), (0, _v2.useEffect)(() => {
      _v35 && _v12?.(!1);
    }, [_v35, _v12]);
    let _v39 = () => {
        _v18(!0);
      },
      _v40 = _v17 ? (0, _v1.jsx)(_v9.FileEditableTitle, {
        ownerId: Number(_v0.uri.split("/")[2]),
        publicId: _v0.publicId,
        fileUri: _v0.uri,
        isEditing: _v17,
        setCurrentTitle: _v20,
        setIsEditingContentTitle: _v18,
        value: _v19
      }) : void 0;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v3.ListRow, {
        ..._v16,
        title: _v19,
        href: _v21 ? void 0 : _v14,
        onClick: _v21 ? void 0 : _v15,
        isDragging: _v35,
        dragDropRef: _v7 ? _v36 : void 0,
        isSelected: _v13,
        isEditingContentTitle: _v17,
        editableTitle: _v40,
        menuButton: _v5 ? (0, _v1.jsx)(_v8.FileActionsMenu, {
          fileId: _v0.publicId,
          contentType: _v0.contentType,
          context: _v1,
          copyLink: _v26,
          onCopyLink: _v27,
          canEdit: _v22,
          onRename: _v39,
          onCopy: _v25 ? _v31 : void 0,
          onMove: _v24 ? _v30 : void 0,
          downloadHref: _v29,
          canDelete: _v23,
          onDelete: _v32,
          title: _v0.name,
          zIndex: _v5.ACTIONS_MENU_Z_INDEX
        }) : null,
        hoverActions: (0, _v1.jsx)(_v11.ListViewHoverActionsContainer, {
          children: (0, _v1.jsx)(_v10.FileTopRightDecoration, {
            onCopyLink: _v28,
            onRename: _v22 ? _v39 : void 0,
            downloadHref: _v29,
            onDelete: _v23 ? _v32 : void 0,
            buttonVariant: "minimal",
            flexDirection: "row"
          })
        })
      }), _v33, _v34]
    });
  }]);
}