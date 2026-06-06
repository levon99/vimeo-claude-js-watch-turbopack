{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useFocusOnPointerDown", 0, function (_v0) {
    let {
        ref: _v1,
        elements: _v2,
        enabled: _v3
      } = _v0,
      _v4 = () => {
        var _v0, _v1;
        return null != (_v1 = null == (_v0 = _v1.current) ? void 0 : _v0.ownerDocument) ? _v1 : document;
      };
    (0, _v1.useEventListener)(_v4, "pointerdown", _v0 => {
      var _v1, _v2;
      let _v3, _v4;
      if (_v1 = /mac|iphone|ipad|ipod/i, !("u" > typeof window && _v1.test(null != (_v2 = null == (_v3 = navigator.userAgentData) ? void 0 : _v3.platform) ? _v2 : navigator.platform) && (_v4 = /apple/i, "u" > typeof window && _v4.test(navigator.vendor))) || !_v3) return;
      let _v5 = _v0.target,
        _v6 = (null != _v2 ? _v2 : [_v1]).some(_v0 => {
          let _v1 = "current" in _v0 ? _v0.current : _v0;
          return (null == _v1 ? void 0 : _v1.contains(_v5)) || _v1 === _v5;
        });
      _v4().activeElement !== _v5 && _v6 && (_v0.preventDefault(), _v5.focus());
    });
  }]);
}