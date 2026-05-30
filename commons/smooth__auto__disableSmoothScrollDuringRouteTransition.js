{
  "use strict";

  function _v3(_v0, _v1 = {}) {
    if (_v1.onlyHashChange) return void _v0();
    let _v2 = document.documentElement;
    if ("smooth" !== _v2.dataset.scrollBehavior) return void _v0();
    let _v3 = _v2.style.scrollBehavior;
    _v2.style.scrollBehavior = "auto", _v1.dontForceLayout || _v2.getClientRects(), _v0(), _v2.style.scrollBehavior = _v3;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "disableSmoothScrollDuringRouteTransition", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  }), _v0.r(0);
}