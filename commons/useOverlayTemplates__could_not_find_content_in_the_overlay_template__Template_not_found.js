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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  _v0.s(["useOverlayTemplates", 0, () => {
    let _v0 = (0, _v9.useAppDispatch)(),
      _v1 = (0, _v9.useAppSelector)(_v8.interactiveOverlaysSelector),
      _v2 = (0, _v9.useAppSelector)(_v7.isEditingInteractiveOverlaySelector),
      _v3 = (0, _v9.useAppSelector)(_v8.storyboardSelector),
      [_v4] = (0, _v5.useLazyInitTemplateStoryboardQuery)(),
      [_v5] = (0, _v5.useLazyGetTemplateStoryboardQuery)(),
      [_v6] = (0, _v6.useDuplicateStoryboardSourcesMutation)(),
      [_v7] = (0, _v6.useSaveStoryboardMutation)({
        fixedCacheKey: _v6.SHARED_SAVE_OVERLAY_AS_TEMPLATE_KEY
      }),
      [_v8] = (0, _v5.useSaveAsTeamTemplateMutation)(),
      [_v9] = (0, _v5.useSaveAsLibraryTemplateMutation)(),
      [_v10] = (0, _v5.useUpdateTeamTemplateMutation)(),
      [_v11] = (0, _v5.useDeleteTeamTemplateMutation)(),
      [_v12] = (0, _v5.useUpdateLibraryTemplateMutation)(),
      [_v13] = (0, _v5.useDeleteLibraryTemplateMutation)(),
      {
        alertFailedToSaveOverlayAsTemplate: _v14,
        alertFailedToAddOverlayTemplateToVideo: _v15
      } = (0, _v15.useAlerts)(),
      {
        addOverlayElement: _v16
      } = (0, _v16.useOverlayElement)(),
      _v17 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = await _v4({
          isSystem: _v0
        }).unwrap();
        return _v1.storyboard ? _v1.storyboard : {
          ..._v8.initialState,
          id: _v1.storyboardId,
          videoSessionId: parseInt((0, _v13.extractVideoSessionIdFromStoryboardId)(_v1.storyboardId))
        };
      }, [_v4]),
      _v18 = (0, _v1.useCallback)(async ({
        templateName: _v0,
        overlayId: _v1,
        thumbnailId: _v2,
        isSystem: _v3
      }) => {
        try {
          let _v0 = (0, _v11.getOverlayById)(_v1, _v1),
            _v1 = {
              ..._v0,
              name: _v0
            },
            _v2 = _v2 ? (0, _v11.extractOverlayInteractiveLayers)(_v3.layers) : _v0.interactiveLayers;
          _v1.interactiveLayers = structuredClone(_v2), _v0((0, _v7.setIsOverlayTemplateSavingAction)(!0));
          let _v3 = await _v17(_v3);
          _v3.orientation = _v3.orientation;
          let _v4 = (0, _v13.getVisualSourceHashesFromLayers)(_v1.interactiveLayers);
          if (_v3.interactiveOverlays = [_v1], _v4.length) {
            let {
              sources: _v0,
              originalToDuplicateHashMap: _v1
            } = await _v6({
              storyboardId: _v3.id,
              sourceHashes: _v4,
              targetStoryboardId: _v3.id,
              ...(_v3 && {
                isSystem: !0
              })
            }).unwrap();
            _v3.sources = _v0, _v3.interactiveOverlays[0].interactiveLayers = (0, _v12.updateDuplicatedSourcesInLayers)(_v3.interactiveOverlays[0].interactiveLayers, _v1);
          }
          let {
              storyboardId: _v5
            } = await _v7({
              storyboard: _v3,
              isInteractive: !0,
              vimeoVideoId: null,
              ...(_v3 && {
                isSystem: !0
              })
            }).unwrap(),
            _v6 = _v3 ? _v9 : _v8;
          return await _v6({
            userId: _v4.default.teamOwnerId,
            storyboardId: _v5,
            name: _v0,
            ...(_v2 && {
              thumbnailId: _v2
            })
          }).unwrap();
        } catch (_v0) {
          console.error(_v0), _v14();
        } finally {
          _v0((0, _v7.setIsOverlayTemplateSavingAction)(!1));
        }
      }, [_v14, _v17, _v0, _v6, _v1, _v2, _v9, _v8, _v7, _v3.id, _v3.layers, _v3.orientation]),
      _v19 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = await _v5({
          storyboardId: _v0
        }, !0).unwrap();
        return _v1?.storyboard;
      }, [_v5]),
      _v20 = (0, _v1.useCallback)(async ({
        templateStoryboardId: _v0,
        targetStoryboardId: _v1,
        sourceHashes: _v2,
        layers: _v3,
        isSystemTemplate: _v4
      }) => {
        if (!_v2.length) return _v3;
        let {
            sources: _v5,
            originalToDuplicateHashMap: _v6
          } = await _v6({
            storyboardId: _v0,
            sourceHashes: _v2,
            targetStoryboardId: _v1,
            ...(_v4 && {
              checkOriginUser: !1
            })
          }).unwrap(),
          _v7 = (0, _v12.updateDuplicatedSourcesInLayers)(_v3, _v6);
        return (0, _v2.batch)(() => {
          _v5.forEach(_v0 => {
            _v0((0, _v8.addSourceAction)(_v0));
          });
        }), _v7;
      }, [_v0, _v6]),
      _v21 = (0, _v1.useCallback)(async (_v0, _v1, _v2) => {
        let _v3 = (_v0 => {
            let _v1 = _v0.interactiveOverlays[0]?.interactiveLayers;
            if (!_v1?.length) throw Error("could not find content in the overlay template");
            return (0, _v11.duplicateOverlayLayers)(_v1);
          })(_v0),
          _v4 = (0, _v13.getVisualSourceHashesFromLayers)(_v3);
        return _v4.length ? await _v20({
          templateStoryboardId: _v0.id,
          targetStoryboardId: _v1,
          sourceHashes: _v4,
          layers: _v3,
          isSystemTemplate: _v2
        }) : _v3;
      }, [_v20]),
      _v22 = (0, _v1.useCallback)(async (_v0, _v1, _v2) => {
        let _v3 = "";
        try {
          let _v0 = await _v19(_v0);
          if (!_v0) throw Error("Template not found");
          let _v1 = await _v21(_v0, _v3.id, _v2),
            _v2 = (0, _v11.adjustTemplateLayersOrientation)({
              layers: _v1,
              layersOrientation: _v0.orientation,
              targetOrientation: _v3.orientation
            }),
            _v3 = (0, _v14.getDurationFromLayers)(_v2),
            _v4 = (0, _v10.createUuidV4)(),
            _v5 = (0, _v10.generateRandomUInt32Id)();
          _v3 = _v16({
            overlayId: _v4,
            name: _v1,
            duration: _v3
          }), _v0((0, _v8.addInteractiveOverlayAction)({
            overlay: {
              id: _v4,
              analyticsId: _v5,
              interactiveLayers: _v2,
              onEndAction: _v3.OVERLAY_ON_END_DEFAULT,
              closeAfter: _v3.DEFAULT_CLOSE_AFTER,
              name: _v1
            }
          }));
        } catch (_v0) {
          throw console.error(_v0), _v3 && _v0((0, _v8.deleteElementAction)({
            ceId: _v3
          })), Error("Failed to add overlay template to storyboard:", _v0);
        }
      }, [_v19, _v21, _v3.id, _v3.orientation, _v16, _v0]),
      _v23 = (0, _v1.useCallback)(async (_v0, _v1) => {
        let _v2 = await _v19(_v0);
        if (!_v2) throw Error(`Template for storyboard ID ${_v0} not found`);
        let _v3 = await _v21(_v2, _v3.id, _v1),
          _v4 = (0, _v11.adjustTemplateLayersOrientation)({
            layers: _v3,
            layersOrientation: _v2.orientation,
            targetOrientation: _v3.orientation
          }),
          _v5 = (0, _v12.alignZIndices)([..._v3.layers, ..._v4]);
        _v0((0, _v8.setLayersAction)(_v5));
      }, [_v19, _v21, _v3.id, _v3.orientation, _v3.layers, _v0]),
      _v24 = (0, _v1.useCallback)(async ({
        storyboardId: _v0,
        templateName: _v1,
        isSystemTemplate: _v2
      }) => {
        _v0((0, _v7.setIsApplyingOverlayTemplateAction)(!0));
        try {
          _v2 ? await _v23(_v0, _v2) : await _v22(_v0, _v1, _v2);
        } catch (_v0) {
          console.error(_v0), _v15();
        } finally {
          _v0((0, _v7.setIsApplyingOverlayTemplateAction)(!1));
        }
      }, [_v23, _v22, _v15, _v0, _v2]),
      _v25 = (0, _v1.useCallback)(async (_v0, _v1) => {
        await _v10({
          userId: _v4.default.teamOwnerId,
          templateId: _v0,
          name: _v1
        }).unwrap();
      }, [_v10]),
      _v26 = (0, _v1.useCallback)(async _v0 => {
        await _v11({
          userId: _v4.default.teamOwnerId,
          templateId: _v0
        }).unwrap();
      }, [_v11]);
    return {
      saveOverlayAsTemplate: _v18,
      applyTemplate: _v24,
      updateTeamOverlayTemplate: _v25,
      deleteTeamOverlayTemplate: _v26,
      updateLibraryOverlayTemplate: (0, _v1.useCallback)(async (_v0, _v1) => {
        await _v12({
          templateId: _v0,
          name: _v1
        }).unwrap();
      }, [_v12]),
      deleteLibraryOverlayTemplate: (0, _v1.useCallback)(async _v0 => {
        await _v13({
          templateId: _v0
        }).unwrap();
      }, [_v13])
    };
  }]);
}