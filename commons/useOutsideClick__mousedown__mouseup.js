{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0, _v1) {
    var _v2;
    let _v3 = _v0.target;
    return (!_v3 || !!(0, _v2.getOwnerDocument)(_v3).contains(_v3)) && !(null == (_v2 = _v1.current) ? void 0 : _v2.contains(_v3));
  }
  _v0.s(["useOutsideClick", 0, function (_v0) {
    let {
        ref: _v1,
        handler: _v2,
        enabled: _v3 = !0
      } = _v0,
      _v4 = (0, _v1.useCallbackRef)(_v2),
      _v5 = (0, _v3.useRef)({
        isPointerDown: !1,
        ignoreEmulatedMouseEvents: !1
      }).current;
    (0, _v3.useEffect)(() => {
      if (!_v3) return;
      let _v0 = _v0 => {
          _v4(_v0, _v1) && (_v5.isPointerDown = !0);
        },
        _v1 = _v0 => {
          if (_v5.ignoreEmulatedMouseEvents) {
            _v5.ignoreEmulatedMouseEvents = !1;
            return;
          }
          _v5.isPointerDown && _v2 && _v4(_v0, _v1) && (_v5.isPointerDown = !1, _v4(_v0));
        },
        _v2 = _v0 => {
          _v5.ignoreEmulatedMouseEvents = !0, _v2 && _v5.isPointerDown && _v4(_v0, _v1) && (_v5.isPointerDown = !1, _v4(_v0));
        },
        _v3 = (0, _v2.getOwnerDocument)(_v1.current);
      return _v3.addEventListener("mousedown", _v0, !0), _v3.addEventListener("mouseup", _v1, !0), _v3.addEventListener("touchstart", _v0, !0), _v3.addEventListener("touchend", _v2, !0), () => {
        _v3.removeEventListener("mousedown", _v0, !0), _v3.removeEventListener("mouseup", _v1, !0), _v3.removeEventListener("touchstart", _v0, !0), _v3.removeEventListener("touchend", _v2, !0);
      };
    }, [_v2, _v1, _v4, _v5, _v3]);
  }]);
}