{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  class _v5 {
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
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = !1,
    _v10 = !1;
  class _v11 {
    receiveHandlerId(_v0) {
      this.sourceId = _v0;
    }
    getHandlerId() {
      return this.sourceId;
    }
    canDrag() {
      (0, _v7.invariant)(!_v9, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return _v9 = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        _v9 = !1;
      }
    }
    isDragging() {
      if (!this.sourceId) return !1;
      (0, _v7.invariant)(!_v10, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return _v10 = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        _v10 = !1;
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
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  class _v15 {
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
      return !(0, _v14.shallowEqual)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
      return !(0, _v14.shallowEqual)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
      this.hooks = (0, _v12.wrapConnectorHooks)({
        dragSource: (_v0, _v1) => {
          this.clearDragSource(), this.dragSourceOptions = _v1 || null, (0, _v13.isRef)(_v0) ? this.dragSourceRef = _v0 : this.dragSourceNode = _v0, this.reconnectDragSource();
        },
        dragPreview: (_v0, _v1) => {
          this.clearDragPreview(), this.dragPreviewOptions = _v1 || null, (0, _v13.isRef)(_v0) ? this.dragPreviewRef = _v0 : this.dragPreviewNode = _v0, this.reconnectDragPreview();
        }
      }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = _v0;
    }
  }
  var _v16 = _v0.i(0);
  function _v17() {
    return _v1 || ((_v1 = new Image()).src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), _v1;
  }
  _v0.s(["useDragFolderItem", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) => {
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
      }), _v10 = [_v1, _v5, _v4], _v13 = (0, _v8.useOptionalFactory)(_v9, _v10), (0, _v7.invariant)(!_v13.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)"), _v14 = (0, _v6.useDragDropManager)(), _v15 = (0, _v4.useMemo)(() => new _v11(_v14), [_v14]), _v11 = _v13.options, _v12 = _v13.previewOptions, _v16 = (0, _v6.useDragDropManager)(), _v17 = (0, _v4.useMemo)(() => new _v15(_v16.getBackend()), [_v16]), (0, _v3.useIsomorphicLayoutEffect)(() => (_v17.dragSourceOptions = _v11 || null, _v17.reconnect(), () => _v17.disconnectDragSource()), [_v17, _v11]), (0, _v3.useIsomorphicLayoutEffect)(() => (_v17.dragPreviewOptions = _v12 || null, _v17.reconnect(), () => _v17.disconnectDragPreview()), [_v17, _v12]), _v18 = _v17, _v19 = (0, _v6.useDragDropManager)(), _v20 = (0, _v4.useMemo)(() => new _v5(_v13, _v15, _v18), [_v15, _v18]), (0, _v4.useEffect)(() => {
        _v20.spec = _v13;
      }, [_v13]), _v21 = _v20, _v22 = (0, _v4.useMemo)(() => {
        let _v0 = _v13.type;
        return (0, _v7.invariant)(null != _v0, "spec.type must be defined"), _v0;
      }, [_v13]), (0, _v3.useIsomorphicLayoutEffect)(function () {
        if (null != _v22) {
          let [_v0, _v1] = (0, _v2.registerSource)(_v22, _v21, _v19);
          return _v15.receiveHandlerId(_v0), _v18.receiveHandlerId(_v0), _v1;
        }
      }, [_v19, _v15, _v18, _v21, _v22]), [(0, _v16.useCollectedProps)(_v13.collect, _v15, _v18), (0, _v4.useMemo)(() => _v18.hooks.dragSource(), [_v18]), (0, _v4.useMemo)(() => _v18.hooks.dragPreview(), [_v18])]);
    return {
      isDragging: _v23,
      dragRef: _v24,
      preview: _v25,
      getEmptyImage: _v17
    };
  }], 0);
}