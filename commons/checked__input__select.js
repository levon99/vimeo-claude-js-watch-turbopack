{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function (_v0, _v1) {
    void 0 === _v0 && (_v0 = {});
    var _v2 = {},
      _v3 = !!(_v0.type && _v7[_v0.type]);
    for (var _v4 in _v0) {
      var _v5 = _v0[_v4];
      if ((0, _v3.isCustomAttribute)(_v4)) {
        _v2[_v4] = _v5;
        continue;
      }
      var _v6 = _v4.toLowerCase(),
        _v7 = _v8(_v6);
      if (_v7) {
        var _v8 = (0, _v3.getPropertyInfo)(_v7);
        switch (_v5.includes(_v7) && _v6.includes(_v1) && !_v3 && (_v7 = _v8("default" + _v6)), _v2[_v7] = _v5, null == _v8 ? void 0 : _v8.type) {
          case _v3.BOOLEAN:
            _v2[_v7] = !0;
            break;
          case _v3.OVERLOADED_BOOLEAN:
            "" === _v5 && (_v2[_v7] = !0);
        }
        continue;
      }
      _v4.PRESERVE_CUSTOM_ATTRIBUTES && (_v2[_v4] = _v5);
    }
    return (0, _v4.setStyleProp)(_v0.style, _v2), _v2;
  };
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = ["checked", "value"],
    _v6 = ["input", "select", "textarea"],
    _v7 = {
      reset: !0,
      submit: !0
    };
  function _v8(_v0) {
    return _v3.possibleStandardNames[_v0];
  }
}