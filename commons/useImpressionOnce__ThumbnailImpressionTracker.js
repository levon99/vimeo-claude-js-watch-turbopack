{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => {
    let _v1 = (0, _v3.useRef)(null),
      _v2 = (0, _v3.useRef)(!1),
      _v3 = (0, _v3.useRef)(() => void 0);
    return (0, _v3.useEffect)(() => {
      _v3.current = _v0;
    }, [_v0]), (0, _v3.useEffect)(() => {
      let _v0 = _v1.current;
      if (!window.IntersectionObserver || null === _v0) return;
      let _v1 = null,
        _v2 = -1,
        _v3 = () => {
          let _v0 = _v0.getBoundingClientRect().height;
          if (_v0 === _v2 && null !== _v1 || (_v2 = _v0, _v1?.disconnect(), _v1 = null, _v2.current)) return;
          let _v1 = window.innerHeight;
          (_v1 = new IntersectionObserver(_v0 => {
            let _v1;
            if (_v2.current) return;
            let _v2 = _v0[_v0.length - 1];
            void 0 !== _v2 && _v2.intersectionRect.height >= ((_v1 = _v2.boundingClientRect.height) > 0 ? Math.min(_v1, window.innerHeight) : window.innerHeight) * .5 && (_v2.current = !0, _v1?.disconnect(), _v3.current());
          }, {
            threshold: _v0 > 0 && _v1 > 0 ? Math.min(1, .5 * Math.min(_v0, _v1) / _v0) : 0
          })).observe(_v0);
        };
      _v3();
      let _v4 = "u" < typeof ResizeObserver ? null : new ResizeObserver(_v3);
      return _v4?.observe(_v0), () => {
        _v1?.disconnect(), _v4?.disconnect();
      };
    }, []), _v1;
  };
  _v0.s(["useImpressionOnce", 0, _v4], 0), _v0.s(["ThumbnailImpressionTracker", 0, function ({
    onImpression: _v0,
    children: _v1
  }) {
    let _v2 = _v4(_v0);
    return (0, _v1.jsx)(_v2.Box, {
      ref: _v2,
      children: _v1
    });
  }], 0);
}