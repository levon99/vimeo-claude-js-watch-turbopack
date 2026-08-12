{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useCanvasPreviewScaleObserver", 0, function (_v0, _v1, _v2 = 1.25, _v3 = 250, _v4 = !1) {
    let _v5 = (0, _v3.useCallback)(() => {
      _v0.current && (_v0.current.style.maxWidth = _v4 ? _v4.graphicsConfig.SCENE.FULLSCREEN_MODE_MAX_WIDTH + "px" : (0, _v1.default)(Math.floor((window.innerHeight - _v1) * _v2), _v4.graphicsConfig.SCENE.MIN_WIDTH, _v4.graphicsConfig.SCENE.MAX_WIDTH) + "px");
    }, [_v0, _v2, _v1, _v4]);
    (0, _v3.useLayoutEffect)(() => {
      let _v0 = (0, _v2.default)(_v5, _v3);
      return _v5(), window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
    }, [_v5, _v3]);
  }], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useSceneScreenShare", 0, function (_v0, _v1, _v2, _v3, _v4) {
    return (0, _v3.useMemo)(() => {
      if (!_v0 || !_v3 || !_v1) return null;
      if (_v2 && _v0 === _v1) if (!(0, _v7.isScreenSharingInScene)(_v3, (0, _v6.parseAgoraConnectionDetails)(_v1))) return null;else {
        let [_v0, _v1] = (0, _v6.parseAgoraConnectionDetails)(_v1);
        return [_v1, _v2, (0, _v6.formatConnectionUidByType)(_v0 === _v5.EAgoraConnectionType.GUEST_SCREEN ? _v5.EAgoraConnectionType.GUEST : _v5.EAgoraConnectionType.BROADCASTER, _v1)];
      }
      let _v0 = _v4.find(_v0 => _v0.type === _v5.EAgoraConnectionType.BROADCASTER_SCREEN || _v0.type === _v5.EAgoraConnectionType.GUEST_SCREEN) || null,
        _v1 = _v0 ? (0, _v6.parseAgoraConnectionDetails)(_v0.uid) : null;
      if (!_v1 || _v0?.uid !== _v0) return null;
      {
        let [_v0, _v1] = _v1;
        return _v0?.video && (0, _v7.isScreenSharingInScene)(_v3, _v1) ? [_v0.uid, _v0.video, (0, _v6.formatConnectionUidByType)(_v0.type === _v5.EAgoraConnectionType.GUEST_SCREEN ? _v5.EAgoraConnectionType.GUEST : _v5.EAgoraConnectionType.BROADCASTER, _v1)] : null;
      }
    }, [_v0, _v1, _v2, _v3, _v4]);
  }], 0);
  var _v8 = _v0.i(0);
  _v0.s(["useSceneStatusLabel", 0, function (_v0, _v1, _v2, _v3) {
    return (0, _v3.useMemo)(() => {
      if (_v0) {
        if (_v2 && !_v3) return _v8.T_RECORDING;
        if (_v1 && !_v3) return _v8.T_LIVE;
      }
      return "";
    }, [_v0, _v2, _v3, _v1]);
  }], 0);
}