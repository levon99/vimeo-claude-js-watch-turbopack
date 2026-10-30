{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = {
      elements: []
    },
    _v7 = (0, _v2.createSlice)({
      name: "clipboard",
      initialState: _v6,
      reducers: {
        copyCEsAction: (_v0, _v1) => {
          _v0.elements = _v1.payload;
        },
        resetClipboard: () => _v6
      }
    }),
    {
      resetClipboard: _v8
    } = _v7.actions,
    _v9 = _v7.reducer,
    _v10 = (0, _v1.createSelector)(_v0 => _v0.clipboard.elements, _v0 => _v0);
  _v0.s(["clipboardElementsSelector", 0, _v10, "copySelectedCEsAction", 0, () => (_v0, _v1) => {
    let _v2 = (0, _v5.selectedElementsSelector)(_v1()).filter(_v0 => !((0, _v4.isTimeTriggerElement)(_v0) && _v0.action.type === _v3.TimeTriggerActionType.SHOW_OVERLAY));
    _v0(_v7.actions.copyCEsAction(_v2));
  }, "default", 0, _v9]);
}