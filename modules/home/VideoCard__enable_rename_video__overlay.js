{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["VideoCard", 0, ({
    clipId: _v0,
    actionsMenu: _v1,
    title: _v2,
    lockedTooltipLabel: _v3,
    isManagedStorage: _v4,
    onLockedClick: _v5,
    ..._v6
  }) => {
    let [_v7, _v8] = (0, _v2.useState)(!1),
      [_v9, _v10] = (0, _v2.useState)(_v2),
      _v11 = (0, _v4.useOrionSetting)("enable_rename_video"),
      _v12 = _v6.isColdStorage ?? !1,
      _v13 = _v1 && _v11 ? _v2.default.cloneElement(_v1, {
        onRename: () => {
          _v8(!0);
        }
      }) : _v1,
      _v14 = _v11 && _v7 ? (0, _v1.jsx)(_v6.VideoEditableTitle, {
        videoId: _v0 ?? 0,
        isEditing: _v7,
        setCurrentTitle: _v10,
        setIsEditingContentTitle: _v8,
        value: _v9
      }) : void 0;
    return (0, _v1.jsx)(_v3.VideoCard, {
      ..._v6,
      clipId: _v0,
      title: _v9,
      hasPlayOnHover: !_v12,
      lockedTooltipLabel: _v12 ? _v3 : void 0,
      managedStorageIndicator: _v4 ? (0, _v1.jsx)(_v5.ManagedStorageIndicator, {
        isDimmed: _v12,
        layout: "overlay"
      }) : void 0,
      onClick: _v0 => {
        _v6.onClick?.(_v0), _v12 && _v5 && (_v0.preventDefault(), _v0.stopPropagation(), _v5());
      },
      actionsMenu: _v13,
      editableTitle: _v14,
      isEditingContentTitle: _v7
    });
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ({
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
    isEditingContentTitle: _v21 = !1,
    isPasswordLocked: _v22 = !1
  }) => {
    let _v23,
      _v24,
      _v25 = (0, _v12.useColorModeValue)("rgba(26, 54, 93, 0.08)", "fill-component-hover"),
      _v26 = _v0 => _v7 ? (0, _v1.jsx)(_v11.Tooltip, {
        label: _v7,
        children: (0, _v1.jsx)(_v8.Box, {
          display: "inline-flex",
          pointerEvents: "auto",
          children: _v0
        })
      }) : _v0;
    _v6 && null == _v5 && (_v23 = _v26((0, _v1.jsx)(_v7.Avatar, {
      alt: _v7 ?? "",
      size: "xs",
      src: _v6,
      nameProps: {
        name: _v7 ?? ""
      }
    }))), _v8 && _v6 && (_v24 = _v26((0, _v1.jsx)(_v8.Box, {
      boxSize: "0.875rem",
      display: "inline-flex",
      children: (0, _v1.jsx)(_v7.Avatar, {
        alt: _v7 ?? "",
        size: "auto",
        src: _v6,
        nameProps: {
          name: _v7 ?? ""
        }
      })
    })));
    let _v27 = _v8 && null != _v24 ? (0, _v1.jsxs)(_v9.Flex, {
      alignItems: "center",
      gap: "xs",
      children: [_v24, null != _v1 && "" !== _v1 && (0, _v1.jsx)(_v10.Text, {
        variant: "body-sm",
        color: "text-tertiary",
        noOfLines: 1,
        children: `\xb7 ${_v1}`
      })]
    }) : _v1;
    return (0, _v1.jsxs)(_v13.ContentCard, {
      href: _v2,
      onClick: _v16,
      onMouseEnter: _v17,
      onToggleSelected: _v15,
      isSelected: _v14,
      width: _v18,
      ariaLabel: "File card",
      isEditingContentTitle: _v21,
      children: [(0, _v1.jsxs)(_v13.ContentCard.Body, {
        children: [null != _v4 && "" !== _v4 ? (0, _v1.jsx)(_v13.ContentCard.Thumbnail, {
          alt: "",
          src: _v4,
          isPasswordLocked: _v22
        }) : (0, _v1.jsx)(_v13.ContentCard.DefaultThumbnail, {
          background: _v25,
          border: "none",
          isPasswordLocked: _v22,
          children: (0, _v1.jsx)(_v14.FileThumbnailContent, {
            name: _v0,
            contentType: _v3,
            variant: "filled"
          })
        }), _v13 && (0, _v1.jsx)(_v9.Flex, {
          position: "absolute",
          top: "8px",
          left: "8px",
          onClick: _v0 => {
            _v0.stopPropagation();
          },
          children: (0, _v1.jsx)(_v13.ContentCard.SelectCheckbox, {
            size: "md"
          })
        }), _v10, (0, _v1.jsx)(_v13.ContentCard.PrivacyBadge, {
          privacy: _v11,
          layout: "overlay",
          onClick: _v12
        })]
      }), (0, _v1.jsx)(_v13.ContentCard.Footer, {
        actions: _v9,
        avatar: null != _v5 ? void 0 : _v23,
        leadingIcon: _v5,
        title: _v0,
        subtitle: _v27,
        titleStyles: _v19,
        editableTitle: _v20,
        isEditingContentTitle: _v21
      })]
    });
  };
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  _v0.s(["FileCard", 0, ({
    file: _v0,
    menuContext: _v1,
    onDeleted: _v2,
    title: _v3,
    thumbnailSrc: _v4,
    copyLinkOverride: _v5,
    showActionsMenu: _v6 = !0,
    href: _v7,
    onClick: _v8,
    ..._v9
  }) => {
    let [_v10, _v11] = (0, _v2.useState)(!1),
      [_v12, _v13] = (0, _v2.useState)(_v3),
      _v14 = _v0.isColdStorage,
      _v15 = (0, _v16.useGetFileUploadThumbnail)(_v0.publicId),
      {
        canEdit: _v16,
        canDelete: _v17,
        canMove: _v18,
        canCopy: _v19,
        copyLink: _v20,
        onCopyLink: _v21,
        downloadHref: _v22,
        onMove: _v23,
        onCopy: _v24,
        onDelete: _v25,
        deleteModal: _v26,
        copyModal: _v27
      } = (0, _v17.useFileActions)({
        file: _v0,
        copyLinkOverride: _v5,
        onDeleted: _v2
      }),
      _v28 = _v10 ? (0, _v1.jsx)(_v20.FileEditableTitle, {
        ownerId: Number(_v0.uri.split("/")[2]),
        publicId: _v0.publicId,
        fileUri: _v0.uri,
        isEditing: _v10,
        setCurrentTitle: _v13,
        setIsEditingContentTitle: _v11,
        value: _v12
      }) : void 0;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v15, {
        ..._v9,
        title: _v12,
        href: _v14 ? void 0 : _v7,
        onClick: _v14 ? void 0 : _v8,
        thumbnailSrc: _v15 ?? _v4,
        isEditingContentTitle: _v10,
        editableTitle: _v28,
        actionsMenu: _v6 ? (0, _v1.jsx)(_v19.FileActionsMenu, {
          fileId: _v0.publicId,
          contentType: _v0.contentType,
          context: _v1,
          copyLink: _v20,
          onCopyLink: _v21,
          canEdit: _v16,
          onRename: () => {
            _v11(!0);
          },
          onCopy: _v19 ? _v24 : void 0,
          onMove: _v18 ? _v23 : void 0,
          downloadHref: _v22,
          canDelete: _v17,
          onDelete: _v25,
          title: _v0.name,
          zIndex: _v18.ACTIONS_MENU_Z_INDEX
        }) : null
      }), _v26, _v27]
    });
  }], 0);
}