{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = {
      preventScroll: !0,
      shouldFocus: !1
    };
  _v0.s(["useFocusOnHide", 0, function (_v0, _v1) {
    let {
        shouldFocus: _v2,
        visible: _v3,
        focusRef: _v4
      } = _v1,
      _v5 = _v2 && !_v3;
    (0, _v6.useUpdateEffect)(() => {
      let _v0;
      if (!_v5 || function (_v0) {
        let _v1 = _v0.current;
        if (!_v1) return !1;
        let _v2 = (0, _v1.getActiveElement)(_v1);
        return !(!_v2 || _v1.contains(_v2)) && !!(0, _v3.isTabbable)(_v2);
      }(_v0)) return;
      let _v1 = (null == _v4 ? void 0 : _v4.current) || _v0.current;
      if (_v1) return _v0 = requestAnimationFrame(() => {
        _v1.focus({
          preventScroll: !0
        });
      }), () => {
        cancelAnimationFrame(_v0);
      };
    }, [_v5, _v0, _v4]);
  }, "useFocusOnShow", 0, function (_v0, _v1 = _v8) {
    let {
        focusRef: _v2,
        preventScroll: _v3,
        shouldFocus: _v4,
        visible: _v5
      } = _v1,
      _v6 = "current" in _v0 ? _v0.current : _v0,
      _v7 = _v4 && _v5,
      _v8 = (0, _v7.useRef)(_v7),
      _v9 = (0, _v7.useRef)(_v5);
    (0, _v5.useSafeLayoutEffect)(() => {
      !_v9.current && _v5 && (_v8.current = _v7), _v9.current = _v5;
    }, [_v5, _v7]);
    let _v10 = (0, _v7.useCallback)(() => {
      if (_v5 && _v6 && _v8.current && (_v8.current = !1, !_v6.contains(document.activeElement))) if (null == _v2 ? void 0 : _v2.current) requestAnimationFrame(() => {
        var _v0;
        null == (_v0 = _v2.current) || _v0.focus({
          preventScroll: _v3
        });
      });else {
        let _v0 = (0, _v2.getAllFocusable)(_v6);
        _v0.length > 0 && requestAnimationFrame(() => {
          _v0[0].focus({
            preventScroll: _v3
          });
        });
      }
    }, [_v5, _v3, _v6, _v2]);
    (0, _v6.useUpdateEffect)(() => {
      _v10();
    }, [_v10]), (0, _v4.useEventListener)(_v6, "transitionend", _v10);
  }]);
}