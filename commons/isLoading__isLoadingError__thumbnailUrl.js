{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = new Set(["isLoading", "isLoadingError", "thumbnailUrl"]),
    _v5 = new Set([..._v4, "previewUrl", "previewUrlLivePhoto", "thumb", "thumbUrl", "thumbnailsSprites", "transcriptions", "url", "status"]),
    _v6 = (_v0, _v1, _v2) => {
      if (!(_v2 && _v1.has(_v2))) return Array.isArray(_v0) ? _v0.map(_v0 => _v6(_v0, _v1)) : _v0 && "object" == typeof _v0 ? Object.entries(_v0).reduce((_v0, [_v1, _v2]) => {
        let _v3 = _v6(_v2, _v1, _v1);
        return void 0 !== _v3 && (_v0[_v1] = _v3), _v0;
      }, {}) : _v0;
    },
    _v7 = _v0 => _v6({
      ..._v0,
      id: "",
      sources: _v0.sources.map(_v0 => _v6(_v0, _v5))
    }, _v4),
    _v8 = (0, _v2.createSlice)({
      name: "editorExit",
      initialState: {
        hasUnresolvedRecovery: !1,
        isAutoSaving: !1,
        isLocalAutoSave: !1
      },
      reducers: {
        setAppliedStoryboardAction(_v0, _v1) {
          _v0.appliedStoryboard = _v1.payload, _v0.hasUnresolvedRecovery = !1;
        },
        setHasUnresolvedRecoveryAction(_v0, _v1) {
          _v0.hasUnresolvedRecovery = _v1.payload;
        },
        setIsLocalAutoSaveAction(_v0, _v1) {
          _v0.isLocalAutoSave = _v1.payload;
        },
        setIsAutoSavingAction(_v0, _v1) {
          _v0.isAutoSaving = _v1.payload;
        }
      }
    }),
    {
      setAppliedStoryboardAction: _v9,
      setHasUnresolvedRecoveryAction: _v10,
      setIsAutoSavingAction: _v11,
      setIsLocalAutoSaveAction: _v12
    } = _v8.actions;
  (0, _v1.createSelector)(_v0 => _v0.storyboard, _v0 => _v0.editorExit, (_v0, {
    appliedStoryboard: _v1,
    hasUnresolvedRecovery: _v2
  }) => {
    let _v3, _v4;
    return _v2 || !!_v1 && (_v3 = _v7(_v0), _v4 = _v7(_v1), !(0, _v3.default)(_v3, _v4));
  });
  let _v13 = _v8.reducer;
  _v0.s(["default", 0, _v13, "setAppliedStoryboardAction", 0, _v9, "setHasUnresolvedRecoveryAction", 0, _v10, "setIsAutoSavingAction", 0, _v11, "setIsLocalAutoSaveAction", 0, _v12], 0);
  let _v14 = (0, _v2.createSlice)({
      name: "focusArea",
      initialState: {
        uiArea: null
      },
      reducers: {
        focusAction: (_v0, _v1) => {
          let {
            uiArea: _v2
          } = _v1.payload;
          _v0.uiArea = _v2;
        },
        blurAction: _v0 => {
          _v0.uiArea = null;
        }
      }
    }),
    {
      focusAction: _v15,
      blurAction: _v16
    } = _v14.actions,
    _v17 = _v14.reducer,
    _v18 = (0, _v1.createSelector)(_v0 => _v0.focusArea.uiArea, _v0 => _v0);
  _v0.s(["blurAction", 0, _v16, "default", 0, _v17, "focusAction", 0, _v15, "focusAreaSelector", 0, _v18], 0);
}