{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["OverflowToolTip", 0, ({
    children: _v0,
    labelToolTip: _v1,
    placement: _v2 = "top",
    ..._v3
  }) => {
    let _v4 = (0, _v2.useRef)(null),
      [_v5, _v6] = (0, _v2.useState)(!1),
      _v7 = () => {
        let _v0 = _v4.current;
        _v6((_v0?.offsetWidth ?? 0) < (_v0?.scrollWidth ?? 0));
      };
    (0, _v2.useEffect)(() => {
      _v7();
    }, []);
    let _v8 = (0, _v2.cloneElement)(_v0, {
      onMouseEnter: _v7,
      ref: _v4
    });
    return (0, _v1.jsx)(_v3.Tooltip, {
      label: _v1,
      isDisabled: !_v5,
      placement: _v2,
      ..._v3,
      children: _v8
    });
  }]);
}