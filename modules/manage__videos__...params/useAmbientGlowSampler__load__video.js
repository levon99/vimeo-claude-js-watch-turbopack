{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = 0 / 30;
  _v0.s(["useAmbientGlowSampler", 0, function (_v0, {
    player: _v1,
    playerReady: _v2,
    playerContainerRef: _v3,
    seedVisible: _v4 = !1,
    posterUrl: _v5 = null
  }) {
    let [_v6, _v7] = (0, _v1.useState)(!1),
      _v8 = (0, _v2.usePrefersReducedMotion)();
    return (0, _v1.useEffect)(() => {
      if (!_v1 || !_v2) return;
      let _v0 = (Array.isArray(_v0) ? _v0 : [_v0]).map(_v0 => _v0.current?.getContext("2d")).filter(_v0 => !!_v0);
      if (0 === _v0.length) return;
      let _v1 = null;
      _v5 && ((_v1 = new Image()).src = _v5);
      let _v2 = null,
        _v3 = null,
        _v4 = 0,
        _v5 = null,
        _v6 = _v0 => {
          if (_v2 && !(_v2.readyState < 2)) for (let _v0 of _v0) try {
            _v0.globalAlpha = _v0, _v0.drawImage(_v2, 0, 0, _v3.SAMPLE_W, _v3.SAMPLE_H);
          } catch {} finally {
            _v0.globalAlpha = 1;
          }
        },
        _v7 = () => {
          if (!_v1 || !_v1.complete || 0 === _v1.naturalWidth) return !1;
          let _v0 = !1;
          for (let _v0 of _v0) try {
            _v0.drawImage(_v1, 0, 0, _v3.SAMPLE_W, _v3.SAMPLE_H), _v0 = !0;
          } catch {}
          return _v0;
        },
        _v8 = _v0 => {
          0 === _v4 && (_v4 = _v0);
          let _v1 = _v0 - _v4;
          _v1 >= _v4 && (_v4 = _v0, _v6(1 - Math.exp(-Math.min(_v1, 200) / 0))), _v3 = requestAnimationFrame(_v8);
        },
        _v9 = () => {
          null != _v3 || document.hidden || _v8 || (_v4 = 0, _v3 = requestAnimationFrame(_v8));
        },
        _v10 = () => {
          null != _v3 && cancelAnimationFrame(_v3), _v3 = null;
        },
        _v11 = () => {
          _v7(!0), _v9();
        },
        _v12 = () => {
          _v10();
        },
        _v13 = () => {
          _v7(!1), _v10();
        },
        _v14 = () => {
          _v1.paused && _v6(1);
        },
        _v15 = () => {
          document.hidden ? _v10() : _v1.paused || _v9();
        },
        _v16 = () => _v6(1),
        _v17 = () => {
          _v4 ? (_v7(!0), _v2 && _v2.readyState >= 2 ? _v6(1) : _v7() || _v1?.addEventListener("load", () => _v7(), {
            once: !0
          })) : _v7(!1);
        },
        _v18 = () => !!(_v2 = _v3.current?.querySelector("video") ?? null) && (_v6(1), _v2.addEventListener("loadeddata", _v16), _v1.paused ? _v17() : (_v7(!0), _v9()), !0);
      return !_v18() && (_v1.paused && _v17(), _v3.current && (_v5 = new MutationObserver(() => {
        _v18() && (_v5?.disconnect(), _v5 = null);
      })).observe(_v3.current, {
        childList: !0,
        subtree: !0
      })), _v1.on("play", _v11), _v1.on("pause", _v12), _v1.on("ended", _v13), _v1.on("seeked", _v14), document.addEventListener("visibilitychange", _v15), () => {
        _v10(), _v5?.disconnect(), _v2?.removeEventListener("loadeddata", _v16), _v1.off("play", _v11), _v1.off("pause", _v12), _v1.off("ended", _v13), _v1.off("seeked", _v14), document.removeEventListener("visibilitychange", _v15);
      };
    }, [_v0, _v1, _v2, _v3, _v8, _v4, _v5]), {
      visible: _v6
    };
  }]);
}