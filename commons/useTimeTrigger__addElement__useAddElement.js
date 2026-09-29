{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useTimeTrigger", 0, () => {
    let {
        addElement: _v0
      } = (0, _v8.useAddElement)(),
      {
        getStoryboardMetadata: _v1,
        saveTimeTriggerCount: _v2
      } = (0, _v6.useStoryboardMetadata)();
    return {
      createTimeTrigger: (0, _v1.useCallback)(_v0 => {
        let {
            type: _v1,
            time: _v2 = 0
          } = _v0,
          _v3 = _v1()?.timeTriggerCount ?? 0,
          _v4 = {
            id: (0, _v7.createUuidV4)(),
            analyticsId: (0, _v7.generateRandomUInt32Id)(),
            name: `Action ${_v3 + 1}`,
            type: _v3.CompositionElementType.TIME_TRIGGER,
            rect: {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            },
            compositionTiming: {
              start: _v2,
              end: _v2 + _v5.TIME_TRIGGER_START_END_DELTA
            }
          };
        if (_v1 === _v2.TimeTriggerActionType.JUMP_TO_TIME) _v4.action = {
          type: _v1,
          time: _v4.TIME_TRIGGER_JUMP_TO_DEFAULT
        };else if (_v1 === _v2.TimeTriggerActionType.SHOW_OVERLAY) {
          let {
            overlayId: _v0
          } = _v0;
          _v4.action = {
            type: _v1,
            overlayId: _v0
          };
        } else _v4.action = {
          type: _v1
        };
        return _v4;
      }, [_v1]),
      addTimeTriggerToStoryboard: (0, _v1.useCallback)(_v0 => (_v2((_v1()?.timeTriggerCount ?? 0) + 1), _v0(_v0), _v0), [_v0, _v1, _v2])
    };
  }]);
}