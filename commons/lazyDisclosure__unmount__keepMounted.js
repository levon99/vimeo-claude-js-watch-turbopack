{
  "use strict";

  _v0.s(["lazyDisclosure", 0, function (_v0) {
    let {
      wasSelected: _v1,
      enabled: _v2,
      isSelected: _v3,
      mode: _v4 = "unmount"
    } = _v0;
    return !_v2 || !!_v3 || "keepMounted" === _v4 && !!_v1;
  }]);
}