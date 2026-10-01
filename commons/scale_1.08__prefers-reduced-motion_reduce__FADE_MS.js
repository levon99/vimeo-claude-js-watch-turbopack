{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = "scale(1.08)";
  function _v5() {
    return (0, _v2.useMemo)(() => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, []);
  }
  _v0.s(["FADE_MS", 0, 0, "GLOW_BLUR_RATIO", 0, .07, "GLOW_OPACITY", 0, .6, "GLOW_SATURATE", 0, 1.6, "GLOW_TRANSFORM", 0, _v4, "SAMPLE_H", 0, 18, "SAMPLE_W", 0, 32], 0);
  let _v6 = (0, _v2.forwardRef)(function ({
    visible: _v0,
    aspectRatio: _v1,
    instant: _v2 = !1
  }, _v3) {
    let _v4 = (0, _v2.useRef)(null),
      [_v5, _v6] = (0, _v2.useState)(null),
      [_v7, _v8] = (0, _v2.useState)(null),
      _v9 = (0, _v2.useMemo)(() => function (_v0) {
        if (!_v0) return null;
        let [_v1, _v2] = _v0.split("/").map(_v0 => parseFloat(_v0.trim()));
        return _v1 > 0 && _v2 > 0 ? _v1 / _v2 : null;
      }(_v1), [_v1]),
      _v10 = _v5(),
      _v11 = `blur(${_v7 ? .07 * _v7 : 0}px) saturate(1.6)`;
    return (0, _v2.useEffect)(() => {
      let _v0 = _v4.current;
      if (!_v0) return;
      let _v1 = () => {
        let _v0 = _v0.clientWidth,
          _v1 = _v0.clientHeight;
        _v0 && _v1 && (_v8(_v0), _v6(_v9 ? _v0 / _v1 > _v9 ? {
          w: _v1 * _v9,
          h: _v1
        } : {
          w: _v0,
          h: _v0 / _v9
        } : null));
      };
      _v1();
      let _v2 = new ResizeObserver(_v1);
      return _v2.observe(_v0), () => _v2.disconnect();
    }, [_v9]), (0, _v1.jsx)(_v3.Box, {
      ref: _v4,
      "aria-hidden": !0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      w: "100%",
      h: "100%",
      pointerEvents: "none",
      opacity: +!!_v0,
      sx: {
        transition: _v10 || _v2 ? "none" : "opacity 2000ms ease-in-out",
        "& canvas": {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          transform: _v4,
          filter: _v11,
          opacity: .6,
          willChange: _v0 ? "filter" : "auto"
        }
      },
      children: (0, _v1.jsx)(_v3.Box, {
        position: "relative",
        style: _v5 ? {
          width: `${_v5.w}px`,
          height: `${_v5.h}px`
        } : {
          width: "100%",
          height: "100%"
        },
        children: (0, _v1.jsx)("canvas", {
          ref: _v3,
          width: 32,
          height: 18
        })
      })
    });
  });
  _v0.s(["AmbientGlowCanvas", 0, _v6, "usePrefersReducedMotion", 0, _v5], 0);
}