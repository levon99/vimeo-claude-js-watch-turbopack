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
    onClick: _v9,
    onMouseEnter: _v10,
    width: _v11,
    titleStyles: _v12,
    draggableItemIsHovering: _v13
  }) => {
    let [_v14, _v15] = (0, _v2.useState)(!1),
      [_v16, _v17] = (0, _v2.useState)(_v0),
      _v18 = (0, _v7.useOrionSetting)("enable_rename_folder") ? (0, _v1.jsx)(_v8.FolderEditableTitle, {
        folderId: _v2 ?? 0,
        folderOwnerId: _v3 ?? 0,
        isEditing: _v14,
        setCurrentTitle: _v17,
        setIsEditingContentTitle: _v15,
        value: _v16
      }) : null,
      _v19 = _v7 ? _v2.default.cloneElement(_v7, {
        onRename: () => {
          _v15(!0);
        }
      }) : null;
    return (0, _v1.jsxs)(_v5.ContentCard, {
      href: _v6,
      onClick: _v9,
      onMouseEnter: _v10,
      width: _v11,
      isDragging: _v13,
      ariaLabel: "Folder card",
      isEditingContentTitle: _v14,
      children: [(0, _v1.jsxs)(_v5.ContentCard.Body, {
        children: [(0, _v1.jsx)(_v6.FolderCardThumbnail, {
          backgroundColor: _v4
        }), _v13 && (0, _v1.jsx)(_v4.PlusSmall, {
          marginTop: (0, _v3.rem)(10),
          marginLeft: (0, _v3.rem)(10),
          position: "absolute"
        }), _v8, _v5 && (0, _v1.jsx)(_v5.ContentCard.Badge, {
          children: _v5
        })]
      }), (0, _v1.jsx)(_v5.ContentCard.Footer, {
        actions: _v19,
        title: _v16,
        subtitle: _v1,
        titleStyles: _v12,
        editableTitle: _v18,
        isEditingContentTitle: _v14
      })]
    });
  }]);
}