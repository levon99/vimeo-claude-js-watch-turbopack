{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
      onPlay: "play",
      onPlaying: "playing",
      onPause: "pause",
      onEnded: "ended",
      onTimeupdate: "timeupdate",
      onProgress: "progress",
      onSeeking: "seeking",
      onSeeked: "seeked",
      onLoadedMetadata: "loadedmetadata",
      onTexttrackchange: "texttrackchange",
      onChapterchange: "chapterchange",
      onCuechange: "cuechange",
      onCuepoint: "cuepoint",
      onVolumechange: "volumechange",
      onPlaybackratechange: "playbackratechange",
      onBufferstart: "bufferstart",
      onBufferend: "bufferend",
      onError: "error",
      onLoaded: "loaded",
      onDurationchange: "durationchange",
      onFullscreenchange: "fullscreenchange",
      onQualitychange: "qualitychange",
      onCamerachange: "camerachange",
      onResize: "resize",
      onEnterpictureinpicture: "enterpictureinpicture",
      onLeavepictureinpicture: "leavepictureinpicture",
      onRemoteplaybackavailabilitychange: "remoteplaybackavailabilitychange",
      onRemoteplaybackconnecting: "remoteplaybackconnecting",
      onRemoteplaybackconnect: "remoteplaybackconnect",
      onRemoteplaybackdisconnect: "remoteplaybackdisconnect",
      onInteractivehotspotclicked: "interactivehotspotclicked",
      onInteractiveoverlaypanelclicked: "interactiveoverlaypanelclicked"
    },
    _v6 = (0, _v3.shouldShowInDevelopmentFeature)("EMBED_PLAYER_DEBUG", !0),
    _v7 = _v2.default.forwardRef((_v0, _v1) => {
      let {
          src: _v2 = "",
          configUrl: _v3 = "",
          title: _v4 = "Vimeo Player",
          style: _v5,
          disableAPI: _v6 = !1,
          onPlayerAPIReady: _v7,
          ..._v8
        } = _v0,
        [_v9, _v10] = (0, _v2.useState)(!_v6),
        [_v11, _v12] = (0, _v2.useState)(!1),
        _v13 = (0, _v4.useHasMounted)(),
        _v14 = (0, _v2.useRef)(null),
        _v15 = (0, _v2.useRef)(null);
      (0, _v2.useEffect)(() => {
        if (!_v13 || !_v14.current) return;
        if (_v6 || !window.Vimeo?.Player) return void _v10(!1);
        let _v0 = !0,
          _v1 = null;
        try {
          var _v2;
          let _v0,
            _v1 = (_v2 = _v1 = new window.Vimeo.Player(_v14.current), _v0 = (_v0, _v1) => {
              try {
                let _v0 = _v1();
                if (_v0 instanceof Promise) return _v0.catch(_v0 => {
                  console.error(`Error calling ${_v0}:`, _v0);
                });
                return _v0;
              } catch (_v0) {
                console.error(`Error calling ${_v0}:`, _v0);
                return;
              }
            }, new Proxy(_v2, {
              get(_v0, _v1) {
                if (_v1 in _v0) {
                  let _v0 = _v0[_v1];
                  return "function" == typeof _v0 ? (..._v0) => _v0(_v1, () => _v0.apply(_v0, _v0)) : _v0;
                }
                if ("string" == typeof _v1 && _v1.startsWith("_") && _v0?.callMethod) return (..._v0) => _v0(_v1, () => _v0.callMethod(_v1, ..._v0));
              },
              set(_v0, _v1, _v2) {
                if ("string" == typeof _v1 && _v1.startsWith("_") && _v0?.callMethod) try {
                  let _v0 = `set${_v1}`;
                  return _v0.callMethod(_v0, _v2), !0;
                } catch (_v0) {
                  console.error(`Error calling ${_v1} setter with callMethod:`, _v0);
                }
                return !1;
              }
            }));
          _v1.on("loaded", () => {
            _v0 && _v12(!0);
          }), _v0 && (_v15.current = _v1, _v6 && console.log("DEBUG:: Player API initialized."));
        } catch (_v0) {
          console.error("Error initializing player:", _v0), _v0 && _v10(!1);
        }
        return () => {
          _v0 = !1, _v1 && _v1.off("loaded"), _v15.current = null;
        };
      }, [_v13, _v6]);
      let _v16 = (0, _v2.useRef)(_v2);
      (0, _v2.useEffect)(() => {
        let _v0 = _v15.current;
        _v0 && _v3 && (_v12(!1), _v0.loadVideo(_v3).then(() => _v12(!0)));
      }, [_v3]), (0, _v2.useEffect)(() => {
        let _v0 = _v15.current;
        _v11 && _v0 && _v7 && (_v6 && console.log("DEBUG:: Player API Ready."), _v7(_v0));
      }, [_v11, _v7]);
      let _v17 = (0, _v2.useMemo)(() => Object.keys(_v8).reduce((_v0, _v1) => {
        let _v2 = _v8[_v1],
          _v3 = _v5[_v1];
        return _v2 && _v3 && _v0.push({
          eventName: _v3,
          callback: _v2
        }), _v0;
      }, []), [_v8]);
      return (0, _v2.useEffect)(() => {
        let _v0 = _v15.current;
        return _v11 && _v0 && _v17.forEach(({
          eventName: _v0,
          callback: _v1
        }) => {
          _v0.on(_v0, _v1);
        }), () => {
          _v0 && _v11 && _v17.forEach(({
            eventName: _v0
          }) => {
            _v0.off(_v0);
          });
        };
      }, [_v11, _v17]), (0, _v2.useImperativeHandle)(_v1, () => _v14.current, []), (0, _v1.jsx)("iframe", {
        ref: _v14,
        title: _v4,
        src: _v9 ? _v16.current : _v2,
        allow: "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
        style: {
          width: "100%",
          height: "100%",
          border: "0",
          ..._v5
        },
        "data-embed-url": _v2,
        referrerPolicy: "unsafe-url"
      });
    });
  _v0.s(["EmbedPlayer", 0, _v7], 0);
}