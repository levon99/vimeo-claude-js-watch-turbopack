{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0);
  let _v3 = {
    some: 0,
    all: 1
  };
  _v0.s(["useInView", 0, function (_v0, {
    root: _v1,
    margin: _v2,
    amount: _v3,
    once: _v4 = !1
  } = {}) {
    let [_v5, _v6] = (0, _v1.useState)(!1);
    return (0, _v1.useEffect)(() => {
      if (!_v0.current || _v4 && _v5) return;
      let _v0 = {
        root: _v1 && _v1.current || void 0,
        margin: _v2,
        amount: _v3
      };
      return function (_v0, _v1, {
        root: _v2,
        margin: _v3,
        amount: _v4 = "some"
      } = {}) {
        let _v5 = (0, _v2.resolveElements)(_v0),
          _v6 = new WeakMap(),
          _v7 = new IntersectionObserver(_v0 => {
            _v0.forEach(_v0 => {
              let _v1 = _v6.get(_v0.target);
              if (!!_v1 !== _v0.isIntersecting) if (_v0.isIntersecting) {
                let _v0 = _v1(_v0);
                "function" == typeof _v0 ? _v6.set(_v0.target, _v0) : _v7.unobserve(_v0.target);
              } else "function" == typeof _v1 && (_v1(_v0), _v6.delete(_v0.target));
            });
          }, {
            root: _v2,
            rootMargin: _v3,
            threshold: "number" == typeof _v4 ? _v4 : _v3[_v4]
          });
        return _v5.forEach(_v0 => _v7.observe(_v0)), () => _v7.disconnect();
      }(_v0.current, () => (_v6(!0), _v4 ? void 0 : () => _v6(!1)), _v0);
    }, [_v1, _v0, _v2, _v4, _v3]), _v5;
  }], 0);
}