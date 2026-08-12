{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["FixableContainer", 0, function ({
    fixed: _v0,
    children: _v1,
    as: _v2 = "div",
    style: _v3
  }) {
    let _v4 = (0, _v2.useRef)(null),
      [_v5, _v6] = (0, _v2.useState)(0),
      _v7 = _v2.Children.toArray(_v1).length,
      _v8 = (0, _v2.createElement)(_v2, {
        ref: _v4,
        style: {
          width: "100%",
          ..._v3,
          ...(_v0 && {
            position: "fixed",
            zIndex: 100
          })
        }
      }, _v1);
    return (0, _v2.useEffect)(() => {
      if (_v7 < 1 || !_v0 || !_v4.current) return;
      let _v0 = new _v3.default(_v0 => {
        let {
          height: _v1
        } = _v0[0].contentRect;
        _v6(_v1);
      });
      return _v0.observe(_v4.current), () => _v0?.disconnect();
    }, [_v0, _v4.current, _v7]), _v7 > 0 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v8, _v0 && (0, _v1.jsx)("div", {
        style: {
          marginTop: `${_v5}px`
        }
      })]
    }) : null;
  }]);
}