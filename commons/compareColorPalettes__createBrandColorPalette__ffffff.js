{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => /^#([0-9A-Fa-f]{6})$/.test(_v0),
    _v3 = _v0 => /^rgb\((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\)$/.test(_v0) ? "#" + _v0.slice(4, -1).split(",").map(_v0 => {
      let _v1 = parseInt(_v0.trim());
      return ("0" + (_v1 = Math.max(0, Math.min(255, _v1))).toString(16)).slice(-2);
    }).join("") : _v2(_v0) ? _v0 : _v2(`#${_v0}`) ? `#${_v0}` : "#000000";
  _v0.s(["compareColorPalettes", 0, (_v0, _v1) => _v0.primary === _v1.primary && _v0.secondary === _v1.secondary && _v0.default === _v1.default, "createBrandColorPalette", 0, _v0 => {
    let {
      primaryColor: _v1,
      secondaryColor: _v2,
      defaultColor: _v3
    } = _v0 ?? {};
    return {
      primary: _v3(_v1 ?? "ffffff"),
      secondary: _v3(_v2 ?? "E3E8E9"),
      default: _v3(_v3 ?? "000000")
    };
  }, "getColorKeyName", 0, _v0 => `${_v0}Color`, "getHexColor", 0, _v3, "hex2Rgb", 0, _v0 => {
    let _v1 = parseInt(_v0.substring(1, 3), 16),
      _v2 = parseInt(_v0.substring(3, 5), 16),
      _v3 = parseInt(_v0.substring(5, 7), 16);
    return `rgb(${_v1}, ${_v2}, ${_v3})`;
  }, "hex2Rgba", 0, (_v0, _v1) => {
    let _v2 = parseInt(_v0.substring(1, 3), 16),
      _v3 = parseInt(_v0.substring(3, 5), 16),
      _v4 = parseInt(_v0.substring(5, 7), 16);
    return `rgba(${_v2}, ${_v3}, ${_v4}, ${_v1})`;
  }, "hexToOpacityPercentage", 0, _v0 => {
    let _v1;
    if (9 === _v0.length) _v1 = _v0.slice(7, 9);else if (5 === _v0.length) _v1 = _v0.slice(4, 5) + _v0.slice(4, 5);else throw Error("Invalid hex format. Must be #RRGGBBAA or #RGBA.");
    return Math.round(parseInt(_v1, 16) / 255 * 100);
  }, "isHexColor", 0, _v2, "opacityPercentageToHex", 0, _v0 => Math.round((0, _v1.default)(_v0, 0, 100) / 100 * 255).toString(16).padStart(2, "0").toUpperCase(), "validateHexColorPalette", 0, _v0 => {
    let {
      primary: _v1,
      secondary: _v2
    } = _v0;
    return {
      primary: _v2(_v1) ? _v1 : `#${_v1}`,
      secondary: _v2(_v2) ? _v2 : `#${_v2}`,
      default: _v2(_v0.default) ? _v0.default : `#${_v0.default}`
    };
  }], 0);
}