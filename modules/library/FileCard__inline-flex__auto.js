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
    isSelectable: _v10 = !1,
    isSelected: _v11 = !1,
    onToggleSelected: _v12,
    onClick: _v13,
    onMouseEnter: _v14,
    width: _v15,
    titleStyles: _v16
  }) => {
    let _v17;
    if (_v5 && (_v7 || null == _v4)) {
      let _v0 = (0, _v1.jsx)(_v2.Avatar, {
        alt: _v6 ?? "",
        size: "xs",
        src: _v5,
        nameProps: {
          name: _v6 ?? ""
        }
      });
      _v17 = _v6 ? (0, _v1.jsx)(_v6.Tooltip, {
        label: _v6,
        children: (0, _v1.jsx)(_v3.Box, {
          display: "inline-flex",
          pointerEvents: "auto",
          children: _v0
        })
      }) : _v0;
    }
    let _v18 = _v7 && null != _v17 ? (0, _v1.jsxs)(_v4.Flex, {
      alignItems: "center",
      gap: "xs",
      children: [_v17, null != _v1 && "" !== _v1 && (0, _v1.jsx)(_v5.Text, {
        variant: "body-sm",
        color: "text-tertiary",
        noOfLines: 1,
        children: `\xb7 ${_v1}`
      })]
    }) : _v1;
    return (0, _v1.jsxs)(_v7.ContentCard, {
      href: _v2,
      onClick: _v13,
      onMouseEnter: _v14,
      onToggleSelected: _v12,
      isSelected: _v11,
      width: _v15,
      ariaLabel: "File card",
      children: [(0, _v1.jsxs)(_v7.ContentCard.Body, {
        children: [(0, _v1.jsx)(_v7.ContentCard.DefaultThumbnail, {
          background: "gray.200",
          children: (0, _v1.jsx)(_v8.FileThumbnailContent, {
            name: _v0,
            contentType: _v3
          })
        }), _v10 && (0, _v1.jsx)(_v4.Flex, {
          position: "absolute",
          top: "8px",
          left: "8px",
          onClick: _v0 => {
            _v0.stopPropagation();
          },
          children: (0, _v1.jsx)(_v7.ContentCard.SelectCheckbox, {
            size: "md"
          })
        }), _v9]
      }), (0, _v1.jsx)(_v7.ContentCard.Footer, {
        actions: _v8,
        avatar: null != _v4 ? void 0 : _v17,
        leadingIcon: _v4,
        title: _v0,
        subtitle: _v18,
        titleStyles: _v16
      })]
    });
  }]);
}