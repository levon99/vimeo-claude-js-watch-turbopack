{
  "use strict";

  _v0.s(["isVideoOwner", 0, function (_v0, _v1) {
    let _v2 = _v0.user?.uri,
      _v3 = _v1?.user?.uri;
    return !!(_v2 && _v3 && _v2 === _v3);
  }]);
}