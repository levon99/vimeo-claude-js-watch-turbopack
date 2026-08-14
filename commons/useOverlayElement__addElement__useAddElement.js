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
    _v10 = _v0.i(0);
  _v0.s(["useOverlayElement", 0, () => {
    let {
        addElement: _v0
      } = (0, _v10.useAddElement)(),
      {
        getCurrentTimeFromRef: _v1
      } = (0, _v4.useDragonfly)(),
      _v2 = (0, _v6.useAppSelector)(_v5.durationSelector);
    return {
      addOverlayElement: (0, _v1.useCallback)(({
        overlayId: _v0,
        name: _v1,
        duration: _v2,
        isIgnoreUndo: _v3 = !1
      }) => {
        let _v4 = (({
          startTime: _v0 = 0,
          duration: _v1 = _v3.DEFAULT_OVERLAY_DURATION,
          overlayId: _v2 = "",
          videoDuration: _v3
        }) => {
          let _v4 = (0, _v9.getSafeTime)(_v0 + _v1, _v3),
            _v5 = (0, _v9.getSafeTime)(_v4 - _v1, _v3);
          return {
            id: (0, _v8.createUuidV4)(),
            type: _v7.CompositionElementType.OVERLAY,
            rect: _v2.DEFAULT_RECT,
            overlayId: _v2,
            compositionTiming: {
              start: _v5,
              end: _v4
            },
            selectable: !0
          };
        })({
          startTime: _v1(),
          duration: _v2,
          videoDuration: _v2,
          overlayId: _v0
        });
        return _v0(_v4, {
          copy: _v1,
          isIgnoreUndo: _v3
        }), _v4.id;
      }, [_v0, _v1, _v2])
    };
  }]);
}