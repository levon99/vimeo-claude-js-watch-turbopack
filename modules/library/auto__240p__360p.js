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
    objectFit: _v4 = "cover",
    quality: _v5 = "240p",
    setIsPlayerReady: _v6,
    setIsPlayerBroken: _v7
  }) => {
    let [_v8, _v9] = (0, _v2.useState)(!1),
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v2.useRef)(!1),
      {
        player: _v12
      } = (0, _v4.usePlayer)(_v10, _v0, "hover" === _v2 ? _v3 : _v8, _v1, !0, _v5[_v5], 0, void 0, () => {
        _v11.current = !0, _v7?.(!0);
      });
    return (0, _v2.useEffect)(() => {
      _v12 && (_v11.current = !1, _v7?.(!1));
    }, [_v12, _v7]), (0, _v2.useEffect)(() => {
      if (!window.IntersectionObserver || "visible" !== _v2) return;
      let _v0 = new IntersectionObserver(_v0 => {
        _v0.some(_v0 => _v0.isIntersecting) && (_v9(!0), _v0.disconnect());
      });
      return _v0 && _v10.current && _v0.observe(_v10.current), () => {
        _v0 && _v0.disconnect();
      };
    }, [_v2]), (0, _v2.useEffect)(() => {
      window.IntersectionObserver || !_v3 || _v8 || _v9(!0);
    }, [_v3, _v8]), (0, _v2.useEffect)(() => {
      if (!_v12) return;
      let _v0 = {
        error: () => {
          _v6(!1);
        },
        playing: () => {
          _v6(!0);
        },
        waiting: () => {
          _v6(!1);
        }
      };
      return Object.keys(_v0).forEach(_v0 => {
        _v12.on(_v0, _v0[_v0]);
      }), _v12.preload = "visible" === _v2 ? "metadata" : "auto", () => {
        _v12 && Object.keys(_v0).forEach(_v0 => {
          _v12.off(_v0, _v0[_v0]);
        });
      };
    }, [_v2, _v12, _v6]), (0, _v2.useEffect)(() => {
      _v12 && (_v3 && !_v11.current ? Promise.resolve().then(() => {
        let _v0 = _v12.play?.();
        return _v0?.then(() => {
          _v6(!0);
        });
      }).catch(() => {
        _v6(!1), _v11.current = !0;
      }) : _v12.pause?.());
    }, [_v3, _v12, _v6]), (0, _v1.jsx)(_v3.Flex, {
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      ref: _v10,
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
          objectFit: _v4,
          borderRadius: "12px",
          display: "block"
        }
      }
    });
  }]);
}