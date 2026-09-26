{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useUniversalHostingEnabled", 0, () => {
    let {
      settings: _v0
    } = (0, _v2.useOrionSettings)();
    return (0, _v1.useIsStaff)() || _v0.universal_hosting_enabled;
  }]);
}