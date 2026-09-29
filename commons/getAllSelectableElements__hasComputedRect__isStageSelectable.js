{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["getAllSelectableElements", 0, function (_v0) {
    return (0, _v2.getAllElements)(_v0).filter(_v0 => _v0.selectable);
  }, "hasComputedRect", 0, function (_v0) {
    return (0, _v1.isOverlayElement)(_v0);
  }, "isStageSelectable", 0, function (_v0) {
    return _v0.selectable && !(0, _v1.isSoundElement)(_v0) && !(0, _v1.isTimeTriggerElement)(_v0);
  }]);
}