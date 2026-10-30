{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      currentToolbar: _v3.ToolbarType.CANVAS,
      selectedToolbarButton: null,
      selectedColorPicker: void 0
    },
    _v5 = (0, _v2.createSlice)({
      name: "toolbar",
      initialState: _v4,
      reducers: {
        showToolbarAction: (_v0, _v1) => {
          _v0.currentToolbar = _v1.payload, _v0.selectedToolbarButton = null;
        },
        hideToolbarAction: _v0 => {
          _v0.currentToolbar = null, _v0.selectedToolbarButton = null;
        },
        selectToolbarButtonAction: (_v0, _v1) => {
          _v0.selectedToolbarButton = _v1.payload;
        },
        deselectToolbarButtonAction: (_v0, _v1) => {
          _v0.selectedToolbarButton === _v1.payload && (_v0.selectedToolbarButton = null);
        },
        showToolbarColorPickerAction: (_v0, _v1) => {
          _v0.selectedColorPicker = _v1.payload;
        },
        hideToolbarColorPickerAction: _v0 => {
          _v0.selectedColorPicker = void 0;
        }
      }
    }),
    {
      showToolbarAction: _v6,
      hideToolbarAction: _v7,
      selectToolbarButtonAction: _v8,
      deselectToolbarButtonAction: _v9,
      showToolbarColorPickerAction: _v10,
      hideToolbarColorPickerAction: _v11
    } = _v5.actions,
    _v12 = _v5.reducer,
    _v13 = (0, _v1.createSelector)(_v0 => _v0.toolbar, _v0 => _v0.currentToolbar),
    _v14 = (0, _v1.createSelector)(_v0 => _v0.toolbar, _v0 => _v0.selectedToolbarButton),
    _v15 = (0, _v1.createSelector)(_v0 => _v0.toolbar, _v0 => _v0.selectedColorPicker);
  _v0.s(["currentToolbarSelector", 0, _v13, "default", 0, _v12, "deselectToolbarButtonAction", 0, _v9, "hideToolbarAction", 0, _v7, "hideToolbarColorPickerAction", 0, _v11, "isReplaceToolbarOpenSelector", 0, _v0 => _v0.toolbar.currentToolbar === _v3.ToolbarType.REPLACE, "selectToolbarButtonAction", 0, _v8, "selectedToolbarButtonSelector", 0, _v14, "selectedToolbarColorPickerSelector", 0, _v15, "showToolbarAction", 0, _v6, "showToolbarColorPickerAction", 0, _v10]);
}