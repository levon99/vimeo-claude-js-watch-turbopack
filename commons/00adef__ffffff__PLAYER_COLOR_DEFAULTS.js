{
  "use strict";

  let _v1 = {
      colorOne: "000000",
      colorTwo: "00adef",
      colorThree: "ffffff",
      colorFour: "000000"
    },
    _v2 = _v0 => _v0 ? _v0.startsWith("#") ? _v0.slice(1) : _v0 : null;
  _v0.s(["PLAYER_COLOR_DEFAULTS", 0, _v1, "playerColorsQueryValue", 0, function (_v0) {
    return [_v2(_v0?.colorOne) ?? _v1.colorOne, _v2(_v0?.colorTwo) ?? _v1.colorTwo, _v2(_v0?.colorThree) ?? _v1.colorThree, _v2(_v0?.colorFour) ?? _v1.colorFour].join(",");
  }]);
}