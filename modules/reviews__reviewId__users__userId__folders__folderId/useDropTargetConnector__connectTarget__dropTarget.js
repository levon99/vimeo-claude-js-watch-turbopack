{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  class _v5 {
    get connectTarget() {
      return this.dropTarget;
    }
    reconnect() {
      let _v0 = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      _v0 && this.disconnectDropTarget();
      let _v1 = this.dropTarget;
      if (this.handlerId) {
        if (!_v1) {
          this.lastConnectedDropTarget = _v1;
          return;
        }
        _v0 && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = _v1, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, _v1, this.dropTargetOptions));
      }
    }
    receiveHandlerId(_v0) {
      _v0 !== this.handlerId && (this.handlerId = _v0, this.reconnect());
    }
    get dropTargetOptions() {
      return this.dropTargetOptionsInternal;
    }
    set dropTargetOptions(_v0) {
      this.dropTargetOptionsInternal = _v0;
    }
    didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
    didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
    didOptionsChange() {
      return !(0, _v2.shallowEqual)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
    disconnectDropTarget() {
      this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
    }
    get dropTarget() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
    clearDropTarget() {
      this.dropTargetRef = null, this.dropTargetNode = null;
    }
    constructor(_v0) {
      this.hooks = (0, _v3.wrapConnectorHooks)({
        dropTarget: (_v0, _v1) => {
          this.clearDropTarget(), this.dropTargetOptions = _v1, (0, _v4.isRef)(_v0) ? this.dropTargetRef = _v0 : this.dropTargetNode = _v0, this.reconnect();
        }
      }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = _v0;
    }
  }
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useDropTargetConnector", 0, function (_v0) {
    let _v1 = (0, _v6.useDragDropManager)(),
      _v2 = (0, _v1.useMemo)(() => new _v5(_v1.getBackend()), [_v1]);
    return (0, _v7.useIsomorphicLayoutEffect)(() => (_v2.dropTargetOptions = _v0 || null, _v2.reconnect(), () => _v2.disconnectDropTarget()), [_v0]), _v2;
  }], 0);
}