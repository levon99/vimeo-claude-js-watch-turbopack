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
    _v34 = _v0.i(0);
  _v0.s(["useScorecardOverlay", 0, () => {
    let {
        addElement: _v0
      } = (0, _v28.useAddElement)(),
      _v1 = (0, _v20.useAppDispatch)(),
      _v2 = (0, _v20.useAppSelector)(_v17.storyboardIdSelector),
      _v3 = (0, _v20.useAppSelector)(_v17.scorecardOverlaySelector),
      _v4 = (0, _v20.useAppSelector)(_v18.scorecardTimeTriggerSelector),
      _v5 = (0, _v20.useAppSelector)(_v17.quizLogoUriSelector),
      _v6 = (0, _v20.useAppSelector)(_v17.quizShowLogoSelector),
      {
        createTimeTrigger: _v7
      } = (0, _v34.useTimeTrigger)(),
      _v8 = (0, _v20.useAppSelector)(_v17.quizRetakesAmountSelector),
      _v9 = (0, _v20.useAppSelector)(_v15.isEditingInteractiveOverlaySelector),
      _v10 = (0, _v20.useAppSelector)(_v15.hasUnsavedOverlayChangesSelector),
      _v11 = (0, _v20.useAppSelector)(_v17.scorecardLogoCompositionSelector),
      _v12 = (0, _v20.useAppSelector)(_v17.orientationSelector),
      _v13 = (0, _v20.useAppSelector)(_v17.orientationSelector),
      {
        toHotspotElement: _v14
      } = (0, _v32.useHotspot)(),
      {
        alertCannotAddLogo: _v15,
        alertDiscardOrSaveOverlayChanges: _v16
      } = (0, _v29.useAlerts)(),
      {
        closeOverlayEditor: _v17
      } = (0, _v33.useInteractiveOverlay)(),
      {
        toggleInspector: _v18
      } = (0, _v31.useInspector)(),
      {
        seek: _v19
      } = (0, _v12.useDragonfly)(),
      {
        createLogoImageElementAndSource: _v20
      } = (0, _v30.useBrandKits)(),
      [_v21] = (0, _v14.useLazyGetBrandKitsLogosQuery)(),
      _v22 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = await _v21().unwrap();
        if (!_v1 || 0 === _v1.length) return null;
        let _v2 = _v0 ?? _v5;
        if (_v2) {
          let _v0 = (0, _v7.extractIdsFromLogoUri)(_v2);
          if (!(_v0?.kitUuid && _v0?.logoId)) return null;
          let _v1 = _v1.find(_v0 => _v0.id === _v0?.kitUuid);
          if (_v1) {
            let _v0 = _v1.logos.find(_v0 => _v0.uri === _v2);
            if (_v0) return _v0;
          }
        }
        return _v1?.[0].logos?.[0] ?? null;
      }, [_v21, _v5]),
      _v23 = async _v0 => {
        if ((0, _v17.scorecardOverlaySelector)(_v19.default.getState())) try {
          let _v0 = await _v20(_v0);
          if (!_v0?.element || !_v0?.source) throw Error("Failed to create logo image element");
          let {
              element: _v1,
              source: _v2
            } = _v0,
            _v3 = {
              ..._v14({
                imageElement: {
                  ..._v1,
                  zindex: 0
                },
                interactiveHotspot: {
                  name: _v11.SCORECARD_LOGO_HOTSPOT_NAME,
                  altText: (0, _v3.translate)({
                    singular: "Logo",
                    dictionary: {
                      "ja-JP": {
                        singular: "ロゴ"
                      },
                      "ko-KR": {
                        singular: "로고"
                      },
                      "zh-CN": {
                        singular: "徽标"
                      }
                    }
                  }),
                  action: {
                    type: _v4.HotspotActionType.NONE
                  },
                  hover: {
                    zoom: 1
                  }
                }
              }),
              bgAlpha: 100 * !!_v6,
              rect: (0, _v24.getLogoRectByOrientation)(_v2, _v13),
              compositionTiming: {
                start: 0,
                end: _v9.DEFAULT_OVERLAY_DURATION
              }
            },
            _v4 = (0, _v17.scorecardOverlaySelector)(_v19.default.getState());
          if (!_v4) return;
          let _v5 = structuredClone(_v4);
          if (_v11) {
            let {
              layerIndex: _v0
            } = (0, _v26.getElementByIdFromLayers)(_v11.id, _v5.interactiveLayers);
            _v5.interactiveLayers.splice(_v0, 1);
          }
          return (0, _v25.safeInsertLayers)({
            insertIndex: 1 / 0,
            layers: _v5.interactiveLayers,
            newLayers: [(0, _v26.createLayer)([_v3])]
          }), _v1((0, _v17.updateInteractiveOverlayAction)({
            overlay: _v5,
            isIgnoreUndo: !0
          })), {
            logoElement: _v3,
            logoSource: _v2
          };
        } catch (_v0) {
          console.error("Error while creating logo element:", _v0), _v13.default.sendLog(_v8.FAILED_TO_CREATE_ELEMENT_FROM_LOGO, _v22.LogComponent.INTERACTIVE_ERROR, {
            storyboard_id: _v2,
            logoId: _v0.id,
            logoUri: _v0.uri
          }), _v15();
        }
      },
      _v24 = (0, _v1.useCallback)((_v0, _v1) => {
        _v1((0, _v16.selectCEsAction)({
          ceIds: [_v1]
        })), _v18(_v21.InspectorType.SCORECARD), _v19(_v0);
      }, [_v1, _v19, _v18]),
      _v25 = () => {
        let _v0,
          _v1,
          _v2,
          _v3 = (_v0 = _v19.default.getState(), _v1 = (0, _v27.toNearestFrame)((0, _v17.durationSelector)(_v0) - _v10.SCORECARD_TRIGGER_TIME_FROM_END), _v2 = (0, _v17.scorecardOverlayIdSelector)(_v0), _v7({
            type: _v6.TimeTriggerActionType.SHOW_OVERLAY,
            time: _v1,
            overlayId: _v2
          }));
        return _v0(_v3, {
          copy: _v11.SCORECARD_OVERLAY_NAME,
          isIgnoreUndo: !0,
          preventOverlayCompositionTiming: !0
        }), _v1((0, _v17.updateScorecardRetakesLeftTextThunkAction)(_v8)), _v3;
      },
      _v26 = _v0 => {
        _v10 ? _v16({
          onPrimaryClick: () => {
            _v17({
              saveChanges: !0,
              afterCloseCallback: _v0
            });
          },
          onSecondaryClick: () => {
            _v17({
              saveChanges: !1,
              afterCloseCallback: _v0
            });
          }
        }) : _v17({
          saveChanges: !1,
          afterCloseCallback: _v0
        });
      },
      _v27 = _v0 => {
        _v22(_v0).then(_v0 => {
          _v0 && _v5 !== _v0.uri && _v23(_v0);
        });
      };
    return {
      selectScorecard: async () => {
        if (!_v4) return;
        _v11 || _v27();
        let _v0 = _v4.compositionTiming.start;
        _v9 ? _v26(() => _v24(_v0, _v4.id)) : _v24(_v0, _v4.id);
      },
      addScorecard: () => {
        let _v0, _v1;
        if (_v3 || (_v0 = [(0, _v26.createLayer)([(0, _v24.createTitleElement)(_v12)], _v5.LayerType.VISUAL), (0, _v26.createLayer)([(0, _v24.createDescriptionElement)(_v12)], _v5.LayerType.VISUAL), (0, _v26.createLayer)([(0, _v24.createRetakeButtonElement)(_v12)], _v5.LayerType.VISUAL)], _v8 !== _v10.UNLIMITED_RETAKES_VALUE && _v0.push((0, _v26.createLayer)([(0, _v24.createRetakesLeftTextElement)(_v12)], _v5.LayerType.VISUAL)), _v1 = {
          id: (0, _v23.createUuidV4)(),
          name: _v11.SCORECARD_OVERLAY_NAME,
          analyticsId: (0, _v23.generateRandomUInt32Id)(),
          onEndAction: _v9.OVERLAY_ON_END_DEFAULT,
          closeAfter: -1,
          interactiveLayers: (0, _v25.alignZIndices)([(0, _v26.createLayer)([(0, _v24.createBackgroundElement)()], _v5.LayerType.VISUAL), ..._v0])
        }, (0, _v2.batch)(() => {
          _v1((0, _v17.addInteractiveOverlayAction)({
            overlay: _v1
          })), _v1((0, _v17.updateInteractiveQuizAction)({
            scorecardOverlayIds: [_v1.id]
          }));
        })), _v4) return;
        if (_v9) return void _v26(() => {
          let _v0 = _v25();
          _v24(_v0.compositionTiming.start, _v0.id);
        });
        let _v2 = _v25();
        _v24(_v2.compositionTiming.start, _v2.id), _v11 || _v27();
      },
      updateBrandKitLogo: _v27
    };
  }]);
}