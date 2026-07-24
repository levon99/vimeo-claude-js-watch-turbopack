{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useInitGlobalStore", 0, ({
    clipId: _v0,
    clipHash: _v1,
    trackingContextConfig: _v2
  }) => {
    let _v3 = (0, _v2.useGlobalStore)(({
        clip: _v0
      }) => _v0.actions.setClipParams),
      _v4 = (0, _v2.useGlobalStore)(({
        util: _v0
      }) => _v0.actions.setTrackingContextConfig),
      _v5 = (0, _v2.useGlobalStore)(({
        clip: _v0
      }) => _v0.actions.resetClip),
      _v6 = (0, _v1.useRef)(_v2);
    _v6.current = _v2, (0, _v1.useEffect)(() => {
      if (_v0) return _v3(_v0, _v1), _v4(_v6.current), () => {
        _v5();
      };
    }, [_v0, _v1, _v3, _v4, _v5]);
  }]);
}