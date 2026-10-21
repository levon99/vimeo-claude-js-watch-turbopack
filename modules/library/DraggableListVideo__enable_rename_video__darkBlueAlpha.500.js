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
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  _v0.s(["DraggableListVideo", 0, ({
    title: _v0,
    subTitle: _v1,
    timestamp: _v2,
    thumbnail: _v3,
    thumbnailSrc: _v4,
    privacy: _v5,
    uri: _v6,
    parentFolderUri: _v7,
    shouldShowFileSize: _v8 = !1,
    fileSize: _v9 = "—",
    fileSizeTooltip: _v10,
    isManagedStorage: _v11 = !1,
    href: _v12,
    isLocked: _v13 = !1,
    isSelectable: _v14,
    isSelected: _v15 = !1,
    onClick: _v16,
    onToggleSelected: _v17,
    hoverActions: _v18,
    menuButton: _v19,
    type: _v20,
    selectedItemURIs: _v21,
    onDragBegin: _v22,
    onDragEnd: _v23,
    isPrivateToUser: _v24 = !1,
    canDrag: _v25,
    clipId: _v26,
    canRename: _v27 = !1,
    lockedTooltipLabel: _v28,
    onLockedClick: _v29
  }) => {
    let [_v30, _v31] = (0, _v2.useState)(!1),
      [_v32, _v33] = (0, _v2.useState)(_v0),
      _v34 = (0, _v13.useOrionSetting)("enable_rename_video"),
      _v35 = (0, _v8.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500"),
      _v36 = () => {
        _v31(!0);
      },
      _v37 = _v27 && _v34,
      _v38 = _v19 && _v37 ? _v2.default.cloneElement(_v19, {
        onRename: _v36
      }) : _v19,
      _v39 = _v18 && _v37 ? _v2.default.cloneElement(_v18, {
        onRename: _v36
      }) : _v18,
      {
        isDragging: _v40,
        dragRef: _v41,
        preview: _v42,
        getEmptyImage: _v43
      } = (0, _v17.useDragFolderItem)(_v20, _v6, _v7, _v4, _v15, _v21, _v23, _v24, _v22);
    return (0, _v2.useEffect)(() => {
      _v42(_v43());
    }, []), (0, _v2.useEffect)(() => {
      _v40 && _v22?.();
    }, [_v40]), (0, _v1.jsxs)(_v12.ContentRow, {
      isDragging: _v40,
      dragDropRef: _v25 ? _v41 : void 0,
      listGridColumns: `${(0, _v7.rem)(32)} ${(0, _v7.rem)(150)} 8fr 0.2fr`,
      sx: _v15.responsiveRowSx,
      isSelected: _v15,
      onToggleSelected: _v17,
      cursor: "pointer",
      onClick: _v0 => {
        _v16?.(_v0), _v13 && _v29 && (_v0.preventDefault(), _v0.stopPropagation(), _v29());
      },
      children: [(0, _v1.jsx)(_v12.ContentRow.Column, {
        hideAtWidth: _v10.bokehTheme.breakpoints.md,
        children: _v14 && (0, _v1.jsx)(_v3.Box, {
          onClick: _v0 => _v0.stopPropagation(),
          children: (0, _v1.jsx)(_v12.ContentRow.SelectCheckbox, {
            size: "md"
          })
        })
      }), (0, _v1.jsx)(_v12.ContentRow.Column, {
        href: _v12,
        "data-testid": "row-thumbnail",
        overflow: _v13 && _v28 ? "visible" : void 0,
        children: _v13 && _v28 ? (0, _v1.jsx)(_v11.ColdStorageThumbTooltip, {
          label: _v28,
          layout: "list",
          triggerScope: "self",
          children: (0, _v1.jsx)(_v3.Box, {
            display: "inline-block",
            width: "fit-content",
            children: _v3
          })
        }) : (0, _v1.jsx)(_v3.Box, {
          display: "block",
          children: _v3
        })
      }), (0, _v1.jsx)(_v12.ContentRow.Column, {
        href: _v12,
        width: "100%",
        overflow: "auto",
        children: (0, _v1.jsxs)(_v4.Flex, {
          flexDir: "column",
          width: "100%",
          gap: (0, _v7.rem)(4),
          paddingLeft: (0, _v7.rem)(8),
          children: [(0, _v1.jsx)(_v14.OverflowToolTip, {
            labelToolTip: _v32,
            children: _v37 && _v30 ? (0, _v1.jsx)(_v3.Box, {
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation();
              },
              width: "95%",
              children: (0, _v1.jsx)(_v19.VideoEditableTitle, {
                videoId: _v26 ?? 0,
                isEditing: _v30,
                setCurrentTitle: _v33,
                setIsEditingContentTitle: _v31,
                value: _v32
              })
            }) : (0, _v1.jsx)(_v5.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "block",
              "data-testid": "row-title",
              ...(_v13 && {
                color: _v35
              }),
              children: _v32
            })
          }), !_v30 && _v1 && ("string" == typeof _v1 ? (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            color: _v13 ? _v35 : "text-secondary",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            children: _v1
          }) : (0, _v1.jsx)(_v4.Flex, {
            alignItems: "center",
            minW: 0,
            children: _v1
          }))]
        })
      }), (0, _v1.jsx)(_v12.ContentRow.Column, {
        href: "string" == typeof _v5 || "number" == typeof _v5 ? _v12 : void 0,
        hideAtWidth: _v10.bokehTheme.breakpoints.xl,
        children: (0, _v1.jsx)(_v4.Flex, {
          alignItems: "center",
          children: "string" == typeof _v5 || "number" == typeof _v5 ? (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            marginRight: "10px",
            color: _v13 ? _v35 : "text-secondary",
            "data-testid": "row-privacy",
            children: _v5
          }) : (0, _v1.jsx)(_v3.Box, {
            "data-testid": "row-privacy",
            children: _v5
          })
        })
      }), (0, _v1.jsx)(_v12.ContentRow.Column, {
        href: _v12,
        hideAtWidth: _v16.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
        children: _v8 && (0, _v1.jsxs)(_v5.Text, {
          variant: "body-md",
          color: _v13 ? _v35 : "text-secondary",
          "data-testid": "row-filesize",
          children: [(0, _v1.jsx)(_v3.Box, {
            as: "span",
            children: _v9
          }), !!_v10 && !_v13 && (0, _v1.jsx)(_v6.Tooltip, {
            label: _v10,
            placement: "top",
            pointerEvents: "all",
            maxWidth: (0, _v7.rem)(265),
            offset: [16, 8],
            children: (0, _v1.jsx)(_v3.Box, {
              as: "span",
              alignItems: "center",
              display: "inline-flex",
              justifyContent: "center",
              lineHeight: 0,
              marginLeft: "sm",
              position: "relative",
              top: (0, _v7.rem)(-2),
              verticalAlign: "middle",
              children: (0, _v1.jsx)(_v9.InfoCircle, {
                boxSize: "1rem"
              })
            })
          }), _v11 && (0, _v1.jsx)(_v3.Box, {
            as: "span",
            marginLeft: "sm",
            children: (0, _v1.jsx)(_v18.ManagedStorageIndicator, {
              isDimmed: _v13
            })
          })]
        })
      }), (0, _v1.jsx)(_v12.ContentRow.Column, {
        href: _v12,
        hideAtWidth: _v10.bokehTheme.breakpoints.lg,
        children: (0, _v1.jsx)(_v5.Text, {
          variant: "body-md",
          color: _v13 ? _v35 : "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          overflow: "hidden",
          "data-testid": "row-date",
          children: _v2
        })
      }), (0, _v1.jsxs)(_v12.ContentRow.Column, {
        justifyColumn: "flex-end",
        children: [(0, _v1.jsx)(_v3.Box, {
          height: "md",
          children: _v38 && (0, _v1.jsx)(_v3.Box, {
            children: _v38
          })
        }), !_v30 && _v39]
      })]
    });
  }]);
}