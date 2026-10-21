{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useUniversalHostingEnabled", 0, () => {
    let _v0 = (0, _v2.useOrionSetting)("universal_hosting_enabled"),
      _v1 = (0, _v1.useIsStaff)();
    return _v0 || _v1;
  }]);
}