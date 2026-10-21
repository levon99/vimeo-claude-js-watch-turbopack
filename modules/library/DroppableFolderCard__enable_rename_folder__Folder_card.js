{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["DroppableFolderCard", 0, ({
    title: _v0,
    subtitle: _v1,
    folderId: _v2,
    folderOwnerId: _v3,
    backgroundColor: _v4,
    tagText: _v5,
    href: _v6,
    actionsMenu: _v7,
    hoverActions: _v8,
    privacyBadge: _v9,
    onClick: _v10,
    onMouseEnter: _v11,
    width: _v12,
    titleStyles: _v13,
    draggableItemIsHovering: _v14
  }) => {
    let [_v15, _v16] = (0, _v2.useState)(!1),
      [_v17, _v18] = (0, _v2.useState)(_v0),
      _v19 = (0, _v7.useOrionSetting)("enable_rename_folder") ? (0, _v1.jsx)(_v8.FolderEditableTitle, {
        folderId: _v2 ?? 0,
        folderOwnerId: _v3 ?? 0,
        isEditing: _v15,
        setCurrentTitle: _v18,
        setIsEditingContentTitle: _v16,
        value: _v17
      }) : null,
      _v20 = _v7 ? _v2.default.cloneElement(_v7, {
        onRename: () => {
          _v16(!0);
        }
      }) : null;
    return (0, _v1.jsxs)(_v5.ContentCard, {
      href: _v6,
      onClick: _v10,
      onMouseEnter: _v11,
      width: _v12,
      isDragging: _v14,
      ariaLabel: "Folder card",
      isEditingContentTitle: _v15,
      children: [(0, _v1.jsxs)(_v5.ContentCard.Body, {
        children: [(0, _v1.jsx)(_v6.FolderCardThumbnail, {
          backgroundColor: _v4
        }), _v14 && (0, _v1.jsx)(_v4.PlusSmall, {
          marginTop: (0, _v3.rem)(10),
          marginLeft: (0, _v3.rem)(10),
          position: "absolute"
        }), _v8, _v9, _v5 && (0, _v1.jsx)(_v5.ContentCard.Badge, {
          children: _v5
        })]
      }), (0, _v1.jsx)(_v5.ContentCard.Footer, {
        actions: _v20,
        title: _v17,
        subtitle: _v1,
        titleStyles: _v13,
        editableTitle: _v19,
        isEditingContentTitle: _v15
      })]
    });
  }]);
}