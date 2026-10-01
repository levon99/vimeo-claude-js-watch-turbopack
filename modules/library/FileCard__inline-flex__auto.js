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
  _v0.s(["FileCard", 0, ({
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
    titleStyles: _v19
  }) => {
    let _v20;
    if (_v6 && (_v8 || null == _v5)) {
      let _v0 = (0, _v1.jsx)(_v2.Avatar, {
        alt: _v7 ?? "",
        size: "xs",
        src: _v6,
        nameProps: {
          name: _v7 ?? ""
        }
      });
      _v20 = _v7 ? (0, _v1.jsx)(_v6.Tooltip, {
        label: _v7,
        children: (0, _v1.jsx)(_v3.Box, {
          display: "inline-flex",
          pointerEvents: "auto",
          children: _v0
        })
      }) : _v0;
    }
    let _v21 = _v8 && null != _v20 ? (0, _v1.jsxs)(_v4.Flex, {
      alignItems: "center",
      gap: "xs",
      children: [_v20, null != _v1 && "" !== _v1 && (0, _v1.jsx)(_v5.Text, {
        variant: "body-sm",
        color: "text-tertiary",
        noOfLines: 1,
        children: `\xb7 ${_v1}`
      })]
    }) : _v1;
    return (0, _v1.jsxs)(_v7.ContentCard, {
      href: _v2,
      onClick: _v16,
      onMouseEnter: _v17,
      onToggleSelected: _v15,
      isSelected: _v14,
      width: _v18,
      ariaLabel: "File card",
      children: [(0, _v1.jsxs)(_v7.ContentCard.Body, {
        children: [null != _v4 && "" !== _v4 ? (0, _v1.jsx)(_v7.ContentCard.Thumbnail, {
          alt: "",
          src: _v4
        }) : (0, _v1.jsx)(_v7.ContentCard.DefaultThumbnail, {
          background: "gray.200",
          children: (0, _v1.jsx)(_v8.FileThumbnailContent, {
            name: _v0,
            contentType: _v3
          })
        }), _v13 && (0, _v1.jsx)(_v4.Flex, {
          position: "absolute",
          top: "8px",
          left: "8px",
          onClick: _v0 => {
            _v0.stopPropagation();
          },
          children: (0, _v1.jsx)(_v7.ContentCard.SelectCheckbox, {
            size: "md"
          })
        }), _v10, (0, _v1.jsx)(_v7.ContentCard.VideoPrivacyBadge, {
          videoPrivacy: _v11,
          layout: "overlay",
          onClick: _v12
        })]
      }), (0, _v1.jsx)(_v7.ContentCard.Footer, {
        actions: _v9,
        avatar: null != _v5 ? void 0 : _v20,
        leadingIcon: _v5,
        title: _v0,
        subtitle: _v21,
        titleStyles: _v19
      })]
    });
  }]);
}