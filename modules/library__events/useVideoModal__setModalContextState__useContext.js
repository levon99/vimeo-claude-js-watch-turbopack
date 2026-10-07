{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useVideoModal", 0, () => {
    let {
        setModalContextState: _v0
      } = (0, _v1.useContext)(_v2.VideoModalDispatchContext),
      _v1 = (0, _v1.useCallback)(_v0 => {
        _v0({
          isActive: !0,
          state: _v0
        });
      }, [_v0]);
    return {
      close: (0, _v1.useCallback)(() => {
        _v0({
          isActive: !1,
          state: null
        });
      }, [_v0]),
      open: _v1
    };
  }]);
}