{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      ..._v0.i(0).DEFAULT_INSPECTOR_STATE
    },
    _v4 = (0, _v2.createSlice)({
      name: "inspector",
      initialState: _v3,
      reducers: {
        initInspectorAction: (_v0, _v1) => {
          _v0.defaultInspector = _v1.payload.inspectorType;
        },
        removeInspectorHistoryStepsAction: (_v0, _v1) => {
          let _v2 = _v1.payload.steps;
          _v0.inspectorsHistory = _v0.inspectorsHistory.slice(0, -_v2);
        },
        openInspectorAction: (_v0, _v1) => {
          let {
            inspectorType: _v2
          } = _v1.payload;
          _v0.inspectorsHistory.at(-1) !== _v2 && _v0.inspectorsHistory.push(_v2), _v0.isOpen = !0;
        },
        updateInspectorDataAction: (_v0, _v1) => {
          let {
            inspectorType: _v2,
            data: _v3
          } = _v1.payload;
          _v0.inspectorsData[_v2] = _v3;
        },
        restoreInspectorStateAction: (_v0, _v1) => {
          let {
            inspectorsHistory: _v2,
            inspectorsData: _v3,
            isOpen: _v4,
            defaultInspector: _v5
          } = _v1.payload;
          Object.assign(_v0, {
            inspectorsHistory: _v2,
            inspectorsData: _v3,
            isOpen: _v4,
            defaultInspector: _v5
          });
        },
        closeInspectorAction: _v0 => {
          _v0.isOpen = !1;
        },
        setIsDraggingFromInspectorAction: (_v0, _v1) => {
          _v0.isDraggingFromInspector = _v1.payload;
        },
        setInspectorWidthAction: (_v0, _v1) => {
          _v0.inspectorWidth = _v1.payload;
        },
        setInspectorInitialWidthAction: (_v0, _v1) => {
          _v0.initialInspectorWidth = _v1.payload, _v0.inspectorWidth < _v1.payload && (_v0.inspectorWidth = _v1.payload);
        }
      }
    }),
    {
      initInspectorAction: _v5,
      closeInspectorAction: _v6,
      openInspectorAction: _v7,
      removeInspectorHistoryStepsAction: _v8,
      updateInspectorDataAction: _v9,
      restoreInspectorStateAction: _v10,
      setIsDraggingFromInspectorAction: _v11,
      setInspectorWidthAction: _v12,
      setInspectorInitialWidthAction: _v13
    } = _v4.actions,
    _v14 = (0, _v1.createSelector)(_v0 => _v0.inspector.inspectorsHistory, _v0 => _v0.inspector.defaultInspector, (_v0, _v1) => _v0.at(-1) ?? _v1),
    _v15 = (0, _v1.createSelector)([_v14, _v0 => _v0.inspector.isOpen], (_v0, _v1) => _v1 ? _v0 : null),
    _v16 = _v4.reducer;
  _v0.s(["closeInspectorAction", 0, _v6, "currentInspectorSelector", 0, _v15, "default", 0, _v16, "initInspectorAction", 0, _v5, "inspectorDataSelector", 0, _v0 => (0, _v1.createSelector)(_v0 => _v0.inspector.inspectorsData, _v0 => _v0[_v0]), "inspectorWidthSelector", 0, _v0 => _v0.inspector.inspectorWidth, "lastInspectorSelector", 0, _v14, "openInspectorAction", 0, _v7, "removeInspectorHistoryStepsAction", 0, _v8, "restoreInspectorStateAction", 0, _v10, "setInspectorInitialWidthAction", 0, _v13, "setInspectorWidthAction", 0, _v12, "setIsDraggingFromInspectorAction", 0, _v11, "updateInspectorDataAction", 0, _v9]);
}