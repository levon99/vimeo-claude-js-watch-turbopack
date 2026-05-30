{
  "use strict";

  var _v3 = _v0.e && _v0.e.__importDefault || function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.returnFirstArg = _v2.canTextBeChildOfNode = _v2.ELEMENTS_WITH_NO_TEXT_CHILDREN = _v2.PRESERVE_CUSTOM_ATTRIBUTES = void 0, _v2.isCustomComponent = function (_v0, _v1) {
    return _v0.includes("-") ? !_v6.has(_v0) : !!(_v1 && "string" == typeof _v1.is);
  }, _v2.setStyleProp = function (_v0, _v1) {
    if ("string" == typeof _v0) {
      if (!_v0.trim()) {
        _v1.style = {};
        return;
      }
      try {
        _v1.style = (0, _v5.default)(_v0, _v7);
      } catch (_v0) {
        _v1.style = {};
      }
    }
  };
  var _v4 = _v0.r(0),
    _v5 = _v3(_v0.r(0)),
    _v6 = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]),
    _v7 = {
      reactCompat: !0
    };
  _v2.PRESERVE_CUSTOM_ATTRIBUTES = Number(_v4.version.split(".")[0]) >= 16, _v2.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"]), _v2.canTextBeChildOfNode = function (_v0) {
    return !_v2.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(_v0.name);
  }, _v2.returnFirstArg = function (_v0) {
    return _v0;
  };
}