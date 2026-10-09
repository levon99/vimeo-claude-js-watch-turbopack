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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["DroppableListFolder", 0, ({
    title: _v0,
    subTitle: _v1,
    timestamp: _v2,
    thumbnail: _v3,
    privacy: _v4,
    shouldShowFileSize: _v5 = !1,
    fileSize: _v6 = "—",
    fileSizeTooltip: _v7,
    folderId: _v8,
    folderOwnerId: _v9,
    href: _v10,
    isSelectable: _v11,
    isSelected: _v12,
    onClick: _v13,
    onToggleSelected: _v14,
    hoverActions: _v15,
    menuButton: _v16,
    dropTarget: _v17,
    dropTargetType: _v18,
    allowedDropEffect: _v19,
    dropFileForUploadConfig: _v20,
    canRename: _v21 = !1
  }) => {
    let [_v22, _v23] = (0, _v2.useState)(!1),
      [_v24, _v25] = (0, _v2.useState)(_v0),
      _v26 = (0, _v12.useOrionSetting)("enable_rename_folder"),
      {
        draggableItemIsHovering: _v27,
        dropRef: _v28
      } = (0, _v16.useDropFolder)({
        dropTargetType: _v18,
        dropTarget: _v17,
        allowedDropEffect: _v19,
        dropFileForUploadConfig: _v20
      }),
      _v29 = () => {
        _v23(!0);
      },
      _v30 = _v21 && _v26,
      _v31 = _v16 && _v30 ? _v2.default.cloneElement(_v16, {
        onRename: _v29
      }) : _v16,
      _v32 = _v15 && _v30 ? _v2.default.cloneElement(_v15, {
        onRename: _v29
      }) : _v15;
    return (0, _v1.jsxs)(_v11.ContentRow, {
      isDraggingOver: _v27,
      dragDropRef: _v28,
      listGridColumns: `${(0, _v7.rem)(32)} ${(0, _v7.rem)(150)} 8fr 0.2fr`,
      sx: _v14.responsiveRowSx,
      isSelected: _v12,
      onToggleSelected: _v14,
      cursor: "pointer",
      onClick: _v13,
      children: [(0, _v1.jsx)(_v11.ContentRow.Column, {
        hideAtWidth: _v10.bokehTheme.breakpoints.md,
        children: (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v27 && (0, _v1.jsx)(_v9.PlusSmall, {}), _v11 && (0, _v1.jsx)(_v11.ContentRow.SelectCheckbox, {
            size: "md"
          })]
        })
      }), (0, _v1.jsx)(_v11.ContentRow.Column, {
        width: "100%",
        href: _v10,
        children: _v3
      }), (0, _v1.jsx)(_v11.ContentRow.Column, {
        href: _v10,
        width: "100%",
        overflow: "auto",
        children: (0, _v1.jsxs)(_v4.Flex, {
          flexDir: "column",
          width: "100%",
          gap: (0, _v7.rem)(4),
          paddingLeft: (0, _v7.rem)(8),
          children: [(0, _v1.jsx)(_v13.OverflowToolTip, {
            labelToolTip: _v0,
            children: _v22 && _v30 ? (0, _v1.jsx)(_v3.Box, {
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation();
              },
              width: "95%",
              children: (0, _v1.jsx)(_v17.FolderEditableTitle, {
                folderId: _v8 ?? 0,
                folderOwnerId: _v9 ?? 0,
                isEditing: _v22,
                setCurrentTitle: _v25,
                setIsEditingContentTitle: _v23,
                value: _v24
              })
            }) : (0, _v1.jsx)(_v5.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "block",
              "data-testid": "title",
              children: _v24
            })
          }), !_v22 && _v1 && (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            color: "text-secondary",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            "data-testid": "folder-item-count",
            children: _v1
          })]
        })
      }), (0, _v1.jsx)(_v11.ContentRow.Column, {
        href: _v10,
        hideAtWidth: _v10.bokehTheme.breakpoints.xl,
        children: (0, _v1.jsx)(_v4.Flex, {
          alignItems: "center",
          children: (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            marginRight: "10px",
            color: "text-secondary",
            "data-testid": "privacy",
            children: _v4
          })
        })
      }), (0, _v1.jsx)(_v11.ContentRow.Column, {
        href: _v10,
        hideAtWidth: _v15.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
        children: _v5 && (0, _v1.jsxs)(_v5.Text, {
          variant: "body-md",
          color: "text-secondary",
          "data-testid": "filesize",
          children: [(0, _v1.jsx)(_v3.Box, {
            as: "span",
            children: _v6
          }), !!_v7 && (0, _v1.jsx)(_v6.Tooltip, {
            label: _v7,
            placement: "top",
            pointerEvents: "all",
            maxWidth: (0, _v7.rem)(265),
            offset: [16, 8],
            children: (0, _v1.jsx)("span", {
              children: (0, _v1.jsx)(_v8.InfoCircle, {
                position: "absolute",
                boxSize: "1rem",
                marginLeft: "sm",
                marginTop: "px"
              })
            })
          })]
        })
      }), (0, _v1.jsx)(_v11.ContentRow.Column, {
        href: _v10,
        hideAtWidth: _v10.bokehTheme.breakpoints.lg,
        children: (0, _v1.jsx)(_v5.Text, {
          variant: "body-md",
          color: "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          overflow: "hidden",
          "data-testid": "date",
          children: _v2
        })
      }), (0, _v1.jsxs)(_v11.ContentRow.Column, {
        justifyColumn: "flex-end",
        children: [(0, _v1.jsx)(_v3.Box, {
          children: _v31
        }), !_v22 && _v32]
      })]
    });
  }]);
}