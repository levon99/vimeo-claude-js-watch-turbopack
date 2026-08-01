{
  "use strict";

  let _v1 = (0, _v0.i(0).createSlice)({
      name: "editing",
      initialState: {
        isRemovingWatermark: !1
      },
      reducers: {
        setIsRemovingWatermark(_v0, _v1) {
          _v0.isRemovingWatermark = _v1.payload;
        }
      }
    }),
    {
      setIsRemovingWatermark: _v2
    } = _v1.actions,
    _v3 = _v1.reducer;
  _v0.s(["default", 0, _v3, "setIsRemovingWatermark", 0, _v2]);
}