{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useHorizontalScrollSettle", 0, ({
    enabled: _v0,
    onSettle: _v1
  }) => {
    let _v2 = (0, _v1.useRef)(null),
      _v3 = (0, _v1.useRef)(null),
      _v4 = (0, _v1.useRef)(!1),
      _v5 = (0, _v1.useRef)(!1),
      _v6 = (0, _v1.useRef)(null),
      _v7 = (0, _v1.useEffectEvent)(_v0 => {
        _v1?.(_v0);
      }),
      _v8 = "onscrollend" in window;
    return (0, _v1.useEffect)(() => {
      let _v0 = _v2.current;
      if (!_v0 || null === _v0) return;
      _v3.current ??= _v0.scrollLeft;
      let _v1 = () => {
          if (!_v4.current) return;
          _v4.current = !1;
          let _v0 = _v5.current;
          _v5.current = !1, null !== _v6.current && (window.clearTimeout(_v6.current), _v6.current = null);
          let _v1 = _v3.current ?? _v0.scrollLeft,
            _v2 = _v0.scrollLeft,
            _v3 = _v2 - _v1;
          _v3.current = _v2, !_v0 || 16 > Math.abs(_v3) || 0 === _v0.clientWidth || _v7({
            direction: _v3 > 0 ? "next" : "previous",
            page: Math.round(_v2 / _v0.clientWidth)
          });
        },
        _v2 = () => {
          _v4.current = !0, null !== _v6.current && window.clearTimeout(_v6.current), _v6.current = window.setTimeout(_v1, 150);
        },
        _v3 = _v0 => {
          "mouse" !== _v0.pointerType && (_v5.current = !0);
        },
        _v4 = () => {
          _v4.current || (_v5.current = !1);
        };
      return _v0.addEventListener("scroll", _v2, {
        passive: !0
      }), _v0.addEventListener("pointerdown", _v3, {
        passive: !0
      }), _v0.addEventListener("pointerup", _v4, {
        passive: !0
      }), _v8 && _v0.addEventListener("scrollend", _v1), () => {
        _v0.removeEventListener("scroll", _v2), _v0.removeEventListener("pointerdown", _v3), _v0.removeEventListener("pointerup", _v4), _v8 && _v0.removeEventListener("scrollend", _v1), null !== _v6.current && (window.clearTimeout(_v6.current), _v6.current = null), _v4.current = !1, _v5.current = !1, _v3.current = null;
      };
    }, [_v0, _v8]), _v2;
  }]);
}