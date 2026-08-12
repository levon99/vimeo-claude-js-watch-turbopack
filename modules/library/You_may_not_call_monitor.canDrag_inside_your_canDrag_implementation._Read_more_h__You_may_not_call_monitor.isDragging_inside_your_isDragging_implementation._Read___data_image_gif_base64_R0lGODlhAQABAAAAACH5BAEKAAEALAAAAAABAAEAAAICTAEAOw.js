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
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  class _v35 {
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
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  let _v39 = !1,
    _v40 = !1;
  class _v41 {
    receiveHandlerId(_v0) {
      this.sourceId = _v0;
    }
    getHandlerId() {
      return this.sourceId;
    }
    canDrag() {
      (0, _v37.invariant)(!_v39, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return _v39 = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        _v39 = !1;
      }
    }
    isDragging() {
      if (!this.sourceId) return !1;
      (0, _v37.invariant)(!_v40, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return _v40 = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        _v40 = !1;
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
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  class _v45 {
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
      return !(0, _v44.shallowEqual)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
      return !(0, _v44.shallowEqual)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
      this.hooks = (0, _v42.wrapConnectorHooks)({
        dragSource: (_v0, _v1) => {
          this.clearDragSource(), this.dragSourceOptions = _v1 || null, (0, _v43.isRef)(_v0) ? this.dragSourceRef = _v0 : this.dragSourceNode = _v0, this.reconnectDragSource();
        },
        dragPreview: (_v0, _v1) => {
          this.clearDragPreview(), this.dragPreviewOptions = _v1 || null, (0, _v43.isRef)(_v0) ? this.dragPreviewRef = _v0 : this.dragPreviewNode = _v0, this.reconnectDragPreview();
        }
      }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = _v0;
    }
  }
  var _v46 = _v0.i(0);
  function _v47() {
    return _v1 || ((_v1 = new Image()).src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), _v1;
  }
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) => {
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
      _v23 = (0, _v49.useAnalyticsEvent)(),
      {
        capabilities: _v24
      } = (0, _v48.useCapability)(["hasContentSpaceEnabled"], _v1),
      _v25 = (0, _v51.usePageName)(),
      [{
        isDragging: _v26
      }, _v27, _v28] = (_v9 = () => ({
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
            let _v2 = _v0.dropTargetType === _v20.DROP_TARGET_TYPES.FOLDER_CARD ? "vl folder drag and drop" : "vl side nav drag and drop",
              _v3 = _v0.dropTarget.uri.split("/").pop(),
              _v4 = {
                location: _v2,
                method: _v2,
                path: window.location.pathname,
                folder_id: parseInt(_v3, 10) ?? null,
                folder_share_status: _v0.dropTarget.privacy?.view === "anybody" ? "shared" : "not_shared",
                is_private_to_me: _v0.dropTarget.isPrivateToUser ?? null,
                is_subfolder: !!_v0.dropTarget.metadata?.connections?.parentFolder,
                parent_folder_id: _v0.dropTarget.metadata?.connections?.parentFolder?.uri?.split("/").pop() ?? null
              };
            if (1 === _v1.length) {
              let _v0 = _v1.split("/").pop(),
                _v1 = _v0 === _v20.ITEM_TYPES.VIDEO || _v0 === _v20.ITEM_TYPES.ROOT_VIDEO,
                _v2 = _v0 === _v20.ITEM_TYPES.ROOT_VIDEO ? "library" : "mvv";
              _v2 && _v7 && (_v2 = _v24.hasContentSpaceEnabled ? "my_videos" : "private_to_me"), _v23((0, _v50.addVideoToFolder)({
                ..._v4,
                product: "Workflow",
                origin_folder_id: _v2.split("/").pop() ?? null,
                origin_type: _v2,
                clip_id: _v1 ? parseInt(_v0, 10) : null,
                live_event_id: _v1 ? null : _v0,
                content_type: _v1 ? "video" : "live",
                is_my_videos: !!_v24.hasContentSpaceEnabled && _v7
              }));
            }
            if (_v1.length > 1) {
              let _v0 = 0,
                _v1 = 0,
                _v2 = 0;
              _v1.forEach(_v0 => {
                let _v1 = _v0.uri.split("/")[1];
                "videos" === _v1 ? _v1++ : "live_events" === _v1 && _v2++, _v0++;
              }), _v23((0, _v50.addItemsToFolder)({
                ..._v4,
                page: _v25.toUpperCase(),
                num_items: _v0,
                num_videos: _v1,
                num_live_events: _v2,
                num_folders: 0,
                destination: "folder"
              }));
            }
          }
        },
        collect: _v0 => ({
          isDragging: _v0.isDragging()
        })
      }), _v10 = [_v1, _v5, _v4], _v13 = (0, _v38.useOptionalFactory)(_v9, _v10), (0, _v37.invariant)(!_v13.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)"), _v14 = (0, _v36.useDragDropManager)(), _v15 = (0, _v3.useMemo)(() => new _v41(_v14), [_v14]), _v11 = _v13.options, _v12 = _v13.previewOptions, _v16 = (0, _v36.useDragDropManager)(), _v17 = (0, _v3.useMemo)(() => new _v45(_v16.getBackend()), [_v16]), (0, _v34.useIsomorphicLayoutEffect)(() => (_v17.dragSourceOptions = _v11 || null, _v17.reconnect(), () => _v17.disconnectDragSource()), [_v17, _v11]), (0, _v34.useIsomorphicLayoutEffect)(() => (_v17.dragPreviewOptions = _v12 || null, _v17.reconnect(), () => _v17.disconnectDragPreview()), [_v17, _v12]), _v18 = _v17, _v19 = (0, _v36.useDragDropManager)(), _v20 = (0, _v3.useMemo)(() => new _v35(_v13, _v15, _v18), [_v15, _v18]), (0, _v3.useEffect)(() => {
        _v20.spec = _v13;
      }, [_v13]), _v21 = _v20, _v22 = (0, _v3.useMemo)(() => {
        let _v0 = _v13.type;
        return (0, _v37.invariant)(null != _v0, "spec.type must be defined"), _v0;
      }, [_v13]), (0, _v34.useIsomorphicLayoutEffect)(function () {
        if (null != _v22) {
          let [_v0, _v1] = (0, _v33.registerSource)(_v22, _v21, _v19);
          return _v15.receiveHandlerId(_v0), _v18.receiveHandlerId(_v0), _v1;
        }
      }, [_v19, _v15, _v18, _v21, _v22]), [(0, _v46.useCollectedProps)(_v13.collect, _v15, _v18), (0, _v3.useMemo)(() => _v18.hooks.dragSource(), [_v18]), (0, _v3.useMemo)(() => _v18.hooks.dragPreview(), [_v18])]);
    return {
      isDragging: _v26,
      dragRef: _v27,
      preview: _v28,
      getEmptyImage: _v47
    };
  };
  _v0.s(["useDragFolderItem", 0, _v52], 0);
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  let _v55 = ({
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
    let [_v32, _v33] = (0, _v3.useState)(!1),
      [_v34, _v35] = (0, _v3.useState)(_v0),
      {
        settings: _v36
      } = (0, _v29.useOrionSettings)(),
      _v37 = (0, _v24.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500"),
      _v38 = () => {
        _v33(!0);
      },
      _v39 = _v29 && _v36.enable_rename_video,
      _v40 = _v19 && _v39 ? _v3.default.cloneElement(_v19, {
        onRename: _v38
      }) : _v19,
      _v41 = _v18 && _v39 ? _v3.default.cloneElement(_v18, {
        onRename: _v38
      }) : _v18,
      {
        isDragging: _v42,
        dragRef: _v43,
        preview: _v44,
        getEmptyImage: _v45
      } = _v52(_v20, _v6, _v7, _v4, _v15, _v21, _v23, _v24, _v22);
    (0, _v3.useEffect)(() => {
      _v44(_v45());
    }, []), (0, _v3.useEffect)(() => {
      _v42 && _v22?.();
    }, [_v42]);
    let _v46 = _v32.BPAnalyticsV2.useContentManagamentHoverEvent();
    return (0, _v2.jsxs)(_v28.ContentRow, {
      isDragging: _v42,
      dragDropRef: _v25 ? _v43 : void 0,
      listGridColumns: `${(0, _v23.rem)(32)} ${(0, _v23.rem)(150)} 8fr 0.2fr`,
      sx: _v31.responsiveRowSx,
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
      children: [(0, _v2.jsx)(_v28.ContentRow.Column, {
        hideAtWidth: _v26.bokehTheme.breakpoints.md,
        children: _v14 && (0, _v2.jsx)(_v4.Box, {
          onClick: _v0 => _v0.stopPropagation(),
          children: (0, _v2.jsx)(_v28.ContentRow.SelectCheckbox, {
            size: "md"
          })
        })
      }), (0, _v2.jsx)(_v28.ContentRow.Column, {
        href: _v12,
        onClick: () => {
          _v21.BigPictureClient.sendEvent(new _v21.Event("vimeo.click", 151, {
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
        children: _v13 && _v30 ? (0, _v2.jsx)(_v27.ColdStorageThumbTooltip, {
          label: _v30,
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
      }), (0, _v2.jsx)(_v28.ContentRow.Column, {
        href: _v12,
        width: "100%",
        overflow: "auto",
        onClick: () => {
          _v21.BigPictureClient.sendEvent(new _v21.Event("vimeo.click", 151, {
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
        children: (0, _v2.jsxs)(_v5.Flex, {
          flexDir: "column",
          width: "100%",
          gap: (0, _v23.rem)(4),
          paddingLeft: (0, _v23.rem)(8),
          children: [(0, _v2.jsx)(_v30.OverflowToolTip, {
            labelToolTip: _v34,
            children: _v39 && _v32 ? (0, _v2.jsx)(_v4.Box, {
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation();
              },
              width: "95%",
              children: (0, _v2.jsx)(_v54.VideoEditableTitle, {
                videoId: _v28 ?? 0,
                isEditing: _v32,
                setCurrentTitle: _v35,
                setIsEditingContentTitle: _v33,
                value: _v34
              })
            }) : (0, _v2.jsx)(_v9.Text, {
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
          }), !_v32 && _v1 && (0, _v2.jsx)(_v9.Text, {
            variant: "body-md",
            color: _v13 ? _v37 : "text-secondary",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            children: _v1
          })]
        })
      }), (0, _v2.jsx)(_v28.ContentRow.Column, {
        href: "string" == typeof _v5 || "number" == typeof _v5 ? _v12 : void 0,
        hideAtWidth: _v26.bokehTheme.breakpoints.xl,
        children: (0, _v2.jsx)(_v5.Flex, {
          alignItems: "center",
          children: "string" == typeof _v5 || "number" == typeof _v5 ? (0, _v2.jsx)(_v9.Text, {
            variant: "body-md",
            marginRight: "10px",
            color: _v13 ? _v37 : "text-secondary",
            "data-testid": "row-privacy",
            children: _v5
          }) : (0, _v2.jsx)(_v4.Box, {
            "data-testid": "row-privacy",
            children: _v5
          })
        })
      }), (0, _v2.jsx)(_v28.ContentRow.Column, {
        href: _v12,
        hideAtWidth: _v19.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
        children: _v8 && (0, _v2.jsxs)(_v9.Text, {
          variant: "body-md",
          color: _v13 ? _v37 : "text-secondary",
          "data-testid": "row-filesize",
          children: [(0, _v2.jsx)(_v4.Box, {
            as: "span",
            children: _v9
          }), !!_v10 && !_v13 && (0, _v2.jsx)(_v22.Tooltip, {
            label: _v10,
            placement: "top",
            pointerEvents: "all",
            maxWidth: (0, _v23.rem)(265),
            offset: [16, 8],
            children: (0, _v2.jsx)("span", {
              children: (0, _v2.jsx)(_v25.InfoCircle, {
                position: "absolute",
                boxSize: "1rem",
                marginLeft: "sm",
                marginTop: "px"
              })
            })
          }), _v11 && (0, _v2.jsx)(_v4.Box, {
            as: "span",
            marginLeft: "sm",
            children: (0, _v2.jsx)(_v53.ManagedStorageIndicator, {
              isDimmed: _v13
            })
          })]
        })
      }), (0, _v2.jsx)(_v28.ContentRow.Column, {
        href: _v12,
        hideAtWidth: _v26.bokehTheme.breakpoints.lg,
        children: (0, _v2.jsx)(_v9.Text, {
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
      }), (0, _v2.jsxs)(_v28.ContentRow.Column, {
        justifyColumn: "flex-end",
        children: [(0, _v2.jsx)(_v4.Box, {
          height: "md",
          children: _v40 && (0, _v2.jsx)(_v4.Box, {
            children: _v40
          })
        }), !_v32 && _v41]
      })]
    });
  };
  _v0.s(["DraggableListVideo", 0, _v55], 0);
  let _v56 = ["uri", "name", "description", "link", "duration", "pictures", "configUrl"],
    _v57 = {
      Accept: "application/vnd.vimeo.*+json;version=3.4.1"
    },
    _v58 = new Set(),
    _v59 = {
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
    _v60 = {
      ..._v59,
      borderRadius: "var(--vimeo-radii-md)"
    },
    _v61 = () => (0, _v2.jsx)(_v5.Flex, {
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
        select: _v56,
        headers: _v57
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
        sx: _v59,
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
                  children: (0, _v2.jsx)(_v61, {})
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
      sx: _v60,
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
      sx: _v60,
      children: (0, _v2.jsx)(_v55, {
        type: _v20.ITEM_TYPES.ROOT_VIDEO,
        uri: _v9?.uri ?? "",
        parentFolderUri: "root",
        selectedItemURIs: _v58,
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