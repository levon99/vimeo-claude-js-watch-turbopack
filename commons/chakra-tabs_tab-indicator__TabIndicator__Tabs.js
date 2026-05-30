{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v0.i(0).forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v3.useTabIndicator)(),
        _v3 = {
          ..._v0.style,
          ..._v2
        },
        _v4 = (0, _v2.useTabsStyles)();
      return (0, _v1.jsx)(_v5.chakra.div, {
        ref: _v1,
        ..._v0,
        className: (0, _v4.cx)("chakra-tabs__tab-indicator", _v0.className),
        style: _v3,
        __css: _v4.indicator
      });
    });
  _v6.displayName = "TabIndicator";
  var _v7 = _v0.i(0);
  let _v8 = (0, _v7.createContext)(0);
  _v0.s(["TabIndicator", 0, _v0 => {
    let _v1 = (0, _v7.useContext)(_v8);
    return (0, _v1.jsx)(_v6, {
      ..._v0
    }, `tab-indicator=${_v1}`);
  }, "Tabs", 0, _v0 => {
    let _v1 = (0, _v7.useRef)(null),
      [_v2, _v3] = (0, _v7.useState)(0);
    return (0, _v7.useEffect)(() => {
      let _v0 = _v1.current,
        _v1 = new ResizeObserver(() => {
          _v0 && _v3(_v0.getBoundingClientRect().width);
        });
      return _v0 && _v1.observe(_v0), () => {
        _v0 && _v1.unobserve(_v0);
      };
    }, []), (0, _v1.jsx)(_v8.Provider, {
      value: _v2,
      children: (0, _v1.jsx)(_v2.Tabs, {
        ref: _v1,
        ..._v0
      })
    });
  }], 0);
}