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
  _v0.s(["useElementDoubleClick", 0, ({
    isCropAllowed: _v0
  } = {}) => {
    let _v1 = (0, _v8.useAppDispatch)(),
      _v2 = (0, _v8.useAppSelector)(_v6.selectedElementsSelector),
      {
        editOverlay: _v3
      } = (0, _v3.useInteractiveOverlay)(),
      _v4 = (0, _v1.useCallback)(_v0 => {
        let _v1 = _v2[0];
        _v1((0, _v7.showToolbarAction)(_v11.ToolbarType.CROP)), (0, _v12.isMediaElement)(_v1) && _v1((0, _v5.addOverrideAction)({
          ceId: _v1.id,
          overrides: {
            sourceFootageRect: _v1.sourceFootageRect,
            rect: _v1.rect
          }
        }));
      }, [_v1, _v2]);
    return {
      handleElementDoubleClick: (0, _v1.useCallback)(_v0 => {
        _v0 && ((0, _v12.isTextElement)(_v0) ? (_v1((0, _v4.openInspectorAction)({
          inspectorType: _v9.InspectorType.TEXT_EDIT
        })), _v1((0, _v4.updateInspectorDataAction)({
          inspectorType: _v9.InspectorType.TEXT_EDIT,
          data: {
            metadata: _v10.TextEditorMetadata.SELECT_TEXT
          }
        }))) : (0, _v12.isButtonElement)(_v0) && _v0.textContent ? (_v1((0, _v4.openInspectorAction)({
          inspectorType: _v9.InspectorType.BUTTON_TEXT_EDIT
        })), _v1((0, _v4.updateInspectorDataAction)({
          inspectorType: _v9.InspectorType.BUTTON_TEXT_EDIT,
          data: {
            metadata: _v10.TextEditorMetadata.SELECT_TEXT
          }
        }))) : (0, _v12.isInteractiveHotspot)(_v0) ? _v1((0, _v4.openInspectorAction)({
          inspectorType: _v9.InspectorType.HOTSPOTS_SETTINGS
        })) : (0, _v12.isPollElement)(_v0) ? _v1((0, _v4.openInspectorAction)({
          inspectorType: _v9.InspectorType.POLL_EDIT
        })) : (0, _v12.isOverlayElement)(_v0) ? _v3({
          overlayId: _v0.overlayId,
          linkedElementId: _v0.id
        }) : _v0?.(_v0) ? _v4("double_click") : (0, _v12.isTimeTriggerElement)(_v0) && _v0.action.type === _v2.TimeTriggerActionType.SHOW_OVERLAY && _v1((0, _v4.openInspectorAction)({
          inspectorType: _v9.InspectorType.SCORECARD
        })));
      }, [_v1, _v3, _v0, _v4])
    };
  }]);
}