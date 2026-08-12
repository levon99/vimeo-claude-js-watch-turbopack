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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  _v0.s(["default", 0, () => {
    let _v0 = (0, _v18.useAppDispatch)(),
      _v1 = (0, _v18.useAppSelector)(_v17.selectedTransitionsIdsSelector),
      _v2 = (0, _v18.useAppSelector)(_v17.firstSelectedTransitionElementSelector),
      _v3 = (0, _v18.useAppSelector)(_v0 => (0, _v14.transitionLinkedElementsSelector)(_v0, _v2)),
      _v4 = (0, _v18.useAppSelector)(_v14.brandColorsSelector),
      _v5 = (0, _v18.useAppSelector)(_v16.overridesWithoutRectSelector, _v2.shallowEqual),
      _v6 = (0, _v1.useRef)(null),
      _v7 = (0, _v1.useRef)(null),
      {
        updateLastUsedTransitionData: _v8,
        getStoryboardMetadata: _v9
      } = (0, _v11.useStoryboardMetadata)(),
      {
        play: _v10,
        pause: _v11,
        seek: _v12,
        DFRef: _v13
      } = (0, _v10.useDragonfly)(),
      {
        data: _v14
      } = (0, _v12.useFetchTransitionLibraryQuery)(),
      _v15 = (0, _v1.useCallback)(_v0 => {
        let _v1 = _v5[_v0.id];
        return _v1?.inElement?.controls?.transInDuration ? (0, _v23.getTransitionDurationFromControls)(_v1) : (0, _v23.getTransitionDurationFromControls)(_v0);
      }, [_v5]),
      _v16 = (0, _v1.useMemo)(() => {
        if (!_v3) return 0;
        let [_v0, _v1] = _v3;
        return _v0 && _v1 ? (0, _v23.getNormalisedDuration)(_v9.MAX_TRANSITION_DURATION, _v0, _v1) : 0;
      }, [_v3]),
      _v17 = (0, _v1.useCallback)((_v0, _v1) => {
        _v0((0, _v17.selectTransitionsAction)({
          elementIds: _v0,
          isMultiSelect: _v1
        }));
      }, [_v0]),
      _v18 = (0, _v1.useCallback)(() => {
        0 !== _v1.length && _v0((0, _v17.resetTransitionSelectionAction)());
      }, [_v0, _v1.length]),
      _v19 = (0, _v1.useCallback)(_v0 => _v1.includes(_v0), [_v1]),
      _v20 = (0, _v1.useCallback)((_v0, _v1) => {
        let {
            userTransitionDurationSelection: _v2
          } = _v9(),
          _v3 = _v2.includes(_v1.id),
          _v4 = 0;
        return _v3 ? (_v4 = (0, _v23.getTransitionDurationFromControls)(_v1), (0, _v23.getNewControlsFromDuration)({
          transInDuration: _v0.metaData.transInDuration,
          transOutDuration: _v0.metaData.transOutDuration,
          overlapDuration: _v0.metaData.overlapDuration
        }, _v4)) : _v0.metaData;
      }, [_v9]),
      _v21 = (0, _v1.useCallback)(() => {
        _v7.current && (_v13.current?.removeEventListener(_v3.EventNames.PAUSE, _v7.current), _v7.current = null), _v6.current && (_v13.current?.removeEventListener(_v3.EventNames.TIME_UPDATE, _v6.current), _v6.current = null);
      }, [_v13]),
      _v22 = (0, _v1.useCallback)(_v0 => {
        if (!_v0) return;
        _v21();
        let _v1 = (0, _v23.getTransitionDurationFromControls)(_v0);
        _v6.current = _v0 => {
          let _v1 = _v0.compositionTiming.start + _v1 / 2;
          (0, _v22.toNearestFrame)(_v0) >= (0, _v22.toNearestFrame)(_v1) && (_v21(), _v11());
        }, _v7.current = _v21, _v13.current?.addEventListener(_v3.EventNames.TIME_UPDATE, _v6.current), _v13.current?.addEventListener(_v3.EventNames.PAUSE, _v7.current), setTimeout(() => {
          _v12(_v0.compositionTiming.start - _v1 / 2), _v10();
        }, 200);
      }, [_v13, _v21, _v11, _v10, _v12]),
      _v23 = (0, _v1.useCallback)((_v0, _v1) => {
        if (!_v14 || !_v14.items) return null;
        let _v2 = _v9().userTransitionGlobalSelection,
          _v3 = _v14.items.find(_v0 => _v2.id ? _v0.id === _v2.id : _v0.name === _v9.DEFAULT_TRANSITION_ON_ADD);
        if (!_v3) return null;
        let _v4 = (0, _v23.createTransitionData)(_v3, _v1, _v0, _v4, _v9().userTransitionGlobalSelection),
          _v5 = {
            id: (0, _v21.createUuidV4)(),
            type: _v6.CompositionElementType.TRANSITION,
            zindex: _v0.zindex,
            rect: _v7.DEFAULT_RECT,
            selectable: !1,
            compositionTiming: {
              start: _v0.compositionTiming.end,
              end: _v0.compositionTiming.end + _v8.FRAME_TIMING
            },
            ..._v4,
            transitionAssetId: _v3.id
          };
        return (0, _v20.isMediaElement)(_v1) && _v1.animationName && _v1.animationName !== _v5.AnimationType.NONE && (_v0((0, _v14.updateElementAction)({
          ceId: _v1.id,
          element: {
            animationName: _v5.AnimationType.NONE
          }
        })), _v0((0, _v15.showNotificationsAction)({
          title: (0, _v4.translate)({
            singular: "Animation replaced by transition",
            dictionary: {
              es: {
                singular: "La animación ha sido reemplazada por una transición"
              },
              "de-DE": {
                singular: "Animation durch Übergang ersetzt"
              },
              "fr-FR": {
                singular: "Animation remplacée par une transition"
              },
              "ja-JP": {
                singular: "アニメーションをトランジションに置き換えました"
              },
              "ko-KR": {
                singular: "애니메이션이 전환 효과로 대체되었습니다."
              },
              "pt-BR": {
                singular: "Animação substituída por transição"
              },
              "zh-CN": {
                singular: "动画被转场效果取代"
              }
            }
          }),
          status: "info"
        }))), _v0((({
          mediaElementId: _v0,
          element: _v1
        }) => (_v0, _v1) => {
          let _v2 = _v1(),
            _v3 = (0, _v14.nonHiddenLayersSelector)(_v2),
            _v4 = (0, _v13.getLayerDataByCeId)(_v0, _v3).layer;
          _v4 && _v0((0, _v14.addTransitionElementAction)({
            layerId: _v4.id,
            element: _v1
          }));
        })({
          mediaElementId: _v0.id,
          element: _v5
        })), _v22(_v5), _v5;
      }, [_v4, _v0, _v9, _v14, _v22]),
      _v24 = (0, _v1.useCallback)(({
        transition: _v0,
        isUserChangedDirection: _v1
      }) => {
        if (!_v2 || !_v3) return;
        let [_v2, _v3] = _v3,
          {
            userTransitionColorSelection: _v4,
            userTransitionGlobalSelection: _v5
          } = _v9();
        if (!_v2 || !_v3) return;
        let {
            transInDuration: _v6,
            transOutDuration: _v7,
            overlapDuration: _v8
          } = _v20(_v0, _v2),
          _v9 = {
            transitionAssetId: _v0.id,
            outElement: {
              ..._v2.outElement,
              overlay: _v0.overlay?.transitionOverlayFile,
              controls: {
                ...(0, _v23.getColorPropertiesForElement)(_v0, _v4, _v2, _v5, _v4[_v2.id]),
                transOutDuration: _v7,
                overlapDuration: _v8,
                outMotionType: _v0.metaData.outMotionType
              }
            },
            inElement: {
              ..._v2.inElement,
              overlay: _v0.overlay?.transitionOverlayFile,
              controls: {
                ...(0, _v23.getColorPropertiesForElement)(_v0, _v4, _v2, _v5, _v4[_v2.id]),
                transInDuration: _v6,
                overlapDuration: _v8,
                inMotionType: _v0.metaData.inMotionType
              }
            }
          },
          _v10 = {
            id: _v0.id
          };
        if (_v1) {
          let _v0 = (0, _v23.getDirectionType)(_v0.direction);
          _v0 && (_v10[_v0] = _v0.direction);
        }
        _v8(_v10, _v2.id), _v0((0, _v14.updateElementAction)({
          isTransitionElement: !0,
          ceId: _v2.id,
          element: _v9
        })), _v22({
          ..._v2,
          ..._v9
        });
      }, [_v2, _v3, _v9, _v20, _v4, _v0, _v22, _v8]),
      _v25 = (0, _v1.useCallback)((_v0, _v1, _v2 = !1, _v3) => {
        let {
          transInDuration: _v4,
          transOutDuration: _v5,
          overlapDuration: _v6
        } = (0, _v23.getNewControlsFromDuration)(_v0, _v1);
        if (_v2) _v0((0, _v16.addOverrideAction)({
          ceId: _v3.id,
          overrides: {
            inElement: {
              controls: {
                transInDuration: _v4,
                overlapDuration: _v6
              }
            },
            outElement: {
              controls: {
                transOutDuration: _v5,
                overlapDuration: _v6
              }
            }
          }
        }));else {
          let _v0 = {
            outElement: {
              ..._v3.outElement,
              controls: {
                ..._v3.outElement.controls,
                overlapDuration: _v6,
                transOutDuration: _v5
              }
            },
            inElement: {
              ..._v3.inElement,
              controls: {
                ..._v3.inElement.controls,
                overlapDuration: _v6,
                transInDuration: _v4
              }
            }
          };
          _v0((0, _v14.updateElementAction)({
            isTransitionElement: !0,
            ceId: _v3.id,
            element: _v0
          }));
        }
      }, [_v0]),
      _v26 = (0, _v1.useCallback)(({
        duration: _v0,
        isUserAction: _v1,
        transitionElement: _v2,
        linkedElements: _v3
      }) => {
        let [_v4, _v5] = _v3;
        if (!_v4 || !_v5) return;
        let _v6 = (0, _v23.getNormalisedDuration)(_v0, _v4, _v5),
          _v7 = _v2.inElement.controls.transInDuration;
        _v25({
          transInDuration: _v7,
          transOutDuration: _v2.outElement.controls.transOutDuration,
          overlapDuration: _v2.outElement.controls.overlapDuration
        }, _v6, !1, _v2), _v1 && _v8({
          duration: _v6
        }, _v2.id);
      }, [_v25, _v8]),
      _v27 = (0, _v1.useCallback)((_v0, _v1, _v2) => {
        let [_v3, _v4] = _v2;
        if (!_v3 || !_v4) return;
        let _v5 = (0, _v23.getNormalisedDuration)(_v0, _v3, _v4),
          _v6 = _v1.inElement.controls.transInDuration;
        _v25({
          transInDuration: _v6,
          transOutDuration: _v1.outElement.controls.transOutDuration,
          overlapDuration: _v1.outElement.controls.overlapDuration
        }, _v5, !0, _v1);
      }, [_v25]),
      _v28 = (0, _v1.useCallback)(({
        primaryColor: _v0,
        secondaryColor: _v1
      }) => {
        if (!_v2) return;
        let _v2 = {
          outElement: {
            controls: {
              ...(_v0 && {
                primaryColor: _v0
              }),
              ...(_v1 && {
                secondaryColor: _v1
              })
            }
          },
          inElement: {
            controls: {
              ...(_v0 && {
                primaryColor: _v0
              }),
              ...(_v1 && {
                secondaryColor: _v1
              })
            }
          }
        };
        _v0((0, _v14.updateElementAction)({
          ceId: _v2.id,
          element: _v2
        })), _v8({
          ...(_v0 && {
            primaryColor: _v0
          }),
          ...(_v1 && {
            secondaryColor: _v1
          })
        }, _v2.id);
      }, [_v0, _v2, _v8]),
      _v29 = (0, _v1.useCallback)(({
        primaryColor: _v0,
        secondaryColor: _v1
      }) => {
        _v2 && _v0((0, _v16.addOverrideAction)({
          ceId: _v2.id,
          overrides: {
            outElement: {
              controls: {
                ...(_v0 && {
                  primaryColor: _v0
                }),
                ...(_v1 && {
                  secondaryColor: _v1
                })
              }
            },
            inElement: {
              controls: {
                ...(_v0 && {
                  primaryColor: _v0
                }),
                ...(_v1 && {
                  secondaryColor: _v1
                })
              }
            }
          }
        }));
      }, [_v0, _v2]),
      _v30 = (0, _v1.useCallback)(() => {
        _v2 && (_v0((0, _v14.deleteElementAction)({
          ceId: _v2.id
        })), _v18(), (0, _v19.trackDeleteTimelineElement)(_v2.id));
      }, [_v0, _v18, _v2]);
    return {
      transitionsLibraryData: _v14,
      selectedTransition: _v2,
      playTransitionPreviewOnStage: _v22,
      selectTransitions: _v17,
      resetTransitionSelection: _v18,
      isTransitionSelected: _v19,
      maxDurationForSelected: _v16,
      getInterpolatedDuration: _v15,
      createTransitionElement: _v23,
      updateTransitionElementForDirection: _v24,
      updateTransitionElementDuration: _v26,
      updateTransitionElementDurationOverride: _v27,
      updateTransitionElementColors: _v28,
      updateTransitionElementColorsOverride: _v29,
      deleteSelectedTransitionElement: _v30,
      updateLastUsedTransitionData: _v8,
      userTransitionGlobalSelection: _v9().userTransitionGlobalSelection
    };
  }], 0);
}