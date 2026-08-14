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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  _v0.s(["useLoadStoryboard", 0, () => {
    let _v0 = (0, _v17.useAppDispatch)(),
      _v1 = (0, _v17.useAppSelector)(_v15.textAnimationsMetadataSelector),
      _v2 = (0, _v17.useAppSelector)(_v13.fontsSelector),
      _v3 = (0, _v17.useAppSelector)(_v13.languagesSelector),
      _v4 = (0, _v17.useAppSelector)(_v12.isInteractiveSelector),
      {
        uploadMedia: _v5
      } = (0, _v7.useUploadQueue)(),
      {
        defaultColors: _v6,
        shouldForceUseDefaultColors: _v7
      } = (0, _v6.default)(),
      {
        alertElementsRemoved: _v8
      } = (0, _v5.useAlerts)(),
      _v9 = (0, _v1.useContext)(_v9.PartnershipAppContext);
    return {
      loadStoryboard: (0, _v1.useCallback)((_v0, _v1 = !1, _v2 = !0) => {
        let {
            id: _v3,
            layers: _v4,
            interactiveLayers: _v5,
            interactiveOverlays: _v6 = [],
            interactiveQuiz: _v7,
            sources: _v8,
            branding: _v9,
            theme: _v10,
            orientation: _v11,
            canvas: _v12,
            videoSessionId: _v13,
            projectName: _v14
          } = _v0,
          {
            layers: _v15,
            removedElementsCount: _v16,
            sources: _v17
          } = (0, _v25.sanitizeLayersAndSources)({
            layers: _v4,
            sources: _v8,
            storyboardId: _v3,
            isEVV: _v11.default.isEVV,
            flow: "loadStoryboard"
          });
        _v2 && _v16 > 0 && _v8();
        let _v18 = (0, _v25.getLayersWithValidSource)({
          layers: _v15,
          sources: _v17,
          vsid: _v13,
          textAnimations: _v1,
          ...(_v2 && _v3 && {
            fonts: {
              fonts: _v2,
              languages: _v3
            }
          })
        });
        if (_v1) {
          let _v0 = (0, _v25.createSourceMap)(_v17),
            _v1 = new Set();
          _v18.forEach(({
            composition: _v0
          }) => _v0.forEach(_v0 => {
            if ((0, _v22.isMediaElement)(_v0) && !(0, _v22.isLogo)(_v0)) {
              _v0.isLoading = !0;
              let {
                  hash: _v0,
                  mhash: _v1,
                  previewUrl: _v2,
                  service: _v3,
                  name: _v4,
                  externalId: _v5
                } = _v0[_v0.sourceHash] || {},
                _v6 = (0, _v22.isVideoElement)(_v0),
                _v7 = _v3?.startsWith(_v20.UploadMediaOrigin.GETTY),
                _v8 = _v3?.toUpperCase() ?? "",
                _v9 = _v3 && _v8 in _v20.UploadMediaOrigin ? _v20.UploadMediaOrigin[_v8] : _v20.UploadMediaOrigin.MEDIALIB;
              _v7 && (_v9 = _v6 ? _v20.UploadMediaOrigin.GETTY_VIDEOS : _v20.UploadMediaOrigin.GETTY_IMAGES);
              let _v10 = _v1 || _v5 || _v0 || "";
              _v10 && !_v1.has(_v10) && (_v1.add(_v10), _v5({
                origin: _v9,
                mediaItem: {
                  id: _v10,
                  thumbnailUrl: _v2 || "",
                  previewUrl: _v2 || "",
                  fileName: _v4 || "",
                  title: _v4 || "",
                  type: _v6 ? _v19.MediaType.VIDEO : _v19.MediaType.IMAGE,
                  date: "",
                  uplOrigin: _v9
                },
                elementSourceHash: _v0.sourceHash,
                isReplacing: !1,
                videoSessionId: _v13,
                storyboardId: _v3
              }));
            }
          }));
        }
        let _v19 = _v6,
          _v20 = new Set(_v19.map(_v0 => _v0.id)),
          _v21 = new Set();
        if (_v4) {
          _v18 = _v18.map(_v0 => {
            let _v1 = [];
            return _v0.composition.forEach(_v0 => {
              if ((0, _v22.isOverlayElement)(_v0)) {
                let _v0 = _v0.overlayId;
                if (!(_v0 && _v20.has(_v0))) return void _v10.default.sendLog(_v8.OVERLAY_ELEMENT_MISSING_OVERLAY, _v18.LogComponent.INTERACTIVE_ERROR, {
                  context: "loadStoryboard",
                  storyboardId: _v3,
                  overlayId: _v0,
                  overlayElementId: _v0.id
                });
                _v21.add(_v0);
              }
              if ((0, _v22.isPollElement)(_v0) && !_v0.variant && (_v0 = {
                ..._v0,
                variant: _v4.POLL_VARIANT.POLL
              }), (0, _v22.isInteractiveHotspot)(_v0) && _v0.interactiveHotspot.action.type === _v2.HotspotActionType.SHOW_OVERLAY && _v0.interactiveHotspot.action.overlayId) {
                let _v0 = _v0.interactiveHotspot.action.overlayId;
                _v0 && _v20.has(_v0) && _v21.add(_v0);
              }
              _v1.push(_v0);
            }), {
              ..._v0,
              composition: _v1
            };
          }).filter(_v0 => _v0.composition.length > 0);
          let _v0 = (0, _v27.getDurationFromLayers)(_v4.filter(_v0 => _v0.type === _v3.LayerType.INTERACTIVE_BACKGROUND_VIDEO));
          _v18 = _v18.flatMap(_v0 => function (_v0, _v1) {
            let _v2 = [],
              _v3 = [],
              _v4 = 0,
              _v5 = _v0 => _v0.compositionTiming.end - _v0.compositionTiming.start,
              _v6 = _v0.type === _v3.LayerType.TIME_TRIGGERS,
              _v7 = "";
            if (_v0.composition.forEach(_v0 => {
              _v6 && (0, _v22.isTimeTriggerElement)(_v0) && _v0.action.type === _v23.TimeTriggerActionType.SHOW_OVERLAY && (_v7 = _v0.id);
              let _v1 = structuredClone(_v0);
              _v0.compositionTiming.end > _v1 ? (_v4 += _v5(_v0), _v3.push(_v1)) : _v2.push(_v1);
            }), 0 === _v3.length && !_v7) return [_v0];
            let _v8 = _v2[_v2.length - 1],
              _v9 = _v8 ? _v1 - _v8.compositionTiming.end : _v1,
              _v10 = _v1 - _v4,
              _v11 = _v3.map(_v0 => {
                var _v1;
                let _v2,
                  [_v3, _v4] = (_v1 = _v10, _v2 = _v5(_v0), [{
                    ..._v0,
                    compositionTiming: {
                      start: _v1,
                      end: _v1 + _v2
                    }
                  }, _v1 + _v2]);
                return _v10 = _v4, _v3;
              });
            if (_v7) {
              let _v0 = [..._v2, ..._v11].find(_v0 => _v0.id === _v7);
              if (_v0) {
                let _v0 = _v5(_v0),
                  _v1 = _v1 - _v24.SCORECARD_TRIGGER_TIME_FROM_END;
                _v0.compositionTiming = {
                  start: _v1,
                  end: _v1 + _v0
                };
              }
            }
            return _v9 >= _v4 ? [{
              ..._v0,
              composition: [..._v2, ..._v11]
            }] : [{
              ..._v0,
              composition: _v2
            }, (0, _v25.createLayer)(_v11, _v0.type)];
          }(_v0, _v0)), _v7?.scorecardOverlayIds?.length && _v7.scorecardOverlayIds.forEach(_v0 => {
            _v20.has(_v0) && _v21.add(_v0);
          }), _v19 = _v6.filter(_v0 => !!_v21.has(_v0.id) || (_v10.default.sendLog(_v8.OVERLAY_MISSING_LINKED_ELEMENT, _v18.LogComponent.INTERACTIVE_ERROR, {
            context: "loadStoryboard",
            storyboardId: _v3,
            overlayId: _v0.id
          }), !1)).map(_v0 => {
            let _v1 = _v0.interactiveLayers.map(_v0 => {
              let _v1 = _v0.composition.filter(_v0 => !(0, _v22.isOverlayElement)(_v0));
              return {
                ..._v0,
                composition: _v1
              };
            }).filter(_v0 => _v0.composition.length > 0);
            return {
              ..._v0,
              interactiveLayers: (0, _v26.alignZIndices)((0, _v25.getLayersWithValidSource)({
                layers: _v1,
                sources: _v17,
                vsid: _v13
              }))
            };
          });
        }
        let _v22 = 0 === _v18.length,
          _v23 = _v7(_v22),
          _v24 = _v23 ? {
            primary: _v6.branding.primary,
            secondary: _v6.branding.secondary,
            default: _v6.branding.default
          } : {
            primary: (0, _v21.getHexColor)(_v9.colors.primary),
            secondary: (0, _v21.getHexColor)(_v9.colors.secondary),
            default: (0, _v21.getHexColor)(_v9.colors.default)
          },
          _v25 = _v9?.orientation && _v22 ? _v9?.orientation : _v11,
          _v26 = {
            ..._v16.default.getState().storyboard,
            id: _v3,
            layers: (0, _v26.alignZIndices)(_v18),
            interactiveLayers: _v5,
            interactiveOverlays: _v19,
            interactiveQuiz: _v7,
            sources: _v17,
            videoSessionId: _v13,
            projectName: _v14 || "",
            ...(_v10 && {
              theme: _v10
            }),
            ...(_v25 && {
              orientation: _v25
            }),
            ...(_v12 && {
              canvas: {
                ..._v12,
                color: _v23 ? _v6.canvas : _v12.color
              }
            }),
            ...(_v9 && {
              branding: {
                ..._v9,
                colors: _v24
              }
            })
          };
        return _v2 && _v0((0, _v14.updateStoryboardAction)(_v26)), _v26;
      }, [_v1, _v2, _v3, _v4, _v7, _v6.branding.primary, _v6.branding.secondary, _v6.branding.default, _v6.canvas, _v9?.orientation, _v0, _v8, _v5])
    };
  }], 0);
}