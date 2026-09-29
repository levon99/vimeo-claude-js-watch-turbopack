{
  "use strict";

  let _v1 = (0, _v0.i(0).createSlice)({
      name: "replace",
      initialState: {
        lastElement: null
      },
      reducers: {
        setLastElementAction: (_v0, _v1) => {
          _v0.lastElement = _v1.payload;
        },
        clearLastElementAction: _v0 => {
          _v0.lastElement = null;
        }
      }
    }),
    {
      setLastElementAction: _v2,
      clearLastElementAction: _v3
    } = _v1.actions,
    _v4 = _v1.reducer;
  _v0.s(["clearLastElementAction", 0, _v3, "default", 0, _v4, "lastElementSelector", 0, _v0 => _v0.replace.lastElement, "setLastElementAction", 0, _v2]);
}