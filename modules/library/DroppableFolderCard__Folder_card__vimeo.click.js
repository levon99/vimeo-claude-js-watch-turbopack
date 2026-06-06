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
    draggableItemIsHovering: _v13,
    pageName: _v14
  }) => {
    let [_v15, _v16] = (0, _v2.useState)(!1),
      [_v17, _v18] = (0, _v2.useState)(_v0),
      {
        settings: _v19
      } = (0, _v8.useOrionSettings)(),
      _v20 = _v19.enable_rename_folder ? (0, _v1.jsx)(_v9.FolderEditableTitle, {
        folderId: _v2 ?? 0,
        folderOwnerId: _v3 ?? 0,
        isEditing: _v15,
        setCurrentTitle: _v18,
        setIsEditingContentTitle: _v16,
        value: _v17
      }) : null,
      _v21 = _v7 ? _v2.default.cloneElement(_v7, {
        onRename: () => {
          _v16(!0);
        }
      }) : null;
    return (0, _v1.jsxs)(_v6.ContentCard, {
      href: _v6,
      onClick: _v9,
      onMouseEnter: _v10,
      width: _v11,
      isDragging: _v13,
      ariaLabel: "Folder card",
      isEditingContentTitle: _v15,
      children: [(0, _v1.jsxs)(_v6.ContentCard.Body, {
        children: [(0, _v1.jsx)(_v7.FolderCardThumbnail, {
          backgroundColor: _v4,
          onClick: () => {
            _v3.BigPictureClient.sendEvent(new _v3.Event("vimeo.click", 151, {
              copy: "",
              feature: "video_library",
              location: "folder_card",
              name: "folder_card_thumbnail",
              page: _v14 ?? "",
              path: null,
              target: _v6 ?? null,
              target_path: null,
              type: "general",
              click_type: null,
              device_type: null,
              third_party_integration: null
            }));
          }
        }), _v13 && (0, _v1.jsx)(_v5.PlusSmall, {
          marginTop: (0, _v4.rem)(10),
          marginLeft: (0, _v4.rem)(10),
          position: "absolute"
        }), _v8, _v5 && (0, _v1.jsx)(_v6.ContentCard.Badge, {
          children: _v5
        })]
      }), (0, _v1.jsx)(_v6.ContentCard.Footer, {
        actions: _v21,
        title: _v17,
        subtitle: _v1,
        titleStyles: _v12,
        onTitleClick: () => {
          _v3.BigPictureClient.sendEvent(new _v3.Event("vimeo.click", 151, {
            copy: _v17,
            feature: "video_library",
            location: "folder_card",
            name: "folder_card_title",
            page: _v14 ?? "",
            path: null,
            target: _v6 ?? null,
            target_path: null,
            type: "general",
            click_type: null,
            device_type: null,
            third_party_integration: null
          }));
        },
        editableTitle: _v20,
        isEditingContentTitle: _v15
      })]
    });
  }]);
}