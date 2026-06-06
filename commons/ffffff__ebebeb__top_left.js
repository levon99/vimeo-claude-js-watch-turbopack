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
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = {
      id: "",
      orientation: _v6.Orientation.LANDSCAPE,
      layers: [],
      interactiveLayers: [],
      interactiveOverlays: [],
      interactiveQuiz: _v12.DEFAULT_INTERACTIVE_QUIZ,
      sources: [],
      theme: {},
      branding: {
        colors: {
          default: "#000000",
          primary: "#ffffff",
          secondary: "#ebebeb"
        },
        font: _v10.DEFAULT_FONT,
        logoWatermark: !1,
        logoWatermarkPosition: "top_left",
        logoPath: null
      },
      version: _v8.PROTOCOL_VERSION,
      canvas: {
        color: _v10.DEFAULT_CANVAS_COLOR
      }
    },
    _v32 = (0, _v2.createSlice)({
      name: "storyboard",
      initialState: _v31,
      reducers: {
        resetStoryboardAction: () => _v31,
        updateStoryboardAction: (_v0, _v1) => {
          Object.keys(_v1.payload).forEach(_v0 => {
            _v0[_v0] = _v1.payload[_v0];
          });
        },
        setStoryboardVersionAction: (_v0, _v1) => {
          _v0.version = _v1.payload;
        },
        setBrandingColorsAction: (_v0, _v1) => {
          _v0.branding.colors = {
            primary: _v1.payload.colorPalette.primary,
            secondary: _v1.payload.colorPalette.secondary,
            default: _v1.payload.colorPalette.default
          }, _v0.layers.forEach(_v0 => {
            _v0.composition.forEach(_v0 => {
              (0, _v15.isTextElement)(_v0) ? (_v0.colors.fontColor = _v1.payload.colorPalette.default, _v0.colors.colorOne = _v1.payload.colorPalette.secondary) : (0, _v15.isSolidElement)(_v0) ? _v0.fill = _v1.payload.colorPalette.secondary : (0, _v15.isTransitionElement)(_v0) && (_v0.inElement.controls.primaryColor && (_v0.inElement.controls.primaryColor = _v1.payload.colorPalette.primary, _v0.outElement.controls.primaryColor = _v1.payload.colorPalette.primary), _v0.inElement.controls.secondaryColor && (_v0.inElement.controls.secondaryColor = _v1.payload.colorPalette.secondary, _v0.outElement.controls.secondaryColor = _v1.payload.colorPalette.secondary));
            });
          }), _v0.canvas.color = _v1.payload.colorPalette.primary;
        },
        setBrandLogoAction: (_v0, _v1) => {
          _v0.branding.logoPath = _v1.payload;
        },
        deleteLayerAction: (_v0, _v1) => {
          _v0.layers = _v0.layers.filter(_v0 => _v0.id !== _v1.payload);
        },
        addBlankLayerAction: _v0 => {
          let _v1 = {
            id: (0, _v25.randomString)(5),
            composition: [],
            type: _v5.LayerType.VISUAL
          };
          (0, _v23.safeInsertLayers)({
            insertIndex: 1 / 0,
            layers: _v0.layers,
            newLayers: [_v1]
          });
        },
        deleteEmptyLayersAction: _v0 => {
          _v0.layers = _v0.layers.filter(_v0 => (0, _v15.getCompositionWithoutTransition)(_v0.composition).length > 0);
        },
        setLayersAction: (_v0, _v1) => {
          _v0.layers = _v1.payload;
        },
        deleteCompositionElementAction: (_v0, _v1) => {
          let {
              layerId: _v2,
              ceId: _v3
            } = _v1.payload,
            _v4 = _v0.layers.findIndex(_v0 => _v0.id === _v2),
            _v5 = _v0.layers[_v4];
          _v5 && (_v5.composition = _v5.composition.filter(_v0 => _v0.id !== _v3), _v0.layers[_v4] = _v5);
        },
        updateOrientationAction: (_v0, _v1) => {
          _v0.layers.forEach(_v0 => {
            _v0.composition.forEach(_v0 => {
              let _v1 = (0, _v15.isMediaElement)(_v0) && !(0, _v15.isLogo)(_v0);
              (0, _v15.isSolidElement)(_v0) || (_v0.rect = (0, _v21.changeRectByOrientation)(_v0.rect, _v0.orientation, _v1.payload, !!_v1)), (0, _v15.isTextElement)(_v0) && (_v0.fontSize = (0, _v21.changeTextFontSizeByOrientation)(_v0.fontSize, _v0.orientation, _v1.payload));
            });
          }), _v0.orientation = _v1.payload;
        },
        updateLogoWatermarkAction: (_v0, _v1) => {
          _v0.branding.logoWatermark = _v1.payload;
        },
        setProjectNameAction: (_v0, _v1) => {
          _v0.projectName = _v1.payload;
        },
        setVideoSessionIdAction: (_v0, _v1) => {
          _v0.videoSessionId = _v1.payload;
        },
        setStoryboardIdAction: (_v0, _v1) => {
          _v0.id = _v1.payload;
        },
        addElementAction: (_v0, _v1) => {
          let _v2 = (0, _v24.getSafeElement)({
              element: (0, _v3.default)(_v1.payload.element),
              layers: _v0.layers
            }),
            _v3 = _v0.layers.filter(_v0 => _v0.type === _v5.LayerType.VISUAL || _v0.type === _v5.LayerType.INTERACTIVE_BACKGROUND_VIDEO),
            _v4 = (0, _v24.getZIndexForNewElement)(_v2, _v3);
          if (_v2.zindex = _v4, _v3[_v4]) _v3[_v4].composition.push(_v2);else {
            let _v0 = (0, _v24.createLayer)([_v2]);
            (0, _v23.safeInsertLayers)({
              insertIndex: 1 / 0,
              layers: _v0.layers,
              newLayers: [_v0]
            });
          }
        },
        addTransitionElementAction: (_v0, _v1) => {
          let {
              layerId: _v2,
              element: _v3
            } = _v1.payload,
            _v4 = (0, _v3.default)(_v3),
            _v5 = _v0.layers.findIndex(_v0 => _v0.id === _v2),
            _v6 = _v0.layers[_v5];
          _v6 && (_v4.zindex = _v5, _v6.composition.push(_v4));
        },
        addIntroElementAction: (_v0, _v1) => {
          let {
              element: _v2
            } = _v1.payload,
            {
              compositionTiming: {
                start: _v3,
                end: _v4
              }
            } = _v2,
            _v5 = _v4 - _v3;
          if (_v2.zindex = 0, _v2.compositionTiming.start = 0, _v2.compositionTiming.end = _v5, _v0.layers.length > 0) _v0.layers.forEach(_v0 => {
            _v0.composition.forEach(_v0 => {
              _v0.compositionTiming.start = _v0.compositionTiming.start + _v5, _v0.compositionTiming.end = _v0.compositionTiming.end + _v5;
            });
          }), _v0.layers[0].composition.unshift(_v2);else {
            let _v0 = (0, _v24.createLayer)([_v2]);
            (0, _v23.safeInsertLayers)({
              insertIndex: 1 / 0,
              layers: _v0.layers,
              newLayers: [_v0]
            });
          }
        },
        addOutroElementAction: (_v0, _v1) => {
          let {
            element: _v2,
            videoDuration: _v3
          } = _v1.payload;
          if (_v2.zindex = 0, _v0.layers.length > 0) {
            let _v0 = _v0.layers[0],
              {
                start: _v1,
                end: _v2
              } = _v2.compositionTiming;
            _v2.compositionTiming.start = _v3, _v2.compositionTiming.end = _v3 + (_v2 - _v1), _v0.composition.push(_v2);
          } else {
            let _v0 = (0, _v24.createLayer)([_v2]);
            (0, _v23.safeInsertLayers)({
              insertIndex: 1 / 0,
              layers: _v0.layers,
              newLayers: [_v0]
            });
          }
        },
        addAudioAction: (_v0, _v1) => {
          let {
              element: _v2
            } = _v1.payload,
            _v3 = _v0.layers.filter(_v0 => _v0.type === _v5.LayerType.AUDIO),
            _v4 = (0, _v24.getHighestFreeZIndexInTimeframe)(_v2.compositionTiming.start, _v2.compositionTiming.end, _v3);
          if (_v3[_v4]) _v2.zindex = _v4, _v3[_v4].composition.push(_v2);else {
            let _v0 = (0, _v24.createLayer)([_v2], _v5.LayerType.AUDIO);
            (0, _v23.safeInsertLayers)({
              insertIndex: 0,
              layers: _v0.layers,
              newLayers: [_v0]
            }), _v0.layers.forEach((_v0, _v1) => {
              _v0.type === _v5.LayerType.AUDIO && _v0.composition.forEach(_v0 => _v0.zindex = _v1);
            });
          }
        },
        addTimeTriggerAction: (_v0, _v1) => {
          let _v2 = (0, _v24.getSafeElement)({
              element: (0, _v3.default)(_v1.payload.element),
              layers: _v0.layers
            }),
            _v3 = _v0.layers.find(_v0 => _v0.type === _v5.LayerType.TIME_TRIGGERS);
          if (_v3) _v3.composition.push(_v2);else {
            let _v0 = (0, _v24.createLayer)([_v2], _v5.LayerType.TIME_TRIGGERS);
            (0, _v23.safeInsertLayers)({
              insertIndex: 1 / 0,
              layers: _v0.layers,
              newLayers: [_v0]
            });
          }
        },
        addInteractiveOverlayAction: (_v0, _v1) => {
          let {
            overlay: _v2
          } = _v1.payload;
          _v0.interactiveOverlays.push(_v2);
        },
        updateInteractiveOverlayAction: (_v0, _v1) => {
          let {
              overlay: _v2
            } = _v1.payload,
            _v3 = _v0.interactiveOverlays.findIndex(_v0 => _v0.id === _v2.id);
          if (-1 === _v3) throw Error(`Overlay with id ${_v2.id} not found`);
          _v0.interactiveOverlays[_v3] = _v2;
        },
        deleteInteractiveOverlayAction: (_v0, _v1) => {
          _v0.interactiveOverlays = _v0.interactiveOverlays.filter(_v0 => _v0.id !== _v1.payload.overlayId);
        },
        updateElementAction: (_v0, _v1) => {
          let _v2,
            _v3,
            {
              layerId: _v4,
              interactiveOverlayId: _v5,
              ceId: _v6,
              element: _v7
            } = _v1.payload;
          if (_v5) {
            let _v0 = _v0.interactiveOverlays.find(_v0 => _v0.id === _v5);
            _v2 = _v0?.interactiveLayers;
          } else _v2 = _v0.layers;
          if (_v2 && (_v3 = _v4 ? _v2.find(_v0 => _v0.id === _v4) : _v2.find(_v0 => (0, _v23.isCeInLayer)(_v6, _v0))), !_v3) return void console.error(`Tried to update element, but it wasn't found in ${_v5 ? `interactive overlay ${_v5} ` : ""}${_v4 ? `layer ${_v4}` : "any layer"}`);
          let _v8 = _v3.composition.findIndex(_v0 => _v0.id === _v6);
          -1 !== _v8 && (0, _v20.deepSpread)(_v3.composition[_v8], _v7);
        },
        replaceElementAction: (_v0, _v1) => {
          let _v2,
            {
              ceId: _v3,
              element: _v4
            } = _v1.payload,
            _v5 = -1;
          _v0.layers.find(_v0 => {
            let _v1 = _v0.composition.findIndex(_v0 => _v0.id === _v3);
            -1 !== _v1 && (_v2 = _v0, _v5 = _v1);
          }), _v2 && (_v2.composition[_v5] = _v4);
        },
        updateElementsAction: (_v0, _v1) => {
          let {
            elements: _v2
          } = _v1.payload;
          for (let _v0 = 0; _v0 < _v2.length; _v0++) {
            let _v0,
              {
                layerId: _v1,
                ceId: _v2,
                element: _v3
              } = _v2[_v0];
            if (!(_v0 = _v1 ? _v0.layers.find(_v0 => _v0.id === _v1) : _v0.layers.find(_v0 => (0, _v23.isCeInLayer)(_v2, _v0)))) {
              console.error(`Tried to update element, but it wasn't found in ${_v1 ? `layer ${_v1}` : "any layer"}`);
              continue;
            }
            let _v4 = _v0.composition.findIndex(_v0 => _v0.id === _v2);
            -1 !== _v4 && (0, _v20.deepSpread)(_v0.composition[_v4], _v3);
          }
        },
        updateMediaElementsWithSameSource: (_v0, _v1) => {
          let {
              ceId: _v2,
              element: _v3
            } = _v1.payload,
            _v4 = _v0.layers.find(_v0 => (0, _v23.isCeInLayer)(_v2, _v0));
          if (!_v4) return;
          let _v5 = _v4.composition.find(_v0 => _v0.id === _v2);
          _v5 && _v0.layers.forEach(_v0 => _v0.composition.forEach(_v0 => {
            (0, _v15.isMediaElement)(_v0) && (0, _v15.isMediaElement)(_v5) && _v0.thumbnailUrl === _v5.thumbnailUrl && _v0.isLoading && (0, _v20.deepSpread)(_v0, _v3);
          }));
        },
        changeElementLayerByOffsetAction: (_v0, _v1) => {
          let {
            ceIds: _v2,
            offset: _v3
          } = _v1.payload;
          [..._v2].sort((_v0, _v1) => {
            let {
                layerIndex: _v2
              } = (0, _v23.getLayerDataByCeId)(_v0, _v0.layers),
              {
                layerIndex: _v3
              } = (0, _v23.getLayerDataByCeId)(_v1, _v0.layers);
            return _v3 - _v2;
          }).forEach(_v0 => {
            let {
              layerIndex: _v1,
              ceIndex: _v2,
              layer: _v3
            } = (0, _v23.getLayerDataByCeId)(_v0, _v0.layers);
            if (-1 === _v1 || !_v3) throw Error(_v11.LAYER_NOT_FOUND);
            let _v4 = _v0.layers[_v1].composition[_v2];
            if (-1 === _v2 || !_v4) throw Error(_v11.ELEMENT_NOT_FOUND);
            let {
                start: _v5,
                end: _v6
              } = _v4.compositionTiming,
              _v7 = _v3 + _v3 * Math.abs(_v3),
              _v8 = _v0.layers[_v1 + _v3],
              _v9 = _v0.layers[_v1 + _v7];
            if (_v8 && (0, _v23.isElementValidForLayer)(_v4, _v8) && !(0, _v24.isElementExistInTime)(_v5, _v6, _v8.composition)) _v8.composition.push(_v4);else if (_v9 && (0, _v23.isElementValidForLayer)(_v4, _v9) && !(0, _v24.isElementExistInTime)(_v5, _v6, _v9.composition)) _v9.composition.push(_v4);else {
              let _v0 = (0, _v24.createLayer)([_v4], (0, _v15.isSoundElement)(_v4) ? _v5.LayerType.AUDIO : _v5.LayerType.VISUAL),
                _v1 = Math.max(_v1 + (_v3 > 0 ? _v7 : _v3), 0);
              (0, _v23.safeInsertLayers)({
                insertIndex: _v1,
                layers: _v0.layers,
                newLayers: [_v0]
              });
            }
            _v3.composition.splice(_v2, 1), _v3.composition.length || (_v0.layers = _v0.layers.filter(_v0 => _v0.id !== _v3.id)), _v0.layers = _v0.layers.map((_v0, _v1) => ({
              ..._v0,
              composition: _v0.composition.map(_v0 => ({
                ..._v0,
                zindex: _v1
              }))
            }));
          });
        },
        addElementToLayerWithOffsetAction: (_v0, _v1) => {
          let {
              element: _v2,
              layerId: _v3,
              direction: _v4,
              limitToVideoDuration: _v5 = !1
            } = _v1.payload,
            _v6 = (0, _v3.default)(_v2),
            _v7 = Math.max((0, _v23.getLayerIndexById)(_v3, _v0.layers) + Math.max(0, _v4), 0);
          if (_v5) {
            let _v0 = (0, _v26.getDurationFromLayers)(_v0.layers);
            _v6.compositionTiming = (0, _v26.getSafeTimeAccordingToDuration)({
              compositionTiming: _v6.compositionTiming,
              duration: _v0
            });
          }
          let _v8 = (0, _v24.createLayer)([_v6], (0, _v15.isSoundElement)(_v6) ? _v5.LayerType.AUDIO : _v5.LayerType.VISUAL);
          (0, _v23.safeInsertLayers)({
            insertIndex: _v7,
            layers: _v0.layers,
            newLayers: [_v8]
          }), _v0.layers = _v0.layers.map((_v0, _v1) => ({
            ..._v0,
            composition: _v0.composition.map(_v0 => ({
              ..._v0,
              zindex: _v1
            }))
          }));
        },
        addElementsToLayersWithOffsetMapAction: (_v0, _v1) => {
          let _v2,
            {
              elementsData: _v3,
              layerId: _v4,
              direction: _v5,
              elementsBeforeChangeForDelete: _v6 = {}
            } = _v1.payload;
          if (!_v3 || !_v3.length) return;
          Object.keys(_v6).forEach(_v0 => {
            _v6[_v0].elements.forEach(_v0 => {
              let _v1 = _v0.layers.findIndex(_v0 => _v0.id === _v0),
                _v2 = _v0.layers[_v1];
              _v2 && (_v2.composition = _v2.composition.filter(_v0 => _v0.id !== _v0.id), _v0.layers[_v1] = _v2);
            });
          });
          let _v7 = _v3.findIndex(_v0 => 0 === _v0.anchorOffset);
          if (0 === _v5) _v2 = (0, _v23.getLayerIndexById)(_v4, _v0.layers);else {
            _v2 = Math.max((0, _v23.getLayerIndexById)(_v4, _v0.layers) + Math.max(0, _v5), 0);
            let _v0 = (0, _v24.createLayer)([], (0, _v15.isSoundElement)(_v3[_v7].elements[0]) ? _v5.LayerType.AUDIO : _v5.LayerType.VISUAL);
            (0, _v23.safeInsertLayers)({
              insertIndex: _v2,
              layers: _v0.layers,
              newLayers: [_v0]
            });
          }
          let _v8 = _v0.layers[_v0.layers.length - 1]?.type === _v5.LayerType.TIME_TRIGGERS,
            _v9 = 0,
            _v10 = _v0 => {
              let _v1 = _v0.elements,
                _v2 = function () {
                  if ((0, _v15.isTimeTriggerElement)(_v1[0])) return _v0.layers.length - 1;
                  let _v0 = _v2 + _v0.anchorOffset + _v9;
                  return _v8 ? Math.min(_v0.layers.length - 2, _v0) : _v0;
                }(),
                _v3 = _v0.layers[_v2],
                _v4 = !!_v3 && !(0, _v24.isElementsOverlapping)(_v1, _v3.composition),
                _v5 = !!_v3 && (0, _v23.isElementValidForLayer)(_v0.elements[0], _v3);
              if (_v4 && _v5) _v3.composition.push(..._v0.elements);else {
                let _v0 = _v0.anchorOffset > 0 ? 0 : 1,
                  _v1 = Math.min(Math.max(_v2 + _v0, 0), _v0.layers.length),
                  _v2 = (0, _v24.createLayer)(_v0.elements, (0, _v15.isSoundElement)(_v0.elements[0]) ? _v5.LayerType.AUDIO : _v5.LayerType.VISUAL);
                (0, _v23.safeInsertLayers)({
                  insertIndex: _v1,
                  layers: _v0.layers,
                  newLayers: [_v2]
                }), _v9 += _v0;
              }
            };
          for (let _v0 = _v7; _v0 < _v3.length; _v0++) _v10(_v3[_v0]);
          for (let _v0 = _v7 - 1; _v0 >= 0; _v0--) _v10(_v3[_v0]);
          _v0.layers = (0, _v23.alignZIndices)(_v0.layers);
        },
        addElementToLayerAction: (_v0, _v1) => {
          let {
              element: _v2,
              layerId: _v3
            } = _v1.payload,
            _v4 = (0, _v24.getSafeElement)({
              element: (0, _v3.default)(_v2),
              layers: _v0.layers
            }),
            _v5 = _v0.layers.find(_v0 => _v0.id === _v3);
          if (!_v5) throw Error(_v11.LAYER_NOT_FOUND);
          let _v6 = !(0, _v24.isElementExistInTime)(_v4.compositionTiming.start, _v4.compositionTiming.end, _v5.composition);
          if ((0, _v23.isElementValidForLayer)(_v4, _v5) && _v6) _v5.composition.push(_v4);else {
            let _v0 = (0, _v24.createLayer)([_v4], (0, _v15.isSoundElement)(_v4) ? _v5.LayerType.AUDIO : _v5.LayerType.VISUAL);
            (0, _v23.safeInsertLayers)({
              insertIndex: 1 / 0,
              layers: _v0.layers,
              newLayers: [_v0]
            });
          }
          _v0.layers = _v0.layers.map((_v0, _v1) => ({
            ..._v0,
            composition: _v0.composition.map(_v0 => ({
              ..._v0,
              zindex: _v1
            }))
          }));
        },
        deleteElementsAction: (_v0, _v1) => {
          let {
            deletionMap: _v2,
            isDeleteEmptyLayers: _v3
          } = _v1.payload;
          _v2.forEach(({
            layerId: _v0,
            elementIds: _v1
          }) => {
            let _v2 = _v0.layers.findIndex(_v0 => _v0.id === _v0),
              _v3 = _v0.layers[_v2];
            _v3 && (_v3.composition = _v3.composition.filter(_v0 => !_v1.includes(_v0.id)), _v0.layers[_v2] = _v3);
          }), _v3 && (_v0.layers = _v0.layers.filter(_v0 => (0, _v15.getCompositionWithoutTransition)(_v0.composition).length > 0));
        },
        deleteElementAction: (_v0, _v1) => {
          let _v2,
            _v3,
            _v4,
            {
              ceId: _v5,
              interactiveOverlayId: _v6,
              type: _v7 = "layers",
              preventDeleteEmptyLayer: _v8 = !1
            } = _v1.payload;
          if (_v6) {
            let _v0;
            if (({
              interactiveOverlayIndex: _v0,
              layerIndex: _v3,
              ceIndex: _v4
            } = (0, _v23.getInteractiveOverlayLayerDataByCeId)(_v5, _v0.interactiveOverlays)), -1 === _v0 || -1 === _v3 || -1 === _v4) return;
            _v2 = _v0.interactiveOverlays[_v0].interactiveLayers;
          } else {
            if (({
              layerIndex: _v3,
              ceIndex: _v4
            } = (0, _v23.getLayerDataByCeId)(_v5, _v0[_v7])), -1 === _v3 || -1 === _v4) return;
            _v2 = _v0[_v7];
          }
          let _v9 = _v2[_v3],
            [_v10] = _v9.composition.splice(_v4, 1),
            _v11 = (0, _v15.getLinkedOverlayId)(_v10);
          _v11 && (_v0.interactiveOverlays = _v0.interactiveOverlays.filter(_v0 => _v0.id !== _v11)), _v9.composition.length || _v8 || (_v0[_v7] = (0, _v23.alignZIndices)(_v0[_v7].filter(_v0 => _v0.id !== _v9.id)));
        },
        splitElementsAction: (_v0, _v1) => {
          let {
            splitMap: _v2
          } = _v1.payload;
          _v2.forEach(({
            ceId: _v0,
            layerId: _v1,
            leftSplitElement: _v2,
            rightSplitElement: _v3
          }) => {
            let _v4 = _v0.layers.findIndex(_v0 => _v0.id === _v1),
              _v5 = _v0.layers[_v4];
            if (!_v5) throw Error(_v11.LAYER_NOT_FOUND);
            let _v6 = _v5.composition.findIndex(_v0 => _v0.id === _v0);
            -1 !== _v6 && _v5.composition.splice(_v6, 1, _v2, _v3);
          });
        },
        deleteAllElementsAction: _v0 => {
          _v0.layers = [];
        },
        addSourceAction: (_v0, _v1) => {
          _v0.sources.push(_v1.payload);
        },
        updateSourceThumbnailsAction: (_v0, _v1) => {
          let _v2 = _v0.sources.findIndex(_v0 => _v0.hash === _v1.payload.hash);
          _v0.sources[_v2] = {
            ..._v0.sources[_v2],
            ...{
              thumbnailsSprites: _v1.payload.thumbnailsSprites
            }
          };
        },
        updateSourceAction: (_v0, _v1) => {
          let {
              hash: _v2,
              source: _v3
            } = _v1.payload,
            [_v4, _v5] = (0, _v27.updateStoryboardSource)(_v0, _v2, _v3);
          _v0.layers = _v4, _v0.sources = _v5;
        },
        updateInteractiveQuizAction: (_v0, _v1) => {
          _v0.interactiveQuiz = {
            ..._v0.interactiveQuiz,
            ..._v1.payload
          };
        },
        setCanvasColorAction: (_v0, _v1) => {
          _v0.canvas.color = _v1.payload.color;
        },
        generateCreditsAction: _v0 => {
          let _v1 = (0, _v16.getCreditsForLayerMedia)(_v0.layers),
            _v2 = _v0.layers.findIndex(_v0 => _v0.id === _v9.CREDITS_LAYER);
          if (_v2 > -1 && _v0.layers.splice(_v2, 1), _v1.length > 0) {
            let _v0 = {
              id: _v9.CREDITS_LAYER,
              composition: [],
              type: _v5.LayerType.HIDDEN
            };
            _v1.forEach(_v0 => {
              let _v1 = (0, _v16.getCreditTextElement)(_v0, _v0.orientation, _v0.layers.length);
              _v0.composition.push(_v1);
            }), (0, _v23.safeInsertLayers)({
              insertIndex: 1 / 0,
              layers: _v0.layers,
              newLayers: [_v0]
            });
          }
        },
        deleteTranscriptSelectionAction: (_v0, _v1) => {
          let _v2 = _v1.payload.reduce((_v0, _v1) => {
              let {
                element: _v2
              } = _v1;
              return _v0[_v2.layerIndex] ? _v0[_v2.layerIndex].push(_v1) : _v0[_v2.layerIndex] = [_v1], _v0;
            }, {}),
            _v3 = !1;
          Object.entries(_v2).forEach(([_v0, _v1]) => {
            let _v2 = Number(_v0),
              _v3 = [..._v0.layers[_v2].composition].sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.start);
            _v1.forEach(_v0 => {
              let {
                  element: _v1,
                  selectionStart: _v2,
                  selectionEnd: _v3
                } = _v0,
                _v4 = _v3.findIndex(_v0 => _v0.id === _v1.id),
                _v5 = _v3[_v4],
                _v6 = _v3 - _v2,
                _v7 = _v3.slice(_v4 + 1).map(_v0 => ({
                  ..._v0,
                  compositionTiming: {
                    start: (0, _v26.toNearestFrame)(_v0.compositionTiming.start - _v6),
                    end: (0, _v26.toNearestFrame)(_v0.compositionTiming.end - _v6)
                  }
                })),
                _v8 = _v0 => {
                  _v3.splice(_v4, 1 / 0, ..._v0, ..._v7);
                };
              if (_v2 === _v1.timing.startTime && _v3 === _v1.timing.endTime && _v8([]), _v2 === _v1.timing.startTime && _v3 < _v1.timing.endTime && _v8([{
                ..._v5,
                timing: {
                  startTime: (0, _v26.toNearestFrame)(_v3),
                  endTime: (0, _v26.toNearestFrame)(_v1.timing.endTime)
                },
                compositionTiming: {
                  start: (0, _v26.toNearestFrame)(_v5.compositionTiming.start),
                  end: (0, _v26.toNearestFrame)(_v5.compositionTiming.end - _v6)
                }
              }]), _v2 > _v1.timing.startTime && _v3 === _v1.timing.endTime && _v8([{
                ..._v5,
                timing: {
                  startTime: (0, _v26.toNearestFrame)(_v1.timing.startTime),
                  endTime: (0, _v26.toNearestFrame)(_v2)
                },
                compositionTiming: {
                  start: (0, _v26.toNearestFrame)(_v5.compositionTiming.start),
                  end: (0, _v26.toNearestFrame)(_v5.compositionTiming.end - _v6)
                }
              }]), _v2 > _v1.timing.startTime && _v3 < _v1.timing.endTime) {
                let _v0 = (0, _v26.toNearestFrame)(_v5.compositionTiming.start + _v2 - _v1.timing.startTime);
                _v8([{
                  ..._v5,
                  timing: {
                    startTime: (0, _v26.toNearestFrame)(_v1.timing.startTime),
                    endTime: _v2
                  },
                  compositionTiming: {
                    start: (0, _v26.toNearestFrame)(_v5.compositionTiming.start),
                    end: _v0
                  }
                }, {
                  ..._v5,
                  animationName: _v4.AnimationType.NONE,
                  animationMid: _v4.AnimationMid.NONE,
                  animationOut: _v4.AnimationOut.NONE,
                  id: (0, _v17.createUuidV4)(),
                  timing: {
                    startTime: (0, _v26.toNearestFrame)(_v3),
                    endTime: (0, _v26.toNearestFrame)(_v1.timing.endTime)
                  },
                  compositionTiming: {
                    start: _v0,
                    end: (0, _v26.toNearestFrame)(_v0 + (_v1.timing.endTime - _v3))
                  }
                }]);
              }
            }), _v0.layers[_v2].composition = _v3, _v3 = _v3 && 0 === _v3.length;
          }), _v3 && _v32.caseReducers.deleteEmptyLayersAction(_v0);
        },
        removeElementsBySourceHashAction: (_v0, _v1) => {
          let {
            sourceHash: _v2
          } = _v1.payload;
          _v0.layers = _v0.layers.map(_v0 => ({
            ..._v0,
            composition: _v0.composition.filter(_v0 => !(0, _v15.isMediaElement)(_v0) || _v0.sourceHash !== _v2)
          })), _v0.layers = _v0.layers.filter(_v0 => 0 !== (0, _v15.getCompositionWithoutTransition)(_v0.composition).length), _v0.sources = _v0.sources.filter(_v0 => _v0.hash !== _v2);
        },
        bulkRemoveTranscriptItemsAction: (_v0, _v1) => {
          _v1.payload.forEach(_v0 => {
            Object.entries(Object.values(_v0).reduce((_v0, _v1) => {
              let {
                layerIndex: _v2
              } = _v1.elementTiming;
              return _v0[_v2] ? _v0[_v2].push(_v1) : _v0[_v2] = [_v1], _v0;
            }, {})).forEach(([_v0, _v1]) => {
              let _v2 = Number(_v0),
                _v3 = [..._v0.layers[_v2].composition].sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.start);
              _v1.forEach(_v0 => {
                let {
                    elementTiming: _v1,
                    timingsToRemove: _v2
                  } = _v0,
                  _v3 = _v3.findIndex(_v0 => _v0.id === _v1.id),
                  _v4 = _v2.reduce((_v0, _v1) => _v0 + (_v1.endTime - _v1.startTime), 0),
                  _v5 = _v3.slice(_v3 + 1).map(_v0 => ({
                    ..._v0,
                    compositionTiming: {
                      start: (0, _v26.toNearestFrame)(_v0.compositionTiming.start - _v4),
                      end: (0, _v26.toNearestFrame)(_v0.compositionTiming.end - _v4)
                    }
                  })),
                  _v6 = _v0 => {
                    _v3.splice(_v3, 1 / 0, ..._v0, ..._v5);
                  },
                  _v7 = {
                    ..._v3[_v3],
                    effects: void 0
                  };
                if (_v4 === _v7.timing.endTime - _v7.timing.startTime) _v6([]);else {
                  let _v0 = [_v7];
                  _v2.forEach(({
                    startTime: _v0,
                    endTime: _v1
                  }) => {
                    let _v2 = _v0[_v0.length - 1],
                      _v3 = _v1 - _v0;
                    if (_v0 === _v2.timing.startTime) _v0[_v0.length - 1] = {
                      ..._v2,
                      timing: {
                        startTime: (0, _v26.toNearestFrame)(_v1),
                        endTime: (0, _v26.toNearestFrame)(_v2.timing.endTime)
                      },
                      compositionTiming: {
                        start: (0, _v26.toNearestFrame)(_v2.compositionTiming.start),
                        end: (0, _v26.toNearestFrame)(_v2.compositionTiming.end - _v3)
                      }
                    };else {
                      let _v0 = (0, _v26.toNearestFrame)(_v2.compositionTiming.start + _v0 - _v2.timing.startTime);
                      _v0[_v0.length - 1] = {
                        ..._v2,
                        timing: {
                          startTime: (0, _v26.toNearestFrame)(_v2.timing.startTime),
                          endTime: (0, _v26.toNearestFrame)(_v0)
                        },
                        compositionTiming: {
                          start: (0, _v26.toNearestFrame)(_v2.compositionTiming.start),
                          end: _v0
                        }
                      }, _v1 < _v2.timing.endTime && _v0.push({
                        ..._v2,
                        animationName: _v4.AnimationType.NONE,
                        animationMid: _v4.AnimationMid.NONE,
                        animationOut: _v4.AnimationOut.NONE,
                        id: (0, _v17.createUuidV4)(),
                        timing: {
                          startTime: (0, _v26.toNearestFrame)(_v1),
                          endTime: (0, _v26.toNearestFrame)(_v2.timing.endTime)
                        },
                        compositionTiming: {
                          start: _v0,
                          end: (0, _v26.toNearestFrame)(_v0 + (_v2.timing.endTime - _v1))
                        }
                      });
                    }
                  }), _v6(_v0);
                }
              }), _v0.layers[_v2].composition = _v3;
            });
          }), _v32.caseReducers.deleteEmptyLayersAction(_v0);
        },
        updateLayerWithBulkChangesAction: (_v0, _v1) => {
          let {
              layerId: _v2,
              composition: _v3
            } = _v1.payload,
            _v4 = _v0.layers.findIndex(_v0 => _v0.id === _v2);
          _v0.layers[_v4] && (_v0.layers[_v4].composition = _v3);
        },
        adjustOverlayItemsDurationBySecondAction: (_v0, _v1) => {
          let {
              overlayId: _v2,
              seconds: _v3
            } = _v1.payload,
            _v4 = _v0.interactiveOverlays.findIndex(_v0 => _v0.id === _v2);
          if (-1 === _v4) throw Error(`Overlay with id ${_v2} not found`);
          let _v5 = _v0.interactiveOverlays[_v4],
            _v6 = {
              ..._v5,
              interactiveLayers: _v5.interactiveLayers.map(_v0 => (_v0.composition = _v0.composition.map(_v0 => (_v0.compositionTiming.end = Math.max(_v0.compositionTiming.end + _v3, _v10.MIN_ELEMENT_DURATION), _v0)), _v0))
            };
          _v0.interactiveOverlays[_v4] = _v6;
        }
      },
      extraReducers: _v0 => {
        _v0.addMatcher(_v29.storyboardApi.endpoints.initStoryboard.matchFulfilled, (_v0, _v1) => {
          let {
            storyboard: _v2,
            storyboardId: _v3
          } = _v1.payload;
          _v0.id = _v2?.id || _v3;
        }).addMatcher(_v28.businessDataApi.endpoints.fetchBusinessData.matchFulfilled, (_v0, _v1) => {
          let {
            logo: _v2
          } = _v1.payload;
          _v0.branding.logoPath = _v2?.path;
        });
      }
    }),
    {
      updateStoryboardAction: _v33,
      setBrandingColorsAction: _v34,
      setBrandLogoAction: _v35,
      resetStoryboardAction: _v36,
      addBlankLayerAction: _v37,
      deleteEmptyLayersAction: _v38,
      setLayersAction: _v39,
      deleteLayerAction: _v40,
      deleteCompositionElementAction: _v41,
      updateOrientationAction: _v42,
      updateLogoWatermarkAction: _v43,
      setProjectNameAction: _v44,
      setVideoSessionIdAction: _v45,
      setStoryboardIdAction: _v46,
      addElementAction: _v47,
      addTransitionElementAction: _v48,
      updateElementAction: _v49,
      replaceElementAction: _v50,
      updateElementsAction: _v51,
      deleteElementAction: _v52,
      splitElementsAction: _v53,
      deleteElementsAction: _v54,
      deleteAllElementsAction: _v55,
      addSourceAction: _v56,
      updateSourceThumbnailsAction: _v57,
      updateMediaElementsWithSameSource: _v58,
      changeElementLayerByOffsetAction: _v59,
      addElementToLayerWithOffsetAction: _v60,
      addElementsToLayersWithOffsetMapAction: _v61,
      addElementToLayerAction: _v62,
      addIntroElementAction: _v63,
      addOutroElementAction: _v64,
      addAudioAction: _v65,
      addTimeTriggerAction: _v66,
      addInteractiveOverlayAction: _v67,
      updateInteractiveOverlayAction: _v68,
      deleteInteractiveOverlayAction: _v69,
      setCanvasColorAction: _v70,
      generateCreditsAction: _v71,
      updateSourceAction: _v72,
      deleteTranscriptSelectionAction: _v73,
      bulkRemoveTranscriptItemsAction: _v74,
      setStoryboardVersionAction: _v75,
      removeElementsBySourceHashAction: _v76,
      updateLayerWithBulkChangesAction: _v77,
      adjustOverlayItemsDurationBySecondAction: _v78,
      updateInteractiveQuizAction: _v79
    } = _v32.actions,
    _v80 = _v0 => _v0.storyboard.layers,
    _v81 = (0, _v1.createSelector)(_v0 => _v0.storyboard.id, _v0 => _v0),
    _v82 = (0, _v1.createSelector)(_v0 => _v0.storyboard.orientation, _v0 => _v0),
    _v83 = (0, _v1.createSelector)(_v80, _v26.getDurationFromLayers),
    _v84 = (0, _v1.createSelector)(_v0 => _v0.storyboard, _v0 => _v0),
    _v85 = (0, _v1.createSelector)(_v80, _v0 => _v0.filter(_v0 => _v0.type !== _v5.LayerType.HIDDEN)),
    _v86 = (0, _v1.createSelector)(_v85, _v0 => _v0.length),
    _v87 = (0, _v1.createSelector)(_v0 => _v0.storyboard.layers, _v0 => _v0.filter(_v0 => _v0.type !== _v5.LayerType.HIDDEN)),
    _v88 = (0, _v1.createSelector)(_v0 => _v0.storyboard.layers, _v0 => _v0.some(_v0 => _v0.composition.length));
  (0, _v1.createSelector)(_v0 => _v0.storyboard.layers, _v0 => _v0.length);
  let _v89 = (0, _v1.createSelector)(_v80, _v0 => _v0.filter(_v0 => _v0.type !== _v5.LayerType.HIDDEN).flatMap(_v0 => _v0.composition)),
    _v90 = (0, _v1.createSelector)(_v0 => _v0.storyboard.sources, _v0 => _v0),
    _v91 = (0, _v1.createSelector)(_v0 => _v0.storyboard.branding.colors, _v0 => _v0),
    _v92 = (0, _v1.createSelector)(_v0 => _v0.storyboard.branding.colors.secondary, _v0 => _v0),
    _v93 = (0, _v1.createSelector)(_v80, _v0 => {
      for (let _v0 of _v0) if (_v0.type !== _v5.LayerType.HIDDEN) {
        for (let _v0 of _v0.composition) if ((0, _v15.isMediaElement)(_v0) && (_v0.isLoading || (0, _v15.isImageHotspot)(_v0) && _v0.interactiveHotspot.hover.isLoading)) return !0;
      }
      return !1;
    }),
    _v94 = (0, _v1.createSelector)(_v80, _v0 => 0 === _v0.length),
    _v95 = (0, _v1.createSelector)(_v0 => _v0.storyboard.projectName, _v0 => _v0 || "");
  (0, _v1.createSelector)(_v0 => _v0.storyboard.branding.logoPath, _v0 => _v0);
  let _v96 = (0, _v1.createSelector)(_v80, _v0 => _v0[_v0.length - 1]?.type === _v5.LayerType.TIME_TRIGGERS),
    _v97 = (0, _v1.createSelector)(_v0 => _v0.storyboard.videoSessionId, _v0 => _v0 || 0),
    _v98 = (0, _v1.createSelector)(_v0 => _v0.storyboard.sources, _v0 => _v0.reduce((_v0, _v1) => ({
      ..._v0,
      [_v1.hash]: _v1
    }), {})),
    _v99 = (0, _v1.createSelector)([_v98, (_v0, _v1) => _v1], (_v0, _v1) => _v0[_v1]),
    _v100 = (0, _v1.createSelector)(_v0 => _v0.storyboard.id, _v0 => !_v0),
    _v101 = (0, _v1.createSelector)(_v80, _v0 => [..._v0].reverse().find(_v0 => _v0.type === _v5.LayerType.AUDIO)),
    _v102 = (0, _v1.createSelector)(_v0 => (0, _v14.last)(_v0.storyboard.layers), _v0 => _v0 && _v0.type === _v5.LayerType.TIME_TRIGGERS ? _v0.composition.map(_v0 => _v0.compositionTiming.start) : null),
    _v103 = (0, _v1.createSelector)(_v80, _v0 => {
      let _v1 = new Set();
      return _v0.forEach(({
        composition: _v0
      }) => _v0.forEach(_v0 => {
        (0, _v15.isVideoElement)(_v0) && _v0.sourceHash && _v1.add(_v0.sourceHash);
      })), Array.from(_v1);
    }),
    _v104 = (0, _v1.createSelector)(_v0 => _v0.storyboard.sources, _v0 => _v0.find(_v0 => _v0.hash.startsWith("vimeoversion"))?.previewUrl),
    _v105 = (0, _v1.createSelector)(_v0 => _v0.storyboard.interactiveOverlays, _v0 => _v0),
    _v106 = (0, _v1.createSelector)(_v105, _v0 => Object.fromEntries(_v0.map(_v0 => [_v0.id, _v0.name]))),
    _v107 = (0, _v1.createSelector)([_v105, (_v0, _v1) => _v1], (_v0, _v1) => _v0.find(_v0 => _v0.id === _v1));
  (0, _v1.createSelector)(_v80, _v105, (_v0, _v1) => {
    let _v2 = _v0 => _v0.composition.some(_v0 => (0, _v15.isPollElement)(_v0) && _v0.variant === _v7.POLL_VARIANT.QUIZ);
    return _v0.some(_v2) || _v1.some(_v0 => _v0.interactiveLayers.some(_v2));
  });
  let _v108 = (0, _v1.createSelector)([_v87, _v30.currentTimeSelector], (_v0, _v1) => {
      let _v2 = (0, _v26.getDurationFromLayers)(_v0),
        _v3 = [];
      return (_v0.forEach(_v0 => {
        _v0.composition.forEach(_v0 => {
          if ((0, _v15.isMediaElement)(_v0)) {
            let _v0 = (0, _v15.isInCurrentTime)(_v1, _v0, _v2),
              _v1 = _v0.isLoading && !_v0.isLoadingError;
            _v0 && _v1 && _v3.push(_v0);
          }
        });
      }), _v3.length > 0) ? _v3 : null;
    }),
    _v109 = _v0 => _v0.storyboard.interactiveQuiz?.scorecardOverlayIds?.[0],
    _v110 = (0, _v1.createSelector)(_v105, _v109, (_v0, _v1) => _v0.find(_v0 => _v0.id === _v1)),
    _v111 = (0, _v1.createSelector)(_v110, _v0 => {
      if (!_v0) return {};
      let _v1 = {};
      for (let _v0 of _v0.interactiveLayers) for (let _v0 of _v0.composition) (0, _v15.isInteractiveHotspot)(_v0) && _v0.interactiveHotspot?.name && (_v1[_v0.interactiveHotspot.name] = _v0);
      return _v1;
    }),
    _v112 = (0, _v1.createSelector)(_v111, _v0 => _v0[_v13.SCORECARD_TITLE_HOTSPOT_NAME]),
    _v113 = (0, _v1.createSelector)(_v111, _v0 => _v0[_v13.SCORECARD_DESCRIPTION_HOTSPOT_NAME]);
  (0, _v1.createSelector)(_v111, _v0 => _v0[_v13.SCORECARD_RETAKE_BUTTON_HOTSPOT_NAME]);
  let _v114 = (0, _v1.createSelector)(_v111, _v0 => _v0[_v13.SCORECARD_RETAKE_LEFT_TEXT_HOTSPOT_NAME]),
    _v115 = (0, _v1.createSelector)(_v111, _v0 => _v0[_v13.SCORECARD_LOGO_HOTSPOT_NAME]),
    _v116 = (0, _v1.createSelector)(_v115, _v90, (_v0, _v1) => {
      if (!_v0?.sourceHash) return;
      let _v2 = _v1.find(_v0 => _v0.hash === _v0.sourceHash);
      return _v2?.previewUrl;
    }),
    _v117 = (0, _v1.createSelector)([_v80, (_v0, _v1) => _v1, (_v0, _v1, _v2) => _v2], (_v0, _v1, _v2) => {
      if (_v2) {
        let _v0 = _v0.find(_v0 => _v0.id === _v2);
        return _v0?.composition.find(_v0 => _v0.id === _v1);
      }
      for (let _v0 of _v0) {
        let _v0 = _v0.composition.find(_v0 => _v0.id === _v1);
        if (_v0) return _v0;
      }
    }),
    _v118 = (0, _v1.createSelector)([_v0 => _v0, (_v0, _v1) => _v1], (_v0, _v1) => {
      if (!_v1) return null;
      let _v2 = _v1.outElement.elementId,
        _v3 = _v1.inElement.elementId;
      return _v2 && _v3 ? [_v117(_v0, _v2) || null, _v117(_v0, _v3) || null] : null;
    }),
    _v119 = _v32.reducer;
  _v0.s(["addAudioAction", 0, _v65, "addElementAction", 0, _v47, "addElementToLayerAction", 0, _v62, "addElementToLayerWithOffsetAction", 0, _v60, "addElementsToLayersWithOffsetMapAction", 0, _v61, "addInteractiveOverlayAction", 0, _v67, "addIntroElementAction", 0, _v63, "addOutroElementAction", 0, _v64, "addSourceAction", 0, _v56, "addTimeTriggerAction", 0, _v66, "addTransitionElementAction", 0, _v48, "adjustOverlayItemsDurationBySecondAction", 0, _v78, "allElementsSelector", 0, _v89, "allLayersSelector", 0, _v80, "brandColorsSelector", 0, _v91, "brandSecondaryColorSelector", 0, _v92, "bulkRemoveTranscriptItemsAction", 0, _v74, "changeElementLayerByOffsetAction", 0, _v59, "default", 0, _v119, "deleteAllElementsAction", 0, _v55, "deleteCompositionElementAction", 0, _v41, "deleteElementAction", 0, _v52, "deleteElementsAction", 0, _v54, "deleteEmptyLayersAction", 0, _v38, "deleteInteractiveOverlayAction", 0, _v69, "deleteLayerAction", 0, _v40, "deleteTranscriptSelectionAction", 0, _v73, "durationSelector", 0, _v83, "elementByIdSelector", 0, _v117, "generateCreditsAction", 0, _v71, "hasTimeTriggerLayerSelector", 0, _v96, "initialState", 0, _v31, "interactiveOverlayNameByIdSelector", 0, _v106, "interactiveOverlaysSelector", 0, _v105, "interactiveVideoSrcSelector", 0, _v104, "isBlankSelector", 0, _v94, "isElementsLoadingSelector", 0, _v93, "isLoadingStoryboardSelector", 0, _v100, "layersSelector", 0, _v87, "loadingElementsInCurrentTimeSelector", 0, _v108, "nonHiddenLayersCountSelector", 0, _v86, "nonHiddenLayersSelector", 0, _v85, "orientationSelector", 0, _v82, "projectNameSelector", 0, _v95, "quizLogoUriSelector", 0, _v0 => _v0.storyboard.interactiveQuiz?.logoUri ?? "", "quizQuestionProgressSelector", 0, _v0 => _v0.storyboard.interactiveQuiz?.questionProgress ?? !1, "quizRetakesAmountSelector", 0, _v0 => _v0.storyboard.interactiveQuiz?.retakesAmount ?? _v12.UNLIMITED_RETAKES_VALUE, "quizScorePassPercentageSelector", 0, _v0 => _v0.storyboard.interactiveQuiz?.passPercentage, "quizShowConfettiSelector", 0, _v0 => _v0.storyboard.interactiveQuiz?.showConfetti ?? !1, "quizShowCorrectAnswerIfIncorrectSelectedSelector", 0, _v0 => _v0.storyboard.interactiveQuiz?.showCorrectAnswerIfIncorrectSelected ?? _v12.DEFAULT_SHOW_CORRECT_ANSWER_IF_INCORRECT_SELECTED, "quizShowLogoSelector", 0, _v0 => _v0.storyboard.interactiveQuiz?.showLogo ?? !1, "quizShuffleAnswersSelector", 0, _v0 => _v0.storyboard.interactiveQuiz?.shuffleAnswers ?? _v12.DEFAULT_SHUFFLE_ANSWERS, "removeElementsBySourceHashAction", 0, _v76, "replaceElementAction", 0, _v50, "resetStoryboardAction", 0, _v36, "scorecardDescriptionCompositionSelector", 0, _v113, "scorecardLogoCompositionSelector", 0, _v115, "scorecardLogoThumbnailUrlSelector", 0, _v116, "scorecardOverlayIdSelector", 0, _v109, "scorecardOverlaySelector", 0, _v110, "scorecardTitleCompositionSelector", 0, _v112, "selectInteractiveOverlayById", 0, _v107, "selectSourceByHash", 0, _v99, "setBrandingColorsAction", 0, _v34, "setCanvasColorAction", 0, _v70, "setLayersAction", 0, _v39, "setProjectNameAction", 0, _v44, "setStoryboardIdAction", 0, _v46, "setVideoSessionIdAction", 0, _v45, "someLayersHaveCompositionSelector", 0, _v88, "sourceMapSelector", 0, _v98, "sourcesSelector", 0, _v90, "splitElementsAction", 0, _v53, "storyboardIdSelector", 0, _v81, "storyboardSelector", 0, _v84, "timeTriggerTimingsSelector", 0, _v102, "timelineVideoSourceHashesSelector", 0, _v103, "topAudioLayerSelector", 0, _v101, "transitionLinkedElementsSelector", 0, _v118, "updateElementAction", 0, _v49, "updateElementsAction", 0, _v51, "updateInteractiveOverlayAction", 0, _v68, "updateInteractiveQuizAction", 0, _v79, "updateLayerWithBulkChangesAction", 0, _v77, "updateMediaElementsWithSameSource", 0, _v58, "updateOrientationAction", 0, _v42, "updatePollFontThunkAction", 0, (_v0, _v1) => (_v0, _v1) => {
    let _v2 = _v1(),
      _v3 = _v117(_v2, _v1);
    if (!_v3 || !(0, _v15.isPollElement)(_v3)) return;
    let _v4 = _v2.storyboard.orientation;
    _v0(_v49({
      ceId: _v1,
      element: {
        font: _v0,
        ...(!(0, _v18.isFreeformPoll)(_v3.styleId, _v4) && {
          rect: {
            height: (0, _v22.getPollHeight)({
              answers: _v3.answers,
              questionText: _v3.questionText,
              pollStyleId: _v3.styleId,
              pollRectWidth: _v3.rect.width,
              orientation: (0, _v21.toBaseOrientation)(_v4),
              font: _v0
            }),
            width: _v3.rect.width
          }
        })
      }
    }));
  }, "updateScorecardRetakesLeftTextThunkAction", 0, _v0 => (_v0, _v1) => {
    let _v2 = _v1(),
      _v3 = _v2.storyboard.orientation,
      _v4 = _v110(_v2);
    if (!_v4) return;
    let _v5 = _v114(_v2);
    if (_v0 === _v12.UNLIMITED_RETAKES_VALUE) _v5 && _v0(_v52({
      ceId: _v5.id,
      interactiveOverlayId: _v4.id
    }));else if (_v5) _v0(_v49({
      ceId: _v5.id,
      interactiveOverlayId: _v4.id,
      element: {
        textContent: _v13.SCORECARD_TEMPLATE_DEFAULT_TEXTS.retakesLeftText
      }
    }));else {
      let _v0 = [..._v4.interactiveLayers];
      _v0.push((0, _v24.createLayer)([(0, _v19.createRetakesLeftTextElement)(_v3)], _v5.LayerType.VISUAL)), _v0(_v68({
        overlay: {
          ..._v4,
          interactiveLayers: (0, _v23.alignZIndices)(_v0)
        }
      }));
    }
  }, "updateSourceAction", 0, _v72, "updateStoryboardAction", 0, _v33, "videoSessionIdSelector", 0, _v97]);
}