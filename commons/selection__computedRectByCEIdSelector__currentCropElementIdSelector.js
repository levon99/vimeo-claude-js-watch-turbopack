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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = (0, _v2.createSlice)({
      name: "selection",
      initialState: {
        selectedTransitions: [],
        selectedCEIds: [],
        lastSelections: {
          font: ""
        },
        currentMutation: null
      },
      reducers: {
        selectCEsAction: (_v0, _v1) => {
          let {
            ceIds: _v2,
            isMultiSelect: _v3
          } = _v1.payload;
          (0, _v3.default)(_v0.selectedCEIds, _v2) || (_v3 ? _v0.selectedCEIds.push(..._v2) : _v0.selectedCEIds = _v2, _v0.selectedTransitions = []);
        },
        deselectCEsAction: (_v0, _v1) => {
          let {
            ceIdsToRemove: _v2
          } = _v1.payload;
          _v0.selectedCEIds = _v0.selectedCEIds.filter(_v0 => !_v2.includes(_v0));
        },
        resetSelectionAction: _v0 => {
          0 !== _v0.selectedCEIds.length && (_v0.selectedCEIds = []), 0 !== _v0.selectedTransitions.length && (_v0.selectedTransitions = []);
        },
        setMutationAction: (_v0, _v1) => {
          _v0.currentMutation = _v1.payload;
        },
        setLastSelectedFont: (_v0, _v1) => {
          _v0.lastSelections.font = _v1.payload;
        },
        selectTransitionsAction: (_v0, _v1) => {
          let {
            elementIds: _v2,
            isMultiSelect: _v3 = !1
          } = _v1.payload;
          (0, _v3.default)(_v0.selectedTransitions, _v2) || (_v3 ? _v0.selectedTransitions.push(..._v2) : _v0.selectedTransitions = _v2);
        },
        resetTransitionSelectionAction: _v0 => {
          0 !== _v0.selectedTransitions.length && (_v0.selectedTransitions = []);
        }
      }
    }),
    {
      selectCEsAction: _v14,
      deselectCEsAction: _v15,
      resetSelectionAction: _v16,
      setMutationAction: _v17,
      setLastSelectedFont: _v18,
      selectTransitionsAction: _v19,
      resetTransitionSelectionAction: _v20
    } = _v13.actions,
    _v21 = _v13.reducer,
    _v22 = [],
    _v23 = (0, _v1.createSelector)(_v0 => _v0.storyboard.layers, _v0 => _v0.selection.selectedCEIds, (_v0, _v1) => {
      if (0 === _v1.length) return _v22;
      let _v2 = Array(_v1.length),
        _v3 = new Map(_v1.map((_v0, _v1) => [_v0, _v1]));
      for (let _v0 of _v0) for (let _v0 of _v0.composition) _v3.has(_v0.id) && (_v2[_v3.get(_v0.id)] = _v0);
      return _v2.filter(_v0 => void 0 !== _v0);
    }),
    _v24 = (0, _v1.createSelector)(_v23, _v0 => _v0[0]),
    _v25 = (0, _v1.createSelector)(_v23, _v0 => _v0.map(_v0 => ({
      type: _v0.type,
      interactiveHotspot: (0, _v8.isImageHotspot)(_v0)
    }))),
    _v26 = (0, _v1.createSelector)(_v0 => _v0.storyboard.layers, _v0 => _v0.selection.selectedTransitions, (_v0, _v1) => {
      if (0 === _v1.length) return [];
      let _v2 = Array(_v1.length),
        _v3 = new Map(_v1.map((_v0, _v1) => [_v0, _v1]));
      for (let _v0 of _v0) for (let _v0 of _v0.composition) _v3.has(_v0.id) && (_v2[_v3.get(_v0.id)] = _v0);
      return _v2.filter(_v0 => void 0 !== _v0);
    }),
    _v27 = (0, _v1.createSelector)(_v26, _v0 => _v0[0]),
    _v28 = new Map(),
    _v29 = (0, _v1.createSelector)(_v11.isInteractiveSelector, _v12.interactiveOverlaysSelector, (_v0, _v1) => _v0 && 0 !== _v1.length ? new Map(_v1.map(_v0 => [_v0.id, (_v0 => {
      let {
          interactiveLayers: _v1
        } = _v0,
        _v2 = _v1.map(_v0 => _v0.composition).flat().map(_v0 => _v0.rect);
      return (0, _v9.getBoundingBoxRect)(_v2);
    })(_v0)])) : _v28),
    _v30 = (0, _v1.createSelector)(_v0 => _v0.storyboard.layers, _v29, _v12.storyboardIdSelector, (_v0, _v1, _v2) => _v1 === _v28 ? _v28 : new Map(_v0.map(_v0 => _v0.composition).flat().filter(_v8.isOverlayElement).map(_v0 => {
      let _v1 = _v1.get(_v0.overlayId);
      return _v1 ? [_v0.id, _v1] : (_v5.default.sendLog(_v4.OVERLAY_ELEMENT_MISSING_OVERLAY, _v6.LogComponent.INTERACTIVE_ERROR, {
        context: "computedRectByCEIdSelector",
        storyboardId: _v2,
        overlayElementId: _v0.id,
        overlayId: _v0.overlayId
      }), console.error(`Cannot find computed rect for overlayElement ${_v0.id} with overlayId is ${_v0.overlayId}`), [_v0.id, {
        x: -1,
        y: -1,
        width: 0,
        height: 0
      }]);
    }))),
    _v31 = (0, _v1.createSelector)(_v23, _v30, (_v0, _v1) => _v1 === _v28 ? _v0 : _v0.map(_v0 => {
      if ((0, _v10.hasComputedRect)(_v0)) {
        let _v0 = _v1.get(_v0.id);
        if (!_v0) throw Error(`Cannot find computed rect for element id ${_v0.id}`);
        return {
          ..._v0,
          rect: _v0
        };
      }
      return _v0;
    }));
  _v0.s(["computedRectByCEIdSelector", 0, _v30, "currentCropElementIdSelector", 0, _v0 => {
    if (_v0.toolbar.currentToolbar === _v7.ToolbarType.CROP) return _v0.selection.selectedCEIds?.[0];
  }, "default", 0, _v21, "deselectCEsAction", 0, _v15, "firstSelectedElementSelector", 0, _v24, "firstSelectedTransitionElementSelector", 0, _v27, "isMultipleSelectionSelector", 0, _v0 => _v0.selection.selectedCEIds.length > 1, "resetSelectionAction", 0, _v16, "resetTransitionSelectionAction", 0, _v20, "selectCEsAction", 0, _v14, "selectTransitionsAction", 0, _v19, "selectedElementsIdsSelector", 0, _v0 => _v0.selection.selectedCEIds, "selectedElementsSelector", 0, _v23, "selectedElementsTypesSelector", 0, _v25, "selectedElementsWithComputedRectsSelector", 0, _v31, "selectedTransitionsIdsSelector", 0, _v0 => _v0.selection.selectedTransitions, "setLastSelectedFont", 0, _v18, "setMutationAction", 0, _v17]);
}