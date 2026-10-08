{
  "use strict";

  let _v1 = new class {
    editorLoadStartTime = 0;
    editorLoadEndTime = 0;
    setEditorLoadStart(_v0 = performance.now()) {
      this.editorLoadStartTime = _v0;
    }
    resetEditorLoadStart() {
      this.editorLoadStartTime = 0;
    }
    setEditorLoadEnd(_v0 = performance.now()) {
      this.editorLoadEndTime = _v0;
    }
  }();
  _v0.s(["default", 0, _v1]);
}