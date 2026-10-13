{
  "use strict";

  var _v1,
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
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  class _v33 {
    beginDrag() {
      let _v0 = this.spec,
        _v1 = this.monitor,
        _v2 = null;
      return null != (_v2 = "object" == typeof _v0.item ? _v0.item : "function" == typeof _v0.item ? _v0.item(_v1) : {}) ? _v2 : null;
    }
    canDrag() {
      let _v0 = this.spec,
        _v1 = this.monitor;
      return "boolean" == typeof _v0.canDrag ? _v0.canDrag : "function" != typeof _v0.canDrag || _v0.canDrag(_v1);
    }
    isDragging(_v0, _v1) {
      let _v2 = this.spec,
        _v3 = this.monitor,
        {
          isDragging: _v4
        } = _v2;
      return _v4 ? _v4(_v3) : _v1 === _v0.getSourceId();
    }
    endDrag() {
      let _v0 = this.spec,
        _v1 = this.monitor,
        _v2 = this.connector,
        {
          end: _v3
        } = _v0;
      _v3 && _v3(_v1.getItem(), _v1), _v2.reconnect();
    }
    constructor(_v0, _v1, _v2) {
      this.spec = _v0, this.monitor = _v1, this.connector = _v2;
    }
  }
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = !1,
    _v38 = !1;
  class _v39 {
    receiveHandlerId(_v0) {
      this.sourceId = _v0;
    }
    getHandlerId() {
      return this.sourceId;
    }
    canDrag() {
      (0, _v35.invariant)(!_v37, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return _v37 = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        _v37 = !1;
      }
    }
    isDragging() {
      if (!this.sourceId) return !1;
      (0, _v35.invariant)(!_v38, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return _v38 = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        _v38 = !1;
      }
    }
    subscribeToStateChange(_v0, _v1) {
      return this.internalMonitor.subscribeToStateChange(_v0, _v1);
    }
    isDraggingSource(_v0) {
      return this.internalMonitor.isDraggingSource(_v0);
    }
    isOverTarget(_v0, _v1) {
      return this.internalMonitor.isOverTarget(_v0, _v1);
    }
    getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
    isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
    getSourceId() {
      return this.internalMonitor.getSourceId();
    }
    subscribeToOffsetChange(_v0) {
      return this.internalMonitor.subscribeToOffsetChange(_v0);
    }
    canDragSource(_v0) {
      return this.internalMonitor.canDragSource(_v0);
    }
    canDropOnTarget(_v0) {
      return this.internalMonitor.canDropOnTarget(_v0);
    }
    getItemType() {
      return this.internalMonitor.getItemType();
    }
    getItem() {
      return this.internalMonitor.getItem();
    }
    getDropResult() {
      return this.internalMonitor.getDropResult();
    }
    didDrop() {
      return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(_v0) {
      this.sourceId = null, this.internalMonitor = _v0.getMonitor();
    }
  }
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  class _v43 {
    receiveHandlerId(_v0) {
      this.handlerId !== _v0 && (this.handlerId = _v0, this.reconnect());
    }
    get connectTarget() {
      return this.dragSource;
    }
    get dragSourceOptions() {
      return this.dragSourceOptionsInternal;
    }
    set dragSourceOptions(_v0) {
      this.dragSourceOptionsInternal = _v0;
    }
    get dragPreviewOptions() {
      return this.dragPreviewOptionsInternal;
    }
    set dragPreviewOptions(_v0) {
      this.dragPreviewOptionsInternal = _v0;
    }
    reconnect() {
      let _v0 = this.reconnectDragSource();
      this.reconnectDragPreview(_v0);
    }
    reconnectDragSource() {
      let _v0 = this.dragSource,
        _v1 = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      return _v1 && this.disconnectDragSource(), this.handlerId && (_v0 ? _v1 && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = _v0, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, _v0, this.dragSourceOptions)) : this.lastConnectedDragSource = _v0), _v1;
    }
    reconnectDragPreview(_v0 = !1) {
      let _v1 = this.dragPreview,
        _v2 = _v0 || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (_v2 && this.disconnectDragPreview(), this.handlerId) {
        if (!_v1) {
          this.lastConnectedDragPreview = _v1;
          return;
        }
        _v2 && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = _v1, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, _v1, this.dragPreviewOptions));
      }
    }
    didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
    didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
    didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
    didDragSourceOptionsChange() {
      return !(0, _v42.shallowEqual)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
      return !(0, _v42.shallowEqual)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
    disconnectDragSource() {
      this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
    }
    disconnectDragPreview() {
      this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
    }
    get dragSource() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
    get dragPreview() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
    clearDragSource() {
      this.dragSourceNode = null, this.dragSourceRef = null;
    }
    clearDragPreview() {
      this.dragPreviewNode = null, this.dragPreviewRef = null;
    }
    constructor(_v0) {
      this.hooks = (0, _v40.wrapConnectorHooks)({
        dragSource: (_v0, _v1) => {
          this.clearDragSource(), this.dragSourceOptions = _v1 || null, (0, _v41.isRef)(_v0) ? this.dragSourceRef = _v0 : this.dragSourceNode = _v0, this.reconnectDragSource();
        },
        dragPreview: (_v0, _v1) => {
          this.clearDragPreview(), this.dragPreviewOptions = _v1 || null, (0, _v41.isRef)(_v0) ? this.dragPreviewRef = _v0 : this.dragPreviewNode = _v0, this.reconnectDragPreview();
        }
      }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = _v0;
    }
  }
  var _v44 = _v0.i(0);
  function _v45() {
    return _v1 || ((_v1 = new Image()).src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), _v1;
  }
  let _v46 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) => {
    var _v9, _v10, _v11, _v12;
    let _v13,
      _v14,
      _v15,
      _v16,
      _v17,
      _v18,
      _v19,
      _v20,
      _v21,
      _v22,
      [{
        isDragging: _v23
      }, _v24, _v25] = (_v9 = () => ({
        type: _v0,
        item: () => {
          let _v0 = {};
          return _v5.size > 0 && _v4 ? _v0 = Array.from(_v5).reduce((_v0, _v1) => (_v0[_v1] = {
            thumbnail: _v3,
            parentFolderUri: _v2,
            isPrivateToUser: _v7
          }, _v0), {}) : _v0[_v1] = {
            thumbnail: _v3,
            parentFolderUri: _v2,
            isPrivateToUser: _v7
          }, _v0;
        },
        end(_v0, _v1) {
          if (_v8?.(!0), _v0 && _v1.didDrop()) {
            let _v0 = _v1.getDropResult(),
              _v1 = Object.keys(_v1.getItem()).map(_v0 => ({
                uri: _v0
              }));
            _v6({
              dropTarget: _v0.dropTarget,
              items: _v1
            });
          }
        },
        collect: _v0 => ({
          isDragging: _v0.isDragging()
        })
      }), _v10 = [_v1, _v5, _v4], _v13 = (0, _v36.useOptionalFactory)(_v9, _v10), (0, _v35.invariant)(!_v13.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)"), _v14 = (0, _v34.useDragDropManager)(), _v15 = (0, _v3.useMemo)(() => new _v39(_v14), [_v14]), _v11 = _v13.options, _v12 = _v13.previewOptions, _v16 = (0, _v34.useDragDropManager)(), _v17 = (0, _v3.useMemo)(() => new _v43(_v16.getBackend()), [_v16]), (0, _v32.useIsomorphicLayoutEffect)(() => (_v17.dragSourceOptions = _v11 || null, _v17.reconnect(), () => _v17.disconnectDragSource()), [_v17, _v11]), (0, _v32.useIsomorphicLayoutEffect)(() => (_v17.dragPreviewOptions = _v12 || null, _v17.reconnect(), () => _v17.disconnectDragPreview()), [_v17, _v12]), _v18 = _v17, _v19 = (0, _v34.useDragDropManager)(), _v20 = (0, _v3.useMemo)(() => new _v33(_v13, _v15, _v18), [_v15, _v18]), (0, _v3.useEffect)(() => {
        _v20.spec = _v13;
      }, [_v13]), _v21 = _v20, _v22 = (0, _v3.useMemo)(() => {
        let _v0 = _v13.type;
        return (0, _v35.invariant)(null != _v0, "spec.type must be defined"), _v0;
      }, [_v13]), (0, _v32.useIsomorphicLayoutEffect)(function () {
        if (null != _v22) {
          let [_v0, _v1] = (0, _v31.registerSource)(_v22, _v21, _v19);
          return _v15.receiveHandlerId(_v0), _v18.receiveHandlerId(_v0), _v1;
        }
      }, [_v19, _v15, _v18, _v21, _v22]), [(0, _v44.useCollectedProps)(_v13.collect, _v15, _v18), (0, _v3.useMemo)(() => _v18.hooks.dragSource(), [_v18]), (0, _v3.useMemo)(() => _v18.hooks.dragPreview(), [_v18])]);
    return {
      isDragging: _v23,
      dragRef: _v24,
      preview: _v25,
      getEmptyImage: _v45
    };
  };
  _v0.s(["useDragFolderItem", 0, _v46], 0);
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = ({
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
    let [_v30, _v31] = (0, _v3.useState)(!1),
      [_v32, _v33] = (0, _v3.useState)(_v0),
      _v34 = (0, _v28.useOrionSetting)("enable_rename_video"),
      _v35 = (0, _v23.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500"),
      _v36 = () => {
        _v31(!0);
      },
      _v37 = _v27 && _v34,
      _v38 = _v19 && _v37 ? _v3.default.cloneElement(_v19, {
        onRename: _v36
      }) : _v19,
      _v39 = _v18 && _v37 ? _v3.default.cloneElement(_v18, {
        onRename: _v36
      }) : _v18,
      {
        isDragging: _v40,
        dragRef: _v41,
        preview: _v42,
        getEmptyImage: _v43
      } = _v46(_v20, _v6, _v7, _v4, _v15, _v21, _v23, _v24, _v22);
    return (0, _v3.useEffect)(() => {
      _v42(_v43());
    }, []), (0, _v3.useEffect)(() => {
      _v40 && _v22?.();
    }, [_v40]), (0, _v2.jsxs)(_v27.ContentRow, {
      isDragging: _v40,
      dragDropRef: _v25 ? _v41 : void 0,
      listGridColumns: `${(0, _v22.rem)(32)} ${(0, _v22.rem)(150)} 8fr 0.2fr`,
      sx: _v30.responsiveRowSx,
      isSelected: _v15,
      onToggleSelected: _v17,
      cursor: "pointer",
      onClick: _v0 => {
        _v16?.(_v0), _v13 && _v29 && (_v0.preventDefault(), _v0.stopPropagation(), _v29());
      },
      children: [(0, _v2.jsx)(_v27.ContentRow.Column, {
        hideAtWidth: _v25.bokehTheme.breakpoints.md,
        children: _v14 && (0, _v2.jsx)(_v4.Box, {
          onClick: _v0 => _v0.stopPropagation(),
          children: (0, _v2.jsx)(_v27.ContentRow.SelectCheckbox, {
            size: "md"
          })
        })
      }), (0, _v2.jsx)(_v27.ContentRow.Column, {
        href: _v12,
        "data-testid": "row-thumbnail",
        overflow: _v13 && _v28 ? "visible" : void 0,
        children: _v13 && _v28 ? (0, _v2.jsx)(_v26.ColdStorageThumbTooltip, {
          label: _v28,
          layout: "list",
          triggerScope: "self",
          children: (0, _v2.jsx)(_v4.Box, {
            display: "inline-block",
            width: "fit-content",
            children: _v3
          })
        }) : (0, _v2.jsx)(_v4.Box, {
          display: "block",
          children: _v3
        })
      }), (0, _v2.jsx)(_v27.ContentRow.Column, {
        href: _v12,
        width: "100%",
        overflow: "auto",
        children: (0, _v2.jsxs)(_v5.Flex, {
          flexDir: "column",
          width: "100%",
          gap: (0, _v22.rem)(4),
          paddingLeft: (0, _v22.rem)(8),
          children: [(0, _v2.jsx)(_v29.OverflowToolTip, {
            labelToolTip: _v32,
            children: _v37 && _v30 ? (0, _v2.jsx)(_v4.Box, {
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation();
              },
              width: "95%",
              children: (0, _v2.jsx)(_v48.VideoEditableTitle, {
                videoId: _v26 ?? 0,
                isEditing: _v30,
                setCurrentTitle: _v33,
                setIsEditingContentTitle: _v31,
                value: _v32
              })
            }) : (0, _v2.jsx)(_v9.Text, {
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
          }), !_v30 && _v1 && ("string" == typeof _v1 ? (0, _v2.jsx)(_v9.Text, {
            variant: "body-md",
            color: _v13 ? _v35 : "text-secondary",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            children: _v1
          }) : (0, _v2.jsx)(_v5.Flex, {
            alignItems: "center",
            minW: 0,
            children: _v1
          }))]
        })
      }), (0, _v2.jsx)(_v27.ContentRow.Column, {
        href: "string" == typeof _v5 || "number" == typeof _v5 ? _v12 : void 0,
        hideAtWidth: _v25.bokehTheme.breakpoints.xl,
        children: (0, _v2.jsx)(_v5.Flex, {
          alignItems: "center",
          children: "string" == typeof _v5 || "number" == typeof _v5 ? (0, _v2.jsx)(_v9.Text, {
            variant: "body-md",
            marginRight: "10px",
            color: _v13 ? _v35 : "text-secondary",
            "data-testid": "row-privacy",
            children: _v5
          }) : (0, _v2.jsx)(_v4.Box, {
            "data-testid": "row-privacy",
            children: _v5
          })
        })
      }), (0, _v2.jsx)(_v27.ContentRow.Column, {
        href: _v12,
        hideAtWidth: _v19.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
        children: _v8 && (0, _v2.jsxs)(_v9.Text, {
          variant: "body-md",
          color: _v13 ? _v35 : "text-secondary",
          "data-testid": "row-filesize",
          children: [(0, _v2.jsx)(_v4.Box, {
            as: "span",
            children: _v9
          }), !!_v10 && !_v13 && (0, _v2.jsx)(_v21.Tooltip, {
            label: _v10,
            placement: "top",
            pointerEvents: "all",
            maxWidth: (0, _v22.rem)(265),
            offset: [16, 8],
            children: (0, _v2.jsx)("span", {
              children: (0, _v2.jsx)(_v24.InfoCircle, {
                position: "absolute",
                boxSize: "1rem",
                marginLeft: "sm",
                marginTop: "px"
              })
            })
          }), _v11 && (0, _v2.jsx)(_v4.Box, {
            as: "span",
            marginLeft: "sm",
            children: (0, _v2.jsx)(_v47.ManagedStorageIndicator, {
              isDimmed: _v13
            })
          })]
        })
      }), (0, _v2.jsx)(_v27.ContentRow.Column, {
        href: _v12,
        hideAtWidth: _v25.bokehTheme.breakpoints.lg,
        children: (0, _v2.jsx)(_v9.Text, {
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
      }), (0, _v2.jsxs)(_v27.ContentRow.Column, {
        justifyColumn: "flex-end",
        children: [(0, _v2.jsx)(_v4.Box, {
          height: "md",
          children: _v38 && (0, _v2.jsx)(_v4.Box, {
            children: _v38
          })
        }), !_v30 && _v39]
      })]
    });
  };
  _v0.s(["DraggableListVideo", 0, _v49], 0);
  let _v50 = ["uri", "name", "description", "link", "duration", "pictures", "configUrl"],
    _v51 = {
      Accept: "application/vnd.vimeo.*+json;version=3.4.1"
    },
    _v52 = new Set(),
    _v53 = {
      borderRadius: "var(--vimeo-radii-lg)",
      backgroundColor: "color-mix(in srgb, var(--vimeo-colors-fill-brand) 9%, var(--vimeo-colors-surface))",
      animation: "marketingCardGlow 2.6s ease-in-out infinite",
      "@keyframes marketingCardGlow": {
        "0%, 100%": {
          boxShadow: "0 0 0 1px color-mix(in srgb, var(--vimeo-colors-fill-brand) 55%, transparent), 0 0 12px 2px color-mix(in srgb, var(--vimeo-colors-fill-brand) 22%, transparent)"
        },
        "50%": {
          boxShadow: "0 0 0 1px color-mix(in srgb, var(--vimeo-colors-fill-brand) 75%, transparent), 0 0 22px 6px color-mix(in srgb, var(--vimeo-colors-fill-brand) 45%, transparent)"
        }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none",
        boxShadow: "0 0 0 1px color-mix(in srgb, var(--vimeo-colors-fill-brand) 60%, transparent), 0 0 16px 4px color-mix(in srgb, var(--vimeo-colors-fill-brand) 35%, transparent)"
      }
    },
    _v54 = {
      ..._v53,
      borderRadius: "var(--vimeo-radii-md)"
    },
    _v55 = () => (0, _v2.jsx)(_v5.Flex, {
      "aria-hidden": "true",
      flexShrink: 0,
      boxSize: "24px",
      borderRadius: "full",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--vimeo-colors-fill-brand)",
      children: (0, _v2.jsx)(_v11.VimeoV, {
        boxSize: "13px",
        color: "var(--vimeo-colors-white)"
      })
    });
  _v0.s(["MarketingVideoCard", 0, ({
    variant: _v0,
    videoId: _v1,
    entryPoint: _v2,
    onDismiss: _v3
  }) => {
    var _v4;
    let {
        trackLibraryMarketingCardDisplayed: _v5,
        trackLibraryMarketingCardClicked: _v6,
        trackLibraryMarketingCardDismissed: _v7
      } = (0, _v18.useLibraryTracking)(),
      _v8 = Number(_v1),
      {
        data: _v9,
        isLoading: _v10
      } = (0, _v16.useGetVideo)(() => Number.isFinite(_v8) && "" !== _v1 ? {
        where: {
          videoId: _v8
        },
        select: _v50,
        headers: _v51
      } : null),
      [_v11, _v12] = (0, _v3.useState)(!1),
      [_v13, _v14] = (0, _v3.useState)(!1),
      _v15 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      !_v15.current && _v9 && (_v15.current = !0, _v5({
        videoId: _v1,
        entryPoint: _v2
      }));
    }, [_v9, _v1, _v2, _v5]);
    let _v16 = _v9?.link ?? "",
      _v17 = _v9?.name ?? "",
      _v18 = (_v4 = _v9?.pictures?.sizes) && 0 !== _v4.length ? _v4[3]?.link ?? _v4[_v4.length - 1]?.link ?? "" : "",
      _v19 = _v9?.pictures?.defaultPicture ?? !_v18,
      _v20 = _v9?.configUrl ?? "",
      _v21 = _v9?.duration != null ? (0, _v15.secondsToDisplay)(_v9.duration) : "",
      _v22 = (0, _v17.translate)({
        singular: "From Vimeo",
        dictionary: {
          es: {
            singular: "Desde Vimeo"
          },
          "de-DE": {
            singular: "Von Vimeo"
          },
          "fr-FR": {
            singular: "De Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoから"
          },
          "ko-KR": {
            singular: "Vimeo에서"
          },
          "pt-BR": {
            singular: "Do Vimeo"
          },
          "zh-CN": {
            singular: "来自 Vimeo"
          }
        }
      }),
      _v23 = (0, _v17.translate)({
        singular: "Latest improvements",
        dictionary: {
          es: {
            singular: "Últimas mejoras"
          },
          "de-DE": {
            singular: "Neueste Verbesserungen"
          },
          "fr-FR": {
            singular: "Dernières améliorations"
          },
          "ja-JP": {
            singular: "最新の改善点"
          },
          "ko-KR": {
            singular: "최근 개선 사항"
          },
          "pt-BR": {
            singular: "Últimas melhorias"
          },
          "zh-CN": {
            singular: "最新改进"
          }
        }
      }),
      _v24 = (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v4.Box, {
          as: "span",
          color: "vimeoBlue.500",
          children: _v22
        }), ` • ${_v23}`]
      }),
      _v25 = () => {
        _v6({
          videoId: _v1,
          entryPoint: _v2
        });
      },
      _v26 = _v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v7({
          videoId: _v1,
          entryPoint: _v2
        }), _v3();
      };
    if (!_v10 && !_v9) return null;
    if ("grid" === _v0) {
      let _v0 = (0, _v2.jsx)(_v6.IconButton, {
        "aria-label": (0, _v17.translate)({
          singular: "Dismiss",
          dictionary: {
            es: {
              singular: "Descartar"
            },
            "de-DE": {
              singular: "Information verwerfen"
            },
            "fr-FR": {
              singular: "Ignorer"
            },
            "ja-JP": {
              singular: "閉じる"
            },
            "ko-KR": {
              singular: "닫기"
            },
            "pt-BR": {
              singular: "Ignorar"
            },
            "zh-CN": {
              singular: "拒绝"
            }
          }
        }),
        icon: (0, _v2.jsx)(_v10.CloseX, {}),
        size: "sm",
        variant: "ghost",
        color: "var(--vimeo-colors-white)",
        backgroundColor: "var(--vimeo-colors-fill-page-overlay)",
        borderRadius: "sm",
        onClick: _v26
      });
      return (0, _v2.jsx)(_v4.Box, {
        position: "relative",
        sx: _v53,
        onMouseEnter: () => _v12(!0),
        onMouseLeave: () => _v12(!1),
        children: _v10 ? (0, _v2.jsxs)(_v4.Box, {
          padding: "xs",
          children: [(0, _v2.jsx)(_v7.Skeleton, {
            width: "100%",
            sx: {
              aspectRatio: "16 / 9"
            },
            borderRadius: "md"
          }), (0, _v2.jsx)(_v7.Skeleton, {
            height: "16px",
            width: "80%",
            marginTop: "sm"
          }), (0, _v2.jsx)(_v7.Skeleton, {
            height: "14px",
            width: "50%",
            marginTop: "2xs"
          })]
        }) : (0, _v2.jsxs)(_v12.ContentCard, {
          href: _v16,
          onClick: _v25,
          ariaLabel: _v17,
          shouldUseNextLink: !1,
          children: [(0, _v2.jsxs)(_v12.ContentCard.Body, {
            children: [!!_v20 && (0, _v2.jsx)(_v4.Box, {
              position: "absolute",
              inset: "0",
              children: (0, _v2.jsx)(_v13.VideoCardPlayer, {
                clipId: _v8,
                configUrl: _v20,
                initEvent: "hover",
                isHovering: _v11,
                setIsPlayerReady: _v14
              })
            }), (0, _v2.jsx)(_v12.ContentCard.Thumbnail, {
              alt: "",
              src: _v18,
              opacity: _v13 && _v11 ? 0 : 1
            }), _v11 && !_v13 && (0, _v2.jsx)(_v5.Flex, {
              position: "absolute",
              inset: "0",
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v2.jsx)(_v8.Spinner, {
                size: "md"
              })
            }), (0, _v2.jsx)(_v4.Box, {
              position: "absolute",
              top: "sm",
              right: "sm",
              "data-clickable": !0,
              children: _v0
            }), "" !== _v21 && (0, _v2.jsx)(_v12.ContentCard.Badge, {
              children: _v21
            })]
          }), (0, _v2.jsx)(_v12.ContentCard.ComposableFooter, {
            children: (0, _v2.jsx)(_v5.Flex, {
              width: "100%",
              maxWidth: "100%",
              children: (0, _v2.jsxs)(_v5.Flex, {
                direction: "row",
                grow: "1",
                gap: "sm",
                width: "100%",
                children: [(0, _v2.jsx)(_v4.Box, {
                  display: "block",
                  children: (0, _v2.jsx)(_v55, {})
                }), (0, _v2.jsxs)(_v5.Flex, {
                  direction: "column",
                  gap: "xs",
                  minW: 0,
                  width: "100%",
                  children: [(0, _v2.jsx)(_v9.Text, {
                    variant: "heading-xs",
                    noOfLines: 1,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    display: "block",
                    sx: {
                      maxWidth: _v19.CONTENT_CARD_TITLE_MAX_WIDTH
                    },
                    children: _v17
                  }), (0, _v2.jsx)(_v9.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    noOfLines: 1,
                    children: _v24
                  })]
                })]
              })
            })
          })]
        })
      });
    }
    return _v10 ? (0, _v2.jsxs)(_v5.Flex, {
      alignItems: "center",
      gap: "md",
      paddingY: "sm",
      paddingX: "md",
      sx: _v54,
      children: [(0, _v2.jsx)(_v7.Skeleton, {
        width: "120px",
        height: "68px",
        borderRadius: "sm",
        flexShrink: 0
      }), (0, _v2.jsx)(_v7.Skeleton, {
        height: "16px",
        width: "240px"
      })]
    }) : (0, _v2.jsx)(_v4.Box, {
      sx: _v54,
      children: (0, _v2.jsx)(_v49, {
        type: _v20.ITEM_TYPES.ROOT_VIDEO,
        uri: _v9?.uri ?? "",
        parentFolderUri: "root",
        selectedItemURIs: _v52,
        canDrag: !1,
        onDragEnd: () => void 0,
        isSelectable: !1,
        isSelected: !1,
        title: _v17,
        subTitle: _v24,
        timestamp: "",
        thumbnail: (0, _v2.jsx)(_v14.VideoThumbnail, {
          alt: _v17,
          badgeText: _v21,
          isDefaultPicture: _v19,
          thumbnailSrc: _v18
        }),
        thumbnailSrc: _v18,
        href: _v16,
        pageName: "video_library",
        v2PageName: "video_library",
        clipId: _v8,
        onClick: _v25,
        menuButton: (0, _v2.jsx)(_v6.IconButton, {
          "aria-label": (0, _v17.translate)({
            singular: "Dismiss",
            dictionary: {
              es: {
                singular: "Descartar"
              },
              "de-DE": {
                singular: "Information verwerfen"
              },
              "fr-FR": {
                singular: "Ignorer"
              },
              "ja-JP": {
                singular: "閉じる"
              },
              "ko-KR": {
                singular: "닫기"
              },
              "pt-BR": {
                singular: "Ignorar"
              },
              "zh-CN": {
                singular: "拒绝"
              }
            }
          }),
          icon: (0, _v2.jsx)(_v10.CloseX, {}),
          size: "md",
          variant: "tertiary",
          onClick: _v26
        })
      })
    });
  }], 0);
}