{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = (null == globalThis ? void 0 : globalThis.document) ? _v1.useLayoutEffect : _v1.useEffect;
  function _v3({
    getNodes: _v0,
    observeMutation: _v1 = !0
  }) {
    let [_v2, _v3] = (0, _v1.useState)([]),
      [_v4, _v5] = (0, _v1.useState)(0);
    return _v2(() => {
      let _v0 = _v0(),
        _v1 = _v0.map((_v0, _v1) => function (_v0, _v1) {
          if (!_v0) return void _v1(void 0);
          _v1({
            width: _v0.offsetWidth,
            height: _v0.offsetHeight
          });
          let _v2 = new (_v0.ownerDocument.defaultView ?? window).ResizeObserver(_v0 => {
            let _v1, _v2;
            if (!Array.isArray(_v0) || !_v0.length) return;
            let [_v3] = _v0;
            if ("borderBoxSize" in _v3) {
              let _v0 = _v3.borderBoxSize,
                _v1 = Array.isArray(_v0) ? _v0[0] : _v0;
              _v1 = _v1.inlineSize, _v2 = _v1.blockSize;
            } else _v1 = _v0.offsetWidth, _v2 = _v0.offsetHeight;
            _v1({
              width: _v1,
              height: _v2
            });
          });
          return _v2.observe(_v0, {
            box: "border-box"
          }), () => _v2.unobserve(_v0);
        }(_v0, _v0 => {
          _v3(_v0 => [..._v0.slice(0, _v1), _v0, ..._v0.slice(_v1 + 1)]);
        }));
      if (_v1) {
        let _v0 = _v0[0];
        _v1.push(function (_v0, _v1) {
          var _v2, _v3;
          if (!_v0 || !_v0.parentElement) return;
          let _v4 = new (null != (_v3 = null == (_v2 = _v0.ownerDocument) ? void 0 : _v2.defaultView) ? _v3 : window).MutationObserver(() => {
            _v1();
          });
          return _v4.observe(_v0.parentElement, {
            childList: !0
          }), () => {
            _v4.disconnect();
          };
        }(_v0, () => {
          _v5(_v0 => _v0 + 1);
        }));
      }
      return () => {
        _v1.forEach(_v0 => {
          null == _v0 || _v0();
        });
      };
    }, [_v4]), _v2;
  }
  _v0.s(["useSize", 0, function (_v0) {
    let [_v1] = _v3({
      observeMutation: !1,
      getNodes: () => ["object" == typeof _v0 && null !== _v0 && "current" in _v0 ? _v0.current : _v0]
    });
    return _v1;
  }, "useSizes", 0, _v3], 0);
}