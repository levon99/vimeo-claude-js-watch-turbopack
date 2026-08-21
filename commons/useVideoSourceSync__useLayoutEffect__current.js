{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useVideoSourceSync", 0, function (_v0, _v1) {
    (0, _v1.useLayoutEffect)(() => {
      let _v0 = _v0.current;
      if (!_v0) return;
      let _v1 = !!_v1 && 0 === _v1.getTracks().length,
        _v2 = _v0.srcObject,
        _v3 = !!(_v1 && _v2 && !(0, _v2.areSameVideos)(_v1, _v2));
      _v1 ? _v0.srcObject = null : _v3 ? (_v0.srcObject = null, _v0.srcObject = _v1) : _v1 !== _v2 && (_v0.srcObject = _v1);
    }, [_v1, (0, _v2.getStreamVideoTrack)(_v1)]), (0, _v1.useLayoutEffect)(() => () => {
      _v0.current && (_v0.current.srcObject = null);
    }, []);
  }]);
}