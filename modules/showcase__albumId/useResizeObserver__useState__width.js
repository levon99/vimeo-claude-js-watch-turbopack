{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useResizeObserver", 0, function () {
    let [_v0, _v1] = (0, _v1.useState)(null),
      [_v2, _v3] = (0, _v1.useState)({
        width: 0,
        height: 0
      }),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v1(_v0);
      }, []);
    return (0, _v1.useEffect)(() => {
      if (!_v0) return;
      let _v0 = new _v2.default(_v0 => {
        for (let _v0 of _v0) _v0.target === _v0 && _v3({
          width: _v0.contentRect.width,
          height: _v0.contentRect.height
        });
      });
      return _v0.observe(_v0), () => {
        _v0.disconnect();
      };
    }, [_v0]), {
      ref: _v4,
      dimension: _v2
    };
  }]);
}