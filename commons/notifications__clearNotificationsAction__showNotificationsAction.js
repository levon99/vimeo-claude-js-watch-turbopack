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
  let _v13 = (0, _v1.createSlice)({
      name: "notifications",
      initialState: {
        notifications: []
      },
      reducers: {
        showNotificationsAction: (_v0, _v1) => {
          let {
            title: _v2,
            description: _v3,
            status: _v4
          } = _v1.payload;
          _v0.notifications.push({
            title: _v2,
            description: _v3,
            status: _v4
          });
        },
        clearNotificationsAction: _v0 => {
          _v0.notifications = [];
        }
      }
    }),
    {
      showNotificationsAction: _v14,
      clearNotificationsAction: _v15
    } = _v13.actions,
    _v16 = _v13.reducer;
  _v0.s(["clearNotificationsAction", 0, _v15, "default", 0, _v16, "showNotificationsAction", 0, _v14], 0);
  var _v17 = _v0.i(0);
  let _v18 = (0, _v1.createListenerMiddleware)(),
    _v19 = (_v0, _v1, _v2) => {
      let _v3 = _v2.compositionTiming.end - _v2.compositionTiming.start,
        _v4 = _v1.compositionTiming.end - _v1.compositionTiming.start;
      if (_v1.compositionTiming.end !== _v2.compositionTiming.start || _v3 < _v7.MIN_TRANSITION_ELEMENT_DURATION || _v4 < _v7.MIN_TRANSITION_ELEMENT_DURATION) return {
        isDelete: !0
      };
      if (_v0.inElement.controls.transInDuration > _v3 || _v0.outElement.controls.transOutDuration > _v4) {
        let _v0 = (0, _v12.getTransitionDurationFromControls)(_v0),
          _v1 = (0, _v12.getNormalisedDuration)(_v0, _v1, _v2),
          {
            transInDuration: _v2,
            transOutDuration: _v3,
            overlapDuration: _v4
          } = (0, _v12.getNewControlsFromDuration)({
            transInDuration: _v0.inElement.controls.transInDuration,
            transOutDuration: _v0.outElement.controls.transOutDuration,
            overlapDuration: _v0.outElement.controls.overlapDuration
          }, _v1);
        return {
          durationControls: {
            transInDuration: _v2,
            transOutDuration: _v3,
            overlapDuration: _v4
          }
        };
      }
      return {};
    },
    _v20 = (_v0, _v1, _v2, _v3 = !1, _v4 = !0) => {
      let _v5 = (0, _v8.getTranslations)();
      if (Object.keys(_v1).length > 0 && (_v0((0, _v17.deleteElementsAction)({
        deletionMap: Object.values(_v1),
        isIgnoreUndo: !0
      })), _v4)) {
        let _v0 = _v3 ? _v5.transitionReplacedByAnimation : Object.keys(_v1).length > 1 || Object.values(_v1).some(_v0 => _v0.elementIds.length > 1) ? _v5.transitionsRemoved : _v5.transitionRemoved;
        (0, _v9.trackNotificationView)(_v0), _v0(_v14({
          title: _v0,
          status: "info"
        }));
      }
      _v2.length > 0 && _v0((0, _v17.updateElementsAction)({
        elements: _v2,
        isIgnoreUndo: !0,
        isTransitionElement: !0
      }));
    };
  _v18.startListening({
    matcher: (0, _v1.isAnyOf)(_v17.updateElementsAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getState: _v3
        } = _v1,
        {
          elements: _v4,
          isTransitionElement: _v5
        } = _v0.payload;
      if (_v5) return;
      let _v6 = _v3().storyboard.layers;
      if (_v4.some(_v0 => (0, _v2.default)(_v0.element, "compositionTiming"))) {
        let _v0 = _v4.reduce((_v0, _v1) => (_v1.layerId && !_v0.includes(_v1.layerId) && _v0.push(_v1.layerId), _v0), []),
          _v1 = {},
          _v2 = [];
        _v6.forEach(_v0 => {
          (0 === _v0.length || _v0.includes(_v0.id)) && _v0.composition.filter(_v0 => _v0.type === _v5.CompositionElementType.TRANSITION).forEach(_v0 => {
            let _v1 = _v0.composition.find(_v0 => _v0.id === _v0.outElement.elementId),
              _v2 = _v0.composition.find(_v0 => _v0.id === _v0.inElement.elementId);
            if (!_v1 || !_v2) return;
            let {
              isDelete: _v3,
              durationControls: _v4
            } = _v19(_v0, _v1, _v2);
            if (_v3) {
              let _v0 = _v0.id;
              _v1[_v0] || (_v1[_v0] = {
                layerId: _v0,
                elementIds: []
              }), _v1[_v0].elementIds.push(_v0.id);
            } else {
              let _v0,
                _v1 = _v1.compositionTiming.end,
                _v2 = _v1 !== _v0.compositionTiming.start;
              if (_v4) {
                let {
                  transInDuration: _v0,
                  transOutDuration: _v1,
                  overlapDuration: _v2
                } = _v4;
                _v0 = {
                  layerId: _v0.id,
                  ceId: _v0.id,
                  element: {
                    ...(_v2 && {
                      compositionTiming: {
                        start: _v1,
                        end: _v1 + _v6.FRAME_TIMING
                      }
                    }),
                    outElement: {
                      controls: {
                        overlapDuration: _v2,
                        transOutDuration: _v1
                      }
                    },
                    inElement: {
                      controls: {
                        overlapDuration: _v2,
                        transInDuration: _v0
                      }
                    }
                  }
                };
              } else _v2 && (_v0 = {
                layerId: _v0.id,
                ceId: _v0.id,
                element: {
                  compositionTiming: {
                    start: _v1,
                    end: _v1 + _v6.FRAME_TIMING
                  }
                }
              });
              _v0 && _v2.push(_v0);
            }
          });
        }), _v20(_v2, _v1, _v2);
      }
    }
  }), _v18.startListening({
    matcher: (0, _v1.isAnyOf)(_v17.splitElementsAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getState: _v3
        } = _v1,
        {
          splitMap: _v4
        } = _v0.payload,
        _v5 = _v3().storyboard.layers,
        _v6 = {},
        _v7 = [];
      _v4.forEach(_v0 => {
        let {
            ceId: _v1,
            layerId: _v2,
            leftSplitElement: _v3,
            rightSplitElement: _v4
          } = _v0,
          _v5 = _v5.findIndex(_v0 => _v0.id === _v2),
          _v6 = _v5[_v5];
        if (!_v6) return;
        let _v7 = (0, _v12.getTransitionsForElementInLayer)(_v6, _v1);
        0 !== _v7.length && _v7.forEach(_v0 => {
          let {
            transitionElement: _v1,
            isIn: _v2,
            isOut: _v3
          } = _v0;
          if (_v2) {
            let _v0 = _v6.composition.find(_v0 => _v0.id === _v1.outElement.elementId);
            if (!_v0) return;
            let {
              isDelete: _v1,
              durationControls: _v2
            } = _v19(_v1, _v0, _v3);
            if (_v1) {
              let _v0 = _v6.id;
              _v6[_v0] || (_v6[_v0] = {
                layerId: _v0,
                elementIds: []
              }), _v6[_v0].elementIds.push(_v1.id);
            } else _v2 ? _v7.push({
              layerId: _v6.id,
              ceId: _v1.id,
              element: {
                inElement: {
                  elementId: _v3.id,
                  controls: {
                    transInDuration: _v2.transInDuration,
                    overlapDuration: _v2.overlapDuration
                  }
                },
                outElement: {
                  controls: {
                    transOutDuration: _v2.transOutDuration,
                    overlapDuration: _v2.overlapDuration
                  }
                }
              }
            }) : _v7.push({
              layerId: _v6.id,
              ceId: _v1.id,
              element: {
                inElement: {
                  elementId: _v3.id
                }
              }
            });
          }
          if (_v3) {
            let _v0 = _v6.composition.find(_v0 => _v0.id === _v1.inElement.elementId);
            if (!_v0) return;
            let {
              isDelete: _v1,
              durationControls: _v2
            } = _v19(_v1, _v4, _v0);
            if (_v1) {
              let _v0 = _v6.id;
              _v6[_v0] || (_v6[_v0] = {
                layerId: _v0,
                elementIds: []
              }), _v6[_v0].elementIds.push(_v1.id);
            } else _v2 ? _v7.push({
              layerId: _v6.id,
              ceId: _v1.id,
              element: {
                outElement: {
                  elementId: _v4.id,
                  controls: {
                    transOutDuration: _v2.transOutDuration,
                    overlapDuration: _v2.overlapDuration
                  }
                },
                inElement: {
                  controls: {
                    transInDuration: _v2.transInDuration,
                    overlapDuration: _v2.overlapDuration
                  }
                }
              }
            }) : _v7.push({
              layerId: _v6.id,
              ceId: _v1.id,
              element: {
                outElement: {
                  elementId: _v4.id
                }
              }
            });
          }
        });
      }), _v20(_v2, _v6, _v7);
    }
  }), _v18.startListening({
    matcher: (0, _v1.isAnyOf)(_v17.deleteElementAction, _v17.deleteCompositionElementAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getOriginalState: _v3
        } = _v1,
        {
          ceId: _v4
        } = _v0.payload,
        _v5 = _v3().storyboard.layers,
        _v6 = (0, _v11.getLayerDataByCeId)(_v4, _v5).layer;
      if (!_v6) return;
      let _v7 = (0, _v12.getTransitionsForElementInLayer)(_v6, _v4);
      if (0 === _v7.length) return;
      let _v8 = {};
      _v7.forEach(_v0 => {
        let _v1 = _v6.id,
          {
            transitionElement: _v2
          } = _v0;
        _v8[_v1] || (_v8[_v1] = {
          layerId: _v1,
          elementIds: []
        }), _v8[_v1].elementIds.push(_v2.id);
      }), _v20(_v2, _v8, [], !1, "storyboard/deleteCompositionElementAction" === _v0.type);
    }
  }), _v18.startListening({
    matcher: (0, _v1.isAnyOf)(_v17.replaceElementAction, _v17.updateElementAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getState: _v3
        } = _v1,
        {
          ceId: _v4,
          isTransitionElement: _v5
        } = _v0.payload,
        _v6 = _v0.payload.element;
      if (_v5) return;
      let _v7 = _v3().storyboard.layers,
        _v8 = (0, _v11.getLayerDataByCeId)(_v4, _v7).layer;
      if (!_v8) return;
      let _v9 = _v8.composition.find(_v0 => _v0.id === _v4);
      if ("storyboard/replaceElementAction" === _v0.type && !(0, _v10.isMediaElement)(_v9)) {
        let _v0 = (0, _v12.getTransitionsForElementInLayer)(_v8, _v4);
        if (0 === _v0.length) return;
        let _v1 = {};
        _v0.forEach(_v0 => {
          let _v1 = _v8.id,
            {
              transitionElement: _v2
            } = _v0;
          _v1[_v1] || (_v1[_v1] = {
            layerId: _v1,
            elementIds: []
          }), _v1[_v1].elementIds.push(_v2.id);
        }), _v20(_v2, _v1, []);
      }
      if ((0, _v10.isMediaElement)(_v9) && (0, _v2.default)(_v9, "compositionTiming")) {
        let _v0 = (0, _v12.getTransitionsForElementInLayer)(_v8, _v4);
        if (0 === _v0.length) return;
        let _v1 = {},
          _v2 = [],
          _v3 = !1;
        _v0.forEach(_v0 => {
          let {
              transitionElement: _v1
            } = _v0,
            _v2 = _v8.composition.find(_v0 => _v0.id === _v1.outElement.elementId),
            _v3 = _v8.composition.find(_v0 => _v0.id === _v1.inElement.elementId);
          if (!_v2 || !_v3) return;
          let {
            isDelete: _v4,
            durationControls: _v5
          } = _v19(_v1, _v2, _v3);
          if (_v3 && _v3.id === _v4 && _v6?.animationName && _v6.animationName !== _v4.AnimationType.NONE && (_v3 = !0), _v4 || _v3) {
            let _v0 = _v8.id;
            _v1[_v0] || (_v1[_v0] = {
              layerId: _v0,
              elementIds: []
            }), _v1[_v0].elementIds.push(_v1.id);
          } else {
            let _v0,
              _v1 = _v2.compositionTiming.end,
              _v2 = _v1 !== _v1.compositionTiming.start;
            if (_v5) {
              let {
                transInDuration: _v0,
                transOutDuration: _v1,
                overlapDuration: _v2
              } = _v5;
              _v0 = {
                layerId: _v8.id,
                ceId: _v1.id,
                element: {
                  ...(_v2 && {
                    compositionTiming: {
                      start: _v1,
                      end: _v1 + _v6.FRAME_TIMING
                    }
                  }),
                  outElement: {
                    controls: {
                      overlapDuration: _v2,
                      transOutDuration: _v1
                    }
                  },
                  inElement: {
                    controls: {
                      overlapDuration: _v2,
                      transInDuration: _v0
                    }
                  }
                }
              };
            } else _v2 && (_v0 = {
              layerId: _v8.id,
              ceId: _v1.id,
              element: {
                compositionTiming: {
                  start: _v1,
                  end: _v1 + _v6.FRAME_TIMING
                }
              }
            });
            _v0 && _v2.push(_v0);
          }
        }), _v20(_v2, _v1, _v2, _v3);
      }
    }
  }), _v18.startListening({
    matcher: (0, _v1.isAnyOf)(_v17.addElementsToLayersWithOffsetMapAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getState: _v3
        } = _v1,
        {
          elementsBeforeChangeForDelete: _v4 = {}
        } = _v0.payload,
        _v5 = _v3().storyboard.layers,
        _v6 = {},
        _v7 = {},
        _v8 = {},
        _v9 = [];
      Object.keys(_v4).forEach(_v0 => {
        let _v1 = _v5.findIndex(_v0 => _v0.id === _v0),
          _v2 = _v5[_v1];
        _v2 && _v4[_v0].elements.filter(_v0 => (0, _v10.isMediaElement)(_v0)).forEach(_v0 => {
          let _v1 = _v0.id;
          (0, _v12.getTransitionsForElementInLayer)(_v2, _v1).forEach(_v0 => {
            let {
              transitionElement: _v1
            } = _v0;
            _v7[_v0] || (_v7[_v0] = {
              layerId: _v0,
              elementIds: []
            }), _v7[_v0].elementIds.push(_v1.id), _v6[_v1.id] = _v1;
          });
        });
      }), Object.values(_v7).forEach(_v0 => {
        let {
          layerId: _v1,
          elementIds: _v2
        } = _v0;
        (0, _v3.default)(_v2).forEach(_v0 => {
          let _v1 = JSON.parse(JSON.stringify(_v6[_v0])),
            _v2 = _v1.outElement.elementId,
            _v3 = _v1.inElement.elementId,
            _v4 = (0, _v11.getLayerDataByCeId)(_v2, _v5).layer,
            _v5 = (0, _v11.getLayerDataByCeId)(_v3, _v5).layer;
          if (_v4 && _v5 && _v4?.id === _v5?.id) {
            let _v0 = _v4.composition.find(_v0 => _v0.id === _v2),
              _v1 = _v5.composition.find(_v0 => _v0.id === _v3);
            _v0 && _v1 && _v0.compositionTiming.end === _v1.compositionTiming.start && (_v7[_v1].elementIds = _v7[_v1].elementIds.filter(_v0 => _v0 !== _v0), 0 === _v7[_v1].elementIds.length && delete _v7[_v1], _v8[_v1] || (_v8[_v1] = {
              layerId: _v1,
              elementIds: []
            }), _v8[_v1].elementIds.push(_v1.id), _v1.compositionTiming = {
              start: _v0.compositionTiming.end,
              end: _v0.compositionTiming.end + _v6.FRAME_TIMING
            }, _v9.push({
              layerId: _v4.id,
              element: _v1
            }));
          }
        });
      }), _v20(_v2, _v7, []), _v2((0, _v17.deleteElementsAction)({
        deletionMap: Object.values(_v8),
        isIgnoreUndo: !0,
        isDeleteEmptyLayers: !0
      })), _v9.forEach(({
        layerId: _v0,
        element: _v1
      }) => {
        _v2((0, _v17.addTransitionElementAction)({
          layerId: _v0,
          element: _v1,
          isIgnoreUndo: !0
        }));
      });
    }
  }), _v18.startListening({
    matcher: (0, _v1.isAnyOf)(_v17.changeElementLayerByOffsetAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getOriginalState: _v3
        } = _v1,
        {
          ceIds: _v4
        } = _v0.payload,
        _v5 = _v3().storyboard.layers,
        _v6 = {};
      _v4.forEach(_v0 => {
        let _v1 = (0, _v11.getLayerDataByCeId)(_v0, _v5);
        if (!_v1) return;
        let {
          layer: _v2
        } = _v1;
        if (!_v2) return;
        let _v3 = (0, _v12.getTransitionsForElementInLayer)(_v2, _v0);
        _v3.length > 0 && (_v6[_v2.id] || (_v6[_v2.id] = {
          layerId: _v2.id,
          elementIds: []
        }), _v3.forEach(_v0 => {
          _v6[_v2.id].elementIds.push(_v0.transitionElement.id);
        }));
      }), _v20(_v2, _v6, []);
    }
  }), _v18.startListening({
    matcher: (0, _v1.isAnyOf)(_v17.bulkRemoveTranscriptItemsAction, _v17.deleteTranscriptSelectionAction, _v17.updateLayerWithBulkChangesAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getState: _v3,
          getOriginalState: _v4
        } = _v1,
        _v5 = _v3(),
        _v6 = _v4().storyboard.layers.reduce((_v0, _v1) => (_v1.composition.forEach(_v0 => {
          (0, _v10.isTransitionElement)(_v0) && (_v0[_v0.id] = {
            layerId: _v1.id,
            transition: _v0
          });
        }), _v0), {}),
        _v7 = _v5.storyboard.layers.reduce((_v0, _v1) => (_v1.composition.forEach(_v0 => {
          let {
            id: _v1,
            compositionTiming: _v2
          } = _v0;
          (0, _v10.isTransitionElement)(_v0) || (_v0[_v1] = {
            layerId: _v1.id,
            compositionTiming: _v2
          });
        }), _v0), {}),
        _v8 = {};
      Object.values(_v6).forEach(({
        transition: _v0,
        layerId: _v1
      }) => {
        let {
            inElement: {
              elementId: _v2
            },
            outElement: {
              elementId: _v3
            }
          } = _v0,
          _v4 = _v7[_v2],
          _v5 = !_v4,
          _v6 = !_v5 && _v4.compositionTiming && _v4.compositionTiming?.end - _v4.compositionTiming?.start < _v7.MIN_TRANSITION_ELEMENT_DURATION,
          _v7 = _v7[_v3],
          _v8 = !_v7,
          _v9 = !_v8 && _v7.compositionTiming && _v7.compositionTiming?.end - _v7.compositionTiming?.start < _v7.MIN_TRANSITION_ELEMENT_DURATION;
        (_v5 || _v8 || _v6 || _v9) && (_v8[_v1] || (_v8[_v1] = {
          layerId: _v1,
          elementIds: []
        }), _v8[_v1].elementIds.push(_v0.id));
      }), _v20(_v2, _v8, []);
    }
  });
  let _v21 = _v18.middleware;
  _v0.s(["default", 0, _v21], 0);
}