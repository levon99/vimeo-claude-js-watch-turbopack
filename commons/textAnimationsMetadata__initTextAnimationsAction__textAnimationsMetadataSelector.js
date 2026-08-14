{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.createSlice)({
      name: "textAnimationsMetadata",
      initialState: {
        value: {}
      },
      reducers: {
        initTextAnimationsAction: (_v0, _v1) => {
          _v0.value = Object.keys(_v1.payload).reduce((_v0, _v1) => ({
            ..._v0,
            ...{
              [_v1]: (0, _v3.camelize)(_v1.payload[_v1])
            }
          }), {});
        }
      }
    }),
    {
      initTextAnimationsAction: _v5
    } = _v4.actions,
    _v6 = (0, _v1.createSelector)(_v0 => _v0.textAnimationsMetadata.value, _v0 => _v0),
    _v7 = _v4.reducer;
  _v0.s(["default", 0, _v7, "initTextAnimationsAction", 0, _v5, "textAnimationsMetadataSelector", 0, _v6]);
}