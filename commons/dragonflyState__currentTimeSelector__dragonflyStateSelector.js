{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v0.i(0).createSlice)({
      name: "dragonflyState",
      initialState: {
        paused: !0,
        currentTime: 0,
        seekTime: 0,
        isInitialized: !1
      },
      reducers: {
        setDragonflyPausedAction(_v0, _v1) {
          _v0.paused = _v1.payload, _v1.payload || (_v0.seekTime = null);
        },
        setDragonflyInitializedAction(_v0) {
          _v0.isInitialized = !0;
        },
        setDragonflyCurrentTimeAction(_v0, _v1) {
          _v0.currentTime = _v1.payload;
        },
        setDragonflySeekTimeAction(_v0, _v1) {
          _v0.seekTime = _v1.payload;
        }
      }
    }),
    {
      setDragonflyPausedAction: _v3,
      setDragonflyCurrentTimeAction: _v4,
      setDragonflySeekTimeAction: _v5,
      setDragonflyInitializedAction: _v6
    } = _v2.actions,
    _v7 = _v2.reducer,
    _v8 = (0, _v1.createSelector)(_v0 => _v0.dragonflyState, _v0 => _v0);
  _v0.s(["currentTimeSelector", 0, _v0 => _v0.dragonflyState.currentTime, "default", 0, _v7, "dragonflyStateSelector", 0, _v8, "isInitializedSelector", 0, _v0 => _v0.dragonflyState.isInitialized, "pausedSelector", 0, _v0 => _v0.dragonflyState.paused, "setDragonflyCurrentTimeAction", 0, _v4, "setDragonflyInitializedAction", 0, _v6, "setDragonflyPausedAction", 0, _v3, "setDragonflySeekTimeAction", 0, _v5]);
}