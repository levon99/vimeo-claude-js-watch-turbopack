{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["ColdStorageListPrivacyChip", 0, () => (0, _v1.jsxs)(_v3.Flex, {
    display: "inline-flex",
    alignItems: "center",
    gap: (0, _v4.rem)(4),
    height: (0, _v4.rem)(24),
    paddingX: (0, _v4.rem)(8),
    borderRadius: "xs",
    backgroundColor: "status-caution-secondary",
    color: "status-caution-primary",
    borderWidth: "0",
    width: "fit-content",
    children: [(0, _v1.jsx)(_v2.Box, {
      flexShrink: 0,
      lineHeight: 0,
      color: "status-caution-primary",
      children: (0, _v1.jsx)(_v6.CircleExclamation, {
        boxSize: "2xs",
        color: "status-caution-primary"
      })
    }), (0, _v1.jsx)(_v5.Text, {
      as: "span",
      variant: "body-sm",
      fontWeight: 500,
      color: "status-caution-primary",
      whiteSpace: "nowrap",
      children: (0, _v7.translate)({
        singular: "Locked",
        dictionary: {
          es: {
            singular: "Bloqueado"
          },
          "de-DE": {
            singular: "Gesperrt"
          },
          "fr-FR": {
            singular: "Verrouillé"
          },
          "ja-JP": {
            singular: "ロック済み"
          },
          "ko-KR": {
            singular: "잠김"
          },
          "pt-BR": {
            singular: "Bloqueado"
          },
          "zh-CN": {
            singular: "已锁定"
          }
        }
      })
    })]
  })], 0);
  var _v8 = _v0.i(0),
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
    href: _v11,
    isLocked: _v12 = !1,
    isSelectable: _v13,
    isSelected: _v14 = !1,
    onClick: _v15,
    onToggleSelected: _v16,
    hoverActions: _v17,
    menuButton: _v18,
    type: _v19,
    selectedItemURIs: _v20,
    onDragBegin: _v21,
    onDragEnd: _v22,
    isPrivateToUser: _v23 = !1,
    canDrag: _v24,
    pageName: _v25,
    v2PageName: _v26,
    clipId: _v27,
    canRename: _v28 = !1,
    lockedTooltipLabel: _v29,
    onLockedClick: _v30
  }) => {
    let [_v31, _v32] = (0, _v8.useState)(!1),
      [_v33, _v34] = (0, _v8.useState)(_v0),
      {
        settings: _v35
      } = (0, _v15.useOrionSettings)(),
      _v36 = () => {
        _v32(!0);
      },
      _v37 = _v28 && _v35.enable_rename_video,
      _v38 = _v18 && _v37 ? _v8.default.cloneElement(_v18, {
        onRename: _v36
      }) : _v18,
      _v39 = _v17 && _v37 ? _v8.default.cloneElement(_v17, {
        onRename: _v36
      }) : _v17,
      {
        isDragging: _v40,
        dragRef: _v41,
        preview: _v42,
        getEmptyImage: _v43
      } = (0, _v20.useDragFolderItem)(_v19, _v6, _v7, _v4, _v14, _v20, _v22, _v23, _v21);
    (0, _v8.useEffect)(() => {
      _v42(_v43());
    }, []), (0, _v8.useEffect)(() => {
      _v40 && _v21?.();
    }, [_v40]);
    let _v44 = _v18.BPAnalyticsV2.useContentManagamentHoverEvent();
    return (0, _v1.jsxs)(_v14.ContentRow, {
      isDragging: _v40,
      dragDropRef: _v24 ? _v41 : void 0,
      listGridColumns: `${(0, _v4.rem)(32)} ${(0, _v4.rem)(150)} 8fr 0.2fr`,
      sx: _v17.responsiveRowSx,
      isSelected: _v14,
      onToggleSelected: _v16,
      cursor: "pointer",
      onClick: _v0 => {
        _v15?.(_v0), _v12 && _v30 && (_v0.preventDefault(), _v0.stopPropagation(), _v30());
      },
      onMouseEnter: () => {
        _v44({
          entityType: "video",
          pageName: _v26
        });
      },
      children: [(0, _v1.jsx)(_v14.ContentRow.Column, {
        hideAtWidth: _v12.bokehTheme.breakpoints.md,
        children: _v13 && (0, _v1.jsx)(_v14.ContentRow.SelectCheckbox, {
          size: "md"
        })
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        href: _v11,
        onClick: () => {
          _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 151, {
            copy: "",
            feature: "video_library",
            location: "video_card",
            name: "video_card_thumbnail",
            page: _v25 ?? "",
            path: null,
            target: _v11 ?? null,
            target_path: null,
            type: "general",
            click_type: null,
            device_type: null,
            third_party_integration: null
          }));
        },
        "data-testid": "row-thumbnail",
        overflow: _v12 && _v29 ? "visible" : void 0,
        children: _v12 && _v29 ? (0, _v1.jsx)(_v13.ColdStorageThumbTooltip, {
          label: _v29,
          layout: "list",
          triggerScope: "self",
          children: (0, _v1.jsx)(_v2.Box, {
            display: "inline-block",
            width: "fit-content",
            children: _v3
          })
        }) : (0, _v1.jsx)(_v2.Box, {
          display: "block",
          children: _v3
        })
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        href: _v11,
        width: "100%",
        overflow: "auto",
        onClick: () => {
          _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 151, {
            copy: _v33,
            feature: "video_library",
            location: "video_card",
            name: "video_card_title",
            page: _v25 ?? "",
            path: null,
            target: _v11 ?? null,
            target_path: null,
            type: "general",
            click_type: null,
            device_type: null,
            third_party_integration: null
          }));
        },
        children: (0, _v1.jsxs)(_v3.Flex, {
          flexDir: "column",
          width: "100%",
          gap: (0, _v4.rem)(4),
          paddingLeft: (0, _v4.rem)(8),
          opacity: _v12 ? .6 : 1,
          children: [(0, _v1.jsx)(_v16.OverflowToolTip, {
            labelToolTip: _v33,
            children: _v37 && _v31 ? (0, _v1.jsx)(_v2.Box, {
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation();
              },
              width: "95%",
              children: (0, _v1.jsx)(_v21.VideoEditableTitle, {
                videoId: _v27 ?? 0,
                isEditing: _v31,
                setCurrentTitle: _v34,
                setIsEditingContentTitle: _v32,
                value: _v33
              })
            }) : (0, _v1.jsx)(_v5.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "block",
              "data-testid": "row-title",
              children: _v33
            })
          }), !_v31 && _v1 && (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            color: "text-secondary",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            children: _v1
          })]
        })
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        href: _v11,
        hideAtWidth: _v12.bokehTheme.breakpoints.xl,
        children: (0, _v1.jsx)(_v3.Flex, {
          alignItems: "center",
          children: "string" == typeof _v5 || "number" == typeof _v5 ? (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            marginRight: "10px",
            color: "text-secondary",
            opacity: _v12 ? .6 : 1,
            "data-testid": "row-privacy",
            children: _v5
          }) : (0, _v1.jsx)(_v2.Box, {
            "data-testid": "row-privacy",
            children: _v5
          })
        })
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        href: _v11,
        hideAtWidth: _v19.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
        children: _v8 && (0, _v1.jsxs)(_v5.Text, {
          variant: "body-md",
          color: "text-secondary",
          "data-testid": "row-filesize",
          children: [(0, _v1.jsx)(_v2.Box, {
            as: "span",
            children: _v9
          }), !!_v10 && !_v12 && (0, _v1.jsx)(_v10.Tooltip, {
            label: _v10,
            placement: "top",
            pointerEvents: "all",
            maxWidth: (0, _v4.rem)(265),
            offset: [16, 8],
            children: (0, _v1.jsx)("span", {
              children: (0, _v1.jsx)(_v11.InfoCircle, {
                position: "absolute",
                boxSize: "1rem",
                marginLeft: "sm",
                marginTop: "px"
              })
            })
          })]
        })
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        href: _v11,
        hideAtWidth: _v12.bokehTheme.breakpoints.lg,
        children: (0, _v1.jsx)(_v5.Text, {
          variant: "body-md",
          color: "text-secondary",
          opacity: _v12 ? .6 : 1,
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          overflow: "hidden",
          "data-testid": "row-date",
          children: _v2
        })
      }), (0, _v1.jsxs)(_v14.ContentRow.Column, {
        justifyColumn: "flex-end",
        children: [(0, _v1.jsx)(_v2.Box, {
          height: "md",
          children: _v38 && (0, _v1.jsx)(_v2.Box, {
            children: _v38
          })
        }), !_v31 && _v39]
      })]
    });
  }], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
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
    pageName: _v21,
    v2PageName: _v22,
    canRename: _v23 = !1
  }) => {
    let [_v24, _v25] = (0, _v8.useState)(!1),
      [_v26, _v27] = (0, _v8.useState)(_v0),
      {
        settings: _v28
      } = (0, _v15.useOrionSettings)(),
      _v29 = _v18.BPAnalyticsV2.useContentManagamentHoverEvent(),
      {
        draggableItemIsHovering: _v30,
        dropRef: _v31
      } = (0, _v23.useDropFolder)({
        dropTargetType: _v18,
        dropTarget: _v17,
        allowedDropEffect: _v19,
        dropFileForUploadConfig: _v20
      }),
      _v32 = () => {
        _v25(!0);
      },
      _v33 = _v23 && _v28.enable_rename_folder,
      _v34 = _v16 && _v33 ? _v8.default.cloneElement(_v16, {
        onRename: _v32
      }) : _v16,
      _v35 = _v15 && _v33 ? _v8.default.cloneElement(_v15, {
        onRename: _v32
      }) : _v15;
    return (0, _v1.jsxs)(_v14.ContentRow, {
      isDraggingOver: _v30,
      dragDropRef: _v31,
      listGridColumns: `${(0, _v4.rem)(32)} ${(0, _v4.rem)(150)} 8fr 0.2fr`,
      sx: _v17.responsiveRowSx,
      isSelected: _v12,
      onToggleSelected: _v14,
      cursor: "pointer",
      onClick: _v13,
      onMouseEnter: () => {
        _v29({
          entityType: "folder",
          pageName: _v22
        });
      },
      children: [(0, _v1.jsx)(_v14.ContentRow.Column, {
        hideAtWidth: _v12.bokehTheme.breakpoints.md,
        children: (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v30 && (0, _v1.jsx)(_v22.PlusSmall, {}), _v11 && (0, _v1.jsx)(_v14.ContentRow.SelectCheckbox, {
            size: "md"
          })]
        })
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        width: "100%",
        href: _v10,
        onClick: () => {
          _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 151, {
            copy: "",
            feature: "video_library",
            location: "folder_card",
            name: "folder_card_thumbnail",
            page: _v21 ?? "",
            path: null,
            target: _v10 ?? null,
            target_path: null,
            type: "general",
            click_type: null,
            device_type: null,
            third_party_integration: null
          }));
        },
        children: _v3
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        href: _v10,
        width: "100%",
        overflow: "auto",
        onClick: () => {
          _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 151, {
            copy: _v26,
            feature: "video_library",
            location: "folder_card",
            name: "folder_card_title",
            page: _v21 ?? "",
            path: null,
            target: _v10 ?? null,
            target_path: null,
            type: "general",
            click_type: null,
            device_type: null,
            third_party_integration: null
          }));
        },
        children: (0, _v1.jsxs)(_v3.Flex, {
          flexDir: "column",
          width: "100%",
          gap: (0, _v4.rem)(4),
          paddingLeft: (0, _v4.rem)(8),
          children: [(0, _v1.jsx)(_v16.OverflowToolTip, {
            labelToolTip: _v0,
            children: _v24 && _v33 ? (0, _v1.jsx)(_v2.Box, {
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation();
              },
              width: "95%",
              children: (0, _v1.jsx)(_v24.FolderEditableTitle, {
                folderId: _v8 ?? 0,
                folderOwnerId: _v9 ?? 0,
                isEditing: _v24,
                setCurrentTitle: _v27,
                setIsEditingContentTitle: _v25,
                value: _v26
              })
            }) : (0, _v1.jsx)(_v5.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "block",
              "data-testid": "title",
              children: _v26
            })
          }), !_v24 && _v1 && (0, _v1.jsx)(_v5.Text, {
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
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        href: _v10,
        hideAtWidth: _v12.bokehTheme.breakpoints.xl,
        children: (0, _v1.jsx)(_v3.Flex, {
          alignItems: "center",
          children: (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            marginRight: "10px",
            color: "text-secondary",
            "data-testid": "privacy",
            children: _v4
          })
        })
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        href: _v10,
        hideAtWidth: _v19.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
        children: _v5 && (0, _v1.jsxs)(_v5.Text, {
          variant: "body-md",
          color: "text-secondary",
          "data-testid": "filesize",
          children: [(0, _v1.jsx)(_v2.Box, {
            as: "span",
            children: _v6
          }), !!_v7 && (0, _v1.jsx)(_v10.Tooltip, {
            label: _v7,
            placement: "top",
            pointerEvents: "all",
            maxWidth: (0, _v4.rem)(265),
            offset: [16, 8],
            children: (0, _v1.jsx)("span", {
              children: (0, _v1.jsx)(_v11.InfoCircle, {
                position: "absolute",
                boxSize: "1rem",
                marginLeft: "sm",
                marginTop: "px"
              })
            })
          })]
        })
      }), (0, _v1.jsx)(_v14.ContentRow.Column, {
        href: _v10,
        hideAtWidth: _v12.bokehTheme.breakpoints.lg,
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
      }), (0, _v1.jsxs)(_v14.ContentRow.Column, {
        justifyColumn: "flex-end",
        children: [(0, _v1.jsx)(_v2.Box, {
          children: _v34
        }), !_v24 && _v35]
      })]
    });
  }], 0);
}