{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  class _v3 extends _v1.ContextManager {
    context = {
      dragDropActions: (0, _v1.createActions)({
        startDragDrop: _v0 => this.startDragDrop(_v0),
        stopDragDrop: () => this.stopDragDrop()
      }),
      isDraggingContent: !1,
      draggingData: null
    };
    log = new _v2.Logger("🗒DRAG-DROP");
    startDragDrop(_v0 = null) {
      this.log.info("Starting drag drop event:", _v0), this.setContext({
        isDraggingContent: !0,
        draggingData: _v0
      });
    }
    stopDragDrop() {
      this.log.info("Stopping drag drop event"), this.setContext({
        isDraggingContent: !1,
        draggingData: null
      });
    }
  }
  _v0.s(["DragDropManager", 0, _v3]);
}