{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = !1;
  class _v4 {
    receiveHandlerId(_v0) {
      this.targetId = _v0;
    }
    getHandlerId() {
      return this.targetId;
    }
    subscribeToStateChange(_v0, _v1) {
      return this.internalMonitor.subscribeToStateChange(_v0, _v1);
    }
    canDrop() {
      if (!this.targetId) return !1;
      (0, _v2.invariant)(!_v3, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return _v3 = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        _v3 = !1;
      }
    }
    isOver(_v0) {
      return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, _v0);
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
      this.targetId = null, this.internalMonitor = _v0.getMonitor();
    }
  }
  var _v5 = _v0.i(0);
  _v0.s(["useDropTargetMonitor", 0, function () {
    let _v0 = (0, _v5.useDragDropManager)();
    return (0, _v1.useMemo)(() => new _v4(_v0), [_v0]);
  }], 0);
}