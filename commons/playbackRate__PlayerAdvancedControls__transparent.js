{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  function _v24({
    onPlaybackRateChange: _v0
  }) {
    let {
        playbackRate: _v1
      } = (0, _v21.usePlayerState)("playbackRate"),
      _v2 = (0, _v2.useRef)(!1);
    return (0, _v2.useEffect)(() => {
      if (!_v2.current) {
        _v2.current = !0;
        return;
      }
      _v0?.(_v1.value);
    }, [_v1.value, _v0]), null;
  }
  _v0.s(["PlayerAdvancedControls", 0, function ({
    ref: _v0,
    player: _v1,
    isShown: _v2,
    isShowAdvancedPlayBar: _v3,
    playerContainerWidth: _v4,
    playerContainerHeight: _v5,
    onControlsHeightChange: _v6,
    children: _v7,
    enableLinks: _v8,
    onPlaybackRateChange: _v9,
    transparentBackground: _v10,
    ..._v11
  }) {
    let _v12 = (0, _v20.usePlayerReady)(_v1),
      _v13 = (0, _v23.useShowAdvancedControlsFeature)(_v3),
      _v14 = _v2 && _v13,
      [_v15, {
        height: _v16
      }] = (0, _v22.useResizeObserver)({
        isEnabled: _v14
      }),
      _v17 = (0, _v19.useBreakpoints)({
        isEnabled: _v14 && _v12
      });
    return (0, _v2.useEffect)(() => {
      _v6?.(_v16);
    }, [_v16, _v6]), (0, _v1.jsxs)(_v6.VStack, {
      ref: _v0,
      ..._v11,
      ...(_v14 ? {
        background: _v10 ? "transparent" : "fill-component",
        padding: "md",
        gap: 0,
        borderRadius: "lg"
      } : {}),
      children: [(0, _v1.jsx)(_v3.Box, {
        width: _v4 ?? "100%",
        height: _v5 ?? `calc(100% - ${_v16}px)`,
        children: _v7
      }), _v14 && (0, _v1.jsx)(_v3.Box, {
        ref: _v15,
        width: "100%",
        paddingTop: "lg",
        children: _v1 && _v12 ? (0, _v1.jsxs)(_v18.ProvidePlayerActions, {
          player: _v1,
          children: [(0, _v1.jsx)(_v24, {
            onPlaybackRateChange: _v9
          }), (0, _v1.jsxs)(_v6.VStack, {
            width: "100%",
            gap: "sm",
            children: [(0, _v1.jsx)(_v12.Playbar, {
              framesPreview: _v1.config.request.thumb_preview,
              enableLinks: _v8
            }), (0, _v1.jsxs)(_v4.HStack, {
              ref: _v17,
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              children: [(0, _v1.jsxs)(_v4.HStack, {
                children: [(0, _v1.jsx)(_v10.Playback, {}), (0, _v1.jsx)(_v9.Loop, {}), (0, _v1.jsx)(_v16.Time, {})]
              }), (0, _v1.jsxs)(_v4.HStack, {
                children: [(0, _v1.jsx)(_v17.Volume, {}), (0, _v1.jsx)(_v8.Languages, {}), (0, _v1.jsx)(_v11.PlaybackRate, {}), (0, _v1.jsx)(_v14.Quality, {}), (0, _v1.jsx)(_v13.PreviewShortcuts, {}), (0, _v1.jsx)(_v7.Fullscreen, {}), (0, _v1.jsx)(_v15.Settings, {})]
              })]
            })]
          })]
        }) : (0, _v1.jsx)(_v5.Skeleton, {
          width: "100%",
          height: "2xl",
          borderRadius: "sm"
        })
      })]
    });
  }]);
}