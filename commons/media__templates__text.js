{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = {
    [_v8.InspectorType.MEDIA]: "media",
    [_v8.InspectorType.TEMPLATES]: "templates",
    [_v8.InspectorType.TEXT_ADD]: "text",
    [_v8.InspectorType.GRAPHICS]: "graphics",
    [_v8.InspectorType.MUSIC]: "audio",
    [_v8.InspectorType.COLOR_PALETTE]: "colors",
    [_v8.InspectorType.BRAND_KIT]: "brand",
    [_v8.InspectorType.BRAND_COLORS]: "brand",
    [_v8.InspectorType.BRAND_FONTS]: "brand",
    [_v8.InspectorType.BRAND_INTRO]: "brand",
    [_v8.InspectorType.BRAND_OUTRO]: "brand",
    [_v8.InspectorType.BRAND_LOGOS]: "brand"
  };
  _v0.s(["useInspector", 0, () => {
    let _v0 = (0, _v7.useAppSelector)(_v4.currentInspectorSelector),
      _v1 = (0, _v7.useAppSelector)(_v6.storyboardIdSelector),
      _v2 = (0, _v2.useDispatch)(),
      {
        trackEditorPanelOpened: _v3
      } = (0, _v3.useEditorTracking)(),
      _v4 = (0, _v1.useCallback)((_v0, _v1 = {}) => {
        let {
            shouldSendSidebarBiEvent: _v2 = !1
          } = _v1,
          _v3 = _v0 !== _v0,
          _v4 = (0, _v11.lowerCaseUnderscore)(_v0);
        if (_v2 && (0, _v10.sendTrackSidebarAction)({
          via: "side_bar",
          element: _v4,
          feature: _v10.inspectorTypeToFeature[_v0],
          editorFeature: `${_v3 ? "open" : "close"}_${_v4}_inspector`
        }), _v3) {
          _v2((0, _v4.openInspectorAction)({
            inspectorType: _v0
          }));
          let _v0 = _v12[_v0];
          _v0 && _v3({
            editorSessionId: _v1,
            editorPanelType: _v0
          }), _v0 === _v8.InspectorType.TEXT_EDIT && _v2((0, _v4.updateInspectorDataAction)({
            inspectorType: _v0,
            data: {
              metadata: _v9.TextEditorMetadata.FOCUS_TEXT
            }
          }));
        } else _v2((0, _v4.closeInspectorAction)());
      }, [_v0, _v2, _v1, _v3]);
    return (0, _v1.useEffect)(() => {
      _v0 !== _v8.InspectorType.MEDIA_TRANSITIONS && _v2((0, _v5.resetTransitionSelectionAction)());
    }, [_v2, _v0]), {
      toggleInspector: _v4
    };
  }]);
}