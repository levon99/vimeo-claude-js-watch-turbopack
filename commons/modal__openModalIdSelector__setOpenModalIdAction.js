{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createSlice)({
      name: "modal",
      initialState: {
        openModalId: ""
      },
      reducers: {
        setOpenModalIdAction(_v0, _v1) {
          _v0.openModalId = _v1.payload;
        }
      }
    }),
    {
      setOpenModalIdAction: _v3
    } = _v2.actions,
    _v4 = _v2.reducer;
  _v0.s(["default", 0, _v4, "openModalIdSelector", 0, _v0 => _v0.modal.openModalId, "setOpenModalIdAction", 0, _v3], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = "rect",
    _v8 = "timing",
    _v9 = "compositionTiming",
    _v10 = {},
    _v11 = (0, _v1.createSlice)({
      name: "overrides",
      initialState: _v10,
      reducers: {
        resetOverridesAction: () => _v10,
        addOverrideAction: (_v0, _v1) => {
          let {
            ceId: _v2,
            overrides: _v3
          } = _v1.payload;
          _v0[_v2] || (_v0[_v2] = {}), _v0[_v2] = {
            ..._v0[_v2],
            ..._v3
          };
        },
        setOverridesAction: (_v0, _v1) => {
          Object.keys(_v0).forEach(_v0 => {
            delete _v0[_v0];
          }), _v1.payload.forEach(_v0 => {
            let {
              ceId: _v1,
              overrides: _v2
            } = _v0;
            _v0[_v1] || (_v0[_v1] = {}), _v0[_v1] = {
              ..._v0[_v1],
              ..._v2
            };
          });
        },
        removeOverrideAction: (_v0, _v1) => {
          let {
              ceId: _v2,
              key: _v3
            } = _v1.payload,
            _v4 = _v0[_v2];
          _v3 && _v4 && void 0 !== _v4[_v3] && delete _v4[_v3], !_v3 && _v4 && delete _v0[_v2];
        },
        removeOverridesAction: (_v0, _v1) => {
          let {
            ceIds: _v2,
            keys: _v3
          } = _v1.payload;
          _v2.forEach(_v0 => {
            _v3.forEach(_v0 => {
              _v0[_v0]?.[_v0] !== void 0 && delete _v0[_v0][_v0];
            }), (0, _v6.default)(_v0[_v0]) && delete _v0[_v0];
          });
        },
        addGlobalOverrideAction: (_v0, _v1) => {
          let {
            key: _v2,
            value: _v3
          } = _v1.payload;
          _v0[_v2] = {
            ..._v0[_v2],
            ..._v3
          };
        },
        removeGlobalOverrideAction: (_v0, _v1) => {
          delete _v0[_v1.payload];
        }
      }
    }),
    {
      resetOverridesAction: _v12,
      addOverrideAction: _v13,
      setOverridesAction: _v14,
      removeOverrideAction: _v15,
      removeOverridesAction: _v16,
      addGlobalOverrideAction: _v17,
      removeGlobalOverrideAction: _v18
    } = _v11.actions,
    _v19 = _v11.reducer,
    _v20 = (0, _v5.createSelector)(_v0 => _v0.overrides, _v0 => _v0),
    _v21 = (0, _v5.createSelector)(_v0 => _v0.overrides, _v0 => {
      let _v1 = JSON.parse(JSON.stringify(_v0)),
        _v2 = [_v7];
      return Object.keys(_v1).forEach(_v0 => {
        _v2.forEach(_v0 => {
          delete _v1[_v0][_v0];
        }), 0 === Object.keys(_v1[_v0]).length && delete _v1[_v0];
      }), _v1;
    }),
    _v22 = (0, _v5.createSelector)(_v0 => _v0.overrides, _v0 => {
      let _v1 = JSON.parse(JSON.stringify(_v0)),
        _v2 = [_v8, _v9, "in", "out"];
      return Object.keys(_v1).forEach(_v0 => {
        _v2.forEach(_v0 => {
          delete _v1[_v0][_v0];
        }), 0 === Object.keys(_v1[_v0]).length && delete _v1[_v0];
      }), _v1;
    }),
    _v23 = (0, _v5.createSelector)(_v0 => _v0.overrides, _v0 => {
      let _v1 = JSON.parse(JSON.stringify(_v0)),
        _v2 = [_v7, _v8, _v9, "in", "out"];
      return Object.keys(_v1).forEach(_v0 => {
        _v2.forEach(_v0 => {
          delete _v1[_v0][_v0];
        }), 0 === Object.keys(_v1[_v0]).length && delete _v1[_v0];
      }), _v1;
    });
  _v0.s(["addGlobalOverrideAction", 0, _v17, "addOverrideAction", 0, _v13, "default", 0, _v19, "overridesSelector", 0, _v20, "overridesWithoutRectAndTimingSelector", 0, _v23, "overridesWithoutRectSelector", 0, _v21, "overridesWithoutTimingSelector", 0, _v22, "removeGlobalOverrideAction", 0, _v18, "removeOverrideAction", 0, _v15, "removeOverridesAction", 0, _v16, "resetOverridesAction", 0, _v12, "setOverridesAction", 0, _v14], 0);
  let _v24 = (0, _v1.createSlice)({
      name: "recordSlice",
      initialState: {
        isShown: !1
      },
      reducers: {
        toggleRecordAction(_v0, _v1) {
          _v0.isShown = _v1.payload;
        }
      }
    }),
    {
      toggleRecordAction: _v25
    } = _v24.actions,
    _v26 = _v24.reducer,
    _v27 = (0, _v5.createSelector)(_v0 => _v0.record, _v0 => _v0);
  _v0.s(["default", 0, _v26, "recordSelector", 0, _v27, "toggleRecordAction", 0, _v25], 0);
  let _v28 = (0, _v1.createSlice)({
      name: "screenshotting",
      initialState: {
        isScreenshotting: !1,
        storyboardLayersForScreenshot: [],
        thumbnailObjectUrls: {}
      },
      reducers: {
        setIsScreenshottingAction: (_v0, _v1) => {
          _v0.isScreenshotting = _v1.payload;
        },
        setOverlayThumbnailObjectUrlAction: (_v0, _v1) => {
          let {
            overlayId: _v2,
            objectUrl: _v3
          } = _v1.payload;
          _v0.thumbnailObjectUrls[_v2] && URL.revokeObjectURL(_v0.thumbnailObjectUrls[_v2]), _v0.thumbnailObjectUrls[_v2] = _v3;
        },
        setStoryboardLayersForScreenshotAction: (_v0, _v1) => {
          _v0.storyboardLayersForScreenshot = _v1.payload;
        },
        emptyThumbnailUrlsStoreAction: _v0 => {
          Object.values(_v0.thumbnailObjectUrls).forEach(_v0 => {
            URL.revokeObjectURL(_v0);
          }), _v0.thumbnailObjectUrls = {};
        }
      }
    }),
    {
      setIsScreenshottingAction: _v29,
      setOverlayThumbnailObjectUrlAction: _v30,
      setStoryboardLayersForScreenshotAction: _v31,
      emptyThumbnailUrlsStoreAction: _v32
    } = _v28.actions,
    _v33 = _v28.reducer;
  _v0.s(["default", 0, _v33, "isScreenshottingSelector", 0, _v0 => _v0.screenshotting.isScreenshotting, "overlayLayersForScreenshotSelector", 0, _v0 => _v0.screenshotting.storyboardLayersForScreenshot, "overlayThumbnailUrlsMapSelector", 0, _v0 => _v0.screenshotting.thumbnailObjectUrls, "setIsScreenshottingAction", 0, _v29, "setOverlayThumbnailObjectUrlAction", 0, _v30, "setStoryboardLayersForScreenshotAction", 0, _v31], 0);
  let _v34 = (0, _v1.createSlice)({
      name: "settings",
      initialState: {
        folderUri: ""
      },
      reducers: {
        setFolderUriAction(_v0, _v1) {
          _v0.folderUri = _v1.payload;
        }
      }
    }),
    {
      setFolderUriAction: _v35
    } = _v34.actions,
    _v36 = _v34.reducer,
    _v37 = (0, _v5.createSelector)(_v0 => _v0.settings, _v0 => _v0.folderUri);
  _v0.s(["default", 0, _v36, "folderUriSelector", 0, _v37, "setFolderUriAction", 0, _v35], 0);
  let _v38 = (0, _v1.createSlice)({
      name: "teamSwitcher",
      initialState: {
        isSwitchingTeams: !1
      },
      reducers: {
        setIsTeamSwitchingAction: (_v0, _v1) => {
          _v0.isSwitchingTeams = _v1.payload;
        }
      }
    }),
    {
      setIsTeamSwitchingAction: _v39
    } = _v38.actions,
    _v40 = _v38.reducer,
    _v41 = (0, _v5.createSelector)(_v0 => _v0.teamSwitcher, _v0 => _v0.isSwitchingTeams);
  _v0.s(["default", 0, _v40, "setIsTeamSwitchingAction", 0, _v39, "teamSwitcherSelector", 0, _v41], 0);
  let _v42 = (0, _v1.createSlice)({
      name: "teamTemplates",
      initialState: {
        isShowTeamTemplatesModal: !1,
        isTeamTemplateDoneSaving: !0,
        editedTeamTemplateHash: void 0,
        teamTemplatesOrientation: void 0
      },
      reducers: {
        setIsShowTeamTemplatesModalAction: (_v0, _v1) => {
          _v0.isShowTeamTemplatesModal = _v1.payload;
        },
        setIsTeamTemplateDoneSavingAction: (_v0, _v1) => {
          _v0.isTeamTemplateDoneSaving = _v1.payload;
        },
        setEditedTeamTemplateHashAction: (_v0, _v1) => {
          _v0.editedTeamTemplateHash = _v1.payload;
        },
        setTeamTemplatesOrientationAction: (_v0, _v1) => {
          _v0.teamTemplatesOrientation = _v1.payload;
        }
      }
    }),
    {
      setIsShowTeamTemplatesModalAction: _v43,
      setIsTeamTemplateDoneSavingAction: _v44,
      setEditedTeamTemplateHashAction: _v45,
      setTeamTemplatesOrientationAction: _v46
    } = _v42.actions,
    _v47 = (0, _v5.createSelector)(_v0 => _v0.teamTemplates.editedTeamTemplateHash, _v0 => _v0),
    _v48 = (0, _v5.createSelector)(_v0 => _v0.teamTemplates.teamTemplatesOrientation, _v0 => _v0),
    _v49 = _v42.reducer;
  _v0.s(["default", 0, _v49, "editedTeamTemplateHashSelector", 0, _v47, "setEditedTeamTemplateHashAction", 0, _v45, "setIsShowTeamTemplatesModalAction", 0, _v43, "setIsTeamTemplateDoneSavingAction", 0, _v44, "setTeamTemplatesOrientationAction", 0, _v46, "teamTemplatesOrientationSelector", 0, _v48], 0);
  let _v50 = (0, _v1.createSlice)({
      name: "templates",
      initialState: {
        templatesCategory: "scene_preset_only",
        templatesOrientation: void 0,
        isTemplateBeingAdded: !1
      },
      reducers: {
        setTemplatesCategoryAction: (_v0, _v1) => {
          _v0.templatesCategory = _v1.payload;
        },
        setTemplatesOrientationAction: (_v0, _v1) => {
          _v0.templatesOrientation = _v1.payload;
        },
        setIsTemplateBeingAddedAction: (_v0, _v1) => {
          _v0.isTemplateBeingAdded = _v1.payload;
        }
      }
    }),
    {
      setTemplatesCategoryAction: _v51,
      setTemplatesOrientationAction: _v52,
      setIsTemplateBeingAddedAction: _v53
    } = _v50.actions,
    _v54 = _v50.reducer;
  _v0.s(["default", 0, _v54, "isTemplateBeingAddedSelector", 0, _v0 => _v0.templates.isTemplateBeingAdded, "setIsTemplateBeingAddedAction", 0, _v53, "setTemplatesCategoryAction", 0, _v51, "setTemplatesOrientationAction", 0, _v52, "templatesCategorySelector", 0, _v0 => _v0.templates.templatesCategory, "templatesOrientationSelector", 0, _v0 => _v0.templates.templatesOrientation], 0);
}