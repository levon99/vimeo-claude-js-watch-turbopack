{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["default", 0, _v0 => {
    let [_v1, _v2] = (0, _v1.useState)({
        width: 0,
        height: 0,
        x: 0,
        y: 0
      }),
      _v3 = (0, _v1.useCallback)(_v0 => {
        if (!_v0) return;
        let _v1 = _v0[0],
          {
            width: _v2,
            height: _v3
          } = _v1.contentRect,
          {
            offsetTop: _v4,
            offsetLeft: _v5,
            offsetParent: _v6
          } = _v1.target;
        _v2({
          width: _v2,
          height: _v3,
          y: _v4 + (_v6 ? _v6.offsetTop : 0),
          x: _v5 + (_v6 ? _v6.offsetLeft : 0)
        });
      }, [_v2]),
      _v4 = (0, _v1.useCallback)(() => {
        _v0.current && _v3([{
          contentRect: _v0.current.getBoundingClientRect(),
          target: _v0.current
        }]);
      }, [_v3, _v0]);
    return (0, _v1.useEffect)(() => {
      let _v0 = new ResizeObserver(_v3);
      return _v0.current && _v0.observe(_v0.current), window.addEventListener("resize", _v4), () => {
        _v0.disconnect(), window.removeEventListener("resize", _v4);
      };
    }, [_v0, _v3, _v4]), _v1;
  }]);
}