{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
    Auto: "auto",
    "240p": "240p",
    "360p": "360p",
    "540p": "540p",
    "720p": "720p",
    "1080p": "1080p",
    "2k": "2k",
    "4k": "4k"
  };
  _v0.s(["VideoCardPlayer", 0, ({
    clipId: _v0,
    configUrl: _v1,
    initEvent: _v2 = "hover",
    isHovering: _v3,
    onPreviewPlay: _v4,
    objectFit: _v5 = "cover",
    quality: _v6 = "240p",
    setIsPlayerReady: _v7,
    setIsPlayerBroken: _v8
  }) => {
    let [_v9, _v10] = (0, _v2.useState)(!1),
      _v11 = (0, _v2.useRef)(null),
      _v12 = (0, _v2.useRef)(!1),
      _v13 = (0, _v2.useRef)(!1),
      _v14 = (0, _v2.useEffectEvent)(() => {
        _v3 && !_v13.current && (_v13.current = !0, _v4?.());
      });
    (0, _v2.useEffect)(() => {
      _v3 || (_v13.current = !1);
    }, [_v3]);
    let {
      player: _v15
    } = (0, _v4.usePlayer)(_v11, _v0, "hover" === _v2 ? _v3 : _v9, _v1, !0, _v5[_v6], 0, void 0, () => {
      _v12.current = !0, _v8?.(!0);
    });
    return (0, _v2.useEffect)(() => {
      _v15 && (_v12.current = !1, _v8?.(!1));
    }, [_v15, _v8]), (0, _v2.useEffect)(() => {
      if (!window.IntersectionObserver || "visible" !== _v2) return;
      let _v0 = new IntersectionObserver(_v0 => {
        _v0.some(_v0 => _v0.isIntersecting) && (_v10(!0), _v0.disconnect());
      });
      return _v0 && _v11.current && _v0.observe(_v11.current), () => {
        _v0 && _v0.disconnect();
      };
    }, [_v2]), (0, _v2.useEffect)(() => {
      window.IntersectionObserver || !_v3 || _v9 || _v10(!0);
    }, [_v3, _v9]), (0, _v2.useEffect)(() => {
      if (!_v15) return;
      let _v0 = {
        error: () => {
          _v7(!1);
        },
        playing: () => {
          _v7(!0), _v14();
        },
        waiting: () => {
          _v7(!1);
        }
      };
      return Object.keys(_v0).forEach(_v0 => {
        _v15.on(_v0, _v0[_v0]);
      }), _v15.preload = "visible" === _v2 ? "metadata" : "auto", () => {
        _v15 && Object.keys(_v0).forEach(_v0 => {
          _v15.off(_v0, _v0[_v0]);
        });
      };
    }, [_v2, _v15, _v7]), (0, _v2.useEffect)(() => {
      _v15 && (_v3 && !_v12.current ? Promise.resolve().then(() => {
        let _v0 = _v15.play?.();
        return _v0?.then(() => {
          _v7(!0);
        });
      }).catch(() => {
        _v7(!1), _v12.current = !0;
      }) : _v15.pause?.());
    }, [_v3, _v15, _v7]), (0, _v1.jsx)(_v3.Flex, {
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      ref: _v11,
      sx: {
        ".vp-video-wrapper": {
          height: "100%",
          width: "100%"
        },
        ".vp-video": {
          height: "100%",
          width: "100%"
        },
        ".vp-telecine": {
          height: "100%",
          width: "100%",
          borderRadius: "12px",
          overflow: "clip"
        },
        ".vp-telecine video": {
          height: "100%",
          width: "100%",
          objectFit: _v5,
          borderRadius: "12px",
          display: "block"
        }
      }
    });
  }]);
}