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
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
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
    pageName: _v26,
    v2PageName: _v27,
    clipId: _v28,
    canRename: _v29 = !1,
    lockedTooltipLabel: _v30,
    onLockedClick: _v31
  }) => {
    let [_v32, _v33] = (0, _v2.useState)(!1),
      [_v34, _v35] = (0, _v2.useState)(_v0),
      {
        settings: _v36
      } = (0, _v14.useOrionSettings)(),
      _v37 = (0, _v9.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500"),
      _v38 = () => {
        _v33(!0);
      },
      _v39 = _v29 && _v36.enable_rename_video,
      _v40 = _v19 && _v39 ? _v2.default.cloneElement(_v19, {
        onRename: _v38
      }) : _v19,
      _v41 = _v18 && _v39 ? _v2.default.cloneElement(_v18, {
        onRename: _v38
      }) : _v18,
      {
        isDragging: _v42,
        dragRef: _v43,
        preview: _v44,
        getEmptyImage: _v45
      } = (0, _v19.useDragFolderItem)(_v20, _v6, _v7, _v4, _v15, _v21, _v23, _v24, _v22);
    (0, _v2.useEffect)(() => {
      _v44(_v45());
    }, []), (0, _v2.useEffect)(() => {
      _v42 && _v22?.();
    }, [_v42]);
    let _v46 = _v17.BPAnalyticsV2.useContentManagamentHoverEvent();
    return (0, _v1.jsxs)(_v13.ContentRow, {
      isDragging: _v42,
      dragDropRef: _v25 ? _v43 : void 0,
      listGridColumns: `${(0, _v8.rem)(32)} ${(0, _v8.rem)(150)} 8fr 0.2fr`,
      sx: _v16.responsiveRowSx,
      isSelected: _v15,
      onToggleSelected: _v17,
      cursor: "pointer",
      onClick: _v0 => {
        _v16?.(_v0), _v13 && _v31 && (_v0.preventDefault(), _v0.stopPropagation(), _v31());
      },
      onMouseEnter: () => {
        _v46({
          entityType: "video",
          pageName: _v27
        });
      },
      children: [(0, _v1.jsx)(_v13.ContentRow.Column, {
        hideAtWidth: _v11.bokehTheme.breakpoints.md,
        children: _v14 && (0, _v1.jsx)(_v4.Box, {
          onClick: _v0 => _v0.stopPropagation(),
          children: (0, _v1.jsx)(_v13.ContentRow.SelectCheckbox, {
            size: "md"
          })
        })
      }), (0, _v1.jsx)(_v13.ContentRow.Column, {
        href: _v12,
        onClick: () => {
          _v3.BigPictureClient.sendEvent(new _v3.Event("vimeo.click", 151, {
            copy: "",
            feature: "video_library",
            location: "video_card",
            name: "video_card_thumbnail",
            page: _v26 ?? "",
            path: null,
            target: _v12 ?? null,
            target_path: null,
            type: "general",
            click_type: null,
            device_type: null,
            third_party_integration: null
          }));
        },
        "data-testid": "row-thumbnail",
        overflow: _v13 && _v30 ? "visible" : void 0,
        children: _v13 && _v30 ? (0, _v1.jsx)(_v12.ColdStorageThumbTooltip, {
          label: _v30,
          layout: "list",
          triggerScope: "self",
          children: (0, _v1.jsx)(_v4.Box, {
            display: "inline-block",
            width: "fit-content",
            children: _v3
          })
        }) : (0, _v1.jsx)(_v4.Box, {
          display: "block",
          children: _v3
        })
      }), (0, _v1.jsx)(_v13.ContentRow.Column, {
        href: _v12,
        width: "100%",
        overflow: "auto",
        onClick: () => {
          _v3.BigPictureClient.sendEvent(new _v3.Event("vimeo.click", 151, {
            copy: _v34,
            feature: "video_library",
            location: "video_card",
            name: "video_card_title",
            page: _v26 ?? "",
            path: null,
            target: _v12 ?? null,
            target_path: null,
            type: "general",
            click_type: null,
            device_type: null,
            third_party_integration: null
          }));
        },
        children: (0, _v1.jsxs)(_v5.Flex, {
          flexDir: "column",
          width: "100%",
          gap: (0, _v8.rem)(4),
          paddingLeft: (0, _v8.rem)(8),
          children: [(0, _v1.jsx)(_v15.OverflowToolTip, {
            labelToolTip: _v34,
            children: _v39 && _v32 ? (0, _v1.jsx)(_v4.Box, {
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation();
              },
              width: "95%",
              children: (0, _v1.jsx)(_v21.VideoEditableTitle, {
                videoId: _v28 ?? 0,
                isEditing: _v32,
                setCurrentTitle: _v35,
                setIsEditingContentTitle: _v33,
                value: _v34
              })
            }) : (0, _v1.jsx)(_v6.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "block",
              "data-testid": "row-title",
              ...(_v13 && {
                color: _v37
              }),
              children: _v34
            })
          }), !_v32 && _v1 && ("string" == typeof _v1 ? (0, _v1.jsx)(_v6.Text, {
            variant: "body-md",
            color: _v13 ? _v37 : "text-secondary",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            children: _v1
          }) : (0, _v1.jsx)(_v5.Flex, {
            alignItems: "center",
            minW: 0,
            children: _v1
          }))]
        })
      }), (0, _v1.jsx)(_v13.ContentRow.Column, {
        href: "string" == typeof _v5 || "number" == typeof _v5 ? _v12 : void 0,
        hideAtWidth: _v11.bokehTheme.breakpoints.xl,
        children: (0, _v1.jsx)(_v5.Flex, {
          alignItems: "center",
          children: "string" == typeof _v5 || "number" == typeof _v5 ? (0, _v1.jsx)(_v6.Text, {
            variant: "body-md",
            marginRight: "10px",
            color: _v13 ? _v37 : "text-secondary",
            "data-testid": "row-privacy",
            children: _v5
          }) : (0, _v1.jsx)(_v4.Box, {
            "data-testid": "row-privacy",
            children: _v5
          })
        })
      }), (0, _v1.jsx)(_v13.ContentRow.Column, {
        href: _v12,
        hideAtWidth: _v18.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
        children: _v8 && (0, _v1.jsxs)(_v6.Text, {
          variant: "body-md",
          color: _v13 ? _v37 : "text-secondary",
          "data-testid": "row-filesize",
          children: [(0, _v1.jsx)(_v4.Box, {
            as: "span",
            children: _v9
          }), !!_v10 && !_v13 && (0, _v1.jsx)(_v7.Tooltip, {
            label: _v10,
            placement: "top",
            pointerEvents: "all",
            maxWidth: (0, _v8.rem)(265),
            offset: [16, 8],
            children: (0, _v1.jsx)("span", {
              children: (0, _v1.jsx)(_v10.InfoCircle, {
                position: "absolute",
                boxSize: "1rem",
                marginLeft: "sm",
                marginTop: "px"
              })
            })
          }), _v11 && (0, _v1.jsx)(_v4.Box, {
            as: "span",
            marginLeft: "sm",
            children: (0, _v1.jsx)(_v20.ManagedStorageIndicator, {
              isDimmed: _v13
            })
          })]
        })
      }), (0, _v1.jsx)(_v13.ContentRow.Column, {
        href: _v12,
        hideAtWidth: _v11.bokehTheme.breakpoints.lg,
        children: (0, _v1.jsx)(_v6.Text, {
          variant: "body-md",
          color: _v13 ? _v37 : "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          overflow: "hidden",
          "data-testid": "row-date",
          children: _v2
        })
      }), (0, _v1.jsxs)(_v13.ContentRow.Column, {
        justifyColumn: "flex-end",
        children: [(0, _v1.jsx)(_v4.Box, {
          height: "md",
          children: _v40 && (0, _v1.jsx)(_v4.Box, {
            children: _v40
          })
        }), !_v32 && _v41]
      })]
    });
  }]);
}