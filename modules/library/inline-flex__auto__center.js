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
  let _v10 = ({
    title: _v0,
    subtitle: _v1,
    href: _v2,
    contentType: _v3,
    thumbnailSrc: _v4,
    typeIcon: _v5,
    avatarSrc: _v6,
    avatarName: _v7,
    showAvatarInSubtitle: _v8 = !1,
    actionsMenu: _v9,
    hoverActions: _v10,
    filePrivacy: _v11,
    onPrivacyBadgeClick: _v12,
    isSelectable: _v13 = !1,
    isSelected: _v14 = !1,
    onToggleSelected: _v15,
    onClick: _v16,
    onMouseEnter: _v17,
    width: _v18,
    titleStyles: _v19,
    editableTitle: _v20,
    isEditingContentTitle: _v21 = !1
  }) => {
    let _v22;
    if (_v6 && (_v8 || null == _v5)) {
      let _v0 = (0, _v1.jsx)(_v3.Avatar, {
        alt: _v7 ?? "",
        size: "xs",
        src: _v6,
        nameProps: {
          name: _v7 ?? ""
        }
      });
      _v22 = _v7 ? (0, _v1.jsx)(_v7.Tooltip, {
        label: _v7,
        children: (0, _v1.jsx)(_v4.Box, {
          display: "inline-flex",
          pointerEvents: "auto",
          children: _v0
        })
      }) : _v0;
    }
    let _v23 = _v8 && null != _v22 ? (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      gap: "xs",
      children: [_v22, null != _v1 && "" !== _v1 && (0, _v1.jsx)(_v6.Text, {
        variant: "body-sm",
        color: "text-tertiary",
        noOfLines: 1,
        children: `\xb7 ${_v1}`
      })]
    }) : _v1;
    return (0, _v1.jsxs)(_v8.ContentCard, {
      href: _v2,
      onClick: _v16,
      onMouseEnter: _v17,
      onToggleSelected: _v15,
      isSelected: _v14,
      width: _v18,
      ariaLabel: "File card",
      isEditingContentTitle: _v21,
      children: [(0, _v1.jsxs)(_v8.ContentCard.Body, {
        children: [null != _v4 && "" !== _v4 ? (0, _v1.jsx)(_v8.ContentCard.Thumbnail, {
          alt: "",
          src: _v4
        }) : (0, _v1.jsx)(_v8.ContentCard.DefaultThumbnail, {
          background: "gray.200",
          children: (0, _v1.jsx)(_v9.FileThumbnailContent, {
            name: _v0,
            contentType: _v3
          })
        }), _v13 && (0, _v1.jsx)(_v5.Flex, {
          position: "absolute",
          top: "8px",
          left: "8px",
          onClick: _v0 => {
            _v0.stopPropagation();
          },
          children: (0, _v1.jsx)(_v8.ContentCard.SelectCheckbox, {
            size: "md"
          })
        }), _v10, (0, _v1.jsx)(_v8.ContentCard.VideoPrivacyBadge, {
          videoPrivacy: _v11,
          layout: "overlay",
          onClick: _v12
        })]
      }), (0, _v1.jsx)(_v8.ContentCard.Footer, {
        actions: _v9,
        avatar: null != _v5 ? void 0 : _v22,
        leadingIcon: _v5,
        title: _v0,
        subtitle: _v23,
        titleStyles: _v19,
        editableTitle: _v20,
        isEditingContentTitle: _v21
      })]
    });
  };
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  _v0.s(["FileCard", 0, ({
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
        downloadHref: _v12,
        onDelete: _v13,
        deleteModal: _v14
      } = (0, _v12.useFileActions)({
        file: _v0,
        onDeleted: _v1
      }),
      _v15 = _v4 ? (0, _v1.jsx)(_v14.FileEditableTitle, {
        ownerId: Number(_v0.uri.split("/")[2]),
        publicId: _v0.publicId,
        fileUri: _v0.uri,
        isEditing: _v4,
        setCurrentTitle: _v7,
        setIsEditingContentTitle: _v5,
        value: _v6
      }) : void 0;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v10, {
        ..._v3,
        title: _v6,
        isEditingContentTitle: _v4,
        editableTitle: _v15,
        actionsMenu: (0, _v1.jsx)(_v11.FileMenu, {
          copyLink: _v10,
          onCopyLink: _v11,
          canEdit: _v8,
          onRename: () => {
            _v5(!0);
          },
          downloadHref: _v12,
          canDelete: _v9,
          onDelete: _v13,
          title: _v0.name,
          zIndex: _v13.ACTIONS_MENU_Z_INDEX
        })
      }), _v14]
    });
  }], 0);
}