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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["ListRow", 0, ({
    title: _v0,
    subTitle: _v1,
    timestamp: _v2,
    thumbnail: _v3,
    privacy: _v4,
    shouldShowFileSize: _v5 = !1,
    fileSize: _v6 = "—",
    fileSizeTooltip: _v7,
    isManagedStorage: _v8 = !1,
    location: _v9,
    href: _v10,
    isSelectable: _v11,
    isSelected: _v12,
    onClick: _v13,
    onMouseEnter: _v14,
    onToggleSelected: _v15,
    hoverActions: _v16,
    menuButton: _v17,
    shouldUseNextLink: _v18 = !0,
    isEditingContentTitle: _v19,
    editableTitle: _v20
  }) => (0, _v1.jsxs)(_v9.ContentRow, {
    listGridColumns: `${(0, _v6.rem)(32)} ${(0, _v6.rem)(150)} 8fr 0.2fr`,
    sx: _v9 ? _v11.responsiveRowSxWithLocation : _v11.responsiveRowSx,
    isSelected: _v12,
    onToggleSelected: _v15,
    cursor: "pointer",
    onClick: _v13,
    onMouseEnter: _v14,
    children: [(0, _v1.jsx)(_v9.ContentRow.Column, {
      hideAtWidth: _v8.bokehTheme.breakpoints.md,
      children: _v11 && (0, _v1.jsx)(_v9.ContentRow.SelectCheckbox, {
        size: "md"
      })
    }), (0, _v1.jsx)(_v9.ContentRow.Column, {
      href: _v10,
      shouldUseNextLink: _v18,
      "data-testid": "row-thumbnail",
      children: _v3
    }), (0, _v1.jsx)(_v9.ContentRow.Column, {
      href: _v10,
      shouldUseNextLink: _v18,
      width: "100%",
      overflow: "auto",
      children: (0, _v1.jsxs)(_v3.Flex, {
        flexDir: "column",
        width: "100%",
        gap: (0, _v6.rem)(4),
        paddingLeft: (0, _v6.rem)(8),
        children: [_v19 && _v20 ? (0, _v1.jsx)(_v2.Box, {
          onClick: _v0 => {
            _v0.preventDefault(), _v0.stopPropagation();
          },
          width: "100%",
          children: _v20
        }) : (0, _v1.jsx)(_v10.OverflowToolTip, {
          labelToolTip: _v0,
          children: (0, _v1.jsx)(_v4.Text, {
            variant: "heading-xs",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            "data-testid": "row-title",
            children: _v0
          })
        }), !_v19 && _v1 && ("string" == typeof _v1 ? (0, _v1.jsx)(_v4.Text, {
          variant: "body-md",
          color: "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          children: _v1
        }) : (0, _v1.jsx)(_v3.Flex, {
          alignItems: "center",
          gap: "2xs",
          children: _v1
        }))]
      })
    }), _v9 && (0, _v1.jsx)(_v9.ContentRow.Column, {
      href: _v9.href || _v10,
      shouldUseNextLink: _v18,
      hideAtWidth: _v8.bokehTheme.breakpoints.xl,
      width: "100%",
      overflow: "auto",
      onClick: _v9.href ? _v0 => {
        _v0.stopPropagation();
      } : void 0,
      children: (0, _v1.jsx)(_v3.Flex, {
        alignItems: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v4.Text, {
          "data-testid": "row-location",
          variant: "body-md",
          color: "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          _hover: _v9.href ? {
            textDecoration: "underline",
            color: "text-primary"
          } : void 0,
          children: _v9.name
        })
      })
    }), (0, _v1.jsx)(_v9.ContentRow.Column, {
      href: _v10,
      shouldUseNextLink: _v18,
      hideAtWidth: _v8.bokehTheme.breakpoints.xl,
      children: (0, _v1.jsx)(_v3.Flex, {
        alignItems: "center",
        children: (0, _v1.jsx)(_v4.Text, {
          "data-testid": "row-privacy",
          variant: "body-md",
          marginRight: "10px",
          color: "text-secondary",
          children: _v4
        })
      })
    }), (0, _v1.jsx)(_v9.ContentRow.Column, {
      href: _v10,
      shouldUseNextLink: _v18,
      hideAtWidth: _v12.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
      children: _v5 && (0, _v1.jsxs)(_v4.Text, {
        variant: "body-md",
        color: "text-secondary",
        "data-testid": "row-filesize",
        children: [(0, _v1.jsx)(_v2.Box, {
          as: "span",
          children: _v6
        }), !!_v7 && (0, _v1.jsx)(_v5.Tooltip, {
          label: _v7,
          placement: "top",
          pointerEvents: "all",
          maxWidth: (0, _v6.rem)(265),
          offset: [16, 8],
          children: (0, _v1.jsx)("span", {
            children: (0, _v1.jsx)(_v7.InfoCircle, {
              position: "absolute",
              boxSize: "1rem",
              marginLeft: "sm",
              marginTop: "px"
            })
          })
        }), _v8 && (0, _v1.jsx)(_v2.Box, {
          as: "span",
          marginLeft: "sm",
          children: (0, _v1.jsx)(_v13.ManagedStorageIndicator, {})
        })]
      })
    }), (0, _v1.jsx)(_v9.ContentRow.Column, {
      href: _v10,
      shouldUseNextLink: _v18,
      hideAtWidth: _v8.bokehTheme.breakpoints.lg,
      children: (0, _v1.jsx)(_v4.Text, {
        variant: "body-md",
        color: "text-secondary",
        noOfLines: 1,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        display: "block",
        overflow: "hidden",
        "data-testid": "row-date",
        children: _v2
      })
    }), (0, _v1.jsxs)(_v9.ContentRow.Column, {
      justifyColumn: "flex-end",
      children: [(0, _v1.jsx)(_v2.Box, {
        children: _v17
      }), _v16]
    })]
  })]);
}