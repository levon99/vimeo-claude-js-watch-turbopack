{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useIsClipView", 0, () => {
    let _v0 = (0, _v1.getSearchParams)(),
      _v1 = _v0.get("video"),
      _v2 = _v0.get("event");
    return !!(_v1 || _v2);
  }]);
}