{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useAnimationState", 0, function (_v0) {
    let {
        isOpen: _v1,
        ref: _v2
      } = _v0,
      [_v3, _v4] = (0, _v1.useState)(_v1),
      [_v5, _v6] = (0, _v1.useState)(!1);
    return (0, _v1.useEffect)(() => {
      _v5 || (_v4(_v1), _v6(!0));
    }, [_v1, _v5, _v3]), (0, _v2.useEventListener)(() => _v2.current, "animationend", () => {
      _v4(_v1);
    }), {
      present: !(!_v1 && !_v3),
      onComplete() {
        var _v0;
        let _v1 = new ((0, _v3.getOwnerWindow)(_v2.current).CustomEvent)("animationend", {
          bubbles: !0
        });
        null == (_v0 = _v2.current) || _v0.dispatchEvent(_v1);
      }
    };
  }]);
}