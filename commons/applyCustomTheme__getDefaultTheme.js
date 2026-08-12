{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["applyCustomTheme", 0, _v0 => _v0 => {
    let _v1;
    return _v1 = _v0 ?? _v1.themes.light, {
      ..._v1,
      ..._v0[_v1.name]
    };
  }, "getDefaultTheme", 0, () => _v1.themes.light]);
}