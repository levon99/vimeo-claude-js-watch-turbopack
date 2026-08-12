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
    _v20 = _v0.i(0);
  _v0.i(0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = async _v0 => {
      await Promise.all(_v0.map(async _v0 => {
        try {
          await (0, _v43.fetchMediaMetadata)({
            url: _v0.previewUrl,
            type: _v0.type === _v23.SourceType.CLIP ? "video" : "image",
            eventName: "loadeddata",
            isCrossOrigin: !0
          });
        } catch (_v0) {
          console.error("failed to load media metadata...", _v0);
        }
      }));
    },
    _v50 = _v0 => {
      let _v1 = (0, _v22.useDispatch)(),
        _v2 = (0, _v12.useAppSelector)(_v10.storyboardSelector),
        _v3 = (0, _v12.useAppSelector)(_v10.durationSelector),
        _v4 = (0, _v12.useAppSelector)(_v10.orientationSelector),
        _v5 = (0, _v12.useAppSelector)(_v11.templatesOrientationSelector),
        _v6 = (0, _v12.useAppSelector)(_v37.teamTemplatesOrientationSelector),
        _v7 = (0, _v2.useRef)([]),
        [_v8] = (0, _v35.useDuplicateStoryboardSourcesMutation)(),
        {
          getCurrentTimeFromRef: _v9
        } = (0, _v31.useDragonfly)(),
        {
          animateSeek: _v10
        } = (0, _v32.useTimelineContext)(),
        {
          addElement: _v11
        } = (0, _v24.useAddElement)(),
        {
          create: _v12
        } = (0, _v26.useSolidElement)(),
        {
          createSoundElement: _v13
        } = (0, _v27.useSoundElement)(),
        {
          loadStoryboard: _v14
        } = (0, _v25.useLoadStoryboard)(),
        _v15 = (0, _v2.useCallback)((_v0, _v1) => {
          let _v2 = _v1 ? _v6 : _v5;
          if (_v2 && _v2 !== _v4) {
            let _v0 = (0, _v42.isMediaElement)(_v0) && !(0, _v42.isLogo)(_v0);
            (0, _v42.isSolidElement)(_v0) || (_v0.rect = (0, _v44.changeRectByOrientation)(_v0.rect, _v2, _v4, !!_v0)), (0, _v42.isTextElement)(_v0) && (_v0.fontSize = (0, _v44.changeTextFontSizeByOrientation)(_v0.fontSize, _v2, _v4));
          }
        }, [_v4, _v6, _v5]),
        _v16 = (0, _v2.useCallback)(async ({
          ce: _v0,
          options: _v1,
          template: _v2
        }) => {
          let {
              time: _v3
            } = _v1 || {},
            _v4 = structuredClone(_v0);
          if (_v4.id = (0, _v46.randomString)(5), (0, _v42.isSoundElement)(_v4)) {
            let _v0 = _v2.sources.find(_v0 => _v0.hash.toString() === _v0.id || _v0.hash.toString() === _v4.sourceHash);
            if (!_v0) return void _v33.default.sendAction(_v30.TemplateMissingSource, {
              templateId: _v2.id,
              ceId: _v0.id
            });
            _v1((0, _v10.addSourceAction)(_v0));
          }
          if ((0, _v42.isVideoElement)(_v4) && (_v4.timing = (0, _v45.getElementTimingObject)(_v4.timing)), (0, _v42.isUploadedGraphicElement)(_v4)) return;
          let _v5 = _v3 ?? _v3 ?? 0,
            _v6 = {
              ..._v4,
              zindex: void 0,
              compositionTiming: {
                start: (0, _v48.toNearestFrame)(_v4.compositionTiming.start + _v5),
                end: (0, _v48.toNearestFrame)(_v4.compositionTiming.end + _v5)
              },
              ...((0, _v42.isImageElement)(_v4) && {
                layers: [{
                  type: _v38.ImageLayerTypeName.FULL_SOURCE,
                  effects: [{
                    name: _v38.ImageEffectName.breath,
                    options: {
                      transformsFromFootageRect: [{
                        timing: {
                          startTime: 0,
                          endTime: (0, _v48.toNearestFrame)(_v0.compositionTiming.end + _v5 - _v0.compositionTiming.start + _v5)
                        },
                        transform: {
                          type: _v38.TransitionTimingFunctionName.LINEAR,
                          transformX: _v29.DEFAULT_RECT.width * (1 - _v28.BREATH_EFFECT_SCALES.ZOOM_IN) / 2,
                          transformY: _v29.DEFAULT_RECT.height * (1 - _v28.BREATH_EFFECT_SCALES.ZOOM_IN) / 2,
                          scale: _v4.layers?.[0]?.effects?.find(_v0 => _v0.name === _v38.ImageEffectName.breath)?.options?.transformsFromFootageRect[0]?.transform?.scale === _v28.BREATH_EFFECT_SCALES.ZOOM_IN ? _v28.BREATH_EFFECT_SCALES.ZOOM_IN : _v28.BREATH_EFFECT_SCALES.NONE
                        }
                      }]
                    }
                  }]
                }]
              })
            };
          (0, _v42.isMediaElement)(_v6) && (0, _v43.normalizeMediaRect)(_v6, _v4), _v15(_v6, !1), _v1?.layerId && _v1?.layerOffset !== void 0 ? _v7.current.unshift({
            anchorOffset: _v7.current.length,
            elements: [_v6]
          }) : _v11(_v6, {
            resetSelection: !0
          });
        }, [_v3, _v4, _v15, _v1, _v11]),
        _v17 = (0, _v2.useCallback)(async (_v0, _v1, _v2) => {
          let _v3 = structuredClone(_v0),
            _v4 = _v3.items.find(_v0 => _v0.id === _v1);
          if (!_v4) return;
          let _v5 = _v9();
          try {
            let _v0 = (0, _v45.getVisualSourceHashesFromScenes)([_v4]),
              _v1 = {},
              _v2 = [];
            if (_v0.length > 0) {
              let _v0 = await _v8({
                storyboardId: _v3.id,
                targetStoryboardId: _v2.id,
                sourceHashes: _v0,
                checkOriginUser: !1
              }).unwrap();
              _v1 = _v0.originalToDuplicateHashMap, _v2 = _v0.sources;
            }
            await (0, _v21.batch)(async () => {
              _v2.forEach(_v0 => {
                _v1((0, _v10.addSourceAction)(_v0));
              }), await _v49(_v2);
              let _v0 = _v4.bgColor || `#${_v3.branding.colors.primary}`,
                _v1 = {
                  start: 0,
                  end: (0, _v48.toNearestFrame)(_v4.sceneDuration.endTime - _v4.sceneDuration.startTime)
                };
              _v16({
                ce: _v12(_v0, _v1),
                options: _v2 || {
                  time: _v5
                },
                template: _v0
              }), _v4.composition.slice().sort((_v0, _v1) => (_v0.zindex || 0) - (_v1.zindex || 0)).forEach(_v0 => {
                let _v1 = {
                  ..._v0,
                  ...((0, _v42.isElementWithTiming)(_v0) && {
                    compositionTiming: {
                      start: _v0.compositionTiming.start,
                      end: _v4.sceneDuration.endTime - _v4.sceneDuration.startTime
                    }
                  }),
                  ...(((0, _v42.isMediaElement)(_v0) || (0, _v42.isGraphicElement)(_v0)) && _v0.sourceHash && {
                    sourceHash: _v1[_v0.sourceHash] || _v0.sourceHash
                  })
                };
                _v16({
                  ce: _v1,
                  options: _v2 || {
                    time: _v5
                  },
                  template: _v3
                });
              }), _v0 === _v39.TemplatesContext.TEMPLATES && (0, _v40.sendTrackSelectTemplateScene)({
                format: _v4,
                selectionName: _v3.title,
                selectionId: _v3.id,
                numberOfElements: _v3.items.length
              }), _v1((0, _v10.addElementsToLayersWithOffsetMapAction)({
                elementsData: _v7.current,
                direction: _v2?.layerOffset || 0,
                layerId: _v2?.layerId || ""
              })), _v7.current = [];
            });
          } catch (_v0) {
            throw console.error("Error adding scene:", _v0), _v0;
          }
        }, [_v16, _v0, _v12, _v9, _v1, _v4, _v8, _v2.id]),
        _v18 = (0, _v2.useCallback)(async _v0 => {
          _v1((0, _v10.deleteAllElementsAction)());
          let _v1 = (0, _v45.getVisualSourceHashesFromScenes)(_v0.items),
            _v2 = {},
            _v3 = [];
          if (_v1.length > 0) {
            let _v0 = await _v8({
              storyboardId: _v0.id,
              targetStoryboardId: _v2.id,
              sourceHashes: _v1,
              checkOriginUser: !1
            }).unwrap();
            _v2 = _v0.originalToDuplicateHashMap, _v3 = _v0.sources;
          }
          let {
              colors: _v4,
              font: _v5
            } = _v0.branding || _v2.branding,
            _v6 = 0;
          _v14({
            ..._v2,
            layers: [],
            sources: [..._v0.sources, ..._v3],
            branding: {
              ..._v2.branding,
              colors: _v4,
              font: _v5
            },
            canvas: {
              color: `#${_v4.primary}`
            }
          }, !0), _v1((0, _v36.setLastSelectedFont)(_v5));
          let _v7 = 0,
            _v8 = (0, _v41.validateHexColorPalette)(_v4);
          if (_v1((0, _v10.setBrandingColorsAction)({
            colorPalette: _v8,
            isIgnoreUndo: !0
          })), _v1((0, _v10.setCanvasColorAction)({
            color: _v8.primary,
            isIgnoreUndo: !0
          })), _v0.items.forEach(_v0 => {
            if (_v0.bgColor && _v0.bgColor !== `#${_v4.primary}`) {
              let _v0 = {
                start: (0, _v48.toNearestFrame)(_v0.sceneDuration.startTime - _v3),
                end: (0, _v48.toNearestFrame)(_v0.sceneDuration.endTime - _v3)
              };
              _v16({
                ce: _v12(_v0.bgColor, _v0),
                template: _v0
              });
            }
            let _v1 = (0, _v48.toNearestFrame)(_v0.sceneDuration.endTime);
            _v0.composition.slice().sort((_v0, _v1) => (_v0.zindex || 0) - (_v1.zindex || 0)).forEach(_v0 => {
              let _v1 = void 0 === _v0.compositionTiming.start ? _v0.compositionTiming.startTime : _v0.compositionTiming.start,
                _v2 = void 0 === _v0.compositionTiming.end ? _v0.compositionTiming.endTime : _v0.compositionTiming.end;
              _v16({
                ce: {
                  ...JSON.parse(JSON.stringify(_v0)),
                  compositionTiming: {
                    start: (0, _v48.toNearestFrame)(_v1 + _v7 - _v3),
                    end: (0, _v48.toNearestFrame)(((0, _v42.isMediaElement)(_v0) ? _v1 : Math.min(_v2 + _v7, _v1)) - _v3)
                  },
                  ...((0, _v42.isMediaElement)(_v0) && {
                    sourceHash: _v2[_v0.sourceHash] || _v0.sourceHash
                  })
                },
                template: _v0
              });
            }), _v7 = _v1, _v6 = _v1;
          }), _v0.sound) {
            let {
                album: _v0,
                artist: _v1,
                url: _v2,
                id: _v3,
                name: _v4,
                fullUrl: _v5
              } = _v0.sound,
              _v6 = _v0.sources.find(_v0 => _v0.hash === _v3.toString()),
              _v7 = {
                album: _v0,
                artist: _v1,
                url: _v2,
                id: String(_v3),
                duration: _v6,
                name: _v4,
                previewUrl: _v5
              };
            (_v6 || _v2) && _v16({
              ce: _v13({
                soundItem: _v7,
                time: 0,
                sourceHash: _v3.toString()
              }),
              options: {
                time: 0
              },
              template: _v0
            });
          }
          await _v49(_v3), _v10(0);
        }, [_v1, _v2, _v14, _v10, _v8, _v3, _v16, _v12, _v13]),
        _v19 = (0, _v2.useCallback)(async (_v0, _v1, _v2 = !1) => {
          try {
            _v1((0, _v10.deleteAllElementsAction)());
            let {
                layers: _v0,
                branding: _v1,
                canvasColor: _v2
              } = _v0,
              _v3 = (0, _v20.default)(_v0);
            _v1 || _v3.forEach(_v0 => {
              _v0.composition.forEach(_v0 => _v15(_v0, !0));
            });
            let _v4 = (0, _v45.getVisualSourceHashesFromLayers)(_v0.layers),
              _v5 = new Map(),
              _v6 = [];
            if (_v4.length > 0 && !_v2) {
              let _v0 = await _v8({
                storyboardId: _v0.id,
                sourceHashes: Array.from(_v4),
                targetStoryboardId: _v2.id,
                isSystem: !1
              }).unwrap();
              _v6 = _v0.sources;
              let _v1 = _v0.originalToDuplicateHashMap;
              _v5 = new Map(Object.entries(_v1)), _v3 = _v3.map(_v0 => ({
                ..._v0,
                composition: _v0.composition.map(_v0 => {
                  if ((0, _v42.isMediaElement)(_v0) || (0, _v42.isGraphicElement)(_v0)) {
                    let _v0 = _v5.get(_v0.sourceHash);
                    return _v0 ? {
                      ..._v0,
                      sourceHash: _v0
                    } : _v0;
                  }
                  return _v0;
                })
              }));
            }
            await _v49(_v6);
            let _v7 = {
              ..._v2,
              layers: _v3,
              canvas: {
                color: _v2 ?? `#${_v1.colors.primary}`
              },
              ...(_v34.default.isEditingTeamTemplate && {
                videoSessionId: _v0.vsid,
                id: _v0.id,
                projectName: _v0.title
              }),
              sources: [..._v0.sources, ..._v6],
              branding: _v1,
              ...(_v1 && {
                orientation: _v1
              })
            };
            _v14(_v7, !1), _v10(0);
          } catch (_v0) {
            throw console.error("Failed to add template layers:", _v0), _v0;
          }
        }, [_v1, _v2, _v14, _v10, _v15, _v8]);
      return {
        addScene: _v17,
        addTemplate: (0, _v2.useCallback)(async (_v0, _v1, _v2 = !1) => {
          (0, _v47.isLayersTemplate)(_v0) ? await _v19(_v0, _v1, _v2) : await _v18(_v0);
        }, [_v19, _v18]),
        addTemplateElement: _v16
      };
    };
  _v0.s(["useTemplates", 0, _v50], 0);
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = ({
      hash: _v0,
      templateName: _v1,
      templateVideoUrl: _v2,
      templateId: _v3,
      orientation: _v4,
      onBack: _v5
    }) => {
      let _v6 = (0, _v12.useAppDispatch)(),
        _v7 = (0, _v12.useAppSelector)(_v10.durationSelector),
        _v8 = (0, _v12.useAppSelector)(_v10.orientationSelector),
        _v9 = (0, _v12.useAppSelector)(_v11.templatesOrientationSelector) || _v8,
        {
          data: _v10,
          isLoading: _v11
        } = (0, _v9.useFetchTemplateQuery)({
          hash: _v0
        }),
        {
          addScene: _v12,
          addTemplate: _v13
        } = _v50(_v39.TemplatesContext.TEMPLATES),
        {
          alertUseAllScenes: _v14
        } = (0, _v17.useAlerts)(),
        {
          changeInvalidFonts: _v15
        } = (0, _v19.useFontDeprecation)(),
        _v16 = (0, _v2.useMemo)(() => _v10 && (0, _v47.isScenesTemplate)(_v10) ? _v10.items : [], [_v10]),
        _v17 = (0, _v2.useMemo)(() => _v10 && (0, _v47.isScenesTemplate)(_v10) ? _v10.title : void 0, [_v10]),
        _v18 = (0, _v2.useCallback)(async () => {
          if (!_v10) throw Error(_v65.NO_TEMPLATE_AVAILABLE);
          let _v0 = _v15(_v10);
          _v7 > 0 ? _v14(async () => {
            _v6((0, _v11.setIsTemplateBeingAddedAction)(!0)), await _v13(_v0), _v6((0, _v11.setIsTemplateBeingAddedAction)(!1));
          }) : (_v6((0, _v11.setIsTemplateBeingAddedAction)(!0)), await _v13(_v0), _v6((0, _v11.setIsTemplateBeingAddedAction)(!1)));
        }, [_v13, _v14, _v15, _v10, _v6, _v7]),
        _v19 = (0, _v2.useCallback)(async (_v0, _v1) => {
          if (!_v10) throw Error(_v65.NO_TEMPLATE_AVAILABLE);
          if (!(0, _v47.isScenesTemplate)(_v10)) throw Error(_v65.WRONG_TEMPLATE_TYPE);
          let _v2 = _v15(_v10);
          _v6((0, _v11.setIsTemplateBeingAddedAction)(!0)), await _v12(_v2, _v0, _v1), _v6((0, _v11.setIsTemplateBeingAddedAction)(!1));
        }, [_v12, _v15, _v10, _v6]),
        _v20 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
          let _v3 = _v16[_v0];
          return _v3 ? (0, _v1.jsx)(_v57.default, {
            id: _v3.id,
            gridStyleType: _v4,
            videoUrl: _v2,
            imageUrl: _v3.thumbnail,
            videoStartTime: _v3.sceneDuration.startTime,
            videoEndTime: _v3.sceneDuration.endTime,
            width: _v1,
            isActive: !1,
            onClick: _v19,
            draggableData: {
              id: _v3.id,
              data: _v3,
              type: _v52.DnDItemType.GRID_ELEMENT_TEMPLATE,
              onElementDropped: _v0 => {
                _v19(_v3.id, _v0);
              }
            },
            isShowPlusButton: !0,
            onExpand: _v2,
            expandedItemData: {
              id: _v3.id,
              title: "",
              date: "",
              type: _v51.ExpandType.MEDIA,
              videoUrl: _v2 ?? "",
              ...(_v3.thumbnail && {
                imageUrl: _v3.thumbnail
              }),
              startTime: _v3.sceneDuration.startTime,
              endTime: _v3.sceneDuration.endTime,
              width: _v1,
              orientation: _v4
            },
            testid: "template-scene"
          }, _v3.id) : (0, _v1.jsx)(_v1.Fragment, {});
        }, [_v16, _v4, _v2, _v19]);
      return (0, _v1.jsxs)(_v14.SingleTemplateInspectorContainer, {
        children: [!_v11 && (0, _v1.jsxs)(_v14.TopBarContainer, {
          children: [(0, _v1.jsxs)(_v14.TopBarNavigation, {
            children: [(0, _v1.jsx)(_v63.IconButton, {
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v64.ChevronLeftSmall, {}),
              onClick: _v5,
              "data-testid": "template-back-button",
              "aria-label": "template-back-button",
              size: "sm"
            }), (0, _v1.jsx)(_v62.Header, {
              size: "xs",
              "data-testid": "template-title",
              children: _v1 || _v17
            })]
          }), _v8 !== _v9 && (0, _v1.jsx)(_v14.AlertContainer, {
            paddingRight: "0",
            paddingLeft: "0",
            paddingTop: "0",
            paddingBottom: "10px",
            children: (0, _v1.jsx)(_v3.Alert, {
              status: "info",
              marginBottom: 0,
              paddingRight: 0,
              "data-testid": "ratio-warning",
              children: (0, _v1.jsxs)(_v4.AlertDescription, {
                marginTop: 0,
                children: [(0, _v1.jsx)("span", {
                  children: (0, _v6.translate)({
                    singular: "These templates have a {RATIO} ratio.\n",
                    replacements: {
                      RATIO: _v13.OrientationRatioString[_v9]
                    },
                    dictionary: {
                      es: {
                        singular: "Estas plantillas tienen una proporción de {RATIO}.\n"
                      },
                      "de-DE": {
                        singular: "Diese Vorlagen haben ein {RATIO}-Verhältnis.\n"
                      },
                      "fr-FR": {
                        singular: "Ces modèles ont un ratio de {RATIO}.\n"
                      },
                      "ja-JP": {
                        singular: "これらのテンプレートの比率は{RATIO}です。\n"
                      },
                      "ko-KR": {
                        singular: "이 템플릿에는 {RATIO} 비율이 있습니다.\n"
                      },
                      "pt-BR": {
                        singular: "Esses modelos são de {RATIO}.\n"
                      },
                      "zh-CN": {
                        singular: "这些模板的比例为 {RATIO}。\n"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v5.Link, {
                  variant: "minimal",
                  cursor: "pointer",
                  onClick: () => {
                    _v6((0, _v11.setTemplatesOrientationAction)(_v8)), _v5();
                  },
                  children: (0, _v6.translate)({
                    singular: "View templates that fit this video's ratio",
                    dictionary: {
                      es: {
                        singular: "Ver plantillas que se ajusten a la proporción de este video"
                      },
                      "de-DE": {
                        singular: "Vorlagen ansehen, die dem Verhältnis dieses Videos entsprechen"
                      },
                      "fr-FR": {
                        singular: "Afficher les modèles qui correspondent au format de cette vidéo"
                      },
                      "ja-JP": {
                        singular: "この動画の比率に合ったテンプレートを表示"
                      },
                      "ko-KR": {
                        singular: "이 동영상 비율에 맞는 템플릿 보기"
                      },
                      "pt-BR": {
                        singular: "Veja os modelos que se adaptam à proporção deste vídeo"
                      },
                      "zh-CN": {
                        singular: "查看适合此视频比例的模板"
                      }
                    }
                  })
                })]
              })
            })
          }), (0, _v1.jsx)(_v61.Button, {
            onClick: () => {
              (0, _v40.sendTrackAddAllTemplatesScenes)({
                format: _v4,
                selectionName: _v1,
                selectionId: String(_v3),
                numberOfElements: _v16.length
              }), _v18();
            },
            width: "100%",
            "data-testid": "template-use-all-scenes-button",
            variant: "primary",
            size: "sm",
            children: (0, _v6.translate)({
              singular: "Use all {NUMBER_OF_SCENES} scenes",
              replacements: {
                NUMBER_OF_SCENES: _v16.length
              },
              dictionary: {
                es: {
                  singular: "Usar las {NUMBER_OF_SCENES} escenas"
                },
                "de-DE": {
                  singular: "Alle {NUMBER_OF_SCENES} Szenen verwenden"
                },
                "fr-FR": {
                  singular: "Utiliser toutes les scènes ({NUMBER_OF_SCENES})"
                },
                "ja-JP": {
                  singular: "{NUMBER_OF_SCENES}シーンのすべてを使用"
                },
                "ko-KR": {
                  singular: "모든 {NUMBER_OF_SCENES} 장면 사용"
                },
                "pt-BR": {
                  singular: "Usar todas as {NUMBER_OF_SCENES} cenas"
                },
                "zh-CN": {
                  singular: "使用所有 {NUMBER_OF_SCENES} 个场景"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v14.ItemsContainer, {
          padRight: !1,
          children: (0, _v1.jsx)(_v58.default, {
            itemRenderer: _v20,
            styleType: _v55.GridStyleType.LANDSCAPE,
            items: _v16,
            isLoading: _v11,
            onCTA: _v19,
            CTAText: (0, _v6.translate)({
              singular: "Add to timeline",
              dictionary: {
                es: {
                  singular: "Agregar a la línea de tiempo"
                },
                "de-DE": {
                  singular: "Zur Chronik hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter à la chronologie"
                },
                "ja-JP": {
                  singular: "タイムラインに追加"
                },
                "ko-KR": {
                  singular: "타임라인에 추가"
                },
                "pt-BR": {
                  singular: "Adicionar à linha do tempo"
                },
                "zh-CN": {
                  singular: "添加到时间线"
                }
              }
            })
          })
        })]
      });
    },
    _v67 = ({
      orientation: _v0,
      freeText: _v1,
      category: _v2,
      selectedTemplateHash: _v3,
      setSelectedTemplateHash: _v4
    }) => {
      let _v5 = (0, _v12.useAppDispatch)(),
        _v6 = (0, _v12.useAppSelector)(_v10.durationSelector),
        _v7 = (0, _v12.useAppSelector)(_v10.storyboardIdSelector),
        {
          trackEditorTemplateSelected: _v8
        } = (0, _v16.useEditorTracking)(),
        [_v9] = (0, _v9.useLazyFetchTemplateQuery)(),
        {
          addTemplate: _v10
        } = _v50(),
        {
          alertUseAllScenes: _v11
        } = (0, _v17.useAlerts)(),
        {
          changeInvalidFonts: _v12
        } = (0, _v19.useFontDeprecation)(),
        [_v13, _v14] = (0, _v9.useLazyFetchSystemTemplatesQuery)(),
        {
          data: _v15,
          isLoading: _v16,
          isFetching: _v17
        } = _v14,
        [_v18, _v19] = (0, _v2.useState)(void 0),
        [_v20, _v21] = (0, _v2.useState)(void 0),
        [_v22, _v23] = (0, _v2.useState)(void 0),
        [_v24, _v25] = (0, _v2.useState)(!0),
        _v26 = (0, _v2.useRef)(null),
        _v27 = (0, _v2.useRef)(1),
        _v28 = (0, _v2.useMemo)(() => _v15 && !_v24 ? _v15?.data.filter(_v0 => _v13.OrientationMap[_v0.ornt] === _v0) : [], [_v15, _v24, _v0]),
        _v29 = !_v16 && !_v17 && _v15 && (!_v15.data || 0 === _v28.length),
        _v30 = (0, _v2.useCallback)(_v0 => {
          _v19(_v0.resultUrl || _v0.videoUrl || _v0.vimeoVideoUrl), _v4(_v0.hash), _v21(_v0.templateName), _v23(_v0.vitid), (0, _v40.sendTrackSelectTemplate)({
            format: _v13.OrientationMap[_v0.ornt],
            selectionName: _v0.templateName,
            selectionId: String(_v0.vitid),
            feature: _v54.FEATURE.TEMPLATES
          }), _v8({
            editorSessionId: _v7,
            editorTemplateCategory: _v2,
            templateOrientation: _v0.ornt
          });
        }, [_v4, _v8, _v7, _v2]),
        _v31 = (0, _v2.useCallback)(() => {
          _v4(void 0), _v21(void 0), _v23(void 0);
        }, [_v4]),
        _v32 = (0, _v2.useCallback)(_v0 => {
          _v9({
            hash: _v0
          }, !0);
        }, [_v9]);
      (0, _v18.useDebouncedEffect)(() => {
        _v25(!0), _v27.current = 1, _v13({
          page: 1,
          ...(!_v1 && {
            keywords: _v2
          }),
          ...(_v1 && {
            freetext: _v1
          })
        });
      }, [_v1]), (0, _v2.useEffect)(() => {
        _v25(!0), _v27.current = 1, _v13({
          page: 1,
          keywords: _v2
        });
      }, [_v5, _v2, _v13]), (0, _v2.useEffect)(() => {
        _v15 && !_v17 && _v25(!1);
      }, [_v15, _v17]), (0, _v2.useEffect)(_v31, [_v31, _v0]);
      let _v33 = (0, _v2.useCallback)(async _v0 => {
          _v5((0, _v11.setIsTemplateBeingAddedAction)(!0));
          let _v1 = await _v9({
            hash: _v0
          }, !0).unwrap();
          await _v10(_v12(_v1)), _v5((0, _v11.setIsTemplateBeingAddedAction)(!1));
          let [_v2] = _v28.filter(_v0 => _v0.hash === _v1.hash);
          (0, _v47.isScenesTemplate)(_v1) && _v2 && (0, _v40.sendTrackAddAllTemplatesScenes)({
            format: _v13.OrientationMap[_v2.ornt],
            selectionName: _v2.templateName,
            selectionId: String(_v2.vitid),
            numberOfElements: _v1.items.length
          });
        }, [_v10, _v12, _v5, _v9, _v28]),
        _v34 = (0, _v2.useCallback)(async ({
          hash: _v0
        }) => {
          let _v1 = async () => {
            _v5((0, _v11.setIsTemplateBeingAddedAction)(!0));
            let _v0 = await _v9({
              hash: _v0
            }, !0).unwrap();
            await _v10(_v12(_v0)), _v5((0, _v11.setIsTemplateBeingAddedAction)(!1));
          };
          if (_v6 > 0) return _v11(_v1);
          await _v33(_v0);
        }, [_v6, _v33, _v5, _v9, _v10, _v12, _v11]),
        _v35 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
          let _v3 = _v28[_v0];
          return _v3 ? (0, _v1.jsx)(_v57.default, {
            id: _v3.hash,
            gridStyleType: function (_v0) {
              switch (_v0) {
                case _v56.Orientation.LANDSCAPE:
                  return _v55.GridStyleType.LANDSCAPE;
                case _v56.Orientation.PORTRAIT:
                  return _v55.GridStyleType.PORTRAIT;
                case _v56.Orientation.SQUARE:
                  return _v55.GridStyleType.SQUARE;
                case _v56.Orientation.OR_4_5:
                  return _v55.GridStyleType.OR_4_5;
                case _v56.Orientation.OR_16_10:
                  return _v55.GridStyleType.OR_16_10;
                case _v56.Orientation.OR_3_4:
                  return _v55.GridStyleType.OR_3_4;
                case _v56.Orientation.OR_2_3:
                  return _v55.GridStyleType.OR_2_3;
                case _v56.Orientation.OR_4_3:
                  return _v55.GridStyleType.OR_4_3;
                default:
                  return _v55.GridStyleType.SQUARE;
              }
            }(_v0),
            videoUrl: _v3.resultUrl,
            imageUrl: _v3.thumbnail,
            title: _v3.templateName,
            duration: _v3.duration,
            width: _v1,
            isActive: !1,
            onMouseDown: () => _v32(_v3.hash),
            onClick: () => _v30(_v3),
            draggableData: {
              id: _v3.hash,
              data: _v3,
              type: _v52.DnDItemType.GRID_ELEMENT_TEMPLATE,
              onElementDropped: () => {
                _v34({
                  hash: _v3.hash
                });
              }
            },
            testid: "templates-category",
            onExpand: _v0 => {
              _v2 && (_v32(_v3.hash), _v2(_v0), (0, _v40.sendTrackExpandTemplate)({
                format: _v0,
                selectionName: _v3.templateName,
                selectionId: String(_v3.vitid),
                feature: _v54.FEATURE.TEMPLATES
              }));
            },
            expandedItemData: {
              id: _v3.hash,
              title: _v3.templateName,
              type: _v51.ExpandType.MEDIA,
              videoUrl: _v3.resultUrl || _v3.videoUrl || _v3.vimeoVideoUrl,
              imageUrl: _v3.thumbnail,
              width: _v1,
              orientation: _v0
            }
          }, _v3.hash) : (0, _v1.jsx)(_v1.Fragment, {});
        }, [_v34, _v30, _v28, _v0, _v32]);
      return _v29 ? (0, _v1.jsx)(_v59.InspectorPaddedRow, {
        padLeft: !1,
        padRight: !1,
        children: (0, _v1.jsx)(_v60.default, {
          type: _v53.EmptyInspectorView.SEARCH,
          title: (0, _v6.translate)({
            singular: "No results",
            dictionary: {
              es: {
                singular: "Sin resultados"
              },
              "de-DE": {
                singular: "Keine Ergebnisse"
              },
              "fr-FR": {
                singular: "Pas de résultats"
              },
              "ja-JP": {
                singular: "該当するものがありません"
              },
              "ko-KR": {
                singular: "결과 없음"
              },
              "pt-BR": {
                singular: "Nenhum resultado"
              },
              "zh-CN": {
                singular: "无结果"
              }
            }
          }),
          text: (0, _v6.translate)({
            singular: "Try using different keywords",
            dictionary: {
              es: {
                singular: "Intenta usar otras palabras clave."
              },
              "de-DE": {
                singular: "Versuche es mit anderen Stichwörtern"
              },
              "fr-FR": {
                singular: "Essayez en utilisant d'autres mots-clés"
              },
              "ja-JP": {
                singular: "別のキーワードでお試しください"
              },
              "ko-KR": {
                singular: "다른 키워드로 시도해보세요."
              },
              "pt-BR": {
                singular: "Tente usar palavras-chave diferentes"
              },
              "zh-CN": {
                singular: "尝试使用不同的关键字"
              }
            }
          })
        })
      }) : _v3 ? (0, _v1.jsx)(_v66, {
        hash: _v3,
        templateName: _v20,
        templateId: _v22,
        templateVideoUrl: _v18,
        onBack: _v31,
        orientation: _v0
      }) : (0, _v1.jsx)(_v14.TemplatesInspectorContainer, {
        padRight: !1,
        marginTop: !0,
        paddingTop: 16,
        children: (0, _v1.jsx)(_v58.default, {
          ref: _v26,
          itemRenderer: _v35,
          styleType: _v0,
          items: _v28,
          loadMoreItems: () => {
            _v15 && _v15.total > _v15.page * _v15.perPage && (_v27.current++, _v13({
              page: _v27.current,
              ...(!_v1 && {
                keywords: _v2
              }),
              ...(_v1 && {
                freetext: _v1
              })
            }));
          },
          isLoading: _v17,
          onCTA: _v0 => _v34({
            hash: _v0
          }),
          CTAText: (0, _v6.translate)({
            singular: "Add to timeline",
            dictionary: {
              es: {
                singular: "Agregar a la línea de tiempo"
              },
              "de-DE": {
                singular: "Zur Chronik hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter à la chronologie"
              },
              "ja-JP": {
                singular: "タイムラインに追加"
              },
              "ko-KR": {
                singular: "타임라인에 추가"
              },
              "pt-BR": {
                singular: "Adicionar à linha do tempo"
              },
              "zh-CN": {
                singular: "添加到时间线"
              }
            }
          })
        })
      });
    };
  _v0.s(["default", 0, ({
    top: _v0 = !1,
    selectedTemplateHash: _v1,
    setSelectedTemplateHash: _v2
  }) => {
    let _v3 = (0, _v12.useAppDispatch)(),
      _v4 = (0, _v12.useAppSelector)(_v11.templatesOrientationSelector),
      _v5 = (0, _v12.useAppSelector)(_v10.orientationSelector),
      _v6 = (0, _v12.useAppSelector)(_v11.templatesCategorySelector),
      [_v7, _v8] = (0, _v2.useState)({
        orientation: _v4 ?? _v5,
        keywords: "",
        category: _v6
      }),
      _v9 = (0, _v2.useContext)(_v8.PartnershipAppContext);
    (0, _v7.useViewer)();
    let {
      data: _v10
    } = (0, _v9.useFetchCategoriesQuery)({
      integrationApp: _v9?.app
    });
    return (0, _v2.useEffect)(() => {
      _v10?.tags[0] && _v9?.app && _v3((0, _v11.setTemplatesCategoryAction)(_v10?.tags[0].keyword));
    }, [_v10, _v3, _v9?.app]), (0, _v2.useEffect)(() => {
      _v4 && _v8(_v0 => ({
        ..._v0,
        orientation: _v4
      }));
    }, [_v4]), (0, _v2.useEffect)(() => {
      _v8(_v0 => ({
        ..._v0,
        category: _v6
      }));
    }, [_v6]), (0, _v2.useEffect)(() => {
      _v3((0, _v11.setTemplatesCategoryAction)(_v7.category));
    }, [_v3, _v7.category]), (0, _v2.useEffect)(() => {
      _v3((0, _v11.setTemplatesOrientationAction)(_v7.orientation));
    }, [_v3, _v7.orientation]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [!_v1 && _v10 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v14.TemplatesFiltersContainer, {
          top: _v0,
          children: (0, _v1.jsx)(_v15.default, {
            onChange: (_v0, _v1) => {
              _v8(_v0 => ({
                ..._v0,
                ...{
                  [_v0]: _v1
                }
              }));
            },
            onSearch: _v0 => {
              _v8(_v0 => ({
                ..._v0,
                keywords: _v0
              }));
            },
            keywords: _v7.keywords,
            orientation: _v7.orientation,
            category: _v7.category,
            categories: _v10.tags
          })
        }), _v4 !== _v5 && (0, _v1.jsx)(_v14.AlertContainer, {
          children: (0, _v1.jsx)(_v3.Alert, {
            status: "info",
            marginBottom: 0,
            paddingRight: 0,
            "data-testid": "ratio-warning",
            children: (0, _v1.jsxs)(_v4.AlertDescription, {
              marginTop: 0,
              children: [(0, _v1.jsx)("span", {
                children: (0, _v6.translate)({
                  singular: "These templates have a {RATIO} ratio.\n",
                  replacements: {
                    RATIO: _v13.OrientationRatioString[_v7.orientation]
                  },
                  dictionary: {
                    es: {
                      singular: "Estas plantillas tienen una proporción de {RATIO}.\n"
                    },
                    "de-DE": {
                      singular: "Diese Vorlagen haben ein {RATIO}-Verhältnis.\n"
                    },
                    "fr-FR": {
                      singular: "Ces modèles ont un ratio de {RATIO}.\n"
                    },
                    "ja-JP": {
                      singular: "これらのテンプレートの比率は{RATIO}です。\n"
                    },
                    "ko-KR": {
                      singular: "이 템플릿에는 {RATIO} 비율이 있습니다.\n"
                    },
                    "pt-BR": {
                      singular: "Esses modelos são de {RATIO}.\n"
                    },
                    "zh-CN": {
                      singular: "这些模板的比例为 {RATIO}。\n"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v5.Link, {
                variant: "minimal",
                cursor: "pointer",
                onClick: () => {
                  _v3((0, _v11.setTemplatesOrientationAction)(_v5));
                },
                children: (0, _v6.translate)({
                  singular: "View templates that fit this video's ratio",
                  dictionary: {
                    es: {
                      singular: "Ver plantillas que se ajusten a la proporción de este video"
                    },
                    "de-DE": {
                      singular: "Vorlagen ansehen, die dem Verhältnis dieses Videos entsprechen"
                    },
                    "fr-FR": {
                      singular: "Afficher les modèles qui correspondent au format de cette vidéo"
                    },
                    "ja-JP": {
                      singular: "この動画の比率に合ったテンプレートを表示"
                    },
                    "ko-KR": {
                      singular: "이 동영상 비율에 맞는 템플릿 보기"
                    },
                    "pt-BR": {
                      singular: "Veja os modelos que se adaptam à proporção deste vídeo"
                    },
                    "zh-CN": {
                      singular: "查看适合此视频比例的模板"
                    }
                  }
                })
              })]
            })
          })
        })]
      }), (0, _v1.jsx)(_v67, {
        orientation: _v7.orientation,
        category: _v7.category,
        freeText: _v7.keywords,
        selectedTemplateHash: _v1,
        setSelectedTemplateHash: _v2
      })]
    });
  }], 0);
}