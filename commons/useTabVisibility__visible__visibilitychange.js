{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useTabVisibility", 0, function (_v0, _v1) {
    (0, _v1.useEffect)(() => {
      let _v0 = () => {
        "visible" === document.visibilityState ? _v0?.() : _v1?.();
      };
      return document.addEventListener("visibilitychange", _v0), () => {
        document.removeEventListener("visibilitychange", _v0);
      };
    }, [_v1, _v0]);
  }]);
}