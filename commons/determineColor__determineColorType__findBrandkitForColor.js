{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => /^#([0-9A-F]{3}){1,2}$/i.test(_v0);
  _v0.s(["determineColor", 0, (_v0, _v1, _v2) => {
    if ("string" == typeof _v0 && _v0) return _v0;
    if (void 0 !== _v1 && _v2 && (_v2 === _v2.ColorType.SOLID || _v2 === _v2.ColorType.GRADIENT)) {
      let _v0 = ((_v0, _v1) => {
        if (_v1 === _v2.ColorType.SOLID) {
          if (_v0 >= 0 && _v0 < _v1.SOLID_COLORS.length) return _v1.SOLID_COLORS[_v0].color;
        } else if (_v1 === _v2.ColorType.GRADIENT && _v0 >= 0 && _v0 < _v1.GRADIENTS_CSS.length) return _v1.GRADIENTS_CSS[_v0].color;
      })(_v1, _v2);
      if (_v0) return _v0;
    }
    return _v1.DEFAULT_BRANDING_COLOR;
  }, "determineColorType", 0, (_v0, _v1, _v2, _v3, _v4) => {
    if (_v0) return _v0;
    if (_v1 === _v2.ColorType.SOLID || _v1 === _v2.ColorType.GRADIENT) return _v1;
    if (_v3 && _v2) {
      let _v0 = _v2.toLowerCase();
      if (_v1.SOLID_COLORS.some(_v0 => _v0.color.toLowerCase() === _v0)) return _v2.ColorType.SOLID;
      if (_v1.GRADIENTS_CSS.some(_v0 => _v0.color.toLowerCase() === _v0)) return _v2.ColorType.GRADIENT;
    }
    return _v4?.some(_v0 => _v0?.colors?.some(_v0 => _v0?.hex === _v2)) ? _v2.ColorType.BRAND : _v2.ColorType.CUSTOM;
  }, "findBrandkitForColor", 0, (_v0, _v1) => {
    if (_v0 && _v1?.length) {
      let _v0 = _v0.replace(/^#/, "").toLowerCase(),
        _v1 = _v1.find(_v0 => _v0?.colors?.some(_v0 => _v0?.hex?.replace(/^#/, "").toLowerCase() === _v0));
      return _v1 ? _v1.uri.split("/").pop() || "" : null;
    }
    return null;
  }, "isHexColor", 0, _v3, "withHashPrefix", 0, _v0 => {
    if ("string" != typeof _v0 || "" === _v0 || _v0.startsWith("#")) return _v0;
    let _v1 = `#${_v0}`;
    return _v3(_v1) ? _v1 : _v0;
  }]);
}