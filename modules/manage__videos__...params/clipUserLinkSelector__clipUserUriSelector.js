{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.user?.uri),
    _v3 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.user?.link);
  _v0.s(["clipUserLinkSelector", 0, _v3, "clipUserUriSelector", 0, _v2]);
}