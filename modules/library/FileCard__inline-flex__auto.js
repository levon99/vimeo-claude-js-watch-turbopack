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
    typeIcon: _v4,
    avatarSrc: _v5,
    avatarName: _v6,
    showAvatarInSubtitle: _v7 = !1,
    actionsMenu: _v8,
    hoverActions: _v9,
    filePrivacy: _v10,
    onPrivacyBadgeClick: _v11,
    isSelectable: _v12 = !1,
    isSelected: _v13 = !1,
    onToggleSelected: _v14,
    onClick: _v15,
    onMouseEnter: _v16,
    width: _v17,
    titleStyles: _v18
  }) => {
    let _v19;
    if (_v5 && (_v7 || null == _v4)) {
      let _v0 = (0, _v1.jsx)(_v2.Avatar, {
        alt: _v6 ?? "",
        size: "xs",
        src: _v5,
        nameProps: {
          name: _v6 ?? ""
        }
      });
      _v19 = _v6 ? (0, _v1.jsx)(_v6.Tooltip, {
        label: _v6,
        children: (0, _v1.jsx)(_v3.Box, {
          display: "inline-flex",
          pointerEvents: "auto",
          children: _v0
        })
      }) : _v0;
    }
    let _v20 = _v7 && null != _v19 ? (0, _v1.jsxs)(_v4.Flex, {
      alignItems: "center",
      gap: "xs",
      children: [_v19, null != _v1 && "" !== _v1 && (0, _v1.jsx)(_v5.Text, {
        variant: "body-sm",
        color: "text-tertiary",
        noOfLines: 1,
        children: `\xb7 ${_v1}`
      })]
    }) : _v1;
    return (0, _v1.jsxs)(_v7.ContentCard, {
      href: _v2,
      onClick: _v15,
      onMouseEnter: _v16,
      onToggleSelected: _v14,
      isSelected: _v13,
      width: _v17,
      ariaLabel: "File card",
      children: [(0, _v1.jsxs)(_v7.ContentCard.Body, {
        children: [(0, _v1.jsx)(_v7.ContentCard.DefaultThumbnail, {
          background: "gray.200",
          children: (0, _v1.jsx)(_v8.FileThumbnailContent, {
            name: _v0,
            contentType: _v3
          })
        }), _v12 && (0, _v1.jsx)(_v4.Flex, {
          position: "absolute",
          top: "8px",
          left: "8px",
          onClick: _v0 => {
            _v0.stopPropagation();
          },
          children: (0, _v1.jsx)(_v7.ContentCard.SelectCheckbox, {
            size: "md"
          })
        }), _v9, (0, _v1.jsx)(_v7.ContentCard.VideoPrivacyBadge, {
          videoPrivacy: _v10,
          layout: "overlay",
          onClick: _v11
        })]
      }), (0, _v1.jsx)(_v7.ContentCard.Footer, {
        actions: _v8,
        avatar: null != _v4 ? void 0 : _v19,
        leadingIcon: _v4,
        title: _v0,
        subtitle: _v20,
        titleStyles: _v18
      })]
    });
  }]);
}